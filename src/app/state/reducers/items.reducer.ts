import {createReducer, on} from '@ngrx/store';
import {loadedItems, loadItems} from '../actions/items.actions';
import {ItemState} from '@core/models/Item.state';


export const initialState: ItemState = {loading: false, items: [] }

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return {... state, loading: true}
  }),
  on(loadedItems, (state, {items}) => {
    return {... state, loading: false, items}
  })
)
