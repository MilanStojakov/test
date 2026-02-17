const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".navigacija-lista"); // PROMENJENO: ciljamo direktno listu
const navLinks = document.querySelectorAll(".navigacija-lista a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
});

/* zatvori meni kad se klikne na neki od linkova */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
    });
});



const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
