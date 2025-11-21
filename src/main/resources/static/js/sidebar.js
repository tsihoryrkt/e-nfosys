function openNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");

    sidenav.classList.add("active");
    overlay.classList.add("active");
}

function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");

    sidenav.classList.remove("active");
    overlay.classList.remove("active");
}