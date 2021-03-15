var Usuario = {
    DadosDeLogin: {
        cpf: "",
        email: "",
        confirmaemail: "",
        senha: "",
        confirmasenha: "",
    },

    DadosDeContato: {
        Nome:"",
        Sobrenome:"",
        DataDeNascimento:"",
        RG:"",
        Sexo:"",
        CEP:"",
        Endereco:"",
        Numero:"",
        Bairro:"",
        Complemento:"",
        Cidade:"",
        Estado:"",
        Telefone:"",
        Celular:"",
    }
}





function AtribuirUsuario(){

Usuario.DadosDeLogin.cpf = document.getElementById("cpf").value;
Usuario.DadosDeLogin.email = document.getElementById("email").value;
Usuario.DadosDeLogin.confirmaemail = document.getElementById("confirmaemail").value;
Usuario.DadosDeLogin.senha = document.getElementById("senha").value;
Usuario.DadosDeLogin.confirmasenha = document.getElementById("confirmasenha").value;

console.log(Usuario.DadosDeLogin.cpf);
console.log(Usuario.DadosDeLogin.email);
console.log(Usuario.DadosDeLogin.confirmaemail);
console.log(Usuario.DadosDeLogin.senha);
console.log(Usuario.DadosDeLogin.confirmasenha);

confirmacpf();
}


function confirmacpf()
{
    if(Usuario.DadosDeLogin.cpf.length === 11)
    {

        console.log('CPF possúi todos os numeros.');

        var valoratual = 0;
        var valorfinal = 0;
        var numero = 0;

      //  console.log(numero);
      //  console.log(valoratual);
      //  console.log(valorfinal);

        for(i=0 ; i <11 ; i++)
        {
            valoratual = (Usuario.DadosDeLogin.cpf.charAt(numero));

            // console.log(valoratual);

            valorfinal = (valorfinal) + parseInt(valoratual);

            // console.log(valorfinal);

            numero ++;
        }

        if(valorfinal%11 === 0)

        {
            console.log('CPF está válido.')
            confirma();
        }
        else
        {
            console.log('CPF Inválido.')
        }

      
    }
        else
        {
            console.log('A quantidade de numeros não está completa.');
        }
}

function confirma()
{
 if(Usuario.DadosDeLogin.email != Usuario.DadosDeLogin.confirmaemail && Usuario.DadosDeLogin.senha != Usuario.DadosDeLogin.confirmasenha)
    {
        console.log("Email e senha não batem com a confirmação !!");
        alert('Email e senha não batem com a confirmação !!');
        document.getElementById('confirmaemail').style.borderColor = "red";
        document.getElementById('confirmasenha').style.borderColor = "red";
    }

    else if(Usuario.DadosDeLogin.email != Usuario.DadosDeLogin.confirmaemail)
    {
        console.log("Os e-mail estão errados !!");
        alert('Os e-mail estão errados !!');
        document.getElementById('confirmaemail').style.borderColor = "red";       
    }

    else if(Usuario.DadosDeLogin.senha != Usuario.DadosDeLogin.confirmasenha)
    {
        console.log("As senhas estão erradas !!");
        alert('As senhas estão erradas !!');
        document.getElementById('confirmasenha').style.borderColor = "red";
    }
    else
    {
        console.log('td funcionando')
        
    }
    

}


//function atribuirUsuario (){

//   usuario.dadosDeLogin.cpf = document.getElementById("cpf").value;
//  console.log(usuario.dadosDeLogin.cpf);
//}