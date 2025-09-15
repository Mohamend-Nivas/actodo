function TodoItem(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;

  function handleDelete(Deleteid) {
    const newTodos = todos.filter(function (item) {
      if (item.id == Deleteid) {
        return false;
      } else {
        return true;
      }
    });
    setTodos(newTodos);
  }
  return (
    <div className="flex justify-between border-black border-b p-2">
      <p>
        {props.index + 1}. {props.activity}
      </p>
      <button
        className="text-red-600 px-2"
        onClick={() => {
          handleDelete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
