import React from 'react'

// 1. Suunasime MaintainProducts lehelt EditProduct URL-le, saates kaasa ID
// 2. App.js sees võimaldasime panna ID URLi sisse
// 3. EditProductis võtsime selle saadetud ID
// 4a. Importisime kõik tooted
// 4. Otsisime selle ID alusel toote üles
// 5. Muutsime selle saadud ID numbriks, sest URLst tulevad ainult sõnad
// 6. Kui ei leitud, siis tegime varajase returni
// 7. Kuvasime välja HTMLs selle leitud toote (kui leiti ehk läks varajasest returnist üle)
// üleval EditProducts
// 8. Tegime 7 erinevat labelit ja inputi
// 9. Tegime 7 erinevat useRefi, mille panime ükshaaval inputi sisse
// 10. Tegime nupu, mille sidusime ära funktsiooniga
// 11. Kõikide toodete hulgast muutsime seda toodet, 
//          vastavalt mis oli refide current valuede sees
// 12. HTMLs numbritele type "number" ja funktsioonis numbritele Number(), 
//        booleanitele checked

// KODUS:
// 8. Tehke 7 erinevat labelit ja inputi
// 9. Tehke 7 erinevat useRefi, mille panime ükshaaval inputi sisse
// 10. Tehke nupp, mis siduge ära funktsiooniga
// 11. Kõikide toodete hulka lisage see toode, 
//          vastavalt mis oli refide current valuede sees
// 12. HTMLs numbritele type "number" ja funktsioonis numbritele Number(), 
//        booleanitele checked
// Vaadake nii EditProducti kui ka eesti keelset projekti

function AddProduct() {
  return (
    <div>AddProduct</div>
  )
}

export default AddProduct