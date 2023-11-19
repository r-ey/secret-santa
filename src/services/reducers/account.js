import {
  // LOGIN__REQUEST,
  // LOGIN__SUCCESS,
  // LOGIN__FAILURE,
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

const initialState = {
  accountData: {},
  cookie: false,
};

// eslint-disable-next-line default-param-last
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COOKIE:
      return {
        ...state,
        cookie: true,
      };
    case REMOVE_COOKIE:
      return {
        ...state,
        cookie: false,
      };
    default:
      return state;
  }
}
