/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    function limpa_campo_cep(){
        $("#txtCepEndResid").val("");
        $("#txtCepEndResid").removeClass("is-invalid");
        $("#txtCepEndResid").removeClass("is-valid");
        $("#txtCepEndResid").prop("readonly", false);
    }
    function limpa_formulario_cep() {
        // Limpa valores do formulário de cep.
        $("#txtNomeEndResid").val("");
        $("#txtNomeEndResid").removeClass("is-invalid");
        $("#txtNomeEndResid").removeClass("is-valid");
        $("#txtNomeEndResid").prop("readonly", false);

        /*$("#txtNumEndResid").val("");
        $("#txtNumEndResid").removeClass("is-invalid");
        $("#txtNumEndResid").removeClass("is-valid");
        $("#txtNumEndResid").prop("readonly", false);

        $("#txtEstadoEndResid").val("0");
        $("#txtEstadoEndResid").removeClass("is-invalid");
        $("#txtEstadoEndResid").removeClass("is-valid");
        $("#txtEstadoEndResid").prop("readonly", false);

        $("#txtCidadeEndResid").val("0");
        $("#txtCidadeEndResid").removeClass("is-invalid");
        $("#txtCidadeEndResid").removeClass("is-valid");
        $("#txtCidadeEndResid").prop("readonly", false);*/

        $("#txtBairroEndResid").val("");
        $("#txtBairroEndResid").removeClass("is-invalid");
        $("#txtBairroEndResid").removeClass("is-valid");
        $("#txtBairroEndResid").prop("readonly", false);

        /*$("#txtCompEndResid").val("");
        $("#txtCompEndResid").removeClass("is-invalid");
        $("#txtCompEndResid").removeClass("is-valid");
        $("#txtCompEndResid").prop("readonly", false);
        
        $("#txtPtRefEndResid").val("");
        $("#txtPtRefEndResid").removeClass("is-invalid");
        $("#txtPtRefEndResid").removeClass("is-valid");
        $("#txtPtRefEndResid").prop("readonly", false);*/
    }
    
    limpa_campo_cep();
    limpa_formulario_cep();

    //Quando o campo cep perde o foco.
    $("#txtCepEndResid").change(function() {
        limpa_formulario_cep();
        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');
        //Verifica se campo cep possui valor informado.
        if (cep != "") {
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
            //Valida o formato do CEP.
            if(validacep.test(cep)) {
                //Preenche os campos com "..." enquanto consulta webservice.
                $("#txtNomeEndResid").val("...");
                //$("#txtEstadoEndResid").val("...");
                //$("#txtCidadeEndResid").val("...");
                $("#txtBairroEndResid").val("...");
                //$("#txtCompEndResid").val("...");
                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        if(dados.logradouro != ""){
                            $("#txtNomeEndResid").val(dados.logradouro);
                            $("#txtNomeEndResid").removeClass("is-invalid");
                            $("#txtNomeEndResid").addClass("is-valid");
                            $("#txtNomeEndResid").prop("readonly", true);
                        }
                        else{
                            $("#txtNomeEndResid").val('');
                            $("#txtNomeEndResid").removeClass("is-invalid");
                            $("#txtNomeEndResid").removeClass("is-valid");
                            $("#txtNomeEndResid").prop("readonly", false);
                        }
                        
                        if(dados.bairro != ""){
                            $("#txtBairroEndResid").val(dados.bairro);
                            $("#txtBairroEndResid").removeClass("is-invalid");
                            $("#txtBairroEndResid").addClass("is-valid");
                            $("#txtBairroEndResid").prop("readonly", true);
                        }
                        else{
                            $("#txtBairroEndResid").val('');
                            $("#txtBairroEndResid").removeClass("is-invalid");
                            $("#txtBairroEndResid").removeClass("is-valid");
                            $("#txtBairroEndResid").prop("readonly", false);
                        }  
                    }
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulario_cep();
                        $("#txtCepEndResid").removeClass("is-valid");
                        $("#txtCepEndResid").addClass("is-invalid");
                        $(".invalid-cep").html("CEP não encontrado!");
                    }
                });
            }
            else {
                //cep é inválido.
                limpa_formulario_cep();
                $("#txtCepEndResid").removeClass("is-valid");
                $("#txtCepEndResid").addClass("is-invalid");
                $(".invalid-cep").html("CEP Inválido!");;
            }
        }
        else {
            //cep sem valor, limpa formulário.
            limpa_formulario_cep();
        }
    });
    
    $(function(){
        if($("#txtCepEndResid").val() != 0){
            if($("#txtNomeEndResid").val() != ""){
                $("#txtNomeEndResid").prop("readonly", true);
            }
            else{
                $("#txtNomeEndResid").prop("readonly", false);
            }
            if($("#txtBairroEndResid").val() != ""){
                $("#txtBairroEndResid").prop("readonly", true);
            }
            else{
                $("#txtBairroEndResid").prop("readonly", false);
            }
        }
    });
});