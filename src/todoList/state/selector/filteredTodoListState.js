import { selector } from "recoil";
import { todoListFilterState } from "../atom/todoListFilterState";
import { todoListState } from "../atom/todoListState";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Completed":
        return list.filter((item) => item.isComplete);
      case "Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
