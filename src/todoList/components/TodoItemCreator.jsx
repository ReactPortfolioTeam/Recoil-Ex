import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../state/atom/todoListState";
function TodoItemCreator({ closeModal }) {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
    closeModal(false);
  };
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="modal">
      <div className="creator">
        <h1>Todo Add</h1>
        <textarea type="text" value={inputValue} onChange={onChange} />
        <button type="button" className="add" onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  );
}

// 고유한 ID 생성을 위한 유틸
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
