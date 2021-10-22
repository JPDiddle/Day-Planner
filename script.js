setInterval(function () {
    var today = new Date(); 
    document.getElementById("Today").innerHTML = formatDate(new Date());
  }, 1000);
  
  function formatDate(today) {
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
  
    return `${month}/${date}/${year} ${hour}:${minutes}:${seconds}`;
  }
  
  // 
  function updateBackground() {
    var hour = new Date().getHours(), 
      greeting = document.querySelector(".greet"); element class
    if (hour < 11) {
      
      greeting.innerText = "Good Morning!!"; 
    } else if (hour < 20) {
     
      greeting.innerText = "Time to get to work"; 
    } else {
      greeting.innerText = "Bed Time!"; 
    }
  
    $(".time-block").each(function () {
      const id = $(this).attr("id");
      const blockHour = parseInt(id.split("-").pop());
      if (blockHour < hour) {
       
        $(this).find("textarea").addClass("past"); 
        console.log(this);
      } else if (hour === blockHour) {
        
        $(this).find("textarea").addClass("present"); 
      } else {
        $(this).find("textarea").addClass("future"); 
      }
    });
  }
  setInterval(updateBackground, 1000 * 60); 
  updateBackground(); 
  
  var activities = document.querySelector("textarea"); 
  const data = JSON.parse(localStorage.getItem("day-schedule")) || { data }; 
  
  $(".saveBtn").on("click", function (event) {
    
    event.preventDefault();
  
    const val = $(this).siblings("textarea").eq(0).val().trim(); 
  
    const id = $(this).parent().attr("id"); 
  
    data[id] = val; 
    localStorage.setItem("day-schedule", JSON.stringify(data)); 
  });