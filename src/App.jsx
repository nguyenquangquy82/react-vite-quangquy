import "./components/todo/todo.css"
import ToDoData from "./components/todo/ToDoData";
import ToDoNew from "./components/todo/ToDoNew";
import reactLogo from './assets/react.svg';
import { useState } from "react";
const App = () => {
  const [todoList,setTodoList] = useState([
    {id:1,name:"Learning React"},
    {id:2,name:"Watching Youtube"}
  ])
  
  const quangquyit = "cuem MU"
  const age =22;
  const data ={
    address: "danang",
    country :"vietnam"
  }
  const addNewToDo = (name) =>{
    const newToDo ={
      id : randomIntFromInterval(1,100000000),
      name : name
    }
    setTodoList([...todoList,newToDo])
    // todoList.push(newToDo)
    // // alert(`call me ${name}`) 
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  
  return (
    
    <div>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <ToDoNew
          addNewToDo={addNewToDo}
        />
        <ToDoData 
          name={quangquyit}
          age ={age}
          data ={data}
          todoList= {todoList}
          
        />
        <div className="todo-image"> 
          <img src={reactLogo} className="logo"/>
        </div>
      </div>
    </div>
  )
}
export default App;
