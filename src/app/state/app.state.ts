import {ItemState} from '@core/models/Item.state';
import {ActionReducerMap} from '@ngrx/store';
import {itemsReducer} from './reducers/items.reducer';

export interface AppState
{
  items: ItemState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items: itemsReducer
}
