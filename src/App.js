import { RecoilRoot } from "recoil";
import TodoList from "./todoList/components/TodoList";

function App() {
    return (
        <RecoilRoot>
            {/* <CharacterCounter /> */}
            <TodoList />
        </RecoilRoot>
    );
}

export default App;
