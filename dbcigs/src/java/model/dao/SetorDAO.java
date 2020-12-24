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
import model.bean.DivisaoSecao;
import model.bean.Setor;

/**
 *
 * @author anderson
 */
public class SetorDAO {
    //Tabela
    String tabela = "dbcigs_setor";
    
    //Atributos
    String id = "id";
    String nome = "nome";
    String abreviatura = "abreviatura";
    String idDivisaoSecao = "dbcigs_divisaosecao_id";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + nome + "," + abreviatura + "," + idDivisaoSecao + ")" +
                                  " VALUES(?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=?, " + abreviatura + "=?, " + idDivisaoSecao + "=? " +
                                  "WHERE " + id + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    private final String GETUltimoID = "SELECT MAX(" + id + ") as ultimo_id FROM " + tabela + ";";
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
        
    //Insert SQL
    public void insert(Setor setor) {
        if (setor != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setString(1, setor.getNome());
                pstm.setString(2, setor.getAbreviatura());
                pstm.setInt(3, setor.getIdDivisaoSecao());
                
                pstm.execute();
                
                ConnectionFactory.fechaConexao(conn, pstm);

             } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {
            throw new RuntimeException();
        }
    }
    
    //Update SQL
    public void update(Setor setor) {
        if (setor != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);
                                
                pstm.setString(1, setor.getNome());
                pstm.setString(2, setor.getAbreviatura());
                pstm.setInt(3, setor.getIdDivisaoSecao());
                pstm.setInt(4, setor.getId());
            
                pstm.execute();
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {            
            throw new RuntimeException();
        }
    }
    
    //Delete SQL
    public void delete(int id) {
        if (id != 0){
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(DELETE);
                pstm.setInt(1, id);
            
                pstm.execute();
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {            
            throw new RuntimeException();
        }
    }
    
    private final String GETSETORBYID = "SELECT * " +
                                        "FROM " + tabela + " " +
                                        "WHERE id = ?;";
       
    public Setor getSetorById(int idSetor){
        Setor setor = new Setor();
        DivisaoSecaoDAO divsecDAO = new DivisaoSecaoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETSETORBYID);
            pstm.setInt(1, idSetor);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                setor.setId(rs.getInt("id"));
                setor.setNome(rs.getString("nome"));
                setor.setAbreviatura(rs.getString("abreviatura"));
                
                DivisaoSecao divsec = divsecDAO.getDivisaoSecaoById(rs.getInt("dbcigs_divisaosecao_id"));
                setor.setIdDivisaoSecao(divsec.getId());
                setor.setNomeDivisaoSecao(divsec.getNome());
                setor.setAbreviaturaDivisaoSecao(divsec.getAbreviatura());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return setor;
    }
    
    private final String GETSETORES = "SELECT * " +
                                      "FROM " + tabela;
       
    public ArrayList<Setor> getSetores(){
        ArrayList<Setor> setores = new ArrayList<>();
        DivisaoSecaoDAO divsecDAO = new DivisaoSecaoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETSETORES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Setor setor = new Setor();
                
                setor.setId(rs.getInt("id"));
                setor.setNome(rs.getString("nome"));
                setor.setAbreviatura(rs.getString("abreviatura"));
                
                DivisaoSecao divsec = divsecDAO.getDivisaoSecaoById(rs.getInt("dbcigs_divisaosecao_id"));
                setor.setIdDivisaoSecao(divsec.getId());
                setor.setNomeDivisaoSecao(divsec.getNome());
                setor.setAbreviaturaDivisaoSecao(divsec.getAbreviatura());
                
                setores.add(setor);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return setores;
    }
    
    private final static String GETSETORBYIDDWR = "SELECT * " +
                                                      "FROM dbcigs_setor " + 
                                                      "WHERE id = ?;";
       
    public static Setor getSetorByIdDWR(int idSetor){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        Setor setor = new Setor();    
        DivisaoSecaoDAO divsecDAO = new DivisaoSecaoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETSETORBYIDDWR);
            pstm.setInt(1, idSetor);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                setor.setId(rs.getInt("id"));
                setor.setNome(rs.getString("nome"));
                setor.setAbreviatura(rs.getString("abreviatura"));
                
                DivisaoSecao divsec = divsecDAO.getDivisaoSecaoById(rs.getInt("dbcigs_divisaosecao_id"));
                setor.setIdDivisaoSecao(divsec.getId());
                setor.setNomeDivisaoSecao(divsec.getNome());
                setor.setAbreviaturaDivisaoSecao(divsec.getAbreviatura());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return setor;
    }
    
    private final static String GETSETORESDWR = "SELECT * " +
                                                "FROM dbcigs_setor";
       
    public static ArrayList<Setor> getSetoresDWR(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Setor> setores = new ArrayList<>();
        DivisaoSecaoDAO divsecDAO = new DivisaoSecaoDAO();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETSETORESDWR);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Setor setor = new Setor();
                
                setor.setId(rs.getInt("id"));
                setor.setNome(rs.getString("nome")); 
                setor.setAbreviatura(rs.getString("abreviatura"));
                
                DivisaoSecao divsec = divsecDAO.getDivisaoSecaoById(rs.getInt("dbcigs_divisaosecao_id"));
                setor.setIdDivisaoSecao(divsec.getId());
                setor.setNomeDivisaoSecao(divsec.getNome());
                setor.setAbreviaturaDivisaoSecao(divsec.getAbreviatura());
                
                setores.add(setor);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return setores;
    }
    
    private final static String GETSETORESBYDIVSECDWR = "SELECT * " +
                                                        "FROM dbcigs_setor " +
                                                        "WHERE dbcigs_divisaosecao_id = ? ORDER BY nome;";
       
    public static ArrayList<Setor> getSetoresByDivisaoSecaoDWR(int idDivisaoSecao){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Setor> setores = new ArrayList<>();
        DivisaoSecaoDAO divsecDAO = new DivisaoSecaoDAO();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETSETORESBYDIVSECDWR);
            pstm.setInt(1, idDivisaoSecao);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Setor setor = new Setor();
                
                setor.setId(rs.getInt("id"));
                setor.setNome(rs.getString("nome")); 
                setor.setAbreviatura(rs.getString("abreviatura"));
                
                DivisaoSecao divsec = divsecDAO.getDivisaoSecaoById(rs.getInt("dbcigs_divisaosecao_id"));
                setor.setIdDivisaoSecao(divsec.getId());
                setor.setNomeDivisaoSecao(divsec.getNome());
                setor.setAbreviaturaDivisaoSecao(divsec.getAbreviatura());
                
                setores.add(setor);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return setores;
    }
}
