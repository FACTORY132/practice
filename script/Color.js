 window.addEventListener('load', () => {
        const fr = selectorAll(".colorize")
        fr.array.forEach(element => {
            element.addEventListener('click', () => function () {
                alert("Str")
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
function ids(str) {
    return document.getElementById(str);
}