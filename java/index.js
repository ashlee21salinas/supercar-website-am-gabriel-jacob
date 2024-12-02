document.getElementById("index_carosel-option1").addEventListener("click", carosel_option1);
document.getElementById("index_carosel-option2").addEventListener("click", carosel_option2);
document.getElementById("index_carosel-option3").addEventListener("click", carosel_option3);
document.getElementById("index_carosel-option4").addEventListener("click", carosel_option4);

const option1 = document.getElementById("index_carosel-option1")
const option2 = document.getElementById("index_carosel-option2")
const option3 = document.getElementById("index_carosel-option3")
const option4 = document.getElementById("index_carosel-option4")
const hero = document.getElementById("hero")

function carosel_option1(){
    option1.classList.add("selected")
    option2.classList.remove("selected")
    option3.classList.remove("selected")
    option4.classList.remove("selected")
    hero.style.backgroundImage = "url(../homepage-img/hero-img-placeholder.png)"
    hero.style.backgroundSize = "75%"
}

function carosel_option2(){
    option1.classList.remove("selected")
    option2.classList.add("selected")
    option3.classList.remove("selected")
    option4.classList.remove("selected")
    hero.style.backgroundImage = "url(../homepage-img/hero-img2-placeholder.jpg)"
    hero.style.animation = "animation: backgroundimg 1s forwards;"
}

function carosel_option3(){
    option1.classList.remove("selected")
    option2.classList.remove("selected")
    option3.classList.add("selected")
    option4.classList.remove("selected")
}

function carosel_option4(){
    option1.classList.remove("selected")
    option2.classList.remove("selected")
    option3.classList.remove("selected")
    option4.classList.add("selected")
}