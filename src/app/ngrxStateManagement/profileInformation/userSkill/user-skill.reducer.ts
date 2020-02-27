import { UserSkillActionTypes, LoadUserSkill } from './user-skill.actions';


export const userSkillInformation = 'userSkill';

const userSkill = { userSkill: {} };

export function userSkillReducer(state = userSkill, action) {
  switch (action.type) {
    case UserSkillActionTypes.LoadUserSkillSuccessfully:
      return { ...state, userSkill: action.payload };
    default:
      return state;
  }
}
