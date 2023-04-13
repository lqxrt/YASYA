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
