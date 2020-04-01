import { Injectable } from '@angular/core';
import * as dictonaryDTO from '../../../../assets/dynamic/data/dictionary.json';
import { DictionaryItem } from '../../../models/dictionary-item';

let dictionary: DictionaryItem[] = dictonaryDTO.dictionaryItems;

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  get dictionary(): DictionaryItem[] {
    return dictionary;
  }
}
