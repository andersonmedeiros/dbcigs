var functionValidSelectTReal = function(campo){
    $(campo).change(function(){
        if($(campo).val() != '0'){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }else{
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
    });
};

var functionValidSelectOCP = function(campo){
    if($(campo).val() != '0'){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

var functionValidInputTReal = function(campo){
    $(campo).change(function(){
        if($(campo).val() != ''){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }else{
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
    });
};

var functionValidInputOCP = function(campo){
    if($(campo).val() != ''){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

var functionValidDataNascTReal = function(campo){
    $(campo).change(function(){
        var dataNasc = $(campo).val();
        var dataNascSplit = dataNasc.split('-');        
        var diaNasc = dataNascSplit[2];
        var mesNasc = dataNascSplit[1];
        var anoNasc = dataNascSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();        
        
        if(dataNasc == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNasc").html("Campo Obrigatório!");
        }       
        else if((anoNasc == anoAtual) && (mesNasc == mesAtual) && (diaNasc > diaAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNasc == anoAtual) && (mesNasc > mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNasc > anoAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
        }     
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });    
};

//Acionamento form CNH
functionValidSelectTReal("#txtPossuiCNH");
$("#txtPossuiCNH").change(function() {
    if($("#txtPossuiCNH").val() === "s"){
        $("#divCNH").css("display", "block");        
    }
    else if($("#txtPossuiCNH").val() === "n" || $("#txtPossuiCNH").val() === "0"){
        $("#divCNH").css("display", "none");
        
        $("input[name=txtCNHNumAl]").val('');
        $("input[name=txtCNHNumAl]").removeClass("is-invalid");
        $("input[name=txtCNHNumAl]").removeClass("is-valid");

        $("select[name=txtCNHCatgAl]").val('0');
        $("select[name=txtCNHCatgAl]").removeClass("is-invalid");
        $("select[name=txtCNHCatgAl]").removeClass("is-valid");

        $("input[name=txtCNHDataValAl]").val('');            
        $("input[name=txtCNHDataValAl]").removeClass("is-invalid");
        $("input[name=txtCNHDataValAl]").removeClass("is-valid");
    }
});

//Acionamento form Cônjuge
$("#txtPossuiConjuge").change(function() {
    if($("#txtPossuiConjuge").val() === "s"){
        $("#divConjuge").css("display", "block");
    }
    else if($("#txtPossuiConjuge").val() === "n" || $("#txtPossuiConjuge").val() === "0"){
        $("#divConjuge").css("display", "none");

        $("input[name=txtNomeConjuge]").val('');
        $("input[name=txtNomeConjuge]").removeClass("is-valid");
        $("input[name=txtNomeConjuge]").removeClass("is-invalid");

        $("input[name=txtSobrenomeConjuge]").val('');
        $("input[name=txtSobrenomeConjuge]").removeClass("is-valid");
        $("input[name=txtSobrenomeConjuge]").removeClass("is-invalid");

        $("input[name=txtDataNascConjuge]").val('');
        $("input[name=txtDataNascConjuge]").removeClass("is-valid");
        $("input[name=txtDataNascConjuge]").removeClass("is-invalid");

        $("input[name=txtEmailConjuge]").val('');
        $("input[name=txtEmailConjuge]").removeClass("is-valid");
        $("input[name=txtEmailConjuge]").removeClass("is-invalid");

        $("input[name=txtFoneConjuge]").val('');
        $("input[name=txtFoneConjuge]").removeClass("is-valid");
        $("input[name=txtFoneConjuge]").removeClass("is-invalid");

        $("select[name=txtSexoConjuge]").val('0');
        $("select[name=txtSexoConjuge]").removeClass("is-valid");
        $("select[name=txtSexoConjuge]").removeClass("is-invalid");
        
        $("#divGravidez").css("display", "none");
        $("select[name=txtGravidez]").val('0');
        $("select[name=txtGravidez]").removeClass("is-valid");
        $("select[name=txtGravidez]").removeClass("is-invalid");
        
    }
});

//Acionamento form Gravidez
$("#txtSexoConjuge").change(function() {
    if($("#txtSexoConjuge").val() === "F"){
        $("#divGravidez").css("display", "block");
    }
    else if($("#txtSexoConjuge").val() === "M" || $("#txtSexoConjuge").val() === "0"){
        $("#divGravidez").css("display", "none");

        $("select[name=txtGravidez]").val('0');
        $("select[name=txtGravidez]").removeClass("is-valid");
        $("select[name=txtGravidez]").removeClass("is-invalid");
        
    }
});

//Acionamento form Dependentes


$("#txtPossuiDependente").change(function() {    
    if($("#txtPossuiDependente").val() === "s"){
        $("#divDependentes").css("display", "block");        
    }
    else if($("#txtPossuiDependente").val() === "n" || $("#txtPossuiDependente").val() === "0"){
        $("#divDependentes").css("display", "none");
        $("#fieldsetDependentes .form-row").remove();
        qtdeDependentes = 1;
    }
});
    
function alimentaSelectGrauParentesco(id){
    FacadeAjax.getGrausParentescoDWR({
        callback: function(parentescos){
            dwr.util.removeAllOptions("txtGrauParentescoDep"+id);
            dwr.util.addOptions("txtGrauParentescoDep"+id, [{id: "0", nome: "Selecione um grau de parentesco..."}], "id", "nome");
            dwr.util.addOptions("txtGrauParentescoDep"+id, parentescos, "id", "nome");
        } 
    });
}

$("#btnAddDependente").click(function(){ 
    var qtdeDependentes = document.querySelectorAll('#fieldsetDependentes .form-row').length + 1;
    alert(qtdeDependentes);
    //$("#linha" + qtdeDependentes).remove();
    $("#fieldsetDependentes").append("<div id=linha"+ qtdeDependentes +" class=\"form-row\">"+
                                     "  <div class=\"form-group col-md-4\">"+
                                     "      <label for=txtNomeDep"+ qtdeDependentes +">Nome: <span class=\"campo-obrigatorio\">*</span></label>"+
                                     "      <input type=\"text\" class=\"form-control\" id=txtNomeDep"+ qtdeDependentes +" name=\"txtNomeDep\" placeholder=\"Ex.: Fulano\">"+
                                     "      <div class=\"valid-feedback\">Selva!</div>"+
                                     "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                     "  </div>"+
                                     "  <div class=\"form-group col-md-8\">"+
                                     "      <label for=txtSobrenomeDep"+ qtdeDependentes +">Sobrenome: <span class=\"campo-obrigatorio\">*</span></label>"+
                                     "      <input type=\"text\" class=\"form-control\" id=txtSobrenomeDep"+ qtdeDependentes +" name=\"txtSobrenomeDep\" placeholder=\"Ex.: De Tal\">"+
                                     "      <div class=\"valid-feedback\">Selva!</div>"+
                                     "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                     "  </div>"+
                                     
                                     
                                       
                                     "  <div class=\"form-group col-md-6\">"+
                                     "      <label for=txtDataNascDep"+ qtdeDependentes +">Data de Nascimento: <span class=\"campo-obrigatorio\">*</span></label>"+
                                     "      <input type=\"date\" class=\"form-control\" id=txtDataNascDep"+ qtdeDependentes +" name=\"txtDataNascDep\">"+
                                     "      <div class=\"valid-feedback\">Selva!</div>"+
                                     "      <div class=\"invalid-feedback invalid-dataNasc\">Campo Obrigatório!</div>"+
                                     "  </div>"+
                                     "  <div class=\"form-group col-md-6\">"+
                                     "      <label for=txtGrauParentescoDep"+ qtdeDependentes +">Grau de Parentesco: <span class=\"campo-obrigatorio\">*</span></label>"+
                                     "      <select class=\"form-control\" id=txtGrauParentescoDep"+ qtdeDependentes +" name=\"txtGrauParentescoDep\"></select>"+
                                     "      <div class=\"valid-feedback\">Selva!</div>"+
                                     "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                     "  </div>"+        
                                     "</div>"
            );
    
    
    alimentaSelectGrauParentesco(qtdeDependentes);
    
    functionValidInputTReal("#txtNomeDep"+qtdeDependentes);
    functionValidInputTReal("#txtSobrenomeDep"+qtdeDependentes);
    functionValidDataNascTReal("#txtDataNascDep"+qtdeDependentes);
    functionValidSelectTReal("#txtGrauParentescoDep"+qtdeDependentes);
    
    
    qtdeDependentes++;
});
