function limpaInput(campo){
    $(campo).val('');
    $(campo).removeClass("is-valid");
    $(campo).removeClass("is-invalid");
}

function limpaSelect(campo){
    $(campo).val('0');
    $(campo).removeClass("is-valid");
    $(campo).removeClass("is-invalid");
}

function limpaAlimentacaoSelect(campo, primeiroSelect){
    dwr.util.removeAllOptions(campo);
    dwr.util.addOptions(campo, [{id: "0", nome: primeiroSelect}], "id", "nome");
}


//Agrupando e preparando os dados para os select


//--> Divisão ou Seção
function alimentaSelectDivisaoSecao(divisoessecoes){
    dwr.util.removeAllOptions("txtDivSecRela");
    dwr.util.addOptions("txtDivSecRela", [{id: "0", nome: "Selecione uma divisão ou seção..."}], "id", "nome");
    dwr.util.addOptions("txtDivSecRela", divisoessecoes, "id", "nome");
}
FacadeAjax.getDivisoesSecoesDWR(alimentaSelectDivisaoSecao);

//--> Posto/Graduação
function alimentaSelectPostoGraduacao(pgs){
    dwr.util.removeAllOptions("txtPGradRela");
    dwr.util.addOptions("txtPGradRela", [{id: "0", abreviatura: "Selecione um posto ou graduação..."}], "id", "abreviatura");
    dwr.util.addOptions("txtPGradRela", pgs, "id", "abreviatura");
}
FacadeAjax.getPostosGraduacoesDWR(alimentaSelectPostoGraduacao);

//--> Posto/Graduação
function alimentaSelectPostoGraduacao(pgs){
    dwr.util.removeAllOptions("txtByPGradRela");
    dwr.util.addOptions("txtByPGradRela", [{id: "0", abreviatura: "Selecione um posto ou graduação..."}], "id", "abreviatura");
    dwr.util.addOptions("txtByPGradRela", pgs, "id", "abreviatura");
}
FacadeAjax.getPostosGraduacoesDWR(alimentaSelectPostoGraduacao);


//mudando/limpando formulario
$("select[name=txtTipoRela]").change(function(){
    if($("select[name=txtTipoRela]").val() == '1'){
        $("#divCiaRela").css("display", "none");
        limpaSelect("select[name=txtCiaRela]");
        $("#divDivSecRela").css("display", "none");
        limpaSelect("select[name=txtDivSecRela]");
        $("#divByPGradRela").css("display", "none");
        limpaSelect("select[name=txtByPGradRela]");
        $("#divPGradRela").css("display", "block");
        $("#divNomeGuerraRela").css("display", "block");
    }
    else if($("select[name=txtTipoRela]").val() == '2'){
        $("#divCiaRela").css("display", "none");
        limpaSelect("select[name=txtCiaRela]");
        $("#divPGradRela").css("display", "none");
        limpaSelect("select[name=txtPGradRela]");
        $("#divNomeGuerraRela").css("display", "none");
        limpaInput("input[name=txtNomeGuerraRela]");
        $("#divDivSecRela").css("display", "none");
        limpaSelect("select[name=txtDivSecRela]");
        $("#divByPGradRela").css("display", "block");
        
    }
    else if($("select[name=txtTipoRela]").val() == '3'){
        $("#divCiaRela").css("display", "none");
        limpaSelect("select[name=txtCiaRela]");
        $("#divPGradRela").css("display", "none");
        limpaSelect("select[name=txtPGradRela]");
        $("#divNomeGuerraRela").css("display", "none");
        limpaInput("input[name=txtNomeGuerraRela]");
        $("#divByPGradRela").css("display", "none");
        limpaSelect("select[name=txtByPGradRela]");
        $("#divDivSecRela").css("display", "block");
    }
    else if($("select[name=txtTipoRela]").val() == '4'){
        $("#divDivSecRela").css("display", "none");
        limpaSelect("select[name=txtDivSecRela]");
        $("#divPGradRela").css("display", "none");
        limpaSelect("select[name=txtPGradRela]");
        $("#divNomeGuerraRela").css("display", "none");
        limpaInput("input[name=txtNomeGuerraRela]");
        $("#divByPGradRela").css("display", "none");
        limpaSelect("select[name=txtByPGradRela]");
        $("#divCiaRela").css("display", "block");
    }
    else if($("select[name=txtTipoRela]").val() == '5' || $("select[name=txtTipoRela]").val() == '0'){
        $("#divDivSecRela").css("display", "none");
        limpaSelect("select[name=txtDivSecRela]");
        $("#divPGradRela").css("display", "none");
        limpaSelect("select[name=txtPGradRela]");
        $("#divNomeGuerraRela").css("display", "none");
        limpaInput("input[name=txtNomeGuerraRela]");
        $("#divCiaRela").css("display", "none");
        limpaSelect("select[name=txtCiaRela]");
        $("#divByPGradRela").css("display", "none");
        limpaSelect("select[name=txtByPGradRela]");
    }
    
});


