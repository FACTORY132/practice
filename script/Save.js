var tab = document.getElementById("tab").innerHTML = localStorage['main'] || "Writes";
var saver = true;
const log = console.log;
    
setInterval(function () {
    if (saver == true) {
        localStorage['main'] = document.getElementById("tab").innerHTML;
    }
    else if (saver == false) {

    }

}, 750)





