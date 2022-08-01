import { Button } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import s from '../Style/Cart.module.css';
const Cart = () => {
  const test = useCart();
  const navigate = useNavigate();
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
                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img src={item.image[0]}class="h-full w-full object-cover object-center"/>
                </div>

                <div class="ml-4 flex flex-1 flex-col">
                  <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#"> {item.name} </a>
                      </h3>
                      <p class="ml-4">${item.cost} each</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Qty {item.qty}</p>
                  </div>
                  <div class="flex flex-1 items-end justify-between text-sm">
                    <p class="text-gray-500">$ {item.cost*item.qty}</p>

                    <div class="flex">
                      <button onClick={() => {test.removeItem(item)}} type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
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
              <div class="mt-6">
                  <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
              </div>
              <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or <button type="button" onClick={navigate('/store/pag/1')} class="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
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