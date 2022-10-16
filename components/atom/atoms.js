import React from "react";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { useRecoilState } from "recoil";

const { persistAtom } = recoilPersist();

export const todosState = atom({
  key: "todos",
  default: [
    // {
    //   id: "1",
    //   title: "タイトル",
    //   detail: "詳細",
    //   status: "todo",
    //   dueDate: "2022/10/01",
    // },
    // {
    //   id: "2",
    //   title:
    //     "長〜いタイトルです。長〜いタイトルです。長〜いタイトルです。長〜いタイトルです。長〜いタイトルです。長〜いタイトルです。長〜いタイトルです。長〜いタイトルです。長〜いタイトルです。長〜いタイトルです。",
    //   detail:
    //     "なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。なが〜〜い詳細です。",
    //   status: "doing",
    //   dueDate: "2022/10/30",
    // },
    // {
    //   id: "3",
    //   title: "タイトルです。タイトルです。",
    //   detail:
    //     "これはtodo詳細です。これはtodo詳細です。これはtodo詳細です。これはtodo詳細です。これはtodo詳細です。",
    //   status: "done",
    //   dueDate: "2022/12/31",
    // },
    // {
    //   id: "4",
    //   title: "タ",
    //   detail: "",
    //   status: "done",
    //   dueDate: "",
    // },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const useTodosState = () => {
  const [isInitial, setIsInitial] = React.useState(true);
  const [todosStateStored, setTodosStateStored] = useRecoilState(todosState);

  React.useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial === true ? [] : todosStateStored, setTodosStateStored];
};
