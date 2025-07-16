// Links menu

let bars = document.querySelector(".bars");
let links = document.querySelector("nav ul");

// Next And Prev From Landding To Make Them Disapeare when Clicking The Bars
let nextIcon = document.querySelector(".landing .overly .right");
let prevIcon = document.querySelector(".landing .overly .left");


// Toggle Show Class On Clicking And Removing & Adding Next And Prev
bars.onclick = function() {
    bars.classList.toggle("show");
    if(bars.classList.contains("show")) {
        nextIcon.style.display = "none";
        prevIcon.style.display = "none";
    } else {
        nextIcon.style.display = "block";
        prevIcon.style.display = "block";
    }

}

// Remove The Show Class On Scroll
document.onscroll = () => {
    bars.classList.remove("show");
    nextIcon.style.display = "block";
    prevIcon.style.display = "block";
};

// Remove The Show Class When Clicking On Anything But The Links
document.addEventListener("click", (e) => {
    if(!bars.contains(e.target) && !links.contains(e.target)) {
        bars.classList.remove("show");
    }
});



// A button to scroll up

// The Section That The Button Apeares In
let designSection = document.querySelector(".design");
let myButton = document.querySelector(".btn");
window.onscroll = function() {
    if(window.scrollY < designSection.offsetTop - 500) {
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


// Adding Sliding For Landing

let section = document.querySelector(".landing");
let slides = Array.from(document.querySelectorAll(".landing .content"));
let next = document.querySelector(".right");
let prev = document.querySelector(".left");

let slidesCount = slides.length;
let currentSlide = 1;   


// Make Bullets On The Slides Count
let bullets = document.createElement("div");
bullets.className = "bullets";

for(let i = 1; i <= slidesCount; i++) {
    let bullet = document.createElement("div");

    bullet.className = "bullet";
    bullet.setAttribute("data-index", i);

    bullets.appendChild(bullet);
}
section.appendChild(bullets);

let bulletsItems = document.querySelectorAll(".bullet");

// Bullets On Click
document.addEventListener("click", (e) => {
    bulletsItems.forEach((bullet) => {
        if(bullet.contains(e.target)) {
            currentSlide = e.target.dataset.index;
            setAll();
        }
    });
});

// Next And Prev On Click
next.onclick = () => {
    if(currentSlide != slidesCount) {
        currentSlide++;
        setAll();
    }
};
prev.onclick = () => {
    if(currentSlide != 1) {
        currentSlide--;
        setAll();
    }
}

// Set All Active And Remove
setAll();


// Set All Function
function setAll() {
    // Setting And Removing Acitve For Bullets
    bulletsItems.forEach(bullet => bullet.classList.remove("active"));
    bulletsItems.forEach((bullet) => {
        if(bullet.dataset.index == currentSlide) {
            bullet.classList.add("active");
        }
    });

    // Setting And Remove Disabled For Next And Prev
    if(currentSlide == 1) {
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
    }

    if(currentSlide == slidesCount) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
    }

    // Setting The Slides
    slides.forEach(slide => slide.classList.remove("active"));
    slides[currentSlide - 1].classList.add("active");
}


// Count Up On Scroll For Statistics Section
let statsSection = document.querySelector(".statistics");
let numbers = document.querySelectorAll(".statistics .container .box h4");
let started = false; 

window.addEventListener("scroll", () => {
    if(window.scrollY >= statsSection.offsetTop - 900) {
        if(!started) {
            numbers.forEach(number => setNumber(number));
            started = true;
        }
    }
});

function setNumber(number) {
    let goal = +number.dataset.number;
    let duration = 1000;
    let increment = Math.ceil(goal / (duration / 10)); // every 10ms
    let current = 0;

    let count = setInterval(() => {
        current += increment;
        if (current >= goal) {
            number.textContent = goal;
            clearInterval(count);
        } else {
            number.textContent = current;
        }
    }, 10);
}


// Slides For Testimonials

// test => Testimonials
let tests = Array.from(document.querySelectorAll(".testimonials .info-box"));
let sectionTest = document.querySelector(".testimonials");


let testCount = tests.length;
let currentTest = 1;

let dotsContianer = document.createElement("ul");
dotsContianer.className = "dots";

for(let i = 1; i <= testCount; i++) {
    let dot = document.createElement("li");
    dot.setAttribute("data-index", i);
    
    dotsContianer.appendChild(dot);
}

sectionTest.appendChild(dotsContianer);

let allDots = document.querySelectorAll(".testimonials > ul li");

window.addEventListener("click", (e) => {
    allDots.forEach((dot) => {
        if(dot.contains(e.target)) {
            currentSlide = e.target.dataset.index;
            setAllElements();
        }
    });
});
// Setting And Removing active For All Elements
setAllElements();


function setAllElements() {
    // Setting The Dots
    allDots.forEach(dot => dot.classList.remove("active"));
    dotsContianer.children[currentSlide - 1].classList.add("active");

    // Setting The Tests
    tests.forEach(test => test.classList.remove("active"));
    tests[currentSlide - 1].classList.add("active");
};


// Making The Progress Reach The End When We Reach It
let progs = document.querySelectorAll(".skills .prog span");
let start = false;
document.addEventListener("scroll", () => {
    if(window.scrollY >= sectionTest.offsetTop - 800) {
        if(!start) {
            progs.forEach((prog) => {
                prog.style.width = prog.dataset.progress;
                setProgress(prog);
            });
            start = true;
        }
    }
});


function setProgress(prog) {
    let goal = Number.parseInt(prog.dataset.progress);
    let duration = 1000;
    let increment = Math.ceil(goal / (duration / 10)); // every 10ms
    let current = 0;

    let count = setInterval(() => {
        current += increment;
        if (current >= goal) {
            prog.dataset.percent = goal;
            clearInterval(count);
        } else {
            prog.dataset.percent = current;
        }
    }, 10);
};