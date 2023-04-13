// function updateTimer() {
//     const future = Date.parse("April 27, 2023 10:00:00");
//     const now = new Date();
//     const diff = future - now;
  
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const mins = Math.floor(diff / (1000 * 60));
//     const secs = Math.floor(diff / 1000);
  
//     const d = days;
//     const h = hours - days * 24;
//     const m = mins - hours * 60;
//     const s = secs - mins * 60;
  
//     document.getElementById("countdown").innerHTML = `${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;
//   }
  
//   setInterval(updateTimer, 1000);

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "04/27/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      }, 0)
  }());