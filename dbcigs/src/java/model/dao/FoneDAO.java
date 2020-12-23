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
    String tabela = "Fone";
    
    //Atributos
    String id = "id";
    String numero = "numero";
    String idtAluno = "idtAluno";
    String idOM = "idOM";
    String cpfReferencia = "cpfReferencia";
    String idConjuge = "idConjuge";
    
    //Insert SQL
    private final String INSERTFONEALUNO = "INSERT INTO " + tabela + "(" + id + "," + numero + "," + idtAluno + ")" +
                                           " VALUES(?,?,?);";
    private final String INSERTFONEOM = "INSERT INTO " + tabela + "(" + id + "," + numero + "," + idOM + ")" +
                                        " VALUES(?,?,?);";
    private final String INSERTFONEREFERENCIA = "INSERT INTO " + tabela + "(" + id + "," + numero + "," + cpfReferencia + ")" +
                                                " VALUES(?,?,?);";
    private final String INSERTFONECONJUGE = "INSERT INTO " + tabela + "(" + id + "," + numero + "," + idConjuge + ")" +
                                             " VALUES(?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + numero + "=? " +
                                  "WHERE " + id + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    private final String GETUltimoID = "SELECT MAX(" + id + ") as ultimo_id FROM " + tabela + ";";
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    //Próximo ID a ser inserido
    public int proxID(){
        int ultimo_id = 0;
        try{
            conn = ConnectionFactory.getConnection();
            
            pstm = conn.prepareStatement(GETUltimoID);
            rs = pstm.executeQuery();
            while (rs.next()) {
                
                ultimo_id = rs.getInt("ultimo_id");
            }
           
            ConnectionFactory.fechaConexao(conn, pstm);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return (ultimo_id+1);
    }
    
    //Insert SQL
    public void insertFoneAluno(Fone fone) {
        if (fone != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERTFONEALUNO);
                
                pstm.setInt(1, fone.getId());
                pstm.setString(2, fone.getNumero());
                pstm.setString(3, fone.getIdentidadeAluno());
                                                              
                pstm.execute();
                
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {
            throw new RuntimeException();
        }
    }
    public void insertFoneOM(Fone fone) {
        if (fone != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERTFONEOM);
                
                pstm.setInt(1, fone.getId());
                pstm.setString(2, fone.getNumero());
                pstm.setInt(3, fone.getIdOM());
                                                              
                pstm.execute();
                
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {
            throw new RuntimeException();
        }
    }
    public void insertFoneReferencia(Fone fone) {
        if (fone != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERTFONEREFERENCIA);
                
                pstm.setInt(1, fone.getId());
                pstm.setString(2, fone.getNumero());
                pstm.setString(3, fone.getCpfReferencia());
                                                              
                pstm.execute();
                
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {
            throw new RuntimeException();
        }
    }
    public void insertFoneConjuge(Fone fone) {
        if (fone != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERTFONECONJUGE);
                
                pstm.setInt(1, fone.getId());
                pstm.setString(2, fone.getNumero());
                pstm.setInt(3, fone.getIdConjuge());
                                                              
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
                
                pstm.setString(1, fone.getNumero());
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
                fone.setNumero(rs.getString("numero"));
                fone.setIdentidadeAluno(rs.getString("idtAluno"));
                fone.setIdOM(rs.getInt("idOM"));
                fone.setCpfReferencia(rs.getString("cpfReferencia"));
                fone.setIdConjuge(rs.getInt("idConjuge"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return fone;
    }
    
    private final String GETFONEBYCPFREF = "SELECT * " +
                                        "FROM " + tabela + " " +
                                        "WHERE cpfReferencia = ?;";
    
    public Fone getFoneByCpfReferencia(String cpfReferencia){
        Fone fone = new Fone();        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETFONEBYCPFREF);
            pstm.setString(1, cpfReferencia);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                fone.setId(rs.getInt("id"));
                fone.setNumero(rs.getString("numero"));
                fone.setIdentidadeAluno(rs.getString("idtAluno"));
                fone.setIdOM(rs.getInt("idOM"));
                fone.setCpfReferencia(rs.getString("cpfReferencia"));
                fone.setIdConjuge(rs.getInt("idConjuge"));
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
                fone.setNumero(rs.getString("numero"));
                fone.setIdentidadeAluno(rs.getString("idtAluno"));
                fone.setIdOM(rs.getInt("idOM"));
                fone.setCpfReferencia(rs.getString("cpfReferencia"));
                fone.setIdConjuge(rs.getInt("idConjuge"));
                
                fones.add(fone);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return fones;
    }
}
