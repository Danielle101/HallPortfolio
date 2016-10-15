/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function myGreeting(){
	  var name = document.getElementById("name").value;
	  var message = "Thanks for visiting my site "+ name +". If you would like to contact me please fill out the form below!"
	  document.getElementById("pMessage").innerHTML = message;
	  }


