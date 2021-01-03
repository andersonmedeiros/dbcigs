/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.dao;

import connection.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import model.bean.Endereco;
import model.bean.Fone;
import model.bean.Militar;
import model.bean.PostoGraduacao;
import model.bean.Setor;

/**
 *
 * @author anderson
 */
public class RelatorioDAO {
    
    private static final String PLANOCHAMADABYMILITARDWR = "SELECT mil.idtMilitar, f.fone " +
                                                           "FROM dbcigs_militar mil " +
                                                           "INNER JOIN dbcigs_fone f ON f.dbcigs_militar_idtmilitar = mil.idtmilitar " +
                                                           "INNER JOIN dbcigs_setor s ON s.id = mil.dbcigs_setor_id " +
                                                           "INNER JOIN dbcigs_divisaosecao ds ON ds.id = s.dbcigs_divisaosecao_id " +
                                                           "WHERE mil.dbcigs_postograduacao_id = ? AND mil.nomeguerra LIKE ? AND mil.situacao = 1 " +
                                                           "ORDER BY 'mil.dbcigs_postograduacao_id' ASC;";

    public static ArrayList<Fone> getPlanoChamadaByMilitarDWR(int idPostoGraduacao, String nomeguerra){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Fone> militares = new ArrayList<>();  
        MilitarDAO milDAO = new MilitarDAO();
        EnderecoDAO endDAO = new EnderecoDAO();
        SetorDAO setorDAO = new SetorDAO();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        try {
            conn = ConnectionFactory.getConnection();

            pstm = conn.prepareStatement(PLANOCHAMADABYMILITARDWR);
            pstm.setInt(1, idPostoGraduacao);
            pstm.setString(2, "%" + nomeguerra + "%");

            rs = pstm.executeQuery();
            while (rs.next()) {
                Fone f = new Fone();                    

                f.setFone(rs.getString("f.fone"));

                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("mil.idtMilitar"));
                f.setNomeGuerraMilitar(mil.getNomeGuerra());

                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(mil.getIdPostoGraduacao());
                f.setAbreviaturaPostoGraduacaoMilitar(pg.getAbreviatura());

                Endereco end = endDAO.getEnderecoById(mil.getIdEndereco());
                f.setCepEnderecoMilitar(end.getCep());
                f.setDescricaoEnderecoMilitar(end.getDescricao());
                f.setEndNumMilitar(mil.getEndNum());
                f.setBairroEnderecoMilitar(end.getBairro());
                f.setNomeCidadeEnderecoMilitar(end.getNomeCidade());
                f.setSiglaEstadoCidadeEnderecoMilitar(end.getSiglaEstadoCidade());

                Setor setor = setorDAO.getSetorById(mil.getIdSetor());
                f.setAbreviaturaSetorMilitar(setor.getAbreviatura());
                f.setAbreviaturaDivisaoSecaoMilitar(setor.getAbreviaturaDivisaoSecao());

                militares.add(f);
            }            

            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return militares;
    }
    
    private static final String PLANOCHAMADABYPGRADDWR = "SELECT mil.idtMilitar, f.fone " +
                                                           "FROM dbcigs_militar mil " +
                                                           "INNER JOIN dbcigs_fone f ON f.dbcigs_militar_idtmilitar = mil.idtmilitar " +
                                                           "INNER JOIN dbcigs_setor s ON s.id = mil.dbcigs_setor_id " +
                                                           "INNER JOIN dbcigs_divisaosecao ds ON ds.id = s.dbcigs_divisaosecao_id " +
                                                           "WHERE mil.dbcigs_postograduacao_id = ? AND mil.situacao = 1 " +
                                                           "ORDER BY 'mil.dbcigs_postograduacao_id' ASC;";

    public static ArrayList<Fone> getMilitaresByPGradDWR(int idPostoGraduacao){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Fone> militares = new ArrayList<>();  
        MilitarDAO milDAO = new MilitarDAO();
        EnderecoDAO endDAO = new EnderecoDAO();
        SetorDAO setorDAO = new SetorDAO();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        try {
            conn = ConnectionFactory.getConnection();

            pstm = conn.prepareStatement(PLANOCHAMADABYPGRADDWR);
            pstm.setInt(1, idPostoGraduacao);

            rs = pstm.executeQuery();
            while (rs.next()) {
                Fone f = new Fone();                    

                f.setFone(rs.getString("f.fone"));

                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("mil.idtMilitar"));
                f.setNomeGuerraMilitar(mil.getNomeGuerra());

                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(mil.getIdPostoGraduacao());
                f.setAbreviaturaPostoGraduacaoMilitar(pg.getAbreviatura());

                Endereco end = endDAO.getEnderecoById(mil.getIdEndereco());
                f.setCepEnderecoMilitar(end.getCep());
                f.setDescricaoEnderecoMilitar(end.getDescricao());
                f.setEndNumMilitar(mil.getEndNum());
                f.setBairroEnderecoMilitar(end.getBairro());
                f.setNomeCidadeEnderecoMilitar(end.getNomeCidade());
                f.setSiglaEstadoCidadeEnderecoMilitar(end.getSiglaEstadoCidade());

                Setor setor = setorDAO.getSetorById(mil.getIdSetor());
                f.setAbreviaturaSetorMilitar(setor.getAbreviatura());
                f.setAbreviaturaDivisaoSecaoMilitar(setor.getAbreviaturaDivisaoSecao());

                militares.add(f);
            }            

            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return militares;
    }
    
    private static final String PLANOCHAMADABYDIVSECDWR = "SELECT mil.idtMilitar, f.fone " +
                                                          "FROM dbcigs_militar mil " +
                                                          "INNER JOIN dbcigs_fone f ON f.dbcigs_militar_idtmilitar = mil.idtmilitar " +
                                                          "INNER JOIN dbcigs_setor s ON s.id = mil.dbcigs_setor_id " +
                                                          "INNER JOIN dbcigs_divisaosecao ds ON ds.id = s.dbcigs_divisaosecao_id " +
                                                          "WHERE ds.id = ? AND mil.situacao = 1 " +
                                                          "ORDER BY s.id;";

    public static ArrayList<Fone> getMilitaresByDivSecDWR(int divsec){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Fone> militares = new ArrayList<>();  
        MilitarDAO milDAO = new MilitarDAO();
        EnderecoDAO endDAO = new EnderecoDAO();
        SetorDAO setorDAO = new SetorDAO();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        try {
            conn = ConnectionFactory.getConnection();

            pstm = conn.prepareStatement(PLANOCHAMADABYDIVSECDWR);
            pstm.setInt(1, divsec);

            rs = pstm.executeQuery();
            while (rs.next()) {
                Fone f = new Fone();                    

                f.setFone(rs.getString("f.fone"));

                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("mil.idtMilitar"));
                f.setNomeGuerraMilitar(mil.getNomeGuerra());

                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(mil.getIdPostoGraduacao());
                f.setAbreviaturaPostoGraduacaoMilitar(pg.getAbreviatura());

                Endereco end = endDAO.getEnderecoById(mil.getIdEndereco());
                f.setCepEnderecoMilitar(end.getCep());
                f.setDescricaoEnderecoMilitar(end.getDescricao());
                f.setEndNumMilitar(mil.getEndNum());
                f.setBairroEnderecoMilitar(end.getBairro());
                f.setNomeCidadeEnderecoMilitar(end.getNomeCidade());
                f.setSiglaEstadoCidadeEnderecoMilitar(end.getSiglaEstadoCidade());

                Setor setor = setorDAO.getSetorById(mil.getIdSetor());
                f.setAbreviaturaSetorMilitar(setor.getAbreviatura());
                f.setAbreviaturaDivisaoSecaoMilitar(setor.getAbreviaturaDivisaoSecao());

                militares.add(f);
            }            

            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return militares;
    }
    
    private static final String PLANOCHAMADABYCIADWR = "SELECT mil.idtMilitar, f.fone " +
                                                       "FROM dbcigs_militar mil " +
                                                       "INNER JOIN dbcigs_postograduacao pg ON pg.id = mil.dbcigs_postograduacao_id " +
                                                       "INNER JOIN dbcigs_fone f ON f.dbcigs_militar_idtmilitar = mil.idtmilitar " +
                                                       "INNER JOIN dbcigs_setor s ON s.id = mil.dbcigs_setor_id " +
                                                       "INNER JOIN dbcigs_divisaosecao ds ON ds.id = s.dbcigs_divisaosecao_id " +
                                                       "WHERE mil.cia = ? AND mil.situacao = 1 " +
                                                       "ORDER BY 'mil.dbcigs_postograduacao_id' ASC;";

    public static ArrayList<Fone> getMilitaresByCiaDWR(int cia){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Fone> militares = new ArrayList<>();  
        MilitarDAO milDAO = new MilitarDAO();
        EnderecoDAO endDAO = new EnderecoDAO();
        SetorDAO setorDAO = new SetorDAO();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        try {
            conn = ConnectionFactory.getConnection();

            pstm = conn.prepareStatement(PLANOCHAMADABYCIADWR);
            pstm.setInt(1, cia);

            rs = pstm.executeQuery();
            while (rs.next()) {
                Fone f = new Fone();                    

                f.setFone(rs.getString("f.fone"));

                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("mil.idtMilitar"));
                f.setNomeGuerraMilitar(mil.getNomeGuerra());

                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(mil.getIdPostoGraduacao());
                f.setAbreviaturaPostoGraduacaoMilitar(pg.getAbreviatura());

                Endereco end = endDAO.getEnderecoById(mil.getIdEndereco());
                f.setCepEnderecoMilitar(end.getCep());
                f.setDescricaoEnderecoMilitar(end.getDescricao());
                f.setEndNumMilitar(mil.getEndNum());
                f.setBairroEnderecoMilitar(end.getBairro());
                f.setNomeCidadeEnderecoMilitar(end.getNomeCidade());
                f.setSiglaEstadoCidadeEnderecoMilitar(end.getSiglaEstadoCidade());

                Setor setor = setorDAO.getSetorById(mil.getIdSetor());
                f.setAbreviaturaSetorMilitar(setor.getAbreviatura());
                f.setAbreviaturaDivisaoSecaoMilitar(setor.getAbreviaturaDivisaoSecao());

                militares.add(f);
            }            

            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return militares;
    }
    
    private static final String PLANOCHAMADACIGSDWR = "SELECT mil.idtMilitar, f.fone " +
                                                      "FROM dbcigs_militar mil " +
                                                      "INNER JOIN dbcigs_postograduacao pg ON pg.id = mil.dbcigs_postograduacao_id " +
                                                      "INNER JOIN dbcigs_fone f ON f.dbcigs_militar_idtmilitar = mil.idtmilitar " +
                                                      "INNER JOIN dbcigs_setor s ON s.id = mil.dbcigs_setor_id " +
                                                      "INNER JOIN dbcigs_divisaosecao ds ON ds.id = s.dbcigs_divisaosecao_id " +
                                                      "WHERE mil.situacao = 1 " +
                                                      "ORDER BY 'mil.dbcigs_postograduacao_id' ASC;";

    public static ArrayList<Fone> getMilitaresCIGSDWR(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Fone> militares = new ArrayList<>();  
        MilitarDAO milDAO = new MilitarDAO();
        EnderecoDAO endDAO = new EnderecoDAO();
        SetorDAO setorDAO = new SetorDAO();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        try {
            conn = ConnectionFactory.getConnection();

            pstm = conn.prepareStatement(PLANOCHAMADACIGSDWR);

            rs = pstm.executeQuery();
            while (rs.next()) {
                Fone f = new Fone();                    

                f.setFone(rs.getString("f.fone"));

                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("mil.idtMilitar"));
                f.setNomeGuerraMilitar(mil.getNomeGuerra());

                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(mil.getIdPostoGraduacao());
                f.setAbreviaturaPostoGraduacaoMilitar(pg.getAbreviatura());

                Endereco end = endDAO.getEnderecoById(mil.getIdEndereco());
                f.setCepEnderecoMilitar(end.getCep());
                f.setDescricaoEnderecoMilitar(end.getDescricao());
                f.setEndNumMilitar(mil.getEndNum());
                f.setBairroEnderecoMilitar(end.getBairro());
                f.setNomeCidadeEnderecoMilitar(end.getNomeCidade());
                f.setSiglaEstadoCidadeEnderecoMilitar(end.getSiglaEstadoCidade());

                Setor setor = setorDAO.getSetorById(mil.getIdSetor());
                f.setAbreviaturaSetorMilitar(setor.getAbreviatura());
                f.setAbreviaturaDivisaoSecaoMilitar(setor.getAbreviaturaDivisaoSecao());

                militares.add(f);
            }            

            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return militares;
    }
    
}
