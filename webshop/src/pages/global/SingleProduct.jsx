import React from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from '../../data/products.json'
 
function SingleProduct() {
  const { product_id } = useParams();
  const found = productsFromFile.find(product => product.id === Number(product_id));
 
  if (found === undefined) {
    return <div>Ei leitud</div>
  }
 
  return (
    <div>
      <div>Product id: {found.id}</div> <br />
      <div>Product name: {found.name}</div> <br />
      <div>Price: {found.price}</div> <br />
      <div>Description: {found.description}</div> <br />
      <div>Category: {found.category}</div> <br />
      <img src={found.image} alt=""/> <br />
    </div>
    )
  }
 
export default SingleProduct