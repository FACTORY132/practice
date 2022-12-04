var text = "Writes";
document.getElementById("tab").innerHTML = localStorage['main'] || text;

setInterval(function () {
    localStorage['main'] = document.getElementById("tab").innerHTML;

}, 750);







