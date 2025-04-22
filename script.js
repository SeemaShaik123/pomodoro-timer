let timer;
let timeLeft = 1500; // default 25 minutes
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

const workBtn = document.getElementById("work");
const shortBreakBtn = document.getElementById("short-break");
const longBreakBtn = document.getElementById("long-break");

const updateDisplay = () => {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
};

const startTimer = () => {
  if (!isRunning) {
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        alert("Time's up!");
        isRunning = false;
      }
    }, 1000);
    isRunning = true;
  }
};

const pauseTimer = () => {
  clearInterval(timer);
  isRunning = false;
};

const resetTimer = () => {
  clearInterval(timer);
  timeLeft = 1500;
  updateDisplay();
  isRunning = false;
};

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

workBtn.addEventListener("click", () => {
  timeLeft = 1500;
  updateDisplay();
});
shortBreakBtn.addEventListener("click", () => {
  timeLeft = 300;
  updateDisplay();
});
longBreakBtn.addEventListener("click", () => {
  timeLeft = 900;
  updateDisplay();
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const toggleLabel = document.querySelector(".toggle-label");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    toggleLabel.textContent = "Light Mode";
  } else {
    toggleLabel.textContent = "Dark Mode";
  }
});

updateDisplay();
toggleLabel.textContent = document.body.classList.contains("light-mode") ? "Light Mode" : "Dark Mode";


