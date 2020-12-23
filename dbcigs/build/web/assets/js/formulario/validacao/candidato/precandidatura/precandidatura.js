//Ao carregar ou recarregar a página
$(document).ready(function(){
    limpaCampoInput("input[name=txtIdtCandidato]");
    limpaCampoInput("input[name=txtQtdeTentativas]");
    limpaCampoSelect("select[name=txtCurso]");
    limpaCampoSelect("select[name=txtCategoria]");
    limpaCampoSelect("select[name=txtTurma]");
    
    //Campo Input Identidade Militar do Candidato
    validIdtMilCand("input[name=txtIdtCandidato]");
    validIdtMilCandTReal("input[name=txtIdtCandidato]");
    
    //Campo Select Curso
    validSelect("select[name=txtCurso]");
    validSelectTReal("select[name=txtCurso]");
    
    //Campo Select Categoria
    validSelect("select[name=txtCategoria]");
    validSelectTReal("select[name=txtCategoria]");
    
    //Campo Select Turma
    validSelect("select[name=txtTurma]");
    validSelectTReal("select[name=txtTurma]");
});

$("select[name=txtCurso]").change(function(){
   limpaCampoSelect("select[name=txtCategoria]");
   limpaCampoSelect("select[name=txtTurma]");
});

$("select[name=txtCategoria]").change(function(){
   limpaCampoSelect("select[name=txtTurma]");
});

//Obrigatoriedade
$("button[name=btnTentativa]").click(function(){
    var idtMilCandidato = $("input[name=txtIdtCandidato]").val().replace("-", "");      
        
    if(idtMilCandidato == ''){
        $("input[name=txtIdtCandidato]").removeClass("is-valid");
        $("input[name=txtIdtCandidato]").addClass("is-invalid");
        $("input[name=txtIdtCandidato]").focus();
        $(".invalid-idtMilCand").html("Campo Obrigatório!");
        return false;
    }
    else if(idtMilCandidato == '0000000000' || idtMilCandidato == '1111111111' || idtMilCandidato == '2222222222' || idtMilCandidato == '3333333333' ||                 
            idtMilCandidato == '4444444444' || idtMilCandidato == '5555555555' || idtMilCandidato == '6666666666' || idtMilCandidato == '7777777777' ||                 
            idtMilCandidato == '8888888888' || idtMilCandidato == '9999999999'){
        $("input[name=txtIdtCandidato]").removeClass("is-valid");
        $("input[name=txtIdtCandidato]").addClass("is-invalid");
        
        $(".invalid-idtMilCand").html("Identidade Militar Inválida!");
        $("input[name=txtIdtCandidato]").focus();
        return false;
    }
    else if($("select[name=txtCurso]").val() == '0'){
        $("select[name=txtCurso]").removeClass("is-valid");
        $("select[name=txtCurso]").addClass("is-invalid");
        $("select[name=txtCurso]").focus();
        return false;
    }
    else if($("select[name=txtCategoria]").val() == '0'){
        $("select[name=txtCategoria]").removeClass("is-valid");
        $("select[name=txtCategoria]").addClass("is-invalid");
        $("select[name=txtCategoria]").focus();
        return false;
    }
    else if($("select[name=txtTurma]").val() == '0'){
        $("select[name=txtTurma]").removeClass("is-valid");
        $("select[name=txtTurma]").addClass("is-invalid");
        $("select[name=txtTurma]").focus();
        return false;
    }
    else{        
        var idtCandidato = $("#txtIdtCandidato").val().replace("-","");
        var idCurso = $("#txtCurso").val();
        getTentativasByCandidatoAndCurso(idtCandidato, idCurso);  
    }
});