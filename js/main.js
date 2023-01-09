
// =====================  PORTFLIO  =====================
let allBtn = document.getElementById("all");
let webBtn = document.getElementById("web");
let graphicBtn = document.getElementById("graphic");
let vectorBtn = document.getElementById("vector");
let allBtns = Array.from(document.querySelectorAll(".top .right a"));

let graphicSec = document.getElementById("DesSec");
let vectorSec = document.getElementById("VecSec");
let webSec = document.getElementById("WebSec");
let allSec = webSec.innerHTML + graphicSec.innerHTML + vectorSec.innerHTML;

// all function
allBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    webBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "block";
    webSec.style.display = "block";
    vectorSec.style.display = "block";
});
// vector function
vectorBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    webBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "none";
    webSec.style.display = "none";
    vectorSec.style.display = "block";

});
// graphic function
graphicBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    webBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "block";
    webSec.style.display = "none";
    vectorSec.style.display = "none";

});
// web function
webBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "none";
    webSec.style.display = "block";
    vectorSec.style.display = "none";

});



