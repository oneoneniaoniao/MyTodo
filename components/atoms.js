import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const todosState = atom({
  key: "todos",
  default: [
      {
        id: 1,
        title: "shopping",
        status: "todo",
        dueDate: "2022/9/10",
        detail: "Go to izumiya.",
      },
      {
        id: 2,
        title: "This is a long long title. This is a long long titl",
        status: "doing",
        dueDate: "2022/9/20",
        detail: "This is a long long detail. This is a long long detail. This is a long long detail. This is a long long.",
      },
      {
        id: 3,
        title: "travel",
        status: "done",
        dueDate: "2022/7/20",
        detail: "This is a long long detail. This is a long long detail. This is a long long detail. This is a long long.This is a long long detail. This is a long long detail. This is a long long detail. This is a long long.",
      },
      {
        id: 4,
        title: "shopping2",
        status: "todo",
        dueDate: "2022/9/10",
        detail: "Go to izumiya.",
      },
      {
        id: 5,
        title: "Eat out2",
        status: "doing",
        dueDate: "2022/9/20",
        detail: "Go to a Mac to buy a coffee.",
      },
      {
        id: 6,
        title: "travel2",
        status: "done",
        dueDate: "2022/7/20",
        detail: "Go to Onsen to heal myself.",
      },
    ],
  effects_UNSTABLE: [persistAtom],
});
