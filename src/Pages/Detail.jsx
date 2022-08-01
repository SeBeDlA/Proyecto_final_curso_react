import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../Components/ItemDetail/ItemDetail'
import { getProductsById } from '../Services/Products'

export default function Detail() {
  const [product, setProduct] = useState(null)
  const param = useParams()
  useEffect(()=>{
    getProductsById(param.id).then(prod =>{
      setProduct(prod)
    })
  },[])
  return (
    <>
      {(product == null)?(
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <CircularProgress />
      </div>
      ):(
        <ItemDetail item={product}/>
      )}
    </>
  )
}
