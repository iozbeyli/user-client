import {
  LOGIN_ERROR,
  LOGIN_FINISH,
  LOGIN_MANUAL,
  LOGIN_START,
  LOGOUT_FINISH,
} from "../types";

const initialState = { loading: false, loggedIn: false };

const login = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_START: {
      return { ...state, loading: true, loggedIn: false };
    }
    case LOGIN_FINISH: {
      return { ...state, loading: false, loggedIn: true };
    }
    case LOGIN_MANUAL: {
      return { ...state, loading: false, loggedIn: true };
    }
    case LOGIN_ERROR: {
      return { ...state, loading: false };
    }
    case LOGOUT_FINISH: {
      return { ...state, loggedIn: false };
    }
    default: {
      return state;
    }
  }
};

export default login;
