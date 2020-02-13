import { Action } from '@ngrx/store';


export enum UserSkillActionTypes {
    InitiateLoadUserSkill = 'Loading Profile Skills',
    LoadUserSkill = 'Load Profile Skills',
    LoadUserSkillSuccessfully = 'Loaded Profile Skills',
    LoadUserSkillFailure = 'Error Profile Skills'
}

export class InitiateLoadUserSkill implements Action {
    readonly type = UserSkillActionTypes.InitiateLoadUserSkill;
    constructor(public payload) {  }
}

export class LoadUserSkill implements Action {
    readonly type = UserSkillActionTypes.LoadUserSkill;
    constructor(public payload) {  }
}

export class LoadUserSkillSuccessfully implements Action {
    readonly type = UserSkillActionTypes.LoadUserSkillSuccessfully;
    constructor(public payload) {  }
}

export class LoadUserSkillFailure implements Action {
    readonly type = UserSkillActionTypes.LoadUserSkillFailure;
    constructor(public payload) {  }
}