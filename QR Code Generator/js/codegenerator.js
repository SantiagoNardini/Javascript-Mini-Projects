const imgBox = document.querySelector("#imgBox");
const qrImage = document.querySelector("#qrImage");
const qrText = document.querySelector("#qrText");

function generateQR() {
    if (qrText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrText.value;
    imgBox.classList.add("show-img");
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        },1000);
    }
}