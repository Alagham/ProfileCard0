document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("time");
  
  const updateTime = () => {
    timeElement.textContent = Date.now();
  };

  updateTime()
  setInterval(updateTime, 1000);
});
