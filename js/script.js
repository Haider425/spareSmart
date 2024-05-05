const togglebtn = document.querySelector(".toggle_btn");
const togglebtnIcon = document.querySelector(".toggle_btn i");
const dropdown = document.querySelector(".dropdown");

togglebtn.addEventListener("click", () => {
  dropdown.classList.toggle("open");
  togglebtnIcon.classList.toggle("fa-times");
});