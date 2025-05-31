document.addEventListener("DOMContentLoaded", function () {
    const itemPix = document.querySelector(".pix");
  
    if (itemPix) {
      itemPix.addEventListener("click", function () {
        const urlQRCode = "https://teusite.com/qrcode-pix.png"; // <- substitui com o link do QR Code
        window.open(urlQRCode, "_blank"); // Abre em nova aba
      });
    }
  });