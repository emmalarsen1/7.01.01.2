fetch("https://kea-alt-del.dk/t7/api/products?limit=50")
    .then((res) => res.json())
    .then(data => showProducts(data))


function showProducts(products){
    //looper og kalder showProduct (ental)
    products.forEach(showProduct)
}

function showProduct(product){
//fang template
const template = document.querySelector("#smallProductTemplate").content;
//lav kopi
const copy = template.cloneNode(true);
//ændre indhold
copy.querySelector("h1").textContent = product.productdisplayname;
copy.querySelector(".price").textContent = product.price;
copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
if (product.soldout){
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
}
copy.querySelector(".readmore").setAttribute("href", `produkt.html?id=${product.id}`)
//appende
document.querySelector(".flexbox1").appendChild(copy);
    }


    /*{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}*/