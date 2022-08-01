import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import { getShoppingUser } from '../Services/Products'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Shoppings = () => {
  const auth = useAuth()
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    if(auth.user){
      getShoppingUser(auth.user.uid).then(resp => {
        console.log("respuesta ",resp)
        setOrders(resp)
      })      
    }
  }, [])
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="bg-white overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">My Orders</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {orders.map(order => (
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-200 align-middle flex" key={order.id}>
                <dt className="text-sm font-medium text-gray-500 align-middle">{order.createdAt}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 align-middle">${order.total}</dd>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 text-right">
                  <IconButton aria-label="cart" onClick={()=>{navigate(`/myprofile/shoppings/${order.id}`)}}>
                      <VisibilityIcon color='#ffffff'/>
                  </IconButton>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
export default Shoppings
