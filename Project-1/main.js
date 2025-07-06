let links = document.querySelector(".links");

links.onclick = function () {
    links.classList.toggle("show");
}

document.addEventListener("click", function (e) {
    if(!links.contains(e.target)) {
        links.classList.remove("show");
    }
});