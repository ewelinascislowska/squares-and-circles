const button = document.querySelector("button");
let number = 1;
const addElement = function () {
    const div = document.createElement("div");
    div.textContent = number;
    document.body.appendChild(div);
    if (number % 2 == 0) {
        div.classList.add("circle");
    }
    number++;
}
button.addEventListener("click", addElement);