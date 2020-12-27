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
import model.bean.Uniforme;

/**
 *
 * @author anderson
 */
public class UniformeDAO {
    //Tabela
    String tabela = "dbcigs_uniforme";
    
    //Atributos
    String id = "id";
    String tamcoturno = "tamcoturno";
    String tamgandola = "tamgandola";
    String tamcalca = "tamcalca";
    String tamcamcamuflada = "tamcamcamuflada";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + id + "," + tamcoturno + "," + tamgandola + "," + tamcalca + "," + tamcamcamuflada + ")" +
                                  " VALUES(?,?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + tamcoturno + "=?, " + tamgandola + "=?, " + tamcalca + "=?, " + tamcamcamuflada + "=? " +
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
    public void insert(Uniforme un) {
        if (un != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setInt(1, un.getId());
                pstm.setInt(2, un.getTamCoturno());
                pstm.setString(3, un.getTamGandola());
                pstm.setString(4, un.getTamCalca());
                pstm.setString(5, un.getTamCamisaCamuflada());
                                                              
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
    public void update(Uniforme un) {
        if (un != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);                
                
                pstm.setInt(1, un.getTamCoturno());
                pstm.setString(2, un.getTamGandola());
                pstm.setString(3, un.getTamCalca());
                pstm.setString(4, un.getTamCamisaCamuflada());
                pstm.setInt(5, un.getId());
            
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
    
    private final String GETUNIFORMEBYID = "SELECT * " +
                                           "FROM " + tabela + " " +
                                           "WHERE id = ?;";
       
    public Uniforme getUniformeById(int idUniforme){
        Uniforme un = new Uniforme();        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETUNIFORMEBYID);
            pstm.setInt(1, idUniforme);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                un.setId(rs.getInt("id"));
                un.setTamCoturno(rs.getInt("tamcoturno"));
                un.setTamGandola(rs.getString("tamgandola"));
                un.setTamCalca(rs.getString("tamcalca"));
                un.setTamCamisaCamuflada(rs.getString("tamcamcamuflada"));
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return un;
    }
    
    private final String GETCHIMTOEXISTENTE = "SELECT * " + 
                                           " FROM " + tabela + 
                                           " WHERE " + tamcoturno + "=? AND " + tamgandola + "=? AND " + tamcalca + "=? AND " + tamcamcamuflada +"=?;";

    public Uniforme getUniformeExistente(int tamcoturno, String tamgandola, String tamcalca, String tamcamcmf){
        Uniforme un = new Uniforme();   
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCHIMTOEXISTENTE);
            pstm.setInt(1, tamcoturno);
            pstm.setString(2, tamgandola);
            pstm.setString(3, tamcalca);
            pstm.setString(4, tamcamcmf);
           
            rs = pstm.executeQuery();
            while (rs.next()) {                
                un.setId(rs.getInt("id"));
                un.setTamCoturno(rs.getInt("tamcoturno"));
                un.setTamGandola(rs.getString("tamgandola"));
                un.setTamCalca(rs.getString("tamcalca"));
                un.setTamCamisaCamuflada(rs.getString("tamcamcamuflada"));
                
                return un;
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return null;
    }
    
    private final String GETUNIFORMES = "SELECT * " +
                                        "FROM " + tabela;
       
    public ArrayList<Uniforme> getUniformes(){
        ArrayList<Uniforme> uniformes = new ArrayList<>();        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETUNIFORMES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Uniforme un = new Uniforme();
                
                un.setId(rs.getInt("id"));
                un.setTamCoturno(rs.getInt("tamcoturno"));
                un.setTamGandola(rs.getString("tamgandola"));
                un.setTamCalca(rs.getString("tamcalca"));
                un.setTamCamisaCamuflada(rs.getString("tamcamcamuflada"));
                
                uniformes.add(un);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return uniformes;
    }
}
