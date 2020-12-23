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
import model.bean.Aluno;
import model.bean.Cnh;

/**
 *
 * @author anderson
 */
public class CnhDAO {
    //Tabela
    String tabela = "CNH";
    
    //Atributos
    String numero = "numero";
    String categoria = "categoria";
    String datavalidade = "datavalidade";
    String idtAluno = "idtAluno";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + numero + "," + categoria + "," + datavalidade +  "," + idtAluno + ")" +
                                  " VALUES(?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + categoria + "=?, " + datavalidade + "=?, " + idtAluno + "=? " +
                                  "WHERE " + numero + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + numero + "=?;";
    
    //Consultas SQL
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    //Insert SQL
    public void insert(Cnh cnh) {
        if (cnh != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setString(1, cnh.getNumero());
                pstm.setString(2, cnh.getCategoria());
                pstm.setDate(3, cnh.getDataValidade());
                pstm.setString(4, cnh.getIdentidadeAluno());
                
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
    public void update(Cnh cnh) {
        if (cnh != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);                                
                
                pstm.setString(1, cnh.getCategoria());
                pstm.setDate(2, cnh.getDataValidade());
                pstm.setString(3, cnh.getIdentidadeAluno());
                pstm.setString(4, cnh.getNumero());
                
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
    public void delete(String numero) {
        if (numero != null){
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(DELETE);
                pstm.setString(1, numero);
            
                pstm.execute();
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {            
            throw new RuntimeException();
        }
    }
    
    private final String GETCNHBYNUM = "SELECT * " +
                                        "FROM CNH " + 
                                        "WHERE numero = ?";
       
    public Cnh getCnhByNum(String numero){
        Cnh cnh = new Cnh();
        AlunoDAO alDAO = new AlunoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCNHBYNUM);
            pstm.setString(1, numero);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                cnh.setNumero(rs.getString("numero"));
                cnh.setCategoria(rs.getString("categoria"));
                cnh.setDataValidade(rs.getDate("datavalidade"));               
                
                Aluno al = alDAO.getAlunoByIdentidade(rs.getString("idtAluno"));
                cnh.setIdentidadeAluno(al.getIdentidade());
                cnh.setSituacaoAluno(al.getSituacao());
                cnh.setIdPostoGraduacaoAluno(al.getIdPostoGraduacao());
                cnh.setIdQasQmsAluno(al.getIdQasQms());
                cnh.setIdCmtAluno(al.getIdCmt());
                cnh.setDataNascimentoAluno(al.getDataNascimento());
                cnh.setNomeAluno(al.getNome());
                cnh.setSobrenomeAluno(al.getSobrenome());
                cnh.setNomeguerraAluno(al.getNomeguerra());
                cnh.setPreccpAluno(al.getPreccp());
                cnh.setCpAluno(al.getCp());
                cnh.setCpfAluno(al.getCpf());
                cnh.setUltDataPracaAluno(al.getUltDataPraca());
                cnh.setIdNatCidadeAluno(al.getIdNatCidade());
                cnh.setIdEstadoCivilAluno(al.getIdEstadoCivil());
                cnh.setTsAluno(al.getTs());
                cnh.setFtrhAluno(al.getFtrh());
                cnh.setPaiAluno(al.getPai());
                cnh.setMaeAluno(al.getMae());
                cnh.setEmailAluno(al.getEmail());
                cnh.setFumanteAluno(al.getFumante());
                cnh.setIdOMAluno(al.getIdOM());
                cnh.setIdComportamentoAluno(al.getIdComportamento());
                cnh.setIdChImtoAluno(al.getIdChImto());
                cnh.setSexoAluno(al.getSexo());
                cnh.setUltfuncao1Aluno(al.getUltfuncao1());
                cnh.setUltfuncao2Aluno(al.getUltfuncao2());
                cnh.setUltfuncao3Aluno(al.getUltfuncao3());
                cnh.setIdTafAluno(al.getIdTaf());
                cnh.setIdPromocaoAluno(al.getIdPromocao());
                cnh.setIdPreparacaoAluno(al.getIdPreparacao());
                cnh.setIdUniformeAluno(al.getIdUniforme());
                cnh.setEasAluno(al.getEas());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return cnh;
    }
    
    private final String GETCNHBYIDTALUNO = "SELECT * " +
                                            "FROM CNH " + 
                                            "WHERE idtAluno = ?";
       
    public Cnh getCnhByIdtAluno(String idtAluno){
        Cnh cnh = new Cnh();
        AlunoDAO alDAO = new AlunoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCNHBYIDTALUNO);
            pstm.setString(1, idtAluno);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                cnh.setNumero(rs.getString("numero"));
                cnh.setCategoria(rs.getString("categoria"));
                cnh.setDataValidade(rs.getDate("datavalidade"));               
                
                Aluno al = alDAO.getAlunoByIdentidade(rs.getString("idtAluno"));
                cnh.setIdentidadeAluno(al.getIdentidade());
                cnh.setSituacaoAluno(al.getSituacao());
                cnh.setIdPostoGraduacaoAluno(al.getIdPostoGraduacao());
                cnh.setIdQasQmsAluno(al.getIdQasQms());
                cnh.setIdCmtAluno(al.getIdCmt());
                cnh.setDataNascimentoAluno(al.getDataNascimento());
                cnh.setNomeAluno(al.getNome());
                cnh.setSobrenomeAluno(al.getSobrenome());
                cnh.setNomeguerraAluno(al.getNomeguerra());
                cnh.setPreccpAluno(al.getPreccp());
                cnh.setCpAluno(al.getCp());
                cnh.setCpfAluno(al.getCpf());
                cnh.setUltDataPracaAluno(al.getUltDataPraca());
                cnh.setIdNatCidadeAluno(al.getIdNatCidade());
                cnh.setIdEstadoCivilAluno(al.getIdEstadoCivil());
                cnh.setTsAluno(al.getTs());
                cnh.setFtrhAluno(al.getFtrh());
                cnh.setPaiAluno(al.getPai());
                cnh.setMaeAluno(al.getMae());
                cnh.setEmailAluno(al.getEmail());
                cnh.setFumanteAluno(al.getFumante());
                cnh.setIdOMAluno(al.getIdOM());
                cnh.setIdComportamentoAluno(al.getIdComportamento());
                cnh.setIdChImtoAluno(al.getIdChImto());
                cnh.setSexoAluno(al.getSexo());
                cnh.setUltfuncao1Aluno(al.getUltfuncao1());
                cnh.setUltfuncao2Aluno(al.getUltfuncao2());
                cnh.setUltfuncao3Aluno(al.getUltfuncao3());
                cnh.setIdTafAluno(al.getIdTaf());
                cnh.setIdPromocaoAluno(al.getIdPromocao());
                cnh.setIdPreparacaoAluno(al.getIdPreparacao());
                cnh.setIdUniformeAluno(al.getIdUniforme());
                cnh.setEasAluno(al.getEas());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return cnh;
    }
    
    private final String GETCNHS = "SELECT * " +
                                   "FROM " + tabela;
       
    public ArrayList<Cnh> getCnhs(){
        ArrayList<Cnh> cnhs = new ArrayList<>();  
        AlunoDAO alDAO = new AlunoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCNHS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Cnh cnh = new Cnh();
                
                cnh.setNumero(rs.getString("numero"));
                cnh.setCategoria(rs.getString("categoria"));
                cnh.setDataValidade(rs.getDate("datavalidade"));
                
                Aluno al = alDAO.getAlunoByIdentidade(rs.getString("idtAluno"));
                cnh.setIdentidadeAluno(al.getIdentidade());
                cnh.setSituacaoAluno(al.getSituacao());
                cnh.setIdPostoGraduacaoAluno(al.getIdPostoGraduacao());
                cnh.setIdQasQmsAluno(al.getIdQasQms());
                cnh.setIdCmtAluno(al.getIdCmt());
                cnh.setDataNascimentoAluno(al.getDataNascimento());
                cnh.setNomeAluno(al.getNome());
                cnh.setSobrenomeAluno(al.getSobrenome());
                cnh.setNomeguerraAluno(al.getNomeguerra());
                cnh.setPreccpAluno(al.getPreccp());
                cnh.setCpAluno(al.getCp());
                cnh.setCpfAluno(al.getCpf());
                cnh.setUltDataPracaAluno(al.getUltDataPraca());
                cnh.setIdNatCidadeAluno(al.getIdNatCidade());
                cnh.setIdEstadoCivilAluno(al.getIdEstadoCivil());
                cnh.setTsAluno(al.getTs());
                cnh.setFtrhAluno(al.getFtrh());
                cnh.setPaiAluno(al.getPai());
                cnh.setMaeAluno(al.getMae());
                cnh.setEmailAluno(al.getEmail());
                cnh.setFumanteAluno(al.getFumante());
                cnh.setIdOMAluno(al.getIdOM());
                cnh.setIdComportamentoAluno(al.getIdComportamento());
                cnh.setIdChImtoAluno(al.getIdChImto());
                cnh.setSexoAluno(al.getSexo());
                cnh.setUltfuncao1Aluno(al.getUltfuncao1());
                cnh.setUltfuncao2Aluno(al.getUltfuncao2());
                cnh.setUltfuncao3Aluno(al.getUltfuncao3());
                cnh.setIdTafAluno(al.getIdTaf());
                cnh.setIdPromocaoAluno(al.getIdPromocao());
                cnh.setIdPreparacaoAluno(al.getIdPreparacao());
                cnh.setIdUniformeAluno(al.getIdUniforme());
                cnh.setEasAluno(al.getEas());
                
                cnhs.add(cnh);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return cnhs;
    }
}
