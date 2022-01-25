var prev = document.getElementById("prev");
var next = document.getElementById("next");
var img = document.getElementById("img");
var dots = document.getElementsByClassName("dot");
let count = 1;
prev.addEventListener('click', (e) => {
    e.preventDefault();
    ++count;
    if (count > 4) {
        count = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#555555";
    }
    dots[count - 1].style.backgroundColor = "#ffffff";
    img.src = "./images/" + count + ".jpg";
});
next.addEventListener('click', (e) => {
    e.preventDefault();
    --count;
    if (count < 1) {
        count = 4;
    }
    for (let i = dots.length - 1; i >= 0; i--) {
        dots[i].style.backgroundColor = "#555555";
    }
    dots[count - 1].style.backgroundColor = "#ffffff";
    img.src = "./images/" + count + ".jpg";

})

var containerSearch = document.getElementById("container-search");
var searchEngin = document.getElementById("search-engin");
var col, col_a, col_a_img, col_p, col_p_img, col_bName, col_bPrice,
    col_span, col_type, col_type_span, col_div, col_div_pRALA, col_div_pCart,
    col_div_pCart_i, col_div_pStar, col_bNameTxt, col_bPriceTxt, col_spanTxt, col_typeTxt,
    col_type_spanTxt, col_div_pRALATxt, col_div_pStarTxt;
/* col = document.createElement('div');
col_a = document.createElement('a');
col_a_img = document.createElement('img');
col_p = document.createElement('p');
col_p_img = document.createElement('img');
col_bName = document.createElement('p');
col_bPrice = document.createElement('p');
col_span = document.createElement('span');
col_type = document.createElement('p');
col_type_span = document.createElement('span');
col_div = document.createElement('div');
col_div_pRALA = document.createElement('p');
col_div_pCart = document.createElement('p');
col_div_pCart_i = document.createElement('i');
col_div_pStar = document.createElement('p');*/

localStorage.bookNames = ['كاتلوج الحب', 'angular 2+', 'andeoid', 'algorithms', 'c++', 'لانك الله', 'adobe'];
localStorage.bookPrice = [55, 82, 32, 17, 81, 21, 26];
localStorage.bookImgUrl = ['./images/Screenshot (91).png', './images/Screenshot (93).png', './images/Screenshot (94).png', './images/Screenshot (95).png', './images/Screenshot (96).png', './images/Screenshot (97).png', './images/Screenshot (21).png'];
var arrBN = localStorage.bookNames.split(',');
var arrBP = localStorage.bookPrice.split(',');
var arrBIU = localStorage.bookImgUrl.split(',');

for (var i = 0; i < arrBN.length; i++) {
   
    /* ******************************************************************* */
    col = document.createElement('div');
    col_a = document.createElement('a');
    col_a_img = document.createElement('img');
    col_p = document.createElement('p');
    col_p_img = document.createElement('img');
    col_bName = document.createElement('p');
    col_bPrice = document.createElement('p');
    col_span = document.createElement('span');
    col_type = document.createElement('p');
    col_type_span = document.createElement('span');
    col_div = document.createElement('div');
    col_div_pRALA = document.createElement('p');
    col_div_pCart = document.createElement('p');
    col_div_pCart_i = document.createElement('i');
    col_div_pStar = document.createElement('p');

    col_a_img.src = arrBIU[i];
    col_p_img.src = "./images/book-logo.png";
    col_pTxt = document.createTextNode("كتاب الاكتروني");
    col_bNameTxt = document.createTextNode(arrBN[i]);
    col_bPriceTxt = document.createTextNode(arrBP[i] + "ر.س.");
    col_spanTxt = document.createTextNode("شامل الضريبة");
    col_typeTxt = document.createTextNode("صيغ اخرى ");
    col_type_spanTxt = document.createTextNode("كتاب مطبوع");
    col_type_span.appendChild(col_type_spanTxt);
    col_div_pRALATxt = document.createTextNode("⇄");
    col_div_pRALA.appendChild(col_div_pRALATxt);
    col_div.appendChild(col_div_pRALA);
    col_div.appendChild(col_div_pCart);
    col_div_pCart_i.classList.add("fa");
    col_div_pCart_i.classList.add("fa-shopping-cart");
    col_div_pCart_i.classList.add("cart-ico");
    col_div_pCart.appendChild(col_div_pCart_i);
    col_div_pStarTxt = document.createTextNode("★");
    col_div_pStar.appendChild(col_div_pStarTxt);
    col_div.appendChild(col_div_pStar);
    col_a.href = "./details.html";
    col_a.appendChild(col_a_img);
    col_p.appendChild(col_p_img);
    col_p.appendChild(col_pTxt);
    col_bName.appendChild(col_bNameTxt);
    col_bPrice.classList.add("price");
    col_bPrice.appendChild(col_bPriceTxt);
    col_span.style.right = "30%";
    col_span.appendChild(col_spanTxt);
    col_type.appendChild(col_typeTxt);
    col_type.appendChild(col_type_span);
    col.appendChild(col_a);
    col.appendChild(col_p);
    col.appendChild(col_bName);
    col.appendChild(col_bPrice);
    col.appendChild(col_span);
    col.appendChild(col_type);
    col_div.classList.add("icons");
    col.appendChild(col_div);
    col.classList.add("col");
    containerSearch.appendChild(col);



   
}
searchEngin.addEventListener('input', () => {

    /* alert(localStorage.bookNames);
    alert(localStorage.bookPrice);*/
    /* alert(arrBP.length); */
    var allCol = document.getElementsByClassName('col');
    if (containerSearch.hasChildNodes()) {
        var a = containerSearch.childElementCount;
        for (let i = a - 1; i >= 0; i--) {
            containerSearch.removeChild(allCol[i]);
        }


    }
    for (var i = 0; i < arrBN.length; i++) {
        if (arrBN[i].indexOf(searchEngin.value) >= 0) {
            /* newEle = document.createElement('li');
            newText = document= document.createTextNode(i + "- " + arrBN[i] + ', ' + arrBP[i] + ', ' + arrBIU[i]);
            newEle.appendChild(newText);
            newEle.classList.add("lists");
            list.appendChild(newEle); */

            /* ******************************************************************* */
            col = document.createElement('div');
            col_a = document.createElement('a');
            col_a_img = document.createElement('img');
            col_p = document.createElement('p');
            col_p_img = document.createElement('img');
            col_bName = document.createElement('p');
            col_bPrice = document.createElement('p');
            col_span = document.createElement('span');
            col_type = document.createElement('p');
            col_type_span = document.createElement('span');
            col_div = document.createElement('div');
            col_div_pRALA = document.createElement('p');
            col_div_pCart = document.createElement('p');
            col_div_pCart_i = document.createElement('i');
            col_div_pStar = document.createElement('p');

            col_a_img.src = arrBIU[i];
            col_p_img.src = "./images/book-logo.png";
            col_pTxt = document.createTextNode("كتاب الاكتروني");
            col_bNameTxt = document.createTextNode(arrBN[i]);
            col_bPriceTxt = document.createTextNode(arrBP[i] + "ر.س.");
            col_spanTxt = document.createTextNode("شامل الضريبة");
            col_typeTxt = document.createTextNode("صيغ اخرى ");
            col_type_spanTxt = document.createTextNode("كتاب مطبوع");
            col_type_span.appendChild(col_type_spanTxt);
            col_div_pRALATxt = document.createTextNode("⇄");
            col_div_pRALA.appendChild(col_div_pRALATxt);
            col_div.appendChild(col_div_pRALA);
            col_div.appendChild(col_div_pCart);
            col_div_pCart_i.classList.add("fa");
            col_div_pCart_i.classList.add("fa-shopping-cart");
            col_div_pCart_i.classList.add("cart-ico");
            col_div_pCart.appendChild(col_div_pCart_i);
            col_div_pStarTxt = document.createTextNode("★");
            col_div_pStar.appendChild(col_div_pStarTxt);
            col_div.appendChild(col_div_pStar);
            col_a.href = "./details.html";
            col_a.appendChild(col_a_img);
            col_p.appendChild(col_p_img);
            col_p.appendChild(col_pTxt);
            col_bName.appendChild(col_bNameTxt);
            col_bPrice.classList.add("price");
            col_bPrice.appendChild(col_bPriceTxt);
            col_span.style.right = "30%";
            col_span.appendChild(col_spanTxt);
            col_type.appendChild(col_typeTxt);
            col_type.appendChild(col_type_span);
            col.appendChild(col_a);
            col.appendChild(col_p);
            col.appendChild(col_bName);
            col.appendChild(col_bPrice);
            col.appendChild(col_span);
            col.appendChild(col_type);
            col_div.classList.add("icons");
            col.appendChild(col_div);
            col.classList.add("col");
            containerSearch.appendChild(col);



            /* col_bNameTxt= document.createTextNode(arrBN[i]);
            col_bPriceTxt= document.createTextNode(arrBP[i]+"ر.س.");
            col_bName.appendChild(col_bNameTxt);
            col_bPrice.classList.add("price");
            col_bPrice.appendChild(col_bPriceTxt);
            col.appendChild(col_bName);
            col.appendChild(col_bPrice);
            col.classList.add("col");
            containerSearch.appendChild(col); */

        }
    }
})

/* newText = document= document.createTextNode(); */