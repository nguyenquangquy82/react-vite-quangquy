import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useState } from 'react';


const UserTable = () =>{
   
  const [dataUsers,setDataUsers] = useState([
    {_id:"cu em " , fullName:25,address:"dn"},
    {_id:"quangquyit" , fullName:25,email:"hcm"},
  ]);
    

  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
      
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
     
    },
    {
      title: 'Email',
      dataIndex: 'email',
      
    },
    
   
  ];
  const loadUser = async() =>{
    

    const res =  await fetchAllUserAPI()
    
    // setDataUsers(res.data)
  }
  loadUser();

  console.log(">>> run render")
  
  return (
    <Table columns={columns} dataSource={dataUsers} />
  )
}
export default UserTable;