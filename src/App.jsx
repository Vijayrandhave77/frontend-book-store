import "./App.css";
import Layout from "./Components/Layout";
import MainPage from './Pages/MainPage'
import Books from './Pages/Books'
import Shop from './Pages/Shop'
import ContactUs from './Pages/ContactUs'
import Signin from './Pages/Signin'
import Login from './Pages/Login'
import FcatBook from "./Components/FcatBook";
import FcartBook1 from "./Components/FcartBook1";
import FcatBook2 from "./Components/FcatBook2";
import Authenticate from "./Components/Authenticate";
import BooksDiscription from "./Components/BooksDiscription";
import CartPage from "./Components/CartPage";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [token,setToken] = useState("")
  useEffect(()=>{
    const token = Cookies.get("jwtToken")
     setToken(token)
  },[])
 

  let router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layout/>}>
         <Route path="/" element={!token?<Login/>:<MainPage/>}>

         <Route path="/" element={<FcatBook/>}/> 
         <Route path="/feature" element={<FcatBook/>}/> 
         <Route path="/onsale" element={<FcartBook1/>}/> 
         <Route path="/mostviewed" element={<FcatBook2/>}/> 
         </Route> 

         <Route path="/home" element={!token?<Login/>:<MainPage/>}>
         <Route path="/home/" element={<FcatBook/>}/> 
         <Route path="/home/onsale" element={<FcartBook1/>}/> 
         <Route path="/home/mostviewed" element={<FcatBook2/>}/> 
          </Route> 

         <Route path="/book" element={!token?<Login/>:<Books/>}/> 
         <Route path="/shop" element={!token?<Login/>:<Shop/>}/> 
         <Route path="/contact" element={<ContactUs/>}/> 
         {/* <Route path="/contact" element={!token?<Login/>:<ContactUs/>}/>  */}
         <Route path="/signin" element={<Signin/>}/> 
         <Route path="/login" element={<Login/>}/>
         <Route path="/bookdis" element={<BooksDiscription/>}/>
         <Route path="/cartpage" element={<CartPage/>}/>
      </Route>
    )
  );





  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
