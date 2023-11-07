const kgAmount = document.getElementById("kg")
const lbAmount = document.getElementById("lb")
const ozAmount = document.getElementById("oz")

let convertFromKg = () => {
    let kg = kgAmount.value;
    lbAmount.value = (kg * 2.205).toFixed(2);
    ozAmount.value = (kg * 35.274).toFixed(2);
}

let convertFromLb = () => {
    let lb = lbAmount.value;
    kgAmount.value = (lb / 2.205).toFixed(2);
    ozAmount.value = (lb / 16).toFixed(2);
}

let convertFromOz = () => {
    let oz = ozAmount.value;
    kgAmount.value = (oz / 35.274).toFixed(2);
    lbAmount.value = (oz / 16).toFixed(2);
}



kgAmount.addEventListener("input", convertFromKg);
lbAmount.addEventListener("input", convertFromLb);
ozAmount.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);