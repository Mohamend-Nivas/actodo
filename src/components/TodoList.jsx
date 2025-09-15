import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;

  return (
    <div className="bg-[#e0fc42] border rounded-md p-2 flex-grow">
      <h1 className="text-xl font-bold ">Today's Activity</h1>
      {todos.length === 0 && (
        <p className="text-center p-4">No activity found. Please add some.</p>
      )}
      {todos.map((item, index) => {
        return (
          <TodoItem
            id={item.id}
            activity={item.activity}
            index={index}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
