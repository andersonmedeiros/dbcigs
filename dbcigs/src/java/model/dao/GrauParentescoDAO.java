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
import model.bean.GrauParentesco;

/**
 *
 * @author anderson
 */
public class GrauParentescoDAO {
    //Tabela
    String tabela = "GrauParentesco";
    
    //Atributos
    String id = "id";
    String nome = "nome";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + id + "," + nome + ")"
                                    + " VALUES(?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=? " +
                                  "WHERE " + id + "=?;";
    
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    private final String GETUltimoID = "SELECT MAX(" + id + ") as ultimo_id FROM " + tabela + ";";
    private final String GETGRAUPARENTESCOBYID = "SELECT * FROM " + tabela + " WHERE " + id + "=?;";
    
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
    public void insert(GrauParentesco grauparentesco) {
        if (grauparentesco != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setInt(1, grauparentesco.getId());
                pstm.setString(2, grauparentesco.getNome());
                                                              
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
    public void update(GrauParentesco grauparentesco) {
        if (grauparentesco != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);
                
                pstm.setString(1, grauparentesco.getNome());
                pstm.setInt(2, grauparentesco.getId());
            
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
        if (id != 0) {
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
    
    //Categoria by ID
    public GrauParentesco getGrauParentescoById(int idGrauParentesco ){
        GrauParentesco grauparentesco = new GrauParentesco();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETGRAUPARENTESCOBYID);
            pstm.setInt(1, idGrauParentesco);
            
            rs = pstm.executeQuery();
            while (rs.next()) {
                grauparentesco.setId(rs.getInt(id));
                grauparentesco.setNome(rs.getString(nome));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return grauparentesco;
    }
    
    private final String GETGRAUSPARENTESCO = "SELECT * " +
                                              "FROM " + tabela;
       
    public ArrayList<GrauParentesco> getGrausParentesco(){
        ArrayList<GrauParentesco> graus = new ArrayList<>();  
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETGRAUSPARENTESCO);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                GrauParentesco grauparentesco = new GrauParentesco();
                
                grauparentesco.setId(rs.getInt(id));
                grauparentesco.setNome(rs.getString(nome));
                
                graus.add(grauparentesco);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return graus;
    }
        
    private final static String GETGRAUSPARENTESCODWR = "select * " +
                                                        "from GrauParentesco;";
    
    public static ArrayList<GrauParentesco> getGrausParentescoDWR(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<GrauParentesco> grauspatencesco = new ArrayList<>();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETGRAUSPARENTESCODWR);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               GrauParentesco grauparentesco = new GrauParentesco();
               
               grauparentesco.setId(rs.getInt("id"));
               grauparentesco.setNome(rs.getString("nome"));
                
               grauspatencesco.add(grauparentesco);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return grauspatencesco;
    }
}
