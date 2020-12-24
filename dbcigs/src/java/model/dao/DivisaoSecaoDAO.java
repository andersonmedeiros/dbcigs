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

/**
 *
 * @author anderson
 */
public class DivisaoSecaoDAO {
    //Tabela
    String tabela = "dbcigs_divisaosecao";
    
    //Atributos
    String id = "id";
    String nome = "nome";
    String abreviatura = "abreviatura";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + nome + "," + abreviatura + ")" +
                                  " VALUES(?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=?, " + abreviatura + "=? " +
                                  "WHERE " + id + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    private final String GETUltimoID = "SELECT MAX(" + id + ") as ultimo_id FROM " + tabela + ";";
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
        
    //Insert SQL
    public void insert(DivisaoSecao divsec) {
        if (divsec != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setString(1, divsec.getNome());
                pstm.setString(2, divsec.getAbreviatura());
                
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
    public void update(DivisaoSecao divsec) {
        if (divsec != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);
                                
                pstm.setString(1, divsec.getNome());
                pstm.setString(2, divsec.getAbreviatura());
                pstm.setInt(3, divsec.getId());
            
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
    
    private final String GETDIVISAOSECAOBYID = "SELECT * " +
                                            "FROM " + tabela + " " +
                                            "WHERE id = ?;";
       
    public DivisaoSecao getDivisaoSecaoById(int idDivisaoSecao){
        DivisaoSecao divsec = new DivisaoSecao();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETDIVISAOSECAOBYID);
            pstm.setInt(1, idDivisaoSecao);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                divsec.setId(rs.getInt("id"));
                divsec.setNome(rs.getString("nome"));
                divsec.setAbreviatura(rs.getString("abreviatura"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return divsec;
    }
    
    private final String GETDIVISOESSECOES = "SELECT * " +
                                             "FROM " + tabela + " " +
                                             "ORDER BY nome";
       
    public ArrayList<DivisaoSecao> getDivisoesSecoes(){
        ArrayList<DivisaoSecao> divisoessecoes = new ArrayList<>();        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETDIVISOESSECOES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                DivisaoSecao divsec = new DivisaoSecao();
                
                divsec.setId(rs.getInt("id"));
                divsec.setNome(rs.getString("nome"));
                divsec.setAbreviatura(rs.getString("abreviatura"));
                
                divisoessecoes.add(divsec);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return divisoessecoes;
    }
    
    private final static String GETDIVISAOSECAOBYIDDWR = "SELECT * " +
                                                         "FROM dbcigs_divisaosecao " + 
                                                         "WHERE id = ?;";
       
    public static DivisaoSecao getDivisaoSecaoByIdDWR(int idDivisaoSecao){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        DivisaoSecao divsec = new DivisaoSecao();    
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETDIVISAOSECAOBYIDDWR);
            pstm.setInt(1, idDivisaoSecao);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                divsec.setId(rs.getInt("id"));
                divsec.setNome(rs.getString("nome"));
                divsec.setAbreviatura(rs.getString("abreviatura"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return divsec;
    }
    
    private final static String GETDIVISOESSECOESDWR = "SELECT * " +
                                                       "FROM dbcigs_divisaosecao " +
                                                       "ORDER BY nome";
       
    public static ArrayList<DivisaoSecao> getDivisoesSecoesDWR(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<DivisaoSecao> divisoessecoes = new ArrayList<>();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETDIVISOESSECOESDWR);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                DivisaoSecao divsec = new DivisaoSecao();
                
                divsec.setId(rs.getInt("id"));
                divsec.setNome(rs.getString("nome")); 
                divsec.setAbreviatura(rs.getString("abreviatura"));
                
                divisoessecoes.add(divsec);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return divisoessecoes;
    }
}
