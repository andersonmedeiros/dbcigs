/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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

var functionValidDInOMSvAmz = function(campo){
    var dataInicio = $(campo).val();
    var dataInicioSplit = dataInicio.split('-');        
    var diaInicio = dataInicioSplit[2];
    var mesInicio = dataInicioSplit[1];
    var anoInicio = dataInicioSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();        

    if(dataInicio == ''){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataInicio").html("Campo Obrigatório!");
    }       
    else if((anoInicio == anoAtual) && (mesInicio == mesAtual) && (diaInicio > diaAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
    }       
    else if((anoInicio == anoAtual) && (mesInicio > mesAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
    }       
    else if((anoInicio > anoAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
    }         
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};
var functionValidDInOMSvAmzTReal = function(campo){ 
    $(campo).change(function(){
        var dataInicio = $(campo).val();
        var dataInicioSplit = dataInicio.split('-');        
        var diaInicio = dataInicioSplit[2];
        var mesInicio = dataInicioSplit[1];
        var anoInicio = dataInicioSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();        
        
        if(dataInicio == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataInicio").html("Campo Obrigatório!");
        }       
        else if((anoInicio == anoAtual) && (mesInicio == mesAtual) && (diaInicio > diaAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
        }       
        else if((anoInicio == anoAtual) && (mesInicio > mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
        }       
        else if((anoInicio > anoAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
        }         
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });    
};
var functionValidDFimOMSvAmz = function(campoDataInicio, campoDataFim){
    var dataInicio = $(campoDataInicio).val();
    var dataInicioSplit = dataInicio.split('-');        
    var diaInicio = dataInicioSplit[2];
    var mesInicio = dataInicioSplit[1];
    var anoInicio = dataInicioSplit[0];

    var dataFim = $(campoDataFim).val();
    var dataFimSplit = dataFim.split('-');        
    var diaFim = dataFimSplit[2];
    var mesFim = dataFimSplit[1];
    var anoFim = dataFimSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();        

    if(dataFim == ''){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Campo Obrigatório!");
    }       
    else if((anoFim == anoAtual) && (mesFim == mesAtual) && (diaFim > diaAtual)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
    }       
    else if((anoFim == anoAtual) && (mesFim > mesAtual)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
    }       
    else if((anoFim > anoAtual)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
    }         
    else if((anoFim == anoInicio) && (mesFim == mesInicio) && (diaFim < diaInicio)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
    }       
    else if((anoFim == anoInicio) && (mesFim < mesInicio)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
    }       
    else if((anoFim < anoInicio)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
    }         
    else{
        $(campoDataFim).removeClass("is-invalid");
        $(campoDataFim).addClass("is-valid");
    }
};
var functionValidDFimOMSvAmzTReal = function(campoDataInicio, campoDataFim){ 
    $(campoDataFim).change(function(){
        var dataInicio = $(campoDataInicio).val();
        var dataInicioSplit = dataInicio.split('-');        
        var diaInicio = dataInicioSplit[2];
        var mesInicio = dataInicioSplit[1];
        var anoInicio = dataInicioSplit[0];
        
        var dataFim = $(campoDataFim).val();
        var dataFimSplit = dataFim.split('-');        
        var diaFim = dataFimSplit[2];
        var mesFim = dataFimSplit[1];
        var anoFim = dataFimSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();        
        
        if(dataFim == ''){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Campo Obrigatório!");
        }       
        else if((anoFim == anoAtual) && (mesFim == mesAtual) && (diaFim > diaAtual)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
        }       
        else if((anoFim == anoAtual) && (mesFim > mesAtual)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
        }       
        else if((anoFim > anoAtual)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
        }         
        else if((anoFim == anoInicio) && (mesFim == mesInicio) && (diaFim < diaInicio)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
        }       
        else if((anoFim == anoInicio) && (mesFim < mesInicio)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
        }       
        else if((anoFim < anoInicio)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
        }         
        else{
            $(campoDataFim).removeClass("is-invalid");
            $(campoDataFim).addClass("is-valid");
        }
    });    
};

var functionvalidAno = function(campo){
    var ano = $(campo).val();
    if(ano == ''){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-ano").html("Campo Obrigatório!");
    }
    else if((ano != '') && (ano.length < 4)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-ano").html("O ano é formado 4 caracteres!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};
var functionvalidAnoTReal = function(campo){
    $(campo).change(function(){
        var ano = $(campo).val();
        if(ano == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-ano").html("Campo Obrigatório!");
        }
        else if((ano != '') && (ano.length < 4)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-ano").html("O ano é formado 4 caracteres!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

$(function(){
   var atual_fs, prox_fs, anterior_fs;
   var form = $("#formCadCandidato");
   
   
   function prox(elemento){
       atual_fs = $(elemento).parent();
       prox_fs = $(elemento).parent().next();
       
       $('#progress li').eq($('fieldset').index(prox_fs)).addClass('ativo');
       atual_fs.hide(800);
       prox_fs.show(800);
        
   }
   
   $('.anterior').click(function(){
       atual_fs = $(this).parent();
       anterior_fs = $(this).parent().prev();
       $('#progress li').eq($('fieldset').index(atual_fs)).removeClass('ativo');
       atual_fs.hide(800);
       anterior_fs.show(800);
        
   });
   
   $('#formCadCandidato button[type=button]').click(function(){
      return false; 
   });
    
});

$("select[name=txtEndCurso]").change(function() {
    //Endereço do Centro de Instrução de Guerra na Selva
    if($("select[name=txtEndCurso]").val() === "cigs"){
        $("input[name=txtCepEndCurso]").val("69033-000");
        $("input[name=txtCepEndCurso]").removeClass("is-invalid");
        $("input[name=txtCepEndCurso]").addClass("is-valid");
        $("input[name=txtCepEndCurso]").prop("readonly", true);
        
        $("input[name=txtNomeEndCurso]").val("Avenida São Jorge");
        $("input[name=txtNomeEndCurso]").removeClass("is-invalid");
        $("input[name=txtNomeEndCurso]").addClass("is-valid");
        $("input[name=txtNomeEndCurso]").prop("readonly", true);
        
        $("input[name=txtNumEndCurso]").val("750");
        $("input[name=txtNumEndCurso]").removeClass("is-invalid");
        $("input[name=txtNumEndCurso]").addClass("is-valid");
        
        $("select[name=txtEstadoEndCurso]").val("0");
        $("select[name=txtEstadoEndCurso]").removeClass("is-invalid");
        $("select[name=txtEstadoEndCurso]").removeClass("is-valid");
        $("select[name=txtEstadoEndCurso]").prop("readonly", true);
        
        $("select[name=txtCidadeEndCurso]").val("0");
        $("select[name=txtCidadeEndCurso]").removeClass("is-invalid");
        $("select[name=txtCidadeEndCurso]").removeClass("is-valid");
        $("select[name=txtCidadeEndCurso]").prop("readonly", true);
        
        $("input[name=txtBairroEndCurso]").val("São Jorge");
        $("input[name=txtBairroEndCurso]").removeClass("is-invalid");
        $("input[name=txtBairroEndCurso]").addClass("is-valid");
        $("input[name=txtBairroEndCurso]").prop("readonly", true);
        
        $("input[name=txtCompEndCurso]").val("");
        $("input[name=txtPtRefEndCurso]").val("");
    }
    //Mesmo endereço de residêcnia
    else if($("select[name=txtEndCurso]").val() === "resid"){
        if($("input[name=txtCepEndResid]").val() != ""){
            if($("input[name=txtCepEndResid]").val() != ""){
                $("input[name=txtCepEndCurso]").val($("input[name=txtCepEndResid]").val());
                $("input[name=txtCepEndCurso]").removeClass("is-invalid");
                $("input[name=txtCepEndCurso]").addClass("is-valid");
                $("input[name=txtCepEndCurso]").prop("readonly", true);
            }
            else{
                $("input[name=txtCepEndCurso]").val();
                $("input[name=txtCepEndCurso]").removeClass("is-invalid");
                $("input[name=txtCepEndCurso]").removeClass("is-valid");
                $("input[name=txtCepEndCurso]").prop("readonly", false);
            }
            
            if($("input[name=txtNomeEndResid]").val() != ""){
                $("input[name=txtNomeEndCurso]").val($("input[name=txtNomeEndResid]").val());
                $("input[name=txtNomeEndCurso]").removeClass("is-invalid");
                $("input[name=txtNomeEndCurso]").addClass("is-valid");
                $("input[name=txtNomeEndCurso]").prop("readonly", true);
            }
            else{
                $("input[name=txtNomeEndCurso]").val("");
                $("input[name=txtNomeEndCurso]").removeClass("is-invalid");
                $("input[name=txtNomeEndCurso]").removeClass("is-valid");
                $("input[name=txtNomeEndCurso]").prop("readonly", false);
            }
            
            if($("input[name=txtNumEndResid]").val() != ""){
                $("input[name=txtNumEndCurso]").val($("input[name=txtNumEndResid]").val());
                $("input[name=txtNumEndCurso]").removeClass("is-invalid");
                $("input[name=txtNumEndCurso]").addClass("is-valid");
                $("input[name=txtNumEndCurso]").prop("readonly", true);
            }
            else{
                $("input[name=txtNumEndCurso]").val("");
                $("input[name=txtNumEndCurso]").removeClass("is-invalid");
                $("input[name=txtNumEndCurso]").removeClass("is-valid");
                $("input[name=txtNumEndCurso]").prop("readonly", false);
            }
            
            if($("select[name=txtEstadoEndResid]").val() != "0"){
                $("select[name=txtEstadoEndCurso]").val("0");
                $("select[name=txtEstadoEndCurso]").removeClass("is-invalid");
                $("select[name=txtEstadoEndCurso]").removeClass("is-valid");
                $("select[name=txtEstadoEndCurso]").prop("readonly", true);
            }
            else{
                $("select[name=txtEstadoEndCurso]").val("0");
                $("select[name=txtEstadoEndCurso]").removeClass("is-invalid");
                $("select[name=txtEstadoEndCurso]").removeClass("is-valid");
                $("select[name=txtEstadoEndCurso]").prop("readonly", false);
            }
            
            if($("select[name=txtCidadeEndResid]").val() != "0"){
                //$("select[name=txtCidadeEndCurso]").val($("select[name=txtCidadeEndResid]").val());
                $("select[name=txtCidadeEndCurso]").val("0");
                $("select[name=txtCidadeEndCurso]").removeClass("is-invalid");
                $("select[name=txtCidadeEndCurso]").removeClass("is-valid");
                $("select[name=txtCidadeEndCurso]").prop("readonly", true);
            }
            else{
                $("select[name=txtCidadeEndCurso]").val("0");
                $("select[name=txtCidadeEndCurso]").removeClass("is-invalid");
                $("select[name=txtCidadeEndCurso]").removeClass("is-valid");
                $("select[name=txtCidadeEndCurso]").prop("readonly", false);
            }
            
            if($("input[name=txtBairroEndResid]").val() != ""){
                $("input[name=txtBairroEndCurso]").val($("input[name=txtBairroEndResid]").val());
                $("input[name=txtBairroEndCurso]").removeClass("is-invalid");
                $("input[name=txtBairroEndCurso]").addClass("is-valid");
                $("input[name=txtBairroEndCurso]").prop("readonly", true);
            }
            else{
                $("input[name=txtBairroEndCurso]").val("");
                $("input[name=txtBairroEndCurso]").removeClass("is-invalid");
                $("input[name=txtBairroEndCurso]").removeClass("is-valid");
                $("input[name=txtBairroEndCurso]").prop("readonly",false);
            }
            if($("input[name=txtCompEndResid]").val() != ""){
                $("input[name=txtCompEndCurso]").val($("input[name=txtCompEndResid]").val());
                $("input[name=txtCompEndCurso]").removeClass("is-invalid");
                $("input[name=txtCompEndCurso]").addClass("is-valid");
                $("input[name=txtCompEndCurso]").prop("readonly", true);
            }
            else{
                $("input[name=txtCompEndCurso]").val("");
                $("input[name=txtCompEndCurso]").removeClass("is-invalid");
                $("input[name=txtCompEndCurso]").removeClass("is-valid");
                $("input[name=txtCompEndCurso]").prop("readonly", false);
            }
            if($("input[name=txtPtRefEndResid]").val() != ""){
                $("input[name=txtPtRefEndCurso]").val($("input[name=txtPtRefEndResid]").val());
                $("input[name=txtPtRefEndCurso]").removeClass("is-invalid");
                $("input[name=txtPtRefEndCurso]").addClass("is-valid");
                $("input[name=txtPtRefEndCurso]").prop("readonly", true);
            }
            else{
                $("input[name=txtPtRefEndCurso]").val("");
                $("input[name=txtPtRefEndCurso]").removeClass("is-invalid");
                $("input[name=txtPtRefEndCurso]").removeClass("is-valid");
                $("input[name=txtPtRefEndCurso]").prop("readonly", false);
            }
        }
        else{
            $("input[name=txtCepEndCurso]").val("");
            $("input[name=txtCepEndCurso]").removeClass("is-invalid");
            $("input[name=txtCepEndCurso]").removeClass("is-valid");
            $("input[name=txtCepEndCurso]").prop("readonly", false);

            $("input[name=txtNomeEndCurso]").val("");
            $("input[name=txtNomeEndCurso]").removeClass("is-invalid");
            $("input[name=txtNomeEndCurso]").removeClass("is-valid");
            $("input[name=txtNomeEndCurso]").prop("readonly", false);

            $("input[name=txtNumEndCurso]").val("");
            $("input[name=txtNumEndCurso]").removeClass("is-invalid");
            $("input[name=txtNumEndCurso]").removeClass("is-valid");
            $("input[name=txtNumEndCurso]").prop("readonly", false);

            $("select[name=txtEstadoEndCurso]").val("0");
            $("select[name=txtEstadoEndCurso]").removeClass("is-invalid");
            $("select[name=txtEstadoEndCurso]").removeClass("is-valid");
            $("select[name=txtEstadoEndCurso]").prop("readonly", false);

            $("select[name=txtCidadeEndCurso]").val("0");
            $("select[name=txtCidadeEndCurso]").removeClass("is-invalid");
            $("select[name=txtCidadeEndCurso]").removeClass("is-valid");
            $("select[name=txtCidadeEndCurso]").prop("readonly", false);

            $("input[name=txtBairroEndCurso]").val("");
            $("input[name=txtBairroEndCurso]").removeClass("is-invalid");
            $("input[name=txtBairroEndCurso]").removeClass("is-valid");
            $("input[name=txtBairroEndCurso]").prop("readonly", false);

            $("input[name=txtCompEndCurso]").val("");
            $("input[name=txtCompEndCurso]").removeClass("is-invalid");
            $("input[name=txtCompEndCurso]").removeClass("is-valid");
            $("input[name=txtCompEndCurso]").prop("readonly", false);

            $("input[name=txtPtRefEndCurso]").val("");
            $("input[name=txtPtRefEndCurso]").removeClass("is-invalid");
            $("input[name=txtPtRefEndCurso]").removeClass("is-valid");
            $("input[name=txtPtRefEndCurso]").prop("readonly", false);
        }
    }
    //Novo
    else if($("select[name=txtEndCurso]").val() === "novo" || $("select[name=txtEndCurso]").val() === "0"){
        $("input[name=txtCepEndCurso]").val("");
        $("input[name=txtCepEndCurso]").removeClass("is-invalid");
        $("input[name=txtCepEndCurso]").removeClass("is-valid");
        $("input[name=txtCepEndCurso]").prop("readonly", false);
                
        $("input[name=txtNomeEndCurso]").val("");
        $("input[name=txtNomeEndCurso]").removeClass("is-invalid");
        $("input[name=txtNomeEndCurso]").removeClass("is-valid");
        $("input[name=txtNomeEndCurso]").prop("readonly", false);
                
        $("input[name=txtNumEndCurso]").val("");
        $("input[name=txtNumEndCurso]").removeClass("is-invalid");
        $("input[name=txtNumEndCurso]").removeClass("is-valid");
        $("input[name=txtNumEndCurso]").prop("readonly", false);
                        
        $("select[name=txtEstadoEndCurso]").val("0");
        $("select[name=txtEstadoEndCurso]").removeClass("is-invalid");
        $("select[name=txtEstadoEndCurso]").removeClass("is-valid");
        $("select[name=txtEstadoEndCurso]").prop("readonly", false);
        
        $("select[name=txtCidadeEndCurso]").val("0");
        $("select[name=txtCidadeEndCurso]").removeClass("is-invalid");
        $("select[name=txtCidadeEndCurso]").removeClass("is-valid");
        $("select[name=txtCidadeEndCurso]").prop("readonly", false);
        
        $("input[name=txtBairroEndCurso]").val("");
        $("input[name=txtBairroEndCurso]").removeClass("is-invalid");
        $("input[name=txtBairroEndCurso]").removeClass("is-valid");
        $("input[name=txtBairroEndCurso]").prop("readonly", false);
        
        $("input[name=txtCompEndCurso]").val("");
        $("input[name=txtCompEndCurso]").removeClass("is-invalid");
        $("input[name=txtCompEndCurso]").removeClass("is-valid");
        $("input[name=txtCompEndCurso]").prop("readonly", false);
        
        $("input[name=txtPtRefEndCurso]").val("");
        $("input[name=txtPtRefEndCurso]").removeClass("is-invalid");
        $("input[name=txtPtRefEndCurso]").removeClass("is-valid");
        $("input[name=txtPtRefEndCurso]").prop("readonly", false);
    }
});

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

//Acionamento form Veiculos
/*var qtdeVeiculos = document.querySelectorAll('#fieldsetVeiculos .form-row').length + 1;
functionValidSelectTReal("#txtTraraVeiculo");
$("#txtTraraVeiculo").change(function() {    
    if($("#txtTraraVeiculo").val() === "s"){
        $("#divVeiculos").css("display", "block");        
    }
    else if($("#txtTraraVeiculo").val() === "n" || $("#txtTraraVeiculo").val() === "0"){
        $("#divVeiculos").css("display", "none");
        $("#fieldsetVeiculos .form-row").remove();
        qtdeVeiculos = 1;
    }
});*/

//Acionamento form Veiculo
functionValidSelectTReal("#txtTraraVeiculo");
$("#txtTraraVeiculo").change(function() {
    if($("#txtTraraVeiculo").val() === "s"){
        $("#divVeiculos").css("display", "block");        
    }
    else if($("#txtTraraVeiculo").val() === "n" || $("#txtTraraVeiculo").val() === "0"){
        $("#divVeiculos").css("display", "none");

        $("select[name=txtTipoVeiculoAl]").val('0');
        $("select[name=txtTipoVeiculoAl]").removeClass("is-invalid");
        $("select[name=txtTipoVeiculoAl]").removeClass("is-valid");

        $("input[name=txtMarcaVeiculoAl]").val('');            
        $("input[name=txtMarcaVeiculoAl]").removeClass("is-invalid");
        $("input[name=txtMarcaVeiculoAl]").removeClass("is-valid");

        $("input[name=txtModeloVeiculoAl]").val('');            
        $("input[name=txtModeloVeiculoAl]").removeClass("is-invalid");
        $("input[name=txtModeloVeiculoAl]").removeClass("is-valid");

        $("input[name=txtCorVeiculoAl]").val('');            
        $("input[name=txtCorVeiculoAl]").removeClass("is-invalid");
        $("input[name=txtCorVeiculoAl]").removeClass("is-valid");

        $("input[name=txtPlacaVeiculoAl]").val('');            
        $("input[name=txtPlacaVeiculoAl]").removeClass("is-invalid");
        $("input[name=txtPlacaVeiculoAl]").removeClass("is-valid");
    }
});

/*$("#btnAddVeiculo").click(function(){     
    $("#fieldsetVeiculos").append("<div id=linha"+ qtdeVeiculos +" class=\"form-row\">"+
                                  "  <div class=\"form-group col-md-2\">"+
                                  "      <label for=txtTipoVeiculoAl"+ qtdeVeiculos +">Tipo: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <select class=\"form-control\" id=txtTipoVeiculoAl"+ qtdeVeiculos +" name=\"txtTipoVeiculoAl\">"+
                                  "         <option value=\"0\" selected>Selecione o tipo...</option>"+
                                  "         <option value=\"motocicleta\">MOTOCICLETA</option>"+
                                  "         <option value=\"automovel\">AUTOMÓVEL</option>"+
                                  "         <option value=\"microonibus\">MICROÔNIBUS</option>"+
                                  "         <option value=\"onibus\">ÔNIBUS</option>"+
                                  "     </select>"+
                                  "     <div class=\"valid-feedback\">Selva!</div>"+
                                  "     <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "  <div class=\"form-group col-md-3\">"+
                                  "      <label for=txtMarcaVeiculoAl"+ qtdeVeiculos +">Marca: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtMarcaVeiculoAl"+ qtdeVeiculos +" name=\"txtMarcaVeiculoAl\" placeholder=\"Ex.: Hyundai\">"+                    
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "  <div class=\"form-group col-md-3\">"+
                                  "      <label for=txtModeloVeiculoAl"+ qtdeVeiculos +">Modelo: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtModeloVeiculoAl"+ qtdeVeiculos +" name=\"txtModeloVeiculoAl\" placeholder=\"Ex.: HB20S\">"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "  <div class=\"form-group col-md-2\">"+
                                  "      <label for=txtCorVeiculoAl"+ qtdeVeiculos +">Cor: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtCorVeiculoAl"+ qtdeVeiculos +" name=\"txtCorVeiculoAl\" placeholder=\"Ex.: Vermelho\">"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "  <div class=\"form-group col-md-2\">"+
                                  "      <label for=txtPlacaVeiculoAl"+ qtdeVeiculos +">Placa: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtPlacaVeiculoAl"+ qtdeVeiculos +" name=\"txtPlacaVeiculoAl\" placeholder=\"Ex.: XXX 0X00\">"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "</div>");
                         
    functionValidSelectTReal("#txtTipoVeiculoAl"+qtdeVeiculos);    
    functionValidSelectOCP("#txtTipoVeiculoAl"+qtdeVeiculos);    
    functionValidInputTReal("#txtMarcaVeiculoAl"+qtdeVeiculos);    
    functionValidInputOCP("#txtMarcaVeiculoAl"+qtdeVeiculos);    
    functionValidInputTReal("#txtModeloVeiculoAl"+qtdeVeiculos);    
    functionValidInputOCP("#txtModeloVeiculoAl"+qtdeVeiculos);    
    functionValidInputTReal("#txtCorVeiculoAl"+qtdeVeiculos);    
    functionValidInputOCP("#txtCorVeiculoAl"+qtdeVeiculos);    
    functionValidInputTReal("#txtPlacaVeiculoAl"+qtdeVeiculos);
    functionValidInputOCP("#txtPlacaVeiculoAl"+qtdeVeiculos);
    
    qtdeVeiculos++;
});*/

//Acionamento form Alergias
var qtdeAlergias = document.querySelectorAll('#fieldsetAlergias .form-row').length + 1;

$("#txtAlergico").change(function() {    
    if($("#txtAlergico").val() === "s"){
        $("#divAlergias").css("display", "block");        
    }
    else if($("#txtAlergico").val() === "n" || $("#txtAlergico").val() === "0"){
        $("#divAlergias").css("display", "none");
        $("#fieldsetAlergias .form-row").remove();
        qtdeAlergias = 1;
    }
});

$("#btnAddAlergia").click(function(){
    $("#fieldsetAlergias").append("<div id=linha" +qtdeAlergias+ " class=\"form-row\">"+
                                  "  <div class=\"form-group col-md-12\">"+
                                  "      <label for=txtAlergia"+ qtdeAlergias +">Alergia: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtAlergia"+ qtdeAlergias +" name=\"txtAlergia\" placeholder=\"Ex.: Rémedio tal\">"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "</div>");
                          
    functionValidInputTReal("#txtAlergia"+qtdeAlergias);
    
    qtdeAlergias++;
});

//Acionamento form Medicamento Controlado
var qtdeMtoCt = document.querySelectorAll('#fieldsetMtoCt .form-row').length + 1;

$("#txtUsoMtoCt").change(function() {    
    if($("#txtUsoMtoCt").val() === "s"){
        $("#divMtoCt").css("display", "block");        
    }
    else if($("#txtUsoMtoCt").val() === "n" || $("#txtUsoMtoCt").val() === "0"){
        $("#divMtoCt").css("display", "none");
        $("#fieldsetMtoCt .form-row").remove();
        qtdeMtoCt = 1;
    }
});

$("#btnAddMtoCt").click(function(){
    $("#fieldsetMtoCt").append("<div id=linha" + qtdeMtoCt + " class=\"form-row\">"+
                                  "  <div class=\"form-group col-md-8\">"+
                                  "      <label for=txtNomeMtoCt"+ qtdeMtoCt +">Nome: <span class=\"campo-obrigatorio\"> *</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtNomeMtoCt"+ qtdeMtoCt +" name=\"txtNomeMtoCt\" placeholder=\"Ex.: Rémedio tal\">"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "  <div class=\"form-group col-md-2\">"+
                                  "      <label for=txtFrqMtoCt"+ qtdeMtoCt +">Frequência: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"number\" class=\"form-control\" id=txtFrqMtoCt"+ qtdeMtoCt +" name=\"txtFrqMtoCt\" placeholder=\"Ex.: vezes\">"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "  <div class=\"form-group col-md-2\">"+
                                  "      <label for=txtTpMtoCt"+ qtdeMtoCt +">Por: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <select class=\"form-control\" id=txtTpMtoCt"+ qtdeMtoCt +" name=\"txtTpMtoCt\">"+
                                  "         <option value=\"0\" selected>Selecione o tipo...</option>"+
                                  "         <option value=\"hr\">Hora</option>"+
                                  "         <option value=\"dia\">Dia</option>"+
                                  "         <option value=\"sem\">Semana</option>"+
                                  "         <option value=\"mes\">Mês</option>"+
                                  "         <option value=\"ano\">Ano</option>"+
                                  "     </select>"+
                                  "     <div class=\"valid-feedback\">Selva!</div>"+
                                  "     <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "</div>");
        
    functionValidInputTReal("#txtNomeMtoCt"+qtdeMtoCt);    
    functionValidInputTReal("#txtFrqMtoCt"+qtdeMtoCt);
    functionValidSelectTReal("#txtTpMtoCt"+qtdeMtoCt);
                          
    qtdeMtoCt++;
});

//Acionamento form Termogênicos, Ergonênicos e Suplementos Alimentares
var qtdeTermErgSupAli = document.querySelectorAll('#fieldsetTermErgSupAli .form-row').length + 1;

$("#txtUsoTermErgSupAli").change(function() {    
    if($("#txtUsoTermErgSupAli").val() === "s"){
        $("#divTermErgSupAli").css("display", "block");        
    }
    else if($("#txtUsoTermErgSupAli").val() === "n" || $("#txtUsoTermErgSupAli").val() === "0"){
        $("#divTermErgSupAli").css("display", "none");
        $("#fieldsetTermErgSupAli .form-row").remove();
        qtdeTermErgSupAli = 1;
    }
});

$("#btnAddTermErgSupAli").click(function(){
    $("#fieldsetTermErgSupAli").append("<div id=linha" + qtdeTermErgSupAli + " class=\"form-row\">"+
                                  "  <div class=\"form-group col-md-12\">"+
                                  "      <label for=txtNomeTermErgSupAli"+ qtdeTermErgSupAli +">Nome: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtNomeTermErgSupAli"+ qtdeTermErgSupAli +" name=\"txtNomeTermErgSupAli\" placeholder=\"Ex.: Rémedio tal\">"+
                                  "     <div class=\"valid-feedback\">Selva!</div>"+
                                  "     <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "</div>");
                          
    functionValidInputTReal("#txtNomeTermErgSupAli"+qtdeTermErgSupAli);
    
    qtdeTermErgSupAli++;
});

//Acionamento form Data do QA de Promoção
$("#txtQaProm").change(function() {
    if($("#txtQaProm").val() === "s"){
        $("#divQaQuando").css("display", "block");
    }
    else if($("#txtQaProm").val() === "n" || $("#txtQaProm").val() === "0"){
        $("#divQaQuando").css("display", "none");
        
        $("input[name=txtQaQuandoProm]").val('');            
        $("input[name=txtQaQuandoProm]").removeClass("is-invalid");
        $("input[name=txtQaQuandoProm]").removeClass("is-valid");
    }
});

//Acionamento form Serviços na Amazônia
var qtdeSvAmz = document.querySelectorAll('#fieldsetSvAmz .form-row').length + 1;

$("#txtSvAmz").change(function() {    
    if($("#txtSvAmz").val() === "s"){
        $("#divSvAmz").css("display", "block");        
    }
    else if($("#txtSvAmz").val() === "n" || $("#txtSvAmz").val() === "0"){
        $("#divSvAmz").css("display", "none");
        $("#fieldsetSvAmz .fieldset-interno").remove();
        qtdeSvAmz = 1;
    }
});

function alimentaSelectOMNomeSvAmz(id, idForca){
    FacadeAjax.getOmsRegiaoNorteDWR(idForca, {
        callback: function(oms){
            dwr.util.removeAllOptions("txtOMNomeSvAmz"+id);
            dwr.util.addOptions("txtOMNomeSvAmz"+id, [{id: "0", nome: "Selecione uma OM..."}], "id", "nome");
            dwr.util.addOptions("txtOMNomeSvAmz"+id, oms, "id", "nome");
        } 
    });
}                                                                         

$("#btnAddSvAmz").click(function(){      
    $("#fieldsetSvAmz").append("<div id=linha"+qtdeSvAmz+" class=\"linha fieldset-interno\">"+
                               /* "   <div class=form-row>"+
                                "       <div class=\"form-group col-md-6\">"+
                                "           <label for=txtForcaOMSvAmz"+qtdeSvAmz+">Força: <span class=campo-obrigatorio>*</span></label>"+
                                "           <select class=form-control id=txtForcaOMSvAmz"+qtdeSvAmz+" name=txtForcaOMSvAmz></select>"+
                                "           <div class=\"valid-feedback\">Selva!</div>"+
                                "           <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                "       </div>"+ 
                                "       <div class=\"form-group col-md-6\">"+
                                "            <label for=txtEstadoForcaOMSvAmz"+qtdeSvAmz+">Estado: <span class=campo-obrigatorio>*</span></label>"+
                                "            <select class=form-control id=txtEstadoForcaOMSvAmz"+qtdeSvAmz+" name=txtEstadoForcaOMSvAmz></select>"+
                                "            <div class=\"valid-feedback\">Selva!</div>"+
                                "            <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                "        </div>"+
                                "    </div>"+*/
                                "    <div class=form-row>"+    
                                "        <div class=\"form-group col-md-12\">"+
                                "            <label for=txtOMNomeSvAmz"+qtdeSvAmz+">OM: <span class=\"campo-obrigatorio\">*</span></label>"+
                                "            <select class=\"form-control\" id=txtOMNomeSvAmz"+qtdeSvAmz+" name=\"txtOMNomeSvAmz\"></select>"+
                                "            <div class=\"valid-feedback\">Selva!</div>"+
                                "            <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                "        </div>"+        
                                "    </div>"+  
                                "    <div class=form-row>"+
                                "        <div class=\"form-group col-md-6\">"+
                                "            <label for=txtDInOMSvAmz"+qtdeSvAmz+">De: <span class=\"campo-obrigatorio\">*</span></label>"+
                                "            <input type=\"date\" class=\"form-control\" id=txtDInOMSvAmz"+qtdeSvAmz+" name=\"txtDInOMSvAmz\" placeholder=\"Ex.: 00/00/0000\">"+
                                "            <div class=\"valid-feedback\">Selva!</div>"+
                                "            <div class=\"invalid-feedback invalid-dataInicio\">Campo Obrigatório!</div>"+
                                "        </div>"+
                                "        <div class=\"form-group col-md-6\">"+
                                "            <label for=txtDFimOMSvAmz"+qtdeSvAmz+">Até: <span class=\"campo-obrigatorio\">*</span></label>"+
                                "            <input type=\"date\" class=\"form-control\" id=txtDFimOMSvAmz"+qtdeSvAmz+" name=\"txtDFimOMSvAmz\" placeholder=\"Ex.: 00/00/0000\">"+
                                "            <div class=\"valid-feedback\">Selva!</div>"+
                                "            <div class=\"invalid-feedback invalid-dataFim\">Campo Obrigatório!</div>"+
                                "        </div>"+  
                                "    </div>"+  
                                "    <div class=form-row>"+
                                "        <div class=\"form-group col-md-4\">"+
                                "            <label for=txtFunc1OMSvAmz"+qtdeSvAmz+">Função 1: <span class=\"campo-obrigatorio\">*</span></label>"+
                                "            <input type=\"text\" class=\"form-control\" id=txtFunc1OMSvAmz"+qtdeSvAmz+" name=\"txtFunc1OMSvAmz\" placeholder=\"Ex.: Cmt Pel\">"+
                                "            <div class=\"valid-feedback\">Selva!</div>"+
                                "            <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                "        </div>"+
                                "        <div class=\"form-group col-md-4\">"+
                                "            <label for=txtFunc2OMSvAmz"+qtdeSvAmz+">Função 2: <span class=\"campo-obrigatorio\">*</span></label>"+
                                "            <input type=\"text\" class=\"form-control\" id=txtFunc2OMSvAmz"+qtdeSvAmz+" name=\"txtFunc2OMSvAmz\" placeholder=\"Ex.: Cmt Cia\">"+
                                "            <div class=\"valid-feedback\">Selva!</div>"+
                                "            <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                "        </div>"+  
                                "        <div class=\"form-group col-md-4\">"+
                                "            <label for=txtFunc3OMSvAmz"+qtdeSvAmz+">Função 3: <span class=\"campo-obrigatorio\">*</span></label>"+
                                "            <input type=\"text\" class=\"form-control\" id=txtFunc3OMSvAmz"+qtdeSvAmz+" name=\"txtFunc3OMSvAmz\" placeholder=\"Ex.: Enc Mat\">"+
                                "            <div class=\"valid-feedback\">Selva!</div>"+
                                "            <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                "        </div>"+  
                                "    </div>"+  
                                "</div>");
    
    alimentaSelectOMNomeSvAmz(qtdeSvAmz, $("select[name=txtForca]").val());
    
    functionValidSelectTReal("#txtOMNomeSvAmz"+qtdeSvAmz);
    functionValidDInOMSvAmzTReal("#txtDInOMSvAmz"+qtdeSvAmz);
    functionValidDFimOMSvAmzTReal("#txtDInOMSvAmz"+qtdeSvAmz, "#txtDFimOMSvAmz"+qtdeSvAmz);
    functionValidInputTReal("#txtFunc1OMSvAmz"+qtdeSvAmz);
    functionValidInputTReal("#txtFunc2OMSvAmz"+qtdeSvAmz);
    functionValidInputTReal("#txtFunc3OMSvAmz"+qtdeSvAmz);
    
    qtdeSvAmz++;
});

//Acionamento form Cônjuge
$("#txtPossuiConjuge").change(function() {
    if($("#txtPossuiConjuge").val() === "s"){
        $("#divConjuge").css("display", "block");
    }
    else if($("#txtPossuiConjuge").val() === "n" || $("#txtPossuiConjuge").val() === "0"){
        $("#divConjuge").css("display", "none");
        
        $("input[name=txtCpfConjuge]").val('');
        $("input[name=txtCpfConjuge]").removeClass("is-valid");
        $("input[name=txtCpfConjuge]").removeClass("is-invalid");

        $("input[name=txtNomeConjuge]").val('');
        $("input[name=txtNomeConjuge]").removeClass("is-valid");
        $("input[name=txtNomeConjuge]").removeClass("is-invalid");

        $("input[name=txtSobrenomeConjuge]").val('');
        $("input[name=txtSobrenomeConjuge]").removeClass("is-valid");
        $("input[name=txtSobrenomeConjuge]").removeClass("is-invalid");

        $("input[name=txtEmailConjuge]").val('');
        $("input[name=txtEmailConjuge]").removeClass("is-valid");
        $("input[name=txtEmailConjuge]").removeClass("is-invalid");

        $("input[name=txtFoneConjuge]").val('');
        $("input[name=txtFoneConjuge]").removeClass("is-valid");
        $("input[name=txtFoneConjuge]").removeClass("is-invalid");
    }
});

//Acionamento form Referência Conclusão de Curso
$("#txtAddRefConclusao").change(function() {
    if($("#txtAddRefConclusao").val() === "s"){
        $("#divRefConclusao").css("display", "block");
    }
    else if($("#txtAddRefConclusao").val() === "n" || $("#txtAddRefConclusao").val() === "0"){
        $("#divRefConclusao").css("display", "none");
    }
});

//Acionamento form Idiomas
var qtdeIdiomas = document.querySelectorAll('#fieldsetIdiomas .form-row').length + 1;

$("#txtHabIdiomas").change(function() {    
    if($("#txtHabIdiomas").val() === "s"){
        $("#divIdiomas").css("display", "block");        
    }
    else if($("#txtHabIdiomas").val() === "n" || $("#txtHabIdiomas").val() === "0"){
        $("#divIdiomas").css("display", "none");
        $("#fieldsetIdiomas .form-row").remove();
        qtdeIdiomas = 1;
    }
});
    
function alimentaSelectIdioma(id){
    FacadeAjax.getIdiomasDWR({
        callback: function(idiomas){
            dwr.util.removeAllOptions("txtIdioma"+id);
            dwr.util.addOptions("txtIdioma"+id, [{id: "0", nome: "Selecione um Idioma..."}], "id", "nome");
            dwr.util.addOptions("txtIdioma"+id, idiomas, "id", "nome");
        } 
    });
}

$("#btnAddIdioma").click(function(){           
    $("#linha" + qtdeIdiomas).remove();
    $("#fieldsetIdiomas").append("<div id=linha"+ qtdeIdiomas +" class=\"form-row\">"+
                                  "  <div class=\"form-group col-md-8\">"+
                                  "      <label for=txtIdioma"+ qtdeIdiomas +">Idioma: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <select class=\"form-control\" id=txtIdioma" + qtdeIdiomas + " name=\"txtIdioma\">"+
                                  "         <option value=\"0\" selected>Selecione um Idioma...</option>"+
                                  "      </select>"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "  <div class=\"form-group col-md-4\">"+
                                  "      <label for=txtIplIdioma"+ qtdeIdiomas +">IPL: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtIplIdioma"+ qtdeIdiomas +" name=\"txtIplIdioma\" placeholder=\"Ex.: \">"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "</div>");
    
    
    alimentaSelectIdioma(qtdeIdiomas);
    
    functionValidSelectTReal("#txtIdioma"+qtdeIdiomas);
    functionValidInputTReal("#txtIplIdioma"+qtdeIdiomas);
    
    qtdeIdiomas++;
});

//Acionamento form Curso de Aperfeiçoamento
$("#txtPossuiCAperf").change(function() {
    if($("#txtPossuiCAperf").val() === "s"){
        $("#divCAperf").css("display", "block");
    }
    else if($("#txtPossuiCAperf").val() === "n" || $("#txtPossuiCAperf").val() === "0"){
        $("#divCAperf").css("display", "none");
        
        $("select[name=txtCAperf]").val('0');
        $("select[name=txtCAperf]").removeClass("is-invalid");
        $("select[name=txtCAperf]").removeClass("is-valid");
        
        $("input[name=txtAnoCAperf]").val('');
        $("input[name=txtAnoCAperf]").removeClass("is-invalid");
        $("input[name=txtAnoCAperf]").removeClass("is-valid");
    }
});

//Acionamento form Curso de Altos Estudos
$("#txtPossuiCAltEstudos").change(function() {
    if($("#txtPossuiCAltEstudos").val() === "s"){
        $("#divCAltEstudos").css("display", "block");
    }
    else if($("#txtPossuiCAltEstudos").val() === "n" || $("#txtPossuiCAltEstudos").val() === "0"){
        $("#divCAltEstudos").css("display", "none");
        
        $("select[name=txtCAltEstudos]").val('0');
        $("select[name=txtCAltEstudos]").removeClass("is-invalid");
        $("select[name=txtCAltEstudos]").removeClass("is-valid");
        
        $("input[name=txtAnoCAltEstudos]").val('');
        $("input[name=txtAnoCAltEstudos]").removeClass("is-invalid");
        $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
    }
});

//Acionamento form Curso de Extensão ou Especialização
var qtdeCExtsEsp = document.querySelectorAll('#fieldsetCExtsEsp .form-row').length + 1;

$("#txtPossuiCExtsEsp").change(function() {    
    if($("#txtPossuiCExtsEsp").val() === "s"){
        $("#divCExtsEsp").css("display", "block");        
    }
    else if($("#txtPossuiCExtsEsp").val() === "n" || $("#txtPossuiCExtsEsp").val() === "0"){
        $("#divCExtsEsp").css("display", "none");
        $("#fieldsetCExtsEsp .form-row").remove();
        qtdeCExtsEsp = 1;
    }
});

$("#btnAddCExtsEsp").click(function(){           
    $("#fieldsetCExtsEsp").append("<div id=linha"+ qtdeCExtsEsp +" class=\"form-row\">"+
                                  "  <div class=\"form-group col-md-3\">"+
                                  "      <label for=txtTipoCExtsEsp"+ qtdeCExtsEsp +">Tipo: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <select class=\"form-control\" id=txtTipoCExtsEsp"+ qtdeCExtsEsp +" name=\"txtTipoCExtsEsp\">"+
                                  "         <option value=\"0\" selected>Selecione o tipo...</option>"+
                                  "         <option value=\"exts\">Extensão</option>"+
                                  "         <option value=\"esp\">Especialização</option>"+
                                  "     </select>"+
                                  "     <div class=\"valid-feedback\">Selva!</div>"+
                                  "     <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "  <div class=\"form-group col-md-6\">"+
                                  "      <label for=txtCExtsEsp"+ qtdeCExtsEsp +">Curso: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtCExtsEsp"+ qtdeCExtsEsp +" name=\"txtCExtsEsp\" placeholder=\"Ex.: Básico Paraquedista\">"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "  <div class=\"form-group col-md-3\">"+
                                  "      <label for=txtAnoCExtsEsp"+ qtdeCExtsEsp +">Ano de Conclusão: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtAnoCExtsEsp"+ qtdeCExtsEsp +" name=\"txtAnoCExtsEsp\" placeholder=\"Ex.: 2018\" maxlength=\"4\">"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback invalid-ano\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "</div>");
                          
    functionValidSelectTReal("#txtTipoCExtsEsp"+ qtdeCExtsEsp);
    functionValidInputTReal("#txtCExtsEsp"+ qtdeCExtsEsp);
    functionValidInputTReal("#txtAnoCExtsEsp"+ qtdeCExtsEsp);
                          
    qtdeCExtsEsp++;
});

//Acionamento form Estagios
var qtdeEstagios = document.querySelectorAll('#fieldsetEstagios .form-row').length + 1;

$("#txtPossuiEstMil").change(function() {    
    if($("#txtPossuiEstMil").val() === "s"){
        $("#divEstagios").css("display", "block");        
    }
    else if($("#txtPossuiEstMil").val() === "n" || $("#txtPossuiEstMil").val() === "0"){
        $("#divEstagios").css("display", "none");
        $("#fieldsetEstagios .form-row").remove();
        qtdeEstagios = 1;
    }
});

$("#btnAddEstagio").click(function(){      
    $("#fieldsetEstagios").append("<div id=linha"+ qtdeEstagios +" class=\"form-row\">"+
                                  "  <div class=\"form-group col-md-8\">"+
                                  "      <label for=txtEstagio"+ qtdeEstagios +">Estágio: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtEstagio"+ qtdeEstagios +" name=\"txtEstagio\" placeholder=\"Ex.: Caatinga\">"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                  "  </div>"+
                                  "  <div class=\"form-group col-md-4\">"+
                                  "      <label for=txtAnoEstagio"+ qtdeEstagios +">Ano de Conclusão: <span class=\"campo-obrigatorio\">*</span></label>"+
                                  "      <input type=\"text\" class=\"form-control\" id=txtAnoEstagio"+ qtdeEstagios +" name=\"txtAnoEstagio\" placeholder=\"Ex.: 2018\" maxlength=\"4\">"+
                                  "      <div class=\"valid-feedback\">Selva!</div>"+
                                  "      <div class=\"invalid-feedback invalid-ano\">Campo Obrigatório!</div>"+
                                  "  </div>"+  
                                  "</div>");
                          
    functionValidInputTReal("#txtEstagio"+qtdeEstagios);
    functionValidInputTReal("#txtAnoEstagio"+qtdeEstagios);
    
    qtdeEstagios++;
});

/*//Acionamento form Tentativas em realizar o curso
$("#txtTentC").change(function() {    
    if($("#txtTentC").val() === "s"){
        $("#divTentC").css("display", "block");        
    }
    else if($("#txtTentC").val() === "n" || $("#txtTentC").val() === "0"){
        $("#divTentC").css("display", "none");
        $("#fieldsetTentC .form-row").remove();
        $("#fieldsetTentC div").remove(".tent");
        
        $("select[name=txtQntTentC]").val('0');
        $("select[name=txtQntTentC]").removeClass("is-invalid");
        $("select[name=txtQntTentC]").removeClass("is-valid");
    }
});

$("#txtQntTentC").change(function(){    
    $("#fieldsetTentC div").remove(".tent");
    var qntTentC = $("#txtQntTentC").val();
    for(var i=1; i<=qntTentC; i++){
        $("#fieldsetTentC").append("<div class=\"tent col\">"+
                                   "    <div class=\"header-interno\">"+
                                   "        <h5 class=title-interno>" + i + "ª Tentativa" + "</h5>"+
                                   "    </div>"+
                                   "    <div id=linha"+ i +" class=\"colTentC linha fieldset-interno \">"+
                                   "        <div class=form-row>"+
                                   "            <div class=\"form-group col-md-12\">"+
                                   "                <label for=txtAnoTentC"+ i +">Ano: <span class=\"campo-obrigatorio\">*</span></label>"+
                                   "                <input type=\"text\" class=\"form-control\" id=txtAnoTentC"+ i +" name=\"txtAnoTentC\" placeholder=\"Ex.: 2018\" maxlength=\"4\">"+
                                   "                <div class=\"valid-feedback\">Selva!</div>"+
                                   "                <div class=\"invalid-feedback invalid-ano\">Campo Obrigatório!</div>"+
                                   "            </div>"+ 
                                   "        </div>"+  
                                   "        <div class=form-row>"+
                                   "            <div class=\"form-group col-md-12\">"+
                                   "                <label for=txtOMNomeTentC"+ i +">OM que servia: <span class=\"campo-obrigatorio\">*</span></label>"+
                                   "                <input type=\"text\" class=\"form-control\" id=txtOMNomeTentC"+ i +" name=\"txtOMNomeTentC\" placeholder=\"Ex.: Centro de Instrução de Guerra na Selva\">"+
                                   "                <div class=\"valid-feedback\">Selva!</div>"+
                                   "                <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                   "            </div>"+
                                   "        </div>"+
                                   "        <div class=form-row>"+
                                   "            <div class=\"form-group col-md-12\">"+
                                   "                <label for=txtOMAbrevTentC"+ i +">Abreviatura: <span class=\"campo-obrigatorio\">*</span></label>"+
                                   "                <input type=\"text\" class=\"form-control\" id=txtOMAbrevTentC"+ i +" name=\"txtOMAbrevTentC\" placeholder=\"Ex.: CIGS\">"+
                                   "                <div class=\"valid-feedback\">Selva!</div>"+
                                   "                <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                   "            </div>"+  
                                   "        </div>"+  
                                   "        <div class=form-row>"+
                                   "            <div class=\"form-group col-md-12\">"+
                                   "                <label for=txtMtvDeslTentC"+ i +">Motivo de Desligamento: <span class=\"campo-obrigatorio\">*</span></label>"+
                                   "                <select class=\"form-control\" id=txtMtvDeslTentC"+ i +" name=\"txtMtvDeslTentC\">"+
                                   "                    <option value=\"0\" selected>Selecione o tipo...</option>"+
                                   "                    <option value=\"solvol\">Solicitação Voluntária</option>"+
                                   "                    <option value=\"saude\">Saúde</option>"+
                                   "                    <option value=\"insftec\">Insuficiência Técnica</option>"+
                                   "                </select>"+ 
                                   "                <div class=\"valid-feedback\">Selva!</div>"+
                                   "                <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                   "            </div>"+  
                                   "        </div>"+  
                                   "        <div class=form-row>"+
                                   "            <div class=\"form-group col-md-12\">"+
                                   "                <label for=txtFaseDeslTentC"+ i +">Fase na qual foi desligado: <span class=\"campo-obrigatorio\">*</span></label>"+
                                   "                <select class=\"form-control\" id=txtFaseDeslTentC"+ i +" name=\"txtFaseDeslTentC\">"+
                                   "                    <option value=\"0\" selected>Selecione o tipo...</option>"+
                                   "                    <option value=\"eafprel\">EAF Preliminar</option>"+
                                   "                    <option value=\"eafdef\">EAF Definitivo</option>"+
                                   "                    <option value=\"testeconhecimento\">Teste de Conhecimento</option>"+
                                   "                    <option value=\"vs\">Vida na Selva</option>"+
                                   "                    <option value=\"tecesp\">Técnicas Especiais</option>"+
                                   "                    <option value=\"op\">Operações</option>"+
                                   "                </select>"+ 
                                   "                <div class=\"valid-feedback\">Selva!</div>"+
                                   "                <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                   "            </div>"+  
                                   "        </div>"+  
                                   "    </div>"+
                                   "</div>");
        functionvalidAnoTReal("#txtAnoTentC"+i);
        functionValidInputTReal("#txtOMNomeTentC"+i);
        functionValidInputTReal("#txtOMAbrevTentC"+i);
        functionValidSelectTReal("#txtMtvDeslTentC"+i);
        functionValidSelectTReal("#txtFaseDeslTentC"+i);
    }
});*/