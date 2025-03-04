import { Table,Input,notification,Modal} from 'antd';
import { useEffect, useState } from 'react';
import {DeleteOutlined, EditOutlined   } from '@ant-design/icons';

import { createUserAPI } from "../../services/api.service";
const UpdateUserModal = (props) =>{
  const [id,setId] = useState("");
  const [fullName,setFullName] = useState("");
  const [phone,setPhone] = useState("");

    const {isModalUpdateOpen,setIsModalUpdateOpen,dataUpdate,setDataUpdate } =props;
   useEffect(()=>{
    console.log("check dataupdate props: ",dataUpdate)
    if(dataUpdate){
      setId(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
    }
   },[dataUpdate])
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
      setIsModalUpdateOpen(false);
      setFullName("");
      setId("");
      setPhone("");
      setDataUpdate(null)
   }
  return (
    <Modal 
    title="Update user modal"
    open={isModalUpdateOpen}
    onOk={() => handleSubmitBtn()}
    onCancel={() =>  resetAndCloseModal()}
    maskClosable={false}
    okText={"Save"}
   
>
<div style={{display:"flex",gap:"15px",flexDirection:"column"}}>
  <div> 
      <span>Id</span>
      <Input value={id}
      disabled
      />
  </div>
  <div> 
      <span>Full name</span>
      <Input value={fullName}
        onChange={(event)=>{ setFullName(event.target.value)}}
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