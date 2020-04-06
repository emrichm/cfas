import { GdprService } from 'src/app/shared/services/gdpr.service';
import { ScriptLoaderService } from 'src/app/shared/utils/script-loader.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cfas-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShopComponent implements OnInit {
  ngOnInit() {
    ScriptLoaderService.loadScript('https://shop.spreadshirt.de/shopfiles/shopclient/shopclient.nocache.js');
  }
}
