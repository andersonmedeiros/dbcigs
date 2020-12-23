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
import model.bean.Cidade;
import model.bean.Estado;

/**
 *
 * @author anderson
 */
public class CidadeDAO {
    //Tabela
    String tabela = "Cidade";
    
    //Atributos
    String id = "id";
    String nome = "nome";
    String idEstado = "idEstado";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + id + "," + nome + "," + idEstado + ")" +
                                  " VALUES(?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=?, " + idEstado + "=? " +
                                  "WHERE " + id + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    
    //Insert SQL
    public void insert(Cidade cid) {
        if (cid != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setInt(1, cid.getId());
                pstm.setString(2, cid.getNome());
                pstm.setInt(3, cid.getIdEstado());
                                                              
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
    public void update(Cidade cid) {
        if (cid != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);                
                
                pstm.setString(1, cid.getNome());
                pstm.setInt(2, cid.getIdEstado());
                pstm.setInt(3, cid.getId());
            
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
    
    private final String GETCIDADEBYID = "SELECT * " +
                                     "FROM Cidade " + 
                                     "WHERE id = ?";
    
    public Cidade getCidadeById(int idCidade){
        Cidade cid = new Cidade();
        EstadoDAO estDAO = new EstadoDAO();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCIDADEBYID);
            pstm.setInt(1, idCidade);
           
            rs = pstm.executeQuery();
            while (rs.next()) {  
                cid.setId(rs.getInt("id"));
                cid.setNome(rs.getString("nome"));
                
                Estado est = estDAO.getEstadoById(rs.getInt("idEstado"));
                cid.setIdEstado(est.getId());
                cid.setNomeEstado(est.getNome());
                cid.setSiglaEstado(est.getSigla());
                cid.setIdRegiaoEstado(est.getIdRegiao());
                cid.setNomeRegiaoEstado(est.getNomeRegiao());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return cid;
    }
    
    private final String GETCIDADES = "SELECT * " +
                                      "FROM " + tabela;
       
    public ArrayList<Cidade> getCidades(){
        ArrayList<Cidade> cidades = new ArrayList<>(); 
        EstadoDAO estadoDAO = new EstadoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCIDADES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Cidade cidade = new Cidade();

                cidade.setId(rs.getInt("id"));
                cidade.setNome(rs.getString("nome"));

                Estado estado = estadoDAO.getEstadoById(rs.getInt("idEstado"));
                cidade.setIdEstado(estado.getId());
                cidade.setNomeEstado(estado.getNome());
                cidade.setSiglaEstado(estado.getSigla());
                cidade.setIdRegiaoEstado(estado.getIdRegiao());
                cidade.setNomeRegiaoEstado(estado.getNomeRegiao());

                cidades.add(cidade);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return cidades;
    }
    
    private final static String GETCIDADESBYESTADODWR = "SELECT * " +
                                                        "FROM Cidade " +
                                                        "WHERE idEstado = ?;";
    
    public static ArrayList<Cidade> getCidadesByEstadoDWR(int idEstado){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        EstadoDAO estadoDAO = new EstadoDAO();
        ArrayList<Cidade> cidades = new ArrayList<>();
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCIDADESBYESTADODWR);
            pstm.setInt(1, idEstado);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Cidade cidade = new Cidade();

                cidade.setId(rs.getInt("id"));
                cidade.setNome(rs.getString("nome"));

                Estado estado = estadoDAO.getEstadoById(rs.getInt("idEstado"));
                cidade.setIdEstado(estado.getId());
                cidade.setNomeEstado(estado.getNome());
                cidade.setSiglaEstado(estado.getSigla());
                cidade.setIdRegiaoEstado(estado.getIdRegiao());
                cidade.setNomeRegiaoEstado(estado.getNomeRegiao());

                cidades.add(cidade);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return cidades;
    }
}
