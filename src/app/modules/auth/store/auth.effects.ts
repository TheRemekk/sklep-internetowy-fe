import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../core/services/auth.service';
import * as AuthActions from './auth.actions';
import { catchError, EMPTY, map, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) => {
        return this.authService.login(action.loginData).pipe(
          map((user) => {
            this.router.navigate(['/']);
            this.notifierService.notify('success', 'Poprawnie zalogowano się!');
            return AuthActions.loginSuccess({ user: { ...user } });
          }),
          catchError((err) => of(AuthActions.loginFailure({ error: err })))
        );
      })
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => {
        return this.authService.logout().pipe(
          map(() => {
            this.router.navigate(['/logowanie']);
            this.notifierService.notify('success', 'Wylogowano się.');
            return AuthActions.logoutSuccess();
          }),
          catchError((err) => {
            this.notifierService.notify('warning', err);
            return of(AuthActions.logoutFailure());
          })
        );
      })
    );
  });

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((action) => {
        return this.authService.register(action.registerData).pipe(
          map((user) => {
            this.router.navigate(['/logowanie']);
            this.notifierService.notify(
              'success',
              'Poprawnie utworzono konto użytkownika! Aktywuj konto na podanym adresie e-mail.'
            );
            return AuthActions.registerSuccess();
          }),
          catchError((err) => {
            return of(AuthActions.loginFailure({ error: err }));
          })
        );
      })
    );
  });

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.autoLogin),
      switchMap(() => {
        return this.authService.autoLogin().pipe(
          map((user) => {
            return AuthActions.autoLoginSuccess({ user: { ...user } });
          }),
          catchError((err) => of(AuthActions.autoLoginFailure()))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private notifierService: NotifierService
  ) {}
}
