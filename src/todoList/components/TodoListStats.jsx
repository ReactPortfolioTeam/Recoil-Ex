import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../state/selector/todoListStatsState";

function TodoListStats() {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentCompleted * 100);

    return (
        <ul>
            <li>총 갯수: {totalNum}</li>
            <li>완료 Todo: {totalCompletedNum}</li>
            <li>미완료 Todo: {totalUncompletedNum}</li>
            <li>Todo: {formattedPercentCompleted}%</li>
        </ul>
    );
}

export default TodoListStats;
