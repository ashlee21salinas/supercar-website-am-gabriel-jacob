document.getElementById("premium-options-arrow").addEventListener("click", premium_arrow);

document.getElementById("colorwheel-arrow").addEventListener("click", color_wheel_arrow);




const green = document.getElementById("fancygreen-exterior")
const blue = document.getElementById("fancyblue-exterior")
const red = document.getElementById("fancyred-exterior")
const black = document.getElementById("fancyblack-exterior")




green.addEventListener("click", green_click)
blue.addEventListener("click", blue_click)
red.addEventListener("click", red_click)
black.addEventListener("click", black_click)




function premium_arrow(){

        if(document.getElementById("exterior-colorwheel").classList.contains('opened'))
        {
                document.getElementById("colorwheel-arrow").style.transform = "rotate(180deg)"
        
                document.getElementById("exterior-colorwheel").classList.remove("opened")
                // document.getElementById("premium-exterior-blocker").classList.remove('opened')

                if (window.matchMedia("(max-width: 1960px)").matches && window.matchMedia("(min-width: 1561px)").matches) {
                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "38%"
                }
                else if(window.matchMedia("(max-width: 1560px)").matches && window.matchMedia("(min-width: 1441px)").matches ){
                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "30%"
                }
                else if (window.matchMedia("(max-width: 1440px)").matches){
                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "36%"
                }
                else{

                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "35%"
                }
               
        }
        

        if(document.getElementById("premium-dropdown").classList.contains('closed')){
            document.getElementById("premium-options-arrow").style.transform = "rotate(0deg)"
            // document.getElementById("premium-dropdown").classList.remove("closed")
            document.getElementById("premium-dropdown").classList.add("opened")
            document.getElementById("premium-exterior-blocker").classList.remove('opened')
            setTimeout(() =>  document.getElementById("premium-dropdown").classList.remove("closed"), 500)

            if(window.matchMedia("(max-width:1440px)").matches && window.matchMedia("(min-width:1025px)").matches){
                document.getElementById("exterior-colorwheel").style.marginTop = "5%"
            }
            else if(window.matchMedia("(max-width:1024px)").matches && window.matchMedia("(min-width:801px)").matches) {
                document.getElementById("exterior-colorwheel").style.marginTop = "7%"
            }
            else if(window.matchMedia("(max-width:800px)").matches && window.matchMedia("(min-width:568px)").matches){
                document.getElementById("exterior-colorwheel").style.marginTop = "9%"
            }
            else if(window.matchMedia("(max-width:568px)").matches){
                document.getElementById("exterior-colorwheel").style.marginTop = "15%"
            }
            else{
                document.getElementById("exterior-colorwheel").style.marginTop = "35%"
            }
            
            


            if (window.matchMedia("(max-width: 2060px)").matches && window.matchMedia("(min-width:1560px)").matches) {
                document.getElementById("premium-exterior-colorwheel-blocker").style.top = "53%"
            }
            else if(window.matchMedia("(max-width:1560px)").matches && window.matchMedia("(min-width:1441px)").matches){
                document.getElementById("premium-exterior-colorwheel-blocker").style.top = "42%"
            }
            else if(window.matchMedia("(max-width:1440px)").matches){
                document.getElementById("premium-exterior-colorwheel-blocker").style.top = "50%"
            }
            else{
                document.getElementById("premium-exterior-colorwheel-blocker").style.top = "50%"
            }
            

            document.getElementById("colorCanvas").style.top = "60%"
            
        }
        else{
            
            document.getElementById("premium-options-arrow").style.transform = "rotate(180deg)"
            document.getElementById("premium-dropdown").classList.remove('opened')
            document.getElementById("premium-dropdown").classList.add('closed')

            if(window.matchMedia("(max-width: 1440px)").matches && window.matchMedia("(min-width: 569px)").matches)
            {
                document.getElementById("exterior-colorwheel").style.marginTop = "-2%"
            }
            else if(window.matchMedia("(max-width: 568px)").matches){
                document.getElementById("exterior-colorwheel").style.marginTop = "-4%"
            }
            else{
                document.getElementById("exterior-colorwheel").style.marginTop = "0%"
            }
                

            if (window.matchMedia("(max-width: 1960px)").matches && window.matchMedia("(min-width: 1561px)").matches) {
                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "38%"
                }
                else if(window.matchMedia("(max-width: 1560px)").matches && window.matchMedia("(min-width: 1441px)").matches ){
                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "30%"
                }
                else if (window.matchMedia("(max-width: 1440px)").matches){
                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "36%"
                }
                else{
                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "35%"
                }

            document.getElementById("colorCanvas").style.top = "40%"

            document.getElementById("premium-exterior-blocker").classList.add('opened')
        }
}


function color_wheel_arrow(){

    if(document.getElementById("premium-dropdown").classList.contains('opened')){
        document.getElementById("premium-options-arrow").style.transform = "rotate(180deg)"
        document.getElementById("premium-dropdown").classList.remove('opened')
        document.getElementById("premium-dropdown").classList.add('closed')

        if(window.matchMedia("(max-width: 1440px)").matches && window.matchMedia("(min-width: 569px)").matches)
        {
            document.getElementById("exterior-colorwheel").style.marginTop = "-2%"
        }
        else if(window.matchMedia("(max-width: 568px)").matches){
            document.getElementById("exterior-colorwheel").style.marginTop = "-4%"
        }
        else{
            document.getElementById("exterior-colorwheel").style.marginTop = "0%"
        }

        if (window.matchMedia("(max-width: 1960px)").matches && window.matchMedia("(min-width:1561px)").matches) {
                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "38%"
                }
                else if(window.matchMedia("(max-width: 1560px)").matches && window.matchMedia("(min-width: 1441px)").matches  ){
                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "30%"
                }
                else if (window.matchMedia("(max-width: 1440px)").matches){
                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "36%"
                }
                else{
                    document.getElementById("premium-exterior-colorwheel-blocker").style.top = "35%"
                }

        document.getElementById("colorCanvas").style.top = "40%"

         document.getElementById("premium-exterior-blocker").classList.add('opened')
    }

    if(document.getElementById("exterior-colorwheel").classList.contains('opened')){

        document.getElementById("colorwheel-arrow").style.transform = "rotate(180deg)"

        document.getElementById("exterior-colorwheel").classList.remove("opened")
        // document.getElementById("premium-exterior-blocker").classList.remove('opened')
        if (window.matchMedia("(max-width: 1960px)").matches && window.matchMedia("(min-width: 1561px)").matches) {
            document.getElementById("premium-exterior-colorwheel-blocker").style.top = "38%"
        }
        else if(window.matchMedia("(max-width: 1560px)").matches && window.matchMedia("(min-width: 1441px)").matches ){
            document.getElementById("premium-exterior-colorwheel-blocker").style.top = "30%"
        }
        else if (window.matchMedia("(max-width: 1440px)").matches){
            document.getElementById("premium-exterior-colorwheel-blocker").style.top = "36%"
        }
        else{
            document.getElementById("premium-exterior-colorwheel-blocker").style.top = "35%"
        }
    }
    else{
        document.getElementById("colorwheel-arrow").style.transform = "rotate(0deg)"
        document.getElementById("exterior-colorwheel").classList.add('opened')
        document.getElementById("exterior-colorwheel").classList.remove('closed')

        document.getElementById("premium-exterior-colorwheel-blocker").style.top = "67%"
        
    }
}






function green_click(){
  green.classList.remove("clicked")
  blue.classList.remove("clicked")
  red.classList.remove("clicked")
  black.classList.remove("clicked")

  green.classList.add("clicked")
  
}

function blue_click(){
  green.classList.remove("clicked")
  blue.classList.remove("clicked")
  red.classList.remove("clicked")
  black.classList.remove("clicked")

  blue.classList.add("clicked")
  
  
}

function red_click(){
  green.classList.remove("clicked")
  blue.classList.remove("clicked")
  red.classList.remove("clicked")
  black.classList.remove("clicked")

  red.classList.add("clicked")
  
}

function black_click(){
  green.classList.remove("clicked")
  blue.classList.remove("clicked")
  red.classList.remove("clicked")
  black.classList.remove("clicked")

  black.classList.add("clicked")
  
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

initColorPicker()

document.getElementById("back").onclick = function () {
  location.href = "../exterior-nemesis.html";
}

document.getElementById("next").onclick = function () {
  var cartype = "nemesis";
  localStorage.setItem("cartype",cartype);
  location.href = "../confirm.html";
}