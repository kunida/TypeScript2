// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean; // ?・・・必須ではない
// };

import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  // props: Pick<TodoType, "userId" | "title" | "completed">
  // Omit Pickの逆
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "［完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザ:${userId})`}</p>;
};
