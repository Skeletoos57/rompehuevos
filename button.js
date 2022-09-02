let exclusive_enter = document.getElementById('exclusive_enter');

exclusive_enter.addEventListener('click', function() {
    let password = prompt("Introduce la contraseña para acceder");
    if (password == "breakegg") {
        location.href = "pages/index.html";
    }
});