import { Table,Input,notification,Modal} from 'antd';
import { useState } from 'react';
import {DeleteOutlined, EditOutlined   } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';


const UserTable = (props) =>{
  const {dataUsers} = props;
   

    

  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
      render: (_, record) => {
        
        return (
          <a href='#' target='_blank' rel='noopener noreferrer'>{record._id}</a>
        )
      }
      
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
     
    },
    {
      title: 'Email',
      dataIndex: 'email',
      
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
      <div style={{"display":"flex","gap":"10px"}}>
          <EditOutlined style={{"cursor":"pointer" , color:"blue"} } />
          
          <DeleteOutlined style={{"cursor":"pointer", color:"red"}} />
      </div>
        
      ),
    },
    
   
  ];
  
  

  
  
  return (

    <>

   
    <Table columns={columns} dataSource={dataUsers} rowKey={"_id"}/>
    <UpdateUserModal/>
    </>
  )
}
export default UserTable;