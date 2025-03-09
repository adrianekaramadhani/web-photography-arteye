const menuBtn= document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

/*Untuk navbar*/
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line" : "ri-menu-line");
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
    ...ScrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
    ...ScrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header__container p", {
    ...ScrollRevealOption,
    delay:1000,
});

/*Untuk Slider*/
const myslide = document.querySelectorAll('.myslide'),
      dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
  counter += 1;
  slidefun(counter); 
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}

function slidefun(n){
  let i;
  for(i = 0;i<myslide.length;i++){
    myslide[i].style.display = "none";
  }
  for(i = 0;i<dot.length;i++){
    dot[i].classList.remove('active');
  }
  if(n > myslide.length){
    counter = 1;
  }
  if(n < 1){
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].classList += 'active';
}


/*Hasil Karya*/
ScrollReveal().reveal(".card", {
  ...ScrollRevealOption,
  interval:500,
});

/*Jasa*/
ScrollReveal().reveal(".jasa__card", {
  ...ScrollRevealOption,
  interval:500,
});

/*Penawaran*/
ScrollReveal().reveal(".tawaran__image .gambarAdrian", {
  ...ScrollRevealOption,
  origin:"right",
});
ScrollReveal().reveal(".tawaran__image2 .gambarRakesh", {
  ...ScrollRevealOption,
  origin:"left",
});
ScrollReveal().reveal(".tawaran__content h4",{
  ...ScrollRevealOption,
  delay:500,
});
ScrollReveal().reveal(".tawaran__btn",{
  ...ScrollRevealOption,
  delay:800,
});