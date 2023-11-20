import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_COOKIE,
  REMOVE_COOKIE,
  ADD_GROUP,
  CREATE_ACCOUNT_SUCCESS,
  UPDATE_PROFILE,
  LOGOUT,
} from '../constants/account';

export function addGroup(group) {
  return {
    type: ADD_GROUP,
    payload: group,
  };
}

export function createAccountSuccess() {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function updateProfile() {
  return {
    type: UPDATE_PROFILE,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function setCookie() {
  return {
    type: SET_COOKIE,
  };
}

export function removeCookie() {
  return {
    type: REMOVE_COOKIE,
  };
}
