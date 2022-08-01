import { useContext, useEffect, useState, createContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../Services/Products";

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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("location: ",location)
    setLoadingProducts(true)
    let pag = null;
    if(location.pathname.indexOf('/store/pag') != -1){
      console.log("pag: ",location.index)
      pag = location.pathname.substr(11);
    }
    getApiProducts(pag)
  }, [location])

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

  const getApiProducts = (pag = null) => {
    getProducts(pag).then(resp => {
      console.log("Productos => ",resp)
      setLoadingProducts(false);
      // getCartProducts();
      setProducts(resp.products);
      setPaginas(resp.totalPage);
    })
  }

  const addToCart = (item, qty) => {
    let aux = []
    let found = false
    console.log("productcart => ",productsCart.length);
    productsCart.map(itemList => {
      let itemAux = itemList
      if(item.id == itemList.id){
        found = true
        itemAux.qty += qty
      }
      setTotalProductos(totalProductos+qty)
      aux.push(itemAux)
    })
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
  
  return (
    <CartContext.Provider value={{getCartProducts, products, paginas, productsCart, loadingProducts, addToCart, removeItem, getTotal, totalProductos}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;