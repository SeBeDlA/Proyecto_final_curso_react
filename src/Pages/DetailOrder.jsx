import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOrder } from '../Services/Products';
import s from '../Style/Cart.module.css';
export default function DetailOrder() {
  const param = useParams();
  const [orden, setOrden] = useState({});

  useEffect(()=>{
    console.log("parametros: ",param)
    getOrder(param.idOrder).then(resp => {
      console.log("parametro orden: ",resp)
      setOrden(resp)
    })
  },[])

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Order of {orden.createdAt}</h2>
      <div className="flex justify-between text-base font-medium text-gray-900 mt-3 border-y border-gray-200 p-3">
        <h3>
          <a> SubTotal: ${orden.subtotal} </a>
        </h3>
        <p className="ml-4">Total: ${orden.subtotal}</p>
      </div>
      <div className={s.containerCart}>
        <div className={s.contentCart}>
          {
            orden.products?.map(item => (
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
                  </div>
                </div>
              </div>
            ))
          }  
        </div>
      </div>
    </div>
  )
}
