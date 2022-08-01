import { doc, setDoc } from "firebase/firestore";
import { db } from "../Utils/firebaseConfig";

export function getProducts(pag = null, categoryId = null, name = null){
  let url = '';
  if(pag != null || categoryId != null || name != null){
    url = `https://pg-delsur.herokuapp.com/products?`
    if(pag != null){url += `page=${pag}`}
    if(pag != null && categoryId != null){url += `&`}
    if(categoryId != null){url += `categoryId=${categoryId}`}
    if(name != null){url += `&name=${name}`}
  }else{
    url = 'https://pg-delsur.herokuapp.com/products'
  }
  return fetch(url)
  .then(data => data.json())
  .catch(error => error.json());
}
export function getProductsById(id){
  return fetch(`https://pg-delsur.herokuapp.com/products/${id}`)
  .then(data => data.json())
  .catch(error => error.json());
}
export function getCategory(){
  return fetch('https://pg-delsur.herokuapp.com/categories')
  .then(data => data.json())
  .catch(error => error.json());
}
export function createShop(data){
  const shoppingRef = doc(db, 'Shoppings');
  return setDoc(shoppingRef,data)
}