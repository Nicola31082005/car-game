// Get DOM elements
const car = document.getElementById('car');
const scoreDisplay = document.getElementById('score');
const resetButton = document.querySelector(".reset-button")

// Variables for game logic
const totalLanes = 9;
let currentLane = totalLanes;  // Start in the last lane
let score = 0;
const laneHeight = 60;
const laneMargin = 20;
let isMoving = false;

// Function to update car's position based on the current lane
function updateCarPosition() {

  const totalLanesHeight = totalLanes * laneHeight
  const gapBetweenLanes = (800 - totalLanesHeight) / (totalLanes - 1);

  let carPosition = (currentLane - 1) * (laneHeight + gapBetweenLanes) + 5;

  car.style.top = `${carPosition}px`;  // Center the car
}

// Event listener for key presses
document.addEventListener('keydown', (e) => {

  if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") {

    e.preventDefault()


    if (e.key === 'ArrowUp' && currentLane > 1) {
      currentLane--;
    } else if (e.key === 'ArrowDown' && (currentLane < totalLanes)) {
      currentLane++;
    }
    updateCarPosition();

    // Check if the car reaches the finish line

    if (currentLane === 1) {

      if (!isMoving) {

        score++;
        scoreDisplay.innerText = score;
      }


      // Check if the score is equal to 10

      if (score === 10) {
        window.location.href = "wining-page.html"
      }

      isMoving = true;


      // Reset the car to the starting position
      setTimeout(() => {
        currentLane = totalLanes;  // Reset to bottom lane
        updateCarPosition();

        isMoving = false;

      }, 500);  // Small delay before resetting
    }

  }

});


// Event listener for the reset button

resetButton.addEventListener('click', (e) => {
  currentLane = totalLanes
  updateCarPosition()
  scoreDisplay.innerText = 0
})

// Initialize the car's starting position
updateCarPosition();
