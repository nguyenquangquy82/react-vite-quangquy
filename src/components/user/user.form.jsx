import { Button, Input, notification,Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) =>{
  const {loadUser}= props;

  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassWord] = useState("");
  const [phone,setPhone] = useState("");

  const[isModalOpen,setIsModalOpen] = useState(false);

 
  // console.log(">>> check form: ",fullName,email,password,phone)
 const handleSubmitBtn = async() =>{
  
  const res= await createUserAPI(fullName,email,password,phone);
  // debugger
  if(res.data){
    notification.success({
      message:"create user",
      description: "Tạo user thành công"
    })
    resetAndCloseModal();
    await loadUser();
  }else {
    notification.error({
      message: "Error create",
      description: JSON.stringify(res.message)
    })
  }
 }

 const resetAndCloseModal= ()=>{
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassWord("");
    setPhone("");
 }


  return(
    <div className="user-form" style={{margin:"10px 0"}}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <h3> Table users</h3>
            <Button
            onClick={()=>setIsModalOpen(true)} type="primary">Create User</Button>
          </div>
      
        <Modal 
            title="Create User"
            open={isModalOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() =>  resetAndCloseModal()}
            maskClosable={false}
            okText="Create"
           
        >
        <div style={{display:"flex",gap:"15px",flexDirection:"column"}}>
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
          </div>
      </Modal>
    </div>
  )
}

export default UserForm;