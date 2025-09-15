import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
function TodoContainer() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      activity: "Go for walk",
    },
    {
      id: 2,
      activity: "Have a breakfast",
    },
    {
      id: 3,
      activity: "Read a book",
    },
  ]);
  return (
    <div>
      <div className="flex gap-7 flex-wrap">
        {/* Add Todo Form Component */}
        <AddTodoForm todos={todos} setTodos={setTodos} />

        {/* Todo List Component */}
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default TodoContainer;
