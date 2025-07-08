// For the other links to show on click

//Add remove the show class every time a click on the links is happening
let other = document.getElementById("other");
let otherLinks = document.getElementById("otherLinks");
other.onclick = function () {
    otherLinks.classList.toggle("show");
}

// To remove the show class when clicking outside the links
document.addEventListener("click", function (e) {
    if(!other.contains(e.target) && !otherLinks.contains(e.target)) {
        otherLinks.classList.remove("show");
    }
});

// A button to scroll up

let myButton = document.querySelector(".btn");

// Showing the button when hitting a certain number of pixels 
window.onscroll = function() {
    if(window.scrollY < 1000) {
        myButton.classList.remove("show");
    } else {
        myButton.classList.add("show");
    }
}

// Scrolling up on click
myButton.onclick = () => window.scrollTo({top: 0, behavior: "smooth"});