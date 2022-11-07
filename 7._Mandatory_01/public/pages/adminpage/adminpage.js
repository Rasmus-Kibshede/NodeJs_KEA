
const buttonLogout = document.getElementById("button_logout");

buttonLogout.addEventListener('click', logout);


function logout() {
    window.location.href = "/";
    fetch("/logout");
}