import { DELETE_ERROR, DELETE_FINISH, DELETE_START } from "../types";

const initialState = { loading: false };

const deleteUser = (state = initialState, action: any) => {
  switch (action.type) {
    case DELETE_START: {
      return { ...state, loading: true };
    }
    case DELETE_FINISH: {
      return { ...state, loading: false };
    }
    case DELETE_ERROR: {
      return { ...state, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default deleteUser;
