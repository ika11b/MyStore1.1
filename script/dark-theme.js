const icon = document.getElementById("icon");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    icon.src = "svg/sun-regular.svg"; 
} else {
    icon.src = "svg/moon-solid.svg"; 
}

icon.onclick = function() {
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
        icon.src = "svg/sun-regular.svg"; 
        localStorage.setItem("theme", "dark"); 
    } else {
        icon.src = "svg/moon-solid.svg"; 
        localStorage.setItem("theme", "light"); 
    }
};
