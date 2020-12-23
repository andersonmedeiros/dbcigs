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
import model.bean.Endereco;

/**
 *
 * @author anderson
 */
public class EnderecoDAO {
    //Tabela
    String tabela = "Endereco";
    
    //Atributos
    String id = "id";
    String cep = "cep";
    String descricao = "descricao";
    String complemento = "complemento";
    String pontoreferencia = "pontoreferencia";
    String bairro = "bairro";
    String idCidade = "idCidade";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + id + "," + cep + "," + descricao + "," + complemento + "," + pontoreferencia + "," + bairro + "," + idCidade + ")" +
                                  " VALUES(?,?,?,?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + cep + "=?, " + descricao + "=?, " + complemento + "=?, " + pontoreferencia + "=?, " + bairro + "=?, " + idCidade + "=? " +
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
    public void insert(Endereco end) {
        if (end != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setInt(1, end.getId());
                pstm.setString(2, end.getCep());
                pstm.setString(3, end.getDescricao());
                pstm.setString(4, end.getComplemento());
                pstm.setString(5, end.getPontoreferencia());
                pstm.setString(6, end.getBairro());
                pstm.setInt(7, end.getIdCidade());
                
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
    public void update(Endereco end) {
        if (end != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);
                
                pstm.setString(1, end.getCep());
                pstm.setString(2, end.getDescricao());
                pstm.setString(3, end.getComplemento());
                pstm.setString(4, end.getPontoreferencia());
                pstm.setString(5, end.getBairro());
                pstm.setInt(6, end.getIdCidade());
                pstm.setInt(7, end.getId());
            
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
    
    private final String GETENDERECOBYID = "SELECT * " +
                                           "FROM Endereco " + 
                                           "WHERE id = ?";
       
    public Endereco getEnderecoById(int idEndereco){
        Endereco end = new Endereco();
        CidadeDAO cidDAO = new CidadeDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETENDERECOBYID);
            pstm.setInt(1, idEndereco);
           
            rs = pstm.executeQuery();
            while (rs.next()) {           
                end.setId(rs.getInt("id"));
                end.setCep(rs.getString("cep"));
                end.setDescricao(rs.getString("descricao"));
                end.setComplemento(rs.getString("complemento"));
                end.setPontoreferencia(rs.getString("pontoreferencia"));
                end.setBairro(rs.getString("bairro"));
                
                Cidade cid = cidDAO.getCidadeById(rs.getInt("idCidade"));
                end.setIdCidade(cid.getId());
                end.setNomeCidade(cid.getNome());
                end.setIdEstadoCidade(cid.getIdEstado());
                end.setNomeEstadoCidade(cid.getNomeEstado());
                end.setSiglaEstadoCidade(cid.getSiglaEstado());
                end.setIdRegiaoEstadoCidade(cid.getIdRegiaoEstado());
                end.setNomeRegiaoEstadoCidade(cid.getNomeRegiaoEstado());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return end;
    }
    
    private final String GETENDERECOEXISTENTE = "SELECT * " + 
                                                " FROM " + tabela + 
                                                " WHERE " + cep + "=? AND " + descricao + "=? AND " + complemento + "=? OR " + complemento + " IS NULL AND "  + pontoreferencia + "=? OR " + pontoreferencia + " IS NULL AND " + bairro + "=? AND " + idCidade + "=?;";

    public Endereco getEnderecoExistente(String cep, String descricao, String complemento, String pontoreferencia, String bairro, int idCidade){
        Endereco end = new Endereco();   
        CidadeDAO cidDAO = new CidadeDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETENDERECOEXISTENTE);
            pstm.setString(1, cep);
            pstm.setString(2, descricao);
            pstm.setString(3, complemento);
            pstm.setString(4, pontoreferencia);
            pstm.setString(5, bairro);
            pstm.setInt(6, idCidade);
           
            rs = pstm.executeQuery();
            while (rs.next()) {                
                end.setId(rs.getInt("id"));
                end.setCep(rs.getString("cep"));
                end.setDescricao(rs.getString("descricao"));
                end.setComplemento(rs.getString("complemento"));
                end.setPontoreferencia(rs.getString("pontoreferencia"));
                end.setBairro(rs.getString("bairro"));
                
                Cidade cid = cidDAO.getCidadeById(rs.getInt("idCidade"));
                end.setIdCidade(cid.getId());
                end.setNomeCidade(cid.getNome());
                end.setIdEstadoCidade(cid.getIdEstado());
                end.setNomeEstadoCidade(cid.getNomeEstado());
                end.setSiglaEstadoCidade(cid.getSiglaEstado());
                end.setIdRegiaoEstadoCidade(cid.getIdRegiaoEstado());
                end.setNomeRegiaoEstadoCidade(cid.getNomeRegiaoEstado());
                
                return end;
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return null;
    }
    
    private final String GETENDERECOS = "SELECT * " +
                                   "FROM " + tabela;
       
    public ArrayList<Endereco> getCidades(){
        ArrayList<Endereco> ends = new ArrayList<>(); 
        CidadeDAO cidDAO = new CidadeDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETENDERECOS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Endereco end = new Endereco();
                
                end.setId(rs.getInt("id"));
                end.setCep(rs.getString("cep"));
                end.setDescricao(rs.getString("descricao"));
                end.setComplemento(rs.getString("complemento"));
                end.setPontoreferencia(rs.getString("pontoreferencia"));
                end.setBairro(rs.getString("bairro"));
                
                Cidade cid = cidDAO.getCidadeById(rs.getInt("idCidade"));
                end.setIdCidade(cid.getId());
                end.setNomeCidade(cid.getNome());
                end.setIdEstadoCidade(cid.getIdEstado());
                end.setNomeEstadoCidade(cid.getNomeEstado());
                end.setSiglaEstadoCidade(cid.getSiglaEstado());
                end.setIdRegiaoEstadoCidade(cid.getIdRegiaoEstado());
                end.setNomeRegiaoEstadoCidade(cid.getNomeRegiaoEstado());
                
                ends.add(end);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return ends;
    }
}
