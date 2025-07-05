let other = document.getElementById("other");
let otherLinks = document.getElementById("otherLinks");
other.onclick = function () {
    otherLinks.classList.toggle("show");
}
document.addEventListener("click", function (e) {
    if(!other.contains(e.target) && !otherLinks.contains(e.target)) {
        otherLinks.classList.remove("show");
    }
});