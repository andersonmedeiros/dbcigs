/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function limpaFormEndOM(){
    $("input[name=txtEndCepOM]").val('');
    $("input[name=txtEndCepOM]").removeClass("is-valid");
    $("input[name=txtEndCepOM]").removeClass("is-invalid");
    $("input[name=txtEndCepOM]").prop("readonly", true);
    
    $("input[name=txtEndNomeOM]").val('');
    $("input[name=txtEndNomeOM]").removeClass("is-valid");
    $("input[name=txtEndNomeOM]").removeClass("is-invalid");
    $("input[name=txtEndNomeOM]").prop("readonly", true);
    
    $("input[name=txtEndNumOM]").val('');
    $("input[name=txtEndNumOM]").removeClass("is-valid");
    $("input[name=txtEndNumOM]").removeClass("is-invalid");
    $("input[name=txtEndNumOM]").prop("readonly", true);
    
    $("input[name=txtEndEstadoOM]").val('');
    $("input[name=txtEndEstadoOM]").removeClass("is-valid");
    $("input[name=txtEndEstadoOM]").removeClass("is-invalid");
    $("input[name=txtEndEstadoOM]").prop("readonly", true);
    
    $("input[name=txtEndCidadeOM]").val('');
    $("input[name=txtEndCidadeOM]").removeClass("is-valid");
    $("input[name=txtEndCidadeOM]").removeClass("is-invalid");
    $("input[name=txtEndCidadeOM]").prop("readonly", true);
    
    $("input[name=txtEndBairroOM]").val('');
    $("input[name=txtEndBairroOM]").removeClass("is-valid");
    $("input[name=txtEndBairroOM]").removeClass("is-invalid");
    $("input[name=txtEndBairroOM]").prop("readonly", true);
    
    $("input[name=txtEndCompOM]").val('');
    $("input[name=txtEndCompOM]").removeClass("is-valid");
    $("input[name=txtEndCompOM]").removeClass("is-invalid");
    $("input[name=txtEndCompOM]").prop("readonly", true);
    
    $("input[name=txtEndPtRefOM]").val('');
    $("input[name=txtEndPtRefOM]").removeClass("is-valid");
    $("input[name=txtEndPtRefOM]").removeClass("is-invalid");
    $("input[name=txtEndPtRefOM]").prop("readonly", true);
}

function removeValidacao(campo){
    $(campo).removeClass("is-valid");
    $(campo).removeClass("is-invalid");
}

function readonlyFormEndOM(){
    if(($("input[name=txtEndCepOM]").val()=="")||($("input[name=txtEndCepOM]").val()==null)){
        $("input[name=txtEndCepOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndCepOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndNomeOM]").val()=="")||($("input[name=txtEndNomeOM]").val()==null)){
        $("input[name=txtEndNomeOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndNomeOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndNumOM]").val()=="")||($("input[name=txtEndNumOM]").val()==null)){
        $("input[name=txtEndNumOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndNumOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndEstadoOM]").val()=="")||($("input[name=txtEndEstadoOM]").val()==null)){
        $("input[name=txtEndEstadoOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndEstadoOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndCidadeOM]").val()=="")||($("input[name=txtEndCidadeOM]").val()==null)){
        $("input[name=txtEndCidadeOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndCidadeOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndBairroOM]").val()=="")||($("input[name=txtEndBairroOM]").val()==null)){
        $("input[name=txtEndBairroOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndBairroOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndCompOM]").val()=="")||($("input[name=txtEndCompOM]").val()==null)){
        $("input[name=txtEndCompOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndCompOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndPtRefOM]").val()=="")||($("input[name=txtEndPtRefOM]").val()==null)){
        $("input[name=txtEndPtRefOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndPtRefOM]").prop("readonly", true);
    }
}

function montaSelectForca(forcas){
    dwr.util.removeAllOptions("txtForca");
    dwr.util.addOptions("txtForca", [{id: "0", nome: "Selecione uma Força..."}], "id", "nome");
    dwr.util.addOptions("txtForca", forcas, "id", "nome");
}
FacadeAjax.getForcas(montaSelectForca);

function montaSelectDependenteForca(idForca){
    FacadeAjax.getEstadosByForca(idForca, {
        callback: function(list){
            dwr.util.removeAllOptions("txtEstadoForca");
            dwr.util.addOptions("txtEstadoForca", [{id: "0", nome: "Selecione um Estado..."}], "id", "nome");
            dwr.util.addOptions("txtEstadoForca", list, "id", "nome");
        } 
    });
    
    FacadeAjax.getPostoGraduacoesByForcaExcetoCbSd(idForca, {
        callback: function(list){
            dwr.util.removeAllOptions("txtPGradCmtOM");
            dwr.util.addOptions("txtPGradCmtOM", [{id: "0", abreviatura: "Selecione um Posto/Graduação..."}], "id", "abreviatura");
            dwr.util.addOptions("txtPGradCmtOM", list, "id", "abreviatura");

            dwr.util.removeAllOptions("txtPGradChImtoOM");
            dwr.util.addOptions("txtPGradChImtoOM", [{id: "0", abreviatura: "Selecione um Posto/Graduação..."}], "id", "abreviatura");
            dwr.util.addOptions("txtPGradChImtoOM", list, "id", "abreviatura");
            
            dwr.util.removeAllOptions("txtPGradAl");
            dwr.util.addOptions("txtPGradAl", [{id: "0", abreviatura: "Selecione um Posto/Graduação..."}], "id", "abreviatura");
            dwr.util.addOptions("txtPGradAl", list, "id", "abreviatura"); 
        } 
    });
    
    FacadeAjax.getEscolasFormacao(idForca, {
        callback: function(escolas){
            dwr.util.removeAllOptions("txtFormEscNome");
            dwr.util.addOptions("txtFormEscNome", [{id: "0", nome: "Selecione uma Escola..."}], "id", "nome");
            dwr.util.addOptions("txtFormEscNome", escolas, "id", "nome");
        } 
    });
}

function montaSelectDependenteEscolaFormacao(idEscolaFormacao){
    FacadeAjax.getAbreviaturaEscola(idEscolaFormacao, {
        callback: function(abreviatura){
            dwr.util.setValues({txtFormEscAbrev: abreviatura});
            if((abreviatura == "") || (abreviatura == null)){
                 $("input[name=txtFormEscAbrev]").removeClass("is-valid");
                 $("input[name=txtFormEscAbrev]").removeClass("is-invalid");
            }
            else{
                 $("input[name=txtFormEscAbrev]").addClass("is-valid");
                 $("input[name=txtFormEscAbrev]").removeClass("is-invalid");
            }
        } 
    });
}

function montaSelectDependenteEstadoForca(idForca, idEstado){
    FacadeAjax.getOmsByForcaAndEstado(idForca, idEstado, {
        callback: function(list){
            dwr.util.removeAllOptions("txtNomeOM");
            dwr.util.addOptions("txtNomeOM", [{id: "0", nome: "Selecione uma OM..."}], "id", "nome");
            dwr.util.addOptions("txtNomeOM", list, "id", "nome");
        } 
    });
}
function montaSelectDependenteOM(idOM){
    FacadeAjax.getAbreviaturaOM(idOM, {
        callback: function(abreviatura){
            dwr.util.setValues({txtAbrevOM: abreviatura});
            if((abreviatura == "") || (abreviatura == null)){
                 $("input[name=txtAbrevOM]").removeClass("is-valid");
                 $("input[name=txtAbrevOM]").removeClass("is-invalid");
            }
            else{
                 $("input[name=txtAbrevOM]").addClass("is-valid");
                 $("input[name=txtAbrevOM]").removeClass("is-invalid");
            }
        } 
    });
    FacadeAjax.getOM(idOM, {
        callback: function(om){
            dwr.util.setValues({txtAbrevOM: om.abreviatura, txtEndNumOM: om.numEndereco});
            if((om.abreviatura == "") || (om.abreviatura == null)){
                 $("input[name=txtAbrevOM]").removeClass("is-valid");
                 $("input[name=txtAbrevOM]").removeClass("is-invalid");
            }
            else{
                 $("input[name=txtAbrevOM]").addClass("is-valid");
                 $("input[name=txtAbrevOM]").removeClass("is-invalid");
            }
            if((om.numEndereco == "") || (om.numEndereco == null)){
                 $("input[name=txtEndNumOM]").removeClass("is-valid");
                 $("input[name=txtEndNumOM]").removeClass("is-invalid");
            }
            else{
                 $("input[name=txtEndNumOM]").addClass("is-valid");
                 $("input[name=txtEndNumOM]").removeClass("is-invalid");
            }
        } 
    });
    
    FacadeAjax.getEnderecoByOM(idOM, {
        callback: function(endereco){
            dwr.util.setValues({txtEndCepOM: endereco.cep});
            $("#txtEndCepOM").trigger('change');
        } 
    });
}

function montaSelectArma(qasqms){
    dwr.util.removeAllOptions("txtArmaAl");
    dwr.util.addOptions("txtArmaAl", [{id: "0", nome: "Selecione uma Arma..."}], "id", "nome");
    dwr.util.addOptions("txtArmaAl", qasqms, "id", "nome");
}
FacadeAjax.getQasQms(montaSelectArma);

function montaSelectNatEstado(estados){
    dwr.util.removeAllOptions("txtNatEstAl");
    dwr.util.addOptions("txtNatEstAl", [{id: "0", nome: "Selecione um Estado..."}], "id", "nome");
    dwr.util.addOptions("txtNatEstAl", estados, "id", "nome");
}
FacadeAjax.getEstados(montaSelectNatEstado);

function montaSelectDependenteNatEstado(idEstado){
    FacadeAjax.getCidadesByEstado(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtNatCidAl");
            dwr.util.addOptions("txtNatCidAl", [{id: "0", nome: "Selecione uma Cidade..."}], "id", "nome");
            dwr.util.addOptions("txtNatCidAl", cidades, "id", "nome");        
        } 
    });
}

function montaSelectEstadoCivil(estadoscivis){
    dwr.util.removeAllOptions("txtEstCivilAl");
    dwr.util.addOptions("txtEstCivilAl", [{id: "0", nome: "Selecione uma Estado Civil..."}], "id", "nome");
    dwr.util.addOptions("txtEstCivilAl", estadoscivis, "id", "nome");
}
FacadeAjax.getEstadosCivis(montaSelectEstadoCivil);

function montaSelectTitEleitorEstado(estados){
    dwr.util.removeAllOptions("txtTitEleitorEstAl");
    dwr.util.addOptions("txtTitEleitorEstAl", [{id: "0", nome: "Selecione um Estado..."}], "id", "nome");
    dwr.util.addOptions("txtTitEleitorEstAl", estados, "id", "nome");
}
FacadeAjax.getEstados(montaSelectTitEleitorEstado);

function montaSelectDependenteTitEleitorEstado(idEstado){
    FacadeAjax.getCidadesByEstado(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtTitEleitorCidAl");
            dwr.util.addOptions("txtTitEleitorCidAl", [{id: "0", nome: "Selecione uma Cidade..."}], "id", "nome");
            dwr.util.addOptions("txtTitEleitorCidAl", cidades, "id", "nome");        
        } 
    });
}

function montaSelectEscolaFormacao(escolas){
    dwr.util.removeAllOptions("txtFormEscNome");
    dwr.util.addOptions("txtFormEscNome", [{id: "0", nome: "Selecione uma Escola..."}], "id", "nome");
    dwr.util.addOptions("txtFormEscNome", escolas, "id", "nome");
}
FacadeAjax.getEstados(montaSelectTitEleitorEstado);

function montaSelectComportamento(comportamentos){
    dwr.util.removeAllOptions("txtCptmAl");
    dwr.util.addOptions("txtCptmAl", [{id: "0", nome: "Selecione um Comportamento..."}], "id", "nome");
    dwr.util.addOptions("txtCptmAl", comportamentos, "id", "nome");
}
FacadeAjax.getComportamentos(montaSelectComportamento);

function montaSelectParentesco(parentescos){
    dwr.util.removeAllOptions("txtParentescoRef");
    dwr.util.addOptions("txtParentescoRef", [{id: "0", nome: "Selecione um Grau de Parentesco..."}], "id", "nome");
    dwr.util.addOptions("txtParentescoRef", parentescos, "id", "nome");
    
    dwr.util.removeAllOptions("txtParentescoRefConclusao");
    dwr.util.addOptions("txtParentescoRefConclusao", [{id: "0", nome: "Selecione um Grau de Parentesco..."}], "id", "nome");
    dwr.util.addOptions("txtParentescoRefConclusao", parentescos, "id", "nome");
}
FacadeAjax.getGrausParentesco(montaSelectParentesco);

/*function montaSelectOMAmazonia(oms){
    dwr.util.removeAllOptions("txtOMNomeSvAmz");
    dwr.util.addOptions("txtOMNomeSvAmz", [{id: "0", nome: "Selecione uma OM..."}], "id", "nome");
    dwr.util.addOptions("txtOMNomeSvAmz", oms, "id", "nome");
}
FacadeAjax.getOmsAmazonia(montaSelectOMAmazonia);*/

$(function(){
    $("input[name=txtAbrevOM]").val('');
    $("input[name=txtAbrevOM]").prop("readonly", true);    
    $("input[name=txtAbrevOM]").removeClass("is-valid");
    $("input[name=txtAbrevOM]").removeClass("is-invalid");
    
    $("input[name=txtFormEscAbrev]").val('');
    $("input[name=txtFormEscAbrev]").prop("readonly", true);
    $("input[name=txtFormEscAbrev]").removeClass("is-valid");
    $("input[name=txtFormEscAbrev]").removeClass("is-invalid");
    
    //ENDEREÇO OM
    limpaFormEndOM();
    readonlyFormEndOM();
    
});

$("select[name=txtForca]").change(function(){    
    $("select[name=txtEstadoForca]").val("0");
    $("select[name=txtEstadoForca] option:not(:selected)").remove();
    removeValidacao("select[name=txtEstadoForca]");
    
    $("select[name=txtNomeOM]").val("0");
    $('select[name=txtNomeOM] option:not(:selected)').remove();
    removeValidacao("select[name=txtNomeOM]");
    
    $("input[name=txtAbrevOM]").val('');
    removeValidacao("input[name=txtAbrevOM]");
    
    removeValidacao("select[name=txtPGradCmtOM]");
    removeValidacao("select[name=txtPGradChImtoOM]");
    removeValidacao("select[name=txtPGradAl]");    
    
    $("select[name=txtFormEscNome]").val("0");
    removeValidacao("select[name=txtFormEscNome]");
    
    $("input[name=txtFormEscAbrev]").val('');
    removeValidacao("input[name=txtFormEscAbrev]");
    
    limpaFormEndOM();
    montaSelectDependenteForca(this.value);
    
});

$("select[name=txtEstadoForca]").change(function(){
    $("select[name=txtNomeOM]").val("0");
    $('select[name=txtNomeOM] option:not(:selected)').remove();
    $("select[name=txtNomeOM]").removeClass("is-valid");
    $("select[name=txtNomeOM]").removeClass("is-invalid");
    
    $("input[name=txtAbrevOM]").val('');
    $("input[name=txtAbrevOM]").removeClass("is-valid");
    $("input[name=txtAbrevOM]").removeClass("is-invalid");
    
    limpaFormEndOM();
    var idForca = $("select[name=txtForca]").val();
    montaSelectDependenteEstadoForca(idForca, this.value);
    
});

$("select[name=txtNomeOM]").change(function(){    
    limpaFormEndOM();
    readonlyFormEndOM();
    montaSelectDependenteOM(this.value);
});

$("select[name=txtNatEstAl]").change(function(){
    $("select[name=txtNatCidAl]").removeClass("is-valid");
    $("select[name=txtNatCidAl]").removeClass("is-invalid");
    montaSelectDependenteNatEstado(this.value);
});

$("select[name=txtTitEleitorEstAl]").change(function(){
    $("select[name=txtTitEleitorCidAl]").removeClass("is-valid");
    $("select[name=txtTitEleitorCidAl]").removeClass("is-invalid");
    montaSelectDependenteTitEleitorEstado(this.value);
});

$("select[name=txtFormEscNome]").change(function(){
    if($("select[name=txtFormEscNome]").val() == '0'){
        $("input[name=txtFormEscAbrev]").val("");
        $("input[name=txtFormEscAbrev]").prop("readonly", true);
        $("input[name=txtFormEscAbrev]").removeClass("is-valid");
        $("input[name=txtFormEscAbrev]").removeClass("is-invalid");
    }else{
        $("input[name=txtFormEscAbrev]").prop("readonly", true);
    }
    
    montaSelectDependenteEscolaFormacao(this.value);
});

