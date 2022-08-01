import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import s from './ItemDetail.module.css'
export default function ItemDetail({item}) {
  const [itemCount, setItemCount] = useState(0);
  const cart = useCart();

  const onAdd = (qty) => {
      // alert("You have selected " + qty + " items.");
      setItemCount(qty);
      cart.addToCart(item, qty);
  }

  return (
    <div className={s.detailContainer}>
      <div className={s.wrapperDetail}>
          <div className={s.imgContainer}>
              <img className={s.imgDetail} src={item.image[0]} />
          </div>
          <div className={s.infoContainer}>
              <h1 className={s.title}>{item.name}</h1>
              <p className={s.desc}>{item.description}</p>
              <span className={s.price}>$ {item.cost}</span>
              <p className={s.desc}>{item.stock} unidades en stock</p>
          </div>
          {
              itemCount === 0
              ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
              : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
          }
      </div>
    </div>
  )
}
