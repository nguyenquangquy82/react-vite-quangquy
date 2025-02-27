const ToDoData = (props) =>{
  // {
  //   name : "Quang Quy IT",
  //   age : 22,
  // }
  const {name,age,data} =props;
  console.log(">>> check props: ",props)
  return (
    <div className="todo-data">
          <div>My name is {props.name}</div>
          <div> </div>
          <div>
              {JSON.stringify(props.todoList)}
          </div>
    </div>
    
  )
}
export default ToDoData