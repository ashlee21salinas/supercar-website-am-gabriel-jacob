document.getElementById("premium-options-arrow").addEventListener("click", premium_arrow);

document.getElementById("colorwheel-arrow").addEventListener("click", color_wheel_arrow);





const green = document.getElementById("fancygreen-exterior")
const blue = document.getElementById("fancyblue-exterior")
const red = document.getElementById("fancyred-exterior")
const black = document.getElementById("fancyblack-exterior")




function premium_arrow(){

        if(document.getElementById("exterior-colorwheel").classList.contains('opened'))
        {
                document.getElementById("colorwheel-arrow").style.transform = "rotate(180deg)"
        
                document.getElementById("exterior-colorwheel").classList.remove("opened")
                // document.getElementById("premium-exterior-blocker").classList.remove('opened')
                document.getElementById("premium-exterior-colorwheel-blocker").style.top = "35%"
        }
        

        if(document.getElementById("premium-dropdown").classList.contains('closed')){
            document.getElementById("premium-options-arrow").style.transform = "rotate(0deg)"
            // document.getElementById("premium-dropdown").classList.remove("closed")
            document.getElementById("premium-dropdown").classList.add("opened")
            document.getElementById("premium-exterior-blocker").classList.remove('opened')
            setTimeout(() =>  document.getElementById("premium-dropdown").classList.remove("closed"), 500)
            document.getElementById("exterior-colorwheel").style.marginTop = "35%"

            document.getElementById("premium-exterior-colorwheel-blocker").style.top = "50%"

            document.getElementById("colorCanvas").style.top = "60%"
            
        }
        else{
            
            document.getElementById("premium-options-arrow").style.transform = "rotate(180deg)"
            document.getElementById("premium-dropdown").classList.remove('opened')
            document.getElementById("premium-dropdown").classList.add('closed')

            document.getElementById("exterior-colorwheel").style.marginTop = "0%"

            document.getElementById("premium-exterior-colorwheel-blocker").style.top = "35%"

            document.getElementById("colorCanvas").style.top = "40%"

            document.getElementById("premium-exterior-blocker").classList.add('opened')
        }
}


function color_wheel_arrow(){

    if(document.getElementById("premium-dropdown").classList.contains('opened')){
        document.getElementById("premium-options-arrow").style.transform = "rotate(180deg)"
        document.getElementById("premium-dropdown").classList.remove('opened')
        document.getElementById("premium-dropdown").classList.add('closed')

        document.getElementById("exterior-colorwheel").style.marginTop = "0%"

        document.getElementById("premium-exterior-colorwheel-blocker").style.top = "35%"

        document.getElementById("colorCanvas").style.top = "40%"

         document.getElementById("premium-exterior-blocker").classList.add('opened')
    }

    if(document.getElementById("exterior-colorwheel").classList.contains('opened')){

        document.getElementById("colorwheel-arrow").style.transform = "rotate(180deg)"

        document.getElementById("exterior-colorwheel").classList.remove("opened")
        // document.getElementById("premium-exterior-blocker").classList.remove('opened')
        document.getElementById("premium-exterior-colorwheel-blocker").style.top = "35%"
    }
    else{
        document.getElementById("colorwheel-arrow").style.transform = "rotate(0deg)"
        document.getElementById("exterior-colorwheel").classList.add('opened')
        document.getElementById("exterior-colorwheel").classList.remove('closed')

        document.getElementById("premium-exterior-colorwheel-blocker").style.top = "67%"
        
    }
}




function threed(){
    document.getElementById("3d").classList.remove("clicked")
    document.getElementById("2d").classList.remove("clicked")

    document.getElementById("3d").classList.add("clicked")


    car = document.querySelectorAll('canvas')

    car.forEach((canvas) => {
        canvas.style.zIndex = "1";
        canvas.style.left = "0"
    });
    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/white.png)"
    document.getElementById("colorCanvas").style.left = ""
    document.getElementById("2d").style.zIndex = "2"
    
}
  
function twod(){
    document.getElementById("3d").classList.remove("clicked")
    document.getElementById("2d").classList.remove("clicked")

    document.getElementById("2d").classList.add("clicked")

    car = document.querySelectorAll('canvas')

    car.forEach((canvas) => {
        canvas.style.zIndex = "0";
    });
    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/nemesis-img/front-black.png)"
    document.getElementById("colorCanvas").style.zIndex = "1"
    document.getElementById("2d").style.zIndex = "0"
}

function one(){
    ones.classList.remove("selected")
    twos.classList.remove("selected")
    threes.classList.remove("selected")
    fours.classList.remove("selected")
    fives.classList.remove("selected")

    ones.classList.add("selected")

    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/nemesis-img/front-black.png)"
    document.getElementById("car-pic-exterior").style.backgroundPosition = "55% 50%"
    
}

function two(){
    ones.classList.remove("selected")
    twos.classList.remove("selected")
    threes.classList.remove("selected")
    fours.classList.remove("selected")
    fives.classList.remove("selected")

    twos.classList.add("selected")

    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/nemesis-img/threef-black.png)"
    document.getElementById("car-pic-exterior").style.backgroundPosition = "55% 50%"

}

function three(){
    ones.classList.remove("selected")
    twos.classList.remove("selected")
    threes.classList.remove("selected")
    fours.classList.remove("selected")
    fives.classList.remove("selected")

    threes.classList.add("selected")

    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/nemesis-img/side-black.png)"

    document.getElementById("car-pic-exterior").style.backgroundPosition = "35% 50%"
    // background-position: 55% 50%;
}

function four(){
    ones.classList.remove("selected")
    twos.classList.remove("selected")
    threes.classList.remove("selected")
    fours.classList.remove("selected")
    fives.classList.remove("selected")

    fours.classList.add("selected")
    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/nemesis-img/side-back-black.png)"
    document.getElementById("car-pic-exterior").style.backgroundPosition = "05% 50%"

}

function five(){
    ones.classList.remove("selected")
    twos.classList.remove("selected")
    threes.classList.remove("selected")
    fours.classList.remove("selected")
    fives.classList.remove("selected")

    fives.classList.add("selected")

    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/nemesis-img/back-black.png)"
    document.getElementById("car-pic-exterior").style.backgroundPosition = "55% 40%"

}



document.getElementById("next").onclick = function () {
    location.href = "../interior-nemesis.html";
}