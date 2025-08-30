// Part 1: Variables & Conditionals
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let message;

  if (age >= 18) {
    message = "You are an adult ✅";
  } else if (age > 0) {
    message = "You are a minor 👶";
  } else {
    message = "Please enter a valid age!";
  }

  document.getElementById("ageResult").textContent = message;
  console.log("Age check result:", message);
}

// Part 2: Functions
function showTotal(a, b) {
  // Function to calculate total
  let total = a + b;
  document.getElementById("totalResult").textContent = "Total is: " + total;
}

function toggleMessage() {
  // Function to toggle visibility of a message
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// Part 3: Loops
function showNumbers() {
  // Using a for loop
  let numbers = "";
  for (let i = 1; i <= 5; i++) {
    numbers += i + " ";
  }
  document.getElementById("numberList").textContent = numbers;
}

function countdown(start) {
  // Using a while loop
  let result = "";
  let i = start;
  while (i >= 1) {
    result += i + " ";
    i--;
  }
  document.getElementById("countdownResult").textContent = result;
}

// Part 4: DOM Manipulation
document.getElementById("changeColorBtn").addEventListener("click", function() {
  // Change background color randomly
  let colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

document.getElementById("addItemBtn").addEventListener("click", function() {
  // Add a new list item dynamically
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.querySelectorAll("#itemList li").length + 1);
  document.getElementById("itemList").appendChild(newItem);
});

// Another DOM interaction: Change footer text on click
document.querySelector("footer").addEventListener("click", function() {
  this.textContent = "Footer was clicked!";
});
