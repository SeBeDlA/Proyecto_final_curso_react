import { CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import Paginacion from '../Components/Paginacion/Paginacion';
import { useCart } from '../Context/CartContext';

const Store = (props) => {
  const cart = useCart();
  const param = useParams();
  return (
    <div className="bg-white">
      {cart.loadingProducts?(
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
          <CircularProgress />
        </div>
      ):(
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Productos</h2>
          <ItemListContainer items={cart.products}/>
          <Paginacion paginasTotales={cart.paginas} actual={param.pag}/>
        </div>
      )}
    </div>
  )
}

export default Store
