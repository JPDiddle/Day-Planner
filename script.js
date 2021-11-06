var activitiesInput = document.querySelector("textarea");
var activities = []
const data = JSON.parse(localStorage.getItem("day-schedule")) || {};
const date = new Date();
    const hour = date.getHours();

$(".time-block").each(function (i, object) {
const hour = parseInt(object.id);
if (hour === date.getHours()) {
     document.getElementById(`text${object.id}`).style.backgroundColor = "red"
}else if (hour > date.getHours()){
     document.getElementById(`text${object.id}`).style.backgroundColor = "green"
 }else {
 document.getElementById(`text${object.id}`).style.backgroundColor = "grey"
}
  });
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    const val = $(this).siblings("textarea").eq(0).val().trim();
    const id = $(this).parent().attr("id");
    const data = {time:id, text:val}
    localStorage.setItem(id, JSON.stringify(data));
  });
  setInterval(function () {
    document.getElementById("currentDay").innerHTML = formatDate(new Date());
  }, 1000);
  function formatDate(today) {
    var year = today.getFullYear(),
      month = today.getMonth() + 1,
      date = today.getDate(),
      hour = today.getHours(),
      minutes = today.getMinutes(),
      seconds = today.getSeconds();
  
    return `${month}/${date}/${year} ${hour}:${minutes}:${seconds}`;
  }


  if (localStorage.getItem("9")) {
    var parsed9 = JSON.parse(localStorage.getItem("9"));
  $("#text9").val(parsed9.text);
  }
  if (localStorage.getItem("10")) {
    var parsed10 = JSON.parse(localStorage.getItem("10"));
  $("#text10").val(parsed10.text);
  }
  if (localStorage.getItem("11")) {
    var parsed11 = JSON.parse(localStorage.getItem("11"));
  $("#text11").val(parsed11.text);
  }
  if (localStorage.getItem("12")) {
    var parsed12 = JSON.parse(localStorage.getItem("12"));
  $("#text12").val(parsed12.text);
  }
  if (localStorage.getItem("13")) {
    var parsed13 = JSON.parse(localStorage.getItem("13"));
  $("#text13").val(parsed13.text);
  }
  if (localStorage.getItem("14")) {
    var parsed14 = JSON.parse(localStorage.getItem("14"));
  $("#text14").val(parsed14.text);
  }
  if (localStorage.getItem("15")) {
    var parsed15 = JSON.parse(localStorage.getItem("15"));
  $("#text15").val(parsed15.text);
  }
  if (localStorage.getItem("16")) {
    var parsed16 = JSON.parse(localStorage.getItem("16"));
  $("#text16").val(parsed16.text);
  }
  if (localStorage.getItem("17")) {
    var parsed17 = JSON.parse(localStorage.getItem("17"));
  $("#text17").val(parsed17.text);
  }


