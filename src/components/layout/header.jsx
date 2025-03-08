import { Link ,NavLink, useNavigate} from 'react-router-dom';
import {Alert, Menu, message} from 'antd';
import { UserAddOutlined , HomeOutlined, BookOutlined, SettingOutlined, AliwangwangOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { use } from 'react';
import { logoutAPI } from '../../services/api.service';
const Header =()=>{
  const [current, setCurrent] = useState('');
  const {user,setUser} = useContext(AuthContext);
  const navigate = useNavigate();
  
  // console.log(">>>check data",user)

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const handleLogout =async()=>{
    const res = await logoutAPI();
    if(res.data){
      localStorage.removeItem("access_token")
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "_",
        id: ""
      })
      message.success("Logout thành công.");
      // navigate("/")
    }
  }
  
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/users"}>Users</Link>,
      key: 'users',
      icon: <UserAddOutlined />,
     
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: 'books',
      icon: <BookOutlined />,
      
    },
    ...(!user.id ?  [{
      label: <Link to={"/login"}>Đăng nhập</Link>,
      key: 'login',
      icon: <SettingOutlined />,
        
    }]:[]),
    
    ...(user.id ?  [ {
      label: `Welcome ${user.fullName} bla bal`,
      key: 'setting',
      icon: <AliwangwangOutlined />,
      children:[
        {
          label: <span onClick={()=>handleLogout()}>Đăng xuất</span>,
          key:'logout',
        },
      ],
    },]:[]),
   
  ]
  
 
  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  
  )
}
export default Header;
