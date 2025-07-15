// Links menu

let bars = document.querySelector(".bars");
let links = document.querySelector("nav ul");
bars.onclick = function() {
    bars.classList.toggle("show");
}

document.addEventListener("click", (e) => {
    if(!bars.contains(e.target) && !links.contains(e.target)) {
        bars.classList.remove("show");
    }
});

// A button to scroll up

let myButton = document.querySelector(".btn");
window.onscroll = function() {
    if(window.scrollY < 1000) {
        myButton.classList.remove("show");
    } else {
        myButton.classList.add("show");
    }
}
myButton.onclick = () => window.scrollTo({top: 0, behavior: "smooth"});

// Portfolio Section

let selectors = document.querySelectorAll(".portfolio ul li");
document.addEventListener("click", (e) => {
    selectors.forEach((select) => {
        if(select.contains(e.target)) {
            selectors.forEach(s => s.classList.remove("active"));
            select.classList.add("active");
            showData(select.dataset.kind);
        }
    });
});

function showData(className) {
    document.querySelectorAll(".portfolio .image-container > div").forEach((li) => {
        li.style.display = "none";
    });
    document.querySelectorAll(className).forEach(li => li.style.display = "block");
};