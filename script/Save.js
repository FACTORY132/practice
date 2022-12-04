var tab = document.getElementById("tab").innerHTML = localStorage['main'] || "Writes";
const log = console.log;
    
setInterval(function () {
        localStorage['main'] = document.getElementById("tab").innerHTML;
}, 750)





