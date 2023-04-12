function updateTimer() {
    const future = Date.parse("April 27, 2023 10:00:00");
    const now = new Date();
    const diff = future - now;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);
  
    const d = days;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;
  
    document.getElementById("countdown").innerHTML = `${d} days ${h} hours ${m} minutes ${s} seconds`;
  }
  
  setInterval(updateTimer, 1000);