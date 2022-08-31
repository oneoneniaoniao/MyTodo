import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const todosState = atom({
  key: "todos",
  default: [
    { id: 1, title: "shopping", status: "todo" },
    { id: 2, title: "lanch", status: "doing" },
  ],
  effects_UNSTABLE: [persistAtom],
});
