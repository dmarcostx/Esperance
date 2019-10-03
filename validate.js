cadastrar.onclick = function() {
	if(Nome.value.length < 3){
		alert("Informe o seu nome completo");
		txtNome.focus();
		return false;
	}
	if(Senha.value.length < 4){
		alert("Informe uma senha de pelo menos quatro dígitos");
		txtNome.focus();
		return false;
	}
	if(Senha.value === RSenha.value){
		alert("As senhas não coincidem");
		txtNome.focus();
		return false;
	}
	-- incompleto apartir daqui
	if(CPF.value.length < 4){
		alert("Informe uma senha de pelo menos quatro dígitos");
		txtNome.focus();
		return false;
	}
	if(txtEmail.value.length <6  ||
		txtEmail.value.indexOf("@") <= 0 ||
		txtEmail.value.indexOf(".") <=0)
	{
		alert("Informe um email valido !");
		txtEmail.focus();		
		return false;	
	}
	if(txtTelefone.value.length <8){
		alert("Informe um telefone valido !");
		txtTelefone.focus();
		return false;
	}
	alert("ok");
}
