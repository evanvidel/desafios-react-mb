import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const [filter, setFilter] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Math.random(), task: task }]);
    setTask('');
  };
  return (
    <div>
      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Adicionar</button>
      {/* <ul>
        {todos.map((todo) =>(
            <li key={todo.id}>{todo.task}</li>
        ))}
      </ul> */}
      <div>
        <h2>5 - Filtro</h2>
        <input
          type='text'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder='Procure sua tarefa'
        />
      </div>
      <ul>
        {todos
          .filter((todo) => todo.task.includes(filter))
          .map((todo) => (
            <li key={todo.id}>{todo.task}</li>
          ))}
      </ul>
    </div>
  );
};
export default TodoList;
