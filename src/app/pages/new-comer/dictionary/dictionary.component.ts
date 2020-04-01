import { DictionaryItem } from 'src/app/pages/new-comer/dictionary/dictionary-item';
import { DictionaryService } from 'src/app/pages/new-comer/dictionary/dictionary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  dictionary: DictionaryItem[];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.dictionary = this.dictionaryService.dictionary;
  }

}
