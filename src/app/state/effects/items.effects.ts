import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ShowCaseService} from '@modules/show-case/services/show-case.service';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType('[Item List] Load items'),
    mergeMap(() => this.showCaseServ.getDataApi()
      .pipe(
        map(items => ({type: '[Item list] Loaded success', items: items})),
        catchError(() => EMPTY)
      )
    )
  ));
  constructor(
    private actions$: Actions,
    private showCaseServ: ShowCaseService
  ) {
  }
}
