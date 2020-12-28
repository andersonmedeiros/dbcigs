//CB Anderson de Paula Andrade Medeiros
//Técnico em Informática
//01.08.2020

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

//AO CARREGAR OU RECARREGAR A PÁGINA
//FUNÇÕES
//SELECT
function limpaCampoInput(campo){
    $(campo).val('');    
    $(campo).removeClass("is-valid");
    $(campo).removeClass("is-invalid");
}

function limpaCampoSelect(campo){
    $(campo).val('0');    
    $(campo).removeClass("is-valid");
    $(campo).removeClass("is-invalid");
}

//Select
function validSelect(campo){
    if($(campo).val() != '0'){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//Input
function validInput(campo){
    if($(campo).val() != ''){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

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

//IDENTIDADE MILITAR
function validIdentidade(campo){  
    var idtMil = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    
    if(idtMil == ''){
    }
    else if(idtMil == '0000000000' || idtMil == '1111111111' || idtMil == '2222222222' || idtMil == '3333333333' ||                 
            idtMil == '4444444444' || idtMil == '5555555555' || idtMil == '6666666666' || idtMil == '7777777777' ||                 
            idtMil == '8888888888' || idtMil == '9999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-identidade").html("Identidade Militar Inválida!");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//AO MUDAR O VALOR DO CAMPO
//FUNÇÕES
//SELECT
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
        if($(campo).val() != ''){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }else{
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
    });
};

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

//IDENTIDADE MILITAR
function validIdentidadeTReal(campo){ 
    $(campo).change(function(){
        var idtMil = $(campo).val().replace("-","").replace(" ","");
        if(idtMil == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-identidade").html("Campo Obrigatório!");
        }
        else if(idtMil == '0000000000' || idtMil == '1111111111' || idtMil == '2222222222' || idtMil == '3333333333' ||                 
                idtMil == '4444444444' || idtMil == '5555555555' || idtMil == '6666666666' || idtMil == '7777777777' ||                 
                idtMil == '8888888888' || idtMil == '9999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-identidade").html("Identidade Militar Inválida!");  
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};