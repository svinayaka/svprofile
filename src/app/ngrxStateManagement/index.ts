import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { userProfileReducer } from './profileInformation/userInfo/user-info.reducer';


export interface IState { }

export const reducers: ActionReducerMap<IState> = {
  ProfileInformation: userProfileReducer
};


export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
