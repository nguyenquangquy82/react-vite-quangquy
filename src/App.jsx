import "./components/todo/todo.css"
import ToDoData from "./components/todo/ToDoData";
import ToDoNew from "./components/todo/ToDoNew";
import reactlogo from './assets/react.svg';
const App = () => {
  return (
    
    <div>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <ToDoNew/>
        <ToDoData/>
        <div className="todo-image"> 
          <img src={reactlogo} className="logo"/>
        </div>
      </div>
    </div>
  )
}
export default App;
