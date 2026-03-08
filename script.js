
// mobile menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {
    navLinks.classList.toggle("active");
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
};


// scroll function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


// counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const speed = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + speed);
            setTimeout(update, 10);
        } else {
            counter.innerText = target;
        }

    }

    update();

});