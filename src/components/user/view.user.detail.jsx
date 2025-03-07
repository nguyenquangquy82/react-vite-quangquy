import { Drawer,Button, notification } from "antd";
import { useState } from "react";
import { handleUploadFile, updateUserAPI, updateUserAvatarAPI } from "../../services/api.service";


const ViewUserDetail = (props) =>{
  const {
      dataDetail,
      setDataDetail,
      isDetailOpen,
      setIsDetailOpen,
      loadUser
  } = props;
  const [selectedFile,setSelectedFile] = useState(null);
  const [preview,setPreview] = useState(null);
  const handleOnChangeFile = (event) =>{
    if  (!event.target.files || event.target.files.length === 0){
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = event.target.files[0];
    if(file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  }
  

  const handleUpdateUserAvatar =  async() => { 
    const  resUpload = await handleUploadFile(selectedFile,"avatar");
    if(resUpload.data){
      const newAvatar = resUpload.data.fileUploaded;
      const resUpdateAvatar = await updateUserAvatarAPI(
      newAvatar , dataDetail._id,dataDetail.fullName,dataDetail.phone
      ); 
      if(resUpdateAvatar.data){
        setIsDetailOpen(false);
        setSelectedFile(null);
        setPreview(null);
        await loadUser();
        notification.success({
          message: "Update user Avatar ",
          description: "Cập nhật avatar thành công"
        });
        await resUpdateAvatar();
      } else {
        notification.error({
          message: "Error update file ",
          description: JSON.stringify(resUpdateAvatar.message)
        })
      }
    }else {
      notification.error({
        message: "Error upload file ",
        description: JSON.stringify(resUpload.message)
      })
    
      

  }
}



  return (
    <Drawer
    width={"40vw"}
    title="Chi tiết User"
    onClose={() => {
      setDataDetail(null);
      setIsDetailOpen(false);
    }}
    open={isDetailOpen}
  >
    {dataDetail ? (
      <>
        <p>Id: {dataDetail._id}</p>
        <br />
        <p>Full Name: {dataDetail.fullName}</p>
        <br />
        <p>Email: {dataDetail.email}</p>
        <br />
        <p>Phone number: {dataDetail.phone}</p>
        <br />
        <p>Avatar:</p>
        <div style={{
          marginTop:"10px",
          height:"100px",
          width:"150px",
         
     
        }}>
            <img style={{height:"100%" ,width:"150%",objectFit:"contain"}} 
             src= {`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
        </div>
        <div>
              <label htmlFor='btnUpload' style={{
                display:"block",
                width:"fit-content",
                marginTop:"15px",
                padding:"5px 10px",
                background: "orange",
                borderRadius:"5px",
                cursor:"pointer",
             
              }}>
              Upload avatar</label>
              <input type="file" hidden id='btnUpload'
              onChange={(event)=>handleOnChangeFile(event)}
               />
        </div>
        {preview &&
          <>
              <div style={{
                marginBottom:"15px",
                marginTop:"10px",
                height:"100px",
                width:"150px",
              }}>
                  <img style={{height:"100%" ,width:"150%",objectFit:"contain"}} 
                    src= {preview} />
              </div>
              <Button type='primary' onClick={()=>handleUpdateUserAvatar()}>Save</Button>
          </>
        }
        
      </>
    ) : (
      <p>Không có dữ liệu</p>
    )
    }
     
  </Drawer>
  )
    
}
export default ViewUserDetail;