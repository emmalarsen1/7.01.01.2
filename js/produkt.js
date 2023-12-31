// https://kea-alt-del.dk/t7/api/products/1528
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
fetch("https://kea-alt-del.dk/t7/api/products/"+ id)
.then((response) => response.json())
.then((data) => showProduct(data));

function showProduct(product){
    console.log(product);
    document.querySelector(".purchaseBox h3").textContent =
        product.productdisplayname;
    document.querySelector(".purchaseBox .brand").textContent =
        product.brandname;
        document.querySelector(
            "img"
        ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

}

/*
{
  "id": 1528,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Jackets",
  "basecolour": "Black",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Sports",
  "productdisplayname": "Black Fleece Jacket",
  "parsed": 1,
  "soldout": 0,
  "relid": 1528,
  "price": 3999,
  "discount": 49,
  "variantname": "Ferrari Fleece",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.webp",
  "agegroup": "Adults-Men",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "<p style=\"text-align: justify;\"><strong>Composition</strong><br />Black jacket made of blended fabric, has full sleeves with ribbed cuffs, full front zippered placket, spread collar, a patch pocket on the left chest, ferrari branding on left chest, Italy's flag colours above the pocket and at the hemline<br /><br /><strong>Fit</strong><br />Regular<br />&nbsp;<br /><strong>Wash care</strong><br />Gentle machine wash in cool water<br />Do not bleach<br />Tumble dry at low temperature<br />Warm iron<br />Do not dry clean<br /><br />puma's Ferrari merchandise never goes out of demand. The brand sticks to its minimalist style while flaunting Italian colours on this jacket. Pair this with denims and a sober tee.<br /><br /><em>Model statistics</em><br />The model wears a size M with height 6' and shoulders 18\"</p>",
  "styledesc": null
}
*/  