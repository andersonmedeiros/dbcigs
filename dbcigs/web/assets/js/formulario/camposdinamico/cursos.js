/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var dados_curso = {
    "curso": [
        {
            "sigla": "COS",
            "nome": "Curso de Operações na Selva",
            "categorias": [
                {
                    "nome": "A",
                    "descricao": "Oficiais Superiores"
                },
                {
                    "nome": "B",
                    "descricao": "Oficiais Intermediários"
                },
                {
                    "nome": "C",
                    "descricao": "Sargentos"
                }
            ]
        },
        {
            "sigla": "CIOS",
            "nome": "Curso Internacional de Operações na Selva",
            "categorias": [
                {
                    "nome": "U",
                    "descricao": "Única"
                }
            ]
        },
        {
            "sigla": "CPOS",
            "nome": "Curso de Planejamento de Operações na Selva",
            "categorias": [
                {
                    "nome": "A",
                    "descricao": "Oficiais Superiores"
                }
            ]
        }
    ]
};

function carregar_curso(id, siglaCurso){
    if((id == "#txtCurso") && (siglaCurso == null)){
        $("#txtCurso").html("");
        $("#txtCurso").append("<option value=0>Selecione um Curso...</option>");
        $("#txtCurso").removeClass("is-invalid");
        $("#txtCurso").removeClass("is-valid");
        
        for(var i=0; i<dados_curso.curso.length; i++){
            $("#txtCurso").append("<option value="+"'"+dados_curso.curso[i].sigla+"'"+">"+dados_curso.curso[i].nome+"</option>");
        }
    }else{
        for(var i=0; dados_curso.curso.length; i++){
            if(dados_curso.curso[i].sigla == siglaCurso){
                $("#txtCategoria").html("");
                $("#txtCategoria").append("<option value=0>Selecione uma Categoria...</option>");
                $("#txtCategoria").removeClass("is-invalid");
                $("#txtCategoria").removeClass("is-valid");
                
                for(var j=0; j<dados_curso.curso[i].categorias.length; j++){
                    $("#txtCategoria").append("<option value="+"'"+dados_curso.curso[i].categorias[j].nome+"'"+">"+dados_curso.curso[i].categorias[j].nome+" - "+dados_curso.curso[i].categorias[j].descricao+"</option>");
                }
            }            
        }
    }
};

function limpa_form_curso(){
    $("#txtCategoria").html("");
    $("#txtCategoria").append("<option value=0>Selecione uma Categoria...</option>");
    $("#txtCategoria").removeClass("is-invalid");
    $("#txtCategoria").removeClass("is-valid");
}

$(function(){
    carregar_curso("#txtCurso"); 
    
    if($("#txtCurso").val() == "0"){
        limpa_form_curso();
    }
    
    $("#txtCurso").change(function(){
        var siglaCurso = $(this).val();
        if($("#txtCurso").val() == "0"){
            limpa_form_curso();
        }
        else if(siglaCurso != null){
            carregar_curso("#txtCategoria", siglaCurso);            
        }
    });
    
    
    
    
});