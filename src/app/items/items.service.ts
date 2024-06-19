import { Inject, Injectable } from '@angular/core';
import ITEMS_LIST from '../../../public/data/items.json';


@Injectable({ providedIn: 'root' }) 
export class ItemService {
  
  public itemList: object[] = ITEMS_LIST;

  constructor() {
    const itemList = localStorage.getItem('itemList');
    if (itemList) {
      this.itemList = JSON.parse(itemList);
    }
  }
}


export const OTHER_ITEMS = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]