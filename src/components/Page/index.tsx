import React from "react";
import Loader from "../../components/Loader";

type Props = {
  loading: boolean;
  children: any;
};

export default function Page({ loading, children }: Props) {
  if (loading) {
    return <Loader />;
  }
  return children;
}
