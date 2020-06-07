import React from "react";

type Props = {
  title: string;
};

function ListTitle({ title }: Props) {
  return <div>{title}</div>;
}

export default ListTitle;
