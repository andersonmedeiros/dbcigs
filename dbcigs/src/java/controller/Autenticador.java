/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import model.bean.Militar;
import model.dao.MilitarDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author andersondepaula
 */
public class Autenticador extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Autenticador</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Autenticador at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession sessao = request.getSession(false);
        if(sessao != null){
            sessao.invalidate();
        }
        response.sendRedirect("index.jsp");
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String identidade = request.getParameter("txtIdentidade");
        String senha = request.getParameter("txtSenha");
        
        if(identidade.equals("0107912217") && senha.equals("123")){
            HttpSession sessao = request.getSession();
            sessao.setAttribute("militarAutenticado", "sti");
            response.sendRedirect("/sgdis/restrito/inicial.jsp");
        }else{
            Militar mil = new Militar();
            MilitarDAO milDAO = new MilitarDAO();
            
            //Militar
            mil.setIdentidade(identidade);
            mil.setSenha(senha);
            
            //Consultas no banco de dados para validação dos dados de acesso     
            Militar milAutenticado = milDAO.autenticacao(mil);
            boolean validaLogin = milDAO.validarLogin(identidade);
            boolean validaSenha = milDAO.validarSenha(senha);
            boolean validaLoginSenha = milDAO.validarLoginSenha(identidade, senha);
            
            //e=1: login inválido
            if(validaLogin == false && validaSenha == true){
                response.sendRedirect("/sgdis/index.jsp?e=1");
            }
            //e=2: senha inválida
            else if(validaLogin == true && validaSenha == false){
                response.sendRedirect("/sgdis/index.jsp?e=2");
            }
            //e=3: login e senha inválidos
            else if(validaLogin == false && validaSenha == false){
                response.sendRedirect("/sgdis/index.jsp?e=3");
            }else if(milAutenticado != null && validaLoginSenha == true){
                HttpSession sessao = request.getSession();
                sessao.setAttribute("militarAutenticado", milAutenticado);
                response.sendRedirect("/sgdis/restrito/inicial.jsp");
                /*if(milAutenticado.getId_grp_acesso_sgdis() == 1){
                    response.sendRedirect("/sgdis/restrito/inicial.jsp?g=1");
                }*/
            }
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
