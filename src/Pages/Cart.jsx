import { Button } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useCart } from '../Context/CartContext';
import { createShop } from '../Services/Products';
import s from '../Style/Cart.module.css';
const Cart = () => {
  const test = useCart();
  const navigate = useNavigate();
  const auth = useAuth()

  const getDate = () => {
    let date = new Date();
    const day = '0'+date.getDate();
    const month = '0'+(date.getMonth()+1);
    const year = date.getFullYear();
    const hour = '0'+date.getHours();
    const minutes = '0'+date.getMinutes();
    const sec = '0'+date.getSeconds();
    const newDate = `${day.substr(-2)}/${month.substr(-2)}/${year} ${hour.substr(-2)}:${minutes.substr(-2)}:${sec.substr(-2)}`;
    return newDate
  }

  const handleSubmit = () => {
    const data = {products: test.productsCart, user: {uid: auth.user.uid, email: auth.user.email}, total: test.getTotal()+1500, subtotal: test.getTotal(), envio: 1500, createdAt: getDate()}
    createShop(data).then(resp => {
      console.log("Respuesta => ",resp)
      test.clearCart();
      navigate('/store/pag/1')
    })
  }
  useEffect(()=>{
    console.log("user: ",auth.user)
  },[])
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Cart</h2>
      <div className={s.containerCart}>
        <div className={s.contentCart}>
          {
            test.productsCart?.map(item => (
              <div className={s.product} key={item.id}>
                {/* <div className={s.sproductDetail}>
                  <img className={s.imageCart} src={item.image[0]} />
                  <div className={s.details}>
                    <span>
                        <b>Product:</b> {item.name}
                    </span>
                    <Button variant='contained' onClick={() => {test.removeItem(item)}}>Eliminar</Button>
                  </div>
                </div>
                <div className={s.priceDetail}>
                  <div className={s.productAmountContainer}>
                    <div className={s.productAmount}>{item.qty} items - $ {item.cost} each</div>
                  </div>
                  <div className={s.productPrice}>$ {item.cost*item.qty}</div>
                </div> */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img src={item.image[0]} className="h-full w-full object-cover object-center"/>
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#"> {item.name} </a>
                      </h3>
                      <p className="ml-4">${item.cost} each</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Qty {item.qty}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">$ {item.cost*item.qty}</p>

                    <div className="flex">
                      <button onClick={() => {test.removeItem(item)}} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }  
        </div>
        {test.productsCart.length > 0 &&
        <div className="flex-1 bg-white ">
          <div className="border-gray-400 border-2">
            <span className={s.resumeShopTitle}>Resumen de compra</span>
            <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '10px'}}>
              <span>Subtotal:</span>
              <span className={s.resumeShopShipping}>$ {test.getTotal()}</span>
            </div>
            <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '10px'}}>
              <span>Envio:</span>
              <span className={s.resumeShopShipping}>$ 1500</span>
            </div>
            <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '10px'}}>
              <span>Total:</span>
              <span className={s.resumeShopShipping}>$ {test.getTotal() + 1500}</span>
            </div>
            <div className='p-3'>
              <div className="mt-6">
                  <div onClick={handleSubmit} className="flex hover:cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</div>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or <button type="button" onClick={()=>{navigate('/store/pag/1')}} className="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                </p>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default Cart;