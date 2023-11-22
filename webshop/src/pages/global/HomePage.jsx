import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const sortAZ = () => {}

  const sortZA = () => {}

  const sortPriceAsc = () => {}

  const sortPriceDesc = () => {}

  const addToCart = () => {}

  const filterByFigure = () => {}

  const filterByLego = () => {}

  const filterByStarWars = () => {}

  return (
    <div>
      {products.map(product => 
        <div>
          <img src={product.image} alt="" />
          {/* <div>{product.id}</div> */}
          <div>{product.name}</div>
          <div>{product.price}</div>
          {/* <div>{product.description}</div> */}
          {/* <div>{product.category}</div> */}
          {/* <div>{product.active}</div> */}
          <button>Lisa ostukorvi</button>
        </div>
      )}
    </div>
  )
}

export default HomePage