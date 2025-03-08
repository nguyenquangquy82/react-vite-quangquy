
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";

// const ParentComponent = (props) =>{
//   console.log(">>> check props parent:",props)
//   return(
//     <div>Parent component</div>
//   )
// }

// const ChildComponent = (props) =>{
//   return(
//     <div>Child component</div>
//   )
// }
const App = () => {
  const {setUser} = useContext(AuthContext);
  useEffect(()=>{
    fetchUserInfo();
  },[])
  const delay=(milSeconds)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },milSeconds)
    })
  }

  const fetchUserInfo = async()=>{
    const res = await getAccountAPI();
    await delay(3000)
    if(res.data){
      setUser(res.data.user)
      console.log(">>> check user data: ",res.data)
    }
  }

  return (
    <>

      <Header/>
      <Outlet/>
      <Footer/>
    </>
    
 
    
  )
}
export default App;
