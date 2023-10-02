//Name:Sarbjit
//WEB303 Assignment
$(document).ready(function() {
  // Function to load content from a file using AJAX
  function onload(url) {
    $("#content").fadeOut(200, function() { // Hide the content with a fade-out animation
      $.ajax({
        url: url, // URL to load
        type: "GET", // HTTP request type
        success: function(response) {
          // Replace the content with the loaded data
          $("#content").html(response);
          
          // Apply CSS changes with animation
          $("#content").css("background-color", "White")
            .animate({
              fontSize: "14px", // Example CSS property change with animation
              color: "white"
            }, 200); // Animation duration in milliseconds
        },
        error: function() {
          alert("Error loading content."); // Handle any errors during loading
        }
      }).done(function() {
        // Show the content with a fade-in animation after the AJAX request is done
        $("#content").fadeIn(200);
      });
    });
  }

  // Click event handlers for the solution links using .onload()
  $("#prospect").click(function(event) {
      event.preventDefault(); 
      onload("prospect.html"); 
    });
  
  $("#convert").click(function(event) {
      event.preventDefault(); 
      onload("convert.html");
    });
  
  $("#retain").click(function(event) {
      event.preventDefault(); 
      onload("retain.html"); 
    });
});
