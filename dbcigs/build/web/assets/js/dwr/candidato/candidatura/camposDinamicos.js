function limpaInput(campo){
    $(campo).val('');
    $(campo).removeClass("is-valid");
    $(campo).removeClass("is-invalid");
}

function limpaSelect(campo){
    $(campo).val('0');
    $(campo).removeClass("is-valid");
    $(campo).removeClass("is-invalid");
}

function limpaAlimentacaoSelect(campo, primeiroSelect){
    dwr.util.removeAllOptions(campo);
    dwr.util.addOptions(campo, [{id: "0", nome: primeiroSelect}], "id", "nome");
}

function alimentaSelectTipoForca(tiposforca){
    dwr.util.removeAllOptions("txtTipoForca");
    dwr.util.addOptions("txtTipoForca", [{id: "0", nome: "Selecione um Tipo de Força..."}], "id", "nome");
    dwr.util.addOptions("txtTipoForca", tiposforca, "id", "nome");
}
FacadeAjax.getTiposForcaDWR(alimentaSelectTipoForca);

function alimentaSelectDependenteTipoForca(idTipoForca){
    FacadeAjax.getForcasByIdTipoForcaDWR(idTipoForca, {
        callback: function(forcas){
            dwr.util.removeAllOptions("txtForca");
            dwr.util.addOptions("txtForca", [{id: "0", nome: "Selecione uma Força..."}], "id", "nome");
            dwr.util.addOptions("txtForca", forcas, "id", "nome");
        } 
    });
    
    if(idTipoForca == 2){
        $("#div-idtmil").removeClass("col-md-6");
        $("#div-idtmil").addClass("col-md-3");
        
        $("#div-cpf").removeClass("col-md-4");
        $("#div-cpf").addClass("col-md-12");
    }
}
/*function alimentaSelectForca(forcas){
    dwr.util.removeAllOptions("txtForca");
    dwr.util.addOptions("txtForca", [{id: "0", nome: "Selecione uma Força..."}], "id", "nome");
    dwr.util.addOptions("txtForca", forcas, "id", "nome");
}
FacadeAjax.getForcasDWR(alimentaSelectForca);*/

function alimentaSelectDependenteForca(idForca){
    FacadeAjax.getEstadosByForcaDWR(idForca, {
        callback: function(estados){
            dwr.util.removeAllOptions("txtEstadoForca");
            dwr.util.addOptions("txtEstadoForca", [{id: "0", nome: "Selecione um Estado..."}], "id", "nome");
            dwr.util.addOptions("txtEstadoForca", estados, "id", "nome");
        } 
    });
    
    FacadeAjax.getPGsByForcaExcetoCbSdDWR(idForca, {
        callback: function(postosgraduacoes){
            dwr.util.removeAllOptions("txtPGradCmtOM");
            dwr.util.addOptions("txtPGradCmtOM", [{id: "0", abreviatura: "Selecione um Posto/Graduação..."}], "id", "abreviatura");
            dwr.util.addOptions("txtPGradCmtOM", postosgraduacoes, "id", "abreviatura");
            
            dwr.util.removeAllOptions("txtPGradChImtoOM");
            dwr.util.addOptions("txtPGradChImtoOM", [{id: "0", abreviatura: "Selecione um Posto/Graduação..."}], "id", "abreviatura");
            dwr.util.addOptions("txtPGradChImtoOM", postosgraduacoes, "id", "abreviatura");
            
            dwr.util.removeAllOptions("txtPGradAl");
            dwr.util.addOptions("txtPGradAl", [{id: "0", abreviatura: "Selecione um Posto/Graduação..."}], "id", "abreviatura");
            dwr.util.addOptions("txtPGradAl", postosgraduacoes, "id", "abreviatura");
        }
    });    
    
    FacadeAjax.getQasQmsByForcaDWR(idForca, {
        callback: function(armas){
            dwr.util.removeAllOptions("txtArmaAl");
            dwr.util.addOptions("txtArmaAl", [{id: "0", nome: "Selecione uma Arma..."}], "id", "nome");
            dwr.util.addOptions("txtArmaAl", armas, "id", "nome");
        }
    });      
    
    if(idForca == 2){
        $("#div-idtmil").removeClass("col-md-6");
        $("#div-idtmil").addClass("col-md-3");
        
        $("#div-cpf").removeClass("col-md-12");
        $("#div-cpf").addClass("col-md-4");
        
        $("#div-cpf").removeClass("col-md-6");
        $("#div-cpf").addClass("col-md-4");
        
        $("#div-preccp").css("display", "block");
        $("#div-cp").css("display", "block");
        
        $("#div-cursoaperfeicoamento").css("display", "block");
        $("#div-cursoaltosestudos").css("display", "block");
    }else{
        $("#div-preccp").css("display", "none");
        limpaInput("input[name=txtPreccpAl]");
        
        $("#div-cp").css("display", "none");
        limpaInput("input[name=txtCPAl]");
        
        $("#div-cursoaperfeicoamento").css("display", "none");
        limpaSelect("select[name=txtPossuiCAperf");
        
        $("#div-cursoaltosestudos").css("display", "none");
        limpaSelect("select[name=txtPossuiCAltEstudos]");
        
        $("#div-idtmil").removeClass("col-md-6");
        $("#div-idtmil").addClass("col-md-3");
        
        $("#div-cpf").removeClass("col-md-3");
        $("#div-cpf").addClass("col-md-12");
        
        $("#div-cpf").removeClass("col-md-6");
        $("#div-cpf").addClass("col-md-12");
        
        $("#div-cpf").removeClass("col-md-12");
        $("#div-cpf").addClass("col-md-12");
    }
    
    if($("select[name=txtTipoForca]").val() == 1){
        $("#div-formacao").css("display", "block");
        FacadeAjax.getEscolasFormacaoByForcaDWR(idForca, {
            callback: function(escolas){
                dwr.util.removeAllOptions("txtFormEscNome");
                dwr.util.addOptions("txtFormEscNome", [{id: "0", nome: "Selecione um Escola..."}], "id", "nome");
                dwr.util.addOptions("txtFormEscNome", escolas, "id", "nome");
            }
        });
    }else{
        $("#div-formacao").css("display", "none");
        limpaSelect("select[name=txtFormEscNome]");
        limpaInput("input[name=txtFormTurma]");      
    } 
    
}

function alimentaSelectDependenteEstado(idForca, idEstado){
    FacadeAjax.getOmsByForcaAndEstadoDWR(idForca, idEstado, {
        callback: function(oms){
            dwr.util.removeAllOptions("txtNomeOM");
            dwr.util.addOptions("txtNomeOM", [{id: "0", nome: "Selecione uma OM..."}], "id", "nome");
            dwr.util.addOptions("txtNomeOM", oms, "id", "nome");
        } 
    });
}

/*function alimentaSelectDependenteOM(idOM){
    FacadeAjax.getOmByIdDWR(idOM, {
        callback:function(om){
            dwr.util.setValues({txtEndCepOM: om.cepEndereco,
                                txtEndNumOM: om.numendereco});
            $("#txtEndCepOM").trigger('change');
            
            if(om.numendereco != null && om.numendereco != ""){
                $("#txtEndNumOM").addClass("is-valid");
                $("#txtEndNumOM").removeClass("is-invalid");
            }else{
                $("#txtEndNumOM").removeClass("is-valid");
                $("#txtEndNumOM").removeClass("is-invalid");
            }
        }
    });
}*/

function alimentaSelectEstadoNaturalidade(estados){
    dwr.util.removeAllOptions("txtNatEstAl");
    dwr.util.addOptions("txtNatEstAl", [{id: "0", nome: "Selecione um Estado..."}], "id", "nome");
    dwr.util.addOptions("txtNatEstAl", estados, "id", "nome");
}
FacadeAjax.getEstadosDWR(alimentaSelectEstadoNaturalidade);
function alimentaSelectDependenteEstadoNaturalidade(idEstado){
    FacadeAjax.getCidadesByEstadoDWR(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtNatCidAl");
            dwr.util.addOptions("txtNatCidAl", [{id: "0", nome: "Selecione uma Cidade..."}], "id", "nome");
            dwr.util.addOptions("txtNatCidAl", cidades, "id", "nome");
        } 
    });
}

function alimentaSelectEstadoCivil(ecs){
    dwr.util.removeAllOptions("txtEstCivilAl");
    dwr.util.addOptions("txtEstCivilAl", [{id: "0", nome: "Selecione um Estado Civil..."}], "id", "nome");
    dwr.util.addOptions("txtEstCivilAl", ecs, "id", "nome");
}
FacadeAjax.getEstadosCivisDWR(alimentaSelectEstadoCivil);

function alimentaSelectEstadoTitEleitor(estados){
    dwr.util.removeAllOptions("txtTitEleitorEstAl");
    dwr.util.addOptions("txtTitEleitorEstAl", [{id: "0", nome: "Selecione um Estado..."}], "id", "nome");
    dwr.util.addOptions("txtTitEleitorEstAl", estados, "id", "nome");
}
FacadeAjax.getEstadosDWR(alimentaSelectEstadoTitEleitor);
function alimentaSelectDependenteEstadoTitEleitor(idEstado){
    FacadeAjax.getCidadesByEstadoDWR(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtTitEleitorCidAl");
            dwr.util.addOptions("txtTitEleitorCidAl", [{id: "0", nome: "Selecione uma Cidade..."}], "id", "nome");
            dwr.util.addOptions("txtTitEleitorCidAl", cidades, "id", "nome");
        } 
    });
}

function alimentaSelectComportamento(comportamentos){
    dwr.util.removeAllOptions("txtCptmAl");
    dwr.util.addOptions("txtCptmAl", [{id: "0", nome: "Selecione um Comportamento..."}], "id", "nome");
    dwr.util.addOptions("txtCptmAl", comportamentos, "id", "nome");
}
FacadeAjax.getComportamentosDWR(alimentaSelectComportamento);

function alimentaSelectGrauParentesco(grausparentesco){
    dwr.util.removeAllOptions("txtParentescoRef");
    dwr.util.addOptions("txtParentescoRef", [{id: "0", nome: "Selecione um Grau de Parentesco..."}], "id", "nome");
    dwr.util.addOptions("txtParentescoRef", grausparentesco, "id", "nome");
    
    dwr.util.removeAllOptions("txtParentescoRefConclusao");
    dwr.util.addOptions("txtParentescoRefConclusao", [{id: "0", nome: "Selecione um Grau de Parentesco..."}], "id", "nome");
    dwr.util.addOptions("txtParentescoRefConclusao", grausparentesco, "id", "nome");
}
FacadeAjax.getGrausParentescoDWR(alimentaSelectGrauParentesco);

function alimentaSelectEstadoEndResid(estados){
    dwr.util.removeAllOptions("txtEstadoEndResid");
    dwr.util.addOptions("txtEstadoEndResid", [{id: "0", nome: "Selecione um Estado..."}], "id", "nome");
    dwr.util.addOptions("txtEstadoEndResid", estados, "id", "nome");
}
FacadeAjax.getEstadosDWR(alimentaSelectEstadoEndResid);
function alimentaSelectDependenteEstadoEndResid(idEstado){
    FacadeAjax.getCidadesByEstadoDWR(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtCidadeEndResid");
            dwr.util.addOptions("txtCidadeEndResid", [{id: "0", nome: "Selecione uma Cidade..."}], "id", "nome");
            dwr.util.addOptions("txtCidadeEndResid", cidades, "id", "nome");
        } 
    });
}

function alimentaSelectEstadoEndCurso(estados){
    dwr.util.removeAllOptions("txtEstadoEndCurso");
    dwr.util.addOptions("txtEstadoEndCurso", [{id: "0", nome: "Selecione um Estado..."}], "id", "nome");
    dwr.util.addOptions("txtEstadoEndCurso", estados, "id", "nome");
}
FacadeAjax.getEstadosDWR(alimentaSelectEstadoEndCurso);
function alimentaSelectDependenteEstadoEndCurso(idEstado){
    FacadeAjax.getCidadesByEstadoDWR(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtCidadeEndCurso");
            dwr.util.addOptions("txtCidadeEndCurso", [{id: "0", nome: "Selecione uma Cidade..."}], "id", "nome");
            dwr.util.addOptions("txtCidadeEndCurso", cidades, "id", "nome");
        } 
    });
}

function alimentaSelectCAperf(tipo, idCategoria, idForca){
    if((tipo != 'n') && (tipo != '0')){
        FacadeAjax.getCursosMilitaresByTipoAndCategoriaAndForcaDWR(tipo, idCategoria, idForca, {
            callback: function(cursos){
                dwr.util.removeAllOptions("txtCAperf");
                dwr.util.addOptions("txtCAperf", [{id: "0", nome: "Selecione um Curso..."}], "id", "nome");
                dwr.util.addOptions("txtCAperf", cursos, "id", "nome");
            } 
        });
    }
}

function alimentaSelectCAltEstudos(tipo, idCategoria, idForca){
    FacadeAjax.getCursosMilitaresByTipoAndCategoriaAndForcaDWR(tipo, idCategoria, idForca, {
        callback: function(cursos){
            dwr.util.removeAllOptions("txtCAltEstudos");
            dwr.util.addOptions("txtCAltEstudos", [{id: "0", nome: "Selecione um Curso..."}], "id", "nome");
            dwr.util.addOptions("txtCAltEstudos", cursos, "id", "nome");
        } 
    });
}

$("select[name=txtTipoForca]").change(function(){
    if(this.value == 1){
        $("#div-vivenciaamazonia").css("display", "block");
    }
    else{
        $("#div-vivenciaamazonia").css("display", "none");
    }
    limpaAlimentacaoSelect("txtForca", "Selecione uma Forca...");
    limpaAlimentacaoSelect("txtEstadoForca", "Selecione um Estado...");
    limpaAlimentacaoSelect("txtNomeOM", "Selecione uma OM...");
    limpaAlimentacaoSelect("txtPGradCmtOM", "Selecione um Posto/Graduação...");
    limpaAlimentacaoSelect("txtPGradChImtoOM", "Selecione um Posto/Graduação...");
    limpaAlimentacaoSelect("txtPGradAl", "Selecione um Posto/Graduação...");
    limpaSelect("select[name=txtSvAmz]");
    
    alimentaSelectDependenteTipoForca(this.value);    
});
$("select[name=txtForca]").change(function(){
    limpaAlimentacaoSelect("txtEstadoForca", "Selecione um Estado...");
    limpaAlimentacaoSelect("txtNomeOM", "Selecione uma OM...");
    limpaAlimentacaoSelect("txtPGradCmtOM", "Selecione um Posto/Graduação...");
    limpaAlimentacaoSelect("txtPGradChImtoOM", "Selecione um Posto/Graduação...");
    limpaAlimentacaoSelect("txtPGradAl", "Selecione um Posto/Graduação...");
    limpaSelect("select[name=txtSvAmz]");
    
    alimentaSelectDependenteForca(this.value);
});
$("select[name=txtEstadoForca]").change(function(){
    limpaAlimentacaoSelect("txtNomeOM", "Selecione uma OM...");
    
    var idForca = $("select[name=txtForca]").val();
    alimentaSelectDependenteEstado(idForca, this.value);
});
/*$("select[name=txtNomeOM]").change(function(){
    alimentaSelectDependenteOM(this.value);
});*/
$("select[name=txtNatEstAl]").change(function(){
    alimentaSelectDependenteEstadoNaturalidade(this.value);
});
$("select[name=txtTitEleitorEstAl]").change(function(){
    alimentaSelectDependenteEstadoTitEleitor(this.value);
});
$("select[name=txtPossuiCAperf]").change(function(){
    var tipo = 1;
    var idCategoria = $("input[name=txtCategoriaCandidatura]").val();
    var idForca = $("select[name=txtForca]").val();
    
    if(this.value == 's'){
        alimentaSelectCAperf(tipo, idCategoria, idForca);
    }
});
$("select[name=txtPossuiCAltEstudos]").change(function(){
    var tipo = 2;
    var idCategoria = $("input[name=txtCategoriaCandidatura]").val();
    var idForca = $("select[name=txtForca]").val();
    
    if(this.value == 's'){
        alimentaSelectCAltEstudos(tipo, idCategoria, idForca);
    }
});
$("select[name=txtEstadoEndResid]").change(function(){
    alimentaSelectDependenteEstadoEndResid(this.value);
});
$("select[name=txtEstadoEndCurso]").change(function(){
    alimentaSelectDependenteEstadoEndCurso(this.value);
});

/*function preencheFormulario(idtCandidato){
    FacadeAjax.getAlunoByIdentidadeDWR(idtCandidato, {
       callback:function(candidato){
            dwr.util.setValues({txtNomeAl: candidato.nome});
            dwr.util.setValues({txtSobrenomeAl: candidato.sobrenome});
            dwr.util.setValues({txtNomeGuerraAl: candidato.nomeguerra});
            dwr.util.setValues({txtIdtMilAl: candidato.identidade});
       }
    }); 
}

$(document).ready(function(){
    var idtCandidato = $("input[name=idtMilCandidato]").val();
    preencheFormulario(idtCandidato);
});*/