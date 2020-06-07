import React from "react";

// Components
import ListTitle from "./ListTitle/ListTitle";
import ListTable from "./ListTable/ListTable";

// Types
import { Task } from "../../types";

type Props = {
  columnTitles: string[];
  listTitle: string;
  tasks: Task[];
  onChangeFirstColumn: () => any;
  onChangeSecondColumn: () => any;
};

function List({
  columnTitles,
  tasks,
  onChangeFirstColumn,
  onChangeSecondColumn,
  listTitle,
}: Props) {
  return (
    <div>
      <ListTitle title={listTitle} />
      <ListTable
        columnTitles={columnTitles}
        tasks={tasks}
        onChangeFirstColumn={onChangeFirstColumn}
        onChangeSecondColumn={onChangeSecondColumn}
      />
    </div>
  );
}

export default List;
