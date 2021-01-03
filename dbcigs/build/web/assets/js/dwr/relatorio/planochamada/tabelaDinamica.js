$("select[name=txtTipoRela]").change(function(){
    dwr.util.removeAllRows("rows-planochamada");
    
    var tipoRela = $("select[name=txtTipoRela]").val();
    if(tipoRela == 0){
        $("#tbl-planochamada>thead>tr>th").remove();
        $("#div-planochamada").css("display", "none");
        $("#div-btn-pdf").css("display", "none");
        $("#div-planochamada-0").css("display", "none");
    }
    else{
        $("#tbl-planochamada>thead>tr>th").remove(); 
        $("#div-planochamada-0").css("display", "none");
        $("#div-btn-pdf").css("display", "none");
        $("#div-planochamada").css("display", "block");
        $("#tbl-planochamada>thead>tr").append("<th>P/G</th>");
        $("#tbl-planochamada>thead>tr").append("<th>NOME GUERRA</th>");
        $("#tbl-planochamada>thead>tr").append("<th>FONE</th>");
        $("#tbl-planochamada>thead>tr").append("<th>ENDEREÇO</th>");
        $("#tbl-planochamada>thead>tr").append("<th>DIVISÃO/SEÇÃO</th>");
    }
});


var colunasPlanoChamada = [
    function(listplanochamada){ return listplanochamada.abreviaturaPostoGraduacaoMilitar;},
    function(listplanochamada){ return listplanochamada.nomeGuerraMilitar;},
    function(listplanochamada){ return "(" + listplanochamada.fone.substr(0,2) + ") " + listplanochamada.fone.substr(2,5) + "-" + listplanochamada.fone.substr(7,4)},
    function(listplanochamada){ return "(" + listplanochamada.cepEnderecoMilitar + ") " + listplanochamada.descricaoEnderecoMilitar + ", " + listplanochamada.endNumMilitar
                                    + ", " + listplanochamada.bairroEnderecoMilitar + " - " + listplanochamada.nomeCidadeEnderecoMilitar + "/" + listplanochamada.siglaEstadoCidadeEnderecoMilitar;},
    function(listplanochamada){ return listplanochamada.abreviaturaDivisaoSecaoMilitar + " - " + listplanochamada.abreviaturaSetorMilitar;}
];

function getMilitaresByDivSec(divsec){
    FacadeAjax.getMilitaresByDivSecDWR(divsec, {        
        callback:function(listplanochamada){ 
            dwr.util.removeAllRows("rows-planochamada");
            if(listplanochamada.length == 0){                
                $("#div-planochamada").css("display", "none");
                $("#div-planochamada-0").css("display", "block");
            }
            else{
                $("#div-planochamada-0").css("display", "none");
                $("#div-planochamada").css("display", "block");
                dwr.util.addRows("rows-planochamada", listplanochamada, colunasPlanoChamada, { escapeHtml: false }); 
            }
        }
    });
    $("#div-btn-pdf").css("display", "block");
}

function getMilitaresByCia(cia){
    FacadeAjax.getMilitaresByCiaDWR(cia, {        
        callback:function(listplanochamada){ 
            dwr.util.removeAllRows("rows-planochamada");
            if(listplanochamada.length == 0){                
                $("#div-planochamada").css("display", "none");
                $("#div-planochamada-0").css("display", "block");
            }
            else{
                $("#div-planochamada-0").css("display", "none");
                $("#div-planochamada").css("display", "block");
                dwr.util.addRows("rows-planochamada", listplanochamada, colunasPlanoChamada, { escapeHtml: false }); 
            }
        }
    });
    $("#div-btn-pdf").css("display", "block");
}

function getMilitaresCIGS(){
    FacadeAjax.getMilitaresCIGSDWR({        
        callback:function(listplanochamada){ 
            dwr.util.removeAllRows("rows-planochamada");
            if(listplanochamada.length == 0){                
                $("#div-planochamada").css("display", "none");
                $("#div-planochamada-0").css("display", "block");
            }
            else{
                $("#div-planochamada-0").css("display", "none");
                $("#div-planochamada").css("display", "block");
                dwr.util.addRows("rows-planochamada", listplanochamada, colunasPlanoChamada, { escapeHtml: false }); 
            }
        }
    });
    $("#div-btn-pdf").css("display", "block");
}

function getPlanoChamadaByMilitar(idPostoGraduacao, nomeguerra){
    FacadeAjax.getPlanoChamadaByMilitarDWR(idPostoGraduacao, nomeguerra, {        
        callback:function(listplanochamada){ 
            dwr.util.removeAllRows("rows-planochamada");
            if(listplanochamada.length == 0){                
                $("#div-planochamada").css("display", "none");
                $("#div-planochamada-0").css("display", "block");
            }
            else{
                $("#div-planochamada-0").css("display", "none");
                $("#div-planochamada").css("display", "block");
                dwr.util.addRows("rows-planochamada", listplanochamada, colunasPlanoChamada, { escapeHtml: false }); 
            }
        }
    });
    $("#div-btn-pdf").css("display", "block");
}

function getMilitaresByPGrad(pgrad){
    FacadeAjax.getMilitaresByPGradDWR(pgrad, {        
        callback:function(listplanochamada){ 
            dwr.util.removeAllRows("rows-planochamada");
            if(listplanochamada.length == 0){                
                $("#div-planochamada").css("display", "none");
                $("#div-planochamada-0").css("display", "block");
            }
            else{
                $("#div-planochamada-0").css("display", "none");
                $("#div-planochamada").css("display", "block");
                dwr.util.addRows("rows-planochamada", listplanochamada, colunasPlanoChamada, { escapeHtml: false }); 
            }
        }
    });
    $("#div-btn-pdf").css("display", "block");
}