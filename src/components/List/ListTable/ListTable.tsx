import React from "react";

// Types
import { Task } from "../../../types";

type Props = {
  columnTitles: string[];
  tasks: Task[];
  onChangeFirstColumn: () => any;
  onChangeSecondColumn: () => any;
};

function ListTable({
  columnTitles,
  onChangeFirstColumn,
  onChangeSecondColumn,
  tasks,
}: Props) {
  return (
    <table>
      <colgroup>
        <col width="30%" />
        <col width="30%" />
        <col width="40%" />
      </colgroup>
      <thead>
        <tr>
          {columnTitles.map((title, index) => {
            return <th key={index}>{title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => {
          return (
            <tr key={index}>
              <td>
                <button onClick={onChangeFirstColumn} />
              </td>
              <td>
                <button onClick={onChangeSecondColumn} />
              </td>
              <td>{task.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListTable;
