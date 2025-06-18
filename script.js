const form = document.getElementById("feedbackForm");
const savedDataDiv = document.getElementById("savedData");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  // Save to localStorage
  localStorage.setItem("userFeedback", JSON.stringify({ name, message }));

  // Show confirmation
  savedDataDiv.innerText = `Thank you, ${name}! Your message has been saved.`;

  // Reset form
  form.reset();
});

// On page load, display saved feedback if any
const saved = JSON.parse(localStorage.getItem("userFeedback"));
if (saved) {
  savedDataDiv.innerText = `Welcome back, ${saved.name}. You said: "${saved.message}"`;
}
