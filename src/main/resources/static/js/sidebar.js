function openNav() {
    document.getElementById("mySidenav").classList.remove("-translate-x-full");
    document.getElementById("overlay").classList.remove("hidden");
}

function closeNav() {
    document.getElementById("mySidenav").classList.add("-translate-x-full");
    document.getElementById("overlay").classList.add("hidden");
}