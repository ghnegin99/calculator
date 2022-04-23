let displayBox = document.querySelector(".display");
let btnList = document.querySelectorAll(".show-display");

function showDisplay(event) {
    let clickedBtn = event.target.innerText;
    if (displayBox.innerText == 0) {
        return displayBox.innerText = clickedBtn;
    }
    return displayBox.innerText += clickedBtn;
}
function calculate() {
    let calc = displayBox.innerText;
    displayBox.innerText = eval(calc);
};
function allClear() {
    displayBox.innerText = 0;
}
function clearLast() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else {
        displayBox.innerText = text.substring(0, text.length - 1);
    }

}
document.querySelector(".clear-last").addEventListener("click", clearLast);
document.querySelector(".clear-all").addEventListener("click", allClear);
document.querySelector(".calculate").addEventListener("click", calculate);
btnList.forEach(btn => btn.addEventListener("click", showDisplay));


