//Valida ao carregar página
function validFone(campo){  
    var foneOM = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    if(foneOM == ''){
    }
    else if(foneOM == '0000000000' || foneOM == '1111111111' || foneOM == '2222222222' || foneOM == '3333333333' ||                 
            foneOM == '4444444444' || foneOM == '5555555555' || foneOM == '6666666666' || foneOM == '7777777777' ||                 
            foneOM == '8888888888' || foneOM == '9999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-fone").html("Fone Inválido!");            
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};
function validCEP(campo){  
    var endCepOM = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    if(endCepOM == ''){
    }
    else if(endCepOM == '00000000' || endCepOM == '11111111' || endCepOM == '22222222' || endCepOM == '33333333' ||                 
            endCepOM == '44444444' || endCepOM == '55555555' || endCepOM == '66666666' || endCepOM == '77777777' ||                 
            endCepOM == '88888888' || endCepOM == '99999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-cep").html("CEP Inválido!");            
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};
function validDataNascAl(campo){  
    var dataNascAl = $(campo).val();
    var dataNascAlSplit = dataNascAl.split('-');        
    var diaNascAl = dataNascAlSplit[2];
    var mesNascAl = dataNascAlSplit[1];
    var anoNascAl = dataNascAlSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();

    if(dataNascAl == ''){
    }       
    else if((anoNascAl == anoAtual) && (mesNascAl == mesAtual) && (diaNascAl > diaAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("Data Inválida!");
    }       
    else if((anoNascAl == anoAtual) && (mesNascAl > mesAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("Data Inválida!");
    }       
    else if((anoNascAl > anoAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("Data Inválida!");
    }       
    else if((anoAtual - anoNascAl) < 18){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }       
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};
function validIdtMilAl(campo){  
    var idtMilAl = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    if(idtMilAl == ''){
    }
    else if(idtMilAl == '0000000000' || idtMilAl == '1111111111' || idtMilAl == '2222222222' || idtMilAl == '3333333333' ||                 
            idtMilAl == '4444444444' || idtMilAl == '5555555555' || idtMilAl == '6666666666' || idtMilAl == '7777777777' ||                 
            idtMilAl == '8888888888' || idtMilAl == '9999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-idtMilAl").html("Identidade Militar Inválida!");             
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};
function validCPFAl(campo){
    var cpfAl = $(campo).val().replace(".","").replace(".","").replace("-","");
    if(cpfAl == ''){
    }
    else if(cpfAl == '00000000000' || cpfAl == '11111111111' || cpfAl == '22222222222' || cpfAl == '33333333333' ||                 
            cpfAl == '44444444444' || cpfAl == '55555555555' || cpfAl == '66666666666' || cpfAl == '77777777777' ||                 
            cpfAl == '88888888888' || cpfAl == '99999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-cpfAl").html("CPF Inválido!");            
    }else{
        // Valida 1o digito	
        var add = 0;	
        for (var i=0; i < 9; i ++)		
            add += parseInt(cpfAl.charAt(i)) * (10 - i);	
            var rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpfAl.charAt(9))){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpfAl").html("CPF Inválido!");
            }else{
                $(campo).removeClass("is-invalid");
                $(campo).addClass("is-valid");
            }
        // Valida 2o digito	
        add = 0;	
        for (var i = 0; i < 10; i ++)		
            add += parseInt(cpfAl.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
            rev = 0;	
        if (rev != parseInt(cpfAl.charAt(10))){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpfAl").html("CPF Inválido!");
        }else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }    
    } 
};
//Valida ao mudar o valor em tempo real
function validFoneTReal(campo){  
    $(campo).change(function(){
        var foneOM = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
        if(foneOM == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-fone").html("Campo Obrigatório!");
        }
        else if(foneOM == '0000000000' || foneOM == '1111111111' || foneOM == '2222222222' || foneOM == '3333333333' ||                 
                foneOM == '4444444444' || foneOM == '5555555555' || foneOM == '6666666666' || foneOM == '7777777777' ||                 
                foneOM == '8888888888' || foneOM == '9999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-fone").html("Fone Inválido!");            
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};
function validCEPTReal(campo){  
    $(campo).change(function(){
        var endCepOM = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
        if(endCepOM == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cep").html("Campo Obrigatório!");
        }
        else if(endCepOM == '00000000' || endCepOM == '11111111' || endCepOM == '22222222' || endCepOM == '33333333' ||                 
                endCepOM == '44444444' || endCepOM == '55555555' || endCepOM == '66666666' || endCepOM == '77777777' ||                 
                endCepOM == '88888888' || endCepOM == '99999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cep").html("CEP Inválido!");            
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};
function validDataNascAlTReal(campo){  
    $(campo).change(function(){
        var dataNascAl = $(campo).val();
        var dataNascAlSplit = dataNascAl.split('-');        
        var diaNascAl = dataNascAlSplit[2];
        var mesNascAl = dataNascAlSplit[1];
        var anoNascAl = dataNascAlSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        
        if(dataNascAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("Campo Obrigatório!");
        }       
        else if((anoNascAl == anoAtual) && (mesNascAl == mesAtual) && (diaNascAl > diaAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("Data Inválida!");
        }       
        else if((anoNascAl == anoAtual) && (mesNascAl > mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("Data Inválida!");
        }       
        else if((anoNascAl > anoAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("Data Inválida!");
        }       
        else if((anoAtual - anoNascAl) < 18){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }       
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });    
};

function validIdtMilAlTReal(campo){  
    $(campo).change(function(){
        var idtMilAl = $(campo).val().replace("-","").replace(" ","");
        if(idtMilAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-idtMilAl").html("Campo Obrigatório!");
        }
        else if(idtMilAl == '0000000000' || idtMilAl == '1111111111' || idtMilAl == '2222222222' || idtMilAl == '3333333333' ||                 
                idtMilAl == '4444444444' || idtMilAl == '5555555555' || idtMilAl == '6666666666' || idtMilAl == '7777777777' ||                 
                idtMilAl == '8888888888' || idtMilAl == '9999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-idtMilAl").html("Identidade Militar Inválida!");            
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};
function validCPFAlTReal(campo){  
    $(campo).change(function(){
        var cpfAl = $(campo).val().replace(".","").replace(".","").replace("-","");
        if(cpfAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpfAl").html("Campo Obrigatório!");
        }
        else if(cpfAl == '00000000000' || cpfAl == '11111111111' || cpfAl == '22222222222' || cpfAl == '33333333333' ||                 
                cpfAl == '44444444444' || cpfAl == '55555555555' || cpfAl == '66666666666' || cpfAl == '77777777777' ||                 
                cpfAl == '88888888888' || cpfAl == '99999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpfAl").html("CPF Inválido!");            
        }else{
            // Valida 1o digito	
            var add = 0;	
            for (var i=0; i < 9; i ++)		
                add += parseInt(cpfAl.charAt(i)) * (10 - i);	
                var rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)		
                    rev = 0;	
                if (rev != parseInt(cpfAl.charAt(9))){
                    $(campo).removeClass("is-valid");
                    $(campo).addClass("is-invalid");
                    $(".invalid-cpfAl").html("CPF Inválido!");
                }else{
                    $(campo).removeClass("is-invalid");
                    $(campo).addClass("is-valid");
                }
            // Valida 2o digito	
            add = 0;	
            for (var i = 0; i < 10; i ++)		
                add += parseInt(cpfAl.charAt(i)) * (11 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)	
                rev = 0;	
            if (rev != parseInt(cpfAl.charAt(10))){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpfAl").html("CPF Inválido!");
            }else{
                $(campo).removeClass("is-invalid");
                $(campo).addClass("is-valid");
            }    
        }        
    });
};



//Validação ao recarregar a página
$(document).ready(function(){
    //Etapa 1: OM ATUAL
    //Campo Select Força
    if($("select[name=txtForca]").val() != '0'){
        $("select[name=txtForca]").removeClass("is-invalid");
        $("select[name=txtForca]").addClass("is-valid");
    }
    //Campo Input Grande Comando
    if($("input[name=txtGCmdo]").val() != ''){
        $("input[name=txtGCmdo]").removeClass("is-invalid");
        $("input[name=txtGCmdo]").addClass("is-valid");
    }
    //Campo Input Escalão Ennquadrante
    if($("input[name=txtEscEnq]").val() != ''){
        $("input[name=txtEscEnq]").removeClass("is-invalid");
        $("input[name=txtEscEnq]").addClass("is-valid");
    }
    //Campo Input Nome OM
    if($("input[name=txtNomeOM]").val() != ''){
        $("input[name=txtNomeOM]").removeClass("is-invalid");
        $("input[name=txtNomeOM]").addClass("is-valid");
    }
    //Campo Input Abreviatura OM
    if($("input[name=txtAbrevOM]").val() != ''){
        $("input[name=txtAbrevOM]").removeClass("is-invalid");
        $("input[name=txtAbrevOM]").addClass("is-valid");
    }
    //Campo Input Fone    
    validFone("input[name=txtFoneOM]");
    validFoneTReal("input[name=txtFoneOM]");
    
    //Campo Select Posto/Graduação Cmt OM
    if($("select[name=txtPGradCmtOM]").val() != '0'){
        $("select[name=txtPGradCmtOM]").removeClass("is-invalid");
        $("select[name=txtPGradCmtOM]").addClass("is-valid");
    }
    //Campo Input Nome Cmt OM
    if($("input[name=txtNomeCmtOM]").val() != ''){
        $("input[name=txtNomeCmtOM]").removeClass("is-invalid");
        $("input[name=txtNomeCmtOM]").addClass("is-valid");
    }
    //Campo Input Sobrenome Cmt OM
    if($("input[name=txtSobrenomeCmtOM]").val() != ''){
        $("input[name=txtSobrenomeCmtOM]").removeClass("is-invalid");
        $("input[name=txtSobrenomeCmtOM]").addClass("is-valid");
    }
    //Campo Input Nome de Guerra Cmt OM
    if($("input[name=txtNomeGuerraCmtOM]").val() != ''){
        $("input[name=txtNomeGuerraCmtOM]").removeClass("is-invalid");
        $("input[name=txtNomeGuerraCmtOM]").addClass("is-valid");
    }
    //Campo Select Posto/Graduação Ch Imediato
    if($("select[name=txtPGradChImtoOM]").val() != '0'){
        $("select[name=txtPGradChImtoOM]").removeClass("is-invalid");
        $("select[name=txtPGradChImtoOM]").addClass("is-valid");
    }
    //Campo Input Nome Ch Imediato
    if($("input[name=txtNomeChImtoOM]").val() != ''){
        $("input[name=txtNomeChImtoOM]").removeClass("is-invalid");
        $("input[name=txtNomeChImtoOM]").addClass("is-valid");
    }
    //Campo Input Sobrenome Ch Imediato
    if($("input[name=txtSobrenomeChImtoOM]").val() != ''){
        $("input[name=txtSobrenomeChImtoOM]").removeClass("is-invalid");
        $("input[name=txtSobrenomeChImtoOM]").addClass("is-valid");
    }
    //Campo Input Nome de Guerra Ch Imediato
    if($("input[name=txtNomeGuerraChImtoOM]").val() != ''){
        $("input[name=txtNomeGuerraChImtoOM]").removeClass("is-invalid");
        $("input[name=txtNomeGuerraChImtoOM]").addClass("is-valid");
    }
    //Campo Input CEP
    validCEP("input[name=txtEndCepOM]");
    validCEPTReal("input[name=txtEndCepOM]");
    
    
    //Campo Select Logradouro
    if($("select[name=txtEndLogOM]").val() != '0'){
        $("select[name=txtEndLogOM]").removeClass("is-invalid");
        $("select[name=txtEndLogOM]").addClass("is-valid");
    }
    //Campo Input Endereço
    if($("input[name=txtEndNomeOM]").val() != ''){
        $("input[name=txtEndNomeOM]").removeClass("is-invalid");
        $("input[name=txtEndNomeOM]").addClass("is-valid");
    }
    //Campo Input Número
    if($("input[name=txtEndNumOM]").val() != ''){
        $("input[name=txtEndNumOM]").removeClass("is-invalid");
        $("input[name=txtEndNumOM]").addClass("is-valid");
    }
    //Campo Select País
    if($("select[name=txtEndPaisOM]").val() != '0'){
        $("select[name=txtEndPaisOM]").removeClass("is-invalid");
        $("select[name=txtEndPaisOM]").addClass("is-valid");
    }
    //Campo Select Estado
    if($("select[name=txtEndEstadoOM]").val() != '0'){
        $("select[name=txtEndEstadoOM]").removeClass("is-invalid");
        $("select[name=txtEndEstadoOM]").addClass("is-valid");
    }
    //Campo Select Cidade
    if($("select[name=txtEndCidadeOM]").val() != '0'){
        $("select[name=txtEndCidadeOM]").removeClass("is-invalid");
        $("select[name=txtEndCidadeOM]").addClass("is-valid");
    }
    //Campo Select Bairro
    if($("select[name=txtEndBairroOM]").val() != '0'){
        $("select[name=txtEndBairroOM]").removeClass("is-invalid");
        $("select[name=txtEndBairroOM]").addClass("is-valid");
    }
    
    //Etapa 2: DADOS INDIVIDUAIS
    //Campo Select Posto/Graduação
    if($("select[name=txtPGradAl]").val() != '0'){
        $("select[name=txtPGradAl]").removeClass("is-invalid");
        $("select[name=txtPGradAl]").addClass("is-valid");
    }
    //Campo Select Arma
    if($("select[name=txtArmaAl]").val() != '0'){
        $("select[name=txtArmaAl]").removeClass("is-invalid");
        $("select[name=txtArmaAl]").addClass("is-valid");
    }
    //Campo Input Data de Nascimento
    validDataNascAl("input[name=txtDataNascAl]");
    validDataNascAlTReal("input[name=txtDataNascAl]");
    
    //Campo Input Nome
    if($("input[name=txtNomeAl]").val() != ''){
        $("input[name=txtNomeAl]").removeClass("is-invalid");
        $("input[name=txtNomeAl]").addClass("is-valid");
    }
    //Campo Input Sobrenome
    if($("input[name=txtSobrenomeAl]").val() != ''){
        $("input[name=txtSobrenomeAl]").removeClass("is-invalid");
        $("input[name=txtSobrenomeAl]").addClass("is-valid");
    }
    //Campo Input Nome de Guerra
    if($("input[name=txtNomeGuerraAl]").val() != ''){
        $("input[name=txtNomeGuerraAl]").removeClass("is-invalid");
        $("input[name=txtNomeGuerraAl]").addClass("is-valid");
    }
    //Campo Input Identidade Militar
    validIdtMilAl("input[name=txtIdtMilAl]");
    validIdtMilAlTReal("input[name=txtIdtMilAl]");
    
    //Campo Input CPF
    validCPFAl("input[name=txtCpfAl]");
    //validCPFAlTReal("input[name=txtCpfAl]");
    
    //Campo Input Última Data de Praça
    if($("input[name=txtUltDataPracaAl]").val() != ''){
        $("input[name=txtUltDataPracaAl]").removeClass("is-invalid");
        $("input[name=txtUltDataPracaAl]").addClass("is-valid");
    }
    //Campo Input Naturalidade (Estado)
    if($("input[name=txtNatEstAl]").val() != ''){
        $("input[name=txtNatEstAl]").removeClass("is-invalid");
        $("input[name=txtNatEstAl]").addClass("is-valid");
    }
    //Campo Input Naturalidade (Cidade)
    if($("input[name=txtNatCidAl]").val() != ''){
        $("input[name=txtNatCidAl]").removeClass("is-invalid");
        $("input[name=txtNatCidAl]").addClass("is-valid");
    }
    //Campo Select Estado Civil
    if($("select[name=txtEstCivilAl]").val() != '0'){
        $("select[name=txtEstCivilAl]").removeClass("is-invalid");
        $("select[name=txtEstCivilAl]").addClass("is-valid");
    }
    //Campo Select Sexo
    if($("select[name=txtSexoAl]").val() != '0'){
        $("select[name=txtSexoAl]").removeClass("is-invalid");
        $("select[name=txtSexoAl]").addClass("is-valid");
    }
    //Campo Select Tipo Sanguíneo
    if($("select[name=txtTSAl]").val() != '0'){
        $("select[name=txtTSAl]").removeClass("is-invalid");
        $("select[name=txtTSAl]").addClass("is-valid");
    }
    //Campo Select Fator RH
    if($("select[name=txtFatorRHAl]").val() != '0'){
        $("select[name=txtFatorRHAl]").removeClass("is-invalid");
        $("select[name=txtFatorRHAl]").addClass("is-valid");
    }
    //Campo Input Titulo Eleitoral
    if($("input[name=txtTitEleitorNumAl]").val() != ''){
        $("input[name=txtTitEleitorNumAl]").removeClass("is-invalid");
        $("input[name=txtTitEleitorNumAl]").addClass("is-valid");
    }
    //Campo Input Zona Eleitoral
    if($("input[name=txtTitEleitorZonaAl]").val() != ''){
        $("input[name=txtTitEleitorZonaAl]").removeClass("is-invalid");
        $("input[name=txtTitEleitorZonaAl]").addClass("is-valid");
    }
    //Campo Input Seção Eleitoral
    if($("input[name=txtTitEleitorSecaoAl]").val() != ''){
        $("input[name=txtTitEleitorSecaoAl]").removeClass("is-invalid");
        $("input[name=txtTitEleitorSecaoAl]").addClass("is-valid");
    }
    //Campo Input Titulo Eleitor Estado
    if($("input[name=txtTitEleitorEstAl]").val() != ''){
        $("input[name=txtTitEleitorEstAl]").removeClass("is-invalid");
        $("input[name=txtTitEleitorEstAl]").addClass("is-valid");
    }
    //Campo Input Titulo Eleitor Cidade
    if($("input[name=txtTitEleitorCidAl]").val() != ''){
        $("input[name=txtTitEleitorCidAl]").removeClass("is-invalid");
        $("input[name=txtTitEleitorCidAl]").addClass("is-valid");
    }
    //Campo Input Banco
    if($("input[name=txtBancoAl]").val() != ''){
        $("input[name=txtBancoAl]").removeClass("is-invalid");
        $("input[name=txtBancoAl]").addClass("is-valid");
    }
    //Campo Input Agência
    if($("input[name=txtAgenciaAl]").val() != ''){
        $("input[name=txtAgenciaAl]").removeClass("is-invalid");
        $("input[name=txtAgenciaAl]").addClass("is-valid");
    }
    //Campo Input Conta
    if($("input[name=txtContaAl]").val() != ''){
        $("input[name=txtContaAl]").removeClass("is-invalid");
        $("input[name=txtContaAl]").addClass("is-valid");
    }
    //Campo Input Email
    if($("input[name=txtEmailAl]").val() != ''){
        $("input[name=txtEmailAl]").removeClass("is-invalid");
        $("input[name=txtEmailAl]").addClass("is-valid");
    }
    //Campo Input Fone
    if($("input[name=txtFoneAl]").val() != ''){
        $("input[name=txtFoneAl]").removeClass("is-invalid");
        $("input[name=txtFoneAl]").addClass("is-valid");
    }
    //Campo Select Número Coturno
    if($("select[name=txtNumCoturnoAl]").val() != '0'){
        $("select[name=txtNumCoturnoAl]").removeClass("is-invalid");
        $("select[name=txtNumCoturnoAl]").addClass("is-valid");
    }
    //Campo Select Tamanho Gandola
    if($("select[name=txtTamGandAl]").val() != '0'){
        $("select[name=txtTamGandAl]").removeClass("is-invalid");
        $("select[name=txtTamGandAl]").addClass("is-valid");
    }
    //Campo Select Tamanho Calça
    if($("select[name=txtTamCalcaAl]").val() != '0'){
        $("select[name=txtTamCalcaAl]").removeClass("is-invalid");
        $("select[name=txtTamCalcaAl]").addClass("is-valid");
    }
    //Campo Select Tamanho Camuflada
    if($("select[name=txtTamCamCmfAl]").val() != '0'){
        $("select[name=txtTamCamCmfAl]").removeClass("is-invalid");
        $("select[name=txtTamCamCmfAl]").addClass("is-valid");
    }
    //Campo Select Possui CNH
    if($("select[name=txtPossuiCNH]").val() == 'n'){            
       $("select[name=txtPossuiCNH]").removeClass("is-invalid");
       $("select[name=txtPossuiCNH]").addClass("is-valid");
    }
    //Campo Select Possui CNH
    if($("select[name=txtPossuiCNH]").val() == 's'){            
       $("select[name=txtPossuiCNH]").removeClass("is-invalid");
       $("select[name=txtPossuiCNH]").addClass("is-valid");
       
       $("#divCNH").css("display", "block");
       
       //Campo Input CNH Num
        if($("input[name=txtCNHNumAl]").val() != ''){
            $("input[name=txtCNHNumAl]").removeClass("is-invalid");
            $("input[name=txtCNHNumAl]").addClass("is-valid");
        }
        //Campo Select CNH Categoria
        if($("select[name=txtCNHCatgAl]").val() != '0'){
            $("select[name=txtCNHCatgAl]").removeClass("is-invalid");
            $("select[name=txtCNHCatgAl]").addClass("is-valid");
        }
        //Campo Input Data Validade
        if($("input[name=txtCNHDataValAl]").val() != ''){
            $("input[name=txtCNHDataValAl]").removeClass("is-invalid");
            $("input[name=txtCNHDataValAl]").addClass("is-valid");
        }
    }
    
    //Campo Select Trará veículo para o CIGS
    if($("select[name=txtTraraVeiculo]").val() == 'n'){
        $("select[name=txtTraraVeiculo]").removeClass("is-invalid");
        $("select[name=txtTraraVeiculo]").addClass("is-valid");
    }
    if($("select[name=txtTraraVeiculo]").val() == 's'){
        $("select[name=txtTraraVeiculo]").removeClass("is-invalid");
        $("select[name=txtTraraVeiculo]").addClass("is-valid");
        
        $("#divVeiculos").css("display", "block");
    }
    
    //Etapa 3: SAÚDE
    //Campo Select Fumante
    if($("select[name=txtFumante]").val() != '0'){
        $("select[name=txtFumante]").removeClass("is-invalid");
        $("select[name=txtFumante]").addClass("is-valid");
    }
    
    //Campo Select Alérgico
    if($("select[name=txtAlergico]").val() == 'n'){
        $("select[name=txtAlergico]").removeClass("is-invalid");
        $("select[name=txtAlergico]").addClass("is-valid");
    }
    if($("select[name=txtAlergico]").val() == 's'){
        $("select[name=txtAlergico]").removeClass("is-invalid");
        $("select[name=txtAlergico]").addClass("is-valid");
        
        $("#divAlergias").css("display", "block");    
    }
    
    //Campo Select Medicamentos Controlados
    if($("select[name=txtUsoMtoCt]").val() == 'n'){
        $("select[name=txtUsoMtoCt]").removeClass("is-invalid");
        $("select[name=txtUsoMtoCt]").addClass("is-valid");
    }
    if($("select[name=txtUsoMtoCt]").val() == 's'){
        $("select[name=txtUsoMtoCt]").removeClass("is-invalid");
        $("select[name=txtUsoMtoCt]").addClass("is-valid");
        
        $("#divMtoCt").css("display", "block");
    }
    
    //Campo Select Termogênicos, Ergogênicos ou Suplementos Alimentares
    if($("select[name=txtUsoTermErgSupAli]").val() == 'n'){
        $("select[name=txtUsoTermErgSupAli]").removeClass("is-invalid");
        $("select[name=txtUsoTermErgSupAli]").addClass("is-valid");
    }
    if($("select[name=txtUsoTermErgSupAli]").val() == 's'){
        $("select[name=txtUsoTermErgSupAli]").removeClass("is-invalid");
        $("select[name=txtUsoTermErgSupAli]").addClass("is-valid");
        
        $("#divTermErgSupAli").css("display", "block");
    }
    
    //Etapa 4: DADOS MILITARES
    //Campo Input Escola de Formação
    if($("input[name=txtFormEscNome]").val() != ''){
        $("input[name=txtFormEscNome]").removeClass("is-invalid");
        $("input[name=txtFormEscNome]").addClass("is-valid");
    }
    //Campo Input Abreviatura
    if($("input[name=txtFormEscAbrev]").val() != ''){
        $("input[name=txtFormEscAbrev]").removeClass("is-invalid");
        $("input[name=txtFormEscAbrev]").addClass("is-valid");
    }
    //Campo Input Turma
    if($("input[name=txtFormTurma]").val() != ''){
        $("input[name=txtFormTurma]").removeClass("is-invalid");
        $("input[name=txtFormTurma]").addClass("is-valid");
    }
    //Campo Select Comportamento
    if($("select[name=txtCptmAl]").val() != '0'){
        $("select[name=txtCptmAl]").removeClass("is-invalid");
        $("select[name=txtCptmAl]").addClass("is-valid");
    }
    //Campo Input Última Promoção
    if($("input[name=txtDataUltProm]").val() != ''){
        $("input[name=txtDataUltProm]").removeClass("is-invalid");
        $("input[name=txtDataUltProm]").addClass("is-valid");
    }
    //Campo Select QA para Promoção
    if($("select[name=txtQaProm]").val() == 'n'){
        $("select[name=txtQaProm]").removeClass("is-invalid");
        $("select[name=txtQaProm]").addClass("is-valid");
    }
    if($("select[name=txtQaProm]").val() == 's'){
        $("select[name=txtQaProm]").removeClass("is-invalid");
        $("select[name=txtQaProm]").addClass("is-valid");

        $("#divQaQuando").css("display", "block");

        //Campo Input QA Quando
        if($("input[name=txtQaQuandoProm]").val() != ''){
            $("input[name=txtQaQuandoProm]").removeClass("is-invalid");
            $("input[name=txtQaQuandoProm]").addClass("is-valid");
        }
    }
    //Campo Input Data Último TAF
    if($("input[name=txtDataUltTAF]").val() != ''){
        $("input[name=txtDataUltTAF]").removeClass("is-invalid");
        $("input[name=txtDataUltTAF]").addClass("is-valid");
    }
    //Campo Select Menção
    if($("select[name=txtMencaoTAF]").val() != '0'){
        $("select[name=txtMencaoTAF]").removeClass("is-invalid");
        $("select[name=txtMencaoTAF]").addClass("is-valid");
    }
    //Campo Input Função 1
    if($("input[name=txtFunc1]").val() != ''){
        $("input[name=txtFunc1]").removeClass("is-invalid");
        $("input[name=txtFunc1]").addClass("is-valid");
    }
    //Campo Input Função 2
    if($("input[name=txtFunc2]").val() != ''){
        $("input[name=txtFunc2]").removeClass("is-invalid");
        $("input[name=txtFunc2]").addClass("is-valid");
    }
    //Campo Input Função 3
    if($("input[name=txtFunc3]").val() != ''){
        $("input[name=txtFunc3]").removeClass("is-invalid");
        $("input[name=txtFunc3]").addClass("is-valid");
    }
    
    //Etapa 5: DADOS FAMILIARES
    //Campo Select Possui Cônjuge
    if($("select[name=txtPossuiConjuge]").val() == 'n'){
        $("select[name=txtPossuiConjuge]").removeClass("is-invalid");
        $("select[name=txtPossuiConjuge]").addClass("is-valid");
    }
    if($("select[name=txtPossuiConjuge]").val() == 's'){
        $("select[name=txtPossuiConjuge]").removeClass("is-invalid");
        $("select[name=txtPossuiConjuge]").addClass("is-valid");
        
        $("#divConjuge").css("display", "block");
        
        //Campo Input CPF Cônjuge
        if($("input[name=txtCpfConjuge]").val() != ''){
            $("input[name=txtCpfConjuge]").removeClass("is-invalid");
            $("input[name=txtCpfConjuge]").addClass("is-valid");
        }
        //Campo Input Nome Cônjuge
        if($("input[name=txtNomeConjuge]").val() != ''){
            $("input[name=txtNomeConjuge]").removeClass("is-invalid");
            $("input[name=txtNomeConjuge]").addClass("is-valid");
        }
        //Campo Input Sobrenome Cônjuge
        if($("input[name=txtSobrenomeConjuge]").val() != ''){
            $("input[name=txtSobrenomeConjuge]").removeClass("is-invalid");
            $("input[name=txtSobrenomeConjuge]").addClass("is-valid");
        }
        //Campo Input Email Cônjuge
        if($("input[name=txtEmailConjuge]").val() != ''){
            $("input[name=txtEmailConjuge]").removeClass("is-invalid");
            $("input[name=txtEmailConjuge]").addClass("is-valid");
        }
        //Campo Input Fone Cônjuge
        if($("input[name=txtFoneConjuge]").val() != ''){
            $("input[name=txtFoneConjuge]").removeClass("is-invalid");
            $("input[name=txtFoneConjuge]").addClass("is-valid");
        }
    }
    //Campo Select Parentesco Referência
    if($("select[name=txtParentescoRef]").val() != '0'){
        $("select[name=txtParentescoRef]").removeClass("is-invalid");
        $("select[name=txtParentescoRef]").addClass("is-valid");
    }
    //Campo Input Nome Referência
    if($("input[name=txtNomeRef]").val() != ''){
        $("input[name=txtNomeRef]").removeClass("is-invalid");
        $("input[name=txtNomeRef]").addClass("is-valid");
    }
    //Campo Input Sobrenome Referência
    if($("input[name=txtSobrenomeRef]").val() != ''){
        $("input[name=txtSobrenomeRef]").removeClass("is-invalid");
        $("input[name=txtSobrenomeRef]").addClass("is-valid");
    }
    //Campo Input CPF Referência
    if($("input[name=txtCpfRef]").val() != ''){
        $("input[name=txtCpfRef]").removeClass("is-invalid");
        $("input[name=txtCpfRef]").addClass("is-valid");
    }
    //Campo Input Email Referência
    if($("input[name=txtEmailRef]").val() != ''){
        $("input[name=txtEmailRef]").removeClass("is-invalid");
        $("input[name=txtEmailRef]").addClass("is-valid");
    }
    //Campo Input Fone Referência
    if($("input[name=txtFoneRef]").val() != ''){
        $("input[name=txtFoneRef]").removeClass("is-invalid");
        $("input[name=txtFoneRef]").addClass("is-valid");
    }
    //Campo Select Referência Conclusão
    if($("select[name=txtAddRefConclusao]").val() == 'n'){
        $("select[name=txtAddRefConclusao]").removeClass("is-invalid");
        $("select[name=txtAddRefConclusao]").addClass("is-valid");
    }
    if($("select[name=txtAddRefConclusao]").val() == 's'){
        $("select[name=txtAddRefConclusao]").removeClass("is-invalid");
        $("select[name=txtAddRefConclusao]").addClass("is-valid");
        
        $("#divRefConclusao").css("display", "block");
        
        //Campo Select Parentesco Referência Conclusão
        if($("select[name=txtParentescoRefConclusao]").val() != '0'){
            $("select[name=txtParentescoRefConclusao]").removeClass("is-invalid");
            $("select[name=txtParentescoRefConclusao]").addClass("is-valid");
        }
        //Campo Input Nome Referência Conclusão
        if($("input[name=txtNomeRefConclusao]").val() != ''){
            $("input[name=txtNomeRefConclusao]").removeClass("is-invalid");
            $("input[name=txtNomeRefConclusao]").addClass("is-valid");
        }
         //Campo Input Sobrenome Referência Conclusão
        if($("input[name=txtSobrenomeRefConclusao]").val() != ''){
            $("input[name=txtSobrenomeRefConclusao]").removeClass("is-invalid");
            $("input[name=txtSobrenomeRefConclusao]").addClass("is-valid");
        }
        //Campo Input CPF Referência Conclusão
        if($("input[name=txtCpfRefConclusao]").val() != ''){
            $("input[name=txtCpfRefConclusao]").removeClass("is-invalid");
            $("input[name=txtCpfRefConclusao]").addClass("is-valid");
        }
        //Campo Input Email Referência Conclusão
        if($("input[name=txtEmailRefConclusao]").val() != ''){
            $("input[name=txtEmailRefConclusao]").removeClass("is-invalid");
            $("input[name=txtEmailRefConclusao]").addClass("is-valid");
        }
        //Campo Input Fone Referência Conclusão
        if($("input[name=txtFoneRefConclusao]").val() != ''){
            $("input[name=txtFoneRefConclusao]").removeClass("is-invalid");
            $("input[name=txtFoneRefConclusao]").addClass("is-valid");
        }
    }
    
    //Etapa 6: DADOS DE ENDEREÇO
    //Campo Input CEP Residência
    if($("input[name=txtCepEndResid]").val() != ''){
        $("input[name=txtCepEndResid]").removeClass("is-invalid");
        $("input[name=txtCepEndResid]").addClass("is-valid");
    }
    //Campo Select Logradouro Residência    
    if($("select[name=txtLogEndResid]").val() != '0'){
        $("select[name=txtLogEndResid]").removeClass("is-invalid");
        $("select[name=txtLogEndResid]").addClass("is-valid");
    }
    //Campo Input Endereço Residência
    if($("input[name=txtNomeEndResid]").val() != ''){
        $("input[name=txtNomeEndResid]").removeClass("is-invalid");
        $("input[name=txtNomeEndResid]").addClass("is-valid");
    }
    //Campo Input Número Residência
    if($("input[name=txtNumEndResid]").val() != ''){
        $("input[name=txtNumEndResid]").removeClass("is-invalid");
        $("input[name=txtNumEndResid]").addClass("is-valid");
    }
    //Campo Select País Residência    
    if($("select[name=txtPaisEndResid]").val() != '0'){
        $("select[name=txtPaisEndResid]").removeClass("is-invalid");
        $("select[name=txtPaisEndResid]").addClass("is-valid");
    }
    //Campo Select Estado Residência
    if($("select[name=txtEstadoEndResid]").val() != '0'){
        $("select[name=txtEstadoEndResid]").removeClass("is-invalid");
        $("select[name=txtEstadoEndResid]").addClass("is-valid");
    }
    //Campo Select Cidade Residência
    if($("select[name=txtCidadeEndResid]").val() != '0'){
        $("select[name=txtCidadeEndResid]").removeClass("is-invalid");
        $("select[name=txtCidadeEndResid]").addClass("is-valid");
    }
    //Campo Select Bairro Residência
    if($("select[name=txtBairroEndResid]").val() != '0'){
        $("select[name=txtBairroEndResid]").removeClass("is-invalid");
        $("select[name=txtBairroEndResid]").addClass("is-valid");
    }
    //Campo Select Endereço durante Curso
    if($("select[name=txtEndCurso]").val() != '0'){
        $("select[name=txtEndCurso]").removeClass("is-invalid");
        $("select[name=txtEndCurso]").addClass("is-valid");
        
        //Campo Input CEP durante Curso
        if($("input[name=txtCepEndCurso]").val() != ''){
            $("input[name=txtCepEndCurso]").removeClass("is-invalid");
            $("input[name=txtCepEndCurso]").addClass("is-valid");
        }        
         //Campo Select Logradouro durante Curso
        if($("select[name=txtLogEndCurso]").val() != '0'){
            $("select[name=txtLogEndCurso]").removeClass("is-invalid");
            $("select[name=txtLogEndCurso]").addClass("is-valid");
        }
        //Campo Input Endereço durante Curso
        if($("input[name=txtNomeEndCurso]").val() != ''){
            $("input[name=txtNomeEndCurso]").removeClass("is-invalid");
            $("input[name=txtNomeEndCurso]").addClass("is-valid");
        }
        //Campo Input Número durante Curso
        if($("input[name=txtNumEndCurso]").val() != ''){
            $("input[name=txtNumEndCurso]").removeClass("is-invalid");
            $("input[name=txtNumEndCurso]").addClass("is-valid");
        }
        //Campo Select País durante Curso
        if($("select[name=txtPaisEndCurso]").val() != '0'){
            $("select[name=txtPaisEndCurso]").removeClass("is-invalid");
            $("select[name=txtPaisEndCurso]").addClass("is-valid");
        }
        //Campo Select Estado durante Curso
        if($("select[name=txtEstadoEndCurso]").val() != '0'){
            $("select[name=txtEstadoEndCurso]").removeClass("is-invalid");
            $("select[name=txtEstadoEndCurso]").addClass("is-valid");
        }
        //Campo Select Cidade durante Curso
        if($("select[name=txtCidadeEndCurso]").val() != '0'){
            $("select[name=txtCidadeEndCurso]").removeClass("is-invalid");
            $("select[name=txtCidadeEndCurso]").addClass("is-valid");
        }
        //Campo Select Bairro durante Curso
        if($("select[name=txtBairroEndCurso]").val() != '0'){
            $("select[name=txtBairroEndCurso]").removeClass("is-invalid");
            $("select[name=txtBairroEndCurso]").addClass("is-valid");
        }
    }
    //Etapa 7: CURSOS/ESTÁGIOS
    //Campo Select Idiomas
    if($("select[name=txtHabIdiomas]").val() == 'n'){
        $("select[name=txtHabIdiomas]").removeClass("is-invalid");
        $("select[name=txtHabIdiomas]").addClass("is-valid");
    }
    if($("select[name=txtHabIdiomas]").val() == 's'){
        $("select[name=txtHabIdiomas]").removeClass("is-invalid");
        $("select[name=txtHabIdiomas]").addClass("is-valid");
        
        $("#divIdiomas").css("display", "block");
    }
    //Campo Select Curso Aperfiçoamento
    if($("select[name=txtPossuiCAperf]").val() == 'n'){
        $("select[name=txtPossuiCAperf]").removeClass("is-invalid");
        $("select[name=txtPossuiCAperf]").addClass("is-valid");
    }
    if($("select[name=txtPossuiCAperf]").val() == 's'){
        $("select[name=txtPossuiCAperf]").removeClass("is-invalid");
        $("select[name=txtPossuiCAperf]").addClass("is-valid");
        
        $("#divCAperf").css("display", "block");
        
        //Campo Input Select Curso
        if($("select[name=txtCAperf]").val() != '0'){
            $("select[name=txtCAperf]").removeClass("is-invalid");
            $("select[name=txtCAperf]").addClass("is-valid");
        }        
        //Campo Input Ano Conclusão Curso de Aperfeiçoamento            
        if($("input[name=txtAnoCAperf").val() != ''){
            $("input[name=txtAnoCAperf").removeClass("is-invalid");
            $("input[name=txtAnoCAperf").addClass("is-valid");
        }       
    }
    //Campo Select Curso Altos Estudos
    if($("select[name=txtPossuiCAltEstudos]").val() == 'n'){
        $("select[name=txtPossuiCAltEstudos]").removeClass("is-invalid");
        $("select[name=txtPossuiCAltEstudos]").addClass("is-valid");
    } 
    if($("select[name=txtPossuiCAltEstudos]").val() == 's'){
        $("select[name=txtPossuiCAltEstudos]").removeClass("is-invalid");
        $("select[name=txtPossuiCAltEstudos]").addClass("is-valid");
        
        $("#divCAltEstudos").css("display", "block");
        
        //Campo Input Select Curso
        if($("select[name=txtCAltEstudos]").val() != '0'){
            $("select[name=txtCAltEstudos]").removeClass("is-invalid");
            $("select[name=txtCAltEstudos]").addClass("is-valid");
        }
        //Campo Input Ano Conclusão Curso de Aperfeiçoamento
        if($("input[name=txtAnoCAltEstudos").val() != ''){
            $("input[name=txtAnoCAltEstudos").removeClass("is-invalid");
            $("input[name=txtAnoCAltEstudos").addClass("is-valid");
        }
    }
    //Campo Select Cursos Extensão ou Especialização
    if($("select[name=txtPossuiCExtsEsp]").val() == 'n'){
        $("select[name=txtPossuiCExtsEsp]").removeClass("is-invalid");
        $("select[name=txtPossuiCExtsEsp]").addClass("is-valid");
    }
    if($("select[name=txtPossuiCExtsEsp]").val() == 's'){
        $("select[name=txtPossuiCExtsEsp]").removeClass("is-invalid");
        $("select[name=txtPossuiCExtsEsp]").addClass("is-valid");
        
        $("#divCExtsEsp").css("display", "block");     
    }    
    //Campo Select Estágios Militares Operacionais
    if($("select[name=txtPossuiEstMil]").val() == 'n'){
        $("select[name=txtPossuiEstMil]").removeClass("is-invalid");
        $("select[name=txtPossuiEstMil]").addClass("is-valid");
    }
    if($("select[name=txtPossuiEstMil]").val() == 's'){
        $("select[name=txtPossuiEstMil]").removeClass("is-invalid");
        $("select[name=txtPossuiEstMil]").addClass("is-valid");
        
        $("#divEstagios").css("display", "block");
    }
    
     //Etapa 8: PREPARAÇÃO
    //Campo Select Preparação Física
    if($("select[name=txtPrepFisica]").val() != '0'){
        $("select[name=txtPrepFisica]").removeClass("is-invalid");
        $("select[name=txtPrepFisica]").addClass("is-valid");
    }
    //Campo Select Apoio Familiar
    if($("select[name=txtApoioFam]").val() != '0'){
        $("select[name=txtApoioFam]").removeClass("is-invalid");
        $("select[name=txtApoioFam]").addClass("is-valid");
    }

    //Campo Select Apoio de sua OM
    if($("select[name=txtApoioOM]").val() != '0'){
        $("select[name=txtApoioOM]").removeClass("is-invalid");
        $("select[name=txtApoioOM]").addClass("is-valid");
    }
    //Campo Select OM Curso de preparação
    if($("select[name=txtCPrepCOS]").val() != '0'){
        $("select[name=txtCPrepCOS]").removeClass("is-invalid");
        $("select[name=txtCPrepCOS]").addClass("is-valid");
    }
    //Campo Select Problemas comprometer seu rendimento
    if($("select[name=txtProbRend]").val() != '0'){
        $("select[name=txtProbRend]").removeClass("is-invalid");
        $("select[name=txtProbRend]").addClass("is-valid");
    }
    //Campo Select Tempo de Preparação
    if($("select[name=txtTempoPrep]").val() != '0'){
        $("select[name=txtTempoPrep]").removeClass("is-invalid");
        $("select[name=txtTempoPrep]").addClass("is-valid");
    }
    //Campo Select Preparo intelectual no assunto de Doutrina de Operações na Selva
    if($("select[name=txtDedicacaoDoutOPS]").val() != '0'){
        $("select[name=txtDedicacaoDoutOPS]").removeClass("is-invalid");
        $("select[name=txtDedicacaoDoutOPS]").addClass("is-valid");
    }
    //Campo Input Fator Motivação
    if($("input[name=txtFatorMotivacao]").val() != ''){
        $("input[name=txtFatorMotivacao]").removeClass("is-invalid");
        $("input[name=txtFatorMotivacao]").addClass("is-valid");
    }
    //Campo Select Consultou Site
    if($("select[name=txtCsltSite]").val() != '0'){
        $("select[name=txtCsltSite]").removeClass("is-invalid");
        $("select[name=txtCsltSite]").addClass("is-valid");
    }
    //Campo Select Consultou Ambiente Virtual do Aluno
    if($("select[name=txtCsltAmbVirtAl]").val() != '0'){
        $("select[name=txtCsltAmbVirtAl]").removeClass("is-invalid");
        $("select[name=txtCsltAmbVirtAl]").addClass("is-valid");
    }
    
    //Etapa 9: VIVÊNCIA NA AMAZÔNIA
    //Campo Select Já serviu na Amazônia
    if($("select[name=txtSvAmz]").val() == 'n'){
        $("select[name=txtSvAmz]").removeClass("is-invalid");
        $("select[name=txtSvAmz]").addClass("is-valid");
    }
    if($("select[name=txtSvAmz]").val() == 's'){
        $("select[name=txtSvAmz]").removeClass("is-invalid");
        $("select[name=txtSvAmz]").addClass("is-valid");
        
        $("#divSvAmz").css("display", "block");
    }
    //Campo Select Tentou cos outras vezes
    if($("select[name=txtTentC]").val() == 'n'){
        $("select[name=txtTentC]").removeClass("is-invalid");
        $("select[name=txtTentC]").addClass("is-valid");
    }
    if($("select[name=txtTentC]").val() == 's'){
        $("select[name=txtTentC]").removeClass("is-invalid");
        $("select[name=txtTentC]").addClass("is-valid");
        
        $("#divTentC").css("display", "block");
        
        //Campo Input Quantas vezes serviu na Amazônia
        if($("select[name=txtQntTentC]").val() != '0'){
            $("select[name=txtQntTentC]").removeClass("is-invalid");
            $("select[name=txtQntTentC]").addClass("is-valid");
        }
        
    }
});