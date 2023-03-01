// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 // TODO: Add code to display the current date in the header of the page.
// var get_date = anonymous function() that sets date
let get_date = () => {
  // grab the "elm", create "now date"
  let elm = document.getElementById("date");
  let d = new Date();
  // set "now date" in "elm"
  elm.innerHTML = d;
};

// creates calander html
let create_calander = (hours) => {
  let elm = document.getElementById("calander");
  // const newDiv = document.createElement("div"); // FUTURE NOT NOW

  for (var i = 0; i < hours.length; i++) {
    let new_div = document.createElement("div");
    new_div.className = "block";
    new_div.innerHTML = hours[i] + ":00 - " + (hours[i] + 1) + ":00 ";
    new_div.onclick = add_event(i, hours);
    elm.appendChild(new_div);
  }
};

// adds new event to block
let add_event = (i, hours) => {
  // closure, ASK if you dont get WHY we use this
  return function () {
    let data = prompt("Event details...");
    let blocks = document.getElementsByClassName("block");

    if (data) {
      blocks[i].innerHTML = blocks[i].innerHTML + "<br>" + data;
    }
  };
};

// This is where the code starts!
window.onload = () => {
  // PUT VARS TO USE IN CODE HERE
  let hours = [9, 10, 11, 12, 13, 14, 15, 16];

  // set date area
  get_date(); // set it initially
  setInterval(get_date, 1000); // run every 1000ms in BG (background)

  // creat calander
  create_calander(hours);
};
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // .addEventListener("click", function (event) {}

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  const dayjs = require("dayjs");
  //import dayjs from 'dayjs'
  dayjs().format();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.
  var todayDate = moment().format("dd, MM Do YYYY");
  $("$currentDay").html(todayDate);
});
