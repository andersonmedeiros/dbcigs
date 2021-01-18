<%-- 
    Document   : inativos
    Created on : 01/08/2020, 11:27:47
    Author     : CB Anderson de Paula Andrade Medeiros
--%>

<%@page import="model.dao.MilitarDAO"%>
<%@page import="model.dao.GrupoAcessoDAO"%>
<%@page import="model.bean.GrupoAcesso"%>
<%@page import="model.bean.Militar"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="Anderson de Paula Andrade Medeiros">
        
        <link rel="icon" type="image/x-icon" href="../../assets/img/brasaocigs.png" />
        <title>Militar</title>
        
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
                                                "<a class=\"nav-link dropdown-toggle active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                                                    "Militares"+
                                                "</a>"+
                                                "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">"+                                
                                                    "<a class=\"dropdown-item\" href=\"../../restrito/militar/ativos.jsp\">Listar Ativos</a>"+
                                                    "<a class=\"dropdown-item active\" href=\"../../restrito/militar/inativos.jsp\">Listar Inativos</a>"+
                                                "</div>"+                                                    
                                            "</li>"+
                                            "<li class=\"nav-item dropdown\">"+
                                                "<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                                                    "Relatórios"+
                                                "</a>"+
                                                "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">"+                                
                                                    "<a class=\"dropdown-item\" href=\"../../restrito/relatorio/planochamada.jsp\">Plano de Chamada</a>"+
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
                                                "<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                                                    "Relatórios"+
                                                "</a>"+
                                                "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">"+                                
                                                    "<a class=\"dropdown-item\" href=\"../../restrito/relatorio/planochamada.jsp\">Plano de Chamada</a>"+
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
            <%
                if(request.getParameter("e") != null){
                    int retorno = Integer.parseInt(request.getParameter("e"));
                    
                    if(retorno == 1){
                        out.println("<div class=\"alert alert-success shadow-sm text-center\" role=\"alert\">");
                        out.println("       Militar ativado com sucesso!");
                        out.println("</div>");
                    }
                    else if(retorno == 4){
                        out.println("<div class=\"alert alert-danger shadow-sm text-center\" role=\"alert\">");
                        out.println("       Erro durante a ativação do Militar.<br>Tente Novamente!");
                        out.println("</div>");
                    }
                }
            %>
            
            <table class="table col-md-12">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">IDENTIDADE</th>
                        <th scope="col">MILITAR</th>
                        <th scope="col">AÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    <%              
                        int i = 1;
                        MilitarDAO milDAO = new MilitarDAO();
                        ArrayList<Militar> militaresInativos = milDAO.getMilitaresInativos();
                        
                        if(militaresInativos.size() == 0){
                            out.println("<div class=\"alert alert-danger shadow-sm text-center\" role=\"alert\">");
                            out.println("       Nenhum usuário desativado.");
                            out.println("</div>");
                        }
                        else{
                            for(Militar mil : militaresInativos){
                                
                                out.println("<tr>");
                                out.println("   <th scope=\"row\">"+ (i) +"</th>");
                                out.println("   <td>"+ mil.getIdtMilitar() +"</td>");
                                out.println("   <td>"+ mil.getAbreviaturaPostoGraduacao() + " " + mil.getNomeGuerra() +"</td>");
                                out.println("   <td>");
                                out.println("       <div class=form-row>");
                                out.println("           <div class=\"form-group mr-2\">");
                                out.println("               <form name=\"formAtivar\" method=\"POST\" action=\"controller.militar/Ativar\">");
                                out.println("                   <input type=\"hidden\" class=\"form-control\" name=\"idtMilitarAtivar\" id=\"idtMilitarAtivar\" readonly=\"readonly\" value=\""+mil.getIdtMilitar()+"\"/>");
                                out.println("                   <button id="+mil.getIdtMilitar()+" type=\"submit\" name=\"btnAtivar\" class=\"btn btn-success\" onclick=\"return confirm('Tem certeza que deseja ativar o militar?');\">Ativar</button>");
                                out.println("               </form>");
                                out.println("           </div>");
                                out.println("       </div>");
                                out.println("   </td>");
                                out.println("</tr>");
                                
                                i++;
                            }
                        }
                    %>
                </tbody>
            </table>          
        </section>
        
        <footer class="container-fluid bg-success text-center fixed-bottom">
            <b>Anderson de Paula Andrade Medeiros</b><br>
            <b class="text-center copy">&copy; 2019-2020</b>
        </footer>
        <script src="../../assets/node_modules/jquery/dist/jquery.js"></script>
        <script src="../../assets/node_modules/popper.js/dist/popper.js"></script>
        <script src="../../assets/node_modules/bootstrap/dist/js/bootstrap.js"></script>
        
        <script src="../../assets/js/bootstrap-validate.js"></script>
    </body>
</html>
