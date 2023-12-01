import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import Nav from 'react-bootstrap/Nav';
import productsFromFile from "../../data/products.json"
// import cartFromFail from "../../data/cart.json"
import { Button } from '@mui/material';
// import Button from '@mui/material/Button';
 
// 27.11   13. E localStorage-sse massiiv (array)  --->   KOJU suur hunnik kodutöid
//          MUI kujundust
// 29.11   14. K objekt ostukorvis ---> kogused ostukorvis iga toote juures
//        K kujundus ostukorvis ---> KOJU ei saada
// 02.12   15. L API päringud -> pakiautomaatide võtmine ---> KOJU saadan mõne faili
// 06.12   16. K andmebaasi kõik meie kategooriad, tooted, poed jne.... ---> saadan proovitöö Nortali osas
// 11.12   17.  Alamkomponendid, Context, vaatame proovitöö üle ---> saadan veel mõned proovitööd 2-3tk
// 21.12   18. Lõpuprojekti esitlemine

function HomePage() {
  // const { t, } = useTranslation();
  const [products, setProducts] = useState(productsFromFile.slice());
 
  const addToCart = (product) => {
    // localStorage.setItem("teema", "tume") <--- võti oli sama, väärtus erinev
    // localStorage.setItem("teema", "hele")    .getItem("teema")   et kätte saada 

    // localStorage.setItem("keel", "est") <---
    // localStorage.setItem("keel", "eng") 
    // localStorage.setItem("keel", "rus")     .getItem("keel")   et kätte saada 

                                    // "[{},{},{}]"   --->  [{},{},{}]
    const cartFromLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartFromLS.findIndex(cartProduct => cartProduct.toode.id === product.id);
    if (index !== -1) { // kui ei leita, siis järjekorranumber on -1
    // if (index >= 0) { kui leitakse, on järjekorranumber suurem või võrdne 0ga
      cartFromLS[index].kogus = cartFromLS[index].kogus + 1;
    } else {
      cartFromLS.push({"kogus": 1, "toode": product});
    }
    localStorage.setItem("cart", JSON.stringify(cartFromLS));
    // setProducts(products.slice());

    // localStorage-sse pannes:
    // 1. võtta localStorage-st:   localStorage.getItem(VÕTI) || []
    // 2. võtta jutumärgid maha:   JSON.parse()
    // 3. lisada localStorage-st võetule üks juurde:    .push(UUS_ASI)
    // 4. panna jutumärgid tagasi: JSON.stringify()
    // 5. panna localStorage-sse tagasi:   localStorage.setItem(VÕTI, UUS_VÄÄRTUS)
  }
 
  const sortAZ = () => {
    productsFromFile.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(productsFromFile.slice());
  }
 
  const sortZA = () => {
    productsFromFile.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(productsFromFile.slice());
  }
 
  const sortPricesAsc = () => {
    productsFromFile.sort((a,b) => a.price - b.price);
    setProducts(productsFromFile.slice());
  }
 
  const sortPricesDesc = () => {
    productsFromFile.sort((a,b) => b.price - a.price);
    setProducts(productsFromFile.slice());
  }
 
  const filterByFigure = () => {
    const filteredProducts = productsFromFile.filter(product => product.category.toLowerCase() === "figure");
    setProducts(filteredProducts);
  }
 
  const filterByLego = () => {
    const filteredProducts = productsFromFile.filter(product => product.category.toLowerCase() === "lego");
    setProducts(filteredProducts);
  }

  // const filterByAllegor = () => {
  //   const filteredProducts = productsFromFile.filter (product => product.name.toLowerCase().includes("allegor"));
  //   setProducts(filteredProducts.slice());
  // }
 
  const filterByStarWars = () => {
    const filteredProducts = productsFromFile.filter(product => product.category.toLowerCase() === "star wars");
    setProducts(filteredProducts);
  }
 
  return (
    <div>
        <div>Total {products.length} product(s) </div> 
        <button onClick={sortAZ} >SortA-Z</button>
        <button onClick={sortZA} >SortZ-A</button>
        <button onClick={sortPricesAsc} >Sort price Asc</button>
        <button onClick={sortPricesDesc} >Sort price Desc</button>
        <button onClick={filterByLego} >Lego</button>
        <button onClick={filterByStarWars} >Starwars</button>
        <button onClick={filterByFigure} >Figure</button> 
 
        {products.map((product, index) =>  
          <div key={index}> 
            <img src={product.image} alt="" />
            <div> {product.name} </div>
            <div> {product.price} </div>
    
            {/* <Link to={"/cart"} ></Link> */}
            {/* <Button >Contained</Button> */}
            <Button variant="contained" onClick={() => addToCart (product)  }>Add to Cart</Button>
    
            <Link to={"/product/" + product.id} >
              <button>View Product</button>
            </Link>
    
          </div>)}
        {/* <Nav.Link as={Link} to="/">{t("nav.homepage")}</Nav.Link> */}
    </div>
  )
}
 
export default HomePage
