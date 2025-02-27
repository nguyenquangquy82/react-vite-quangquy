import { useState } from "react";

const ToDoNew = (props)=>{
  // const valueInput = "quangquy";
  const [valueInput, setValueInput] = useState("cc");
  console.log("check point",props)
  
  const {addNewToDo} =props;
  // addNewToDo("cucu");
  const handleClick = () =>{
      console.log(">>> check valueInput",valueInput)
  }
  const handleOnChange =(name)=>{
   
    setValueInput(name)
  }
  return(
    <div className="todo-new">
          <input type="text" onChange={(event) => handleOnChange(event.target.value)}/>
          <button 
          style={{cursor:"pointer"}} 
          onClick={handleClick}>Add</button>
          <div>
            My text input is = {valueInput}
          </div>
    </div>
  )
}
export default ToDoNew; 