import { toast } from "react-toastify";
import {
  all,
  call,
  put,
  spawn,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import api from "../Api";
import { User } from "../typings";
import {
  DELETE,
  DELETE_ERROR,
  DELETE_FINISH,
  DELETE_START,
  EDIT,
  EDIT_ERROR,
  EDIT_FINISH,
  EDIT_START,
  ERROR,
  GET_USER,
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_FINISH,
  GET_USERS_START,
  GET_USER_ERROR,
  GET_USER_FINISH,
  GET_USER_START,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_FINISH,
  LOGIN_START,
  LOGOUT,
  LOGOUT_FINISH,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_FINISH,
  REGISTER_START,
} from "./types";
import { history } from "../index";

function* register(action: any) {
  try {
    yield put({ type: REGISTER_START });
    yield call(api.register, action.payload);
    yield put({ type: REGISTER_FINISH });
    yield call(history.push, "/login");
  } catch (e) {
    yield put({ type: REGISTER_ERROR });
    yield put({ type: ERROR, message: e.message || "Failed" });
  }
}

function* login(action: any) {
  try {
    yield put({ type: LOGIN_START });
    const token: string = yield call(api.login, action.payload);
    yield call([localStorage, localStorage.setItem], "token", token);
    yield put({ type: LOGIN_FINISH });
  } catch (e) {
    yield put({ type: LOGIN_ERROR });
    yield put({ type: ERROR, message: e.message || "Failed" });
  }
}

function* edit(action: any) {
  try {
    yield put({ type: EDIT_START });
    const user: User = yield call(api.edit, action.id, action.payload);
    yield put({ type: EDIT_FINISH, payload: { user } });
  } catch (e) {
    yield put({ type: EDIT_ERROR });
    yield put({ type: ERROR, message: e.message || "Failed" });
  }
}

function* deleteUser(action: any) {
  try {
    yield put({ type: DELETE_START });
    yield call(api.deleteUser, action.id);
    yield put({ type: GET_USERS });
    yield put({ type: DELETE_FINISH });
  } catch (e) {
    yield put({ type: DELETE_ERROR });
    yield put({ type: ERROR, message: e.message || "Failed" });
  }
}

function* getUser(action: any) {
  try {
    yield put({ type: GET_USER_START });
    const user: User = yield call(api.getUser, action.id);
    yield put({ type: GET_USER_FINISH, payload: { user } });
  } catch (e) {
    yield put({ type: GET_USER_ERROR });
    yield put({ type: ERROR, message: e.message || "Failed" });
    yield call(history.goBack);
  }
}

function* getUsers() {
  try {
    yield put({ type: GET_USERS_START });
    const users: Array<User> = yield call(api.getUsers);
    yield put({ type: GET_USERS_FINISH, payload: { users } });
  } catch (e) {
    yield put({ type: GET_USERS_ERROR });
    yield put({ type: ERROR, message: e.message || "Failed" });
  }
}

function* logout() {
  yield call([localStorage, localStorage.removeItem], "token");
  yield put({ type: LOGOUT_FINISH });
}

function* error(action: any) {
  yield call(toast.error, action.message, {
    position: toast.POSITION.TOP_RIGHT,
  });
}

function* registerSaga() {
  yield takeLatest(REGISTER, register);
}

function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

function* editSaga() {
  yield takeLatest(EDIT, edit);
}

function* deleteSaga() {
  yield takeLatest(DELETE, deleteUser);
}

function* getUsersSaga() {
  yield takeLatest(GET_USERS, getUsers);
}

function* logoutSaga() {
  yield takeLatest(LOGOUT, logout);
}

function* errorSaga() {
  yield takeEvery(ERROR, error);
}

function* getUserSaga() {
  yield takeLatest(GET_USER, getUser);
}

function* rootSaga() {
  const sagas = [
    registerSaga,
    loginSaga,
    getUserSaga,
    getUsersSaga,
    errorSaga,
    deleteSaga,
    editSaga,
    logoutSaga,
  ];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}

export default rootSaga;
