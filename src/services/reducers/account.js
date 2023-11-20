import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_COOKIE,
  REMOVE_COOKIE,
  ADD_GROUP,
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
  accountData: {
    id: 34,
    username: 'Sara',
    password: 'password789',
    email: 'sarajenkins@gmail.com',
    groups: [
      {
        name: 'office-mates',
        budget: 50,
        people: [
          {
            name: 'Sara',
            email: 'sara@example.com',
            preferences: 'Enjoys reading and gardening',
          },
          {
            name: 'Alex',
            email: 'alex123@example.com',
            preferences: 'Fan of sci-fi movies and board games',
          },
          {
            name: 'Rita',
            email: 'rita_office@example.com',
            preferences: 'Loves baking and painting',
          },
          {
            name: 'Daniel',
            email: 'daniel_work@example.com',
            preferences: 'Enthusiast of hiking and photography',
          },
        ],
      },
      {
        name: 'family',
        budget: 75,
        people: [
          {
            name: 'Sara',
            email: 'sara@example.com',
            preferences: 'Loves cooking and travel',
          },
          {
            name: 'Mike',
            email: 'mike_family@example.com',
            preferences: 'Interested in sports and technology',
          },
          {
            name: 'Jenny',
            email: 'jenny@example.com',
            preferences: 'Avid hiker and photographer',
          },
          {
            name: 'Lucy',
            email: 'lucy_family@example.com',
            preferences: 'Enjoys gardening and DIY projects',
          },
        ],
      },
      {
        name: 'bookclub',
        budget: 30,
        people: [
          {
            name: 'Sara',
            email: 'sara@example.com',
            preferences: 'Fond of historical fiction and biographies',
          },
          {
            name: 'Linda',
            email: 'linda_b@example.com',
            preferences: 'Loves mystery novels and knitting',
          },
          {
            name: 'John',
            email: 'john_book@example.com',
            preferences: 'Keen on classic literature and poetry',
          },
          {
            name: 'Emma',
            email: 'emma_bookclub@example.com',
            preferences: 'Enthusiast of modern novels and yoga',
          },
          {
            name: 'George',
            email: 'george_b@example.com',
            preferences: 'Interested in thrillers and chess',
          },
        ],
      },
    ],
  },
  loginStatus: 'initial',
};

// eslint-disable-next-line default-param-last
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GROUP: {
      const { groups } = state.accountData;
      return {
        ...state,
        accountData: {
          ...state.accountData,
          groups: [
            ...groups,
            action.payload,
          ],
        },
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginStatus: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginStatus: false,
      };
    }
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
