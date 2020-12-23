/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var forca = {"forca":[
                        {
                            "id":"1",
                            "nome":"Marinha do Brasil",
                            "sigla":"mb",
                            "postoGraduacao":[
                                
                                {"nome":"Almirante", "sigla":"Alte", "categoria":"ofgen"},
                                {"nome":"Almirante de Esquadra", "sigla":"Alte Esq", "categoria":"ofgen"},
                                {"nome":"Vice Almirante", "sigla":"V Alte", "categoria":"ofgen"},
                                {"nome":"Contra Almirante", "sigla":"C Alte", "categoria":"ofgen"},
                                {"nome":"Capitão de Mar e Guerra", "sigla":"CMG", "categoria":"ofsup"},
                                {"nome":"Capitão de Fragata", "sigla":"CF", "categoria":"ofsup"},
                                {"nome":"Capitão de Corveta", "sigla":"CC", "categoria":"ofsup"},
                                {"nome":"Capitão Tenente", "sigla":"CT", "categoria":"ofinter"},
                                {"nome":"1º Tenente", "sigla":"1º Ten", "categoria":"ofsubalt"},
                                {"nome":"2º Tenente", "sigla":"2º Ten", "categoria":"ofsubalt"},
                                {"nome":"Guarda Marinha", "sigla":"GM", "categoria":"ofsubalt"},
                                {"nome":"Aspirante", "sigla":"Asp", "categoria":"ofsubalt"},
                                {"nome":"Suboficial", "sigla":"SO", "categoria":"praca"},
                                {"nome":"1º Sargento", "sigla":"1º SG", "categoria":"praca"},
                                {"nome":"2º Sargento", "sigla":"2º SG", "categoria":"praca"},
                                {"nome":"3º Sargento", "sigla":"3º SG", "categoria":"praca"},                                
                                {"nome":"Cabo", "sigla":"CB", "categoria":"praca"},
                                {"nome":"Soldado (CFN)", "sigla":"Sd", "categoria":"praca"},
                                {"nome":"Marinheiro", "sigla":"MN", "categoria":"praca"}
                                
                            ]
                        },
                        {
                            "id":"2",
                            "nome":"Exército Brasileiro",
                            "sigla":"eb",
                            "postoGraduacao":[
                                {"nome":"Marechal", "sigla":"Mar", "categoria":"ofgen"},
                                {"nome":"General de Exército", "sigla":"Gen Ex", "categoria":"ofgen"},
                                {"nome":"General de Divisão", "sigla":"Gen Div", "categoria":"ofgen"},
                                {"nome":"General de Brigada", "sigla":"Gen Bda", "categoria":"ofgen"},
                                {"nome":"Coronel", "sigla":"Cel", "categoria":"ofsup"},
                                {"nome":"Tenente-Coronel", "sigla":"Ten Cel", "categoria":"ofsup"},
                                {"nome":"Major", "sigla":"Maj", "categoria":"ofsup"},
                                {"nome":"Capitão", "sigla":"Cap", "categoria":"ofinter"},
                                {"nome":"1º Tenente", "sigla":"1º Ten", "categoria":"ofsubalt"},
                                {"nome":"2º Tenente", "sigla":"2º Ten", "categoria":"ofsubalt"},
                                {"nome":"Aspirante a Oficial", "sigla":"Asp", "categoria":"ofsubalt"},
                                {"nome":"Cadete", "sigla":"Cad", "categoria":"ofsubalt"},
                                {"nome":"Subtenente", "sigla":"Subten", "categoria":"praca"},
                                {"nome":"1º Sargento", "sigla":"1º Sgt", "categoria":"praca"},
                                {"nome":"2º Sargento", "sigla":"2º Sgt", "categoria":"praca"},
                                {"nome":"3º Sargento", "sigla":"3º Sgt", "categoria":"praca"},                                
                                {"nome":"Cabo", "sigla":"Cb", "categoria":"praca"},
                                {"nome":"Soldado", "sigla":"Sd", "categoria":"praca"},
                                {"nome":"Taifeiro-Mor", "sigla":"TM", "categoria":"praca"},
                                {"nome":"Taifeiro de 1ª Classe", "sigla":"T1", "categoria":"praca"},
                                {"nome":"Taifeiro de 2ª Classe", "sigla":"T2", "categoria":"praca"}
                                
                            ]
                        },
                        {
                            "id":"3", 
                            "nome":"Força Aérea Brasileira", 
                            "sigla":"fab",
                            "postoGraduacao":[
                                {"nome":"Marechal do Ar", "sigla":"Mar Ar", "categoria":"ofgen"},
                                {"nome":"Tenente Brigadeiro do Ar", "sigla":"Ten Brig Ar", "categoria":"ofgen"},
                                {"nome":"Major Brigadeiro do Ar", "sigla":"Maj Brig Ar", "categoria":"ofgen"},
                                {"nome":"Brigadeiro", "sigla":"Brig", "categoria":"ofgen"},
                                {"nome":"Coronel", "sigla":"Cel", "categoria":"ofsup"},
                                {"nome":"Tenente-Coronel", "sigla":"Ten Cel", "categoria":"ofsup"},
                                {"nome":"Major", "sigla":"Maj", "categoria":"ofsup"},
                                {"nome":"Capitão", "sigla":"Cap", "categoria":"ofinter"},
                                {"nome":"1º Tenente", "sigla":"1º Ten", "categoria":"ofsubalt"},
                                {"nome":"2º Tenente", "sigla":"2º Ten", "categoria":"ofsubalt"},
                                {"nome":"Aspirante a Oficial", "sigla":"Asp", "categoria":"ofsubalt"},
                                {"nome":"Cadete", "sigla":"Cad", "categoria":"ofsubalt"},
                                {"nome":"Suboficial", "sigla":"SO", "categoria":"praca"},
                                {"nome":"1º Sargento", "sigla":"1S", "categoria":"praca"},
                                {"nome":"2º Sargento", "sigla":"2S", "categoria":"praca"},
                                {"nome":"3º Sargento", "sigla":"3S", "categoria":"praca"},                                
                                {"nome":"Cabo", "sigla":"Cb", "categoria":"praca"},
                                {"nome":"Soldado de 1ª Classe", "sigla":"S1", "categoria":"praca"},
                                {"nome":"Soldado de 2ª Classe", "sigla":"S2", "categoria":"praca"},
                                {"nome":"Taifeiro-Mor", "sigla":"TM", "categoria":"praca"},
                                {"nome":"Taifeiro de 1ª Classe", "sigla":"T1", "categoria":"praca"},
                                {"nome":"Taifeiro de 2ª Classe", "sigla":"T2", "categoria":"praca"}
                            ]
                        }
                    ]};



var dados = {
    "estados":[
        {"nome":"Amazonas", "sigla":"AM", 
            "cidades":[
                {"id":"1", "nome":"Manaus"},
                {"id":"2", "nome":"Manacapuru"}
            ]
        },
        {"nome":"Roraima", "sigla":"RR", 
            "cidades":[
                {"id":"1", "nome":"Aquela"},
                {"id":"2", "nome":"Aquilo"}
            ]
        },
        {"nome":"Para", "sigla":"PA", 
            "cidades":[
                {"id":"1", "nome":"Belem"},
                {"id":"2", "nome":"Santarem"}
            ]
        }
    ]
    
    
};





function carregar_forca(id, pgId){
    if((id == "txtForca") && (pgId == null)){
        $("#txtForca").html("");
        $("#txtForca").append("<option value=0>Selecione uma Força...</option>");
        $("#txtForca").removeClass("is-invalid");
        $("#txtForca").removeClass("is-valid");
        
        for(var i=0; i<forca.forca.length; i++){
            $("#txtForca").append("<option value="+forca.forca[i].sigla+">"+forca.forca[i].nome+"</option>");
        }
    }else{
        for(var i=0; forca.forca.length; i++){
            if(forca.forca[i].sigla == pgId){
                $("#txtPGradCmtOM").html("");
                $("#txtPGradCmtOM").append("<option value=0>Selecione um Posto/Graduação...</option>");
                $("#txtPGradCmtOM").removeClass("is-invalid");
                $("#txtPGradCmtOM").removeClass("is-valid");
                
                /*$("#txtPGradChImtoOM").html("");
                $("#txtPGradChImtoOM").append("<option value=0>Selecione um Posto/Graduação...</option>");
                $("#txtPGradChImtoOM").removeClass("is-invalid");
                $("#txtPGradChImtoOM").removeClass("is-valid");
                
                $("#txtPGradAl").html("");
                $("#txtPGradAl").append("<option value=0>Selecione um Posto/Graduação...</option>");
                $("#txtPGradAl").removeClass("is-invalid");
                $("#txtPGradAl").removeClass("is-valid");*/
                for(var j=0; j<forca.forca[i].postoGraduacao.length; j++){
                    if((forca.forca[i].postoGraduacao[j].categoria == "ofgen") || (forca.forca[i].postoGraduacao[j].categoria == "ofsup")){
                        $("#txtPGradCmtOMcatB").append("<option value="+forca.forca[i].sigla+">"+forca.forca[i].postoGraduacao[j].nome+"</option>");
                    }
                    /*if((forca.forca[i].postoGraduacao[j].categoria == "ofgen") || (forca.forca[i].postoGraduacao[j].categoria == "ofsup") || (forca.forca[i].postoGraduacao[j].categoria == "ofinter") || (forca.forca[i].postoGraduacao[j].categoria == "ofsubalt")){
                        $("#txtPGradChImtoOM").append("<option value="+forca.forca[i].sigla+">"+forca.forca[i].postoGraduacao[j].nome+"</option>");
                    }
                    if((forca.forca[i].postoGraduacao[j].categoria == "ofinter") || (forca.forca[i].postoGraduacao[j].categoria == "ofsubalt") || (forca.forca[i].postoGraduacao[j].categoria == "praca")){
                        $("#txtPGradAl").append("<option value="+forca.forca[i].sigla+">"+forca.forca[i].postoGraduacao[j].nome+"</option>");
                    }*/
                }
            }            
        }
    }
};

$(function(){     
    carregar_forca("txtForca");
    
    $("#txtForca").change(function(){
        var pgId = $(this).val();
        if($("#txtForca").val() == "0"){
            $("#txtPGradCmtOM").html("");
            $("#txtPGradCmtOM").append("<option value=0>Selecione um Posto/Graduação...</option>");
            $("#txtPGradCmtOM").removeClass("is-invalid");
            $("#txtPGradCmtOM").removeClass("is-valid");

            /*$("#txtPGradChImtoOM").html("");
            $("#txtPGradChImtoOM").append("<option value=0>Selecione um Posto/Graduação...</option>");
            $("#txtPGradChImtoOM").removeClass("is-invalid");
            $("#txtPGradChImtoOM").removeClass("is-valid");

            $("#txtPGradAl").html("");
            $("#txtPGradAl").append("<option value=0>Selecione um Posto/Graduação...</option>");
            $("#txtPGradAl").removeClass("is-invalid");
            $("#txtPGradAl").removeClass("is-valid");*/
        }
        else if(pgId != null){
            carregar_forca("#txtPGradCmtOM", pgId);            
        }
        
    });
    
    carregar_dados('txtEndEstadoOM');
    $("#txtEndEstadoOM").change(function(){
        var cidadeId = $(this).val();
        if(cidadeId != null){
            carregar_dados('txtEndCidadeOM', cidadeId);
        }
    });
});