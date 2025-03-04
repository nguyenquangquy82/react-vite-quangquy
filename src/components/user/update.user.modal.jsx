import { Table,Input,notification,Modal} from 'antd';
import { useState } from 'react';
import {DeleteOutlined, EditOutlined   } from '@ant-design/icons';

import { createUserAPI } from "../../services/api.service";
const UpdateUserModal = () =>{
  const handleSubmitBtn = async() =>{
  
    const res= await createUserAPI(fullName,email,password,phone);
    // debugger
    if(res.data){
      notification.success({
        message:"create user",
        description: "Tạo user thành công"
      })
      resetAndCloseModal();
      // await loadUser();
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
  const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassWord] = useState("");
    const [phone,setPhone] = useState("");
  
    const[isModalOpen,setIsModalOpen] = useState(true);
  return (
    <Modal 
    title="Update user modal"
    open={isModalOpen}
    onOk={() => handleSubmitBtn()}
    onCancel={() =>  resetAndCloseModal()}
    maskClosable={false}
    okText={"Save"}
   
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
  )
}
export default UpdateUserModal;