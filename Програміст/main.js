let tab1 = document.querySelector(".tab1")
let tab2 = document.querySelector(".tab2")
let text1 = document.querySelector(".text")
let text2 = document.querySelector(".text2")

tab2.onclick = showText2
tab1.onclick = showText1

function showText2() {
    text1.style.display = "none"
    text2.style.display = "block"
    tab2.style.backgroundColor = "chartreuse"
    tab1.style.backgroundColor = "blueviolet"
    tab2.style.paddingTop = "25px"
    tab1.style.paddingTop = "15px"
}

function showText1() {
    text2.style.display = "none"
    text1.style.display = "block"
     tab2.style.backgroundColor = "blueviolet"
    tab1.style.backgroundColor = "chartreuse"
    tab2.style.paddingTop = "15px"
    tab1.style.paddingTop = "25px"
}