import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../state/atom/todoListState";

function TodoItem({ item }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);
    console.log(todoList);
    useEffect(() => {
        if (todoList.length === 0 && localStorage["todoList"]) {
            console.log("here");
            setTodoList(JSON.parse(localStorage.getItem("todoList")));
        }
    }, []);

    const editItemText = ({ target: { value } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });
        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };
    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <div className="todo-item">
            <input type="text" value={item.text} onChange={editItemText} />
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button className="delete" onClick={deleteItem}>
                X
            </button>
        </div>
    );
}

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;
