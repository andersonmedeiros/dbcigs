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
import model.bean.GrupoAcesso;

/**
 *
 * @author anderson
 */
public class GrupoAcessoDAO {
    //Tabela
    String tabela = "GrupoAcesso";
    
    //Atributos
    String id = "id";
    String nome = "nome";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + id + "," + nome + ")" +
                                  " VALUES(?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=? " +
                                  "WHERE " + id + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    //Insert SQL
    public void insert(GrupoAcesso grpacesso) {
        if (grpacesso != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setInt(1, grpacesso.getId());
                pstm.setString(2, grpacesso.getNome());
                
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
    public void update(GrupoAcesso grpacesso) {
        if (grpacesso != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE); 
                
                pstm.setInt(1, grpacesso.getId());
                pstm.setString(2, grpacesso.getNome());
                
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
    
    private final String GETGRPACESSOBYID = "SELECT * " +
                                            "FROM " + tabela + " " +
                                            "WHERE id = ?";
       
    public GrupoAcesso getGrupoAcessoById(int id){
        GrupoAcesso grpacesso = new GrupoAcesso();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETGRPACESSOBYID);
            pstm.setInt(1, id);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                grpacesso.setId(rs.getInt("id"));
                grpacesso.setNome(rs.getString("nome"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return grpacesso;
    }  
    
    private final String GETMILITARES = "SELECT * " +
                                        "FROM " + tabela;
       
    public ArrayList<GrupoAcesso> getGruposAcesso(){
        ArrayList<GrupoAcesso> grpsacesso = new ArrayList<>();  
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETMILITARES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                GrupoAcesso grpacesso = new GrupoAcesso();
                
                grpacesso.setId(rs.getInt("id"));
                grpacesso.setNome(rs.getString("nome"));           
                
                grpsacesso.add(grpacesso);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return grpsacesso;
    }
}
