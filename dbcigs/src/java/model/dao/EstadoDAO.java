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
import model.bean.Estado;

/**
 *
 * @author anderson
 */
public class EstadoDAO {
    //Tabela
    String tabela = "dbcigs_estado";
    
    //Atributos
    String id = "id";
    String nome = "nome";
    String sigla = "sigla";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + nome + "," + sigla + ")" +
                                  " VALUES(?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=?, " + sigla + "=? " + 
                                  "WHERE " + id + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    
    //Insert SQL
    public void insert(Estado estado) {
        if (estado != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setString(1, estado.getNome());
                pstm.setString(2, estado.getSigla());
                                                              
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
    public void update(Estado estado) {
        if (estado != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);                
                
                pstm.setString(1, estado.getNome());
                pstm.setString(2, estado.getSigla());
                pstm.setInt(3, estado.getId());
            
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
    
    
    private final String GETESTADOBYID = "SELECT * " +
                                         "FROM " + tabela + " " + 
                                         "WHERE id = ?";
    
    public Estado getEstadoById(int idEstado){
        Estado estado = new Estado();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESTADOBYID);
            pstm.setInt(1, idEstado);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
               estado.setId(rs.getInt("id"));
               estado.setNome(rs.getString("nome"));
               estado.setSigla(rs.getString("sigla"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return estado;
    }
    
    private final String GETESTADOS = "SELECT * " +
                                      "FROM " + tabela;
       
    public ArrayList<Estado> getEstados(){
        ArrayList<Estado> estados = new ArrayList<>();   
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESTADOS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Estado estado = new Estado();

                estado.setId(rs.getInt("id"));
                estado.setNome(rs.getString("nome"));
                estado.setSigla(rs.getString("sigla"));

                estados.add(estado);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return estados;
    }
    
    private final static String GETESTADOSDWR = "SELECT * " +
                                                "FROM dbcigs_estado";
    
    public static ArrayList<Estado> getEstadosDWR(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Estado> estados = new ArrayList<>();
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETESTADOSDWR);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Estado estado = new Estado();

                estado.setId(rs.getInt("id"));
                estado.setNome(rs.getString("nome"));
                estado.setSigla(rs.getString("sigla"));

                estados.add(estado);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return estados;
    }
}
