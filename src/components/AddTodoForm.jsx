import { useState } from "react";

function AddTodoForm(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const [newactivity, setNewactivity] = useState("");

  function handleInputChange(event) {
    setNewactivity(event.target.value);
  }

  function handleAdd() {
    setTodos([...todos, { id: todos.length + 1, activity: newactivity }]);
    setNewactivity("");
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activities</h1>

      <div>
        <input
          value={newactivity}
          onChange={handleInputChange}
          type="text"
          className="border border-black bg-transparent p-1"
          placeholder="Next Activy?"
        />
        <button
          onClick={handleAdd}
          className="bg-black text-white p-1 border border-black"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodoForm;
