import { notification,Popconfirm, Table} from 'antd';
import { useState } from 'react';
import {DeleteOutlined, EditOutlined   } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = (props) =>{
  const {dataUsers,loadUser,current
    ,pageSize,total,
    setCurrent,setPageSize,setTotal
  } = props;

  const[isModalUpdateOpen,setIsModalUpdateOpen] = useState(false);
  const [dataUpdate,setDataUpdate] = useState(null)
  const [dataDetail,setDataDetail] = useState(null)
  const [isDetailOpen,setIsDetailOpen] = useState(false)
  const columns = [
    {
      title: "STT",
      render: (_, record,index) => {
        console.log(">>> check index: ",index)
        return (
        
       <>
        {index +1}
       </>
        
        )

      }
    },
    {
      title: 'Id',
      dataIndex: '_id',
      render: (_, record) => {
        return (
          <a 
                href='#'
                onClick={()=>{
                  setDataDetail(record);
                  setIsDetailOpen(true);
                }}
                  
                >{record._id}</a>
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
      <div style={{"display":"flex","gap":"20px"}}>
          <EditOutlined  onClick={()=>{
            setDataUpdate(record);
            setIsModalUpdateOpen(true);
          }}  style={{"cursor":"pointer" , color:"blue"} } />
            <Popconfirm
                title="Xóa người dùng"
                description="Bạn chắc chắn xóa user này?"
                onConfirm={() => deleUser(record._id)}
                okText="Yes"
                cancelText="No"
                placement="left"
              >      
          <DeleteOutlined style={{"cursor":"pointer", color:"red"}} />
          </Popconfirm> 
      </div>   
      ),
    },
  ];
  const deleUser = async (id)=>{
    try {
      const res = await deleteUserAPI(id);
      if(res.data){
        notification.success({
          message: "Delete user",
          description: "Xóa user thành công"
        });
        await loadUser();
      }else{
        notification.error({
          message: "Errors delete user",
          description: JSON.stringify(res.message)
        });
      }
  
    
    } catch (error) {
      console.log(error)
    }
  }
  const onChange = (pagination, filters, sorter, extra) => {
    console.log(">>>check",{pagination,filters,sorter,extra})
    };

  
  return (
    <>
    <Table columns={columns}
     dataSource={dataUsers} 
     rowKey={"_id"}
     pagination={
      {
      current: current,
      pageSize: pageSize,
      showSizeChanger: true,
      total: total,
      showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }

      } }
      onChange={onChange}
     />
      
       

    <UpdateUserModal
      isModalUpdateOpen={isModalUpdateOpen} 
      setIsModalUpdateOpen={setIsModalUpdateOpen}
      dataUpdate ={dataUpdate}
      setDataUpdate={setDataUpdate}
      loadUser = {loadUser}
    />
    <ViewUserDetail
      dataDetail={dataDetail}
      setDataDetail={setDataDetail}
      isDetailOpen={isDetailOpen}
      setIsDetailOpen={setIsDetailOpen}
      loadUser={loadUser}
      />
    </>
  )
  }

export default UserTable;