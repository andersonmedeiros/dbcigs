//CB Anderson de Paula Andrade Medeiros
//Técnico em Informática
//01.08.2020

//Ao carregar ou recarregar a página
$(document).ready(function(){   
    //Campo Select Posto/Graduação
    validSelect("select[name=txtPGrad]");
    validSelectTReal("select[name=txtPGrad]");
    
    //Campo Input Identidade
    validIdentidade("input[name=txtIdentidade]");
    validIdentidadeTReal("input[name=txtIdentidade]");      
    
    //Campo Input Nome
    validInput("input[name=txtNome]");
    validInputTReal("input[name=txtNome]");
    
    //Campo Input Sobrenome
    validInput("input[name=txtSobrenome]");
    validInputTReal("input[name=txtSobrenome]");
    
    //Campo Input Nome Guerra
    validInput("input[name=txtNomeGuerra]");
    validInputTReal("input[name=txtNomeGuerra]");
    
    //Campo Input NGS
    validInput("input[name=txtNGS]");
    validInputTReal("input[name=txtNGS]");
    somenteNumero("input[name=txtNGS]");
    
    //Campo Input Senha
    validSenha("input[name=txtSenha]");
    validSenhaTReal("input[name=txtSenha]");
});

//Obrigatoriedade
$("button[name=btnSalvarCadastro]").click(function(){
    var identidade = $("input[name=txtIdentidade]").val().replace("-", "");      
        
    if($("select[name=txtPGrad]").val() == '0'){
        $("select[name=txtPGrad]").removeClass("is-valid");
        $("select[name=txtPGrad]").addClass("is-invalid");
        $("select[name=txtPGrad]").focus();
        return false;
    }    
    else if(identidade == ''){
        $("input[name=txtIdentidade]").removeClass("is-valid");
        $("input[name=txtIdentidade]").addClass("is-invalid");
        $("input[name=txtIdentidade]").focus();
        $(".invalid-identidade").html("Campo Obrigatório!");
        return false;
    }
    else if(identidade == '0000000000' || identidade == '1111111111' || identidade == '2222222222' || identidade == '3333333333' ||                 
            identidade == '4444444444' || identidade == '5555555555' || identidade == '6666666666' || identidade == '7777777777' ||                 
            identidade == '8888888888' || identidade == '9999999999'){
        $("input[name=txtIdentidade]").removeClass("is-valid");
        $("input[name=txtIdentidade]").addClass("is-invalid");
        
        $(".invalid-identidade").html("Identidade Militar Inválida!");
        $("input[name=txtIdentidade]").focus();
        return false;
    }    
    else if($("input[name=txtNome]").val() == ''){
        $("input[name=txtNome]").removeClass("is-valid");
        $("input[name=txtNome]").addClass("is-invalid");
        $("input[name=txtNome]").focus();
        return false;
    }
    else if($("input[name=txtSobrenome]").val() == ''){
        $("input[name=txtSobrenome]").removeClass("is-valid");
        $("input[name=txtSobrenome]").addClass("is-invalid");
        $("input[name=txtSobrenome]").focus();
        return false;
    }
    else if($("input[name=txtNomeGuerra]").val() == ''){
        $("input[name=txtNomeGuerra]").removeClass("is-valid");
        $("input[name=txtNomeGuerra]").addClass("is-invalid");
        $("input[name=txtNomeGuerra]").focus();
        return false;
    }
    else if($("input[name=txtNGS]").val() == ''){
        $("input[name=txtNGS]").removeClass("is-valid");
        $("input[name=txtNGS]").addClass("is-invalid");
        $("input[name=txtNGS]").focus();
        return false;
    }
    else if($("input[name=txtSenha]").val() == ''){
        $("input[name=txtSenha]").removeClass("is-valid");
        $("input[name=txtSenha]").addClass("is-invalid");
        $("input[name=txtSenha]").focus();
        return false;
    }
    else if($("input[name=txtSenha]").val() != '' && $("input[name=txtSenha]").val().length < 6){
        $("input[name=txtSenha]").removeClass("is-valid");
        $("input[name=txtSenha]").addClass("is-invalid");
        $("input[name=txtSenha]").focus();
        return false;
    }
    else{        
        return true;
    }
});

