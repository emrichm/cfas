import { Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { DictionaryItem } from 'src/app/pages/new-comer/dictionary/dictionary-item';
import { DictionaryService } from 'src/app/pages/new-comer/dictionary/dictionary.service';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cfas-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DictionaryComponent implements OnInit, OnDestroy {
  dictionary: DictionaryItem[];
  filteredDictionary: DictionaryItem[];
  query: string;
  unsubscribeAll = new Subject();

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.dictionaryService.dictionary
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(dictionary => this.dictionary = dictionary);
    this.filter();
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
  }

  filter() {
    this.filteredDictionary = this.query ?
      this.dictionary.filter(dictionaryItem =>
        dictionaryItem.term.toLowerCase().includes(this.query.toLowerCase()) ||
        dictionaryItem.description.some(line => line.toLowerCase().includes(this.query.toLowerCase()))
      ) :
      this.dictionary;
  }

  reset(searchBox: HTMLInputElement) {
    this.query = '';
    this.filter();
    searchBox.focus();
  }
}
