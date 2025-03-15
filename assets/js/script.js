function loadComponent(elementId, filePath, callback) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar", "components/navbar.html", function () {


        const menuBtn = document.getElementById("menu-btn");
        const navLinks = document.getElementById("nav-links");
        const menuBtnIcon = menuBtn.querySelector("i");

            menuBtn.addEventListener("click", () => {
                navLinks.classList.toggle("open");

                const isOpen = navLinks.classList.contains("open");
                menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
            });

            navLinks.addEventListener(("click"), (e) => {
                navLinks.classList.remove("open");
                menuBtnIcon.setAttribute("class", "ri-menu-line");

            });
    });
});
