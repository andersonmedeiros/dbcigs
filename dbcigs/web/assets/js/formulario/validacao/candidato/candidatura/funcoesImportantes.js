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

// Ano
function validAno(campo){
    var ano = $(campo).val();
    if(ano == ''){
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
// --> Fim Comum a mais de uma etapa

// --> Início Etapa 1: OM ATUAL
// Fone
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
// --> Fim Etapa 1: OM ATUAL

// --> Início Etapa 2: DADOS INDIVIDUAIS
// Data de nascimento
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
        $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
    }       
    else if((anoNascAl == anoAtual) && (mesNascAl > mesAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
    }       
    else if((anoNascAl > anoAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
    }       
    else if((anoAtual - anoNascAl) < 18){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoAtual - anoNascAl) === 18) && (mesNascAl < mesAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoAtual - anoNascAl) === 18) && (mesNascAl === mesAtual) && (diaNascAl < diaAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Identidade militar
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
        camposOk = 0;
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
        camposOk = 1;
    }
};

// Preccp
function validPreccpAl(campo){  
    var preccpAl = $(campo).val();
    
    if(preccpAl == ''){
    }
    else if(preccpAl == '000000000' || preccpAl == '111111111' || preccpAl == '222222222' || preccpAl == '333333333' ||                 
            preccpAl == '444444444' || preccpAl == '555555555' || preccpAl == '666666666' || preccpAl == '777777777' ||                 
            preccpAl == '888888888' || preccpAl == '999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-preccpAl").html("Prec-CP Inválido!");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// CP
function validCPAl(campo){  
    var cpAl = $(campo).val();
    
    if(cpAl == ''){
    }
    else if(cpAl == '000000' || cpAl == '111111' || cpAl == '222222' || cpAl == '333333' ||                 
            cpAl == '444444' || cpAl == '555555' || cpAl == '666666' || cpAl == '777777' ||                 
            cpAl == '888888' || cpAl == '999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-cpAl").html("CP Inválido!");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//CPF
function validCPFAl(campo){
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

// Data de praça
function validDataPracaAl(campoDataPraca, campoDataNasc){ 
    var dataNascAl = $(campoDataNasc).val();
    var dataNascAlSplit = dataNascAl.split('-');        
    var diaNascAl = dataNascAlSplit[2];
    var mesNascAl = dataNascAlSplit[1];
    var anoNascAl = dataNascAlSplit[0];

    var dataPracaAl = $(campoDataPraca).val();
    var dataPracaAlSplit = dataPracaAl.split('-');        
    var diaPracaAl = dataPracaAlSplit[2];
    var mesPracaAl = dataPracaAlSplit[1];
    var anoPracaAl = dataPracaAlSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();

    if(dataPracaAl == ''){
    }       
    else if((anoPracaAl == anoAtual) && (mesPracaAl == mesAtual) && (diaPracaAl > diaAtual)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
    }       
    else if((anoPracaAl == anoNascAl) && (mesPracaAl == mesNascAl) && (diaPracaAl < diaNascAl)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
    }       
    else if((anoPracaAl == anoAtual) && (mesPracaAl > mesAtual)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
    }       
    else if((anoPracaAl == anoNascAl) && (mesPracaAl < mesNascAl)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
    }       
    else if((anoPracaAl > anoAtual)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
    }       
    else if((anoPracaAl < anoNascAl)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
    }
    else if((anoPracaAl - anoNascAl) < 18){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl < mesNascAl)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl === mesNascAl) && (diaPracaAl < diaNascAl)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }
    else{
        $(campoDataPraca).removeClass("is-invalid");
        $(campoDataPraca).addClass("is-valid");
    }
};

// Titulo eleitor
function validTituloEleitorAl(campo){
    var titEleitorNumAl = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
    if(titEleitorNumAl == ''){
    }
    else if(titEleitorNumAl == '000000000000' || titEleitorNumAl == '111111111111' || titEleitorNumAl == '222222222222' || titEleitorNumAl == '333333333333' ||                 
            titEleitorNumAl == '444444444444' || titEleitorNumAl == '555555555555' || titEleitorNumAl == '666666666666' || titEleitorNumAl == '777777777777' ||                 
            titEleitorNumAl == '888888888888' || titEleitorNumAl == '999999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-titEleitorNumAl").html("Título de Eleitor Inválido!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Titulo eleitor - Zona
function validTitEleitorZonaAl(campo){
    var titEleitorZonaAl = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
    if(titEleitorZonaAl == ''){
    }
    else if((titEleitorZonaAl != '') && (titEleitorZonaAl.length < 3)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-titEleitorZonaAl").html("A Zona é formada por 3 caracteres!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Titulo eleitor - Seção
function validTitEleitorSecaoAl(campo){
    var titEleitorSecaoAl = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
    if(titEleitorSecaoAl == ''){
    }
    else if((titEleitorSecaoAl != '') && (titEleitorSecaoAl.length < 4)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-titEleitorSecaoAl").html("A Seção é formada por 4 caracteres!");   
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

//Form Veículos
function validSelectVeiculos(traraVeiculo){
    if($(traraVeiculo).val() == 's'){
        $("#divVeiculos").css("display", "block");  
    }
};
// --> Fim Etapa 2: DADOS INDIVIDUAIS

// --> Início Etapa 4: DADOS MILITARES
//Data da última promoção
function validDataUltProm(campoDataPraca, campoDataUltProm){ 
    var dataUltProm = $(campoDataUltProm).val();
    var dataUltPromSplit = dataUltProm.split('-');        
    var diaUltProm = dataUltPromSplit[2];
    var mesUltProm = dataUltPromSplit[1];
    var anoUltProm = dataUltPromSplit[0];

    var dataPracaAl = $(campoDataPraca).val();
    var dataPracaAlSplit = dataPracaAl.split('-');        
    var diaPracaAl = dataPracaAlSplit[2];
    var mesPracaAl = dataPracaAlSplit[1];
    var anoPracaAl = dataPracaAlSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();
    if(dataUltProm == ''){
    }       
    else if((anoUltProm == anoAtual) && (mesUltProm == mesAtual) && (diaUltProm > diaAtual)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
    }       
    else if((anoUltProm == anoPracaAl) && (mesUltProm == mesPracaAl) && (diaUltProm < diaPracaAl)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
    }       
    else if((anoUltProm == anoAtual) && (mesUltProm > mesAtual)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
    }       
    else if((anoUltProm == anoPracaAl) && (mesUltProm < mesPracaAl)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
    }       
    else if((anoUltProm > anoAtual)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
    }       
    else if((anoUltProm < anoPracaAl)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
    }        
    else{
        $(campoDataUltProm).removeClass("is-invalid");
        $(campoDataUltProm).addClass("is-valid");
    }
};

//Data QA para promoção
function validDataQaQuando(campoDataUltProm, campoDataQaQuando){ 
    var dataUltProm = $(campoDataUltProm).val();
    var dataUltPromSplit = dataUltProm.split('-');        
    var diaUltProm = dataUltPromSplit[2];
    var mesUltProm = dataUltPromSplit[1];
    var anoUltProm = dataUltPromSplit[0];

    var dataQaQuando = $(campoDataQaQuando).val();
    var dataQaQuandoSplit = dataQaQuando.split('-');        
    var diaQaQuando = dataQaQuandoSplit[2];
    var mesQaQuando = dataQaQuandoSplit[1];
    var anoQaQuando = dataQaQuandoSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();
    if(dataQaQuando == ''){
    }       
    else if((anoQaQuando == anoAtual) && (mesQaQuando == mesAtual) && (diaQaQuando < diaAtual)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
    }       
    else if((anoQaQuando == anoUltProm) && (mesQaQuando == mesUltProm) && (diaQaQuando < diaUltProm)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
    }       
    else if((anoQaQuando == anoAtual) && (mesQaQuando < mesAtual)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
    }       
    else if((anoQaQuando == anoUltProm) && (mesQaQuando < mesUltProm)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
    }       
    else if((anoQaQuando < anoAtual)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
    }       
    else if((anoQaQuando < anoUltProm)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
    }        
    else{
        $(campoDataQaQuando).removeClass("is-invalid");
        $(campoDataQaQuando).addClass("is-valid");
    }
};

//Data do último TAF
function validDataUltTAF(campoDataPraca, campoDataUltTAF){ 
    var dataUltTAF = $(campoDataUltTAF).val();
    var dataUltTAFSplit = dataUltTAF.split('-');        
    var diaUltTAF = dataUltTAFSplit[2];
    var mesUltTAF = dataUltTAFSplit[1];
    var anoUltTAF = dataUltTAFSplit[0];

    var dataPracaAl = $(campoDataPraca).val();
    var dataPracaAlSplit = dataPracaAl.split('-');        
    var diaPracaAl = dataPracaAlSplit[2];
    var mesPracaAl = dataPracaAlSplit[1];
    var anoPracaAl = dataPracaAlSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();
    if(dataUltTAF == ''){
    }       
    else if((anoUltTAF == anoAtual) && (mesUltTAF == mesAtual) && (diaUltTAF > diaAtual)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
    }       
    else if((anoUltTAF == anoPracaAl) && (mesUltTAF == mesPracaAl) && (diaUltTAF < diaPracaAl)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
    }       
    else if((anoUltTAF == anoAtual) && (mesUltTAF > mesAtual)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
    }       
    else if((anoUltTAF == anoPracaAl) && (mesUltTAF < mesPracaAl)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
    }       
    else if((anoUltTAF > anoAtual)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
    }       
    else if((anoUltTAF < anoPracaAl)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
    }        
    else{
        $(campoDataUltTAF).removeClass("is-invalid");
        $(campoDataUltTAF).addClass("is-valid");
    }
};
// --> Fim Etapa 4: DADOS MILITARES

// --> Início Etapa 5: DADOS FAMILIARES
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
// --> Fim Etapa 5: DADOS 

// --> Início Etapa 6: DADOS DE ENDEREÇO
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
// --> Fim Etapa 6: DADOS DE ENDEREÇO



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

//Ano
function validAnoTReal(campo){
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
// --> Fim comum a mais de uma etapas

// --> Início Etapa 1: OM ATUAL
// Fone
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
// --> Fim Etapa 1: OM ATUAL

// --> Início Etapa 2: DADOS INDIVIDUAIS
// Data de nascimento
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
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNascAl == anoAtual) && (mesNascAl > mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNascAl > anoAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoAtual - anoNascAl) < 18){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNascAl) === 18) && (mesNascAl < mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNascAl) === 18) && (mesNascAl === mesAtual) && (diaNascAl < diaAtual)){
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

//Identidade militar
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

// Preccp
function validPreccpAlTReal(campo){  
    $(campo).change(function(){
        var preccpAl = $(campo).val();

        if(preccpAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
        else if(preccpAl == '000000000' || preccpAl == '111111111' || preccpAl == '222222222' || preccpAl == '333333333' ||                 
                preccpAl == '444444444' || preccpAl == '555555555' || preccpAl == '666666666' || preccpAl == '777777777' ||                 
                preccpAl == '888888888' || preccpAl == '999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-preccpAl").html("Prec-CP Inválido!");
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

// CP
function validCPAlTReal(campo){  
    $(campo).change(function(){
        var cpAl = $(campo).val();

        if(cpAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
        else if(cpAl == '000000' || cpAl == '111111' || cpAl == '222222' || cpAl == '333333' ||                 
                cpAl == '444444' || cpAl == '555555' || cpAl == '666666' || cpAl == '777777' ||                 
                cpAl == '888888' || cpAl == '999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpAl").html("CP Inválido!");
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//CPF
function validCPFAlTReal(campo){
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

//Data de praça
function validDataPracaAlTReal(campoDataPraca, campoDataNasc){ 
    $(campoDataPraca).change(function(){
        var dataNascAl = $(campoDataNasc).val();
        var dataNascAlSplit = dataNascAl.split('-');        
        var diaNascAl = dataNascAlSplit[2];
        var mesNascAl = dataNascAlSplit[1];
        var anoNascAl = dataNascAlSplit[0];
        
        var dataPracaAl = $(campoDataPraca).val();
        var dataPracaAlSplit = dataPracaAl.split('-');        
        var diaPracaAl = dataPracaAlSplit[2];
        var mesPracaAl = dataPracaAlSplit[1];
        var anoPracaAl = dataPracaAlSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        if(dataPracaAl == ''){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Campo Obrigatório!");
        }       
        else if((anoPracaAl == anoAtual) && (mesPracaAl == mesAtual) && (diaPracaAl > diaAtual)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPracaAl == anoNascAl) && (mesPracaAl == mesNascAl) && (diaPracaAl < diaNascAl)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
        }       
        else if((anoPracaAl == anoAtual) && (mesPracaAl > mesAtual)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPracaAl == anoNascAl) && (mesPracaAl < mesNascAl)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
        }       
        else if((anoPracaAl > anoAtual)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPracaAl < anoNascAl)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
        }
        else if((anoPracaAl - anoNascAl) < 18){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl < mesNascAl)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl === mesNascAl) && (diaPracaAl < diaNascAl)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }
        else{
            $(campoDataPraca).removeClass("is-invalid");
            $(campoDataPraca).addClass("is-valid");
        }
    });    
};

// Titulo Eleitor
function validTituloEleitorAlTReal(campo){
    $(campo).change(function(){
        var titEleitorNumAl = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
        if(titEleitorNumAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorNumAl").html("Campo Obrigatório!");
        }
        else if(titEleitorNumAl == '000000000000' || titEleitorNumAl == '111111111111' || titEleitorNumAl == '222222222222' || titEleitorNumAl == '333333333333' ||                 
                titEleitorNumAl == '444444444444' || titEleitorNumAl == '555555555555' || titEleitorNumAl == '666666666666' || titEleitorNumAl == '777777777777' ||                 
                titEleitorNumAl == '888888888888' || titEleitorNumAl == '999999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorNumAl").html("Título de Eleitor Inválido!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

// Titulo Eleitor - Zona
function validTitEleitorZonaAlTReal(campo){
    $(campo).change(function(){
        var titEleitorZonaAl = $(campo).val();
        if(titEleitorZonaAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorZonaAl").html("Campo Obrigatório!");
        }
        else if((titEleitorZonaAl != '') && (titEleitorZonaAl.length < 3)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorZonaAl").html("A Zona é formada por 3 caracteres!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

// Titulo Eleitor - Seção
function validTitEleitorSecaoAlTReal(campo){
    $(campo).change(function(){
        var titEleitorSecaoAl = $(campo).val();
        if(titEleitorSecaoAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorSecaoAl").html("Campo Obrigatório!");
        }
        else if((titEleitorSecaoAl != '') && (titEleitorSecaoAl.length < 4)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorSecaoAl").html("A Secao é formada por 4 caracteres!");   
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
// --> Fim Etapa 2: DADOS INDIVIDUAIS

// --> Fim Etapa 4: DADOS MILITARES
//Data da última promoção
function validDataUltPromTReal(campoDataPraca, campoDataUltProm){ 
    $(campoDataUltProm).change(function(){
        var dataUltProm = $(campoDataUltProm).val();
        var dataUltPromSplit = dataUltProm.split('-');        
        var diaUltProm = dataUltPromSplit[2];
        var mesUltProm = dataUltPromSplit[1];
        var anoUltProm = dataUltPromSplit[0];

        var dataPracaAl = $(campoDataPraca).val();
        var dataPracaAlSplit = dataPracaAl.split('-');        
        var diaPracaAl = dataPracaAlSplit[2];
        var mesPracaAl = dataPracaAlSplit[1];
        var anoPracaAl = dataPracaAlSplit[0];

        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        if(dataUltProm == ''){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Campo Obrigatório!");
        }       
        else if((anoUltProm == anoAtual) && (mesUltProm == mesAtual) && (diaUltProm > diaAtual)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
        }       
        else if((anoUltProm == anoPracaAl) && (mesUltProm == mesPracaAl) && (diaUltProm < diaPracaAl)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
        }       
        else if((anoUltProm == anoAtual) && (mesUltProm > mesAtual)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
        }       
        else if((anoUltProm == anoPracaAl) && (mesUltProm < mesPracaAl)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
        }       
        else if((anoUltProm > anoAtual)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
        }       
        else if((anoUltProm < anoPracaAl)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
        }        
        else{
            $(campoDataUltProm).removeClass("is-invalid");
            $(campoDataUltProm).addClass("is-valid");
        }
    });    
};

//Data QA para promoção
function validDataQaQuandoTReal(campoDataUltProm, campoDataQaQuando){
    $(campoDataQaQuando).change(function(){
        var dataUltProm = $(campoDataUltProm).val();
        var dataUltPromSplit = dataUltProm.split('-');        
        var diaUltProm = dataUltPromSplit[2];
        var mesUltProm = dataUltPromSplit[1];
        var anoUltProm = dataUltPromSplit[0];

        var dataQaQuando = $(campoDataQaQuando).val();
        var dataQaQuandoSplit = dataQaQuando.split('-');        
        var diaQaQuando = dataQaQuandoSplit[2];
        var mesQaQuando = dataQaQuandoSplit[1];
        var anoQaQuando = dataQaQuandoSplit[0];

        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        if(dataQaQuando == ''){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Campo Obrigatório!");
        }       
        else if((anoQaQuando == anoAtual) && (mesQaQuando == mesAtual) && (diaQaQuando < diaAtual)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
        }       
        else if((anoQaQuando == anoUltProm) && (mesQaQuando == mesUltProm) && (diaQaQuando < diaUltProm)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
        }       
        else if((anoQaQuando == anoAtual) && (mesQaQuando < mesAtual)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
        }       
        else if((anoQaQuando == anoUltProm) && (mesQaQuando < mesUltProm)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
        }       
        else if((anoQaQuando < anoAtual)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
        }       
        else if((anoQaQuando < anoUltProm)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
        }        
        else{
            $(campoDataQaQuando).removeClass("is-invalid");
            $(campoDataQaQuando).addClass("is-valid");
        }
    });
};

//Data do último TAF
function validDataUltTAFTReal(campoDataPraca, campoDataUltTAF){ 
    $(campoDataUltTAF).change(function(){
        var dataUltTAF = $(campoDataUltTAF).val();
        var dataUltTAFSplit = dataUltTAF.split('-');        
        var diaUltTAF = dataUltTAFSplit[2];
        var mesUltTAF = dataUltTAFSplit[1];
        var anoUltTAF = dataUltTAFSplit[0];

        var dataPracaAl = $(campoDataPraca).val();
        var dataPracaAlSplit = dataPracaAl.split('-');        
        var diaPracaAl = dataPracaAlSplit[2];
        var mesPracaAl = dataPracaAlSplit[1];
        var anoPracaAl = dataPracaAlSplit[0];

        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        if(dataUltTAF == ''){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Campo Obrigatório!");
        }       
        else if((anoUltTAF == anoAtual) && (mesUltTAF == mesAtual) && (diaUltTAF > diaAtual)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
        }       
        else if((anoUltTAF == anoPracaAl) && (mesUltTAF == mesPracaAl) && (diaUltTAF < diaPracaAl)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
        }       
        else if((anoUltTAF == anoAtual) && (mesUltTAF > mesAtual)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
        }       
        else if((anoUltTAF == anoPracaAl) && (mesUltTAF < mesPracaAl)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
        }       
        else if((anoUltTAF > anoAtual)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
        }       
        else if((anoUltTAF < anoPracaAl)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
        }        
        else{
            $(campoDataUltTAF).removeClass("is-invalid");
            $(campoDataUltTAF).addClass("is-valid");
        }
    });
};
// --> Fim Etapa 4: DADOS MILITARES

// --> Fim Etapa 5: DADOS FAMILIARES
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
// --> Fim Etapa 5: DADOS FAMILIARES

// --> Início Etapa 6: DADOS DE ENDEREÇO
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
// --> Fim Etapa 6: DADOS DE ENDEREÇO