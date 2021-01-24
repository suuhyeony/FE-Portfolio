const img = document.getElementById("slide-img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const circleParent = document.querySelector(".circle");
const circles = document.querySelectorAll("li");

const checkbox = document.getElementById("checkbox");

let index = 1;

function paintImg() {
    img.src = `./img/img-${index}.jpg`;
    img.alt = `img-${index}`;
};

next.addEventListener("click", () => {
    if (index < 4) index++;
    else index = 1;
    // console.log(index);
    img.src = `./img/img-${index}.jpg`;
    img.alt = `img-${index}`;
    document.querySelector(".selected").classList.remove("selected");
    circleParent.children[index-1].classList.add("selected");
});

prev.addEventListener("click", () => {
    if (index === 1) index = 4;
    else index--;
    // console.log(index);
    img.src = `./img/img-${index}.jpg`;
    img.alt = `img-${index}`;
    document.querySelector(".selected").classList.remove("selected");
    circleParent.children[index-1].classList.add("selected");
});

circles.forEach((circle, i) => {
    circle.addEventListener("click", () => {
        document.querySelector(".selected").classList.remove("selected");
        circle.classList.add("selected");
        img.src = `./img/img-${i+1}.jpg`;
        img.alt = `img-${i+1}`;
    });
});

function autoSlide() {
    if (!checkbox.checked) {
        clearInterval(automatic);
        return;
    };
    automatic = setInterval(() => {
        if (index < 4) index++;
        else index = 1;
        img.src = `./img/img-${index}.jpg`;
        img.alt = `img-${index}`;
        document.querySelector(".selected").classList.remove("selected");
        circleParent.children[index-1].classList.add("selected");
    }, 1800);
}

checkbox.addEventListener("click", autoSlide);

function init() {
    paintImg();
};

init();