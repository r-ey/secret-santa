import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_COOKIE,
  REMOVE_COOKIE,
  // LOGOUT__REQUEST,
  // LOGOUT__SUCCESS,
  // LOGOUT__FAILURE,
  // CREATE_ACCOUNT__REQUEST,
  // CREATE_ACCOUNT__SUCCESS,
  // CREATE_ACCOUNT__FAILURE,
  // GET_PROFILE__REQUEST,
  // GET_PROFILE__SUCCESS,
  // GET_PROFILE__FAILURE,
  // UPDATE_PROFILE__REQUEST,
  // UPDATE_PROFILE__SUCCESS,
  // UPDATE_PROFILE__FAILURE,
  // DELETE_PROFILE__REQUEST,
  // DELETE_PROFILE__SUCCESS,
  // DELETE_PROFILE__FAILURE,
} from '../constants/account';

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
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
