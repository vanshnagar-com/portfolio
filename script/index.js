document.querySelector(".seeMore").addEventListener("click", () => {
  alert("work in progress");
});

document.querySelector(".send-button").addEventListener("click", () => {
  sendToWhatsApp();
});
function sendToWhatsApp() {
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const Rating = document.querySelector(".Rating").value;
  const message = document.querySelector(".message").value;
  const phoneno = "8824458774";

  const whatsappMessage = `Hello, I am ${name} Rating : ${Rating}/10 , E-mail adress : (${email}). Feedback : ${message}`;

  const whatsappUrl = `https://wa.me/${phoneno}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  window.open(whatsappUrl, "_blank");
}
