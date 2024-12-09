document.getElementById("premium-options-arrow").addEventListener("click", premium_arrow);

document.getElementById("colorwheel-arrow").addEventListener("click", color_wheel_arrow);

document.getElementById("3d").addEventListener("click", threed);
document.getElementById("2d").addEventListener("click", twod);

document.getElementById("img-1").addEventListener("click", one);
document.getElementById("img-2").addEventListener("click", two);
document.getElementById("img-3").addEventListener("click", three);
document.getElementById("img-4").addEventListener("click", four);
document.getElementById("img-5").addEventListener("click", five);

var ones = document.getElementById("img-1")
var twos = document.getElementById("img-2")
var threes = document.getElementById("img-3")
var fours = document.getElementById("img-4")
var fives = document.getElementById("img-5")

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
                document.getElementById("premium-exterior-colorwheel-blocker").style.top = "55%"
        }
        

        if(document.getElementById("premium-dropdown").classList.contains('closed')){
            document.getElementById("premium-options-arrow").style.transform = "rotate(0deg)"
            // document.getElementById("premium-dropdown").classList.remove("closed")
            document.getElementById("premium-dropdown").classList.add("opened")
            document.getElementById("premium-exterior-blocker").classList.remove('opened')
            setTimeout(() =>  document.getElementById("premium-dropdown").classList.remove("closed"), 500)
            document.getElementById("exterior-colorwheel").style.marginTop = "35%"

            document.getElementById("premium-exterior-colorwheel-blocker").style.top = "55%"

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

function initColorPicker() {
    var canvas = document.getElementById('colorCanvas');
    var canvasContext = canvas.getContext('2d');
  
    let gradient = canvas.getContext('2d').createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, '#ff0000')
    gradient.addColorStop(1 / 6, '#ffff00')
    gradient.addColorStop((1 / 6) * 2, '#00ff00')
    gradient.addColorStop((1 / 6) * 3, '#00ffff')
    gradient.addColorStop((1 / 6) * 4, '#0000ff')
    gradient.addColorStop((1 / 6) * 5, '#ff00ff')
    gradient.addColorStop(1, '#ff0000')
    canvas.getContext('2d').fillStyle = gradient
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)
  
    gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    canvas.getContext('2d').fillStyle = gradient
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)
  
    gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)')
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)')
    canvas.getContext('2d').fillStyle = gradient
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)
  
  
    canvas.onclick = function(e) {
        console.log()
      var imgData = canvasContext.getImageData((e.offsetX / canvas.clientWidth) * canvas.width, (e.offsetY / canvas.clientHeight) * canvas.height, 1, 1)
      var rgb = imgData.data;
      var color = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] +  ")";
      console.log("%c" + color, "color:" + color)

      document.getElementById("rgb").style.color=color;
      document.getElementById("rgb").textContent=color;
    }
  }



function threed(){
    document.getElementById("3d").classList.remove("clicked")
    document.getElementById("2d").classList.remove("clicked")
    document.getElementById("2d").classList.add("clicked")
}
  
function twod(){
    document.getElementById("3d").classList.remove("clicked")
    document.getElementById("2d").classList.remove("clicked")
    document.getElementById("3d").classList.add("clicked")
}

function one(){
    ones.classList.remove("selected")
    twos.classList.remove("selected")
    threes.classList.remove("selected")
    fours.classList.remove("selected")
    fives.classList.remove("selected")

    ones.classList.add("selected")

    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/nemesis-img/front-black.png)"
    
    
}

function two(){
    ones.classList.remove("selected")
    twos.classList.remove("selected")
    threes.classList.remove("selected")
    fours.classList.remove("selected")
    fives.classList.remove("selected")

    twos.classList.add("selected")

    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/nemesis-img/threef-black.png)"

}

function three(){
    ones.classList.remove("selected")
    twos.classList.remove("selected")
    threes.classList.remove("selected")
    fours.classList.remove("selected")
    fives.classList.remove("selected")

    threes.classList.add("selected")

    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/nemesis-img/side-black.png)"
}

function four(){
    ones.classList.remove("selected")
    twos.classList.remove("selected")
    threes.classList.remove("selected")
    fours.classList.remove("selected")
    fives.classList.remove("selected")

    fours.classList.add("selected")
    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/nemesis-img/side-back-black.png)"
}

function five(){
    ones.classList.remove("selected")
    twos.classList.remove("selected")
    threes.classList.remove("selected")
    fours.classList.remove("selected")
    fives.classList.remove("selected")

    fives.classList.add("selected")

    document.getElementById("car-pic-exterior").style.backgroundImage = "url(../img/configurator-img/nemesis-img/back-black.png)"

}



  initColorPicker()