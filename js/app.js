let bannerN1 = document.getElementById("b-01");
let bannerN2 = document.getElementById("b-02");
let bannerN3 = document.getElementById("b-03");
// let wrapper = document.getElementById("wrapper");
let message = document.getElementById("span-messagge");

bannerN1.addEventListener("click", () => {
  wrapper.style.backgroundImage = 'url(/img/slide.jpg)';
  // message.innerText="Elegiste el banner N°2";
})

bannerN2.addEventListener("click", () => {
  wrapper.style.backgroundImage = 'url(/img/slide2.jpg)'
})

bannerN3.addEventListener("click", () => {
  wrapper.style.backgroundImage = 'url(/img/slide3.jpg)'
})

