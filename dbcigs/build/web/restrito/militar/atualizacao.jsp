<%-- 
    Document   : atualizacao
    Created on : 03/01/2021, 13:37:48
    Author     : Anderson de Paula Andrade Medeiros
--%>

<%@page import="model.bean.GrupoAcesso"%>
<%@page import="java.util.ArrayList"%>
<%@page import="model.bean.Militar"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="Anderson de Paula Andrade Medeiros">
        
        <link rel="icon" type="image/x-icon" href="../../assets/img/brasaocigs.png" />
        <title>Atualização de Militar</title>
        
        <link rel="stylesheet" type="text/css" href="../../assets/node_modules/bootstrap/compiler/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="../../assets/css/estilo_universal.css">
        <link rel="stylesheet" type="text/css" href="../../assets/css/estilo_formulario_etapas.css">
        
        <script type='text/javascript' src='../../dwr/engine.js'></script>
        <script type='text/javascript' src='../../dwr/interface/FacadeAjax.js'></script>
        <script type='text/javascript' src='../../dwr/util.js'></script> 
    </head>
    <body>
        <header class="">            
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <a class="navbar-brand" href=""><img src="../../assets/img/brasaocigs.png" alt="Página Inicial" width="30" height="35"/> <span class="sr-only">(Página atual)</span></a>
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

                    if(retorno == 1){
                        out.println("<div class=\"alert alert-success shadow-sm text-center\" role=\"alert\">");
                        out.println("       Dados atualizados com sucesso!");
                        out.println("</div>");
                    }
                    else if(retorno == 2){
                        out.println("<div class=\"alert alert-danger shadow-sm text-center\" role=\"alert\">");
                        out.println("       Erro durante a atualização dos dados.<br>Tente Novamente!");
                        out.println("</div>");
                    }
                }
            %>               
            
            <form id="formCadMilitar" name="formCadMilitar" method="post" action="controller.militar/Atualizacao">
                
                <%
                    HttpSession sessao = request.getSession();
                            
                    Militar militarLogado = (Militar) sessao.getAttribute("militarAutenticado");
                    
                    out.println("<input type=\"hidden\" class=\"form-control idtmil\" id=\"txtIdtMilAtt\" name=\"txtIdtMilAtt\" value='"+militarLogado.getIdtMilitar()+"' readonly>");
                %>
                
                <ul id="progress">
                    <li class="ativo">Dados Individuais</li>
                    <li>Dados Militares</li>
                    <li>Dados Familiares</li>
                    <li>Dados de Endereço</li>
                    <li>Dados de Contato</li>
                    <li>Dados de Acesso</li>
                </ul>
                
                <fieldset>
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Dados Individuais</h5>
                    </div>
                    <div class="fieldset-body">
                        <div class="form-row">
                            <div class="form-group col-md-4" id="div-idtmil">
                                <label for="txtIdtMil">Identidade Militar: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control idtmil" id="txtIdtMil" name="txtIdtMil" placeholder="Ex. 000000000-0">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-idtMil">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4" id="div-idtcivil">
                                <label for="txtIdtCivil">Identidade Civil: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtIdtCivil" name="txtIdtCivil" placeholder="Ex. 0000000-0" maxlength="12">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-idtCivil">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtDataNasc">Data de Nascimento: <span class="campo-obrigatorio">*</span></label>
                                <input type="date" class="form-control" id="txtDataNasc" name="txtDataNasc" placeholder="Ex.: DD/MM/AAAA">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-dataNasc">Campo Obrigatório!</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4" id="div-cpf">
                                <label for="txtCpf">CPF: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control cpf" id="txtCpf" name="txtCpf" placeholder="Ex.: 000.000.000-00">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-cpf">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4" id="div-preccp">
                                <label for="txtPreccp">Prec-CP: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtPreccp" name="txtPreccp" placeholder="Ex.: 000000000" maxlength="9">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-preccp">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4" id="div-cp">
                                <label for="txtCP">CP: </label>
                                <input type="text" class="form-control" id="txtCP" name="txtCP" placeholder="Ex.: 000000" maxlength="6">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-cp">Campo Obrigatório!</div>
                            </div>                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="txtNome">Nome: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtNome" name="txtNome" placeholder="Ex.: Fulano">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="txtSobrenome">Sobrenome: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtSobrenome" name="txtSobrenome" placeholder="Ex.: de Tal">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="txtNomeGuerra">Nome de Guerra: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtNomeGuerra" name="txtNomeGuerra" placeholder="Ex.: De Tal">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="txtSexo">Sexo: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtSexo" name="txtSexo">
                                    <option value="0" selected>Selecione um sexo...</option>
                                    <option value="M">MASCULINO</option>
                                    <option value="F">FEMININO</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="txtTS">Tipo Sanguíneo: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtTS" name="txtTS">
                                    <option value="0" selected>Selecione um tipo sanguíneo...</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                    <option value="O">O</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="txtFatorRH">Fator RH: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtFatorRH" name="txtFatorRH">
                                    <option value="0" selected>Selecione um fator RH...</option>
                                    <option value="1">+</option>
                                    <option value="00">-</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="txtPai">Pai: </label>
                                <input type="text" class="form-control" id="txtPai" name="txtPai" placeholder="Ex.: Fulano de Tal">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="txtMae">Mãe: </label>
                                <input type="text" class="form-control" id="txtMae" name="txtMae" placeholder="Ex.: Fulana de Tal">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="txtEstCivil">Estado Civil: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtEstCivil" name="txtEstCivil">
                                    <option value="0" selected>Selecione um estado civil...</option>
                                    <option value="1">Teste</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtEscolaridade">Escolaridade: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtEscolaridade" name="txtEscolaridade">
                                    <option value="0" selected>Selecione um nível de escolaridade...</option>
                                    <option value="1">Teste</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtReligiao">Religião: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtReligiao" name="txtReligiao">
                                    <option value="0" selected>Selecione uma religião...</option>
                                    <option value="1">Teste</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>                            
                        </div>
                        <div class="form-row">   
                            <div class="form-group col-md-4" id="div-natest">
                                <label for="txtNatEst">Naturalidade (Estado): <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtNatEst" name="txtNatEst">
                                    <option value="0" selected>Selecione um Estado...</option>
                                    <option value="1">Teste</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4" id="div-natcid-select">
                                <label for="txtNatCid">Naturalidade (Cidade): <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtNatCid" name="txtNatCid">
                                    <option value="0" selected>Selecione uma Cidade...</option>
                                    <option value="1">Teste</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4" id="div-datapraca">
                                <label for="txtDataPraca">Data de Praça: <span class="campo-obrigatorio">*</span></label>
                                <input type="date" class="form-control" id="txtDataPraca" name="txtDataPraca" placeholder="Ex.: DD/MM/AAAA">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-dataPraca">Campo Obrigatório!</div>
                            </div>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Título Eleitoral</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="txtTitEleitorNum">Título Eleitoral: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control titulo-eleitor" id="txtTitEleitorNum" name="txtTitEleitorNum" placeholder="Ex.: 0000 0000 0000">
                                    <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-titEleitorNum">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtTitEleitorZona">Zona Eleitoral: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtTitEleitorZona" name="txtTitEleitorZona" placeholder="Ex.: 000" maxlength="3">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-titEleitorZona">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="txtTitEleitorSecao">Seção Eleitoral: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtTitEleitorSecao" name="txtTitEleitorSecao" placeholder="Ex.: 0000" maxlength="4">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-titEleitorSecao">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtTitEleitorEst">Estado: <span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtTitEleitorEst" name="txtTitEleitorEst">
                                        <option value="0" selected>Selecione um Estado...</option>
                                        <option value="1">Teste</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="txtTitEleitorCid">Cidade: <span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtTitEleitorCid" name="txtTitEleitorCid">
                                        <option value="0" selected>Selecione uma Cidade...</option>
                                        <option value="1">Teste</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>      
                        <div class="header-interno">
                            <h5 class="title-interno">Uniforme</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="txtNumCoturno">Número Coturno: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtNumCoturno" name="txtNumCoturno">
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
                                    <label for="txtTamGand">Tamanho Gandola: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtTamGand" name="txtTamGand">
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
                                    <label for="txtTamCalca">Tamanho Calça: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtTamCalca" name="txtTamCalca">
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
                                    <label for="txtTamCamCmf">Tamanho Camisa Camfuflada: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtTamCamCmf" name="txtTamCamCmf">
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
                                    <label for="txtCNHNum">Número: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtCNHNum" name="txtCNHNum" placeholder="Ex. 00000000000" maxlength="11">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-numCNH">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtCNHCatg">Categoria: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtCNHCatg" name="txtCNHCatg">
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
                                    <label for="txtCNHDataVal">Data de Validade: <span class="campo-obrigatorio">*</span></label>
                                    <input type="date" class="form-control" id="txtCNHDataVal" name="txtCNHDataVal" placeholder="Ex. 00/00/0000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-dataValCNH">Campo Obrigatório!</div>
                                </div> 
                            </div>
                        </div>
                    </div>
                        
                    <button type="button" name="btnProximo2" class="btn btn-success prox acao" value="Proximo">Próximo</button>
                </fieldset>
                <!--Dados Militares-->
                <fieldset>
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Dados Militares</h5>
                    </div>
                    <div class="fieldset-body">
                        <div class="form-row">                                
                            <div class="form-group col-md-4">
                                <label for="txtPGrad">Posto/Graduação: <span class=campo-obrigatorio>*</span></label>
                                <select class="form-control" id="txtPGrad" name="txtPGrad">
                                    <option value="0" selected>Selecione um Posto/Graduação...</option>
                                    <option value="1">Teste</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtQas">Quadro, Arma ou Serviço: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtQas" name="txtQas">
                                    <option value="0" selected>Selecione uma Arma...</option>
                                    <option value="1">Teste</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtCia">Pertence a qual CIA: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtCia" name="txtCia">
                                    <option value="0" selected>Selecione uma companhia...</option>
                                    <option value="1">COMPANHIA DE COMANDO E SERVIÇO</option>
                                    <option value="2">COMPANHIA AUXILIAR DE ENSINO</option>
                                    <option value="3">NENHUMA</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                        </div>    
                        <div class="header-interno">
                            <h5 class="title-interno">Comportamento</h5>
                        </div>
                        <div class="fieldset-interno">                            
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtCptm">Comportamento: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtCptm" name="txtCptm">
                                        <option value="0" selected>Selecione um Comportamento...</option>
                                        <option value="1">Teste</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>                            
                            </div>                            
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno">Setor no qual trabalha</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-6" id="div-divsec">
                                    <label for="txtDivSec">Pertence a qual divisão ou seção: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtDivSec" name="txtDivSec">
                                        <option value="0" selected>Selecione uma divisão ou seção...</option>
                                        <option value="1">Teste</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-6" id="div-setor">
                                    <label for="txtSetor">Em qual setor trabalha: <span class="campo-obrigatorio">*</span></label>
                                        <select class="form-control" id="txtSetor" name="txtSetor">
                                        <option value="0" selected>Selecione um setor...</option>
                                        <option value="1">Teste</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div> 
                            </div>
                        </div>
                    </div>  
                    <button type="button" name="btnVoltar" class="btn btn-dark anterior acao">Anterior</button>
                    <button type="button" name="btnProximo3" class="btn btn-success prox acao" value="Proximo3">Próximo</button>
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
                                    <label for="txtDataNascConjuge">Data de Nascimento: <span class="campo-obrigatorio">*</span></label>
                                    <input type="date" class="form-control" id="txtDataNascConjuge" name="txtDataNascConjuge">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-dataNasc">Campo Obrigatório!</div>
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
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="txtSexoConjuge">Sexo: <span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtSexoConjuge" name="txtSexoConjuge">
                                        <option value="0" selected>Selecione um sexo...</option>
                                        <option value="M">MASCULINO</option>
                                        <option value="F">FEMININO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                
                                <div id="divGravidez" class="fieldset-interno fieldset-dependente col-md-6" style="display: none;">
                                    <div class="form-row">                                
                                        <div class="form-group col-md-12">
                                            <label for="txtGravidez">A sua esposa está grávida: <span class="campo-obrigatorio">*</span></label>
                                            <select class="form-control" id="txtGravidez" name="txtGravidez">
                                                <option value="0" selected>Selecione SIM ou NÃO...</option>
                                                <option value="1">SIM</option>
                                                <option value="00">NÃO</option>
                                            </select>
                                            <div class="valid-feedback">Selva!</div>
                                            <div class="invalid-feedback">Campo Obrigatório!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="header-interno">
                            <h5 class="title-interno">Dependente</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtPossuiDependente">Possui dependentes?<span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtPossuiDependente" name="txtPossuiDependente">
                                        <option value="0" selected>Selecione SIM ou NÃO...</option>
                                        <option value="s">SIM</option>
                                        <option value="n">NÃO</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                        <div id="divDependentes" class="fieldset-interno fieldset-dependente" style="display: none;">
                            <div class="header-interno">
                                <h5 class="title-interno">Dependentes</h5>
                            </div>
                            <div id="fieldsetDependentes" class="fieldset-interno"></div>
                            <button type="button" id="btnAddDependente" name="btnAddDependente" class="btn btn-success" style="margin-left: 0; font-weight: bold; ">+</button>
                        </div>
                    </div>
                       
                    <button type="button" name="btnAnterior" class="btn btn-dark anterior acao">Anterior</button>
                    <button type="button" name="btnProximo4" class="btn btn-success prox acao" value="Proximo">Próximo</button>
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
                                        <option value="1" selected>Teste</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtCidadeEndResid">Cidade: <span class="campo-obrigatorio"> *</span></label>
                                    <select class="form-control" id="txtCidadeEndResid" name="txtCidadeEndResid">
                                        <option value="0" selected>Selecione uma Cidade...</option>
                                        <option value="1" selected>Teste</option>
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
                    </div>
                    <button type="button" name="btnAnterior" class="btn btn-dark anterior acao">Anterior</button>
                    <button type="button" name="btnProximo5" class="btn btn-success prox acao" value="Proximo">Próximo</button>                   
                </fieldset>
                <!--Contato-->
                <fieldset> 
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Dados de Contato</h5>
                    </div>
                    <div class="fieldset-body">
                        <div class="header-interno">
                            <h5 class="title-interno">Contatos</h5>
                        </div>
                        <div class="fieldset-interno">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="txtEmail">Email: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtEmail" name="txtEmail" placeholder="Ex.: fulanodetal@gmail.com">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-email">Campo Obrigatório!</div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="txtFone01">Fone 01: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control fone" id="txtFone01" name="txtFone01" placeholder="Ex.: (00) 00000-0000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-foneCel">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="txtFone02">Fone 02: </label>
                                    <input type="text" class="form-control fone" id="txtFone02" name="txtFone02" placeholder="Ex.: (00) 00000-0000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-foneCel">Campo Obrigatório!</div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                    <label for="txtFamiliar">Familiar: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtFamiliar" name="txtFamiliar" placeholder="Fulano de Tal">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtFoneFamiliar">Fone Familiar: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control fone" id="txtFoneFamiliar" name="txtFoneFamiliar" placeholder="Ex.: (00) 00000-0000">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-foneCel">Campo Obrigatório!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" name="btnAnterior" class="btn btn-dark anterior acao">Anterior</button>
                    <button type="button" name="btnProximo6" class="btn btn-success prox acao" value="Proximo">Próximo</button>
                </fieldset>
                <!--Acesso-->
                <fieldset> 
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Dados de Acesso</h5>
                    </div>
                    <div class="fieldset-body">
                        
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="txtSenha">Senha: <span class="campo-obrigatorio">*</span></label>
                                <input type="password" class="form-control" id="txtSenha" name="txtSenha" placeholder="Ex.: Senha">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback invalid-senha">Campo Obrigatório!</div>
                            </div> 
                        </div>
                    </div>
                    <button type="button" name="btnAnterior" class="btn btn-dark anterior acao">Anterior</button>
                    <!--<button type="button" name="btnProximo9" class="btn btn-danger prox acao" value="Proximo">Próximo</button>-->
                    <button type="submit" name="btnSalvarAtualizacao" class="btn btn-success acao">Atualizar</button>
                </fieldset>
            </form>
        </section>
            
        <footer class="container-fluid bg-success text-center fixed-bottom">
            <b>Desenvolvido por Anderson de Paula Andrade Medeiros</b><br>
            <b class="text-center copy">&copy;2020-2021</b>
        </footer>
        
        <script src="../../assets/node_modules/jquery/dist/jquery.js"></script>
        <script src="../../assets/node_modules/popper.js/dist/popper.js"></script>
        <script src="../../assets/node_modules/bootstrap/dist/js/bootstrap.js"></script>
        
        <script src="../../assets/js/formulario/validacao/mascaras.js"></script>
        <script src="../../assets/js/formulario/camposdinamico/enderecodinamico.js"></script>
        
        <script src="../../assets/js/formularioEtapas.js"></script>
        <script src="../../assets/js/dwr/militar/atualizacao/camposDinamicos.js"></script>
        <script src="../../assets/js/formulario/validacao/militar/atualizacao/funcoesImportantes.js"></script>
        <script src="../../assets/js/formulario/validacao/militar/atualizacao/atualizacao.js"></script>
        
        <script src="../../assets/js/bootstrap-validate.js"></script>
    </body>
</html>
