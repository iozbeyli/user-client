import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteUser } from "../../redux/actions";
import { User } from "../../typings";
import Button from "../Button";
import classes from "./UserTable.module.scss";

type Props = { users: Array<User> };

export default function UserTable({ users }: Props) {
  const dispatch = useDispatch();
  const editUser = (id: number) => {};
  const history = useHistory();
  const goToEdit = (id: number) => {
    history.push(`/edit/${id}`);
  };
  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <thead>
          <tr className={classes.headerRow}>
            <th className={classes.header}>Name</th>
            <th className={classes.header}>Email</th>
            <th className={classes.header}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className={classes.row} key={user.id}>
              <td className={classes.cell}>{user.name}</td>
              <td className={classes.cell}>{user.email}</td>
              <td>
                <div className={classes.actionCell}>
                  <Button
                    className={classes.button}
                    type="button"
                    primary
                    onClick={() => goToEdit(user.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className={classes.button}
                    type="button"
                    secondary
                    onClick={() => dispatch(deleteUser(user.id))}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
