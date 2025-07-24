// script.js
console.log("Javascript is alive!");

let yourName = "Joseph";
let age = 99;
const creator = "God";
let isSmart = true;

console.log(`My name is ${yourName}, I am ${age} years old. `);
console.log("Is Joseph smart?", isSmart);
console.log("Who created the mind?", creator);

function greet() {
	let name =
	document.getElementById("nameInput").value;
	document.getElementById("greet").textContent = `Welcome, ${name}!`;
}

let currentIndex = 0;

function moveSlide(direction) {
  const track = document.querySelector('.Review-track');
  const slides = document.querySelectorAll('.review-card');
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = 0;s
  } else if (currentIndex >= totalSlides) {
    currentIndex = totalSlides - 1;
  }

  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

(function() {
  window.open(location.href, 'popup', 'width=375,height=667');
})();

  const signinBtn = document.getElementById('show-signin');
  const signupBtn = document.getElementById('show-signup');
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');

  signinBtn.addEventListener('click', () => {
    signinForm.classList.add('active');
    signupForm.classList.remove('active');
    signinBtn.classList.add('active');
    signupBtn.classList.remove('active');
  });

  signupBtn.addEventListener('click', () => {
    signupForm.classList.add('active');
    signinForm.classList.remove('active');
    signupBtn.classList.add('active');
    signinBtn.classList.remove('active');
  });


document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from submitting

  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const phone = document.getElementById("signup-phone").value.trim();
  const country = document.getElementById("signup-country").value.trim();
  const password = document.getElementById("signup-password").value;
  const confirm = document.getElementById("signup-confirm").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10,}$/;
  const passwordPattern =  /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  let errors = [];

  if (name.length < 3) errors.push("Name must be at least 3 characters.");
  if (!emailPattern.test(email)) errors.push("Enter a valid email.");
  if (!phonePattern.test(phone)) errors.push("Phone must be at least 10 digits.");
  if (country === "") errors.push("Country is required.");
  if (!passwordPattern.test(password)) errors.push("Password must have at least 6 characters, with one letter and one number.");
  if (password !== confirm) errors.push("Passwords do not match.");

  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    // Optional: Send form if JS passes
    this.submit();
  }
  
  if (errors.length === 0) {
  form.submit(); // Without this, the form won't go
}

});

document.getElementById("signin-form").addEventListener("submit", function(e) {
  const email = document.getElementById("signin-email").value.trim();
  const password = document.getElementById("signin-password").value;

  if (email === "" || password === "") {
    e.preventDefault();
    alert("Email and password are required.");
  }
});

