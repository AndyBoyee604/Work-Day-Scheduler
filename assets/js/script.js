//date and time
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

  // track live time
  function timeTracker() {
    var timeNow = moment().hour();

    // looping time-blocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("h")[1]);

      // show background color for past, future, present
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

      }
    })
  }

  // saveBtn click listener
  $(document).ready(function () { 
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".task").val();
      var time = $(this).parent().attr("id");
  
      localStorage.setItem(time, text);
    })

  // Grab info from local
  $("#h9 .task").val(localStorage.getItem("h9"));
  $("#h10 .task").val(localStorage.getItem("h10"));
  $("#h11 .task").val(localStorage.getItem("h11"));
  $("#h12 .task").val(localStorage.getItem("h12"));
  $("#h13 .task").val(localStorage.getItem("h13"));
  $("#h14 .task").val(localStorage.getItem("h14"));
  $("#h15 .task").val(localStorage.getItem("h15"));
  $("#h16 .task").val(localStorage.getItem("h16"));
  $("#h17 .task").val(localStorage.getItem("h17"));

  timeTracker();
})