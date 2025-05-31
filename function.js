document.addEventListener("DOMContentLoaded", function () {
    const botao = document.querySelector(".button");
  
    if (botao) {
      botao.addEventListener("click", function () {
        const numero = "351912345678"; // Substitui pelo número real
        const mensagem = "Olá! Gostaria de saber mais sobre a Casa de Francisco.";
        const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
        window.open(link, "_blank");
      });
    }
  });