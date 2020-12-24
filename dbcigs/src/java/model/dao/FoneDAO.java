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
import model.bean.Fone;

/**
 *
 * @author anderson
 */
public class FoneDAO {
    //Tabela
    String tabela = "dbcigs_fone";
    
    //Atributos
    String id = "id";
    String fone = "fone";
    String idtMilitar = "dbcigs_militar_idtmilitar";
    
    //Insert SQL
    private final String INSERTFONEMILITAR = "INSERT INTO " + tabela + "(" + id + "," + fone + "," + idtMilitar + ")" +
                                           " VALUES(?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + fone + "=? " +
                                  "WHERE " + id + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    private final String GETUltimoID = "SELECT MAX(" + id + ") as ultimo_id FROM " + tabela + ";";
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    
    
    //Insert SQL
    public void insertFoneMilitar(Fone fone) {
        if (fone != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERTFONEMILITAR);
                
                pstm.setInt(1, fone.getId());
                pstm.setString(2, fone.getFone());
                pstm.setString(3, fone.getIdtMilitar());
                                                              
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
    public void update(Fone fone) {
        if (fone != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);
                
                pstm.setString(1, fone.getFone());
                pstm.setInt(2, fone.getId());
            
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
    
    private final String GETFONEBYID = "SELECT * " +
                                        "FROM " + tabela + " " +
                                        "WHERE id = ?;";
       
    public Fone getFoneById(int idFONE){
        Fone fone = new Fone();        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETFONEBYID);
            pstm.setInt(1, idFONE);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                fone.setId(rs.getInt("id"));
                fone.setFone(rs.getString("fone"));
                fone.setIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return fone;
    }
    
    private final String GETFONES = "SELECT * " +
                                   "FROM " + tabela;
       
    public ArrayList<Fone> getFones(){
        ArrayList<Fone> fones = new ArrayList<>();        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETFONES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Fone fone = new Fone();
                
                fone.setId(rs.getInt("id"));
                fone.setFone(rs.getString("fone"));
                fone.setIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                
                fones.add(fone);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return fones;
    }
    
    private final String GETFONESBYIDTMILITAR = "SELECT * " +
                                                "FROM " + tabela;
    
    public ArrayList<Fone> getFonesByIdtMilitar(String idtmilitar){
        ArrayList<Fone> fones = new ArrayList<>();        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETFONESBYIDTMILITAR);
            pstm.setString(1, idtmilitar);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Fone fone = new Fone();
                
                fone.setId(rs.getInt("id"));
                fone.setFone(rs.getString("fone"));
                fone.setIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                
                fones.add(fone);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return fones;
    }
}
