const toggleBtn = document.querySelector(".dark");
toggleBtn.style.cursor='pointer'
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
