export function getProducts(pag = null){
  let url = '';
  if(pag != null){
    url = `https://pg-delsur.herokuapp.com/products?page=${pag}`
  }else{
    url = 'https://pg-delsur.herokuapp.com/products'
  }
  console.log('URL => ', url)
  return fetch(url)
  .then(data => data.json())
  .catch(error => error.json());
}
export function getProductsById(id){
  return fetch(`https://pg-delsur.herokuapp.com/products/${id}`)
  .then(data => data.json())
  .catch(error => error.json());
}