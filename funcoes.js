$(function(){

	var operacao = "A"; //"A"=Adição; "E"=Edição

	var indice_selecionado = -1;

	var tbCadastro = localStorage.getItem("tbCadastro");// Recupera os dados armazenados

	tbCadastro = JSON.parse(tbCadastro); // Converte string para objeto

	if(tbCadastro == null) // Caso não haja conteúdo, iniciamos um vetor vazio
		tbCadastro = [];

	function Adicionar(){
		var cad = GetCadastro("Nome", $("#txtNome").val());

		if(cad != null){
			alert("Nome já cadastrado.");
			return;
		}

		var Cadastro = JSON.stringify({
			Nome	 : $("#txtNome").val(),
			Cpf 	 : $("#txtCpf").val(),
			Email    : $("#txtEmail").val(),
			Telefone : $("#txtTelefone").val(),
			Endereco : $("#txtEndereco").val()			
		});

		tbCadastro.push(Cadastro);

		localStorage.setItem("tbCadastro", JSON.stringify(tbCadastro));

		return false;
	}


	function GetCadastro(propriedade, valor){
		var cad = null;
        for (var item in tbCadastro) {
            var i = JSON.parse(tbCadastro[item]);
            if (i[propriedade] == valor)
                cad = i;
        }
        return cad;
	}

	$("#frmCadastro").on("submit",function(){
			return Adicionar();	
	});
});