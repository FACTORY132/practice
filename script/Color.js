
window.addEventListener('load', () => {
    const fr = selectorAll(".colorize")
    fr.forEach(element => {
        element.addEventListener('click', function () {
            const id = this.id;
            document.body.className = id;
        })
    });
})




//css class name
function selector(str) {
    return document.querySelector(str);
}
//getAll css that have same class name
function selectorAll(str) {
    return document.querySelectorAll(str);
}

//getElementTag id
//document.getElementById("Tag id");
