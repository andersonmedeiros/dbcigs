/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller.relatorio;

import connection.ConnectionFactory;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.bean.DivisaoSecao;
import model.bean.GeradorDeRelatorios;
import model.bean.PostoGraduacao;
import model.dao.DivisaoSecaoDAO;
import model.dao.PostoGraduacaoDAO;
/**
 *
 * @author anderson
 */
public class GerarRelatorioPdf extends HttpServlet {

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
            out.println("<title>Servlet GerarRelatorioPdf</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet GerarRelatorioPdf at " + request.getContextPath() + "</h1>");
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
        processRequest(request, response);
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
        
        ServletContext contexto = getServletContext();

        // abre conexão com o banco
        Connection conexao = new ConnectionFactory().getConnection();
        // gera relatório
        GeradorDeRelatorios gerador = new GeradorDeRelatorios(conexao);

        int tipo = Integer.parseInt(request.getParameter("txtTipoRela"));
        
        switch (tipo) {
            case 1:
                {
                    PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
                    PostoGraduacao pg = pgDAO.getPostoGraduacaoById(Integer.parseInt(request.getParameter("txtPGradRela")));
                    String nomeguerra = request.getParameter("txtNomeGuerraRela").toUpperCase();
                    // prepara parâmetros
                    Map<String, Object> parametros = new HashMap<>();
                    parametros.put("tipo", "POSTO/GRADUAÇÃO: " + pg.getAbreviatura() + " E " + "NOME DE GUERRA QUE CONTÉM: " + nomeguerra);
                    String sql_query = "SELECT mil.endereconum numero, pg.abreviatura postograduacao, mil.nomeguerra nomeguerra, f.fone fone, e.cep, e.descricao, e.bairro, ifnull(concat(e.complemento,\", \"), \"\") complemento, ifnull(concat(e.pontoreferencia,\", \"),\"\") pontoreferencia, c.nome cidade, est.sigla estado, ds.abreviatura divisaosecao, s.abreviatura setor " +
                                        "FROM dbcigs_militar mil " +
                                        "INNER JOIN dbcigs_postograduacao pg ON pg.id = mil.dbcigs_postograduacao_id " +
                                        "INNER JOIN dbcigs_fone f ON f.dbcigs_militar_idtmilitar = mil.idtmilitar " +
                                        "INNER JOIN dbcigs_endereco e ON  e.id = mil.dbcigs_endereco_id " +
                                        "INNER JOIN dbcigs_cidade c ON c.id = e.dbcigs_cidade_id " +
                                        "INNER JOIN dbcigs_estado est ON est.id = c.dbcigs_estado_id " +
                                        "INNER JOIN dbcigs_setor s ON s.id = mil.dbcigs_setor_id " +
                                        "INNER JOIN dbcigs_divisaosecao ds ON ds.id = s.dbcigs_divisaosecao_id " +
                                        "WHERE mil.dbcigs_postograduacao_id = " + pg.getId() + " AND mil.nomeguerra LIKE '%" + nomeguerra + "%' AND mil.situacao = 1 " +
                                        "ORDER BY 'mil.dbcigs_postograduacao_id' ASC;";
                    String jrxml = contexto.getRealPath("/relatorio/RelatorioPlanoChamada.jrxml");
                    gerador.geraPdf(jrxml, parametros, response.getOutputStream(), sql_query);
                    break;
                }
            case 2:
                {
                    PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
                    PostoGraduacao pg = pgDAO.getPostoGraduacaoById(Integer.parseInt(request.getParameter("txtByPGradRela")));
                    // prepara parâmetros
                    Map<String, Object> parametros = new HashMap<>();
                    parametros.put("tipo", "POSTO/GRADUAÇÃO: " + pg.getAbreviatura());
                    String sql_query = "SELECT mil.endereconum numero, pg.abreviatura postograduacao, mil.nomeguerra nomeguerra, f.fone fone, e.cep, e.descricao, e.bairro, ifnull(concat(e.complemento,\", \"), \"\") complemento, ifnull(concat(e.pontoreferencia,\", \"),\"\") pontoreferencia, c.nome cidade, est.sigla estado, ds.abreviatura divisaosecao, s.abreviatura setor " +
                            "FROM dbcigs_militar mil " +
                            "INNER JOIN dbcigs_postograduacao pg ON pg.id = mil.dbcigs_postograduacao_id " +
                            "INNER JOIN dbcigs_fone f ON f.dbcigs_militar_idtmilitar = mil.idtmilitar " +
                            "INNER JOIN dbcigs_endereco e ON  e.id = mil.dbcigs_endereco_id " +
                            "INNER JOIN dbcigs_cidade c ON c.id = e.dbcigs_cidade_id " +
                            "INNER JOIN dbcigs_estado est ON est.id = c.dbcigs_estado_id " +
                            "INNER JOIN dbcigs_setor s ON s.id = mil.dbcigs_setor_id " +
                            "INNER JOIN dbcigs_divisaosecao ds ON ds.id = s.dbcigs_divisaosecao_id " +
                            "WHERE mil.dbcigs_postograduacao_id = " + pg.getId() + " AND mil.situacao = 1 " +
                            "ORDER BY 'mil.dbcigs_postograduacao_id' ASC;";
                    String jrxml = contexto.getRealPath("/relatorio/RelatorioPlanoChamada.jrxml");
                    gerador.geraPdf(jrxml, parametros, response.getOutputStream(), sql_query);
                    break;
                }
            case 3:
                {
                    DivisaoSecaoDAO dsDAO = new DivisaoSecaoDAO();
                    DivisaoSecao ds = dsDAO.getDivisaoSecaoById(Integer.parseInt(request.getParameter("txtDivSecRela")));
                    // prepara parâmetros
                    Map<String, Object> parametros = new HashMap<>();
                    parametros.put("tipo", ds.getNome());
                    String sql_query = "SELECT mil.endereconum numero, pg.abreviatura postograduacao, mil.nomeguerra nomeguerra, f.fone fone, e.cep, e.descricao, e.bairro, ifnull(concat(e.complemento,\", \"), \"\") complemento, ifnull(concat(e.pontoreferencia,\", \"),\"\") pontoreferencia, c.nome cidade, est.sigla estado, ds.abreviatura divisaosecao, s.abreviatura setor " +
                            "FROM dbcigs_militar mil " +
                            "INNER JOIN dbcigs_postograduacao pg ON pg.id = mil.dbcigs_postograduacao_id " +
                            "INNER JOIN dbcigs_fone f ON f.dbcigs_militar_idtmilitar = mil.idtmilitar " +
                            "INNER JOIN dbcigs_endereco e ON  e.id = mil.dbcigs_endereco_id " +
                            "INNER JOIN dbcigs_cidade c ON c.id = e.dbcigs_cidade_id " +
                            "INNER JOIN dbcigs_estado est ON est.id = c.dbcigs_estado_id " +
                            "INNER JOIN dbcigs_setor s ON s.id = mil.dbcigs_setor_id " +
                            "INNER JOIN dbcigs_divisaosecao ds ON ds.id = s.dbcigs_divisaosecao_id " +
                            "WHERE ds.id = " + ds.getId() + " AND mil.situacao = 1 " +
                            "ORDER BY 'mil.dbcigs_postograduacao_id' ASC;";
                    String jrxml = contexto.getRealPath("/relatorio/RelatorioPlanoChamada.jrxml");
                    gerador.geraPdf(jrxml, parametros, response.getOutputStream(), sql_query);
                    break;
                }
            case 4:
                {
                    int cia = Integer.parseInt(request.getParameter("txtCiaRela"));
                    String paramTipo = "";
                    if(cia == 1){
                        paramTipo = "COMPANHIA DE COMANDO E SERVIÇO (CIA C SV)";
                    }else if(cia == 2){
                        paramTipo = "COMPANHIA AUXILIAR DE ENSINO (CIA AUX ENS)";
                    }       // prepara parâmetros
                    Map<String, Object> parametros = new HashMap<>();
                    parametros.put("tipo", paramTipo);
                    String sql_query = "SELECT mil.endereconum numero, pg.abreviatura postograduacao, mil.nomeguerra nomeguerra, f.fone fone, e.cep, e.descricao, e.bairro, ifnull(concat(e.complemento,\", \"), \"\") complemento, ifnull(concat(e.pontoreferencia,\", \"),\"\") pontoreferencia, c.nome cidade, est.sigla estado, ds.abreviatura divisaosecao, s.abreviatura setor " +
                            "FROM dbcigs_militar mil " +
                            "INNER JOIN dbcigs_postograduacao pg ON pg.id = mil.dbcigs_postograduacao_id " +
                            "INNER JOIN dbcigs_fone f ON f.dbcigs_militar_idtmilitar = mil.idtmilitar " +
                            "INNER JOIN dbcigs_endereco e ON  e.id = mil.dbcigs_endereco_id " +
                            "INNER JOIN dbcigs_cidade c ON c.id = e.dbcigs_cidade_id " +
                            "INNER JOIN dbcigs_estado est ON est.id = c.dbcigs_estado_id " +
                            "INNER JOIN dbcigs_setor s ON s.id = mil.dbcigs_setor_id " +
                            "INNER JOIN dbcigs_divisaosecao ds ON ds.id = s.dbcigs_divisaosecao_id " +
                            "WHERE mil.cia = " + cia + " AND mil.situacao = 1 " +
                            "ORDER BY 'mil.dbcigs_postograduacao_id' ASC;";
                    String jrxml = contexto.getRealPath("/relatorio/RelatorioPlanoChamada.jrxml");
                    gerador.geraPdf(jrxml, parametros, response.getOutputStream(), sql_query);
                    break;
                }
            case 5:
                {
                    String param = "CENTRO DE INSTRUÇÃO DE GUERRA NA SELVA (CIGS)";
                    // prepara parâmetros
                    Map<String, Object> parametros = new HashMap<>();
                    parametros.put("tipo", param);
                    String sql_query = "SELECT mil.endereconum numero, pg.abreviatura postograduacao, mil.nomeguerra nomeguerra, f.fone fone, e.cep, e.descricao, e.bairro, ifnull(concat(e.complemento,\", \"), \"\") complemento, ifnull(concat(e.pontoreferencia,\", \"),\"\") pontoreferencia, c.nome cidade, est.sigla estado, ds.abreviatura divisaosecao, s.abreviatura setor " +
                            "FROM dbcigs_militar mil " +
                            "INNER JOIN dbcigs_postograduacao pg ON pg.id = mil.dbcigs_postograduacao_id " +
                            "INNER JOIN dbcigs_fone f ON f.dbcigs_militar_idtmilitar = mil.idtmilitar " +
                            "INNER JOIN dbcigs_endereco e ON  e.id = mil.dbcigs_endereco_id " +
                            "INNER JOIN dbcigs_cidade c ON c.id = e.dbcigs_cidade_id " +
                            "INNER JOIN dbcigs_estado est ON est.id = c.dbcigs_estado_id " +
                            "INNER JOIN dbcigs_setor s ON s.id = mil.dbcigs_setor_id " +
                            "INNER JOIN dbcigs_divisaosecao ds ON ds.id = s.dbcigs_divisaosecao_id " +
                            "WHERE mil.situacao = 1 " +
                            "ORDER BY 'mil.dbcigs_postograduacao_id' ASC;";
                    String jrxml = contexto.getRealPath("/relatorio/RelatorioPlanoChamada.jrxml");
                    gerador.geraPdf(jrxml, parametros, response.getOutputStream(), sql_query);
                    break;
                }
            default:
                break;
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
