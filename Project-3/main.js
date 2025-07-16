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


// Latest Events Section
// Making a countdown

let finishDate = new Date("Dec 31, 2029 23:59:59");

setInterval(() => {
    let seconds = document.querySelector(".seconds");
    let minutes = document.querySelector(".minutes");
    let hours = document.querySelector(".hours");
    let days = document.querySelector(".days");

    let remaindTime = finishDate.getTime() - Date.now();

    let day = Math.floor(remaindTime / (1000 * 60 * 60 * 24));

    let hour = Math.floor(remaindTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    let minute = Math.floor(remaindTime % (1000 * 60 * 60) / (1000 * 60));

    let second = Math.floor(remaindTime % (1000 * 60) / (1000));

    seconds.textContent = second > 9? second : `0${second}`;
    hours.textContent = hour > 9? hour : `0${hour}`;
    minutes.textContent = minute > 9? minute : `0${minute}`;
    days.textContent = day > 9? day : `0${day}`;
    if (remaindTime <= 0) {
        clearInterval(timer); 
        days.textContent = hours.textContent = minutes.textContent = seconds.textContent = "00";
        return;
    }
}, 1000);

// Our Skills Section
// Making the progress line git filled when we reach it

let section = document.querySelector(".our-skills");
let prog = document.querySelectorAll(".our-skills .progress .prog .line span");
document.onscroll = function() {
    if(window.scrollY >= section.offsetTop - 500) {
        prog.forEach(progress => progress.style.width = progress.dataset.width);
    }
};


// Stats Section
// Making the numbers go up when we reach them

let statsSection = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .container .box .card .number");
let started = false;

window.onscroll = function() {
    if(window.scrollY >= statsSection.offsetTop - 700) {
        if(!started) {
            numbers.forEach(number => setNumber(number));
        }
        started = true;
    }
};
function setNumber(number) {
    let goal = number.dataset.number;
    let count = setInterval(() => {
        number.textContent++;
        if(number.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}