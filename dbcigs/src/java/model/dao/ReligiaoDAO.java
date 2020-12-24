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
import model.bean.Religiao;

/**
 *
 * @author anderson
 */
public class ReligiaoDAO {
    //Tabela
    String tabela = "dbcigs_religiao";
    //Atributos
    String id = "id";
    String nome = "nome";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + nome + ")"
                                    + " VALUES(?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=? " +
                                  "WHERE " + id + "=?;";
    
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    private final String GETUltimoID = "SELECT MAX(" + id + ") as ultimo_id FROM " + tabela + ";";
    private final String GETCOMPORTAMENTOBYID = "SELECT * FROM " + tabela + " WHERE " + id + "=?;";
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    
    //Insert SQL
    public void insert(Religiao religiao) {
        if (religiao != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setString(1, religiao.getNome());
                                                              
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
    public void update(Religiao religiao) {
        if (religiao != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);
                
                pstm.setString(1, religiao.getNome());
                pstm.setInt(2, religiao.getId());
            
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
    
    //Religiao by ID
    public Religiao getReligiaoById(int idReligiao){
        Religiao religiao = new Religiao();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCOMPORTAMENTOBYID);
            pstm.setInt(1, idReligiao);
            
            rs = pstm.executeQuery();
            while (rs.next()) {
                religiao.setId(rs.getInt(id));
                religiao.setNome(rs.getString(nome));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return religiao;
    }
        
    private final static String GETRELIGIOESDWR = "SELECT * " +
                                                  "FROM dbcigs_religiao;";
    
    public static ArrayList<Religiao> getReligioesDWR(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Religiao> religioes = new ArrayList<>();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETRELIGIOESDWR);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               Religiao religiao = new Religiao();
               
               religiao.setId(rs.getInt("id"));
               religiao.setNome(rs.getString("nome"));
                
               religioes.add(religiao);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return religioes;
    }
}
