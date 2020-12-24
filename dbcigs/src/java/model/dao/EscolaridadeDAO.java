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
import model.bean.Escolaridade;

/**
 *
 * @author anderson
 */
public class EscolaridadeDAO {
    //Tabela
    String tabela = "dbcigs_escolaridade";
    
    //Atributos
    String id = "id";
    String nome = "nome";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + nome + ")" +
                                  " VALUES(?);";
    
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
    public void insert(Escolaridade esc) {
        if (esc != null) {
            try {
                conn = ConnectionFactory.getConnection();                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setString(1, esc.getNome());
                                                              
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
    public void update(Escolaridade esc) {
        if (esc != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);                
                
                pstm.setString(1, esc.getNome());
                pstm.setInt(2, esc.getId());
            
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
    
    
    private final String GETESCOLARIDADEBYID = "SELECT * " +
                                               "FROM " + tabela + " " + 
                                               "WHERE id = ?";
    
    public Escolaridade getEscolaridadeById(int idEscolaridade){
        Escolaridade esc = new Escolaridade();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESCOLARIDADEBYID);
            pstm.setInt(1, idEscolaridade);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               esc.setId(rs.getInt("id"));
               esc.setNome(rs.getString("nome"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return esc;
    }
    
    private final String GETESCOLARIDADES = "SELECT * " +
                                            "FROM " + tabela;
       
    public ArrayList<Escolaridade> getEscolaridades(){
        ArrayList<Escolaridade> escs = new ArrayList<>();   
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESCOLARIDADES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Escolaridade esc = new Escolaridade();

                esc.setId(rs.getInt("id"));
                esc.setNome(rs.getString("nome"));

                escs.add(esc);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return escs;
    }
    
    private final static String GETESCOLARIDADESDWR = "SELECT * " +
                                                      "FROM dbcigs_escolaridade";
    
    public static ArrayList<Escolaridade> getEscolaridadesDWR(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Escolaridade> escs = new ArrayList<>();
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESCOLARIDADESDWR);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Escolaridade esc = new Escolaridade();

                esc.setId(rs.getInt("id"));
                esc.setNome(rs.getString("nome"));

                escs.add(esc);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return escs;
    }
}
