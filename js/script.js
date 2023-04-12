const navOptions = document.getElementById("nav-options")
const navHambIcon = document.getElementById("nav-hamb-icon")
var iconImg = document.getElementById("nav-hamb-img");
function navBar(){
    console.log("helo")
    if (navOptions.className === "nav-options") {
        console.log("true")
        navOptions.className+= " visible"
        iconImg.src = "./assets/x-solid.svg";
    } else {
        console.log("false")
        navOptions.className = "nav-options"
        iconImg.src = "./assets/bars-solid.svg";
      }
}
