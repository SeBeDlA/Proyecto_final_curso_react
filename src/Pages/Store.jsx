import { CircularProgress, IconButton, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import Paginacion from '../Components/Paginacion/Paginacion';
import { useCart } from '../Context/CartContext';
import SearchIcon from '@mui/icons-material/Search';
import { getCategory } from '../Services/Products';

const Store = (props) => {
  const cart = useCart();
  const param = useParams();
  const [categorias, setCategorias] = useState([])
  const [name, setName] = useState('')
  
  useEffect(() => {
    setName('')
    getCategory().then(resp => {
      setCategorias(resp)
    })
  },[])

  const handlechangeCategory = ({target})=>{
    cart.setCategoryFilter(target.value)
  }

  const handlechangeName = ({target})=>{
    setName(target.value)
    // cart.setNameFilter(target.value)
  }

  return (
    <div className="bg-white">
      {cart.loadingProducts?(
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
          <CircularProgress />
        </div>
      ):(
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Productos</h2>
          <div className='flex w-full'>
            <div className='mr-5'>
              <TextField 
                id="standard-basic" 
                label="Buscar" 
                variant="standard"
                onChange={handlechangeName}
                value={name}
                InputProps={{
                  endAdornment:
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={()=>{cart.setNameFilter(name)}}
                      >
                        <SearchIcon></SearchIcon>
                      </IconButton>
                    </InputAdornment> 
                }} 
              />
            </div>
            <div className='w-1/2'>
              <Select
                id="category-filter"
                value={cart.categoryFilter}
                label="Categoria"
                onChange={handlechangeCategory}
              >
                <MenuItem value={0}>Todos</MenuItem>
                {categorias.map(item=><MenuItem value={item.id}>{item.name}</MenuItem>)}
              </Select>
            </div>
          </div>
          <ItemListContainer items={cart.products}/>
          <Paginacion paginasTotales={cart.paginas} actual={param.pag}/>
        </div>
      )}
    </div>
  )
}

export default Store
