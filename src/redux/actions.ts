import {
  DELETE,
  EDIT,
  GET_USER,
  GET_USERS,
  LOGIN,
  LOGIN_MANUAL,
  LOGOUT,
  REGISTER,
} from "./types";

export const register = (name: string, email: string, password: string) => ({
  type: REGISTER,
  payload: {
    name,
    email,
    password,
  },
});

export const manualLogin = () => ({
  type: LOGIN_MANUAL,
});

export const login = (email: string, password: string) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

export const logout = () => ({
  type: LOGOUT,
});

export const edit = (id: number, email: string, name: string) => ({
  type: EDIT,
  payload: {
    email,
    name,
  },
  id,
});

export const deleteUser = (id: number) => ({
  type: DELETE,
  id,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const getUser = (id: number) => ({
  type: GET_USER,
  id,
});
