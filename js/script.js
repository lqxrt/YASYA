const navOptions = document.getElementById("nav-options")
const navHambIcon = document.getElementById("nav-hamb-icon")
var icon = document.getElementById("nav-hamb");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function() {
  await sleep(2000);
  document.getElementById('preloader').style.display = 'none';
};


var eventData = []
var webTeamData = []
var committeeData = []
var councilData = []

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
        <div class="event-list-item" data-aos="flip-left">
          <div class="img-container">
            <img src="./assets/posters/${event.poster}" alt="poster">
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

    eventList.innerHTML = eventCardList
  })
  .catch(error => console.error(error));




fetch('https://opensheet.elk.sh/1pkr9AZjrWyBlnNfgdJe9I6Bd57tuyGlSaieBvZAx5TY/webteam')
  .then(response => response.json())
  .then(data =>{
    data.forEach(item => {
      webTeamData.push(item);
    });

    console.log(webTeamData)

    let webList = document.getElementById("webteam")
    let webCardList = '';

    webTeamData.forEach(event => {
      webCardList += `
                  <div class="team-card-container" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <div class="team-card">
                            <div class="profile-img-container">
                                <img src="${event.photo?event.photo:'./assets/team/placeholder.jpg'}" alt="photo">
                            </div>
                            <div class="profile-details">
                                <div class="team-card-Name">${event.name}</div>
                                <div class="position">- ${event.position} -</div>
                                <div class="team-card-email">${event.email}</div>
                                <div class="team-card-phone">${event.phoneNo}</div>
                                <a href="${event.social}">
                                    <div class="follow">Follow</div>
                                </a>
                                </div>
                                <img class="card-logo" src="./assets/logo-white.png" alt="">
                        </div>
                    </div>
      `;
    });
    webList.innerHTML = webCardList
  })
  .catch(error => console.error(error));


  fetch('https://opensheet.elk.sh/1pkr9AZjrWyBlnNfgdJe9I6Bd57tuyGlSaieBvZAx5TY/committee')
  .then(response => response.json())
  .then(data =>{
    data.forEach(item => {
      committeeData.push(item);
    })

    let webList = document.getElementById("committee")
    let webCardList = '';

    committeeData.forEach(event => {
      webCardList += `
                  <div class="team-card-container" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <div class="team-card">
                            <div class="profile-img-container">
                                <img src="${event.photo?event.photo:'./assets/team/placeholder.jpg'}" alt="photo">
                            </div>
                            <div class="profile-details">
                                <div class="team-card-Name">${event.name}</div>
                                <div class="position">- ${event.position} -</div>
                                <div class="team-card-email">${event.email}</div>
                                <div class="team-card-phone">${event.phoneNo}</div>
                                <a href="${event.social}">
                                    <div class="follow">Follow</div>
                                </a>
                                </div>
                                <img class="card-logo" src="./assets/logo-white.png" alt="">
                        </div>
                    </div>
      `;
    });
    webList.innerHTML = webCardList
  })
  .catch(error => console.error(error));


  
  fetch('https://opensheet.elk.sh/1pkr9AZjrWyBlnNfgdJe9I6Bd57tuyGlSaieBvZAx5TY/council')
  .then(response => response.json())
  .then(data =>{
    data.forEach(item => {
      councilData.push(item);
    })

    let webList = document.getElementById("council")
    let webCardList = '';



    councilData.forEach(event => {
      webCardList += `
                  <div class="team-card-container" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <div class="team-card">
                            <div class="profile-img-container">
                                <img src="${event.photo?event.photo:'./assets/team/placeholder.jpg'}" alt="photo">
                            </div>
                            <div class="profile-details">
                                <div class="team-card-Name">${event.name}</div>
                                <div class="position">- ${event.position} -</div>
                                <div class="team-card-email">${event.email}</div>
                                <div class="team-card-phone">${event.phoneNo}</div>
                                <a href="${event.social}">
                                    <div class="follow">Follow</div>
                                </a>
                                </div>
                                <img class="card-logo" src="./assets/logo-white.png" alt="">
                        </div>
                    </div>
      `;
    });
    webList.innerHTML = webCardList
  })
  .catch(error => console.error(error));


function navBar(){
    if (navOptions.className === "nav-options") {
        navOptions.className+= " visible"
        icon.className = "fa fa-times";
    } else {
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
