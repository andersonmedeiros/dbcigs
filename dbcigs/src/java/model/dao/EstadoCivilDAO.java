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
import model.bean.EstadoCivil;

/**
 *
 * @author anderson
 */
public class EstadoCivilDAO {
    //Tabela
    String tabela = "EstadoCivil";
    
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
    public void insert(EstadoCivil ec) {
        if (ec != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setInt(1, ec.getId());
                pstm.setString(2, ec.getNome());
                                                              
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
    public void update(EstadoCivil ec) {
        if (ec != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);
                
                pstm.setString(1, ec.getNome());
                pstm.setInt(2, ec.getId());                
            
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
    
    private final String GETESTADOCIVILBYID = "SELECT * " +
                                             "FROM EstadoCivil " + 
                                             "WHERE id = ?;";
       
    public EstadoCivil getEstadoCivilById(int idEstadoCivil){
        EstadoCivil ec = new EstadoCivil();        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESTADOCIVILBYID);
            pstm.setInt(1, idEstadoCivil);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                ec.setId(rs.getInt("id"));
                ec.setNome(rs.getString("nome"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return ec;
    }
    
    private final String GETESTADOSCIVIS = "SELECT * " +
                                           "FROM " + tabela;
       
    public ArrayList<EstadoCivil> getEstadosCivis(){
        ArrayList<EstadoCivil> ecs = new ArrayList<>();        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESTADOSCIVIS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                EstadoCivil ec = new EstadoCivil();
                
                ec.setId(rs.getInt("id"));
                ec.setNome(rs.getString("nome"));
                
                ecs.add(ec);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return ecs;
    }
    
    private final static String GETESTADOSCIVISDWR = "SELECT * " +
                                                     "FROM EstadoCivil;";
       
    public static ArrayList<EstadoCivil> getEstadosCivisDWR(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<EstadoCivil> ecs = new ArrayList<>();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESTADOSCIVISDWR);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                EstadoCivil ec = new EstadoCivil();
                
                ec.setId(rs.getInt("id"));
                ec.setNome(rs.getString("nome"));
                
                ecs.add(ec);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return ecs;
    }
}
