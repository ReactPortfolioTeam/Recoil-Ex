import { useRecoilState, useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import { filteredTodoListState } from "../state/selector/filteredTodoListState";
import "../css/TodoList.css";
import { useEffect } from "react";
import { todoListState } from "../state/atom/todoListState";

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
    const [localTodoList, setLocalTodoList] = useRecoilState(todoListState);
    useEffect(() => {
        if (localTodoList.length === 0 && localStorage["todoList"]) {
            setLocalTodoList(JSON.parse(localStorage.getItem("todoList")));
        }
    }, []);

    return (
        <div className="Container">
            <TodoListStats />
            {/* <TodoListFilters />
            <TodoItemCreator /> */}
            <div className="TodoList">
                {todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} item={todoItem} />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
