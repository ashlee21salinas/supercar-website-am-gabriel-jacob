document.getElementById("hamburger").addEventListener("click", hamburger_click);
document.getElementById("exit_nav").addEventListener("click",exit_nav_click)
document.getElementById("models_nav").addEventListener("click",models_nav_click)


function hamburger_click() {
  document.getElementById("hamburger").classList.add('clicked')
}

function exit_nav_click() {
    document.getElementById("hamburger").classList.remove('clicked')
  }

  function models_nav_click() {
    document.getElementById("models_nav").classList.add('clicked')
  }