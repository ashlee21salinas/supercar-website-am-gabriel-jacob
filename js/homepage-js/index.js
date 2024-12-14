document.getElementById("index_carosel-option1").addEventListener("click", carosel_option1);
document.getElementById("index_carosel-option2").addEventListener("click", carosel_option2);
document.getElementById("index_carosel-option3").addEventListener("click", carosel_option3);
document.getElementById("index_carosel-option4").addEventListener("click", carosel_option4);
document.getElementById("side-scroll-feature").addEventListener("click", side_feature_open);
// document.getElementById("scroll-car").addEventListener("click", side_feature_open);




const option1 = document.getElementById("index_carosel-option1")
const option2 = document.getElementById("index_carosel-option2")
const option3 = document.getElementById("index_carosel-option3")
const option4 = document.getElementById("index_carosel-option4")
const hero = document.getElementById("hero")
const blocker = document.getElementById("hero-blocker")

const sideblocker = document.getElementById("side-blocker")


side_feature_clicked = true

function carosel_option1(){
    option1.classList.add("selected")
    option2.classList.remove("selected")
    option3.classList.remove("selected")
    option4.classList.remove("selected")
    setTimeout(() =>  hero.style.backgroundImage = "url(../img/homepage-img/hero-img-placeholder.png)", 2000)
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
    
    
    
    blocker.style.animationName = "blocker-in"
    setTimeout(() =>  blocker.style.animationName = "blocker-out", 2000)
    setTimeout(() =>  document.getElementById("hero-text").style.left = "12.5%", 1500)
    setTimeout(() =>  document.getElementById("hero-text").style.marginBottom = "28.5%", 1500)

    setTimeout(() =>  document.getElementById("car-model").textContent = "BlackWidow", 1500)
    setTimeout(() =>  hero.style.backgroundImage = "url(../img/homepage-img/hero-img2-placeholder.jpg)", 2000)
    

    
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

function side_feature_open(){
    if( side_feature_clicked == false)
    {
        // document.getElementById("scroll-car").style.bottom = "-55.7%"
        document.getElementById("scroll-car").style.marginLeft = "50%"
        side_feature_clicked = true
        sideblocker.style.animationName = "sideblocker-out"

        
        
    }
    else{
        
        document.getElementById("scroll-car").style.marginLeft = "5%"
        // document.getElementById("side-scroll-feature").style.width = "37.5%"

        sideblocker.style.animationName = "sideblocker-in"


        side_feature_clicked = false
    }
}


