import { REGISTER_START, REGISTER_FINISH, REGISTER_ERROR } from "../types";

const initialState = { loading: false };

const register = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_START: {
      return { ...state, loading: true };
    }
    case REGISTER_FINISH: {
      return { ...state, loading: false };
    }
    case REGISTER_ERROR: {
      return { ...state, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default register;
