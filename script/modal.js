const joinBTN = document.querySelector(".join__btn");
const closeBTN = document.querySelector(".close__btn");
const modal = document.querySelector(".modal");

joinBTN.addEventListener("click", () => {
  modal.classList.remove("hide");
});
closeBTN.addEventListener("click", () => {
  modal.classList.add("hide");
  document.getElementById("errorText").textContent = "";
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hide")) {
    modal.classList.add("hide");
    document.getElementById("errorText").textContent = "";
  }
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hide");
    document.getElementById("errorText").textContent = "";
  }
});
function validateEmail() {
  const emailInput = document.getElementById("emailInput").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput)) {
    document.getElementById("errorText").textContent = "";
    modal.classList.add("hide");
  } else {
    document.getElementById("errorText").textContent = "Invalid email!";
  }
}
