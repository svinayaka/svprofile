import { Action, createReducer, on, State } from '@ngrx/store';
import { LoadUserInfos, LoadUserInfosSuccess, UserInfoActions, UserInfoActionTypes } from './user-info.actions';

export const userInfoFeatureKey = 'userInfo';

export interface IState {
  userInfo: Array<any>;
}

const userProfile = { userInfo: {} };

export function userProfileReducer(state = userProfile, action) {
  switch (action.type) {
    case UserInfoActionTypes.LoadUserInfosSuccess :
      return {...state, userInfo: action.payload};
    default:
      return state;
  }
}
