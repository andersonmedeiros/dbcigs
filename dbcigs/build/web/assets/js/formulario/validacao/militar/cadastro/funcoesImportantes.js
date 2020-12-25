// Variáveis Auxiliares
var camposOk = 0; //testar se todos campos foram preenchidos corretamente
var cpfOk = 0; //testar validade do cpf

// --> Início Funções comuns a todas as etapas
// Acionamento de formulário
function acionamentoForm(select, div){
    if($(select).val() == 's'){
        $(div).css("display", "block");  
    }
};
function acionamentoFormGravidez(select, div){
    if($(select).val() == 'F'){
        $(div).css("display", "block");  
    }
};

function somenteNumero(campo) {
    // Somente números
    $(campo).on('keydown', function(e) {
        var keyCode = e.keyCode || e.which,
            pattern = /\d/,
            // Permite somente Backspace, Delete e as setas direita e esquerda (além dos números)
            keys = [8,9,37,39,46,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105];

        if(!pattern.test(String.fromCharCode(keyCode)) && $.inArray(keyCode, keys) === -1) {
            return false;
        }
    });
};

// Limpeza de campos Input
function limpaCampoInput(campo){
    $(campo).val('');    
    $(campo).removeClass("is-valid");
    $(campo).removeClass("is-invalid");
    $(campo).prop("readonly", false);
}

// Limpeza de campos Select
function limpaCampoSelect(campo){
    $(campo).val('0');    
    $(campo).removeClass("is-valid");
    $(campo).removeClass("is-invalid");
    $(campo).prop("readonly", false);
}
// --> Fim Funções comuns a todas as etapas

// Ao carregar ou recarregar a página
// Funções
// --> Início comum a mais de uma etapa
// Select
function validSelect(campo){
    if($(campo).val() != '0'){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Input
function validInput(campo){
    if($(campo).val() != ''){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Data de nascimento
function validDataNascMil(campo){
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
    else if((anoAtual - anoNasc) < 18){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNasc").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoAtual - anoNasc) === 18) && (mesNasc < mesAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNasc").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoAtual - anoNasc) === 18) && (mesNasc === mesAtual) && (diaNasc < diaAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNasc").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Data de nascimento
function validDataNasc(campo){
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
};

// Email
function validEmail(campo){
    var filtro = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
    var email = $(campo).val();
    if(email == ''){
    }
    else if(filtro.test(email) == false){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-email").html("Email Inválido!");
    }
    else{     
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Fone celular
function validFoneCel(campo){  
    var foneCel = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    if(foneCel == ''){
    }
    else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
            foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
            foneCel == '88888888888' || foneCel == '99999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-foneCel").html("Fone Inválido!");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// --> Fim Comum a mais de uma etapa

// --> Início Etapa 1: DADOS INDIVIDUAIS
// Identidade militar
function validIdtMil(campo){  
    var idtMil = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    
    if(idtMil == ''){
    }
    else if(idtMil == '0000000000' || idtMil == '1111111111' || idtMil == '2222222222' || idtMil == '3333333333' ||                 
            idtMil == '4444444444' || idtMil == '5555555555' || idtMil == '6666666666' || idtMil == '7777777777' ||                 
            idtMil == '8888888888' || idtMil == '9999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-idtMil").html("Identidade Militar Inválida!");
        camposOk = 0;
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
        camposOk = 1;
    }
};

// Identidade civil
function validIdtCivil(campo){  
    var idtCivil = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    
    if(idtCivil == ''){
    }
    else if(idtCivil == '000000000000' || idtCivil == '111111111111' || idtCivil == '222222222222' || idtCivil == '333333333333' ||                 
            idtCivil == '444444444444' || idtCivil == '555555555555' || idtCivil == '666666666666' || idtCivil == '777777777777' ||                 
            idtCivil == '888888888888' || idtCivil == '999999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-idtCivil").html("Identidade Civil Inválida!");
        camposOk = 0;
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
        camposOk = 1;
    }
};

//CPF
function validCPF(campo){
    var cpf = $(campo).val().replace(".","").replace(".","").replace("-","");
    
    if(cpf == ''){
        cpfOk = 0;
    }
    else if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||                 
            cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||                 
            cpf == '88888888888' || cpf == '99999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-cpf").html("CPF Inválido!");
        cpfOk = 0;
    }else{
        // Valida 1o digito	
        var add = 0;	
        for (var i=0; i < 9; i ++)		
            add += parseInt(cpf.charAt(i)) * (10 - i);	
            var rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpf.charAt(9))){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpf").html("CPF Inválido!");
                cpfOk = 0;
            }else{
                $(campo).removeClass("is-invalid");
                $(campo).addClass("is-valid");
                cpfOk = 1;
            }
        // Valida 2o digito	
        add = 0;	
        for (var i = 0; i < 10; i ++)		
            add += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
            rev = 0;	
        if (rev != parseInt(cpf.charAt(10))){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("CPF Inválido!");
            cpfOk = 0;
        }else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
            cpfOk = 1;
        }    
    } 
};

// Preccp
function validPreccp(campo){  
    var preccp = $(campo).val();
    
    if(preccp == ''){
    }
    else if(preccp == '000000000' || preccp == '111111111' || preccp == '222222222' || preccp == '333333333' ||                 
            preccp == '444444444' || preccp == '555555555' || preccp == '666666666' || preccp == '777777777' ||                 
            preccp == '888888888' || preccp == '999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-preccp").html("Prec-CP Inválido!");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// CP
function validCP(campo){  
    var cp = $(campo).val();
    
    if(cp == ''){
    }
    else if(cp == '000000' || cp == '111111' || cp == '222222' || cp == '333333' ||                 
            cp == '444444' || cp == '555555' || cp == '666666' || cp == '777777' ||                 
            cp == '888888' || cp == '999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-cp").html("CP Inválido!");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Data de praça
function validDataPraca(campoDataPraca, campoDataNasc){ 
    var dataNasc = $(campoDataNasc).val();
    var dataNascSplit = dataNasc.split('-');        
    var diaNasc = dataNascSplit[2];
    var mesNasc = dataNascSplit[1];
    var anoNasc = dataNascSplit[0];

    var dataPraca = $(campoDataPraca).val();
    var dataPracaSplit = dataPraca.split('-');        
    var diaPraca = dataPracaSplit[2];
    var mesPraca = dataPracaSplit[1];
    var anoPraca = dataPracaSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();

    if(dataPraca == ''){
    }       
    else if((anoPraca == anoAtual) && (mesPraca == mesAtual) && (diaPraca > diaAtual)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPraca").html("Data Inválida! Praça após data atual.");
    }       
    else if((anoPraca == anoNasc) && (mesPraca == mesNasc) && (diaPraca < diaNasc)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPraca").html("Data Inválida! Praça antes do nascimento.");
    }       
    else if((anoPraca == anoAtual) && (mesPraca > mesAtual)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPraca").html("Data Inválida! Praça após data atual.");
    }       
    else if((anoPraca == anoNasc) && (mesPraca < mesNasc)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPraca").html("Data Inválida! Praça antes do nascimento.");
    }       
    else if((anoPraca > anoAtual)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPraca").html("Data Inválida! Praça após data atual.");
    }       
    else if((anoPraca < anoNasc)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPraca").html("Data Inválida! Praça antes do nascimento.");
    }
    else if((anoPraca - anoNasc) < 18){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPraca").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoPraca - anoNasc) === 18) && (mesPraca < mesNasc)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPraca").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoPraca - anoNasc) === 18) && (mesPraca === mesNasc) && (diaPraca < diaNasc)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPraca").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }
    else{
        $(campoDataPraca).removeClass("is-invalid");
        $(campoDataPraca).addClass("is-valid");
    }
};

// Titulo eleitor
function validTituloEleitor(campo){
    var titEleitorNum = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
    if(titEleitorNum == ''){
    }
    else if(titEleitorNum == '000000000000' || titEleitorNum == '111111111111' || titEleitorNum == '222222222222' || titEleitorNum == '333333333333' ||                 
            titEleitorNum == '444444444444' || titEleitorNum == '555555555555' || titEleitorNum == '666666666666' || titEleitorNum == '777777777777' ||                 
            titEleitorNum == '888888888888' || titEleitorNum == '999999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-titEleitorNum").html("Título de Eleitor Inválido!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Titulo eleitor - Zona
function validTitEleitorZona(campo){
    var titEleitorZona = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
    if(titEleitorZona == ''){
    }
    else if((titEleitorZona != '') && (titEleitorZona.length < 3)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-titEleitorZona").html("A Zona é formada por 3 caracteres!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Titulo eleitor - Seção
function validTitEleitorSecao(campo){
    var titEleitorSecao = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
    if(titEleitorSecao == ''){
    }
    else if((titEleitorSecao != '') && (titEleitorSecao.length < 4)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-titEleitorSecao").html("A Seção é formada por 4 caracteres!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Número CNH
function validNumCNH(campo){
    var numCNH = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
    if(numCNH == ''){
    }
    else if(numCNH == '00000000000' || numCNH == '11111111111' || numCNH == '22222222222' || numCNH == '33333333333' ||                 
            numCNH == '44444444444' || numCNH == '55555555555' || numCNH == '66666666666' || numCNH == '77777777777' ||                 
            numCNH == '88888888888' || numCNH == '99999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-numCNH").html("CNH Inválida!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Data de validade CNH
function validDataValidadeCNH(campo){
    var dataValCNH = $(campo).val();
    var dataValCNHSplit = dataValCNH.split('-');        
    var diaValCNH = dataValCNHSplit[2];
    var mesValCNH = dataValCNHSplit[1];
    var anoValCNH = dataValCNHSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();

    if(dataValCNH == ''){
    }       
    else if((anoValCNH == anoAtual) && (mesValCNH == mesAtual) && (diaValCNH < diaAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataValCNH").html("CNH Vencida!");
        }       
        else if((anoValCNH == anoAtual) && (mesValCNH < mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataValCNH").html("CNH Vencida!");
        }       
        else if((anoValCNH < anoAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataValCNH").html("CNH Vencida!");
        }      
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};
// --> Fim Etapa 1: DADOS INDIVIDUAIS

// --> Início Etapa 2: DADOS MILITARES

// --> Fim Etapa 2: DADOS MILITARES

// --> Início Etapa 3: DADOS FAMILIARES

// --> Fim Etapa 3: DADOS FAMILIARES

// --> Início Etapa 4: DADOS DE ENDEREÇO
//CEP
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
// --> Fim Etapa 4: DADOS DE ENDEREÇO
// --> Fim Etapa 6: DADOS DE ACESSO
//Senha
function validSenha(campo){
    if($(campo).val() != ''){
        if( $(campo).val().length >= 6){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
        else if($(campo).val().length < 6){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-senha").html("Senha deve ter no mínimo 6 caracteres!");
        }
    }
};
// --> Fim Etapa 6: DADOS DE ACESSO



//Ao mudar o valor do campo
//Funções
// --> Início Comum a mais de uma etapas
//Select
function validSelectTReal(campo){
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

//Input
function validInputTReal(campo){
    $(campo).change(function(){
        if($(campo).val() == "00000000"){
            $(campo).val('');
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
        if($(campo).val() != ''){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }else{
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
    });
};

function validInputNuloTReal(campo){
    $(campo).change(function(){
        if($(campo).val() != ''){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }else{
            $(campo).removeClass("is-valid");
            $(campo).removeClass("is-invalid");
        }
    });
};

// Data de nascimento
function validDataNascMilTReal(campo){ 
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
        else if((anoAtual - anoNasc) < 18){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNasc").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNasc) === 18) && (mesNasc < mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNasc").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNasc) === 18) && (mesNasc === mesAtual) && (diaNasc < diaAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNasc").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });    
};
// Data de nascimento
function validDataNascTReal(campo){ 
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

// Email
function validEmailTReal(campo){
    $(campo).change(function(){
        var filtro = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
        var email = $(campo).val();
        if(email == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-email").html("Campo Obrigatório!");
        }        
        else if(filtro.test(email)){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
        else{            
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-email").html("Email Inválido!");
        }
    });
};

// Fone celular
function validFoneCelTReal(campo){  
    $(campo).change(function(){
        var foneCel = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
        if(foneCel == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-foneCel").html("Campo Obrigatório!");
        }
        else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
                foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
                foneCel == '88888888888' || foneCel == '99999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-foneCel").html("Fone Inválido!");
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};
// Fone celular
function validFoneCelNuloTReal(campo){  
    $(campo).change(function(){
        var foneCel = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
        if(foneCel == ''){
            $(campo).removeClass("is-valid");
            $(campo).removeClass("is-invalid");
        }
        else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
                foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
                foneCel == '88888888888' || foneCel == '99999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-foneCel").html("Fone Inválido!");
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};
// --> Fim comum a mais de uma etapas

// --> Início Etapa 2: DADOS INDIVIDUAIS
//Identidade militar
function validIdtMilTReal(campo){ 
    $(campo).change(function(){
        var idtMil = $(campo).val().replace("-","").replace(" ","");
        if(idtMil == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-idtMil").html("Campo Obrigatório!");
        }
        else if(idtMil == '0000000000' || idtMil == '1111111111' || idtMil == '2222222222' || idtMil == '3333333333' ||                 
                idtMil == '4444444444' || idtMil == '5555555555' || idtMil == '6666666666' || idtMil == '7777777777' ||                 
                idtMil == '8888888888' || idtMil == '9999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-idtMil").html("Identidade Militar Inválida!");  
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};
//Identidade civil
function validIdtCivilTReal(campo){ 
    $(campo).change(function(){
        var idtCivil = $(campo).val().replace("-","").replace(" ","");
        if(idtCivil == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-idtCivil").html("Campo Obrigatório!");
        }
        else if(idtCivil == '000000000000' || idtCivil == '111111111111' || idtCivil == '222222222222' || idtCivil == '333333333333' ||                 
                idtCivil == '444444444444' || idtCivil == '555555555555' || idtCivil == '666666666666' || idtCivil == '777777777777' ||                 
                idtCivil == '888888888888' || idtCivil == '999999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-idtCivil").html("Identidade Civil Inválida!");  
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//CPF
function validCPFTReal(campo){
    $(campo).change(function(){
        var cpf = $(campo).val().replace(".","").replace(".","").replace("-","");
        if(cpf == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("Campo Obrigatório!");
            cpfOk = 0;
        }
        else if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||                 
                cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||                 
                cpf == '88888888888' || cpf == '99999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("CPF Inválido!");
            cpfOk = 0;
        }else{
            // Valida 1o digito	
            var add = 0;	
            for (var i=0; i < 9; i ++)		
                add += parseInt(cpf.charAt(i)) * (10 - i);	
                var rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)		
                    rev = 0;	
                if (rev != parseInt(cpf.charAt(9))){
                    $(campo).removeClass("is-valid");
                    $(campo).addClass("is-invalid");
                    $(".invalid-cpf").html("CPF Inválido!");
                    cpfOk = 0;
                }else{
                    $(campo).removeClass("is-invalid");
                    $(campo).addClass("is-valid");
                    cpfOk = 1;
                }
            // Valida 2o digito	
            add = 0;	
            for (var i = 0; i < 10; i ++)		
                add += parseInt(cpf.charAt(i)) * (11 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)	
                rev = 0;	
            if (rev != parseInt(cpf.charAt(10))){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpf").html("CPF Inválido!");
                cpfOk = 0;
            }else{
                $(campo).removeClass("is-invalid");
                $(campo).addClass("is-valid");
                cpfOk = 1;
            }    
        }        
    });
};

// Preccp
function validPreccpTReal(campo){  
    $(campo).change(function(){
        var preccp = $(campo).val();

        if(preccp == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
        else if(preccp == '000000000' || preccp == '111111111' || preccp == '222222222' || preccp == '333333333' ||                 
                preccp == '444444444' || preccp == '555555555' || preccp == '666666666' || preccp == '777777777' ||                 
                preccp == '888888888' || preccp == '999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-preccp").html("Prec-CP Inválido!");
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

// CP
function validCPTReal(campo){  
    $(campo).change(function(){
        var cp = $(campo).val();

        if(cp == ''){
            $(campo).removeClass("is-valid");
            $(campo).removeClass("is-invalid");
        }
        else if(cp == '000000' || cp == '111111' || cp == '222222' || cp == '333333' ||                 
                cp == '444444' || cp == '555555' || cp == '666666' || cp == '777777' ||                 
                cp == '888888' || cp == '999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cp").html("CP Inválido!");
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//Data de praça
function validDataPracaTReal(campoDataPraca, campoDataNasc){ 
    $(campoDataPraca).change(function(){
        var dataNasc = $(campoDataNasc).val();
        var dataNascSplit = dataNasc.split('-');        
        var diaNasc = dataNascSplit[2];
        var mesNasc = dataNascSplit[1];
        var anoNasc = dataNascSplit[0];
        
        var dataPraca = $(campoDataPraca).val();
        var dataPracaSplit = dataPraca.split('-');        
        var diaPraca = dataPracaSplit[2];
        var mesPraca = dataPracaSplit[1];
        var anoPraca = dataPracaSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        if(dataPraca == ''){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPraca").html("Campo Obrigatório!");
        }       
        else if((anoPraca == anoAtual) && (mesPraca == mesAtual) && (diaPraca > diaAtual)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPraca").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPraca == anoNasc) && (mesPraca == mesNasc) && (diaPraca < diaNasc)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPraca").html("Data Inválida! Praça antes do nascimento.");
        }       
        else if((anoPraca == anoAtual) && (mesPraca > mesAtual)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPraca").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPraca == anoNasc) && (mesPraca < mesNasc)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPraca").html("Data Inválida! Praça antes do nascimento.");
        }       
        else if((anoPraca > anoAtual)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPraca").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPraca < anoNasc)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPraca").html("Data Inválida! Praça antes do nascimento.");
        }
        else if((anoPraca - anoNasc) < 18){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPraca").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoPraca - anoNasc) === 18) && (mesPraca < mesNasc)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPraca").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoPraca - anoNasc) === 18) && (mesPraca === mesNasc) && (diaPraca < diaNasc)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPraca").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }
        else{
            $(campoDataPraca).removeClass("is-invalid");
            $(campoDataPraca).addClass("is-valid");
        }
    });    
};

// Titulo Eleitor
function validTituloEleitorTReal(campo){
    $(campo).change(function(){
        var titEleitorNum = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
        if(titEleitorNum == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorNum").html("Campo Obrigatório!");
        }
        else if(titEleitorNum == '000000000000' || titEleitorNum == '111111111111' || titEleitorNum == '222222222222' || titEleitorNum == '333333333333' ||                 
                titEleitorNum == '444444444444' || titEleitorNum == '555555555555' || titEleitorNum == '666666666666' || titEleitorNum == '777777777777' ||                 
                titEleitorNum == '888888888888' || titEleitorNum == '999999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorNum").html("Título de Eleitor Inválido!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

// Titulo Eleitor - Zona
function validTitEleitorZonaTReal(campo){
    $(campo).change(function(){
        var titEleitorZona = $(campo).val();
        if(titEleitorZona == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorZona").html("Campo Obrigatório!");
        }
        else if((titEleitorZona != '') && (titEleitorZona.length < 3)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorZona").html("A Zona é formada por 3 caracteres!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

// Titulo Eleitor - Seção
function validTitEleitorSecaoTReal(campo){
    $(campo).change(function(){
        var titEleitorSecao = $(campo).val();
        if(titEleitorSecao == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorSecao").html("Campo Obrigatório!");
        }
        else if((titEleitorSecao != '') && (titEleitorSecao.length < 4)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorSecao").html("A Secao é formada por 4 caracteres!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//Número CNH
function validNumCNHTReal(campo){
    $(campo).change(function(){
        var numCNH = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
        if(numCNH == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-numCNH").html("Campo Obrigatório!");
        }
        else if(numCNH == '00000000000' || numCNH == '11111111111' || numCNH == '22222222222' || numCNH == '33333333333' ||                 
                numCNH == '44444444444' || numCNH == '55555555555' || numCNH == '66666666666' || numCNH == '77777777777' ||                 
                numCNH == '88888888888' || numCNH == '99999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-numCNH").html("CNH Inválida!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//Data de validade CNH
function validDataValidadeCNHTReal(campo){
    $(campo).change(function(){
        var dataValCNH = $(campo).val();
        var dataValCNHSplit = dataValCNH.split('-');        
        var diaValCNH = dataValCNHSplit[2];
        var mesValCNH = dataValCNHSplit[1];
        var anoValCNH = dataValCNHSplit[0];

        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();

        if(dataValCNH == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataValCNH").html("Campo Obrigatório!");
        }       
        else if((anoValCNH == anoAtual) && (mesValCNH == mesAtual) && (diaValCNH < diaAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataValCNH").html("CNH Vencida!");
        }       
        else if((anoValCNH == anoAtual) && (mesValCNH < mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataValCNH").html("CNH Vencida!");
        }       
        else if((anoValCNH < anoAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataValCNH").html("CNH Vencida!");
        }   
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};
// --> Fim Etapa 1: DADOS INDIVIDUAIS

// --> Inicio Etapa 2: DADOS MILITARES

// --> Fim Etapa 2: DADOS MILITARES

// --> Inicio Etapa 3: DADOS FAMILIARES

// --> Fim Etapa 3: DADOS FAMILIARES

// --> Início Etapa 4: DADOS DE ENDEREÇO
//CEP
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
// --> Fim Etapa 4: DADOS DE ENDEREÇO

// --> Fim Etapa 6: DADOS DE ACESSO
//Senha
function validSenhaTReal(campo){
    $(campo).change(function(){
        if($(campo).val() != '' && $(campo).val().length >= 6){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
        else if($(campo).val().length < 6){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-senha").html("Senha deve ter no mínimo 6 caracteres!");
        }
    });
};
// --> Fim Etapa 6: DADOS DE ACESSO