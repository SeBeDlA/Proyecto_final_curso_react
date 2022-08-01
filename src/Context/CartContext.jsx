import { useContext, useEffect, useState, createContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../Services/Products";
import { useAuth } from "./AuthContext";

export const CartContext = createContext();
export const useCart = () => {
  const context = useContext(CartContext)
  return context
}
const CartContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [paginas, setPaginas] = useState(0);
  const [totalProductos, setTotalProductos] = useState(0)
  const [categoryFilter, setCategoryFilter] = useState(0)
  const [nameFilter, setNameFilter] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  useEffect(() => {
    setLoadingProducts(true)
    let pag = null;
    if(location.pathname.indexOf('/store/pag') != -1){
      pag = location.pathname.substr(11);
    }
    let name = (nameFilter == '')?null:nameFilter
    let category = (categoryFilter == 0)?null:categoryFilter
    getApiProducts(pag, category, name)
  }, [location, categoryFilter, nameFilter])
  
  useEffect(()=>{
    setTotalProductos(getTotalProductItem())
  },[productsCart])

  useEffect(()=>{
    navigate('/store/pag/1')
  },[categoryFilter, nameFilter])

  useEffect(()=>{
    console.log("productCart: ",productsCart)
  },[productsCart])

  const getCartProducts = () => {
    const productos = localStorage.getItem('cartProducts')
    let productosjson = {}
    if(productos){
      productosjson = JSON.parse(productos)
    }
    setProductsCart(productosjson)
  }

  const getTotalProductItem = () => {
    let aux = 0;
    productsCart.map(item=>{
      aux += item.qty;
    })
    return aux
  }

  const getApiProducts = (pag = null, categoryId = null, name = null) => {
    getProducts(pag, categoryId, name).then(resp => {
      setLoadingProducts(false);
      // getCartProducts();
      setProducts(resp.products);
      setPaginas(resp.totalPage);
    })
  }

  const addToCart = (item, qty) => {
    let aux = []
    let found = false
    productsCart.map(itemList => {
      let itemAux = itemList
      if(item.id == itemList.id){
        found = true
        itemAux.qty += qty
      }
      aux.push(itemAux)
    })
    setTotalProductos(totalProductos+qty)
    if(!found) aux.push({qty, ...item})
    setProductsCart(aux);
  }

  const removeItem = (item) => {
    let aux = []
    aux = productsCart.filter(itemList => itemList.id != item.id)
    setProductsCart(aux)
  }

  const getTotal = () => {
    let total = 0;
    productsCart.map(item => {
      let cost = item.cost * item.qty;
      total += cost;
    })
    return total;
  }

  const clearCart = () =>{
    setProductsCart([])
  }
  

  return (
    <CartContext.Provider value={{getCartProducts, products, paginas, productsCart, loadingProducts, addToCart, removeItem, getTotal, totalProductos, setCategoryFilter, categoryFilter, nameFilter, setNameFilter, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;