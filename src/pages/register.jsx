import { Button, Input ,Form} from "antd";

const RegisterPage =() =>{
  const [form] = Form.useForm();
  const onFinish = (value) =>{
    console.log(">>>check value:",value)

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
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your username!',
      //   },
      // ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your username!',
      //   },
      // ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Password "
      name="passWord"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your username!',
      //   },
      // ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="Phone number"
      name="phone"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your username!',
      //   },
      // ]}
    >
      <Input />
    </Form.Item>
    {/* <button type="submit">Register</button> */}
      
        <div>
          <Button onClick={()=>form.submit()} type="primary">Register</Button>
        </div>
    </div>
    </Form>
  )
}

export default RegisterPage;
