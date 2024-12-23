
let circle = document.querySelector(".cir");

document.addEventListener("mousemove", function (event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    circle.style.setProperty("--xpos", `${mouseX - 25}px`);
    circle.style.setProperty("--ypos", `${mouseY - 25}px`);
});

