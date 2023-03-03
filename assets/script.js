// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 // TODO: Add code to display the current date in the header of the page.
// var time = new Date();
// console.log(time.toLocaleString("en-US", { hour: "numeric", hour12: true }));

// let dayJS = () => {
//     let elm = document.getElementById("currentDay");
//     let d = new Date()
//     elm.innerHTML = d
// };

$(function(){
  $("#currentDay").text(new Date())

  $(".saveBtn").on("click", function(){
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  })

  $("#9 .description").text(localStorage.getItem("9"));
  $("#10 .description").text(localStorage.getItem("10"));
  $("#11 .description").text(localStorage.getItem("11"));
  $("#12 .description").text(localStorage.getItem("12"));
  $("#13 .description").text(localStorage.getItem("13"));
  $("#14 .description").text(localStorage.getItem("14"));
  $("#15 .description").text(localStorage.getItem("15"));
  $("#16 .description").text(localStorage.getItem("16"));
  $("#17 .description").text(localStorage.getItem("17"));

  function setColors(){
    var currentTime = dayjs().hour();
    
    // .each jquery elements
    $("time-block").each(function () {
      var blockTime = parseInt($(this).attr("id"));
      console.log(blockTime)
      if (blockTime < currentTime) {
        $(this).addClass("past")
      } else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }
  setColors()
})


    let set_colors = (hours) => {
        let blocks = document.getElementsByClassName("block");
        let d = new Date()
        let hour = d.getHours()
        var time = new Date();
        // let hour = (hour = ((hour + 11) % 12) + 1);
        for (var i = 0; i < blocks.length; i++) {
            if (hours[i] < hour) {
                blocks[i].style.background = "lightblue"
            } else if (hours[i] > hour){
                blocks[i].style.background = "lightgreen"
            } else {
                blocks[i].style.background = "lightsalmon"
            };
          
        };
    };
  //   function renderLastRegistered() {
  // var time = localStorage.getItem("time");
  // var data = localStorage.getItem("data");

  // {
  //   return;}
  // }
  // time.addEventListener(display);

  // function display(){
  //   localStorage.setItem("time", data.prompt);
  //   calander = localStorage.getItem("time");

  // }
  

  // let calander = (i, hours) => {
  //   return function() {
  //     var time = new Date();
  //     let data = prompt("Appointments: (click OK to save)");
  //     console.log("appointments go here");
      
  //     localStorage.setItem('time', data.prompt);

  //     // console.log(localStorage.getItem("hours"));

  //               let blocks = document.getElementsByClassName("block");
  //               if (data) {
  //                     blocks[i].innerHTML = blocks[i].innerHTML+"<br>"+data
  //                 };
  //             };
  //         };
           

  //       calander.addEventListener("click", function(event) {
  // event.preventDefault();


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
  //import dayjs from 'dayjs'
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  // TODO: Add code to display the current date in the header of the page.
  // $(function () {
    
  //   const dayjs = require("dayjs");
  //   dayjs().format();
  
  
  //   var todayDate = moment().format("dd, MM Do YYYY");
  //   $("$currentDay").html(todayDate);
  // });
