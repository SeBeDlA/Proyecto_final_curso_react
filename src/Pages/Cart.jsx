import { Button } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import s from '../Style/Cart.module.css';
const Cart = () => {
  const test = useCart();

  console.log(test.cartList);

  return (
    <div className={s.wrapperCart}>
      <h1 className={s.titleCart}>YOUR CART</h1>
      <div className={s.containerCart}>
        <div className={s.contentCart}>
          {
            test.cartList?.map(item => (
              <div className={s.product} key={item.id}>
                <div className={s.sproductDetail}>
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
                </div>
              </div>
            ))
          }  
        </div>
        {test.cartList.length > 0 &&
        <div className={s.resumeShop}>
          <div className={s.resumeShopContent}>
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
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default Cart;