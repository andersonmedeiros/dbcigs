<%-- 
    Document   : inicial
    Created on : 27/12/2020, 20:07:26
    Author     : Anderson de Paula Andrade Medeiros
--%>

<%@page import="model.dao.GrupoAcessoDAO"%>
<%@page import="model.bean.GrupoAcesso"%>
<%@page import="model.bean.Militar"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="Anderson de Paula Andrade Medeiros">
        
        <link rel="icon" type="image/x-icon" href="../assets/img/brasaocigs.png" />
        
        <link rel="stylesheet" type="text/css" href="../assets/node_modules/bootstrap/compiler/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="../assets/css/estilo_universal.css">
        <link rel="stylesheet" type="text/css" href="../assets/css/estilo_cadastroCurso.css">
        
        <script type='text/javascript' src='../dwr/engine.js'></script>
        <script type='text/javascript' src='../dwr/interface/FacadeAjax.js'></script>
        <script type='text/javascript' src='../dwr/util.js'></script> 

        <title>Início</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <a class="navbar-brand active" href="../restrito/inicial.jsp"><img src="../assets/img/brasaocigs.png" width="30px" height="35px"><span class="sr-only">Início</span></a>
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
                                            "<li class=\"nav-item dropdown\">"+
                                                "<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                                                    "Militares"+
                                                "</a>"+
                                                "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">"+                                
                                                    "<a class=\"dropdown-item\" href=\"../restrito/militar/ativos.jsp\">Listar Ativos</a>"+
                                                    "<a class=\"dropdown-item\" href=\"../restrito/militar/inativos.jsp\">Listar Inativos</a>"+
                                                "</div>"+                                                    
                                            "</li>"+
                                            "<li class=\"nav-item\">"+
                                                "<a class=\"nav-link\" href=\"../restrito/relatorio/relatorio.jsp\">Relatórios</a>"+
                                            "</li>"
                                            );
                            }                            
                            else if(militarLogado.getIdGrupoAcesso() == 2){
                                out.println(
                                            "<li class=\"nav-item\">"+
                                                "<a class=\"nav-link\" href=\"../restrito/relatorio/relatorio.jsp\">Relatórios</a>"+
                                            "</li>"
                                            );                                        

                            }
                            else if(militarLogado.getIdGrupoAcesso() == 3){
                                out.println(
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
        
        <footer class="container-fluid bg-success text-center fixed-bottom">
            <b>Anderson de Paula Andrade Medeiros</b><br>
            <b class="text-center copy">&copy; 2020</b>
        </footer>
        
        <script src="../assets/node_modules/jquery/dist/jquery.js"></script>
        <script src="../assets/node_modules/popper.js/dist/popper.js"></script>
        <script src="../assets/node_modules/bootstrap/dist/js/bootstrap.js"></script>
        
        <script src="../assets/js/dwr/avaliacao/avpreliminar/camposDinamicos.js"></script>
        
        
        <script src="../assets/js/formulario/validacao/relatorio/avpreliminar/funcoesImportantes.js"></script>
        <script src="../assets/js/formulario/validacao/relatorio/avpreliminar/avaliacao.js"></script>
        <script src="../assets/js/formulario/validacao/relatorio/avpreliminar/pesqalunobyturma.js"></script>
    </body>
</html>
