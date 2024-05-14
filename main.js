let form = document.querySelector("#form");
let emailDiv = document.querySelector(".email-div");
let emailInput = document.querySelector("#email");
let submitBtn = document.querySelector("#submit-btn");
let box = document.querySelector(".box");
let successBox = document.querySelector(".success-box");
// handle submitition

function handleSubmit(e) {
  e.preventDefault();
}
// cheking validation of the email
function checkValidation() {
  let emailreg = /\w+.\w+@\w+.\w+/g;
  if (emailreg.test(emailInput.value)) {
    box.style.display = "none";
    successBox.style.display = "block";
    emailInput.value = "";
  } else {
    // add error class
    emailInput.classList.add("error");
    if (emailInput.classList.contains("error")) {
      if (!emailDiv.querySelector(".required-span")) {
        let span = document.createElement("span");
        span.className = "required-span";
        span.textContent = "Valid email required";
        emailDiv.appendChild(span);
      }
    }
  }
}

// clear input field

function clearErrornput(e) {
  // check if there is error class in email input
  if (emailInput.classList.contains("error")) {
    e.currentTarget.classList.remove("error");
    document.querySelector(".required-span").remove();
  }
}
// clear success message container
function clearSuccessMsg() {
  successBox.style.display = "none";
  box.style.display = "flex";
}
form.addEventListener("submit", handleSubmit);
form.addEventListener("submit", checkValidation);
emailInput.addEventListener("focusin", clearErrornput);
successBox
  .querySelector(".dismiss-btn")
  .addEventListener("click", clearSuccessMsg);
