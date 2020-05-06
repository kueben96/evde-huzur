/* only execute this script when the document is ready */
$(document).ready(function(){
    /* function called when you click of the button */
    $("button").click(function(){
        console.log("click");
        /* this if else to change the text in the button */
        if($("button").text() == "☰"){
         $("button").text("x");
        }else{
          $("button").text("☰");
        }
      
      /* this function toggle the visibility of our "li" elements */
      $("li").toggle("slow");
    });
  });

  var hak_button = document.getElementById("testbutton");

  hak_button.addEventListener('click', function(){
    console.log("clicked");
  } )