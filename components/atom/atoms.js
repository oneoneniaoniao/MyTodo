import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const todosState = atom({
  key: "todos",
  default: [
    // {
    //   id: "1",
    //   title: "shopping",
    //   detail: "Go to izumiya.",
    //   status: "todo",
    //   dueDate: new Date(2000, 1, 1),
    // },
    // {
    //   id: "2",
    //   title: "This is a long long title. This is a long long titl",
    //   detail:
    //     "This is a long long detail. This is a long long detail. This is a long long detail. This is a long long.",
    //   status: "doing",
    //   dueDate: new Date(2022, 12, 1),
    // },
    // {
    //   id: "3",
    //   title: "travel",
    //   detail:
    //     "This is a long long detail. This is a long long detail. This is a long long detail. This is a long long.This is a long long detail. This is a long long detail. This is a long long detail. This is a long long.",
    //   status: "done",
    //   dueDate: new Date(2022, 12, 11),
    // },
    // {
    //   id: "4",
    //   title: "shopping2",
    //   detail: "Go to izumiya.",
    //   status: "todo",
    //   dueDate: new Date(2022, 2, 1),
    // },
    // {
    //   id: 5,
    //   title: "Eat out2",
    //   detail: "Go to a Mac to buy a coffee.",
    //   status: "doing",
    //   dueDate: "2022/9/20",
    // },
    // {
    //   id: 6,
    //   title: "travel2",
    //   detail: "Go to Onsen to heal myself.",
    //   status: "done",
    //   dueDate: "2022/7/20",
    // },
  ],
  effects_UNSTABLE: [persistAtom],
});
