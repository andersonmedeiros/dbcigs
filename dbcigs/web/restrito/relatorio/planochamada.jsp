<%-- 
    Document   : relatorio
    Created on : 28/12/2020, 19:10:14
    Author     : anderson
--%>

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
        <title>Relatórios</title>
        
        <link rel="stylesheet" type="text/css" href="../../assets/node_modules/bootstrap/compiler/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="../../assets/css/estilo_universal.css">
        <link rel="stylesheet" type="text/css" href="../../assets/css/militar/estiloCadastro.css">
        <link rel="stylesheet" type="text/css" href="../../assets/css/estilo_cadastroCurso.css">   
        
        <script type='text/javascript' src='../../dwr/engine.js'></script>
        <script type='text/javascript' src='../../dwr/interface/FacadeAjax.js'></script>
        <script type='text/javascript' src='../../dwr/util.js'></script> 
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <a class="navbar-brand active" href="../../restrito/inicial.jsp"><img src="../../assets/img/brasaocigs.png" width="30px" height="35px"><span class="sr-only">Início</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerSgdis" aria-controls="navbarTogglerSgdis" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerSgdis">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">          
                        <%
                            HttpSession sessao = request.getSession();
                            
                            Militar militarLogado;
                            
                            militarLogado = (Militar) sessao.getAttribute("militarAutenticado");
                            
                            if(militarLogado.getIdGrupoAcesso() == 1){
                                out.println(
                                            "<li class=\"nav-item\">"+
                                                "<a class=\"nav-link\" href=\"../../restrito/militar/atualizacao.jsp\">Meus Dados</a>"+
                                            "</li>"+
                                            "<li class=\"nav-item dropdown\">"+
                                                "<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                                                    "Militares"+
                                                "</a>"+
                                                "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">"+                                
                                                    "<a class=\"dropdown-item\" href=\"../../restrito/militar/ativos.jsp\">Listar Ativos</a>"+
                                                    "<a class=\"dropdown-item\" href=\"../../restrito/militar/inativos.jsp\">Listar Inativos</a>"+
                                                "</div>"+                                                    
                                            "</li>"+
                                            "<li class=\"nav-item dropdown\">"+
                                                "<a class=\"nav-link dropdown-toggle active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                                                    "Relatórios"+
                                                "</a>"+
                                                "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">"+                                
                                                    "<a class=\"dropdown-item active\" href=\"../../restrito/relatorio/planochamada.jsp\">Plano de Chamada</a>"+
                                                "</div>"+                                                    
                                            "</li>"
                                            );
                            }                            
                            else if(militarLogado.getIdGrupoAcesso() == 2){
                                out.println(
                                            "<li class=\"nav-item\">"+
                                                "<a class=\"nav-link\" href=\"../../restrito/militar/atualizacao.jsp\">Meus Dados</a>"+
                                            "</li>"+
                                            "<li class=\"nav-item dropdown\">"+
                                                "<a class=\"nav-link dropdown-toggle active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                                                    "Relatórios"+
                                                "</a>"+
                                                "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">"+                                
                                                    "<a class=\"dropdown-item active\" href=\"../../restrito/relatorio/planochamada.jsp\">Plano de Chamada</a>"+
                                                "</div>"+                                                    
                                            "</li>"
                                            );                                        

                            }
                            else if(militarLogado.getIdGrupoAcesso() == 3){
                                out.println(
                                            "<li class=\"nav-item\">"+
                                                "<a class=\"nav-link\" href=\"../../restrito/militar/atualizacao.jsp\">Meus Dados</a>"+
                                            "</li>"
                                            );                        
                            }
                        %>   
                    </ul>
                    <form class="form-inline my-2 my-lg-0" name="formSair" action="Sair" method="POST">                  
                        <button class="btn btn-danger my-2 my-sm-0" type="submit">Sair</button>
                    </form>
                </div>
            </nav>
        </header>
        
        <section class="container-fluid col-md-10 mr-auto ml-auto area">
            <form id="formPesqVisitasFechadas" class="form formCad" action="controller.relatorio/GerarRelatorioPdf" method="POST" target="_blank">
                <fieldset>
                    <div class="fieldset-header">
                        <h5 class="fieldset-title">Visitas</h5>
                    </div>
                    <div class="fieldset-body">
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="txtTipoRela">Plano de Chamada por: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtTipoRela" name="txtTipoRela">
                                    <option value="0" selected>Selecione o relatório desejado...</option>
                                    <option value="1">MILITAR</option>
                                    <option value="2">POSTO OU GRADUAÇÃO</option>
                                    <option value="3">DIVISÃO OU SEÇÃO</option>
                                    <option value="4">COMPANHIA</option>
                                    <option value="5">CIGS</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>  
                            <div class="form-group col-md-8" id="divByPGradRela" style="display: none;">
                                <label for="txtByPGradRela">Posto/Graduação: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtByPGradRela" name="txtByPGradRela">
                                    <option value="0" selected>Selecione um posto ou graduação...</option>
                                    <option value="1">Teste</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4" id="divPGradRela" style="display: none;">
                                <label for="txtPGradRela">Posto/Graduação: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtPGradRela" name="txtPGradRela">
                                    <option value="0" selected>Selecione um posto ou graduação...</option>
                                    <option value="1">Teste</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-4" id="divNomeGuerraRela" style="display: none;">
                                <label for="txtNomeGuerraRela">Nome de Guerra: <span class="campo-obrigatorio">*</span></label>
                                <input type="text" class="form-control" id="txtNomeGuerraRela" name="txtNomeGuerraRela" placeholder="Ex.: Fulano ou ful ou ano">
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-8" id="divDivSecRela" style="display: none;">
                                <label for="txtDivSecRela">Divisão ou Seção: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtDivSecRela" name="txtDivSecRela">
                                    <option value="0" selected>Selecione uma divisão ou seção...</option>
                                    <option value="1">Teste</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            <div class="form-group col-md-8" id="divCiaRela" style="display: none;">
                                <label for="txtCiaRela">Companhia: <span class="campo-obrigatorio">*</span></label>
                                <select class="form-control" id="txtCiaRela" name="txtCiaRela">
                                    <option value="0" selected>Selecione uma companhia...</option>
                                    <option value="1">COMPANHIA DE COMANDO E SERVIÇO</option>
                                    <option value="2">COMPANHIA AUXILIAR DE ENSINO</option>
                                </select>
                                <div class="valid-feedback">Selva!</div>
                                <div class="invalid-feedback">Campo Obrigatório!</div>
                            </div>
                            
                        </div>  
                        <div class="form-row">
                            <div class="form-group col-md-2 align-self-center">
                                <button type="button" id="btn" name="btnPesquisar" class="btn btn-warning btn-pesquisar col-md-12" value="Pesquisar">Pesquisar</button>
                            </div>
                        </div>
                        <div class="header-interno">
                            <h5 class="title-interno"></h5>
                        </div>
                        <div id="div-planochamada" class="fieldset-interno" style="display: none;">
                            <center>
                                <div id="div-btn-pdf" class="col-md-12 mb-3" style="display: none;">
                                    <button type="submit" class="btn btn-success">Gerar PDF</button>
                                </div>
                            </center>
                            
                            <table id="tbl-planochamada" class="table">
                                <thead class="thead-light">
                                    <tr>
                                    </tr>
                                </thead>
                                <tbody id="rows-planochamada"></tbody>
                            </table>
                                                       
                        </div>
                        <div id="div-planochamada-0" class="fieldset-interno" style="display: none">
                            <div class="alert alert-danger shadow-sm text-center" role="alert">
                                Não existe registro para os dados informados!
                            </div>
                        </div>
                    </div>                    
                </fieldset>                
            </form>
        </section>
                    
        <footer class="container-fluid bg-success text-center fixed-bottom">
            <b>Anderson de Paula Andrade Medeiros</b><br>
            <b class="text-center copy">&copy; 2019-2020</b>
        </footer>
        <script src="../../assets/node_modules/jquery/dist/jquery.js"></script>
        <script src="../../assets/node_modules/popper.js/dist/popper.js"></script>
        <script src="../../assets/node_modules/bootstrap/dist/js/bootstrap.js"></script>
        
        <script src="../../assets/js/formulario/validacao/mascaras.js"></script>
        <script src="../../assets/js/dwr/relatorio/planochamada/camposDinamicos.js"></script>
        <script src="../../assets/js/dwr/relatorio/planochamada/tabelaDinamica.js"></script>
        <script src="../../assets/js/formulario/validacao/relatorio/planochamada/funcoesImportantes.js"></script>
        <script src="../../assets/js/formulario/validacao/relatorio/planochamada/pesqplanochamada.js"></script>
        <script src="../../assets/js/formulario/validacao/relatorio/planochamada/relatorio.js"></script>
        
        <script src="../../assets/js/bootstrap-validate.js"></script>
    </body>
</html>
