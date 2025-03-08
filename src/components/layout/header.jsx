import { Link ,NavLink} from 'react-router-dom';
import {Menu} from 'antd';
import { UserAddOutlined , HomeOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { use } from 'react';
const Header =()=>{
  const [current, setCurrent] = useState('');
  const {user} = useContext(AuthContext);
  console.log(">>>check data",user)

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
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
    {
      label: 'Cài đặt',
      key: 'setting',
      icon: <SettingOutlined />,
      children:[
        {
          label: <Link to={"/login"}>Đăng nhập</Link>,
          key: 'login',
        },
        {
          label: 'Đăng xuất',
          key: 'logout',
        }
        
      ]
      
    },

   
  ];
 
  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  
  )
}
export default Header;
