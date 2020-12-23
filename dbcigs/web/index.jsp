<%-- 
    Document   : index
    Created on : 04/11/2019, 13:34:22
    Author     : CB Anderson de Paula Andrade Medeiros
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="Anderson de Paula Andrade Medeiros">
        
        <link rel="icon" type="image/x-icon" href="assets/img/logo_sgdis.png" />
        <title>Login</title>
        
        <link rel="stylesheet" type="text/css" href="assets/node_modules/bootstrap/compiler/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="assets/css/estilo_universal.css">
        <link rel="stylesheet" type="text/css" href="assets/css/estilo_index.css">
        <link rel="stylesheet" type="text/css" href="assets/css/floating_labels.css">
    </head>
    <body>
        
        <form class="form-signin" name="formLogin" action="Autenticador" method="POST">
            <%
                if(request.getParameter("e") != null){
                    int grp_acesso_sgdis = Integer.parseInt(request.getParameter("e"));

                    if(grp_acesso_sgdis == 1){
                        out.println("<div class=\"alert alert-danger col-md-6 mr-auto ml-auto shadow-sm text-center\" role=\"alert\">");
                        out.println("       Identidade Inválida!<br>Tente Novamente!");
                        out.println("</div>");
                    }
                    else if(grp_acesso_sgdis == 2){
                        out.println("<div class=\"alert alert-danger col-md-6 mr-auto ml-auto shadow-sm text-center\" role=\"alert\">");
                        out.println("       Senha Inválida!<br>Tente Novamente!");
                        out.println("</div>");
                    }
                    else if(grp_acesso_sgdis == 3){
                        out.println("<div class=\"alert alert-danger col-md-6 mr-auto ml-auto shadow-sm text-center\" role=\"alert\">");
                        out.println("       Identidade e Senha Inválidas!<br>Tente Novamente!");
                        out.println("</div>");
                    }
                    else if(grp_acesso_sgdis == 4){
                        out.println("<div class=\"alert alert-danger col-md-6 mr-auto ml-auto shadow-sm text-center\" role=\"alert\">");
                        out.println("       Sessão Encerrada!<br>Tente Novamente!");
                        out.println("</div>");
                    }
                }
            %>
            <div class="text-center col-md-3 form form-signin">
                <img class="col-4" src="assets/img/logo_sgdis.png" alt="Sistema de Gerenciamento de Discente" >                                       

                <div class="form-label-group">
                    <label for="txtIdentidade">Identidade: </label>
                    <input type="text" id="txtIdentidade" name="txtIdentidade" class="form-control" placeholder="Identidade" required autofocus>
                </div>
                
                <div class="form-label-group">
                    <label for="txtSenha">Senha: </label>
                    <input type="password" id="txtSenha" name="txtSenha" class="form-control" placeholder="Senha" required>
                </div>
                
                <button type="submit" class="btn btn-primary btn-block btn-success">Entrar</button>
                <button type="button" class="btn btn-primary btn-block btn-dark" onclick="location.href='cadastro.jsp'">Cadastrar</button>
                <p class="mt-5 mb-3 text-center copy">&copy; 2019-2020</p>
            </div>
            <!--<div class="col-12 text-center shadow-sm frase">
                <h1>"Quem são eles?"</h1>
            </div>-->
        </form>
    </body>
</html>
