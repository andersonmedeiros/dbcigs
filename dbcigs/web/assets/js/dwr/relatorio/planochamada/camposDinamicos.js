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


//Agrupando e preparando os dados para os select
//--> Estado Civil
function alimentaSelectEstadoCivil(ecs){
    dwr.util.removeAllOptions("txtEstCivil");
    dwr.util.addOptions("txtEstCivil", [{id: "0", nome: "Selecione um estado civil..."}], "id", "nome");
    dwr.util.addOptions("txtEstCivil", ecs, "id", "nome");
}
FacadeAjax.getEstadosCivisDWR(alimentaSelectEstadoCivil);

//--> Escolaridade
function alimentaSelectEscolaridade(escs){
    dwr.util.removeAllOptions("txtEscolaridade");
    dwr.util.addOptions("txtEscolaridade", [{id: "0", nome: "Selecione uma escolaridade..."}], "id", "nome");
    dwr.util.addOptions("txtEscolaridade", escs, "id", "nome");
}
FacadeAjax.getEscolaridadesDWR(alimentaSelectEscolaridade);

//--> Religião
function alimentaSelectReligiao(rels){
    dwr.util.removeAllOptions("txtReligiao");
    dwr.util.addOptions("txtReligiao", [{id: "0", nome: "Selecione uma religião..."}], "id", "nome");
    dwr.util.addOptions("txtReligiao", rels, "id", "nome");
}
FacadeAjax.getReligioesDWR(alimentaSelectReligiao);

//--> Naturalidade Estado
function alimentaSelectEstadoNaturalidade(estados){
    dwr.util.removeAllOptions("txtNatEst");
    dwr.util.addOptions("txtNatEst", [{id: "0", nome: "Selecione um estado..."}], "id", "nome");
    dwr.util.addOptions("txtNatEst", estados, "id", "nome");
}
FacadeAjax.getEstadosDWR(alimentaSelectEstadoNaturalidade);

//--> Naturalidade Cidade <- Estado
function alimentaSelectDependenteEstadoNaturalidade(idEstado){
    FacadeAjax.getCidadesByEstadoDWR(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtNatCid");
            dwr.util.addOptions("txtNatCid", [{id: "0", nome: "Selecione uma cidade..."}], "id", "nome");
            dwr.util.addOptions("txtNatCid", cidades, "id", "nome");
        } 
    });
}

//--> Estado Titulo Eleitor
function alimentaSelectEstadoTitEleitor(estados){
    dwr.util.removeAllOptions("txtTitEleitorEst");
    dwr.util.addOptions("txtTitEleitorEst", [{id: "0", nome: "Selecione um estado..."}], "id", "nome");
    dwr.util.addOptions("txtTitEleitorEst", estados, "id", "nome");
}
FacadeAjax.getEstadosDWR(alimentaSelectEstadoTitEleitor);

//--> Cidade Titulo Eleitor <- Estado
function alimentaSelectDependenteEstadoTitEleitor(idEstado){
    FacadeAjax.getCidadesByEstadoDWR(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtTitEleitorCid");
            dwr.util.addOptions("txtTitEleitorCid", [{id: "0", nome: "Selecione uma cidade..."}], "id", "nome");
            dwr.util.addOptions("txtTitEleitorCid", cidades, "id", "nome");
        } 
    });
}

//--> Posto/Graduação
function alimentaSelectPostoGraduacao(pgs){
    dwr.util.removeAllOptions("txtPGrad");
    dwr.util.addOptions("txtPGrad", [{id: "0", abreviatura: "Selecione um posto ou graduação..."}], "id", "abreviatura");
    dwr.util.addOptions("txtPGrad", pgs, "id", "abreviatura");
}
FacadeAjax.getPostosGraduacoesDWR(alimentaSelectPostoGraduacao);

//--> Quadros, Armas e Serviços
function alimentaSelectQas(qass){
    dwr.util.removeAllOptions("txtQas");
    dwr.util.addOptions("txtQas", [{id: "0", nome: "Selecione um qas..."}], "id", "nome");
    dwr.util.addOptions("txtQas", qass, "id", "nome");
}
FacadeAjax.getQasDWR(alimentaSelectQas);

//--> Comportamento
function alimentaSelectComportamento(comportamentos){
    dwr.util.removeAllOptions("txtCptm");
    dwr.util.addOptions("txtCptm", [{id: "0", nome: "Selecione um comportamento..."}], "id", "nome");
    dwr.util.addOptions("txtCptm", comportamentos, "id", "nome");
}
FacadeAjax.getComportamentosDWR(alimentaSelectComportamento);

//--> Divisão ou Seção
function alimentaSelectDivisaoSecao(divisoessecoes){
    dwr.util.removeAllOptions("txtDivSec");
    dwr.util.addOptions("txtDivSec", [{id: "0", nome: "Selecione uma divisão ou seção..."}], "id", "nome");
    dwr.util.addOptions("txtDivSec", divisoessecoes, "id", "nome");
}
FacadeAjax.getDivisoesSecoesDWR(alimentaSelectDivisaoSecao);

//--> Setor <- Divisão ou Seção
function alimentaSelectDependenteDivisaoSecao(idDivSec){
    FacadeAjax.getSetoresByDivisaoSecaoDWR(idDivSec, {
        callback: function(setores){
            dwr.util.removeAllOptions("txtSetor");
            dwr.util.addOptions("txtSetor", [{id: "0", nome: "Selecione um setor..."}], "id", "nome");
            dwr.util.addOptions("txtSetor", setores, "id", "nome");
        } 
    });
}

//--> Estado Endereco
function alimentaSelectEstadoEndereco(estados){
    dwr.util.removeAllOptions("txtEstadoEndResid");
    dwr.util.addOptions("txtEstadoEndResid", [{id: "0", nome: "Selecione um estado..."}], "id", "nome");
    dwr.util.addOptions("txtEstadoEndResid", estados, "id", "nome");
}
FacadeAjax.getEstadosDWR(alimentaSelectEstadoEndereco);

//--> Cidade Endereco <- Estado
function alimentaSelectDependenteEstadoEndereco(idEstado){
    FacadeAjax.getCidadesByEstadoDWR(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtCidadeEndResid");
            dwr.util.addOptions("txtCidadeEndResid", [{id: "0", nome: "Selecione uma cidade..."}], "id", "nome");
            dwr.util.addOptions("txtCidadeEndResid", cidades, "id", "nome");
        } 
    });
}

//mudando os dados do selct cidade conforme o estado selecionado
$("select[name=txtNatEst]").change(function(){
    alimentaSelectDependenteEstadoNaturalidade(this.value);
});

//mudando os dados do selct cidade conforme o estado selecionado
$("select[name=txtTitEleitorEst]").change(function(){
    alimentaSelectDependenteEstadoTitEleitor(this.value);
});

//mudando os dados do selct setor conforme a divisão ou seção selecionada
$("select[name=txtDivSec]").change(function(){
    alimentaSelectDependenteDivisaoSecao(this.value);
});

//mudando os dados do selct cidade conforme o estado selecionado
$("select[name=txtEstadoEndResid]").change(function(){
    alimentaSelectDependenteEstadoEndereco(this.value);
});