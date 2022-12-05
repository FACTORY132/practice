
function Light_Gray() {
    var light = document.getElementById("light");
    var dark = document.getElementById("dark");
    if (light.checked == true) {
        document.body.style.background = "linear-gradient(320deg,rgb(185, 179, 179), rgb(155, 170, 155), rgb(216, 216, 231))";
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
        document.body.style.background = "linear-gradient(320deg, rgb(71, 71, 71), rgb(12, 12, 12))"
        light.checked = false
    }
    else {
        document.body.style.background = "linear-gradient(320deg, rgba(31, 26, 26, 0.95), rgba(83, 82, 82, 1))"
    }
}



function random(origin, pow) {
    return Math.floor(Math.random() * Math.pow(origin, pow));
}


