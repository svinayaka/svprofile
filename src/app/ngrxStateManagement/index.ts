import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { userProfileReducer } from './profileInformation/userInfo/user-info.reducer';
import { userSkillReducer } from './profileInformation/userSkill/user-skill.reducer';


export interface IState { }

export const reducers: ActionReducerMap<IState> = {
  ProfileInformation: userProfileReducer,
  ProfileSkill: userSkillReducer
};


export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
