import { Button, Input ,Form, notification} from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage =() =>{
  const [form] = Form.useForm();
  const navigate= useNavigate()
  const onFinish = async (value) =>{
    console.log(">>>check value:",value)
    const res = await registerUserAPI(
      value.fullName,
      value.email,
      value.password,
      value.phone);
    if(res.data){
      notification.success({
          message: "Register user",
          description: "Đăng ký user thành công"
        })
        navigate("/login");

      }else {
        notification.error({
          message: "Register user error",
          description: JSON.stringify(res.message)
        })
      }
  }

  return (
    <Form
    form={form}
    layout="vertical"
    onFinish={onFinish}
 
 
    
  
    // onFinishFailed={onFinishFailed}
   
  >
 
    <div style={{
      margin:"50px",
      // display:"flex",
      // flexDirection:"column",
   
    }}>  
      <Form.Item
      label="Full Name"
      name="fullName"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Password "
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="Phone number"
      name="phone"
      rules={[
        {
          required: true,
        pattern: new RegExp(/\d+/g),
        message: "Wrong format!"

        },
      ]}
    >
      <Input />
    </Form.Item>
    {/* <button type="submit">Register</button> */}
      
        <div>
          <Button onClick={()=>form.submit()} type="primary">Register</Button>
          <Button onClick={()=>{
            form.setFieldsValue({
              email: "quangquyit@gmail.com",
              fullname : "quangquy"
            })
            console.log("CC")
           
          }}>Test</Button>
        </div>
    </div>
    </Form>
  )
}

export default RegisterPage;
