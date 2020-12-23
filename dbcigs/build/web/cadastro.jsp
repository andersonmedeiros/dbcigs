<%-- 
    Document   : candidatura
    Created on : 27/04/2020, 14:09:48
    Author     : CB Anderson de Paula Andrade Medeiros
--%>

<%@page import="model.bean.GrupoAcesso"%>
<%@page import="java.util.ArrayList"%>
<%@page import="model.dao.MilitarHasGrupoAcessoDAO"%>
<%@page import="model.bean.Militar"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="Anderson de Paula Andrade Medeiros">
        
        <link rel="icon" type="image/x-icon" href="assets/img/logo_sgdis.png" />
        <title>Cadastro de Candidato</title>
        
        <link rel="stylesheet" type="text/css" href="assets/node_modules/bootstrap/compiler/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="assets/css/estilo_universal.css">
        <link rel="stylesheet" type="text/css" href="assets/css/estilo_formulario_etapas.css">
        
        <script type='text/javascript' src='dwr/engine.js'></script>
        <script type='text/javascript' src='dwr/interface/FacadeAjax.js'></script>
        <script type='text/javascript' src='dwr/util.js'></script> 
    </head>
    <body>
        <header class="">            
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <a class="navbar-brand" href="restrito/inicial.jsp">SGDIS <span class="sr-only">(Página atual)</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerSgdis" aria-controls="navbarTogglerSgdis" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerSgdis">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">                        
                                         
                    </ul>
                    <form class="form-inline my-2 my-lg-0" name="formSair" action="Sair" method="POST">                        
                        <button class="btn btn-danger my-2 my-sm-0" type="submit">Sair</button>
                    </form>
                </div>
            </nav>
        </header>
        <section class="container-fluid col-md-10 mr-auto ml-auto area">
            <%
                if(request.getParameter("e") != null){
                    int retorno = Integer.parseInt(request.getParameter("e"));

                    if(retorno == 2){
                        out.println("<div class=\"alert alert-danger shadow-sm text-center\" role=\"alert\">");
                        out.println("       Erro durante a realização do cadastro de candidato.<br>Tente Novamente!");
                        out.println("</div>");
                    }
                }
            %>               
            
            <form id="formCadCandidato" name="formCadCandidato" method="post" action="controller.aluno/Candidatura">
                
                <ul id="progress">
                    <li class="ativo">OM Atual</li>
                    <li>Dados Individuais</li>
                    <li>Saúde</li>
                    <li>Dados Militares</li>
                    <li>Dados Familiares</li>
                    <li>Dados de Endereço</li>
                    <li>Cursos Estágios</li>
                    <li>Preparação</li>
                </ul>
                <fieldset>
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Organização Militar Atual</h5>
                    </div>
                    <div class="fieldset-body">
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="txtTipoForca">Tipo de Força: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtTipoForca" name="txtTipoForca">
                                    <option value="0" selected>Selecione um Tipo de Força...</option>");                                                        
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>                            
                            <div class="form-group col-md-4">
                                <label for="txtForca">Força: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtForca" name="txtForca">
                                    <option value="0" selected>Selecione uma Força...</option>");                                                        
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>                            
                            <div class="form-group col-md-4">
                                <label for="txtEstadoForca">Estado: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtEstadoForca" name="txtEstadoForca">
                                <option value="0">Selecione um Estado...</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>    
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-8">
                                <label for="txtNomeOM">OM: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtNomeOM" name="txtNomeOM">
                                <option value="0">Selecione uma OM...</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div> 
                            <div class="form-group col-md-4">
                                <label for="txtFoneOM">Fone OM: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control foneOM" id="txtFoneOM" name="txtFoneOM" placeholder="Ex.: (00) 0000-0000">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-fone">Campo Obrigatório!</div>
                            </div>
                        </div>
                        <!--<div class="header-interno">
                            <h5 class="title-interno">Endereço da OM</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="txtEndCepOM">CEP: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control cep" id="txtEndCepOM" name="txtEndCepOM" placeholder="Ex.: 00000-000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-cep">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="txtEndNomeOM">Endereço: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtEndNomeOM" name="txtEndNomeOM" placeholder="Ex.: Constantino Nery">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtEndNumOM">Número: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtEndNumOM" name="txtEndNumOM" placeholder="Ex.: 1000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="txtEndEstadoOM">Estado: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtEndEstadoOM" name="txtEndEstadoOM" placeholder="Ex.: Amazonas">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtEndCidadeOM">Cidade: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtEndCidadeOM" name="txtEndCidadeOM" placeholder="Ex.: Manaus">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtEndBairroOM">Bairro: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtEndBairroOM" name="txtEndBairroOM" placeholder="Ex.: Centro">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                                   
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="txtEndCompOM">Complemento: </label>
                                    <input type="text" class="form-control" id="txtEndCompOM" name="txtEndCompOM" placeholder="Ex.: Quadra, Apartamento etc.">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="txtEndPtRefOM">Ponto de Referência: </label>
                                    <input type="text" class="form-control" id="txtEndPtRefOM" name="txtEndPtRefOM" placeholder="Ex.: Próximo a Arena da Amazônia">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>-->
                        <div class="header-interno">
                            <h5 class="title-interno">Comandante</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">                                                        
                                <div class="form-group col-md-3">
                                    <label for="txtPGradCmtOM">Posto/Graduação: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtPGradCmtOM" name="txtPGradCmtOM">
                                    <option value="0">Selecione um Posto/Graduação...</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtNomeCmtOM">Nome: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtNomeCmtOM" name="txtNomeCmtOM" placeholder="Ex.: Fulano">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-5">
                                    <label for="txtSobrenomeCmtOM">Sobrenome: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtSobrenomeCmtOM" name="txtSobrenomeCmtOM" placeholder="Ex.: de Tal">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtNomeGuerraCmtOM">Nome de Guerra: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtNomeGuerraCmtOM" name="txtNomeGuerraCmtOM" placeholder="Ex.: De Tal">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div> 
                        <div class="header-interno">
                            <h5 class="title-interno">Chefe Imediato</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="txtPGradChImtoOM">Posto/Graduação: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtPGradChImtoOM" name="txtPGradChImtoOM">
                                    <option value="0">Selecione um Posto/Graduação...</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtNomeChImtoOM">Nome: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtNomeChImtoOM" name="txtNomeChImtoOM" placeholder="Ex.: Fulano">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-5">
                                    <label for="txtSobrenomeChImtoOM">Sobrenome: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtSobrenomeChImtoOM" name="txtSobrenomeChImtoOM" placeholder="Ex.: de Tal">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtNomeGuerraChImtoOM">Nome de Guerra: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtNomeGuerraCmtOM" name="txtNomeGuerraChImtoOM" placeholder="Ex.: De Tal">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" id="btnProximo2" name="btnProximo2" class="btn btn-danger prox acao" value="Proximo">Próximo</button>
                </fieldset>
                <fieldset>
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Dados Individuais</h5>
                    </div>
                    <div class="fieldset-body">
                        <div class="form-row">
                            <div class="form-group col-md-3" id="div-idtmil">
                                <label for="txtIdtMilAl">Identidade Militar: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtIdtMilAl" name="txtIdtMilAl" placeholder="Ex. 000000000-0"  readonly="">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-idtMilAl">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="txtPGradAl">Posto/Graduação: <span class=campo-obrigatorio>*</span></label>
                                <select class="form-control" id="txtPGradAl" name="txtPGradAl">
                                    <option value="0" selected>Selecione um Posto/Graduação...</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="txtArmaAl">Arma: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtArmaAl" name="txtArmaAl">
                                    <option value="0" selected>Selecione uma Arma...</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="txtDataNascAl">Data de Nascimento: <span class="campo-obrigatorio">*</span></label>
                                <input type="date" class="form-control" id="txtDataNascAl" name="txtDataNascAl" placeholder="Ex.: DD/MM/AAAA">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-dataNascAl">Campo Obrigatório!</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="txtNomeAl">Nome: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtNomeAl" name="txtNomeAl" placeholder="Ex.: Fulano">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="txtSobrenomeAl">Sobrenome: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtSobrenomeAl" name="txtSobrenomeAl" placeholder="Ex.: de Tal">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="txtNomeGuerraAl">Nome de Guerra: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtNomeGuerraAl" name="txtNomeGuerraAl" placeholder="Ex.: De Tal">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                        </div>
                        <div class="form-row">
                            
                            <div class="form-group col-md-4" id="div-cpf">
                                <label for="txtCpfAl">CPF: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control cpf" id="txtCpfAl" name="txtCpfAl" placeholder="Ex.: 000.000.000-00">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-cpf">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4" id="div-preccp">
                                <label for="txtPreccpAl">Prec-CP: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtPreccpAl" name="txtPreccpAl" placeholder="Ex.: 000000000" maxlength="9">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-preccpAl">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4" id="div-cp">
                                <label for="txtCPAl">CP: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtCPAl" name="txtCPAl" placeholder="Ex.: 000000" maxlength="6">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-cpAl">Campo Obrigatório!</div>
                            </div>                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4" id="div-ultdatapraca">
                                <label for="txtUltDataPracaAl">Última Data de Praça: <span class="campo-obrigatorio">*</span></label>
                                <input type="date" class="form-control" id="txtUltDataPracaAl" name="txtUltDataPracaAl" placeholder="Ex.: DD/MM/AAAA">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-dataPracaAl">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4" id="div-natest">
                                <label for="txtNatEstAl">Naturalidade (Estado): <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtNatEstAl" name="txtNatEstAl">
                                    <option value="0" selected>Selecione um Estado...</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4" id="div-natcid">
                                <label for="txtNatCidAl">Naturalidade (Cidade): <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtNatCidAl" name="txtNatCidAl">
                                    <option value="0" selected>Selecione uma Cidade...</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="txtEstCivilAl">Estado Civil: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtEstCivilAl" name="txtEstCivilAl">
                                    <option value="0" selected>Selecione um estado civil...</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="txtSexoAl">Sexo: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtSexoAl" name="txtSexoAl">
                                    <option value="0" selected>Selecione um sexo...</option>
                                    <option value="M">MASCULINO</option>
                                    <option value="F">FEMININO</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-2">
                                <label for="txtTSAl">Tipo Sanguíneo: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtTSAl" name="txtTSAl">
                                    <option value="0" selected>Selecione um tipo sanguíneo...</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                    <option value="O">O</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="txtFatorRHAl">Fator RH: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtFatorRHAl" name="txtFatorRHAl">
                                    <option value="0" selected>Selecione um fator RH...</option>
                                    <option value="1">+</option>
                                    <option value="00">-</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtPaiAl">Pai: </label>
                                <input type="text" class="form-control" id="txtPaiAl" name="txtPaiAl" placeholder="Ex.: Fulano de Tal">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-titEleitorSecaoAl">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtMaeAl">Mãe: </label>
                                <input type="text" class="form-control" id="txtMaeAl" name="txtMaeAl" placeholder="Ex.: Fulana de Tal">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-titEleitorSecaoAl">Campo Obrigatório!</div>
                            </div>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Título Eleitoral</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="txtTitEleitorNumAl">Título Eleitoral: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control titulo-eleitor" id="txtTitEleitorNumAl" name="txtTitEleitorNumAl" placeholder="Ex.: 0000 0000 0000">
                                    <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-titEleitorNumAl">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtTitEleitorZonaAl">Zona Eleitoral: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtTitEleitorZonaAl" name="txtTitEleitorZonaAl" placeholder="Ex.: 000" maxlength="3">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-titEleitorZonaAl">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtTitEleitorSecaoAl">Seção Eleitoral: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtTitEleitorSecaoAl" name="txtTitEleitorSecaoAl" placeholder="Ex.: 0000" maxlength="4">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-titEleitorSecaoAl">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtTitEleitorEstAl">Estado: <span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtTitEleitorEstAl" name="txtTitEleitorEstAl">
                                        <option value="0" selected>Selecione um Estado...</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtTitEleitorCidAl">Cidade: <span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtTitEleitorCidAl" name="txtTitEleitorCidAl">
                                        <option value="0" selected>Selecione uma Cidade...</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Informações Bancárias</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="txtBancoAl">Banco: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtBancoAl" name="txtBancoAl" placeholder="Ex.: Banco do Brasil">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtAgenciaAl">Agência: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control agencia-banco" id="txtAgenciaAl" name="txtAgenciaAl" placeholder="Ex.: 00000000" maxlength="10">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                                                     
                                <div class="form-group col-md-1">
                                    <label for="txtDvAgenciaAl">DV: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control agencia-banco" id="txtDvAgenciaAl" name="txtDvAgenciaAl" placeholder="Ex.: 00" maxlength="2">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                                                     
                                <div class="form-group col-md-3">
                                    <label for="txtContaAl">Conta: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control conta-banco" id="txtContaAl" name="txtContaAl" placeholder="Ex.: 000000000000" maxlength="12">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                                                     
                                <div class="form-group col-md-1">
                                    <label for="txtDvContaAl">DV: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control conta-banco" id="txtDvContaAl" name="txtDvContaAl" placeholder="Ex.: 00" maxlength="2">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                                                     
                            </div>
                        </div>                        
                        <div class="header-interno">
                            <h5 class="title-interno">Contatos</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                    <label for="txtEmailAl">Email: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtEmailAl" name="txtEmailAl" placeholder="Ex.: fulanodetal@gmail.com">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-email">Campo Obrigatório!</div>
                                </div>

                                <div class="form-group col-md-4">
                                    <label for="txtFoneAl">Fone: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control fone" id="txtFoneAl" name="txtFoneAl" placeholder="Ex.: (00) 00000-0000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-foneCel">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>                      

                        <div class="header-interno">
                            <h5 class="title-interno">Uniforme</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="txtNumCoturnoAl">Número Coturno: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtNumCoturnoAl" name="txtNumCoturnoAl">
                                        <option value="0" selected>Selecione um tamanho...</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                        <option value="46">46</option>
                                        <option value="47">47</option>
                                        <option value="48">48</option>
                                        <option value="49">49</option>
                                        <option value="50">50</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtTamGandAl">Tamanho Gandola: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtTamGandAl" name="txtTamGandAl">
                                        <option value="0" selected>Selecione um tamanho...</option>
                                        <option value="PP">PP</option>
                                        <option value="P">P</option>
                                        <option value="M">M</option>
                                        <option value="G">G</option>
                                        <option value="GG">GG</option>
                                        <option value="XLG">XLG</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtTamCalcaAl">Tamanho Calça: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtTamCalcaAl" name="txtTamCalcaAl">
                                        <option value="0" selected>Selecione um tamanho...</option>
                                        <option value="PP">PP</option>
                                        <option value="P">P</option>
                                        <option value="M">M</option>
                                        <option value="G">G</option>
                                        <option value="GG">GG</option>
                                        <option value="XLG">XLG</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtTamCamCmfAl">Tamanho Camisa Camfuflada: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtTamCamCmfAl" name="txtTamCamCmfAl">
                                        <option value="0" selected>Selecione um tamanho...</option>
                                        <option value="PP">PP</option>
                                        <option value="P">P</option>
                                        <option value="M">M</option>
                                        <option value="G">G</option>
                                        <option value="GG">GG</option>
                                        <option value="XLG">XLG</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                                               
                            </div>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Cateira Nacional de Habilitação - CNH</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtPossuiCNH">Possui CNH?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtPossuiCNH" name="txtPossuiCNH">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divCNH" class="fieldset-interno fieldset-dependente" style="display: none;">
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="txtCNHNumAl">Número: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtCNHNumAl" name="txtCNHNumAl" placeholder="Ex. 00000000000" maxlength="11">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-numCNH">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtCNHCatgAl">Categoria: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtCNHCatgAl" name="txtCNHCatgAl">
                                        <option value="0" selected>Selecione uma categoria...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="AB">AB</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtCNHDataValAl">Data de Validade: <span class="campo-obrigatorio">*</span></label>
                                    <input type="date" class="form-control" id="txtCNHDataValAl" name="txtCNHDataValAl" placeholder="Ex. 00/00/0000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-dataValCNH">Campo Obrigatório!</div>
                                </div> 
                            </div>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Veículo</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtTraraVeiculo">Durante o curso trará veículo para o CIGS?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtTraraVeiculo" name="txtTraraVeiculo">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divVeiculos" class="fieldset-interno fieldset-dependente" style="display: none;">
                            <div class="form-row">
                                <div class="form-group col-md-2">
                                    <label for="txtTipoVeiculoAl">Tipo: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtTipoVeiculoAl" name="txtTipoVeiculoAl">
                                        <option value="0" selected>Selecione o tipo...</option>
                                        <option value="motocicleta">MOTOCICLETA</option>
                                        <option value="automovel">AUTOMÓVEL</option>
                                        <option value="microonibus">MICROÔNIBUS</option>
                                        <option value="onibus">ÔNIBUS</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtMarcaVeiculoAl">Marca: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtMarcaVeiculoAl" name="txtMarcaVeiculoAl" placeholder="Ex.: Hyundai">               
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtModeloVeiculoAl">Modelo: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtModeloVeiculoAl" name="txtModeloVeiculoAl" placeholder="Ex.: HB20S">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtCorVeiculoAl">Cor: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtCorVeiculoAl" name="txtCorVeiculoAl" placeholder="Ex.: Vermelho">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtPlacaVeiculoAl">Placa: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtPlacaVeiculoAl" name="txtPlacaVeiculoAl" placeholder="Ex.: XXX 0X00">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>                       
                    </div>
                    <button type="button" name="btnVoltar" class="btn btn-dark anterior acao">Anterior</button>
                    <button type="button" id="btnProximo3" name="btnProximo3" class="btn btn-danger prox acao" value="Proximo">Próximo</button>
                </fieldset>
                <fieldset>
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Saúde</h5>
                    </div>
                    <div class="fieldset-body">
                        <div class="header-interno">
                            <h5 class="title-interno">Saúde</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtFumante">Fumante?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtFumante" name="txtFumante">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="1">SIM</option>
                                        <option value="00">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Alergia</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtAlergico">Alérgico?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtAlergico" name="txtAlergico">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divAlergias" class="fieldset-interno fieldset-dependente" style="display: none;">
                            <div class="header-interno">
                                <h5 class="title-interno">Quais?</h5>
                            </div>
                            <div id="fieldsetAlergias" class="fieldset-interno"></div>
                            <button type="button" id="btnAddAlergia" name="btnAddAlergia" class="btn btn-success" style="margin-left: 0; font-weight: bold; ">+</button>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Medicação</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtUsoMtoCt">Faz uso de medicamentos controlados?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtUsoMtoCt" name="txtUsoMtoCt">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divMtoCt" class="fieldset-interno fieldset-dependente" style="display: none;">
                            <div class="header-interno">
                                <h5 class="title-interno">Quais?</h5>
                            </div>
                            <div id="fieldsetMtoCt" class="fieldset-interno"></div>
                            <button type="button" id="btnAddMtoCt" name="btnAddMtoCt" class="btn btn-success" style="margin-left: 0; font-weight: bold; ">+</button>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtUsoTermErgSupAli">Fez uso de Termogênicos, Ergogênicos ou Suplementos Alimentares a menos de 3 meses?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtUsoTermErgSupAli" name="txtUsoTermErgSupAli">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divTermErgSupAli" class="fieldset-interno fieldset-dependente" style="display: none;">
                            <div class="header-interno">
                                <h5 class="title-interno">Quais?</h5>
                            </div>
                            <div id="fieldsetTermErgSupAli" class="fieldset-interno"></div>
                            <button type="button" id="btnAddTermErgSupAli" name="btnAddTermErgSupAli" class="btn btn-success" style="margin-left: 0; font-weight: bold; ">+</button>
                        </div>
                    </div>
                    <button type="button" name="btnVoltar" class="btn btn-dark anterior acao">Anterior</button>
                    <button type="button" name="btnProximo4" class="btn btn-danger prox acao" value="Proximo">Próximo</button>
                </fieldset>
                <!--Dados Militares-->
                <fieldset>
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Dados Militares</h5>
                    </div>
                    <div class="fieldset-body">
                        <div id="div-formacao">
                            <div class="header-interno">
                                <h5 class="title-interno">Formação</h5>
                            </div>
                            <div class="fieldset-interno">
                                <div class="form-row">                                
                                    <div class="form-group col-md-9">
                                        <label for="txtFormEscNome">Escola de Formação: <span class="campo-obrigatorio">*</span></label>
                                        <select class="form-control" id="txtFormEscNome" name="txtFormEscNome">
                                            <option value="0">Selecione uma Escola...</option>
                                        </select>
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="txtFormTurma">Turma: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control" id="txtFormTurma" name="txtFormTurma" placeholder="Ex.: 2018" maxlength="4">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback invalid-ano">Campo Obrigatório!</div>
                                    </div> 
                                </div>                          
                            </div>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Comportamento</h5>
                        </div>
                        <div class="fieldset-interno">                            
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtCptmAl">Comportamento: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtCptmAl" name="txtCptmAl">
                                        <option value="0" selected>Selecione um Comportamento...</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                            
                            </div>                            
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Promoção</h5>
                        </div>
                        <div class="fieldset-interno">                         
                            <div class="form-row">                  
                                <div class="form-group col-md-4">
                                    <label for="txtDataUltProm">Data da última promoção: <span class="campo-obrigatorio">*</span></label>
                                    <input type="date" class="form-control" id="txtDataUltProm" name="txtDataUltProm" placeholder="Ex.: DD/MM/AAAA">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-dataUltProm">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtQaProm">Está no QA para Promoção?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtQaProm" name="txtQaProm">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                    <div id="divQaQuando" class="form-group col-md-4" style="display: none;">
                                    <label for="txtQaQuandoProm">Quando?<span class="campo-obrigatorio"> *</span></label>
                                    <input type="date" class="form-control" id="txtQaQuandoProm" name="txtQaQuandoProm" placeholder="Ex.: DD/MM/AAAA">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-dataQaQuando">Campo Obrigatório!</div>
                                </div>
                            </div>                         
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Teste de Aptidão Física - TAF</h5>
                        </div>
                        <div class="fieldset-interno">                            
                            <div class="form-row">                                
                                <div class="form-group col-md-6">
                                    <label for="txtDataUltTAF">Data do último TAF: <span class="campo-obrigatorio">*</span></label>
                                    <input type="date" class="form-control" id="txtDataUltTAF" name="txtDataUltTAF" placeholder="Ex.: 00/00/0000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-dataUltTAF">Campo Obrigatório!</div>
                                </div>                                
                                <div class="form-group col-md-6">
                                    <label for="txtMencaoTAF">Menção: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtMencaoTAF" name="txtMencaoTAF">
                                        <option value="0" selected>Selecione uma menção...</option>
                                        <option value="I">I</option>
                                        <option value="R">R</option>
                                        <option value="B">B</option>
                                        <option value="MB">MB</option>
                                        <option value="E">E</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                                
                            </div> 
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Últimas Três Funções</h5>
                        </div>
                        <div class="fieldset-interno">                    
                            <div class="form-row">                          
                                <div class="form-group col-md-4">
                                    <label for="txtFunc1">Função 1: <span class="campo-obrigatorio"> *</span></label>
                                    <input type="text" class="form-control" id="txtFunc1" name="txtFunc1" placeholder="Ex.: Cmt Pel">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtFunc2">Função 2: <span class="campo-obrigatorio"> *</span></label>
                                    <input type="text" class="form-control" id="txtFunc2" name="txtFunc2" placeholder="Ex.: Cmt Cia">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                               
                                <div class="form-group col-md-4">
                                    <label for="txtFunc3">Função 3: <span class="campo-obrigatorio"> *</span></label>
                                    <input type="text" class="form-control" id="txtFunc3" name="txtFunc3" placeholder="Ex.: Enc Mat">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>             
                            </div>
                        </div>
                        <div id="div-vivenciaamazonia">
                            <div class="header-interno">
                                <h5 class="title-interno">Unidades servidas na Amazônia</h5>
                            </div>
                            <div class="fieldset-interno">                            
                                <div class="form-row">                       
                                    <div class="form-group col-md-12">
                                        <label for="txtSvAmz">Já serviu na Amazônia?<span class="campo-obrigatorio"> *</span></label>
                                        <select class="form-control" id="txtSvAmz" name="txtSvAmz">
                                            <option value="0" selected>Selecione SIM ou NÃO...</option>
                                            <option value="s">SIM</option>
                                            <option value="n">NÃO</option>         
                                        </select>
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                </div>
                            </div>
                            <div id="divSvAmz" class="fieldset-interno fieldset-dependente" style="display: none;">
                                <div class="header-interno">
                                    <h5 class="title-interno">Quais OMs?</h5>
                                </div>
                                <div id="fieldsetSvAmz" class="fieldset-interno"></div>
                                <button type="button" id="btnAddSvAmz" name="btnAddSvAmz" class="btn btn-success" style="margin-left: 0; font-weight: bold; ">+</button>
                            </div>
                        </div>
                    </div>
                    <button type="button" name="btnVoltar" class="btn btn-dark anterior acao">Anterior</button>
                    <button type="button" name="btnProximo5" class="btn btn-danger prox acao" value="Proximo">Próximo</button>
                </fieldset>
                <!--Dados Familiares-->
                <fieldset>
                    <div class="fieldset-header">
                        <h4 class="fieldset-title">Dados Familiares</h4>
                    </div>
                    <div class="fieldset-body">
                        <div class="header-interno">
                            <h5 class="title-interno">Cônjuge</h5>
                        </div>
                        <div class="fieldset-interno">
                           <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtPossuiConjuge">Possui Cônjuge?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtPossuiConjuge" name="txtPossuiConjuge">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divConjuge" class="fieldset-interno fieldset-dependente" style="display: none;">
                            <div class="form-row">                                
                                <div class="form-group col-md-3">
                                    <label for="txtNomeConjuge">Nome: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtNomeConjuge" name="txtNomeConjuge" placeholder="Ex.: Fulano">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-5">
                                    <label for="txtSobrenomeConjuge">Sobrenome: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtSobrenomeConjuge" name="txtSobrenomeConjuge" placeholder="Ex.: de Tal">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtCpfConjuge">CPF: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control cpf" id="txtCpfConjuge" name="txtCpfConjuge" placeholder="Ex.: 000.000.000-00">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-cpf">Campo Obrigatório!</div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                    <label for="txtEmailConjuge">Email: <span class="campo-obrigatorio">*</span></label>
                                    <input type="email" class="form-control" id="txtEmailConjuge" name="txtEmailConjuge" placeholder="Ex.: fulanodetal@gmail.com">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-email">Campo Obrigatório!</div>
                                </div>                                  
                                <div class="form-group col-md-4">
                                    <label for="txtFoneConjuge">Fone: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control fone" id="txtFoneConjuge" name="txtFoneConjuge" placeholder="Ex.: (00) 00000-0000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-foneCel">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Referência</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="txtParentescoRef">Grau de Parentesco: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtParentescoRef" name="txtParentescoRef">
                                        <option value="0" selected>Selecione um Parentesco...</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtNomeRef">Nome: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtNomeRef" name="txtNomeRef" placeholder="Ex.: Fulano">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-5">
                                    <label for="txtSobrenomeRef">Sobrenome: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtSobrenomeRef" name="txtSobrenomeRef" placeholder="Ex.: de Tal">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>               
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="txtCpfRef">CPF: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control cpf" id="txtCpfRef" name="txtCpfRef" placeholder="Ex.: 000.000.000-00">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-cpf">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="txtEmailRef">Email: <span class="campo-obrigatorio">*</span></label>
                                    <input type="email" class="form-control" id="txtEmailRef" name="txtEmailRef" placeholder="Ex.: fulanodetal@gmail.com">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-email">Campo Obrigatório!</div>
                                </div> 
                                <div class="form-group col-md-3">
                                    <label for="txtFoneRef">Fone: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control fone" id="txtFoneRef" name="txtFoneRef" placeholder="Ex.: (00) 00000-0000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-foneCel">Campo Obrigatório!</div>
                                </div>                                
                            </div>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtAddRefConclusao">Deseja adicionar um contato como referência em caso de conclusão do curso e demais informações?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtAddRefConclusao" name="txtAddRefConclusao">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divRefConclusao" class="fieldset-interno fieldset-dependente" style="display: none;">
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="txtParentescoRefConclusao">Grau de Parentesco: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtParentescoRefConclusao" name="txtParentescoRefConclusao">
                                        <option value="0" selected>Selecione um Parentesco...</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtNomeRefConclusao">Nome: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtNomeRefConclusao" name="txtNomeRefConclusao" placeholder="Ex.: Fulano">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-5">
                                    <label for="txtSobrenomeRefConclusao">Sobrenome: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtSobrenomeRefConclusao" name="txtSobrenomeRefConclusao" placeholder="Ex.: de Tal">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>               
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="txtCpfRefConclusao">CPF: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control cpf" id="txtCpfRefConclusao" name="txtCpfRefConclusao" placeholder="Ex.: 000.000.000-00">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-cpf">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="txtEmailRefConclusao">Email: <span class="campo-obrigatorio">*</span></label>
                                    <input type="email" class="form-control" id="txtEmailRefConclusao" name="txtEmailRefConclusao" placeholder="Ex.: fulanodetal@gmail.com">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-email">Campo Obrigatório!</div>
                                </div> 
                                <div class="form-group col-md-3">
                                    <label for="txtFoneRefConclusao">Fone: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control fone" id="txtFoneRefConclusao" name="txtFoneRefConclusao" placeholder="Ex.: (00) 00000-0000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-foneCel">Campo Obrigatório!</div>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <button type="button" name="btnAnterior" class="btn btn-dark anterior acao">Anterior</button>
                    <button type="button" name="btnProximo6" class="btn btn-danger prox acao" value="Proximo">Próximo</button>
                </fieldset>
                <!--Endereço-->
                <fieldset>
                    <div class="fieldset-header">
                        <h4 class="fieldset-title">Endereço</h4>
                    </div>
                    <div class="fieldset-body">                        
                        <div class="header-interno">
                            <h5 class="title-interno">Residência</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="txtCepEndResid">CEP: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control cep" id="txtCepEndResid" name="txtCepEndResid" placeholder="Ex.: 00000-000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-cep">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="txtNomeEndResid">Endereço: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtNomeEndResid" name="txtNomeEndResid" placeholder="Ex.: Constantino Nery">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtNumEndResid">Número: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtNumEndResid" name="txtNumEndResid" placeholder="Ex.: 1000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>                       
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="txtEstadoEndResid">Estado: <span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtEstadoEndResid" name="txtEstadoEndResid">
                                        <option value="0" selected>Selecione um Estado...</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtCidadeEndResid">Cidade: <span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtCidadeEndResid" name="txtCidadeEndResid">
                                        <option value="0" selected>Selecione uma Cidade...</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtBairroEndResid">Bairro: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtBairroEndResid" name="txtBairroEndResid" placeholder="Ex.: Centro">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                                  
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="txtCompEndResid">Complemento: </label>
                                    <input type="text" class="form-control" id="txtCompEndResid" name="txtCompEndResid" placeholder="Ex.: Quadra, Apartamento etc.">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div> 
                                <div class="form-group col-md-6">
                                    <label for="txtPtRefEndResid">Ponto de Referência: </label>
                                    <input type="text" class="form-control" id="txtPtRefEndResid" name="txtPtRefEndResid" placeholder="Ex.: Próximo a Arena da Amazônia">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Endereço residencial durante o curso</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="txtEndCurso">Endereço: </label><spam class="campo-obrigatorio"> *</spam>
                                    <select class="form-control" id="txtEndCurso" name="txtEndCurso">
                                        <option value="0" selected>Selecione o endereço...</option>                  
                                        <option value="resid">O mesmo de Residência</option>
                                        <option value="cigs">CIGS</option>
                                        <option value="novo">Novo</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                                                 
                            </div>
                            <div class="fieldset-interno">
                                <div class="form-row">
                                    <div class="form-group col-md-3">
                                        <label for="txtCepEndCurso">CEP: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control cep" id="txtCepEndCurso" name="txtCepEndCurso" placeholder="Ex.: 00000-000">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback invalid-cep">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="txtNomeEndCurso">Endereço: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control" id="txtNomeEndCurso" name="txtNomeEndCurso" placeholder="Ex.: Constantino Nery">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="txtNumEndCurso">Número: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control" id="txtNumEndCurso" name="txtNumEndCurso" placeholder="Ex.: 1000">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>                                 
                                </div>                        
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="txtEstadoEndCurso">Estado: <span class="campo-obrigatorio"> *</span></label>
                                        <select class="form-control" id="txtEstadoEndCurso" name="txtEstadoEndCurso">
                                            <option value="0" selected>Selecione um Estado...</option>
                                        </select>
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="txtCidadeEndCurso">Cidade: <span class="campo-obrigatorio"> *</span></label>
                                        <select class="form-control" id="txtCidadeEndCurso" name="txtCidadeEndCurso">
                                            <option value="0" selected>Selecione uma Cidade...</option>
                                        </select>
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>                               
                                    <div class="form-group col-md-4">
                                        <label for="txtBairroEndCurso">Bairro: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control" id="txtBairroEndCurso" name="txtBairroEndCurso" placeholder="Ex.: Centro">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>                                  
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="txtCompEndCurso">Complemento: </label>
                                        <input type="text" class="form-control" id="txtCompEndCurso" name="txtCompEndCurso" placeholder="Ex.: Quadra, Apartamento etc.">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div> 
                                    <div class="form-group col-md-6">
                                        <label for="txtPtRefEndCurso">Ponto de Referência: </label>
                                        <input type="text" class="form-control" id="txtPtRefEndCurso" name="txtPtRefEndCurso" placeholder="Ex.: Próximo a Arena da Amazônia">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" name="btnAnterior" class="btn btn-dark anterior acao">Anterior</button>
                    <button type="button" name="btnProximo7" class="btn btn-danger prox acao" value="Proximo">Próximo</button>                   
                </fieldset>
                <!--Idiomas, Cursos e Estágios-->
                <fieldset>
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Idiomas, Cursos e Estágios</h5>
                    </div>
                    <div class="fieldset-body">
                        <div class="header-interno">
                            <h5 class="title-interno">Estágio de Adaptação a Selva</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">                                                    
                                <div class="form-group col-md-12">
                                    <label for="txtPossuiEAS">Possui Estágio de Adaptação a Selva (EAS)?</label><spam class="campo-obrigatorio"> *</spam>
                                    <select class="form-control" id="txtPossuiEAS" name="txtPossuiEAS">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="1">SIM</option>
                                        <option value="00">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Idiomas</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtHabIdiomas">É habilitado em Idiomas?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtHabIdiomas" name="txtHabIdiomas">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divIdiomas" class="fieldset-interno fieldset-dependente" style="display: none;">
                            <div class="header-interno">
                                <h5 class="title-interno">Quais?</h5>
                            </div>
                            <div id="fieldsetIdiomas" class="fieldset-interno"></div>
                            <button type="button" id="btnAddIdioma" name="btnAddIdioma" class="btn btn-success" style="margin-left: 0; font-weight: bold; ">+</button>
                        </div>
                        <div id="div-cursoaperfeicoamento">
                            <div class="header-interno">
                                <h5 class="title-interno">Curso de Aperferiçoamento</h5>
                            </div>
                            <div class="fieldset-interno">
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="txtPossuiCAperf">Possui curso de aperfeiçoamento?<span class="campo-obrigatorio"> *</span></label>
                                        <select class="form-control" id="txtPossuiCAperf" name="txtPossuiCAperf">
                                            <option value="0" selected>Selecione SIM ou NÃO...</option>
                                            <option value="s">SIM</option>
                                            <option value="n">NÃO</option>
                                        </select>
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                </div>
                            </div>
                            <div id="divCAperf" class="fieldset-interno fieldset-dependente" style="display: none;">
                                <div class="form-row">
                                    <div class="form-group col-md-8">
                                        <label for="txtCAperf">Curso: <span class="campo-obrigatorio">*</span></label>
                                        <select class="form-control" id="txtCAperf" name="txtCAperf">
                                            <option value="0" selected>Selecione o curso...</option>
                                        </select>
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="txtAnoCAperf">Ano de Conclusão: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control" id="txtAnoCAperf" name="txtAnoCAperf" placeholder="Ex.: 2018" maxlength="4">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback invalid-ano">Campo Obrigatório!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="div-cursoaltosestudos">
                            <div class="header-interno">
                                <h5 class="title-interno">Curso de Altos Estudos</h5>
                            </div>
                            <div class="fieldset-interno">
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="txtPossuiCAltEstudos">Possui cursos de altos estudos?<span class="campo-obrigatorio"> *</span></label>
                                        <select class="form-control" id="txtPossuiCAltEstudos" name="txtPossuiCAltEstudos">
                                            <option value="0" selected>Selecione SIM ou NÃO...</option>
                                            <option value="s">SIM</option>
                                            <option value="n">NÃO</option>
                                        </select>
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                </div>
                            </div>
                            <div id="divCAltEstudos" class="fieldset-interno fieldset-dependente" style="display: none;">
                                <div class="form-row">
                                    <div class="form-group col-md-8">
                                        <label for="txtCAltEstudos">Curso: <span class="campo-obrigatorio">*</span></label>
                                        <select class="form-control" id="txtCAltEstudos" name="txtCAltEstudos">
                                            <option value="0" selected>Selecione o curso...</option>
                                        </select>
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="txtAnoCAltEstudos">Ano de Conclusão: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control" id="txtAnoCAltEstudos" name="txtAnoCAltEstudos" placeholder="Ex.: 2018" maxlength="4">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback invalid-ano">Campo Obrigatório!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--<div class="header-interno">
                            <h5 class="title-interno">Curso de Extensão ou Especialização</h5>
                        </div>
                        <div class="fieldset-interno">                            
                            <div class="form-row">                 
                                <div class="form-group col-md-12">
                                    <label for="txtPossuiCExtsEsp">Possui cursos extensão ou especialização?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtPossuiCExtsEsp" name="txtPossuiCExtsEsp">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divCExtsEsp" class="fieldset-interno fieldset-dependente" style="display: none;">                            
                            <div class="header-interno">
                                <h5 class="title-interno">Quais?</h5>
                            </div>
                            <div id="fieldsetCExtsEsp" class="fieldset-interno">
                            </div>
                            <button type="button" id="btnAddCExtsEsp" name="btnAddCExtsEsp" class="btn btn-success" style="margin-left: 0; font-weight: bold; ">+</button>
                        </div>-->
                        <!--<div class="header-interno">
                            <h5 class="title-interno">Estágios</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">                                                    
                                <div class="form-group col-md-12">
                                    <label for="txtPossuiEstMil">Possui estágios militares operacionais?</label><spam class="campo-obrigatorio"> *</spam>
                                    <select class="form-control" id="txtPossuiEstMil" name="txtPossuiEstMil">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divEstagios" class="fieldset-interno fieldset-dependente" style="display: none;">
                            <div class="header-interno">
                                <h5 class="title-interno">Quais?</h5>
                            </div>
                            <div id="fieldsetEstagios" class="fieldset-interno">
                            </div>
                            <button type="button" id="btnAddEstagio" name="btnAddEstagio" class="btn btn-success" style="margin-left: 0; font-weight: bold; ">+</button>
                        </div>-->                        
                    </div>
                    <button type="button" name="btnAnterior" class="btn btn-dark anterior acao">Anterior</button>
                    <button type="button" name="btnProximo8" class="btn btn-danger prox acao" value="Proximo">Próximo</button>
                </fieldset>
                <!--Preparação-->
                <fieldset> 
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Preparação</h5>
                    </div>
                    <div class="fieldset-body">
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="txtPrepFisica">Sua preparação física foi?<span class="campo-obrigatorio"> *</span></label>
                                <select class="form-control" id="txtPrepFisica" name="txtPrepFisica">
                                    <option value="0" selected>Selecione sua preparação física...</option>
                                    <option value="I">I</option>
                                    <option value="R">R</option>
                                    <option value="B">B</option>
                                    <option value="MB">MB</option>
                                    <option value="E">E</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>                              
                            <div class="form-group col-md-12">
                                <label for="txtApoioFam">Obteve apoio de sua família para realização do curso?<span class="campo-obrigatorio"> *</span></label>
                                <select class="form-control" id="txtApoioFam" name="txtApoioFam">
                                    <option value="0" selected>Selecione SIM ou NÃO...</option>
                                    <option value="1">SIM</option>
                                    <option value="00">NÃO</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>                              
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="txtApoioOM">Obteve apoio de sua OM durante o período de preparação para COS?<span class="campo-obrigatorio"> *</span></label>
                                <select class="form-control" id="txtApoioOM" name="txtApoioOM">
                                    <option value="0" selected>Selecione SIM ou NÃO...</option>
                                    <option value="1">SIM</option>
                                    <option value="00">NÃO</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>                              
                            <div class="form-group col-md-12">
                                <label for="txtCPrepCOS">Sua OM proporcionou um Curso de Preparação para o COS?<span class="campo-obrigatorio"> *</span></label>
                                <select class="form-control" id="txtCPrepCOS" name="txtCPrepCOS">
                                    <option value="0" selected>Selecione SIM ou NÃO...</option>
                                    <option value="1">SIM</option>
                                    <option value="00">NÃO</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>                              
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="txtProbRend">Há problemas que possam vir a comprometer seu rendimento no COS?<span class="campo-obrigatorio"> *</span></label>
                                <select class="form-control" id="txtProbRend" name="txtProbRend">
                                    <option value="0" selected>Selecione SIM ou NÃO...</option>
                                    <option value="1">SIM</option>
                                    <option value="00">NÃO</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>                              
                            <div class="form-group col-md-12">
                                <label for="txtTempoPrep">O tempo de sua preparação foi suficiente?<span class="campo-obrigatorio"> *</span></label>
                                <select class="form-control" id="txtTempoPrep" name="txtTempoPrep">
                                    <option value="0" selected>Selecione SIM ou NÃO...</option>
                                    <option value="1">SIM</option>
                                    <option value="00">NÃO</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>                              
                        </div>
                        <div class="form-row">                                                        
                            <div class="form-group col-md-12">
                                <label for="txtDedicacaoDoutOPS">Dedicou tempo suficiente para seu preparo intelectual no assunto de Doutrina de Operações na Selva?<span class="campo-obrigatorio"> *</span></label>
                                <select class="form-control" id="txtDedicacaoDoutOPS" name="txtDedicacaoDoutOPS">
                                    <option value="0" selected>Selecione SIM ou NÃO...</option>
                                    <option value="1">SIM</option>
                                    <option value="00">NÃO</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="txtFatorMotivacao">Qual o fator que o motivou a realizar o COS?<span class="campo-obrigatorio"> *</span></label>
                                <input type="text" class="form-control" id="txtFatorMotivacao" name="txtFatorMotivacao" placeholder="Apenas um fator">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>                           
                            <div class="valid-feedback">Selva!</div>
                            <div class="invalid-feedback">Campo Obrigatório!</div>
                        </div>
                        <div class="form-row">                            
                            <div class="form-group col-md-12">
                                <label for="txtCsltSite">Consultou o site do CIGS?<span class="campo-obrigatorio"> *</span></label>
                                <select class="form-control" id="txtCsltSite" name="txtCsltSite">
                                    <option value="0" selected>Selecione SIM ou NÃO...</option>
                                    <option value="1">SIM</option>
                                    <option value="00">NÃO</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="txtCsltAmbVirtAl">Consultou o ambiente virtual do aluno?<span class="campo-obrigatorio"> *</span></label>
                                <select class="form-control" id="txtCsltAmbVirtAl" name="txtCsltAmbVirtAl">
                                    <option value="0" selected>Selecione SIM ou NÃO...</option>
                                    <option value="1">SIM</option>
                                    <option value="00">NÃO</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                        </div>
                    </div>
                    <button type="button" name="btnAnterior" class="btn btn-dark anterior acao">Anterior</button>
                    <!--<button type="button" name="btnProximo9" class="btn btn-danger prox acao" value="Proximo">Próximo</button>-->
                    <button type="submit" name="btnSalvar" class="btn btn-success acao">Salvar</button>
                </fieldset>
                
                <!--<fieldset id="fd-vivenciaamazonia">
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Vivência na Amazônia</h5>
                    </div>
                    <div class="fieldset-body">
                        <div class="header-interno">
                            <h5 class="title-interno">Unidades servidas na Amazônia</h5>
                        </div>
                        <div class="fieldset-interno">                            
                            <div class="form-row">                       
                                <div class="form-group col-md-12">
                                    <label for="txtSvAmz">Já serviu na Amazônia?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtSvAmz" name="txtSvAmz">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>         
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divSvAmz" class="fieldset-interno fieldset-dependente" style="display: none;">
                            <div class="header-interno">
                                <h5 class="title-interno">Quais OMs?</h5>
                            </div>
                            <div id="fieldsetSvAmz" class="fieldset-interno"></div>
                            <button type="button" id="btnAddSvAmz" name="btnAddSvAmz" class="btn btn-success" style="margin-left: 0; font-weight: bold; ">+</button>
                        </div>
                        <!--/*"<div class="header-interno">
                            "<h5 class="title-interno">Tentativas</h5>
                        "</div>
                        "<div class="fieldset-interno">           
                            "<div class="form-row">                 
                                "<div class="form-group col-md-12">
                                    "<label for="txtTentC">Já tentou o curso outras vezes?<span class="campo-obrigatorio"> *</span></label>
                                    "<select class="form-control" id="txtTentC" name="txtTentC">
                                        "<option value="0" selected>Selecione SIM ou NÃO...</option>
                                        "<option value="s">SIM</option>
                                        "<option value="n">NÃO</option>         
                                    "</select>
                                    "<div class="valid-feedback">Selva!</div>
                                    "<div class="invalid-feedback">Campo Obrigatório!</div>
                                "</div>
                            "</div>
                        "</div>
                        "<div id="divTentC" class="fieldset-interno fieldset-dependente" style="display: none;">                     
                            "<div class="fieldset-interno">
                                "<div class="form-row">
                                    "<div class="form-group col-md-12">
                                        "<label for="txtQntTentC">Quantas vezes tentou realizar o curso?<span class="campo-obrigatorio"> *</span></label>
                                        "<select class="form-control" id="txtQntTentC" name="txtQntTentC">
                                            "<option value="0" selected>Selecione a quantidade...</option>
                                            "<option value="1">Uma vez</option>
                                            "<option value="2">Duas vezes</option>
                                            "<option value="3">Três vezes</option>
                                        "</select>
                                        "<div class="valid-feedback">Selva!</div>
                                        "<div class="invalid-feedback">Campo Obrigatório!</div>
                                    "</div>
                                    "<div id="fieldsetTentC" class="form-row col-md-12"></div>                            
                                "</div>
                            "</div>
                        "</div>
                    </div>
                    <button type="button" name="btnAnterior" class="btn btn-dark anterior acao">Anterior</button>
                    <button type="submit" name="btnSalvar" class="btn btn-success acao">Salvar</button>   
                </fieldset>-->
            </form>
        </section>
            
            
            
        <footer class="container-fluid bg-success text-center fixed-bottom">
            <b>Desenvolvido por Anderson de Paula Andrade Medeiros</b><br>
            <b class="text-center copy">&copy;2019-2020</b>
        </footer>
        
        <script src="assets/node_modules/jquery/dist/jquery.js"></script>
        <script src="assets/node_modules/popper.js/dist/popper.js"></script>
        <script src="assets/node_modules/bootstrap/dist/js/bootstrap.js"></script>
        
        <script src="assets/js/formulario/validacao/mascaras.js"></script>
        <script src="assets/js/formulario/camposdinamico/enderecodinamico.js"></script>
        
        <script src="assets/js/formularioEtapas.js"></script>
        <script src="assets/js/dwr/candidato/candidatura/camposDinamicos.js"></script>
        <script src="assets/js/formulario/validacao/candidato/candidatura/funcoesImportantes.js"></script>
        <script src="assets/js/formulario/validacao/candidato/candidatura/candidatura.js"></script>
        
        <script src="assets/js/bootstrap-validate.js"></script>
    </body>
</html>
