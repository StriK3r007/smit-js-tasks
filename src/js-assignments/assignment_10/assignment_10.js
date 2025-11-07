let timer;
let minutes = 0, seconds = 0, milliseconds = 0;
let running = false;

const startButton = document.getElementById('stopWatchStart');
const pauseButton = document.getElementById('stopWatchPause');
const resetButton = document.getElementById('stopWatchReset');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('mSeconds');

function updateDisplay() {
    displayMinutes.textContent = minutes.toString().padStart(2, '0');
    displaySeconds.textContent = seconds.toString().padStart(2, '0');
    displayMilliseconds.textContent = milliseconds.toString().padStart(2, '0');
}

function startTimer() {
    timer = setInterval(() => {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        updateDisplay();
    }, 10);
}

function stopWatchStart() {
    if (!running) {
        running = true;
        startButton.classList.add('hidden');
        pauseButton.classList.remove('hidden');
        startTimer();
    }
}

function stopWatchPause() {
    if (running) {
        running = false;
        clearInterval(timer);
        startButton.classList.remove('hidden');
        pauseButton.classList.add('hidden');
    }
}

function stopWatchReset() {
    running = false;
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startButton.classList.remove('hidden');
    pauseButton.classList.add('hidden');
}


// let timer;
//     let minutes = 0, seconds = 0, milliseconds = 0;
//     let running = false;

//     // Get references to the elements in the HTML
//     const startButton = document.getElementById('stopWatchStart');
//     const pauseButton = document.getElementById('stopWatchPause');
//     const resetButton = document.getElementById('stopWatchReset');
//     const displayMinutes = document.getElementById('minutes');
//     const displaySeconds = document.getElementById('seconds');
//     const displayMilliseconds = document.getElementById('mSeconds');

//     // Update the display with the current time values
//     function updateDisplay() {
//         displayMinutes.textContent = minutes.toString().padStart(2, '0');
//         displaySeconds.textContent = seconds.toString().padStart(2, '0');
//         displayMilliseconds.textContent = milliseconds.toString().padStart(2, '0');
//     }

//     // Start the timer
//     function startTimer() {
//         timer = setInterval(() => {
//             milliseconds++;
//             if (milliseconds === 100) {
//                 milliseconds = 0;
//                 seconds++;
//             }
//             if (seconds === 60) {
//                 seconds = 0;
//                 minutes++;
//             }
//             updateDisplay();
//         }, 10); // Update every 10ms for milliseconds precision
//     }

//     // Start button handler
//     function stopWatchStart() {
//         if (!running) {
//             running = true;
//             startButton.classList.add('hidden');
//             pauseButton.classList.remove('hidden');
//             startTimer(); // Begin counting
//         }
//     }

//     // Pause button handler
//     function stopWatchPause() {
//         if (running) {
//             running = false;
//             clearInterval(timer); // Stop the timer
//             startButton.classList.remove('hidden');
//             pauseButton.classList.add('hidden');
//         }
//     }

//     // Reset button handler
//     function stopWatchReset() {
//         running = false;
//         clearInterval(timer); // Stop the timer
//         minutes = 0;
//         seconds = 0;
//         milliseconds = 0;
//         updateDisplay(); // Reset the display to 00:00:00
//         startButton.classList.remove('hidden');
//         pauseButton.classList.add('hidden');
//     }