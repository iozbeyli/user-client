import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Layout from "./components/Layout";
import { manualLogin } from "./redux/actions";
import Routes from "./routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(manualLogin());
    }
  }, []);
  return (
    <Fragment>
      <ToastContainer />
      <Layout>
        <Routes />
      </Layout>
    </Fragment>
  );
}

export default App;
