import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
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
  console.log("data => ",data)
  const shoppingRef = collection(db,  'Shopping');
  return addDoc(shoppingRef,data)
}
export async function getShoppingUser(uid){
  console.log("uid: ",uid)
  const q = query(collection(db,'Shopping'), where("user.uid", '==', uid))
  const querySnapshot = await getDocs(q)
  let aux = []
  querySnapshot.forEach(doc => {
    console.log("doc: ",doc.data())
    aux.push({...doc.data(), id: doc.id})
  })
  return aux
}
export async function getOrder(id){
  const docRef = doc(db, "Shopping", id);
  const docSnap = await getDoc(docRef);
  return {id: docSnap.id, ...docSnap.data()}
}