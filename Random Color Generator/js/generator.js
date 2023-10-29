const btn = document.querySelector(".btn");
const colorCode = document.querySelector(".colorCode")

function getColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    colorCode.style.color = randomCode;
    document.querySelector(".colorCode").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}

btn.addEventListener("click", getColor);

getColor();

