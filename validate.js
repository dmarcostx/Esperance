function Confirm_Password() {

    var password = document.getElementById("Senha"),
        confirm_password = document.getElementById("RSenha");

    if (password.value != confirm_password.value) {
        confirm_password.focus();
        confirm_password.setCustomValidity("As senhas não coincidem");
        return false;
    } else {
        confirm_password.setCustomValidity('');
    }
}