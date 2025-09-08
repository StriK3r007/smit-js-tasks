// task_01. Custom Date Formatter
// Write a function that takes a Date object and returns a formatted string like:
// "Saturday, 9 August 2025".
function task01() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date()
  const day = days[date.getDay()]
  const dayNum = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  const customDate = `${day}, ${dayNum} ${month} ${year}`
  console.log(customDate)
  document.getElementById('task_01_output').innerHTML = customDate
}

// task_02. Elapsed Time in Minutes
// Given two timestamps, calculate how many minutes have passed between them.
function task02() {
  const timeStampOne = document.getElementById("timeStampOne").value
  const timeStampTwo = document.getElementById("timeStampTwo").value
  const task_02_output = document.getElementById("task_02_output")
  if (timeStampOne == '' || timeStampTwo == '') {
    return task_02_output.innerText = 'Please select valid timestamps'
  }
  const timeStampDiff = (new Date(timeStampTwo) - new Date(timeStampOne)) / (1000 * 60)
  console.log(timeStampDiff,)
  task_02_output.innerText = `${timeStampDiff} minutes have passed`
}

// task_03. Age Calculator from Full Birthdate
// Create a function that accepts a full birthdate (YYYY-MM-DD) and calculates the age in years, months, and days.
function task03() {
  const birthdate = document.getElementById('birthDate').value
  const task_03_output = document.getElementById('task_03_output')
  const currentDate = new Date()
  const birthDate = new Date(birthdate)

  if (birthdate == '') {
    return task_03_output.innerText = 'Please select valid birth date'
  }

  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth()
  let ageDays = currentDate.getDate() - birthDate.getDate()

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // console.log(`Age: ${ageYears} years, ${ageMonths} months, ${ageDays} Days`)
  task_03_output.innerText = (`${ageYears} years old`)
}

// task_04. Get First Day of Current Month
// Return the date of the first day of the current month.
function task04() {
  const currentDate = new Date()
  const task_04_output = document.getElementById("task_04_output")
  currentDate.setDate(1)
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September"];
  const firstDayOfCurrentMonth = days[currentDate.getDay()]
  task_04_output.innerText = `First day of ${months[currentDate.getMonth()]} is ${firstDayOfCurrentMonth}`
}

// task_05. Get Last Day of Current Month 
// Write a function that returns the last date (e.g., 31, 30, or 28/29) of the current month.
function task05() {
  const currentDate = new Date()
  currentDate.setMonth(currentDate.getMonth() + 1)
  currentDate.setDate(0)

  const lastDayOfCurrentMonth = currentDate.getDate()

  console.log(lastDayOfCurrentMonth,)
}

// task_06. Human-Friendly "Time Ago"
// Create a function that returns strings like:
// ○ "Just now"
// ○ "5 minutes ago"
// ○ "2 hours ago"
// ○ "1 day ago" based on a past timestamp.
function task06() {
  const currentDate = new Date()
  const timeStamp = document.getElementById('timeStamp_06').value
  const pastDate = new Date(timeStamp)
  const task_06_output = document.getElementById('task_06_output')

  if (timeStamp == '') {
    return task_06_output.innerText = 'Please select valid timestamp'
  }

  const timeStampDiff = currentDate - pastDate

  const seconds = Math.floor(timeStampDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return task_06_output.innerText = "Just now";
  } else if (minutes < 60) {
    return task_06_output.innerText = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return task_06_output.innerText = `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (days < 30) {
    return task_06_output.innerText = `${days} day${days > 1 ? 's' : ''} ago`;
  } else {
    return task_06_output.innerText = pastDate.toLocaleDateString();
  }
}

// task_07. Countdown Timer
// Create a simple countdown function to a future date (e.g., New Year), showing days, hours, minutes, seconds remaining.
function task07() {
  const futuredate = document.getElementById('futuredate').value
  const task_07_output = document.getElementById('task_07_output')
  const futureDate = new Date(futuredate)

  if (futuredate == '') {
    return task_07_output.innerText = 'Please select valid time'
  }

  const interval = setInterval(() => {
    const currentDate = new Date();
    const timeDifference = futureDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(interval);
      console.log("The countdown has finished!");
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    task_07_output.innerText = (`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
  }, 1000);
}

// task_08. Time Difference in Hours and Minutes
// Given two dates, return the difference in hours and minutes, like: "3 hours 25 minutes".
function task08() {
  const firstdate = document.getElementById('firstdate').value
  const secondate = document.getElementById('seconddate').value
  const task_08_output = document.getElementById('task_08_output')
  const firstDate = new Date(firstdate)
  const secondDate = new Date(secondate)

  if (firstDate == '' || secondate == '') {
    return task_08_output.innerText = 'Please select valid dates'
  }

  const dateDiff = secondDate - firstDate

  const seconds = Math.floor(dateDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  // const days = Math.floor(hours / 24);

  task_08_output.innerText = (`Time difference is ${hours} hours, and ${minutes} minutes`)
}

// task_09. Check if Date is Weekend or Weekday
// Write a function that returns "Weekend" or "Weekday" based on a given date string.
function task09() {
  const currentdate = document.getElementById('currentdate').value
  const task_09_output = document.getElementById('task_09_output')
  const currentDate = new Date(currentdate)

  if (currentdate == '') {
    task_09_output.innerText = 'Please select valid date'
    return
  }

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = currentDate.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    task_09_output.innerText = `${days[currentDate.getDay()]}, is a Weekend`;
  } else {
    task_09_output.innerText = `${days[currentDate.getDay()]}, is a Weekday`;
  }
}

// task_10. Compare Birthdays
// Ask for two people’s birthdates and return who is older and by how many years/days.
function task10() {
  const firstdate = document.getElementById('firstPersonDate').value;
  const seconddate = document.getElementById('secondPersonDate').value;
  const task_10_output = document.getElementById('task_10_output');
  const firstDate = new Date(firstdate);
  const secondDate = new Date(seconddate);

  if (firstdate == '' || seconddate == '') {
    return task_10_output.innerText = 'Please select valid dates';
  }

  const diffTime = Math.abs(firstDate - secondDate);

  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)); // years
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) % 365; // days

  if (firstDate < secondDate) {
    task_10_output.innerText = `First Person is older by ${diffYears} years and ${diffDays} days.`;
  } else if (firstDate > secondDate) {
    task_10_output.innerText = `Second Person is older by ${diffYears} years and ${diffDays} days.`;
  } else {
    task_10_output.innerText = "Both are the same age.";
  }

  console.log(`1st Person: ${firstDate} ---- 2nd Person: ${secondDate}`);
}

// task_11. Recurring Alarm Checker
// Given a day and time (e.g., "Monday 08:00"), check if the current date/time matches that schedule.
function task11() {
  const currentDate = new Date()
  const userdate = document.getElementById("alarmCheckerDate").value
  const task_11_output = document.getElementById('task_11_output');
  const userDate = new Date(userdate)

  if (!userdate) {
        task_11_output.innerText = 'Please select valid date';
        return
  }

  if (currentDate.getDate() === userDate.getDate() && 
  currentDate.getMonth() === userDate.getMonth() && 
  currentDate.getFullYear() === userDate.getFullYear()) {
        return task_11_output.innerText = 'Matched';
  }
  else {
        return task_11_output.innerText = 'Not Matched';
  }
}

// task_12. Date Validator
// Write a function that checks whether a given date string is a valid date (e.g., using Date.parse() or new Date()).

// task_13. Custom Relative Date Formatter
// Given a timestamp, format it as:
// ● "Today at 3:45 PM"
// ● "Yesterday at 11:00 AM"
// ● "4 days ago"
// depending on how recent it is.
function task13() {
  const currentDate = new Date();
  const userdate = document.getElementById("relativeDateFormatter").value;
  const userDate = new Date(userdate);

  if (isNaN(userDate)) {
    task_13_output.innerText = 'Please select a valid date';
    return;
  }

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${formattedMinutes} ${ampm}`;
  };

  const isToday = userDate.toDateString() === currentDate.toDateString();

  const isYesterday = (new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1)).toDateString() === userDate.toDateString();

  const timeDiff = currentDate - userDate;
  const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
  const diffHours = Math.floor(timeDiff / (1000 * 3600));
  const diffMinutes = Math.floor(timeDiff / (1000 * 60));

  if (isToday) {
    task_13_output.innerText = `Today at ${formatTime(userDate)}`;
  } else if (isYesterday) {
    task_13_output.innerText = `Yesterday at ${formatTime(userDate)}`;
  } else if (diffDays > 1) {
    task_13_output.innerText = `${diffDays} days ago`;
  } else if (diffHours > 0) {
    task_13_output.innerText = `${diffHours} hours ago`;
  } else if (diffMinutes > 0) {
    task_13_output.innerText = `${diffMinutes} minutes ago`;
  } else {
    task_13_output.innerText = 'Just now';
  }
}


// task_14. Generate Dates for the Next 7 Days
// Return an array of dates (in DD-MM-YYYY format) for the next 7 days from today.
function task14() {
  const userdate = document.getElementById("nextSevenDates").value
  const userDate = new Date(userdate); // starting date
  const dateArray = []; // to store the next 7 days in DD-MM-YYYY format
  const task_14_output = document.getElementById("task_14_output")

  if (isNaN(userDate)) {
    task_14_output.innerText = 'Please select a valid date';
    return;
  }

  // Loop through the next 7 days
  for (let i = 0; i < 7; i++) {
    // Clone the userDate to avoid modifying the original date
    const nextDate = new Date(userDate);
    nextDate.setDate(userDate.getDate() + i); // increment the date

    // Format the date as DD-MM-YYYY
    const day = nextDate.getDate().toString().padStart(2, '0'); // Ensure two digits
    const month = (nextDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = nextDate.getFullYear();

    // Push the formatted date to the array
    dateArray.push(`${day}-${month}-${year}`);
  }
  task_14_output.innerHTML = ""
  for (i = 0; i < dateArray.length; i++) {
    task_14_output.innerHTML += `</br> ${i+1}: ${dateArray[i]}`
  }
}

// task_15. Time Slot Generator
// Create a function that generates available 30-minute time slots between 9 AM to 5 PM for a specific date.

// task_16. Monthly Calendar Dates
// Return an array of all dates in the current month (e.g., ['01-08-2025', '02-08-2025', ...]).

// task_17. Convert UTC Date to Local Time
// Given a UTC date string, convert it to local date/time format.

// task_18. Measure Function Execution Time
// Use Date.now() to measure how long a loop/function takes to execute.

// task_19. Format Date as ISO String Without Time
// Format the current date as YYYY-MM-DD (without time), using a custom formatter.
function task_19() {
  const currentDate = new Date()
  let month = currentDate.getMonth() + 1
  let year = currentDate.getFullYear()
  let date = currentDate.getDate()
  
  month =  month < 10 ? "0" + month : month.toString()
  date = date < 10 ? "0" + date : date.toString()
  // month: month.toString().padStart(2, '0')

  console.log(`${year}-${month}-${date}`)
}

// task_20. Get the Number of Days in Any Month
// Write a function that takes a month and year, and returns how many days are in that month (handle leap years too).

























/*
// Exa
// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.toString());

// console.log(currentDate.getDate());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
// console.log(currentDate.getTime());







// kisi banda ki age nikaalni haa

let currentDate = new Date().getTime();
let birthdata = new Date("July 10, 2005 13:25:00").getTime()
let remainingMilliseconds = currentDate - birthdata
let calculateAge = Math.floor(remainingMilliseconds / 1000 / 60 / 60 / 24 / 365)

console.log(calculateAge);



function changePage(){
    localStorage.setItem("calculatedAge" , JSON.stringify(["apple" , "banana" , "orange"]))
    window.location = "about.html"
    // console.log(window.location);
    
    
}






// let currentDate = new Date();
// // currentDate.setFullYear(2005)
// // currentDate.setHours(13)
// console.log(currentDate.getDay());



// Manual, locale-agnostic solution
const WEEKDAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function formatDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new TypeError('Expected a valid Date object');
  }
  const weekday = WEEKDAYS[date.getDay()];
  const day = date.getDate();            // no leading zero
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  return `${weekday}, ${day} ${month} ${year}`;
}

// Example:
formatDate(new Date(2025, 7, 9)); // "Saturday, 9 August 2025"
*/