import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import BackButton from "../../components/BackButton";
import EditForm from "../../components/EditForm";
import Page from "../../components/Page";
import { getUser } from "../../redux/actions";
import { selectUser, selectUserLoading } from "../../redux/selectors";

export default function Edit() {
  const user = useSelector(selectUser);
  const userLoading = useSelector(selectUserLoading);
  const dispatch = useDispatch();
  const { id } = useParams<{ id?: string }>();
  useEffect(() => {
    if (id) {
      dispatch(getUser(parseInt(id)));
    }
  }, []);
  return (
    <Page loading={userLoading}>
      <BackButton />
      <EditForm user={user} />
    </Page>
  );
}
