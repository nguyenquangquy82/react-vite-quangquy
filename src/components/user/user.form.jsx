import { Button, Input } from "antd";
import { useState } from "react";
import axios from "axios";

const UserForm = () =>{
  const [fullName,setFullName] = useState("quangquyit");
  const [email,setEmail] = useState("quangquy822003@gmail.com");
  const [password,setPassWord] = useState("Quydainhan2003@@");
  const [phone,setPhone] = useState("0382208154");
  // console.log(">>> check form: ",fullName,email,password,phone)
 const handleClickBtn = () =>{
  const URL_BACKEND= "http://localhost:8080/api/v1/user";
  const data = {
    fullName : fullName,
    email:email,
    password:password,
    phone:phone
  }
  axios.post(URL_BACKEND,data);
    console.log(">>> check state: ",{fullName,email,password,phone})
 }
  return(
    <div className="user-form" style={{margin:"20px 0"}}>
        <div style={{display:"flex",gap:"12px",flexDirection:"column"}}>
          <div> 
              <span>Full name</span>
              <Input value={fullName}
                onChange={(event)=>{ setFullName(event.target.value)}}
              />
          </div>
          <div> 
              <span>Email</span>
              <Input value={email}
                onChange={(event)=>{setEmail(event.target.value)}}
              />
          </div>
          <div> 
              <span>Password</span>
              <Input.Password 
              value={password}
                onChange={(event)=>{setPassWord(event.target.value)}}
              />
          </div>
          <div> 
              <span>Phone number</span>
              <Input value={phone}
                onChange={(event)=>{setPhone(event.target.value)}}
              />
          </div>
          <div>
            <Button
            onClick={()=>handleClickBtn()} type="primary">Create User</Button>
          </div>
        </div>
    </div>
  )
}

export default UserForm;