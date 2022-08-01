import React, { useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useCart } from '../../Context/CartContext';

export default function ShoppingCartButton() {
  const cartContext = useCart();
  return (
    <>
      <IconButton aria-label="cart">
        { cartContext.productsCart.length > 0?(
          <Badge badgeContent={cartContext.totalProductos} color="warning">
            <ShoppingCartIcon color='#000000'/>
          </Badge>
        ): (
          <ShoppingCartIcon color='#000000'/>
        )}
      </IconButton>
    </>
  )
}
