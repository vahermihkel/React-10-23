import React, { useRef, useState } from "react";
import productsFromFile from "../../data/products.json";
import { Link } from "react-router-dom";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();

  const deleteProduct = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
  }

  const searchFromProducts = () => {
    const result = productsFromFile.filter((product) =>
      product.name
        .toLowerCase()
        .includes(searchedRef.current.value.toLowerCase())
    );
    setProducts(result);
  };

  return (
    <div>
      <div>{products.length} tk</div>
      <input ref={searchedRef} onChange={searchFromProducts} type="text" />
      
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.id}
              className={product.active ? "active" : "inactive"}
            >
              <td><img src={product.image} alt="" /></td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.active + 0}</td>
              <td>
                <button onClick={() => deleteProduct(index)}>Kustuta</button>
                <Link to={"/admin/edit/" + product.id}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default MaintainProducts;
