import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';

// 1. Suunasime MaintainProducts lehelt EditProduct URL-le, saates kaasa ID
// 2. App.js sees võimaldasime panna ID URLi sisse
// 3. EditProductis võtsime selle saadetud ID
// 4a. Importisime kõik tooted
// 4. Otsisime selle ID alusel toote üles
// 5. Muutsime selle saadud ID numbriks, sest URLst tulevad ainult sõnad
// 6. Kui ei leitud, siis tegime varajase returni
// 7. Kuvasime välja HTMLs selle leitud toote (kui leiti ehk läks varajasest returnist üle)

function EditProduct() {                        // 27333323 === URL-s "27333323"
  const { product_id } = useParams();           // 22676756 === URL-s "22676756"  
  const found = productsFromFile.find(product => product.id === Number(product_id));
  // const found2 = productsFromFile.filter(product => product.id === Number(product_id))[0];
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [idUnique, setIdUnique] = useState(true);

  const edit = () => {

    if (idRef.current.value === "") {
      toast.error("Id pole täidetud!");
      return;
    }

    if (nameRef.current.value === "") {
      toast.error("Nimi pole täidetud!");
      return;
    }

    // if (nameRef.current.value[0] === nameRef.current.value[0].toLowerCase()) {
    //   toast.error("Väikse algustähega või numbri või tähemärgiga ei saa alustada!");
    //   return;
    // }

    if (nameRef.current.value[0] !== nameRef.current.value[0].toUpperCase()) {
      toast.error("Väikse algustähega ei saa alustada!");
      return;
    }

    if (priceRef.current.value === "") {
      toast.error("Hind pole täidetud!");
      return;
    }

    if (Number(priceRef.current.value) < 0) {
      toast.error("Hind peab olema positiivne!");
      return;
    }

    // index - järjekorranumber, mitmes ta on alates 0st
    const index = productsFromFile.findIndex(product => product.id === Number(product_id));
    productsFromFile[index] = {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked
    }
    // läheb oluliseks andmebaaside puhul
    navigate("/admin/products");
  }

  const checkIdUniqueness = () => {
    // SIIN SEES KONTROLLIME, kas kellelgi on selline ID olemas nagu idRef.current.value sees
    const result = productsFromFile.find(product => product.id === Number(idRef.current.value));
    if (result === undefined) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  if (found === undefined) {
    return <div>Ei leitud</div>
  }

  return (
    <div>
      { idUnique === false && <div>Sisestatud ID ei ole unikaalne!</div>}
      <label>ID</label> <br />
      <input ref={idRef} onChange={checkIdUniqueness} type="number" defaultValue={found.id} /> <br />
      <label>Name</label> <br />
      <input ref={nameRef} type="text"  defaultValue={found.name} /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} type="number" defaultValue={found.price} /> <br />
      <label>Image</label> <br />
      <input ref={imageRef} type="text" defaultValue={found.image} /> <br />
      <label>Category</label> <br />
      <input ref={categoryRef} type="text" defaultValue={found.category} /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" defaultChecked={found.active} /> <br />
      {/* <Link to="/admin/products"> */}
      <button disabled={ idUnique === false } onClick={edit}>Muuda</button>
      {/* </Link> */}

      <ToastContainer 
        theme="dark"
        position="bottom-right"
      />
    </div>
  )
}

export default EditProduct


// {
//   "id": 27333323,
//   "image": "https://i.ebayimg.com/thumbs/images/g/vmMAAOSwnXVibfoX/s-l225.webp",
//   "name": "Roblox Random Virtual",
//   "price": 2.49,
//   "description": "Roblox Random Virtual Toy Codes New Celebrity Series Sent By Messages Unused",
//   "category": "figure",
//   "active": true
// },
// {
//   "id": 22676756,
//   "image": "https://i.ebayimg.com/thumbs/images/g/F3sAAOSwtnNixxSh/s-l225.webp",
//   "name": "Stranger Things 4",
//   "price": 40.73,
//   "description": "Stranger Things 4 - Eddie with Guitar Funko Pop! PRE-ORDER #1250 + .5 Protector",
//   "category": "figure",
//   "active": true
// }