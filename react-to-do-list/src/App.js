import React,{ useState, useEffect} from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  //Fetch tasks from local storage on initial render
  useEffect(() =>{
    const storedTodos = localStorage.getItem('todos'); 
    if (storedTodos){

  setTodos(JSON.parse(storedTodos));
  }
},[]);

//Save tasks to local storage on change
  useEffect(() =>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  const handleInputChange = (Event)=>{
  setNewTodo(Event.target.value);
 };

  const handleAddTodo = () =>{
    if(newTodo.trim()){//Ensure newTodo is not empty
    setTodos([...todos,{id:Date.now(),text:newTodo,completed:false}]);
    setNewTodo('');//clear input field after adding
    }
  };

  const handleDeleteTodo = (todoId)=>{
    setTodos(todos.filter((todo) =>todoId !==todoId));
  };

  const handleToggleCompleted = (todoId) =>{
    setTodos(todos.map((todo) => todoId == todoId ? {...todo,completed:!todo.completed}: todo));
  };

  return(
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={(Event)=>Event.preventDefault()}>
        <input
        type="text"
        value={newTodo}

        onChange={handleInputChange} placeholder="Add a new task..."
        />
        <button
        onClick={handleAddTodo}>Add</button>
      </form>
      <ul>
        {todos.map((todo) =>(
          <li key={todo.id} className=`${todo.completed ? "completed" : null}`> 
    
      <input
      type="checkbox"
      checked={todo.completed}
      onChange={() =>
     handleToggleCompleted(todo.id)}
     />
      <span>{todo.text}</span>
     <button onClick={() =>
    handleDeleteTodo(todo.id)}>Delete</button>
          </li>
    ))}
    </ul>
    </div>
    );
}
   export default App; 
