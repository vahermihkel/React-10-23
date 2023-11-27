import React from 'react'
import { useRef, useState } from 'react'
import productsFromFile from '../../data/products.json'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'
 
// 8. Tehke 7 erinevat labelit ja inputi
// 9. Tehke 7 erinevat useRefi, mille panime ükshaaval inputi sisse
// 10. Tehke nupp, mis siduge ära funktsiooniga
// 11. Kõikide toodete hulka lisage see toode, 
//          vastavalt mis oli refide current valuede sees
// 12. HTMLs numbritele type "number" ja funktsioonis numbritele Number(), 
//        booleanitele checked
// Vaadake nii EditProducti kui ka eesti keelset projekti
 
function AddProduct() {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [idUnique, setIdUnique] = useState(true);
  const { t } = useTranslation();
 
  const addProduct = () => {
    // refreshiga tuleb tagasi
    // mine vaata kas avalehele, kas on lisatud (peab lisama faili, mitte products usestate muutujasse)
 
    if (idRef.current.value === "") {
      toast.error("ID pole täidetud!");
      return;
    }
 
    productsFromFile.push( {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.value.checked
    });
    toast("Toode lisatud!");

    idRef.current.value = "";
    imageRef.current.value = "";
    nameRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    categoryRef.current.value = "";
    activeRef.current.checked = false;
  }
 
  const checkIdUniqueness = () => {
    // siin sees kontrollime, kas kellegil on selline ID olemas nagu idRef.current.value sees
    const result = productsFromFile.find(product => product.id === Number(idRef.current.value));
 
    if (result === undefined) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }
 
  return (
    <div>
      { idUnique === false && <div>Sistestatud ID ei ole unikaalne!</div>}
      <label>ID</label> <br />
      <input ref={idRef} onChange={checkIdUniqueness} type="number"></input> <br />
      <label>{t("name")}</label> <br />
      <input ref={nameRef} type="text"></input> <br />
      <label>{t("price")}</label> <br />
      <input ref={priceRef} type="number"></input> <br />
      <label>{t("image")}</label> <br />
      <input ref={imageRef} type="text"></input> <br />
      <label>{t("category")}</label> <br />
      <input ref={categoryRef} type="text"></input> <br />
      <label>{t("description")}</label> <br />
      <input ref={descriptionRef} type="text"></input> <br />
      <label>{t("active")}</label> <br />
      <input ref={activeRef} type="checkbox"></input> <br />
      <button disabled={idUnique === false} onClick={() => addProduct()}>{t("add")}</button>
 
      <ToastContainer />
    </div>
  )
}
 
export default AddProduct
