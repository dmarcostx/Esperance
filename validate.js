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

function Confirm_Email() {
    if (Email.value.length < 6 ||
        Email.value.indexOf("@") <= 0 ||
        Email.value.indexOf(".") <= 0) {
        setCustomValidity("Informe um email valido !");
        Email.focus();
        return false;
    }
}

function validar() {

    Confirm_Password();

    Confirm_Email();

}