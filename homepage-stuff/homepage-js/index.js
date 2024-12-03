document.getElementById("index_carosel-option1").addEventListener("click", carosel_option1);
document.getElementById("index_carosel-option2").addEventListener("click", carosel_option2);
document.getElementById("index_carosel-option3").addEventListener("click", carosel_option3);
document.getElementById("index_carosel-option4").addEventListener("click", carosel_option4);

const option1 = document.getElementById("index_carosel-option1")
const option2 = document.getElementById("index_carosel-option2")
const option3 = document.getElementById("index_carosel-option3")
const option4 = document.getElementById("index_carosel-option4")
const hero = document.getElementById("hero")
const blocker = document.getElementById("hero-blocker")


function carosel_option1(){
    option1.classList.add("selected")
    option2.classList.remove("selected")
    option3.classList.remove("selected")
    option4.classList.remove("selected")
    setTimeout(() =>  hero.style.backgroundImage = "url(homepage-img/hero-img-placeholder.png)", 2000)
    blocker.style.animationName = "blocker-in"
    setTimeout(() =>  blocker.style.animationName = "blocker-out", 2000)

    setTimeout(() =>  document.getElementById("hero-text").style.left = "24%", 1500)
    setTimeout(() =>  document.getElementById("hero-text").style.marginBottom = "25%", 1500)

    setTimeout(() =>  document.getElementById("car-model").textContent = "Nemesis", 1500)
}

function carosel_option2(){
    option1.classList.remove("selected")
    option2.classList.add("selected")
    option3.classList.remove("selected")
    option4.classList.remove("selected")
    
    document.getElementById("hero-text").style.position = "fixed"
    setTimeout(() =>  hero.style.backgroundImage = "url(homepage-img/hero-img2-placeholder.jpg)", 2000)
    blocker.style.animationName = "blocker-in"
    setTimeout(() =>  blocker.style.animationName = "blocker-out", 2000)
    setTimeout(() =>  document.getElementById("hero-text").style.left = "12.5%", 1500)
    setTimeout(() =>  document.getElementById("hero-text").style.marginBottom = "28.5%", 1500)

    setTimeout(() =>  document.getElementById("car-model").textContent = "BlackWidow", 1500)

    
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