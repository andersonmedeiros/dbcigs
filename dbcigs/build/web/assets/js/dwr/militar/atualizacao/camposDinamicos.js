//Anderson de Paula Andrade Medeiros
//Técnico em Informática
//28.12.2020
var functionValidSelectTReal = function(campo){
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

var functionValidInputTReal = function(campo){
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

var functionValidDataNascTReal = function(campo){
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
function alimentaSelectDependenteEstadoNaturalidade(idEstado, valor){
    FacadeAjax.getCidadesByEstadoDWR(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtNatCid");
            dwr.util.addOptions("txtNatCid", [{id: "0", nome: "Selecione uma cidade..."}], "id", "nome");
            dwr.util.addOptions("txtNatCid", cidades, "id", "nome");
            dwr.util.setValue("txtNatCid", selectAtt(valor, "select[name=txtNatCid]"));
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
function alimentaSelectDependenteEstadoTitEleitor(idEstado, valor){
    FacadeAjax.getCidadesByEstadoDWR(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtTitEleitorCid");
            dwr.util.addOptions("txtTitEleitorCid", [{id: "0", nome: "Selecione uma cidade..."}], "id", "nome");
            dwr.util.addOptions("txtTitEleitorCid", cidades, "id", "nome");
            dwr.util.setValue("txtTitEleitorCid", selectAtt(valor, "select[name=txtTitEleitorCid]"));
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
function alimentaSelectDependenteDivisaoSecao(idDivSec, valor){
    FacadeAjax.getSetoresByDivisaoSecaoDWR(idDivSec, {
        callback: function(setores){
            dwr.util.removeAllOptions("txtSetor");
            dwr.util.addOptions("txtSetor", [{id: "0", nome: "Selecione um setor..."}], "id", "nome");
            dwr.util.addOptions("txtSetor", setores, "id", "nome");
            dwr.util.setValue("txtSetor", selectAtt(valor, "select[name=txtSetor]"));
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
function alimentaSelectDependenteEstadoEndereco(idEstado, valor){
    FacadeAjax.getCidadesByEstadoDWR(idEstado, {
        callback: function(cidades){
            dwr.util.removeAllOptions("txtCidadeEndResid");
            dwr.util.addOptions("txtCidadeEndResid", [{id: "0", nome: "Selecione uma cidade..."}], "id", "nome");
            dwr.util.addOptions("txtCidadeEndResid", cidades, "id", "nome");
            dwr.util.setValue("txtCidadeEndResid", selectAtt(valor, "select[name=txtCidadeEndResid]"));
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

function formatDataAtt(data, campo){
    var dia, mes;
    
    if(data.getMonth()+1 <10){mes = '0'+(data.getMonth()+1);}
    else{mes = (data.getMonth()+1);}
    
    if(data.getDate() <10){dia = '0'+(data.getDate());}
    else{dia = (data.getDate());}
    
    var dataFormatada = data.getFullYear() + "-" + mes + "-" + dia;
    
    if(data != null){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).removeClass("is-valid");
    }
    //alert(dataFormatada);
    return dataFormatada;
};

function inputAtt(valor, campo){ 
    if(valor != null){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).removeClass("is-valid");
    }
    return valor;
}

function selectAtt(valor, campo){ 
    var v = valor;
    if(v != null){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
    else{
        v = 0;
        $(campo).removeClass("is-invalid");
        $(campo).removeClass("is-valid");
    }
    return v;
};

function selectEstadoAtt(valor, campo){ 
    var v = valor;
    if(v != null){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
    else{
        v = 0;
        $(campo).removeClass("is-invalid");
        $(campo).removeClass("is-valid");
    }
    
    return v;
};

function selectCidadeAtt(valor, campo){ 
    var v = valor;
    
    if(v != null){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
    else{
        v = 0;
        $(campo).removeClass("is-invalid");
        $(campo).removeClass("is-valid");
    }
    return v;
};




function alimentaSelectGrauParentesco(id, valor){
    FacadeAjax.getGrausParentescoDWR({
        callback: function(parentescos){
            dwr.util.setEscapeHtml(false);
            dwr.util.removeAllOptions("txtGrauParentescoDep"+id);
            dwr.util.addOptions("txtGrauParentescoDep"+id, [{id: "0", nome: "Selecione um grau de parentesco..."}], "id", "nome");
            dwr.util.addOptions("txtGrauParentescoDep"+id, parentescos, "id", "nome");
            dwr.util.setValue("txtGrauParentescoDep"+id, selectAtt(valor, "#txtGrauParentescoDep"+id));
        }
        
    });
}



function alteraMilitar(idtMilitar){
    FacadeAjax.getMilitarByIdtMilitarDWR(idtMilitar.replace("-", ""), {
        callback: function(mil){
            dwr.util.setValues({
                txtIdtMil: inputAtt(mil.idtMilitar, "input[name=txtIdtMil]"),
                txtIdtCivil: inputAtt(mil.idtCivil, "input[name=txtIdtCivil]"),
                txtDataNasc: formatDataAtt(mil.dataNascimento, "input[name=txtDataNasc]"),
                txtCpf: inputAtt(mil.cpf, "input[name=txtCpf]"),
                txtPreccp: inputAtt(mil.preccp, "input[name=txtPreccp]"),
                txtCP: inputAtt(mil.cp, "input[name=txtCP]"),
                txtNome: inputAtt(mil.nome, "input[name=txtNome]"),
                txtSobrenome: inputAtt(mil.sobrenome, "input[name=txtSobrenome]"),
                txtNomeGuerra: inputAtt(mil.nomeGuerra, "input[name=txtNomeGuerra]"),
                txtSexo: selectAtt(mil.sexo, "select[name=txtSexo]"),
                txtTS: selectAtt(mil.ts, "select[name=txtTS]"),
                txtFatorRH: selectAtt(mil.ftrh, "select[name=txtFatorRH]"),
                txtPai: inputAtt(mil.pai, "input[name=txtPai]"),
                txtMae: inputAtt(mil.mae, "input[name=txtMae]"),
                txtEstCivil: selectAtt(mil.idEstadoCivil, "select[name=txtEstCivil]"),
                txtEscolaridade: selectAtt(mil.idEscolaridade, "select[name=txtEscolaridade]"),
                txtReligiao: selectAtt(mil.idReligiao, "select[name=txtReligiao]"),
                txtNatEst: selectEstadoAtt(mil.idEstadoNaturalidade, "select[name=txtNatEst]"),
                txtNumEndResid: inputAtt(mil.endNum, "input[name=txtNumEndResid]"),
                txtEmail: inputAtt(mil.email, "input[name=txtEmail]"),
                txtFamiliar: inputAtt(mil.familiarContato, "input[name=txtFamiliar]"),
                txtFoneFamiliar: inputAtt(mil.foneFamiliarContato, "input[name=txtFoneFamiliar]")
                
            });
            alimentaSelectDependenteEstadoNaturalidade($("select[name=txtNatEst]").val(), mil.idCidadeNaturalidade);
            
            //$("select[name=txtNatEst]").trigger('change');
            
            dwr.util.setValues({  
                txtDataPraca: formatDataAtt(mil.dataPraca, "input[name=txtDataPraca]")
            });
            
            FacadeAjax.getUniformeByIdDWR(mil.idUniforme, {
                callback: function(uni){
                    dwr.util.setValues({
                        txtNumCoturno: selectAtt(uni.tamCoturno, "select[name=txtNumCoturno]"),
                        txtTamGand: selectAtt(uni.tamGandola, "select[name=txtTamGand]"),
                        txtTamCalca: selectAtt(uni.tamCalca, "select[name=txtTamCalca]"),
                        txtTamCamCmf: selectAtt(uni.tamCamisaCamuflada, "select[name=txtTamCamCmf]")
                    });
                }
            });
            
            dwr.util.setValues({
                txtPGrad: selectAtt(mil.idPostoGraduacao, "select[name=txtPGrad]"),
                txtQas: selectAtt(mil.idQas, "select[name=txtQas]"),
                txtCia: selectAtt(mil.cia, "select[name=txtCia]"),
                txtCptm: selectAtt(mil.idComportamento, "select[name=txtCptm]"),
                txtDivSec: selectAtt(mil.idDivisaoSecao, "select[name=txtDivSec]")
            });
            alimentaSelectDependenteDivisaoSecao($("select[name=txtDivSec]").val(), mil.idSetor);
            
            FacadeAjax.getEnderecoByIdDWR(mil.idEndereco, {
                callback: function(end){
                    dwr.util.setValues({
                        txtCepEndResid: inputAtt(end.cep, "input[name=txtCepEndResid]"),
                        txtEstadoEndResid: selectAtt(end.idEstadoCidade, "select[name=txtEstadoEndResid]"),
                        txtCompEndResid: inputAtt(end.complemento, "input[name=txtCompEndResid]"),
                        txtPtRefEndResid: inputAtt(end.pontoreferencia, "input[name=txtPtRefEndResid]")
                    });
                    alimentaSelectDependenteEstadoEndereco($("select[name=txtEstadoEndResid]").val(), end.idCidade);
                    $("input[name=txtCepEndResid]").trigger('change');
                }
            });
        }
    });
    
    FacadeAjax.getTituloEleitorByIdtMilitarDWR(idtMilitar.replace("-", ""), {
        callback: function(tit){
            dwr.util.setValues({
                txtTitEleitorNum: inputAtt(tit.registro, "input[name=txtTitEleitorNum"),
                txtTitEleitorZona: inputAtt(tit.zona, "input[name=txtTitEleitorZona"),
                txtTitEleitorSecao: inputAtt(tit.secao, "input[name=txtTitEleitorSecao"),
                txtTitEleitorEst: selectAtt(tit.idEstadoCidade, "select[name=txtTitEleitorEst")
            });
            alimentaSelectDependenteEstadoTitEleitor($("select[name=txtTitEleitorEst]").val(), tit.idCidade);
        }
    });
    
    FacadeAjax.getCnhByIdtMilitarDWR(idtMilitar.replace("-", ""), {
        callback: function(cnh){
            if(cnh.numero == null){
                dwr.util.setValues({
                    txtPossuiCNH: selectAtt('n', "select[name=txtPossuiCNH]")
                });
            }
            else{
                dwr.util.setValues({
                    txtPossuiCNH: selectAtt('s', "select[name=txtPossuiCNH]")
                });
                acionamentoForm("select[name=txtPossuiCNH]", "#divCNH");  
                dwr.util.setValues({
                    txtCNHNum: inputAtt(cnh.numero, "input[name=txtCNHNum"),
                    txtCNHCatg: selectAtt(cnh.categoria, "select[name=txtCNHCatg]"),
                    txtCNHDataVal: formatDataAtt(cnh.dataValidade, "input[name=txtCNHDataVal]")
                });
            }
        }
    });
    
    FacadeAjax.getConjugeByIdtMilitarDWR(idtMilitar.replace("-", ""), {
        callback: function(conjuge){
            if(conjuge.nome == null){
                dwr.util.setValues({
                    txtPossuiConjuge: selectAtt('n', "select[name=txtPossuiConjuge]")
                });
            }
            else{
                dwr.util.setValues({
                    txtPossuiConjuge: selectAtt('s', "select[name=txtPossuiConjuge]")
                });
                acionamentoForm("select[name=txtPossuiConjuge]", "#divConjuge");  
                dwr.util.setValues({
                    txtNomeConjuge: inputAtt(conjuge.nome, "input[name=txtNomeConjuge]"),
                    txtSobrenomeConjuge: inputAtt(conjuge.sobrenome, "input[name=txtSobrenomeConjuge]"),
                    txtDataNascConjuge: formatDataAtt(conjuge.dataNascimento, "input[name=txtDataNascConjuge]"),
                    txtEmailConjuge: inputAtt(conjuge.email, "input[name=txtEmailConjuge"),
                    txtFoneConjuge: inputAtt(conjuge.fone, "input[name=txtFoneConjuge")
                });
                if(conjuge.gravidez != null){
                    dwr.util.setValues({
                        txtSexoConjuge: selectAtt('F', "select[name=txtSexoConjuge]")
                    });
                    acionamentoFormGravidez("select[name=txtSexoConjuge]", "#divGravidez");  
                    dwr.util.setValues({
                        txtGravidez: selectAtt(conjuge.gravidez, "select[name=txtGravidez]")
                    });
                }
            }
        }
    });
    
    FacadeAjax.getDependentesByIdtMilitarDWR(idtMilitar.replace("-", ""), {
        callback: function(dep){            
            if(dep.length == 0){
                dwr.util.setValues({
                    txtPossuiDependente: selectAtt('n', "select[name=txtPossuiDependente]")
                });
            }
            else{
                dwr.util.setValues({
                    txtPossuiDependente: selectAtt('s', "select[name=txtPossuiDependente]")
                });
                acionamentoForm("select[name=txtPossuiDependente]", "#divDependentes");
                
                for(var i=0;i<dep.length;i++){
                    $("#fieldsetDependentes").append("<div id=linha"+ (i+1) +" class=\"form-row\">"+
                                                     "      <div class=\"form-group col-md-4\">"+
                                                     "          <label for=txtNomeDep"+ (i+1) +">Nome: <span class=\"campo-obrigatorio\">*</span></label>"+
                                                     "          <input type=\"text\" class=\"form-control\" id=txtNomeDep"+ (i+1) +" name=\"txtNomeDep\" placeholder=\"Ex.: Fulano\">"+
                                                     "          <div class=\"valid-feedback\">Selva!</div>"+
                                                     "          <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                                     "      </div>"+
                                                     "      <div class=\"form-group col-md-8\">"+
                                                     "          <label for=txtSobrenomeDep"+ (i+1) +">Sobrenome: <span class=\"campo-obrigatorio\">*</span></label>"+
                                                     "          <input type=\"text\" class=\"form-control\" id=txtSobrenomeDep"+ (i+1) +" name=\"txtSobrenomeDep\" placeholder=\"Ex.: De Tal\">"+
                                                     "          <div class=\"valid-feedback\">Selva!</div>"+
                                                     "          <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                                     "      </div>"+
                                                     "      <div class=\"form-group col-md-6\">"+
                                                     "          <label for=txtDataNascDep"+ (i+1) +">Data de Nascimento: <span class=\"campo-obrigatorio\">*</span></label>"+
                                                     "          <input type=\"date\" class=\"form-control\" id=txtDataNascDep"+ (i+1) +" name=\"txtDataNascDep\">"+
                                                     "          <div class=\"valid-feedback\">Selva!</div>"+
                                                     "          <div class=\"invalid-feedback invalid-dataNasc\">Campo Obrigatório!</div>"+
                                                     "      </div>"+
                                                     "      <div class=\"form-group col-md-6\">"+
                                                     "          <label for=txtGrauParentescoDep"+ (i+1) +">Grau de Parentesco: <span class=\"campo-obrigatorio\">*</span></label>"+
                                                     "          <select class=\"form-control\" id=txtGrauParentescoDep"+ (i+1) +" name=\"txtGrauParentescoDep\"></select>"+
                                                     "          <div class=\"valid-feedback\">Selva!</div>"+
                                                     "          <div class=\"invalid-feedback\">Campo Obrigatório!</div>"+
                                                     "      </div>"+        
                                                     "</div>"
                    );
    
    
                    alimentaSelectGrauParentesco((i+1), dep[i].idGrauParentesco);

                    functionValidInputTReal("#txtNomeDep"+(i+1));
                    functionValidInputTReal("#txtSobrenomeDep"+(i+1));
                    functionValidDataNascTReal("#txtDataNascDep"+(i+1));
                    functionValidSelectTReal("#txtGrauParentescoDep"+(i+1));
                    
                    dwr.util.setValue("txtNomeDep"+(i+1), inputAtt(dep[i].nome, "#txtNomeDep"+(i+1)));
                    dwr.util.setValue("txtSobrenomeDep"+(i+1), inputAtt(dep[i].sobrenome, "#txtSobrenomeDep"+(i+1)));
                    dwr.util.setValue("txtDataNascDep"+(i+1), formatDataAtt(dep[i].dataNascimento, "#txtDataNascDep"+(i+1)));
                }
            }
        }
    });
    
    FacadeAjax.getFonesByIdtMilitarDWR(idtMilitar.replace("-", ""), {
        callback: function(fones){
            for(var i=0;i<fones.length;i++){
                dwr.util.setValue("txtFone0"+(i+1), inputAtt(fones[i].fone, "#txtFone0"+(i+1)));
            }
        }
    });
};


function alteraSenhaMilitar(idtMilitar){
    FacadeAjax.getMilitarByIdtMilitarDWR(idtMilitar, {
        callback: function(mil){
            dwr.util.setValues({                
                txtIdtAttSenha: mil.idtMilitar
            });
        }
    });
};

