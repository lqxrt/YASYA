const navOptions = document.getElementById("nav-options")
const navHambIcon = document.getElementById("nav-hamb-icon")
var icon = document.getElementById("nav-hamb");
function navBar(){
    console.log("helo")
    if (navOptions.className === "nav-options") {
        console.log("true")
        navOptions.className+= " visible"
        icon.className = "fa fa-times";
    } else {
        console.log("false")
        navOptions.className = "nav-options"
        icon.className = "fa fa-bars";
      }
}

function updateBackground() {
    if (window.innerWidth > 768) {
      document.getElementById("back-video").innerHTML = `
      <video poster="./assets/banner.jpg" plays inline autoplay muted loop>
      <source src="./assets/sparks.mp4" type="video/mp4">
      `
    } else {
        document.getElementById("back-video").innerHTML = `
        <img src="./assets/ezgif.com-gif-maker.gif" alt="Background" />
        `
    }
  }
  

window.addEventListener('resize', updateBackground);
  
updateBackground();
