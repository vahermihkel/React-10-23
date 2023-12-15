import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from "../../css/HomePage.module.css"
import { Spinner } from 'react-bootstrap';
import SortButtons from '../../components/home/SortButtons';
import { useCartSum } from '../../store/CartSumContext';

// 27.11   13. E localStorage-sse massiiv (array)  --->   KOJU suur hunnik kodutöid
//          MUI kujundust
// 29.11   14. K objekt ostukorvis ---> kogused ostukorvis iga toote juures
//        K kujundus ostukorvis ---> KOJU ei saada
// 02.12   15. L API päringud -> pakiautomaatide võtmine ---> KOJU saadan mõne faili
// 06.12   16. K andmebaasi kõik meie kategooriad, tooted, poed jne.... ---> saadan proovitöö Nortali osas
// 14.12 18.00-21.15   17.  Alamkomponendid, CSS moodulid, Context, vaatame proovitöö üle ---> saadan veel mõned proovitööd 2-3tk
// 30.12 14.00-15.30   18. Lõpuprojekti esitlemine    1.5h

// Rahel:
// 02.12 4ak/h
// 13.12 2ak/h

// Heiki:
// 02.12
// 06.12
// 17.12
// 20.12

function HomePage() {
  const [products, setProducts] = useState([]); // Kõikuvas seisundis (HTMLs)
  const [dbProducts, setDbProducts] = useState([]); // ALATI ORIGINAALSED TOOTED 481tk
  const url = "https://mihkel-react-webshop-10-23-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const categoryUrl = "https://mihkel-react-webshop-10-23-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);
  const { setCartSum } = useCartSum();

  // uef + import
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setDbProducts(json);
      })

    fetch(categoryUrl)
      .then(res => res.json())
      .then(json => {
        setCategories(json);
      })
  }, []);
 
  const addToCart = (product) => {
    const cartFromLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartFromLS.findIndex(cartProduct => cartProduct.toode.id === product.id);
    if (index !== -1) { 
      cartFromLS[index].kogus = cartFromLS[index].kogus + 1;
    } else {
      cartFromLS.push({"kogus": 1, "toode": product});
    }
    localStorage.setItem("cart", JSON.stringify(cartFromLS));
    
    let amount = 0;
    cartFromLS.forEach(product => amount = amount + product.toode.price * product.kogus)
    setCartSum(amount.toFixed(2));
  }


  const filterByCategory = (categoryClicked) => {
    const filteredProducts = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(filteredProducts);
  }

  if (dbProducts.length === 0 || categories.length === 0) {
    return <Spinner />
  }
 
  return (
    <div>
        <div>Total {products.length} product(s) </div> 
        <SortButtons
          products={products}
          setProducts={setProducts}
        />
        {/* <button onClick={filterByLego} >Lego</button>
        <button onClick={filterByStarWars} >Starwars</button>
        <button onClick={filterByFigure} >Figure</button>  */}
        { categories.map( category =>  <button onClick={() => filterByCategory(category.name)}>{category.name}</button>) }
 
        <div className={styles.products}>
          {products.map((product, index) =>  
            <div key={index} className={styles.product}> 
              <img className={styles.image} src={product.image} alt="" />
              <div className={styles.name}> {product.name} </div>
              <div> {product.price} </div>
              <Button variant="contained" onClick={() => addToCart (product)  }>Add to Cart</Button>
              <Link to={"/product/" + product.id} >
                <button>View Product</button>
              </Link>
            </div>)}
        </div>
    </div>
  )
}
 
export default HomePage
