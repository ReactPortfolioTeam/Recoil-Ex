import { useRecoilState, useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { filteredTodoListState } from "../state/selector/filteredTodoListState";
import "../css/TodoList.css";
import { useEffect, useState } from "react";
import { todoListState } from "../state/atom/todoListState";
import PlusButton from "./PlusButton";
import FilterButton from "./FilterButton";
import TodoItemCreator from "./TodoItemCreator";
import { todoListFilterState } from "../state/atom/todoListFilterState";
import ProgressBar from "./ProgressBar";
import TodoListFilters from "./TodoListFilters";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const todoListFilter = useRecoilValue(todoListFilterState);
  const [localTodoList, setLocalTodoList] = useRecoilState(todoListState);

  const [isAddPage, setIsAddPage] = useState(false);
  const [isFilterPage, setIsFilterPage] = useState(false);

  useEffect(() => {
    if (localTodoList.length === 0 && localStorage["todoList"]) {
      setLocalTodoList(JSON.parse(localStorage.getItem("todoList")));
    }
  }, [localTodoList, setLocalTodoList]);

  return (
    <div className="Container">
      <div className="header">
        <FilterButton onClick={() => setIsFilterPage(!isFilterPage)} />
        <h1>{todoListFilter}</h1>
        <ProgressBar />
      </div>
      <div className="TodoList">
        {todoList.map((todoItem, index) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
        <PlusButton onClick={() => setIsAddPage(!isAddPage)} />
      </div>

      {isAddPage && (
        <TodoItemCreator
          closeModal={(args) => setIsAddPage(args)}
          Count={todoList.length}
        />
      )}
      {isFilterPage && (
        <TodoListFilters closeModal={(args) => setIsFilterPage(args)} />
      )}
    </div>
  );
}

export default TodoList;
