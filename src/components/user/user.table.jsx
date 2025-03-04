import { Table} from 'antd';
import { useState } from 'react';
import {DeleteOutlined, EditOutlined   } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';


const UserTable = (props) =>{
  const {dataUsers,loadUser} = props;
  const [dataUpdate,setDataUpdate] = useState(null)


   const[isModalUpdateOpen,setIsModalUpdateOpen] = useState(false);
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
          <EditOutlined  onClick={()=>{
            setDataUpdate(record);
            setIsModalUpdateOpen(true);
          }}  style={{"cursor":"pointer" , color:"blue"} } />       
          <DeleteOutlined style={{"cursor":"pointer", color:"red"}} />
      </div>   
      ),
    },
  ];
 
  return (
    <>
    <Table columns={columns}
     dataSource={dataUsers} 
     rowKey={"_id"}/>
    <UpdateUserModal
      isModalUpdateOpen={isModalUpdateOpen} 
      setIsModalUpdateOpen={setIsModalUpdateOpen}
      dataUpdate ={dataUpdate}
      setDataUpdate={setDataUpdate}
      loadUser = {loadUser}
    />
    </>
  )
}
export default UserTable;