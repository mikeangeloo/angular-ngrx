import {createAction, props} from '@ngrx/store';
import {ItemModel} from '@core/models/Item.interface';

export const loadItems = createAction(
  '[Item List] Load items' // type
);

export const loadedItems = createAction(
  '[Item list] Loaded success', // type
  props<{items: ItemModel[]}>()
);
