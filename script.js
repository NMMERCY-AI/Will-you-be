let yes1 = document.querySelector(".btn1");  // First YES button
let no = document.querySelector(".btn2");   // NO button
let yes2 = document.querySelector(".btn3");  // Second YES button (for NO-first scenario)
let text = document.querySelector(".text");

// Variable to track if NO has been clicked first
let noClickedFirst = false;

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for YES button click (Scenario 1: YES clicked first)
yes1.addEventListener("click", function () {
  const box = document.querySelector(".box");

  if (noClickedFirst) {
    // Scenario 1: Background and text change after NO is clicked first
    if (box) {
      box.style.backgroundImage = "url('ASSEST/')"; // Update URL with valid asset path
      box.style.backgroundSize = "cover";
      box.style.backgroundPosition = "top center";
      box.style.backgroundRepeat = "no-repeat";
    }

    // Change the text content
    text.innerHTML = "Kasto aginai click garnu pardaina🤭tme pani";

    // Hide both buttons after YES is clicked
    yes1.style.display = "none";
    no.style.display = "none";

  } else {
    // Scenario 2: YES clicked without NO
    if (box) {
      box.style.backgroundImage = "url('ASSEST/12.gif')"; // Update URL with valid asset path
      box.style.backgroundSize = "cover";
      box.style.backgroundPosition = "top center";
      box.style.backgroundRepeat = "no-repeat";
    }

    // Change the text content
    text.innerHTML = "CAN'T WAIT TO SEE YOU😚😊";

    // Hide both buttons after YES is clicked
    yes1.style.display = "none";
    no.style.display = "none";
  }
});

// Event listener for NO button click
no.addEventListener("click", function () {
    const box = document.querySelector(".box");

    if (box) {
      // Change the background image when NO is clicked
      box.style.backgroundImage = "url('ASSEST/fruits-basket-angry.gif')"; // Update URL with valid asset path
      box.style.backgroundSize = "cover";
      box.style.backgroundPosition = "top center";
      box.style.backgroundRepeat = "no-repeat";
    }

    // Change the text content when NO is clicked
    text.innerHTML = "YES DEKNA NA KI K HO TETRO EYE LA😏";

    // Hide the NO button after it's clicked
    no.style.display = "none";
    yes1.style.display = "none";

    // Show the second YES button after NO is clicked
    yes2.style.display = "block";

    // Apply styles to the second YES button (yes2)
    yes2.style.border = "none";  // Remove border
    yes2.style.fontSize = "70px";  // Font size of second YES button
    yes2.style.backgroundColor = getRandomColor();  // Set a random background color
    yes2.style.color = "white";  // White text color
    yes2.style.padding = "50px 60px";  // Padding for button size
    yes2.style.borderRadius = "5px";  // Rounded corners for button
    yes2.style.cursor = "pointer";  // Change cursor to pointer on hover

    // Apply transition for scaling effect (on hover or click)
    yes2.style.transition = "transform 3s ease, font-size 3s ease, background-color 3s ease";  // Smooth 3-second transition

    // Add smooth hover effect to the button
    yes2.addEventListener("mouseenter", function () {
      yes2.style.transform = "scale(1.1)"; 
      yes2.style.backgroundColor = getRandomColor(); // Slightly scale up and change color when hovered
    });

    yes2.addEventListener("mouseleave", function () {
      yes2.style.transform = "scale(1)";
      yes2.style.backgroundColor = getRandomColor();  // Revert to original size and change color when hover ends
    });

    // Set flag to indicate NO was clicked first
    noClickedFirst = true;
});

// Event listener for second YES button click (Scenario 1: After NO is clicked)
yes2.addEventListener("click", function () {
  const box = document.querySelector(".box");

  if (box) {
    // Change the background image when the second YES is clicked
    box.style.backgroundImage = "url('ASSEST/baby-shy.gif')"; // Update URL with valid asset path
    box.style.backgroundSize = "cover";
    box.style.backgroundPosition = "top center";
    box.style.backgroundRepeat = "no-repeat";
  }

  // Change the text content when second YES is clicked
  text.innerHTML = "Kasto aginai click garnu pardaina🤭tme pani";

  // Hide both YES buttons after the second YES click
  yes1.style.display = "none";
  yes2.style.display = "none";
});
