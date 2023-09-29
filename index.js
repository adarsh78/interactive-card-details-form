let input = document.querySelectorAll("input");
let nameInput = document.querySelector(".cardholderName");
let numberInput = document.querySelector(".cardNumber");
let monthInput = document.querySelector(".expMonth");
let yearInput = document.querySelector(".expYear");
let cvcInput = document.querySelector(".cvcEnter");
let h1 = document.querySelector("h1");
let cardNum = document.querySelector(".cardNum");
let mon = document.querySelector(".mon");
let yr = document.querySelector(".yr");
let cvcValue = document.querySelector(".cvcValue");
let btn = document.querySelector("button");

// displaying values on input

nameInput.addEventListener("input", (e) => {
  h1.textContent = nameInput.value;
  document.querySelector(".nameError").style.display = "none";
});

numberInput.addEventListener("input", (e) => {
  cardNum.textContent = numberInput.value;
  document.querySelector(".numberError").style.display = "none";
});

monthInput.addEventListener("input", (e) => {
  mon.textContent = monthInput.value;
  document.querySelector(".monthError").style.display = "none";
});

yearInput.addEventListener("input", (e) => {
  yr.textContent = yearInput.value;
  document.querySelector(".yearError").style.display = "none";
});

cvcInput.addEventListener("input", (e) => {
  cvcValue.textContent = cvcInput.value;
  document.querySelector(".cvcError").style.display = "none";
});

// error state while clicking the button

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (nameInput.value === "") {
    document.querySelector(".nameError").style.display = "block";
  }

  if (numberInput.value === "") {
    document.querySelector(".numberError").style.display = "block";
  }

  if (monthInput.value === "") {
    document.querySelector(".monthError").style.display = "block";
  }

  if (yearInput.value === "") {
    document.querySelector(".yearError").style.display = "block";
  }

  if (cvcInput.value === "") {
    document.querySelector(".cvcError").style.display = "block";
  }

  input.forEach((i) => {
    if (i.value === "") {
      i.style.border = "1px solid hsl(0, 100%, 66%)";
    }
  });

  // thankyou state on successful submission

  if (
    nameInput.value !== "" &&
    numberInput.value !== "" &&
    monthInput.value !== "" &&
    yearInput.value !== "" &&
    cvcInput.value !== ""
  ) {
    document.querySelector(".container-2").style.display = "block";
    document.querySelector(".container").style.display = "none";
  }
});

// initial state for re-entering the data

document.querySelector(".continueBtn").addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector(".container").style.display = "block";
  document.querySelector(".container-2").style.display = "none";

  input.forEach((val) => {
    val.value = "";
    h1.textContent = "Jane Appleseed";
    cardNum.textContent = "0000 0000 0000 0000";
    mon.textContent = "00";
    yr.textContent = "00";
    cvcValue.textContent = "000";
  });
});
