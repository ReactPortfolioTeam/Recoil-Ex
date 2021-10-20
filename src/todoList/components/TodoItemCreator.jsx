import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../state/atom/todoListState";
function TodoItemCreator({ closeModal, Count }) {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  let id = Count ?? 0;
  function getId() {
    return id++;
  }
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
          +
        </button>
      </div>
    </div>
  );
}

// 고유한 ID 생성을 위한 유틸

export default TodoItemCreator;
