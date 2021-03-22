import {
  EDIT_ERROR,
  EDIT_FINISH,
  EDIT_START,
  GET_USERS_ERROR,
  GET_USERS_FINISH,
  GET_USERS_START,
  GET_USER_ERROR,
  GET_USER_FINISH,
  GET_USER_START,
} from "../types";

const initialState = { users: [], user: undefined, loading: false };

const users = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS_START: {
      return { ...state, users: [], loading: true };
    }
    case GET_USERS_FINISH: {
      return { ...state, users: action.payload.users, loading: false };
    }
    case GET_USERS_ERROR: {
      return { ...state, loading: false };
    }
    case GET_USER_START: {
      return { ...state, user: undefined, loading: true };
    }
    case GET_USER_FINISH: {
      return { ...state, user: action.payload.user, loading: false };
    }
    case GET_USER_ERROR: {
      return { ...state, loading: false };
    }
    case EDIT_START: {
      return { ...state, loading: true };
    }
    case EDIT_FINISH: {
      return { ...state, user: action.payload.user, loading: false };
    }
    case EDIT_ERROR: {
      return { ...state, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default users;
