
function Light_Gray() {
    var light = document.getElementById("light");
    var dark = document.getElementById("dark");
    if (light.checked == true) {
        document.body.style.background = "red";
        dark.checked = false;
    }
    else {
        document.body.style.background = "linear-gradient(320deg, rgba(31, 26, 26, 0.95), rgba(83, 82, 82, 1))"
    }

}
function Dark() {
    var dark = document.getElementById("dark");
    var light = document.getElementById("light");

    if (dark.checked == true) {
        document.body.style.background = "black"
        light.checked = false
    }
    else {
        document.body.style.background = "linear-gradient(320deg, rgba(31, 26, 26, 0.95), rgba(83, 82, 82, 1))"
    }
}



function random(origin, pow) {
    return Math.floor(Math.random() * Math.pow(origin, pow));
}


