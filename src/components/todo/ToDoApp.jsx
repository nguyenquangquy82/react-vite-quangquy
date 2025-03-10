import "./todo.css"
import ToDoData from "./ToDoData";
import ToDoNew from "./ToDoNew";
import reactLogo from '../../assets/react.svg';
import { useState } from "react";
const ToDoApp = () =>{
  const [todoList,setTodoList] = useState([
    // {id:1,name:"Learning React"},
    // {id:2,name:"Watching Youtube"}
  ])
  
  // const quangquyit = "cuem MU"

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
  
  const deleteTodo = (id) =>{
      const newToDo = todoList.filter(item => item.id !==id)
      setTodoList(newToDo);
  }
  return(
    <div>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <ToDoNew
          addNewToDo={addNewToDo}
        />
       
       
     
        {todoList.length>0 ?
        <ToDoData 
          todoList= {todoList}
          deleteTodo = {deleteTodo}
        />
        :
          <div className="todo-image"> 
          <img src={reactLogo} className="logo"/>
        </div>
        }
        
      </div>
    </div>
  )
}

export default ToDoApp;