import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cfas-impress',
  templateUrl: './impress.component.html',
  styleUrls: ['./impress.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImpressComponent implements OnInit {
  selectedIndex: number;
  tabLabels = [
    {
      name: 'Impressum',
      link: 'impress'
    },
    {
      name: 'Datenschutz',
      link: 'dataprotection'
    }
  ];

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.selectedIndex = this.tabLabels.findIndex(label => label.link === this.route.snapshot.data.tab);
  }

  set selectedTab(selectedIndex: number) {
    this.location.go('/' + this.tabLabels[selectedIndex].link);
    this.selectedIndex = selectedIndex;
  }

  get selectedTab(): number {
    return this.selectedIndex;
  }
}
