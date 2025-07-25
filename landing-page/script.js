const text = "Custom, Fast & Professional Websites – Delivered by Babli";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("type-writer").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
typeWriter();

window.onscroll = function () {
  const btn = document.getElementById("scrollBtn");
  btn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}