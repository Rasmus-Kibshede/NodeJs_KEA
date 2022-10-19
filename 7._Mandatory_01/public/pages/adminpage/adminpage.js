
const buttonLogout = document.getElementById("button_logout");

buttonLogout.addEventListener('click', logout);


function logout() {
    fetch("/logout");
}