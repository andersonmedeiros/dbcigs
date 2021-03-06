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
import model.bean.Qas;

/**
 *
 * @author anderson
 */
public class QasDAO {
    //Tabela
    String tabela = "dbcigs_qas";
    
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
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    
    //Insert SQL
    public void insert(Qas qas) {
        if (qas != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setString(1, qas.getNome());
                pstm.setString(2, qas.getAbreviatura());
                                                              
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
    public void update(Qas qas) {
        if (qas != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);                
                
                pstm.setString(1, qas.getNome());
                pstm.setString(2, qas.getAbreviatura());
                pstm.setInt(3, qas.getId());
            
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
    
    private final String GETQASBYID = "SELECT * " +
                                    "FROM " + tabela + " " +
                                    "WHERE id = ?;";
       
    public Qas getQasById(int idQas){
        Qas qas = new Qas();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETQASBYID);
            pstm.setInt(1, idQas);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                qas.setId(rs.getInt("id"));
                qas.setNome(rs.getString("nome"));
                qas.setAbreviatura(rs.getString("abreviatura"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return qas;
    }
    
    private final String GETQAS = "SELECT * " +
                                   "FROM " + tabela;
    
    public ArrayList<Qas> getQas(){
        ArrayList<Qas> qasqms = new ArrayList<>();  
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETQAS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Qas qas = new Qas();
                
                qas.setId(rs.getInt("id"));
                qas.setNome(rs.getString("nome"));
                qas.setAbreviatura(rs.getString("abreviatura"));
                
                qasqms.add(qas);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return qasqms;
    }
    
    private final static String GETQASDWR = "SELECT * " +
                                            "FROM dbcigs_qas";
       
    public static ArrayList<Qas> getQasDWR(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Qas> qasqms = new ArrayList<>();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETQASDWR);
           
            rs = pstm.executeQuery();
            while (rs.next()) {                
                Qas qas = new Qas();
                
                qas.setId(rs.getInt("id"));
                qas.setNome(rs.getString("nome"));
                qas.setAbreviatura(rs.getString("abreviatura"));
                
                qasqms.add(qas);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return qasqms;
    }
    
    private final static String GETQASBYIDDWR = "SELECT * " +
                                                      "FROM dbcigs_qas " +
                                                      "WHERE id = ?";
       
    public static Qas getQasByIdDWR(int idQas){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;          
        Qas qas = new Qas();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETQASBYIDDWR);
            pstm.setInt(1, idQas);
           
            rs = pstm.executeQuery();
            while (rs.next()) {                      
                qas.setId(rs.getInt("id"));
                qas.setNome(rs.getString("nome"));
                qas.setAbreviatura(rs.getString("abreviatura"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return qas;
    }
}
