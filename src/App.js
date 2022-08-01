import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./Context/AuthContext";
import CartContextProvider from "./Context/CartContext";
import Cart from "./Pages/Cart";
import Detail from "./Pages/Detail";
import DetailOrder from "./Pages/DetailOrder";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyProfile from "./Pages/MyProfile";
import Register from "./Pages/Register";
import Shoppings from "./Pages/Shoppins";
import Store from "./Pages/Store";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <div>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/store/pag/:pag' element={<Store />}></Route>
              <Route path='/product/:id' element={<Detail />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/myprofile' element={<MyProfile />}></Route>
              <Route path='/myprofile/shoppings' element={<Shoppings />}></Route>
              <Route path='/myprofile/shoppings/:idOrder' element={<DetailOrder />}></Route>
            </Routes>
          </div>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
