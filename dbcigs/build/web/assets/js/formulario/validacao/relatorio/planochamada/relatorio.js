//CB Anderson de Paula Andrade Medeiros
//Técnico em Informática
//26.08.2020

//Ao carregar ou recarregar a página
$(document).ready(function(){   
    limpaCampoSelect("select[name=txtTipoRela]");
    limpaCampoSelect("select[name=txtByPGradRela]");
    limpaCampoSelect("select[name=txtPGradRela]");
    limpaCampoInput("input[name=txtNomeGuerraRela]");
    limpaCampoSelect("select[name=txtDivSecRela]");
    limpaCampoSelect("select[name=txtCiaRela]");
    
    //Campo Select Relatório
    validSelect("select[name=txtTipoRela]");
    validSelectTReal("select[name=txtTipoRela]");
    
    //Campo Select Posto/Graduação
    validSelect("select[name=txtByPGradRela]");
    validSelectTReal("select[name=txtByPGradRela]");
    
    //Campo Select Posto/Graduação
    validSelect("select[name=txtPGradRela]");
    validSelectTReal("select[name=txtPGradRela]");
    
    //Campo Input Nome de Guerra
    validInput("input[name=txtNomeGuerraRela]");
    validInputTReal("input[name=txtNomeGuerraRela]");
    
    //Campo Select Relatório
    validSelect("select[name=txtTipoRela]");
    validSelectTReal("select[name=txtTipoRela]");
    
    //Campo Select Divisão ou Seção
    validSelect("select[name=txtDivSecRela]");
    validSelectTReal("select[name=txtDivSecRela]");
    
    //Campo Select Companhia
    validSelect("select[name=txtCiaRela]");
    validSelectTReal("select[name=txtCiaRela]");
});

//Obrigatoriedade
$("button[name=btnGerarRelatorio]").click(function(){     
    if($("select[name=txtTipoRela]").val() == '0'){
        $("select[name=txtTipoRela]").removeClass("is-valid");
        $("select[name=txtTipoRela]").addClass("is-invalid");
        $("select[name=txtTipoRela]").focus();
        return false;
    }   
    else if($("select[name=txtTipoRela]").val() == '1'){
        if($("select[name=txtPGradRela]").val() == '0'){
            $("select[name=txtPGradRela]").removeClass("is-valid");
            $("select[name=txtPGradRela]").addClass("is-invalid");
            $("select[name=txtPGradRela]").focus();
            return false;
        }
        else if($("input[name=txtNomeGuerraRela]").val() == '0'){
            $("input[name=txtNomeGuerraRela]").removeClass("is-valid");
            $("input[name=txtNomeGuerraRela]").addClass("is-invalid");
            $("input[name=txtNomeGuerraRela]").focus();
            return false;
        }
        else{
            return false;
        }
    }
    else if($("select[name=txtTipoRela]").val() == '2'){
        if($("select[name=txtByPGradRela]").val() == '0'){
            $("select[name=txtByPGradRela]").removeClass("is-valid");
            $("select[name=txtByPGradRela]").addClass("is-invalid");
            $("select[name=txtByPGradRela]").focus();
            return false;
        }
        else{
            return true;
        }
    }
    else if($("select[name=txtTipoRela]").val() == '3'){
        if($("select[name=txtDivSecRela]").val() == '0'){
            $("select[name=txtDivSecRela]").removeClass("is-valid");
            $("select[name=txtDivSecRela]").addClass("is-invalid");
            $("select[name=txtDivSecRela]").focus();
            return false;
        }
        else{
            return true;
        }
    }
    else if($("select[name=txtTipoRela]").val() == '4'){
        if($("select[name=txtCiaRela]").val() == '0'){
            $("select[name=txtCiaRela]").removeClass("is-valid");
            $("select[name=txtCiaRela]").addClass("is-invalid");
            $("select[name=txtCiaRela]").focus();
            return false;
        }
        else{
            return true;
        }
    }
    else if($("select[name=txtTipoRela]").val() == '5'){
        return true;
    }
});
