//return to top function
function returnTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//management of the button to return to the top
const arrowButton = document.getElementById("returnTopBtn");
arrowButton.addEventListener("click", (e) => {
    e.preventDefault();
    returnTopFunction();
});

//scroll listener
document.addEventListener("scroll", (event) => {
    const myHeader = document.querySelector("header");

    if (window.scrollY > 80) {
        myHeader.style.transition = "background-color 0.3s ease-out";
        myHeader.style.backgroundColor = "#474973";
    } else {
        myHeader.style.backgroundColor = "#161B33";
    }
});

//glitch effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const mesLink = document.querySelectorAll("header >a");
for (let i = 0; i < mesLink.length; i++) {
    mesLink[i].onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 5)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 25);
    };
}

//light on hello section
const helloSection = document.getElementById("hello");
const light = document.querySelector("div.light");
helloSection.onmouseover = (event) => {
    let mousePos = { x: 0, y: 0 };
    window.addEventListener("mousemove", (event) => {
        mousePos = { x: event.clientX, y: event.clientY };
        light.style.top = mousePos.y - 280 + "px";
        light.style.left = mousePos.x - 280 + "px";
        light.style.width = "500px";
        light.style.height = "500px";
    });
};
