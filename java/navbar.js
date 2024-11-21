document.getElementById("hamburger").addEventListener("click", hamburger_click);
document.getElementById("exit_nav").addEventListener("click",exit_nav_click)
document.getElementById("models_nav").addEventListener("click",models_nav_click)
document.getElementById("Black-Widow_nav").addEventListener("click", Black_Widow_nav_click)
document.getElementById("back_models-submenu").addEventListener("click", back_models_submenu)
document.getElementById("back_blackwidow").addEventListener("click", back_blackwidow)
document.getElementById("back_models-submenu").addEventListener("click", back_models_submenu)



function hamburger_click() {
  document.getElementById("hamburger").classList.add('clicked')
  document.getElementById("models-submenu").classList.add('almost-clicked')
}

function exit_nav_click() {
    document.getElementById("hamburger").classList.remove('clicked')
    document.getElementById("models-submenu").classList.remove('clicked')
    document.getElementById("models-submenu").classList.remove('almost-clicked')
    document.getElementById("models-submenu-blackwidow").classList.remove('clicked')
    document.getElementById("models-submenu-blackwidow").classList.remove('almost-clicked')
  }

  function models_nav_click() {
    document.getElementById("models-submenu").classList.add('clicked')
    document.getElementById("models-submenu-blackwidow").classList.add('almost-clicked')
    document.getElementById("models-submenu-blackwidow").classList.remove('first')
  }

  function Black_Widow_nav_click() {
    document.getElementById("models-submenu-blackwidow").classList.add('clicked')
    document.getElementById("models-submenu-blackwidow").classList.remove('almost-clicked')
  }


  function back_models_submenu() {
    document.getElementById("models-submenu").classList.remove('clicked')
  }

  function back_blackwidow() {
    document.getElementById("models-submenu-blackwidow").classList.remove('clicked')
  }

  function back_models_submenu(){
    document.getElementById("models-submenu").classList.remove('clicked')
    document.getElementById("models-submenu-blackwidow").classList.remove('clicked')
  }