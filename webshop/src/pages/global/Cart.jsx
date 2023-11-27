import React, { useState } from 'react'
// import cartFromFail from "../../data/cart.json"
 
 
function Cart() {
 
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [] );
 
  const removeFromCart = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }
 
  const emptyCart = () => {
    cart.splice(0)
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }
 
  const calculateCartSum = () => {
    let amount = 0;
    cart.forEach(product => amount = amount + product.price)
    return amount.toFixed(2);
  }
 
  return (
    <div>
      {cart.length > 0 && 
      <div>
        Total Sum: {calculateCartSum()}€
        <br />
        <div> Total {cart.length} Product(s)</div>
        <button onClick={emptyCart} >Empty</button>
      </div>}
          {cart.length === 0 &&
          <img
            className='cartpicture'
            src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
            alt="" />}
 
      {cart.map((product, index) =>
        <div key={product} >
          <img src={product.image} alt="" />
          {/* <div> {product.id} </div> */}
          <div> {product.name} </div>
          <div> {product.price} </div>
          {/* <div> {product.description} </div>
          <div> {product.category} </div>
          <div> {product.active + 0} </div> */}
          <button onClick={() => removeFromCart(index)} >X</button>
        </div>)}
    </div>
  )
}
 
export default Cart