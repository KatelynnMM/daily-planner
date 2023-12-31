$(function () {
  // Display current date in the header
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // Get the id of the parent time-block
    var timeBlockId = $(this).parent().attr("id");

    // Get the user input from the textarea within the clicked time-block
    var userInput = $(this).siblings(".description").val();

    // Save the user input in local storage using the timeBlockId as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply past, present, or future class to each time block
  function updateHourlyBlocks() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      // Get the hour from the time-block id
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // Compare the blockHour with the currentHour and apply the appropriate class
      if (blockHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  // Get any user input that was saved in localStorage and set the values of corresponding textarea elements
  function loadSavedEvents() {
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var savedEvent = localStorage.getItem(timeBlockId);

      // Set the value of the textarea to the saved event
      $(this).children(".description").val(savedEvent);
    });
  }

  // Call the functions to initialize the page
  updateHourlyBlocks();
  loadSavedEvents();
});

















































// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// $(function () {
 

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  // });
