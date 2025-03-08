import { createContext, useState } from "react";

export const AuthContext = createContext({
  email: "",
  phone: "",
  fullName: "",
  role: "",
  avatar: "_",
  id: ""


});

export const AuthWrapper = (props) =>{
  const [user,setUser] = useState({
    email: "",
    phone: "",
    fullName: "quangquy",
    role: "",
    avatar: "_",
    id: ""
  
  })
  return (
    <AuthContext.Provider value={{user,setUser}} >
      {props.children}
    </AuthContext.Provider>
  )
}

