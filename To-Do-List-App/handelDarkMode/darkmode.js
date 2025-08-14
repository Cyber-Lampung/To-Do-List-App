const checkbox = document.getElementById("darkmode");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    document.body.classList.remove("lightmode");
    document.body.classList.add("darkmode");
  } else {
    document.body.classList.remove("darkmode");
    document.body.classList.add("lightmode");
  }
});
