import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./Context/AuthContext";
import CartContextProvider from "./Context/CartContext";
import Cart from "./Pages/Cart";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Store from "./Pages/Store";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <AuthContextProvider>
          <div>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/store/pag/:pag' element={<Store />}></Route>
              <Route path='/product/:id' element={<Detail />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
            </Routes>
          </div>
        </AuthContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
