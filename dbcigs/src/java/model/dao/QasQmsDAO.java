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
import model.bean.Forca;
import model.bean.Qas;

/**
 *
 * @author anderson
 */
public class QasQmsDAO {
    //Tabela
    String tabela = "QasQms";
    
    //Atributos
    String id = "id";
    String nome = "nome";
    String abreviatura = "abreviatura";
    String idForca = "idForca";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + id + "," + nome + "," + abreviatura + "," + idForca + ")" +
                                  " VALUES(?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=?, " + abreviatura + "=?, " + idForca + "=? " +
                                  "WHERE " + id + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    
    //Insert SQL
    public void insert(Qas qq) {
        if (qq != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setInt(1, qq.getId());
                pstm.setString(2, qq.getNome());
                pstm.setString(3, qq.getAbreviatura());
                pstm.setInt(4, qq.getIdForca());
                                                              
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
    public void update(Qas qq) {
        if (qq != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);                
                
                pstm.setString(1, qq.getNome());
                pstm.setString(2, qq.getAbreviatura());
                pstm.setInt(3, qq.getIdForca());
                pstm.setInt(4, qq.getId());
            
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
    
    private final String GETQASQMSBYID = "SELECT * " +
                                    "FROM QasQms " + 
                                    "WHERE id = ?;";
       
    public Qas getQasQmsById(int idQasQms){
        Qas qq = new Qas();
        ForcaDAO forcaDAO = new ForcaDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETQASQMSBYID);
            pstm.setInt(1, idQasQms);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                qq.setId(rs.getInt("id"));
                qq.setNome(rs.getString("nome"));
                qq.setAbreviatura(rs.getString("abreviatura"));
                
                Forca forca = forcaDAO.getForcaById(rs.getInt("idForca"));
                qq.setIdForca(forca.getId());
                qq.setNomeForca(forca.getNome());
                qq.setSiglaForca(forca.getSigla());
                qq.setIdTipoForca(forca.getIdTipoForca());
                qq.setNomeTipoForca(forca.getNomeTipoForca());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return qq;
    }
    
    private final String GETQASQMS = "SELECT * " +
                                   "FROM " + tabela;
    
    public ArrayList<Qas> getQasQms(){
        ArrayList<Qas> qasqms = new ArrayList<>();  
        ForcaDAO forcaDAO = new ForcaDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETQASQMS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Qas qq = new Qas();
                
                qq.setId(rs.getInt("id"));
                qq.setNome(rs.getString("nome"));
                qq.setAbreviatura(rs.getString("abreviatura"));
                
                Forca forca = forcaDAO.getForcaById(rs.getInt("idForca"));
                qq.setIdForca(forca.getId());
                qq.setNomeForca(forca.getNome());
                qq.setSiglaForca(forca.getSigla());
                qq.setIdTipoForca(forca.getIdTipoForca());
                qq.setNomeTipoForca(forca.getNomeTipoForca());
                
                qasqms.add(qq);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return qasqms;
    }
    
    private final static String GETQASQMSDWR = "SELECT * " +
                                               "FROM QasQms";
       
    public static ArrayList<Qas> getQasQmsDWR(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Qas> qasqms = new ArrayList<>();
        ForcaDAO forcaDAO = new ForcaDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETQASQMSDWR);
           
            rs = pstm.executeQuery();
            while (rs.next()) {                
                Qas qq = new Qas();
                
                qq.setId(rs.getInt("id"));
                qq.setNome(rs.getString("nome"));
                qq.setAbreviatura(rs.getString("abreviatura"));
                
                Forca forca = forcaDAO.getForcaById(rs.getInt("idForca"));
                qq.setIdForca(forca.getId());
                qq.setNomeForca(forca.getNome());
                qq.setSiglaForca(forca.getSigla());
                qq.setIdTipoForca(forca.getIdTipoForca());
                qq.setNomeTipoForca(forca.getNomeTipoForca());
                
                qasqms.add(qq);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return qasqms;
    }
    
    private final static String GETQASQMSBYFORCADWR = "SELECT * " +
                                                      "FROM QasQms " +
                                                      "WHERE idForca = ?";
       
    public static ArrayList<Qas> getQasQmsByForcaDWR(int idForca){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        ArrayList<Qas> qasqms = new ArrayList<>();
        ForcaDAO forcaDAO = new ForcaDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETQASQMSBYFORCADWR);
            pstm.setInt(1, idForca);
           
            rs = pstm.executeQuery();
            while (rs.next()) {                
                Qas qq = new Qas();
                
                qq.setId(rs.getInt("id"));
                qq.setNome(rs.getString("nome"));
                qq.setAbreviatura(rs.getString("abreviatura"));
                
                Forca forca = forcaDAO.getForcaById(rs.getInt("idForca"));
                qq.setIdForca(forca.getId());
                qq.setNomeForca(forca.getNome());
                qq.setSiglaForca(forca.getSigla());
                qq.setIdTipoForca(forca.getIdTipoForca());
                qq.setNomeTipoForca(forca.getNomeTipoForca());
                
                qasqms.add(qq);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return qasqms;
    }
}
