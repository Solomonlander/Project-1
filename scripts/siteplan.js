window.onload = function () {

    const currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML =
        `&copy; ${currentYear} 🌼 Discover Akwa Ibom State 🌼 Designed by Solomon Lander Emmanson`;


    function updateDateTime() {
        const now = new Date();
        const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
        const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        document.getElementById("lastModified").textContent = `Current Time: ${formattedDate} ${formattedTime}`;
    }


    updateDateTime();


    setInterval(updateDateTime, 1000);


    const menuButton = document.getElementById("menu");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        menuButton.textContent = menuButton.textContent === "✖" ? "☰" : "✖";
    });
};
