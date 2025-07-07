// For the other links to show on click

let other = document.getElementById("other");
let otherLinks = document.getElementById("otherLinks");
other.onclick = function () {
    otherLinks.classList.toggle("show");
}

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

