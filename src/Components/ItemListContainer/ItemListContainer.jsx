import { useEffect } from "react";
import { useCart } from "../../Context/CartContext";
import ItemList from "../ItemList/ItemList";
import s from './ItemListContainer.module.css';

const ItemListContainer = ({ items }) => {
    return (
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {items.map(item => <ItemList key={item.id} title={item.name} id={item.id} stock={item.stock} price={item.cost} pictureUrl={item.image[0]}/>)}
      </div>
    );
}

export default ItemListContainer;