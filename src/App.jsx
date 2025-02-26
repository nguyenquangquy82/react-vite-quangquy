import "./components/todo/todo.css"
import ToDoData from "./components/todo/ToDoData";
import ToDoNew from "./components/todo/ToDoNew";
import reactlogo from './assets/react.svg';
const App = () => {
  const quangquyit = "cuem MU"
  const age =22;
  const data ={
    address: "danang",
    country :"vietnam"
  }
  const addNewToDo = (name) =>{
    alert(`call me ${name}`) 
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
          
        />
        <div className="todo-image"> 
          <img src={reactlogo} className="logo"/>
        </div>
      </div>
    </div>
  )
}
export default App;
