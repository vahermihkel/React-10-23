import React, { useEffect, useState } from 'react'
// import cartFromFail from "../../data/cart.json"
import "../../css/Cart.css";
 
function Cart() {
 
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [] );
  const [parcelMachines, setParcelMachines] = useState([]);

  // uef
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(response => response.json())
      .then(json => setParcelMachines(json))
  }, []);

  // const [parcelMachines, setParcelMachines] = useState(parcelMachinesFromFile);

  const calculateCartSum = () => {
    let amount = 0;
    cart.forEach(product => amount = amount + product.toode.price * product.kogus)
    return amount.toFixed(2);
  }

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const decreaseQuantity = (index) => {
    cart[index].kogus = cart[index].kogus - 1;
    if (cart[index].kogus === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].kogus = cart[index].kogus + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const removeFromCart = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
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
        <div className="product" key={product.toode.id} >
          <img className="image" src={product.toode.image} alt="" />
          <div className="name"> {product.toode.name} </div>
          <div className="price"> {product.toode.price.toFixed(2)} €</div>
          <div className="quantity">
            <img className="button" src="/minus.png" alt="" onClick={() => decreaseQuantity(index)} />
            <div> {product.kogus} tk</div>
            <img className="button" src="/plus.png" alt="" onClick={() => increaseQuantity(index)} />
          </div>
          <div className="total"> {(product.toode.price * product.kogus).toFixed(2)} </div>
          <img className="button" src="/remove.png" alt="" onClick={() => removeFromCart(index)} />
        </div>)}


        <select>{parcelMachines
                    // .filter(pm => pm.NAME !== "1. eelistus/Picapac pakiautomaat")
                    .filter(pm => pm.A0_NAME === "EE")
                    .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}</select>
    </div>
  )
}
 
export default Cart