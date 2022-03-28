import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Props> = (props) => {
  //関数コンポーネントの型指定FC
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
