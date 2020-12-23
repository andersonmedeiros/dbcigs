//CB Anderson de Paula Andrade Medeiros
//Técnico em Informática
//01.08.2020

//Ao carregar ou recarregar a página
$(document).ready(function(){   
    //Campo Input Senha
    validSenha("input[name=txtSenha]");
    validSenhaTReal("input[name=txtSenha]");
});

//Obrigatoriedade
$("button[name=btnSalvarAtualizacaoSenha]").click(function(){    
    if($("input[name=txtSenha]").val() == ''){
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

