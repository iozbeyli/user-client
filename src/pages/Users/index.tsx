import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../components/Page";
import UserTable from "../../components/UserTable";
import { getUsers } from "../../redux/actions";
import { selectUsers, selectUsersLoading } from "../../redux/selectors";
import classes from "./Users.module.scss";

export default function Users() {
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Page loading={loading}>
      <div className={classes.container}>
        <UserTable users={users} />
      </div>
    </Page>
  );
}
