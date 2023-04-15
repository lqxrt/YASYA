const navOptions = document.getElementById("nav-options")
const navHambIcon = document.getElementById("nav-hamb-icon")
var icon = document.getElementById("nav-hamb");

var eventData = []

fetch('https://opensheet.elk.sh/1pkr9AZjrWyBlnNfgdJe9I6Bd57tuyGlSaieBvZAx5TY/event')
  .then(response => response.json())
  .then(data =>{
    data.forEach(item => {
      eventData.push(item);
    });

    let eventList = document.getElementById("event-list")
    let eventCardList = '';

    eventData.forEach(event => {
      eventCardList += `
        <div class="event-list-item">
          <div class="img-container">
            <img src="./assets/poster.jpg" alt="poster">
            <div class="event-type">${event.type}</div>
          </div>
          <div class="event-details">
            <h1>${event.name}</h1>
            <p>${event.description}</p>
          </div>
          <a class="reg-btn" href="${event.regLink}">Register</a>
        </div>
      `;
    });

    console.log("this is card list :",eventCardList)
    eventList.innerHTML = eventCardList
  })
  .catch(error => console.error(error));


function navBar(){
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

// function updateBackground() {
//     if (window.innerWidth > 768) {
//       document.getElementById("back-video").innerHTML = `
//       <video poster="./assets/banner.jpg" plays inline autoplay muted loop>
//       <source src="./assets/sparks.mp4" type="video/mp4">
//       `
//     } else {
//         document.getElementById("back-video").innerHTML = `
//         <img src="./assets/ezgif.com-gif-maker.gif" alt="Background" />
//         `
//     }
//   }
  

// window.addEventListener('resize', updateBackground);
  
// updateBackground();


