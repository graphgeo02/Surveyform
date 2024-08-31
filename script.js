
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let fellowid = document.getElementById("fellowid");
let age = document.getElementById("age");
let myForm = document.getElementById("myForm");
let message = document.getElementById("message");
let rangeValue = document.getElementById("rangeValue");
let gender = document.getElementById("gender");
let userLocation = document.getElementById("location");
let terms = document.getElementById("terms");

function updateValue(value) {
  rangeValue.textContent = value;
}

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!terms.checked) {
    alert("Accept terms and continue");
  } else {
    let todB = {
      fullName: fullName.value,
      email: email.value,
      fellowid: fellowid.value,
      age: age.value,
      gender: gender.value,
      userLocation: userLocation.value,
      terms: terms.checked, // This will store true or false based on whether the terms checkbox is checked
    };
    console.log(todB);
    alert("Thank you, your response has been recorded");
  }
});



console.log(fullName); // Should log the element, not null
console.log(email);
console.log(fellowid);
console.log(age);
console.log(gender);
console.log(userLocation);
console.log(terms);


  




