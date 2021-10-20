import { useRecoilState } from "recoil";
import { todoListFilterState } from "../state/atom/todoListFilterState";

function TodoListFilters({ closeModal }) {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
    closeModal(false);
  };

  return (
    <div className="filter-page modal">
      <h1>Filter:</h1>

      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

export default TodoListFilters;
