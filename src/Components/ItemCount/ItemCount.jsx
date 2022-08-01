import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from 'react';
import s from './ItemCount.module.css';
const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <div className={s.productAmountContainer}>
            <Button variant="text" onClick={increment}><AddIcon /></Button>
            <div className={s.productAmount}>{count}</div>
            <Button variant="text" onClick={decrement}><RemoveIcon /></Button>
            {
                stock && count
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="contained" disabled>Add to Cart</Button>
            }
            
        </div>
    );
}

export default ItemCount;