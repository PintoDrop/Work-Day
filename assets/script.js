// TODO: Add code to display the current date in the header of the page.
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


    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id"));
      console.log(blockTime);
      if (blockTime < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  setColors()
})

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?


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
    