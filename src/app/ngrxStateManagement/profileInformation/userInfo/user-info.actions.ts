import { Action } from '@ngrx/store';

export enum UserInfoActionTypes {
  LoadUserInfos = '[UserInfo] Load UserInfos',
  LoadUserInfosSuccess = '[UserInfo] Load UserInfos Success',
  LoadUserInfosFailure = '[UserInfo] Load UserInfos Failure',
}

export class LoadUserInfos implements Action {
  readonly type = UserInfoActionTypes.LoadUserInfos;
}

export class LoadUserInfosSuccess implements Action {
  readonly type = UserInfoActionTypes.LoadUserInfosSuccess;
  constructor(public payload) { }
}

export class LoadUserInfosFailure implements Action {
  readonly type = UserInfoActionTypes.LoadUserInfosFailure;
  constructor(public payload) { }
}

export type UserInfoActions = LoadUserInfos | LoadUserInfosSuccess | LoadUserInfosFailure;

