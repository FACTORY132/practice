
function Light_Gray() {
    var light = document.getElementById("light");
    if (light.checked == true) {
        document.body.style.background = "red";
    }
    else {
        document.body.style.background = "linear-gradient(320deg, rgba(31, 26, 26, 0.95), rgba(83, 82, 82, 1))"
    }
    console.log(any)

}
function Dark() {
    var dark = document.getElementById("dark");
    if (dark.checked == true) {
        document.body.style.background = "black"
    }
    else {
        document.body.style.background = "linear-gradient(320deg, rgba(31, 26, 26, 0.95), rgba(83, 82, 82, 1))"
    }
}
