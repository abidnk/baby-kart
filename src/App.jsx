import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";
import { myContext } from "./Context/Context";
import { CardProduct } from "./Component/CardProducts";
import ViewProduct from "./Component/ViewProduct";
import Addcart from "./Component/Addcart";
import Payment from "./Component/Payment";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { DemiUser } from "./Component/DemyUser";
import Adminlogin from "./AdminComponents/Adminlogin";
import Demiadm from "./AdminComponents/Admindemi";
import Admindemi from "./AdminComponents/Admindemi";
import Adminhome from "./AdminComponents/Adminhome";
import Adminpath from "./AdminComponents/Adminpath";
import Adminedit from "./AdminComponents/Adminedit";
import Adminadd from "./AdminComponents/Adminadd";
import Adminuser from "./AdminComponents/Adminuser";
import ProfilePage from "./AdminComponents/Adminuserdetails";
import Preload from "./Component/Preload";

function App() {
  const [userName, setUserName] = useState([]);
  const [products, setProducts] = useState(CardProduct);
  const [cartt, setCartt] = useState([]);
  const [user, setUser] = useState(DemiUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [admindata, setAdmindata] = useState(Admindemi)
  const [isAdmLoggedIn, setAdmIsLoggedIn] = useState(false);
  const setUserContext = (userID) => {
    setLoggedInUserId(userID);
  };

  return (
    


    <>
       
      <myContext.Provider
        value={{
          products,
          setProducts,
          cartt,
          setCartt,
          user,
          setUser,
          isLoggedIn,
          setIsLoggedIn,
          loggedInUserId,
          setLoggedInUserId,
          setUserContext,
          admindata,
          setAdmindata,
          userName,
          setUserName,
          isAdmLoggedIn, setAdmIsLoggedIn
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/add/:id" element={<ViewProduct />}></Route>
          <Route path="/cart" element={<Addcart />}></Route>
          <Route path="/pay" element={<Payment />}></Route>
          <Route path="/login" element={<Login />}></Route>
          
          <Route path="/admlogin" element={<Adminlogin />}></Route>
          {isAdmLoggedIn?(<Route path="/admhome" element={<Adminhome />}></Route>):null}
          
          <Route path="/admpath" element={<Adminpath/>}></Route>
          <Route path="/admedit/:id" element={<Adminedit/>}></Route>
          <Route path="/admadd" element={<Adminadd/>}></Route>
          <Route path="/admuser" element={<Adminuser/>}></Route>
          <Route path="/admpro/:id" element={<ProfilePage/>}></Route>
  
          

        </Routes>
      </myContext.Provider>
    </>
  );
}

export default App;
