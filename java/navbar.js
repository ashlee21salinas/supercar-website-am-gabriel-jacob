document.getElementById("hamburger").addEventListener("click", hamburger_click);
document.getElementById("exit_nav").addEventListener("click",exit_nav_click)
document.getElementById("models_nav").addEventListener("click",models_nav_click)
document.getElementById("merch_nav").addEventListener("click",merch_nav_click)

document.getElementById("Black-Widow_nav").addEventListener("click", Black_Widow_nav_click)
document.getElementById("nemesis_nav").addEventListener("click", nemesis_nav_click)

document.getElementById("back_models-submenu").addEventListener("click", back_models_submenu)
document.getElementById("back_blackwidow").addEventListener("click", back_blackwidow)
document.getElementById("back_nemesis").addEventListener("click", back_nemesis)
document.getElementById("back_merch-submenu").addEventListener("click", back_merch_submenu)




//opens navbar
function hamburger_click() {
  document.getElementById("hamburger").classList.add('clicked')
  document.getElementById("models-submenu").classList.add('almost-clicked')
  document.getElementById("merch-submenu").classList.add('almost-clicked')
  
}






// when the models is clicked
  function models_nav_click() {
    if(document.getElementById("merch-submenu").classList.contains("clicked")){

      document.getElementById("merch-submenu").classList.add('back')
      setTimeout(back_merch_removed, 1000)
      document.getElementById("models-submenu").classList.add('clicked')
      document.getElementById("models-submenu-blackwidow").classList.add('almost-clicked')
      document.getElementById("models-submenu-nemesis").classList.add('almost-clicked')
      document.getElementById("merch-submenu").classList.add('almost-clicked')

    }
    else{

    
      document.getElementById("models-submenu").classList.add('clicked')
      document.getElementById("models-submenu-blackwidow").classList.add('almost-clicked')
      document.getElementById("models-submenu-nemesis").classList.add('almost-clicked')
      document.getElementById("merch-submenu").classList.add('almost-clicked')

    }
  }


    //when blackwidow or nemesis is clicked
    function Black_Widow_nav_click() {

      if (document.getElementById("models-submenu-nemesis").classList.contains("clicked")){
        document.getElementById("models-submenu-nemesis").classList.add('back')
        setTimeout(back_nemesis_removed, 1000)
        document.getElementById("models-submenu-blackwidow").classList.add('clicked')
      }
      else{
        document.getElementById("models-submenu-blackwidow").classList.add('clicked')
      }
      

    }


    function nemesis_nav_click(){

      if (document.getElementById("models-submenu-blackwidow").classList.contains("clicked")){
        document.getElementById("models-submenu-blackwidow").classList.add("back")
        setTimeout(back_blackwidow_removed, 1000)
        document.getElementById("models-submenu-nemesis").classList.add('clicked')
      }
      else{
      document.getElementById("models-submenu-nemesis").classList.add('clicked')
      }
    }






  // returns to previouse state
    function back_models_submenu(){

      if(document.getElementById("models-submenu-blackwidow").classList.contains("clicked")){
        document.getElementById("models-submenu-blackwidow").classList.add("models-blackwidow-back")
        document.getElementById("models-submenu").classList.add('back')
        setTimeout(all_models_close, 1000)

      }
      else if (document.getElementById("models-submenu-nemesis").classList.contains("clicked")){
        document.getElementById("models-submenu-nemesis").classList.add("models-nemesis-back")
        document.getElementById("models-submenu").classList.add('back')
        setTimeout(all_models_close, 1000)

      }
      else{
        document.getElementById("models-submenu").classList.add('back')
        setTimeout(back_model_removed, 1000)
      }

    
    }

    function back_blackwidow() {
      document.getElementById("models-submenu-blackwidow").classList.add('back')
      setTimeout(back_blackwidow_removed, 1000)
    }


    function back_nemesis() {
      document.getElementById("models-submenu-nemesis").classList.add('back')
      setTimeout(back_nemesis_removed, 1000)
      
    }



    // removes back and click
    function back_model_removed(){
      document.getElementById("models-submenu").classList.remove('back')
      document.getElementById("models-submenu").classList.remove('clicked')
    }

    function back_nemesis_removed(){
      
      document.getElementById("models-submenu-nemesis").classList.remove('back')
      document.getElementById("models-submenu-nemesis").classList.remove('clicked')
    }

    function back_blackwidow_removed(){
      document.getElementById("models-submenu-blackwidow").classList.remove('back')
      
      document.getElementById("models-submenu-blackwidow").classList.remove('clicked')
    }

    function back_merch_removed(){
      document.getElementById("merch-submenu").classList.remove('back')
      document.getElementById("merch-submenu").classList.remove('clicked')
    }


    function all_models_close(){
      document.getElementById("models-submenu-blackwidow").classList.remove('models-blackwidow-back')
      document.getElementById("models-submenu-blackwidow").classList.remove('back')
      document.getElementById("models-submenu-blackwidow").classList.remove('clicked')
      document.getElementById("merch-submenu-blackwidow").classList.remove('almost-clicked')

      document.getElementById("models-submenu-nemesis").classList.remove('models-nemesis-back')
      document.getElementById("models-submenu-nemesis").classList.remove('back')
      document.getElementById("models-submenu-nemesis").classList.remove('clicked')
      document.getElementById("merch-submenu-nemesis").classList.remove('almost-clicked')
      
      document.getElementById("models-submenu").classList.remove('back')
      document.getElementById("models-submenu").classList.remove('clicked')
      document.getElementById("merch-submenu").classList.remove('almost-clicked')

      document.getElementById("menu").classList.remove("exit")


      document.getElementById("merch-submenu").classList.remove('back')
      document.getElementById("merch-submenu").classList.remove('clicked')
      document.getElementById("merch-submenu").classList.remove('almost-clicked')
      document.getElementById("merch-submenu").classList.remove('exit')
    }
  

//merch clicked
function merch_nav_click() {

  if (document.getElementById("models-submenu").classList.contains("clicked")){
    
    if(document.getElementById("models-submenu-blackwidow").classList.contains("clicked")){
      document.getElementById("models-submenu-blackwidow").classList.add("models-blackwidow-back")
      document.getElementById("merch-submenu").classList.add('clicked')
      setTimeout(all_models_close, 1000)
    }
    else if (document.getElementById("models-submenu-nemesis").classList.contains("clicked")){
      document.getElementById("models-submenu-nemesis").classList.add("models-nemesis-back")
      document.getElementById("merch-submenu").classList.add('clicked')
      setTimeout(all_models_close, 1000)
    }
    else{
      document.getElementById("models-submenu").classList.add('back')
      setTimeout(back_model_removed, 1000)
      document.getElementById("merch-submenu").classList.add('clicked')
    }

    
  }
  else{
    document.getElementById("merch-submenu").classList.add('clicked')
  }
}


function back_merch_submenu(){
  document.getElementById("merch-submenu").classList.add('back')
  setTimeout(back_merch_removed, 1000)
}








  //closes navbar
function exit_nav_click() {

  if(document.getElementById("models-submenu").classList.contains('clicked')){

    if(document.getElementById("models-submenu-blackwidow").classList.contains("clicked")){
      document.getElementById("models-submenu-blackwidow").classList.add("models-blackwidow-back")
      document.getElementById("models-submenu").classList.add("back")
      document.getElementById("menu").classList.add("exit")
      setTimeout(all_models_close, 1000)
      setTimeout(() => document.getElementById("hamburger").classList.remove('clicked'), 1050)
    }
    else if (document.getElementById("models-submenu-nemesis").classList.contains("clicked")){
      document.getElementById("models-submenu-nemesis").classList.add("exit")
      document.getElementById("models-submenu").classList.add("back")
      document.getElementById("menu").classList.add("exit")
      setTimeout(all_models_close, 1000)
      setTimeout(() => document.getElementById("hamburger").classList.remove('clicked'), 1050)
      
    }
    else{
      document.getElementById("models-submenu").classList.add("back")
      document.getElementById("menu").classList.add("exit")
      setTimeout(all_models_close, 1000)
      setTimeout(() => document.getElementById("hamburger").classList.remove('clicked'), 6050)
    }

  }
  else if(document.getElementById("merch-submenu").classList.contains('clicked'))
  {
    
    document.getElementById("merch-submenu").classList.add("exit")
    
    document.getElementById("menu").classList.add("exit")
    setTimeout(all_models_close, 1000)
    setTimeout(() => document.getElementById("hamburger").classList.remove('clicked'), 1050)
    
  }
  
  // document.getElementById("hamburger").classList.remove('clicked')

  // document.getElementById("models-submenu").classList.remove('clicked')
  // document.getElementById("models-submenu").classList.remove('almost-clicked')

  // document.getElementById("models-submenu-blackwidow").classList.remove('clicked')
  // document.getElementById("models-submenu-blackwidow").classList.remove('almost-clicked')

  // document.getElementById("models-submenu-nemesis").classList.remove('clicked')
  // document.getElementById("models-submenu-nemesis").classList.remove('almost-clicked')

  // document.getElementById("merch-submenu").classList.remove('clicked')
  // document.getElementById("merch-submenu").classList.remove('almost-clicked')
}


