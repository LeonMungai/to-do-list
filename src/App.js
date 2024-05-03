import React,{ useState, useEffect} from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  //Fetch tasks from local storage on initial render
  useEffect(() =>{
    const storedTodos = localStorage.getltem('todos'); 
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
  return <h1>testing</h1>
}
