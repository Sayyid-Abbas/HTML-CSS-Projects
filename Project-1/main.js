// Displaying the menu of links on click

let links = document.querySelector(".links");

links.onclick = function () {
    links.classList.toggle("show");
}

document.addEventListener("click", function (e) {
    if(!links.contains(e.target)) {
        links.classList.remove("show");
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
