import axios from "axios";

type RegisterArguments = { name: string; email: string; password: string };
type LoginArguments = { email: string; password: string };
type EditArguments = { email: string; name: string };

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:8000/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const register = ({ name, email, password }: RegisterArguments) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`/register`, { name, email, password })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data);
        } else {
          reject(err);
        }
      });
  });
};

const login = ({ email, password }: LoginArguments) => {
  console.log(email, password);
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`/login`, { email, password })
      .then(({ data }) => {
        resolve(data.token);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data);
        } else {
          reject(err);
        }
      });
  });
};

const edit = (id: number, { name, email }: EditArguments) => {
  console.log(name, email);
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(`/users/${id}`, { name, email })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data);
        } else {
          reject(err);
        }
      });
  });
};

const deleteUser = (id: number) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(`/users/${id}`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data);
        } else {
          reject(err);
        }
      });
  });
};

const getUser = (id: number) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`/users/${id}`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data);
        } else {
          reject(err);
        }
      });
  });
};

const getUsers = () => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`/users`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data);
        } else {
          reject(err);
        }
      });
  });
};

export default { register, getUser, getUsers, login, deleteUser, edit };
