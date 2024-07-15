let urlInput = document.getElementById("url").value;

function generateQR() {
  //api url for creating QR code
  let qrApi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

  // Retrieving input element
  let url = document.getElementById("url");
  let qrImage = document.getElementById("qrimage");
  let imageBox = document.getElementById("imgBox");

  //creating qrcode url for QR image source attribute
  let QRCode = `${qrApi}+${url.value}`;
  //if url element value is valid assign url to qrImage source attribute and add showbox css class
  if (url.value.length > 0) {
    qrImage.src = QRCode;
    imageBox.classList.add("showbox");
  } else {
    //if url element is empty then shakebox css animation class will add and removed after 1s
    url.classList.add("shakebox");
    setTimeout(() => {
      url.classList.remove("shakebox");
    }, 1000);
  }
}
