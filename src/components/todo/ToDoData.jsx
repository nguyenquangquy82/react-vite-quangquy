
const ToDoData = (props) =>{
  // {
  //   name : "Quang Quy IT",
  //   age : 22,
  // }
  const {todoList} =props;
  console.log(">>> check props todolist : ",todoList)
  return (
    <div className="todo-data">
         {todoList.map((item,index)=>{
          console.log(">>> check map:",item,index)
          return (
              <div className="todo-item">
                <div> {item.name} </div>
                <button>Delete</button>
              </div>
          )
         })}
          
          <div>
              {JSON.stringify(props.todoList)}
          </div>
    </div>
    
  )
}
export default ToDoData