// Variáveis Auxiliares
//var camposOk = 0; //testar se todos campos foram preenchidos corretamente
var cpfOk = 0; //testar validade do cpf



$(function(){
    
    alteraMilitar($("input[name=txtIdtMilAtt]").val());
    
// --> Início Etapa 1: DADOS INDIVIDUAIS
    //Campo Input Identidade Militar
    validIdtMil("input[name=txtIdtMil]");
    validIdtMilTReal("input[name=txtIdtMil]");
    
    //Campo Input Identidade Militar
    validIdtCivil("input[name=txtIdtCivil]");
    validIdtCivilTReal("input[name=txtIdtCivil]");
    somenteNumero("input[name=txtIdtCivil]");
    
    //Campo Input Data de Nascimento
    validDataNascMil("input[name=txtDataNasc]");
    validDataNascMilTReal("input[name=txtDataNasc]");
    
    //Campo Input CPF
    validCPF("input[name=txtCpf]");
    validCPFTReal("input[name=txtCpf]");
    
    //Campo Input Preccp    
    validPreccp("input[name=txtPreccp]");
    validPreccpTReal("input[name=txtPreccp]");
    somenteNumero("input[name=txtPreccp]");
    
    //Campo Input CP    
    validCP("input[name=txtCP]");
    validCPTReal("input[name=txtCP]");
    somenteNumero("input[name=txtCP]");
    
    //Campo Input Nome
    validInput("input[name=txtNome]");
    validInputTReal("input[name=txtNome]");
    
    //Campo Input Sobrenome
    validInput("input[name=txtSobrenome]");
    validInputTReal("input[name=txtSobrenome]");
    
    //Campo Input Nome de Guerra
    validInput("input[name=txtNomeGuerra]");
    validInputTReal("input[name=txtNomeGuerra]");
    
    //Campo Select Sexo
    validSelect("select[name=txtSexo]");
    validSelectTReal("select[name=txtSexo]");
    
    //Campo Select Tipo Sanguíneo
    validSelect("select[name=txtTS]");
    validSelectTReal("select[name=txtTS]");
    
    //Campo Select Fator RH
    validSelect("select[name=txtFatorRH]");
    validSelectTReal("select[name=txtFatorRH]");
    
    //Campo Input Pai
    validInput("input[name=txtPai]");
    validInputNuloTReal("input[name=txtPai]");
    
    //Campo Input Mãe
    validInput("input[name=txtMae]");
    validInputNuloTReal("input[name=txtMae]");
    
    //Campo Select Estado Civil
    validSelect("select[name=txtEstCivil]");
    validSelectTReal("select[name=txtEstCivil]");
    
    //Campo Select Escolaridade
    validSelect("select[name=txtEscolaridade]");
    validSelectTReal("select[name=txtEscolaridade]");
    
    //Campo Select Religiao
    validSelect("select[name=txtReligiao]");
    validSelectTReal("select[name=txtReligiao]");
    
    //Campo Select Naturalidade (Estado)
    validSelect("select[name=txtNatEst]");
    validSelectTReal("select[name=txtNatEst]");
    
    //Campo Select Naturalidade (Cidade)
    validSelect("select[name=txtNatCid]");
    validSelectTReal("select[name=txtNatCid]");   
    
    //Campo Input Data de Praça
    validDataPraca("input[name=txtDataPraca]", "input[name=txtDataNasc]");
    validDataPracaTReal("input[name=txtDataPraca]", "input[name=txtDataNasc]");
    
    //Campo Input Titulo Eleitoral
    validTituloEleitor("input[name=txtTitEleitorNum]");
    validTituloEleitorTReal("input[name=txtTitEleitorNum]");
    
    //Campo Input Zona Eleitoral
    validTitEleitorZona("input[name=txtTitEleitorZona]");
    validTitEleitorZonaTReal("input[name=txtTitEleitorZona]");
    somenteNumero("input[name=txtTitEleitorZona]");
    
    //Campo Input Seção Eleitoral
    validTitEleitorSecao("input[name=txtTitEleitorSecao]");
    validTitEleitorSecaoTReal("input[name=txtTitEleitorSecao]");
    somenteNumero("input[name=txtTitEleitorSecao]");
    
    //Campo Select Titulo Eleitor Estado
    validSelect("select[name=txtTitEleitorEst]");
    validSelectTReal("select[name=txtTitEleitorEst]");
    
    //Campo Select Titulo Eleitor Cidade
    validSelect("select[name=txtTitEleitorCid]");
    validSelectTReal("select[name=txtTitEleitorCid]");   
    
    //Campo Select Número Coturno
    validSelect("select[name=txtNumCoturno]");
    validSelectTReal("select[name=txtNumCoturno]");
    
    //Campo Select Tamanho Gandola
    validSelect("select[name=txtTamGand]");
    validSelectTReal("select[name=txtTamGand]");
    
    //Campo Select Tamanho Calça
    validSelect("select[name=txtTamCalca]");
    validSelectTReal("select[name=txtTamCalca]");
    
    //Campo Select Tamanho Camuflada
    validSelect("select[name=txtTamCamCmf]");
    validSelectTReal("select[name=txtTamCamCmf]");
    
    //Campo Select Possui CNH
    validSelect("select[name=txtPossuiCNH]");
    validSelectTReal("select[name=txtPossuiCNH]");    
    acionamentoForm("select[name=txtPossuiCNH]", "#divCNH");  
    
        validNumCNH("input[name=txtCNHNum]");
        validNumCNHTReal("input[name=txtCNHNum]");
        somenteNumero("input[name=txtCNHNum]");

        validSelect("select[name=txtCNHCatg]");
        validSelectTReal("select[name=txtCNHCatg]");

        validDataValidadeCNH("input[name=txtCNHDataVal]");
        validDataValidadeCNHTReal("input[name=txtCNHDataVal]");    
// --> Fim Etapa 1: DADOS INDIVIDUAIS

// --> Início Etapa 2: DADOS MILITARES
    //Campo Select Posto/Graduação
    validSelect("select[name=txtPGrad]");
    validSelectTReal("select[name=txtPGrad]");
    
    //Campo Select Quadros, Armas e Serviço
    validSelect("select[name=txtQas]");
    validSelectTReal("select[name=txtQas]");
    
    //Campo Select Companhia
    validSelect("select[name=txtCia]");
    validSelectTReal("select[name=txtCia]");
    
    //Campo Select Comportamento
    validSelect("select[name=txtCptm]");
    validSelectTReal("select[name=txtCptm]");
    
    //Campo Select Divisão ou Seção
    validSelect("select[name=txtDivSec]");
    validSelectTReal("select[name=txtDivSec]");
    
    //Campo Select Setor
    validSelect("select[name=txtSetor]");
    validSelectTReal("select[name=txtSetor]");
    
// --> Fim Etapa 2: DADOS MILITARES

// --> Início Etapa 3: DADOS FAMILIARES
    //Campo Select Possui Cônjuge
    validSelect("select[name=txtPossuiConjuge]");
    validSelectTReal("select[name=txtPossuiConjuge]");
    acionamentoForm("select[name=txtPossuiConjuge]", "#divConjuge");    
    
    //Campo Input Nome Cônjuge
    validInput("input[name=txtNomeConjuge]");
    validInputTReal("input[name=txtNomeConjuge]");
    
    //Campo Input Sobrenome Cônjuge
    validInput("input[name=txtSobrenomeConjuge]");
    validInputTReal("input[name=txtSobrenomeConjuge]");
    
    //Campo Input CPF Cônjuge
    validDataNasc("input[name=txtDataNascConjuge]");
    validDataNascTReal("input[name=txtDataNascConjuge]");
    
    //Campo Input Email Cônjuge
    validEmail("input[name=txtEmailConjuge]");
    validEmailTReal("input[name=txtEmailConjuge]");
    
    //Campo Input Fone Cônjuge
    validFoneCel("input[name=txtFoneConjuge]");
    validFoneCelTReal("input[name=txtFoneConjuge]");
    
    //Campo Select Gravidez
    validSelect("select[name=txtSexoConjuge]");
    validSelectTReal("select[name=txtSexoConjuge]");
    acionamentoFormGravidez("select[name=txtSexoConjuge]", "#divGravidez");    
    
    //Campo Select Gravidez
    validSelect("select[name=txtGravidez]");
    validSelectTReal("select[name=txtGravidez]");
    
    //Campo Select Dependentes   
    validSelect("select[name=txtPossuiDependente]");
    validSelectTReal("select[name=txtPossuiDependente]");
    acionamentoForm("select[name=txtPossuiDependente]" ,"#divDependentes");    
    
// --> Fim Etapa 3: DADOS FAMILIARES

/// --> Início Etapa 4: DADOS DE ENDEREÇO
    //Campo Input CEP Residência
    validCEP("input[name=txtCepEndResid]");
    validCEPTReal("input[name=txtCepEndResid]");
    
    //Campo Input Endereço Residência
    validInput("input[name=txtNomeEndResid]");
    validInputTReal("input[name=txtNomeEndResid]");
    
    //Campo Input Número Residência
    validInput("input[name=txtNumEndResid]");
    validInputTReal("input[name=txtNumEndResid]");
    
    //Campo Input Estado Residência
    validSelect("select[name=txtEstadoEndResid]");
    validSelectTReal("select[name=txtEstadoEndResid]");
    
    //Campo Input Cidade Residência
    validSelect("select[name=txtCidadeEndResid]");
    validSelectTReal("select[name=txtCidadeEndResid]");
    
    //Campo Input Bairro Residência
    validInput("input[name=txtBairroEndResid]");
    validInputTReal("input[name=txtBairroEndResid]");
    
    //Campo Input Complemento Residência
    validInput("input[name=txtCompEndResid]");
    validInputNuloTReal("input[name=txtCompEndResid]");
    
    //Campo Input Ponto de Referencia Residência
    validInput("input[name=txtPtRefEndResid]");
    validInputNuloTReal("input[name=txtPtRefEndResid]");
// --> Fim Etapa 4: DADOS DE ENDEREÇO

// --> Início Etapa 5: DADOS DE CONTATO
    //Campo Input Email
    validEmail("input[name=txtEmail]");
    validEmailTReal("input[name=txtEmail]");
    
    //Campo Input Fone
    validFoneCel("input[name=txtFone01]");
    validFoneCelTReal("input[name=txtFone01]");
    
    //Campo Input Fone
    validFoneCel("input[name=txtFone02]");
    validFoneCelNuloTReal("input[name=txtFone02]");
    
    //Campo Input Nome Familiar
    validInput("input[name=txtFamiliar]");
    validInputTReal("input[name=txtFamiliar]");
    
    //Campo Input Fone Familiar
    validFoneCel("input[name=txtFoneFamiliar]");
    validFoneCelTReal("input[name=txtFoneFamiliar]");
// --> Fim Etapa 5: DADOS DE CONTATO

// --> Início Etapa 6: DADOS ACESSO
    //Campo Input Senha
    validSenha("input[name=txtSenha]");
    validSenhaTReal("input[name=txtSenha]");
// --> Fim Etapa 6: DADOS ACESSO
});

// --> Início Etapa 1: DADOS INDIVIDUAIS
/*$("select[name=txtNatEst]").change(function(){
    limpaCampoSelect("select[name=txtNatCid]");
});*/
$("select[name=txtTitEleitorEst]").change(function(){
    limpaCampoSelect("select[name=txtTitEleitorCid]");
});
$("select[name=txtEstadoEndResid]").change(function(){
    limpaCampoSelect("select[name=txtCidadeEndResid]");
});
// <-- Fim Etapa 1: DADOS INDIVIDUAIS

$(function(){
    var atual_fs, prox_fs, anterior_fs;
    
    function proximo(elemento){
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

    $('#formCadMilitar button[type=button]').click(function(){
       return false; 
    });
    
    // Obrigatoriedade
    // --> Início Etapa 1: DADOS INDIVIDUAIS
    $("button[name=btnProximo2]").click(function(){     
        var dataNasc = $("input[name=txtDataNasc]").val();
        var dataNascSplit = dataNasc.split('-');        
        var diaNasc = dataNascSplit[2];
        var mesNasc = dataNascSplit[1];
        var anoNasc = dataNascSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        
        var idtMil = $("input[name=txtIdtMil]").val().replace("-","").replace(" ","");
        var idtCivil = $("input[name=txtIdtCivil]").val().replace("-","").replace(" ","");
        var cpf = $("input[name=txtCpf]").val().replace(".","").replace(".","").replace("-","");
        var preccp = $("input[name=txtPreccp]").val().replace("-","").replace(" ","");
        var cp = $("input[name=txtCP]").val().replace("-","").replace(" ","");
        
        var dataPraca = $("input[name=txtDataPraca]").val();
        var dataPracaSplit = dataPraca.split('-');        
        var diaPraca = dataPracaSplit[2];
        var mesPraca = dataPracaSplit[1];
        var anoPraca = dataPracaSplit[0];
        
        var titEleitorNum = $("input[name=txtTitEleitorNum]").val().replace(" ","").replace(" ","").replace(" ","");
        var titEleitorZona = $("input[name=txtTitEleitorZona]").val().replace(" ","").replace(" ","").replace(" ","");        
        var titEleitorSecao = $("input[name=txtTitEleitorSecao]").val().replace(" ","").replace(" ","").replace(" ","");
        
        //var foneCel = $("input[name=txtFone]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        
        var filtro = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
        var email = $("input[name=txtEmail]").val();               
        
        var numCNH = $("input[name=txtCNHNum]").val().replace(" ","").replace(" ","").replace(" ","");        
        var dataValCNH = $("input[name=txtCNHDataVal]").val();
        var dataValCNHSplit = dataValCNH.split('-');        
        var diaValCNH = dataValCNHSplit[2];
        var mesValCNH = dataValCNHSplit[1];
        var anoValCNH = dataValCNHSplit[0];
        
        //Identidade Militar
        if(idtMil == ''){
            $("input[name=txtIdtMil]").removeClass("is-valid");
            $("input[name=txtIdtMil]").addClass("is-invalid");
            $("input[name=txtIdtMil]").focus();
            $(".invalid-idtMil").html("Campo Obrigatório!");
        }
        else if(idtMil == '0000000000' || idtMil == '1111111111' || idtMil == '2222222222' || idtMil == '3333333333' ||                 
                idtMil == '4444444444' || idtMil == '5555555555' || idtMil == '6666666666' || idtMil == '7777777777' ||                 
                idtMil == '8888888888' || idtMil == '9999999999'){
            $("input[name=txtIdtMil]").removeClass("is-valid");
            $("input[name=txtIdtMil]").addClass("is-invalid");
            $("input[name=txtIdtMil]").focus();
            $(".invalid-idtMil").html("Identidade Militar Inválida!");  
        } 
        //Identidade Civil
        else if(idtCivil == ''){
            $("input[name=txtIdtCivil]").removeClass("is-valid");
            $("input[name=txtIdtCivil]").addClass("is-invalid");
            $("input[name=txtIdtCivil]").focus();
            $(".invalid-idtCivil").html("Campo Obrigatório!");
        }
        else if(idtCivil == '000000000000' || idtCivil == '111111111111' || idtCivil == '222222222222' || idtCivil == '333333333333' ||                 
                idtCivil == '444444444444' || idtCivil == '555555555555' || idtCivil == '666666666666' || idtCivil == '777777777777' ||                 
                idtCivil == '888888888888' || idtCivil == '999999999999'){
            $("input[name=txtIdtCivil]").removeClass("is-valid");
            $("input[name=txtIdtCivil]").addClass("is-invalid");
            $("input[name=txtIdtCivil]").focus();
            $(".invalid-idtCivil").html("Identidade Civil Inválida!");  
        }
        //Data de Nascimento
        else if(dataNasc == ''){
            $("input[name=txtDataNasc]").removeClass("is-valid");
            $("input[name=txtDataNasc]").addClass("is-invalid");
            $("input[name=txtDataNasc]").focus();
            $(".invalid-dataNasc").html("Campo Obrigatório!");
        }       
        else if((anoNasc == anoAtual) && (mesNasc == mesAtual) && (diaNasc > diaAtual)){
            $("input[name=txtDataNasc]").removeClass("is-valid");
            $("input[name=txtDataNasc]").addClass("is-invalid");
            $("input[name=txtDataNasc]").focus();
            $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNasc == anoAtual) && (mesNasc > mesAtual)){
            $("input[name=txtDataNasc]").removeClass("is-valid");
            $("input[name=txtDataNasc]").addClass("is-invalid");
            $("input[name=txtDataNasc]").focus();
            $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNasc > anoAtual)){
            $("input[name=txtDataNasc]").removeClass("is-valid");
            $("input[name=txtDataNasc]").addClass("is-invalid");
            $("input[name=txtDataNasc]").focus();
            $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoAtual - anoNasc) < 18){
            $("input[name=txtDataNasc]").removeClass("is-valid");
            $("input[name=txtDataNasc]").addClass("is-invalid");
            $("input[name=txtDataNasc]").focus();
            $(".invalid-dataNasc").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNasc) === 18) && (mesNasc < mesAtual)){
            $("input[name=txtDataNasc]").removeClass("is-valid");
            $("input[name=txtDataNasc]").addClass("is-invalid");
            $("input[name=txtDataNasc]").focus();
            $(".invalid-dataNasc").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNasc) === 18) && (mesNasc === mesAtual) && (diaNasc < diaAtual)){
            $("input[name=txtDataNasc]").removeClass("is-valid");
            $("input[name=txtDataNasc]").addClass("is-invalid");
            $("input[name=txtDataNasc]").focus();
            $(".invalid-dataNasc").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }
        //CPF
        else if(cpf == ''){
            $("input[name=txtCpf]").removeClass("is-valid");
            $("input[name=txtCpf]").addClass("is-invalid");
            $("input[name=txtCpf]").focus();
            $(".invalid-cpf").html("Campo Obrigatório!");
        }
        else if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||                 
                cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||                 
                cpf == '88888888888' || cpf == '99999999999'){
            $("input[name=txtCpf]").removeClass("is-valid");
            $("input[name=txtCpf]").addClass("is-invalid");
            $("input[name=txtCpf]").focus();
            $(".invalid-cpf").html("CPF Inválido!");
        }        
        else if(cpfOk == 0){
            // Valida 1o digito	
            var add = 0;	
            for (var i=0; i < 9; i ++)		
                add += parseInt(cpf.charAt(i)) * (10 - i);	
            var rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpf.charAt(9))){
                $("input[name=txtCpf]").removeClass("is-valid");
                $("input[name=txtCpf]").addClass("is-invalid");
                $("input[name=txtCpf]").focus();
                $(".invalid-cpf").html("CPF Inválido!");

            }else{
                $("input[name=txtCpf]").removeClass("is-invalid");
                $("input[name=txtCpf]").addClass("is-valid");
                cpfOk=1;
            }
            // Valida 2o digito	
            add = 0;	
            for (var i = 0; i < 10; i ++)		
                add += parseInt(cpf.charAt(i)) * (11 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)	
                rev = 0;	
            if (rev != parseInt(cpf.charAt(10))){
                $("input[name=txtCpf]").removeClass("is-valid");
                $("input[name=txtCpf]").addClass("is-invalid");
                $("input[name=txtCpf]").focus();
                $(".invalid-cpf").html("CPF Inválido!");
                
            }else{
                $("input[name=txtCpf]").removeClass("is-invalid");
                $("input[name=txtCpf]").addClass("is-valid");
                cpfOk=1;
            }    
        } 
        //Preccp 
        else if(preccp == ''){
            $("input[name=txtPreccp]").removeClass("is-valid");
            $("input[name=txtPreccp]").addClass("is-invalid");
            $("input[name=txtPreccp]").focus();
            $(".invalid-preccp").html("Campo Obrigatório!");
        }
        else if(preccp == '000000000' || preccp == '111111111' || preccp == '222222222' || preccp == '333333333' ||                 
                preccp == '444444444' || preccp == '555555555' || preccp == '666666666' || preccp == '777777777' ||                 
                preccp == '888888888' || preccp == '999999999'){
            $("input[name=txtPreccp]").removeClass("is-valid");
            $("input[name=txtPreccp]").addClass("is-invalid");
            $("input[name=txtPreccp]").focus();
            $(".invalid-preccp").html("Prec-CP Inválida!");  
        }
        //Nome
        else if($("input[name=txtNome]").val() == ''){
            $("input[name=txtNome]").removeClass("is-valid");
            $("input[name=txtNome]").addClass("is-invalid");
            $("input[name=txtNome]").focus();
        }
        //Sobrenome
        else if($("input[name=txtSobrenome]").val() == ''){
            $("input[name=txtSobrenome]").removeClass("is-valid");
            $("input[name=txtSobrenome]").addClass("is-invalid");
            $("input[name=txtSobrenome]").focus();
        }
        //Nome Guerra
        else if($("input[name=txtNomeGuerra]").val() == ''){
            $("input[name=txtNomeGuerra]").removeClass("is-valid");
            $("input[name=txtNomeGuerra]").addClass("is-invalid");
            $("input[name=txtNomeGuerra]").focus();
        }
        //Sexo
        else if($("select[name=txtSexo]").val() == '0'){
            $("select[name=txtSexo]").removeClass("is-valid");
            $("select[name=txtSexo]").addClass("is-invalid");
            $("select[name=txtSexo]").focus();
        }
        //Tipo Sanguineo
        else if($("select[name=txtTS]").val() == '0'){
            $("select[name=txtTS]").removeClass("is-valid");
            $("select[name=txtTS]").addClass("is-invalid");
            $("select[name=txtTS]").focus();
        }
        //Fator RH
        else if($("select[name=txtFatorRH]").val() == '0'){
            $("select[name=txtFatorRH]").removeClass("is-valid");
            $("select[name=txtFatorRH]").addClass("is-invalid");
            $("select[name=txtFatorRH]").focus();
        } 
        //Estado Civil
        else if($("select[name=txtEstCivil]").val() == '0'){
            $("select[name=txtEstCivil]").removeClass("is-valid");
            $("select[name=txtEstCivil]").addClass("is-invalid");
            $("select[name=txtEstCivil]").focus();
        }
        //Escolaridade
        else if($("select[name=txtEscolaridade]").val() == '0'){
            $("select[name=txtEscolaridade]").removeClass("is-valid");
            $("select[name=txtEscolaridade]").addClass("is-invalid");
            $("select[name=txtEscolaridade]").focus();
        }
        //Religiao
        else if($("select[name=txtReligiao]").val() == '0'){
            $("select[name=txtReligiao]").removeClass("is-valid");
            $("select[name=txtReligiao]").addClass("is-invalid");
            $("select[name=txtReligiao]").focus();
        }
        //Naturalidade Estado
        else if($("select[name=txtNatEst]").val() == '0'){
            $("select[name=txtNatEst]").removeClass("is-valid");
            $("select[name=txtNatEst]").addClass("is-invalid");
            $("select[name=txtNatEst]").focus();
        }
        //Naturalidade Cidade
        else if($("select[name=txtNatCid]").val() == '0'){
            $("select[name=txtNatCid]").removeClass("is-valid");
            $("select[name=txtNatCid]").addClass("is-invalid");
            $("select[name=txtNatCid]").focus();
        }
        //Data de Praça
        else if(dataPraca == ''){
            $("input[name=txtDataPraca]").removeClass("is-valid");
            $("input[name=txtDataPraca]").addClass("is-invalid");
            $("input[name=txtDataPraca]").focus();
            $(".invalid-dataPraca").html("Campo Obrigatório!");
        }       
        else if((anoPraca == anoAtual) && (mesPraca == mesAtual) && (diaPraca > diaAtual)){
            $("input[name=txtDataPraca]").removeClass("is-valid");
            $("input[name=txtDataPraca]").addClass("is-invalid");
            $("input[name=txtDataPraca]").focus();
            $(".invalid-dataPraca").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPraca == anoNasc) && (mesPraca == mesNasc) && (diaPraca < diaNasc)){
            $("input[name=txtDataPraca]").removeClass("is-valid");
            $("input[name=txtDataPraca]").addClass("is-invalid");
            $("input[name=txtDataPraca]").focus();
            $(".invalid-dataPraca").html("Data Inválida! Praça antes do nascimento.");
        }       
        else if((anoPraca == anoAtual) && (mesPraca > mesAtual)){
            $("input[name=txtDataPraca]").removeClass("is-valid");
            $("input[name=txtDataPraca]").addClass("is-invalid");
            $("input[name=txtDataPraca]").focus();
            $(".invalid-dataPraca").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPraca == anoNasc) && (mesPraca < mesNasc)){
            $("input[name=txtDataPraca]").removeClass("is-valid");
            $("input[name=txtDataPraca]").addClass("is-invalid");
            $("input[name=txtDataPraca]").focus();
            $(".invalid-dataPraca").html("Data Inválida! Praça antes do nascimento.");
        }       
        else if((anoPraca > anoAtual)){
            $("input[name=txtDataPraca]").removeClass("is-valid");
            $("input[name=txtDataPraca]").addClass("is-invalid");
            $("input[name=txtDataPraca]").focus();
            $(".invalid-dataPraca").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPraca < anoNasc)){
            $("input[name=txtDataPraca]").removeClass("is-valid");
            $("input[name=txtDataPraca]").addClass("is-invalid");
            $("input[name=txtDataPraca]").focus();
            $(".invalid-dataPraca").html("Data Inválida! Praça antes do nascimento.");
        }
        else if((anoPraca - anoNasc) < 18){
            $("input[name=txtDataPraca]").removeClass("is-valid");
            $("input[name=txtDataPraca]").addClass("is-invalid");
            $("input[name=txtDataPraca]").focus();
            $(".invalid-dataPraca").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoPraca - anoNasc) === 18) && (mesPraca < mesNasc)){
            $("input[name=txtDataPraca]").removeClass("is-valid");
            $("input[name=txtDataPraca]").addClass("is-invalid");
            $("input[name=txtDataPraca]").focus();
            $(".invalid-dataPraca").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoPraca - anoNasc) === 18) && (mesPraca === mesNasc) && (diaPraca < diaNasc)){
            $("input[name=txtDataPraca]").removeClass("is-valid");
            $("input[name=txtDataPraca]").addClass("is-invalid");
            $("input[name=txtDataPraca]").focus();
            $(".invalid-dataPraca").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }
        //Titulo Eleitor Registro   
        else if(titEleitorNum == ''){
            $("input[name=txtTitEleitorNum]").removeClass("is-valid");
            $("input[name=txtTitEleitorNum]").addClass("is-invalid");
            $("input[name=txtTitEleitorNum]").focus();
            $(".invalid-titEleitorNum").html("Campo Obrigatório!");
        }
        else if(titEleitorNum == '000000000000' || titEleitorNum == '111111111111' || titEleitorNum == '222222222222' || titEleitorNum == '333333333333' ||                 
                titEleitorNum == '444444444444' || titEleitorNum == '555555555555' || titEleitorNum == '666666666666' || titEleitorNum == '777777777777' ||                 
                titEleitorNum == '888888888888' || titEleitorNum == '999999999999'){
            $("input[name=txtTitEleitorNum]").removeClass("is-valid");
            $("input[name=txtTitEleitorNum]").addClass("is-invalid");
            $("input[name=txtTitEleitorNum]").focus();
            $(".invalid-titEleitorNum").html("Título de Eleitor Inválido!");   
        }        
        //Titulo Eleitor Zona
        else if(titEleitorZona == ''){
            $("input[name=txtTitEleitorZona]").removeClass("is-valid");
            $("input[name=txtTitEleitorZona]").addClass("is-invalid");
            $("input[name=txtTitEleitorZona]").focus();
            $(".invalid-titEleitorZona").html("Campo Obrigatório!");
        }
        else if((titEleitorZona != '') && (titEleitorZona.length < 3)){
            $("input[name=txtTitEleitorZona]").removeClass("is-valid");
            $("input[name=txtTitEleitorZona]").addClass("is-invalid");
            $("input[name=txtTitEleitorZona]").focus();
            $(".invalid-titEleitorZona").html("A Zona é formada por 3 caracteres!");   
        }
        //Titulo Eleitor Seção
        else if(titEleitorSecao == ''){
            $("input[name=txtTitEleitorSecao]").removeClass("is-valid");
            $("input[name=txtTitEleitorSecao]").addClass("is-invalid");
            $("input[name=txtTitEleitorSecao]").focus();
            $(".invalid-titEleitorSecao").html("Campo Obrigatório!");
        }
        else if((titEleitorSecao != '') && (titEleitorSecao.length < 4)){
            $("input[name=txtTitEleitorSecao]").removeClass("is-valid");
            $("input[name=txtTitEleitorSecao]").addClass("is-invalid");
            $("input[name=txtTitEleitorSecao]").focus();
            $(".invalid-titEleitorSecao").html("A Secao é formada por 4 caracteres!");   
        }
        //Titulo Eleitor Estado
        else if($("select[name=txtTitEleitorEst]").val() == '0'){
            $("select[name=txtTitEleitorEst]").removeClass("is-valid");
            $("select[name=txtTitEleitorEst]").addClass("is-invalid");
            $("select[name=txtTitEleitorEst]").focus();
        }
        //Titulo Eleitor Cidade
        else if($("select[name=txtTitEleitorCid]").val() == '0'){
            $("select[name=txtTitEleitorCid]").removeClass("is-valid");
            $("select[name=txtTitEleitorCid]").addClass("is-invalid");
            $("select[name=txtTitEleitorCid]").focus();
        }
        //Uniforme Coturno
        else if($("select[name=txtNumCoturno]").val() == '0'){
            $("select[name=txtNumCoturno]").removeClass("is-valid");
            $("select[name=txtNumCoturno]").addClass("is-invalid");
            $("select[name=txtNumCoturno]").focus();
        }
        //Uniforme Gandola
        else if($("select[name=txtTamGand]").val() == '0'){
            $("select[name=txtTamGand]").removeClass("is-valid");
            $("select[name=txtTamGand]").addClass("is-invalid");
            $("select[name=txtTamGand]").focus();
        }
        //Uniforme Calca
        else if($("select[name=txtTamCalca]").val() == '0'){
            $("select[name=txtTamCalca]").removeClass("is-valid");
            $("select[name=txtTamCalca]").addClass("is-invalid");
            $("select[name=txtTamCalca]").focus();
        }
        //Uniforme Camisa Camuflada
        else if($("select[name=txtTamCamCmf]").val() == '0'){
            $("select[name=txtTamCamCmf]").removeClass("is-valid");
            $("select[name=txtTamCamCmf]").addClass("is-invalid");
            $("select[name=txtTamCamCmf]").focus();
        }
        //Possui CNH
        else if($("select[name=txtPossuiCNH]").val() == '0'){
            $("select[name=txtPossuiCNH]").removeClass("is-valid");
            $("select[name=txtPossuiCNH]").addClass("is-invalid");
            $("select[name=txtPossuiCNH]").focus();
        }
        //Não possui CNH
        else if($("select[name=txtPossuiCNH]").val() == 'n'){              
            proximo($(this));
        }  
        //Possui CNH
        else if($("select[name=txtPossuiCNH]").val() == 's'){            
            if(numCNH == ''){
                $("input[name=txtCNHNum]").removeClass("is-valid");
                $("input[name=txtCNHNum]").addClass("is-invalid");
                $("input[name=txtCNHNum]").focus();
                $(".invalid-numCNH").html("Campo Obrigatório!");
            }
            else if(numCNH == '00000000000' || numCNH == '11111111111' || numCNH == '22222222222' || numCNH == '33333333333' ||                 
                    numCNH == '44444444444' || numCNH == '55555555555' || numCNH == '66666666666' || numCNH == '77777777777' ||                 
                    numCNH == '88888888888' || numCNH == '99999999999'){
                $("input[name=txtCNHNum]").removeClass("is-valid");
                $("input[name=txtCNHNum]").addClass("is-invalid");
                $("input[name=txtCNHNum]").focus();
                $(".invalid-numCNH").html("CNH Inválida!");   
            }
            else if($("select[name=txtCNHCatg]").val() == '0'){
                $("select[name=txtCNHCatg]").removeClass("is-valid");
                $("select[name=txtCNHCatg]").addClass("is-invalid");
                $("select[name=txtCNHCatg]").focus();
            }
            else if(dataValCNH == ''){
                $("input[name=txtCNHDataVal]").removeClass("is-valid");
                $("input[name=txtCNHDataVal]").addClass("is-invalid");
                $("input[name=txtCNHDataVal]").focus();
                $(".invalid-dataValCNH").html("Campo Obrigatório!");
            }       
            else if((anoValCNH == anoAtual) && (mesValCNH == mesAtual) && (diaValCNH < diaAtual)){
                $("input[name=txtCNHDataVal]").removeClass("is-valid");
                $("input[name=txtCNHDataVal]").addClass("is-invalid");
                $("input[name=txtCNHDataVal]").focus();
                $(".invalid-dataValCNH").html("CNH Vencida!");
            }       
            else if((anoValCNH == anoAtual) && (mesValCNH < mesAtual)){
                $("input[name=txtCNHDataVal]").removeClass("is-valid");
                $("input[name=txtCNHDataVal]").addClass("is-invalid");
                $("input[name=txtCNHDataVal]").focus();
                $(".invalid-dataValCNH").html("CNH Vencida!");
            }       
            else if((anoValCNH < anoAtual)){
                $("input[name=txtCNHDataVal]").removeClass("is-valid");
                $("input[name=txtCNHDataVal]").addClass("is-invalid");
                $("input[name=txtCNHDataVal]").focus();
                $(".invalid-dataValCNH").html("CNH Vencida!");
            }
            else{
                proximo($(this));
            }
        }
    });          
    // --> Fim Etapa 1: DADOS INDIVIDUAIS
    // 
    // --> Início Etapa 2: DADOS MILITARES
    $("button[name=btnProximo3]").click(function(){ 
        //Posto/Graduação
        if($("select[name=txtPGrad]").val() == '0'){
            $("select[name=txtPGrad]").removeClass("is-valid");
            $("select[name=txtPGrad]").addClass("is-invalid");
            $("select[name=txtPGrad]").focus();
        }
        //Quadros, Armas e Serviços
        else if($("select[name=txtQas]").val() == '0'){
            $("select[name=txtQas]").removeClass("is-valid");
            $("select[name=txtQas]").addClass("is-invalid");
            $("select[name=txtQas]").focus();
        }
        //Companhia
        else if($("select[name=txtCia]").val() == '0'){
            $("select[name=txtCia]").removeClass("is-valid");
            $("select[name=txtCia]").addClass("is-invalid");
            $("select[name=txtCia]").focus();
        }
        //Comportamento
        else if($("select[name=txtCptm]").val() == '0'){
            $("select[name=txtCptm]").removeClass("is-valid");
            $("select[name=txtCptm]").addClass("is-invalid");
            $("select[name=txtCptm]").focus();
        }
        //Divisão ou Seção
        else if($("select[name=txtDivSec]").val() == '0'){
            $("select[name=txtDivSec]").removeClass("is-valid");
            $("select[name=txtDivSec]").addClass("is-invalid");
            $("select[name=txtDivSec]").focus();
        }
        //Setor
        else if($("select[name=txtSetor]").val() == '0'){
            $("select[name=txtSetor]").removeClass("is-valid");
            $("select[name=txtSetor]").addClass("is-invalid");
            $("select[name=txtSetor]").focus();
        }
        else{
            proximo($(this));
        }
    });
    // --> Fim Etapa 2: DADOS MILITARES
    //
    // --> Início Etapa 3: DADOS FAMILIARES
    $("button[name=btnProximo4]").click(function(){
        var dataNasc = $("input[name=txtDataNascConjuge]").val();
        var dataNascSplit = dataNasc.split('-');        
        var diaNasc = dataNascSplit[2];
        var mesNasc = dataNascSplit[1];
        var anoNasc = dataNascSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        
        var foneCelConjuge = $("input[name=txtFoneConjuge]").val().replace("-","").replace("(","").replace(")","").replace(" ","");        
        var filtro = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
        var emailConjuge = $("input[name=txtEmailConjuge]").val();    
        
        //Conjuge
        if($("select[name=txtPossuiConjuge]").val() == '0'){
            $("select[name=txtPossuiConjuge]").removeClass("is-valid");
            $("select[name=txtPossuiConjuge]").addClass("is-invalid");
            $("select[name=txtPossuiConjuge]").focus();
        }
        //Dependente
        else if($("select[name=txtPossuiDependente]").val() == '0'){
            $("select[name=txtPossuiDependente]").removeClass("is-valid");
            $("select[name=txtPossuiDependente]").addClass("is-invalid");
            $("select[name=txtPossuiDependente]").focus();
        }
        else if($("select[name=txtPossuiConjuge]").val() == 'n'){
            if($("select[name=txtPossuiDependente]").val() == 'n'){
                proximo($(this));
            }
            else if($("select[name=txtPossuiDependente]").val() == 's'){
                for(var i=0;i<($("select[name=txtGrauParentescoDep]").length);i++){
                    if($("input[name=txtNomeDep]").eq(i).val() == '' ){
                        $("input[name=txtNomeDep]").eq(i).removeClass("is-valid");
                        $("input[name=txtNomeDep]").eq(i).addClass("is-invalid");
                        $("input[name=txtNomeDep]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtSobrenomeDep]").eq(i).val() == '' ){
                        $("input[name=txtSobrenomeDep]").eq(i).removeClass("is-valid");
                        $("input[name=txtSobrenomeDep]").eq(i).addClass("is-invalid");
                        $("input[name=txtSobrenomeDep]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtDataNascDep]").eq(i).val() == '' ){
                        $("input[name=txtDataNascDep]").eq(i).removeClass("is-valid");
                        $("input[name=txtDataNascDep]").eq(i).addClass("is-invalid");
                        $("input[name=txtDataNascDep]").eq(i).focus();
                        break;
                    }
                    else if($("select[name=txtGrauParentescoDep]").eq(i).val() == '0' ){
                        $("select[name=txtGrauParentescoDep]").eq(i).removeClass("is-valid");
                        $("select[name=txtGrauParentescoDep]").eq(i).addClass("is-invalid");
                        $("select[name=txtGrauParentescoDep]").eq(i).focus();
                        break;
                    }
                    else if(($("select[name=txtGrauParentescoDep]").eq($("select[name=txtGrauParentescoDep]").length-1).val()) != '0'){
                        proximo($(this));
                    }
                }
            }
        }
        else if($("select[name=txtPossuiConjuge]").val() == 's'){
            if($("input[name=txtNomeConjuge]").val() == ''){
                $("input[name=txtNomeConjuge]").removeClass("is-valid");
                $("input[name=txtNomeConjuge]").addClass("is-invalid");
                $("input[name=txtNomeConjuge]").focus();
            }
            else if($("input[name=txtSobrenomeConjuge]").val() == ''){
                $("input[name=txtSobrenomeConjuge]").removeClass("is-valid");
                $("input[name=txtSobrenomeConjuge]").addClass("is-invalid");
                $("input[name=txtSobrenomeConjuge]").focus();
            }
            //Data de Nascimento Conjuge
            else if(dataNasc == ''){
                $("input[name=txtDataNascConjuge]").removeClass("is-valid");
                $("input[name=txtDataNascConjuge]").addClass("is-invalid");
                $("input[name=txtDataNascConjuge]").focus();
                $(".invalid-dataNasc").html("Campo Obrigatório!");
            }       
            else if((anoNasc == anoAtual) && (mesNasc == mesAtual) && (diaNasc > diaAtual)){
                $("input[name=txtDataNascConjuge]").removeClass("is-valid");
                $("input[name=txtDataNascConjuge]").addClass("is-invalid");
                $("input[name=txtDataNascConjuge]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
            }       
            else if((anoNasc == anoAtual) && (mesNasc > mesAtual)){
                $("input[name=txtDataNascConjuge]").removeClass("is-valid");
                $("input[name=txtDataNascConjuge]").addClass("is-invalid");
                $("input[name=txtDataNascConjuge]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
            }       
            else if((anoNasc > anoAtual)){
                $("input[name=txtDataNascConjuge]").removeClass("is-valid");
                $("input[name=txtDataNascConjuge]").addClass("is-invalid");
                $("input[name=txtDataNascConjuge]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
            }            
            else if(emailConjuge == ''){
                $("input[name=txtEmailConjuge]").removeClass("is-valid");
                $("input[name=txtEmailConjuge]").addClass("is-invalid");
                $("input[name=txtEmailConjuge]").focus();
                $(".invalid-email").html("Campo Obrigatório!");
            }        
            else if(filtro.test(emailConjuge) == false){
                $("input[name=txtEmailConjuge]").removeClass("is-valid");
                $("input[name=txtEmailConjuge]").addClass("is-invalid");
                $("input[name=txtEmailConjuge]").focus();
                $(".invalid-email").html("Email Inválido!");
            }
            else if(foneCelConjuge == ''){
                $("input[name=txtFoneConjuge]").removeClass("is-valid");
                $("input[name=txtFoneConjuge]").addClass("is-invalid");
                $("input[name=txtFoneConjuge]").focus();
                $(".invalid-foneCel").html("Campo Obrigatório!");
            }
            else if(foneCelConjuge == '00000000000' || foneCelConjuge == '11111111111' || foneCelConjuge == '22222222222' || foneCelConjuge == '33333333333' ||                 
                    foneCelConjuge == '44444444444' || foneCelConjuge == '55555555555' || foneCelConjuge == '66666666666' || foneCelConjuge == '77777777777' ||                 
                    foneCelConjuge == '88888888888' || foneCelConjuge == '99999999999'){
                $("input[name=txtFoneConjuge]").removeClass("is-valid");
                $("input[name=txtFoneConjuge]").addClass("is-invalid");
                $("input[name=txtFoneConjuge]").focus();
                $(".invalid-foneCel").html("Fone Inválido!");
            }
            //Gravidez
            else if($("select[name=txtSexoConjuge]").val() == '0'){
                $("select[name=txtSexoConjuge]").removeClass("is-valid");
                $("select[name=txtSexoConjuge]").addClass("is-invalid");
                $("select[name=txtSexoConjuge]").focus();
            }
            else if($("select[name=txtSexoConjuge]").val() == 'F'){
                if($("select[name=txtGravidez]").val() == '0'){
                    $("select[name=txtGravidez]").removeClass("is-valid");
                    $("select[name=txtGravidez]").addClass("is-invalid");
                    $("select[name=txtGravidez]").focus();
                }
                
                else if($("select[name=txtPossuiDependente]").val() == 'n'){
                    proximo($(this));
                }
                else if($("select[name=txtPossuiDependente]").val() == 's'){
                    for(var i=0;i<($("select[name=txtGrauParentescoDep]").length);i++){
                        if($("input[name=txtNomeDep]").eq(i).val() == '' ){
                            $("input[name=txtNomeDep]").eq(i).removeClass("is-valid");
                            $("input[name=txtNomeDep]").eq(i).addClass("is-invalid");
                            $("input[name=txtNomeDep]").eq(i).focus();
                            break;
                        }
                        else if($("input[name=txtSobrenomeDep]").eq(i).val() == '' ){
                            $("input[name=txtSobrenomeDep]").eq(i).removeClass("is-valid");
                            $("input[name=txtSobrenomeDep]").eq(i).addClass("is-invalid");
                            $("input[name=txtSobrenomeDep]").eq(i).focus();
                            break;
                        }
                        else if($("input[name=txtDataNascDep]").eq(i).val() == '' ){
                            $("input[name=txtDataNascDep]").eq(i).removeClass("is-valid");
                            $("input[name=txtDataNascDep]").eq(i).addClass("is-invalid");
                            $("input[name=txtDataNascDep]").eq(i).focus();
                            break;
                        }
                        else if($("select[name=txtGrauParentescoDep]").eq(i).val() == '0' ){
                            $("select[name=txtGrauParentescoDep]").eq(i).removeClass("is-valid");
                            $("select[name=txtGrauParentescoDep]").eq(i).addClass("is-invalid");
                            $("select[name=txtGrauParentescoDep]").eq(i).focus();
                            break;
                        }
                        else if(($("select[name=txtGrauParentescoDep]").eq($("select[name=txtGrauParentescoDep]").length-1).val()) != '0'){
                            proximo($(this));
                        }
                    }
                }
            }
            else if($("select[name=txtSexoConjuge]").val() == 'M'){
                if($("select[name=txtPossuiDependente]").val() == 'n'){
                    proximo($(this));
                }
                else if($("select[name=txtPossuiDependente]").val() == 's'){
                    for(var i=0;i<($("select[name=txtGrauParentescoDep]").length);i++){
                        if($("input[name=txtNomeDep]").eq(i).val() == '' ){
                            $("input[name=txtNomeDep]").eq(i).removeClass("is-valid");
                            $("input[name=txtNomeDep]").eq(i).addClass("is-invalid");
                            $("input[name=txtNomeDep]").eq(i).focus();
                            break;
                        }
                        else if($("input[name=txtSobrenomeDep]").eq(i).val() == '' ){
                            $("input[name=txtSobrenomeDep]").eq(i).removeClass("is-valid");
                            $("input[name=txtSobrenomeDep]").eq(i).addClass("is-invalid");
                            $("input[name=txtSobrenomeDep]").eq(i).focus();
                            break;
                        }
                        else if($("input[name=txtDataNascDep]").eq(i).val() == '' ){
                            $("input[name=txtDataNascDep]").eq(i).removeClass("is-valid");
                            $("input[name=txtDataNascDep]").eq(i).addClass("is-invalid");
                            $("input[name=txtDataNascDep]").eq(i).focus();
                            break;
                        }
                        else if($("select[name=txtGrauParentescoDep]").eq(i).val() == '0' ){
                            $("select[name=txtGrauParentescoDep]").eq(i).removeClass("is-valid");
                            $("select[name=txtGrauParentescoDep]").eq(i).addClass("is-invalid");
                            $("select[name=txtGrauParentescoDep]").eq(i).focus();
                            break;
                        }
                        else if(($("select[name=txtGrauParentescoDep]").eq($("select[name=txtGrauParentescoDep]").length-1).val()) != '0'){
                            proximo($(this));
                        }
                    }
                }
            }
        }
        
    });
    // --> Fim Etapa 3: DADOS FAMILIARES
    // 
    // --> Início Etapa 4: DADOS ENDEREÇO
    $("button[name=btnProximo5]").click(function(){
        var cepEndResid = $("input[name=txtCepEndResid]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        //Residência
        if(cepEndResid == ''){
            $("input[name=txtCepEndResid]").removeClass("is-valid");
            $("input[name=txtCepEndResid]").addClass("is-invalid");
            $("input[name=txtCepEndResid]").focus();
            $(".invalid-cep").html("Campo Obrigatório!");
        }
        else if(cepEndResid == '00000000' || cepEndResid == '11111111' || cepEndResid == '22222222' || cepEndResid == '33333333' ||                 
                cepEndResid == '44444444' || cepEndResid == '55555555' || cepEndResid == '66666666' || cepEndResid == '77777777' ||                 
                cepEndResid == '88888888' || cepEndResid == '99999999'){
            $("input[name=txtCepEndResid]").removeClass("is-valid");
            $("input[name=txtCepEndResid]").addClass("is-invalid");
            $("input[name=txtCepEndResid]").focus();
            $(".invalid-cep").html("CEP Inválido!");       
        }
        else if($("input[name=txtNomeEndResid]").val() == ''){
            $("input[name=txtNomeEndResid]").removeClass("is-valid");
            $("input[name=txtNomeEndResid]").addClass("is-invalid");
            $("input[name=txtNomeEndResid]").focus();                
        }
        else if($("input[name=txtNumEndResid]").val() == ''){
            $("input[name=txtNumEndResid]").removeClass("is-valid");
            $("input[name=txtNumEndResid]").addClass("is-invalid");
            $("input[name=txtNumEndResid]").focus();                
        }
        else if($("select[name=txtEstadoEndResid]").val() == '0'){
            $("select[name=txtEstadoEndResid]").removeClass("is-valid");
            $("select[name=txtEstadoEndResid]").addClass("is-invalid");
            $("select[name=txtEstadoEndResid]").focus();
        }
        else if($("select[name=txtCidadeEndResid]").val() == '0'){
            $("select[name=txtCidadeEndResid]").removeClass("is-valid");
            $("select[name=txtCidadeEndResid]").addClass("is-invalid");
            $("select[name=txtCidadeEndResid]").focus();
        }
        else if($("input[name=txtBairroEndResid]").val() == ''){
            $("input[name=txtBairroEndResid]").removeClass("is-valid");
            $("input[name=txtBairroEndResid]").addClass("is-invalid");
            $("input[name=txtBairroEndResid]").focus();
        }
        else{
            proximo($(this));
        }
    });
    // --> Fim Etapa 4: DADOS ENDEREÇO
    
    // --> Fim Etapa 5: DADOS CONTATO
    $("button[name=btnProximo6]").click(function(){               
        var filtro = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
        var email = $("input[name=txtEmail]").val(); 
        var foneCel01 = $("input[name=txtFone01]").val().replace("-","").replace("(","").replace(")","").replace(" ",""); 
        var foneCelFamiliar = $("input[name=txtFoneFamiliar]").val().replace("-","").replace("(","").replace(")","").replace(" ",""); 
        
        if(email == ''){
            $("input[name=txtEmail]").removeClass("is-valid");
            $("input[name=txtEmail]").addClass("is-invalid");
            $("input[name=txtEmail]").focus();
            $(".invalid-email").html("Campo Obrigatório!");
        }        
        else if(filtro.test(email) == false){
            $("input[name=txtEmail]").removeClass("is-valid");
            $("input[name=txtEmail]").addClass("is-invalid");
            $("input[name=txtEmail]").focus();
            $(".invalid-email").html("Email Inválido!");
        }
        else if(foneCel01 == ''){
            $("input[name=txtFone01]").removeClass("is-valid");
            $("input[name=txtFone01]").addClass("is-invalid");
            $("input[name=txtFone01]").focus();
            $(".invalid-foneCel").html("Campo Obrigatório!");
        }
        else if(foneCel01 == '00000000000' || foneCel01 == '11111111111' || foneCel01 == '22222222222' || foneCel01 == '33333333333' ||                 
                foneCel01 == '44444444444' || foneCel01 == '55555555555' || foneCel01 == '66666666666' || foneCel01 == '77777777777' ||                 
                foneCel01 == '88888888888' || foneCel01 == '99999999999'){
            $("input[name=txtFone01]").removeClass("is-valid");
            $("input[name=txtFone01]").addClass("is-invalid");
            $("input[name=txtFone01]").focus();
            $(".invalid-foneCel").html("Fone Inválido!");
        }
        else if($("input[name=txtFamiliar]").val() == ''){
            $("input[name=txtFamiliar]").removeClass("is-valid");
            $("input[name=txtFamiliar]").addClass("is-invalid");
            $("input[name=txtFamiliar]").focus();
        }
        else if(foneCelFamiliar == ''){
            $("input[name=txtFoneFamiliar]").removeClass("is-valid");
            $("input[name=txtFoneFamiliar]").addClass("is-invalid");
            $("input[name=txtFoneFamiliar]").focus();
            $(".invalid-foneCel").html("Campo Obrigatório!");
        }
        else if(foneCelFamiliar == '00000000000' || foneCelFamiliar == '11111111111' || foneCelFamiliar == '22222222222' || foneCelFamiliar == '33333333333' ||                 
                foneCelFamiliar == '44444444444' || foneCelFamiliar == '55555555555' || foneCelFamiliar == '66666666666' || foneCelFamiliar == '77777777777' ||                 
                foneCelFamiliar == '88888888888' || foneCelFamiliar == '99999999999'){
            $("input[name=txtFoneFamiliar]").removeClass("is-valid");
            $("input[name=txtFoneFamiliar]").addClass("is-invalid");
            $("input[name=txtFoneFamiliar]").focus();
            $(".invalid-foneCel").html("Fone Inválido!");
        }
        else{
            proximo($(this));
        }
    });
    // --> Fim Etapa 5: DADOS CONTATO
    
    // --> Início Etapa 6: DADOS ACESSO
    $("button[name=btnSalvarAtualizacao]").click(function(){  
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
    // --> Fim Etapa 6: DADOS ACESSO
});

