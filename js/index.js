/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function sendEmail() 
{
    window.location = "mailto:XXXX Add Email Here XXXX";
}