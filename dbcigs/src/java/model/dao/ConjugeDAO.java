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
import model.bean.Conjuge;

/**
 *
 * @author anderson
 */
public class ConjugeDAO {
    //Tabela
    String tabela = "Conjuge";
    
    //Atributos
    String id = "id";
    String cpf = "cpf";
    String nome = "nome";
    String sobrenome = "sobrenome";
    String email = "email";
    String idtAluno = "idtAluno";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + id + "," + cpf + "," + nome + "," + sobrenome +  "," + email + "," + idtAluno + ")" +
                                  " VALUES(?,?,?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + cpf + "=?, " + nome + "=?, " + sobrenome + "=?, " + email + "=?, " + idtAluno + "=? " +
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
    public void insert(Conjuge conjuge) {
        if (conjuge != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setInt(1, conjuge.getId());
                pstm.setString(2, conjuge.getCpf());
                pstm.setString(3, conjuge.getNome());
                pstm.setString(4, conjuge.getSobrenome());
                pstm.setString(5, conjuge.getEmail());
                pstm.setString(6, conjuge.getIdentidadeAluno());
                
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
    public void update(Conjuge conjuge) {
        if (conjuge != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);                   
                                
                pstm.setString(1, conjuge.getCpf());
                pstm.setString(2, conjuge.getNome());
                pstm.setString(3, conjuge.getSobrenome());
                pstm.setString(4, conjuge.getEmail());
                pstm.setString(5, conjuge.getIdentidadeAluno());                
                pstm.setInt(6, conjuge.getId());
                
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
        if (cpf != null){
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
    
    private final String GETCONJUGEBYID = "SELECT * " +
                                           "FROM Conjuge " + 
                                           "WHERE id = ?";
       
    public Conjuge getConjugeById(int idConjuge){
        Conjuge conjuge = new Conjuge();
        AlunoDAO alDAO = new AlunoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCONJUGEBYID);
            pstm.setInt(1, idConjuge);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                conjuge.setId(rs.getInt("id"));
                conjuge.setCpf(rs.getString("cpf"));
                conjuge.setNome(rs.getString("nome"));
                conjuge.setSobrenome(rs.getString("sobrenome"));
                conjuge.setEmail(rs.getString("email"));            
                
                Aluno al = alDAO.getAlunoByIdentidade(rs.getString("idtAluno"));
                conjuge.setIdentidadeAluno(al.getIdentidade());
                conjuge.setSituacaoAluno(al.getSituacao());
                conjuge.setIdPostoGraduacaoAluno(al.getIdPostoGraduacao());
                conjuge.setIdQasQmsAluno(al.getIdQasQms());
                conjuge.setIdCmtAluno(al.getIdCmt());
                conjuge.setDataNascimentoAluno(al.getDataNascimento());
                conjuge.setNomeAluno(al.getNome());
                conjuge.setSobrenomeAluno(al.getSobrenome());
                conjuge.setNomeguerraAluno(al.getNomeguerra());
                conjuge.setPreccpAluno(al.getPreccp());
                conjuge.setCpAluno(al.getCp());
                conjuge.setCpfAluno(al.getCpf());
                conjuge.setUltDataPracaAluno(al.getUltDataPraca());
                conjuge.setIdNatCidadeAluno(al.getIdNatCidade());
                conjuge.setIdEstadoCivilAluno(al.getIdEstadoCivil());
                conjuge.setTsAluno(al.getTs());
                conjuge.setFtrhAluno(al.getFtrh());
                conjuge.setPaiAluno(al.getPai());
                conjuge.setMaeAluno(al.getMae());
                conjuge.setEmailAluno(al.getEmail());
                conjuge.setFumanteAluno(al.getFumante());
                conjuge.setIdOMAluno(al.getIdOM());
                conjuge.setIdComportamentoAluno(al.getIdComportamento());
                conjuge.setIdChImtoAluno(al.getIdChImto());
                conjuge.setSexoAluno(al.getSexo());
                conjuge.setUltfuncao1Aluno(al.getUltfuncao1());
                conjuge.setUltfuncao2Aluno(al.getUltfuncao2());
                conjuge.setUltfuncao3Aluno(al.getUltfuncao3());
                conjuge.setIdTafAluno(al.getIdTaf());
                conjuge.setIdPromocaoAluno(al.getIdPromocao());
                conjuge.setIdPreparacaoAluno(al.getIdPreparacao());
                conjuge.setIdUniformeAluno(al.getIdUniforme());
                conjuge.setEasAluno(al.getEas());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return conjuge;
    }
    
    private final String GETCONJUGEBYCPF = "SELECT * " +
                                           "FROM Conjuge " + 
                                           "WHERE cpf = ?";
       
    public Conjuge getConjugeByCpf(String cpfConjuge){
        Conjuge conjuge = new Conjuge();
        AlunoDAO alDAO = new AlunoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCONJUGEBYCPF);
            pstm.setString(1, cpfConjuge);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                conjuge.setId(rs.getInt("id"));
                conjuge.setCpf(rs.getString("cpf"));
                conjuge.setNome(rs.getString("nome"));
                conjuge.setSobrenome(rs.getString("sobrenome"));
                conjuge.setEmail(rs.getString("email"));            
                
                Aluno al = alDAO.getAlunoByIdentidade(rs.getString("idtAluno"));
                conjuge.setIdentidadeAluno(al.getIdentidade());
                conjuge.setSituacaoAluno(al.getSituacao());
                conjuge.setIdPostoGraduacaoAluno(al.getIdPostoGraduacao());
                conjuge.setIdQasQmsAluno(al.getIdQasQms());
                conjuge.setIdCmtAluno(al.getIdCmt());
                conjuge.setDataNascimentoAluno(al.getDataNascimento());
                conjuge.setNomeAluno(al.getNome());
                conjuge.setSobrenomeAluno(al.getSobrenome());
                conjuge.setNomeguerraAluno(al.getNomeguerra());
                conjuge.setPreccpAluno(al.getPreccp());
                conjuge.setCpAluno(al.getCp());
                conjuge.setCpfAluno(al.getCpf());
                conjuge.setUltDataPracaAluno(al.getUltDataPraca());
                conjuge.setIdNatCidadeAluno(al.getIdNatCidade());
                conjuge.setIdEstadoCivilAluno(al.getIdEstadoCivil());
                conjuge.setTsAluno(al.getTs());
                conjuge.setFtrhAluno(al.getFtrh());
                conjuge.setPaiAluno(al.getPai());
                conjuge.setMaeAluno(al.getMae());
                conjuge.setEmailAluno(al.getEmail());
                conjuge.setFumanteAluno(al.getFumante());
                conjuge.setIdOMAluno(al.getIdOM());
                conjuge.setIdComportamentoAluno(al.getIdComportamento());
                conjuge.setIdChImtoAluno(al.getIdChImto());
                conjuge.setSexoAluno(al.getSexo());
                conjuge.setUltfuncao1Aluno(al.getUltfuncao1());
                conjuge.setUltfuncao2Aluno(al.getUltfuncao2());
                conjuge.setUltfuncao3Aluno(al.getUltfuncao3());
                conjuge.setIdTafAluno(al.getIdTaf());
                conjuge.setIdPromocaoAluno(al.getIdPromocao());
                conjuge.setIdPreparacaoAluno(al.getIdPreparacao());
                conjuge.setIdUniformeAluno(al.getIdUniforme());
                conjuge.setEasAluno(al.getEas());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return conjuge;
    }
    
    private final String GETCONJUGEBYIDTALUNO = "SELECT * " +
                                                "FROM Conjuge " + 
                                                "WHERE idtAluno = ?";
       
    public Conjuge getConjugeByIdtAluno(String idtAluno){
        Conjuge conjuge = new Conjuge();
        AlunoDAO alDAO = new AlunoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCONJUGEBYIDTALUNO);
            pstm.setString(1, idtAluno);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                conjuge.setId(rs.getInt("id"));
                conjuge.setCpf(rs.getString("cpf"));
                conjuge.setNome(rs.getString("nome"));
                conjuge.setSobrenome(rs.getString("sobrenome"));
                conjuge.setEmail(rs.getString("email"));                     
                
                Aluno al = alDAO.getAlunoByIdentidade(rs.getString("idtAluno"));
                conjuge.setIdentidadeAluno(al.getIdentidade());
                conjuge.setSituacaoAluno(al.getSituacao());
                conjuge.setIdPostoGraduacaoAluno(al.getIdPostoGraduacao());
                conjuge.setIdQasQmsAluno(al.getIdQasQms());
                conjuge.setIdCmtAluno(al.getIdCmt());
                conjuge.setDataNascimentoAluno(al.getDataNascimento());
                conjuge.setNomeAluno(al.getNome());
                conjuge.setSobrenomeAluno(al.getSobrenome());
                conjuge.setNomeguerraAluno(al.getNomeguerra());
                conjuge.setPreccpAluno(al.getPreccp());
                conjuge.setCpAluno(al.getCp());
                conjuge.setCpfAluno(al.getCpf());
                conjuge.setUltDataPracaAluno(al.getUltDataPraca());
                conjuge.setIdNatCidadeAluno(al.getIdNatCidade());
                conjuge.setIdEstadoCivilAluno(al.getIdEstadoCivil());
                conjuge.setTsAluno(al.getTs());
                conjuge.setFtrhAluno(al.getFtrh());
                conjuge.setPaiAluno(al.getPai());
                conjuge.setMaeAluno(al.getMae());
                conjuge.setEmailAluno(al.getEmail());
                conjuge.setFumanteAluno(al.getFumante());
                conjuge.setIdOMAluno(al.getIdOM());
                conjuge.setIdComportamentoAluno(al.getIdComportamento());
                conjuge.setIdChImtoAluno(al.getIdChImto());
                conjuge.setSexoAluno(al.getSexo());
                conjuge.setUltfuncao1Aluno(al.getUltfuncao1());
                conjuge.setUltfuncao2Aluno(al.getUltfuncao2());
                conjuge.setUltfuncao3Aluno(al.getUltfuncao3());
                conjuge.setIdTafAluno(al.getIdTaf());
                conjuge.setIdPromocaoAluno(al.getIdPromocao());
                conjuge.setIdPreparacaoAluno(al.getIdPreparacao());
                conjuge.setIdUniformeAluno(al.getIdUniforme());
                conjuge.setEasAluno(al.getEas());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return conjuge;
    }
    
    private final String GETCONJUGES = "SELECT * " +
                                       "FROM " + tabela;
       
    public ArrayList<Conjuge> getConjuges(){
        ArrayList<Conjuge> conjuges = new ArrayList<>();  
        AlunoDAO alDAO = new AlunoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCONJUGES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Conjuge conjuge = new Conjuge();
                
                conjuge.setId(rs.getInt("id"));
                conjuge.setCpf(rs.getString("cpf"));
                conjuge.setNome(rs.getString("nome"));
                conjuge.setSobrenome(rs.getString("sobrenome"));
                conjuge.setEmail(rs.getString("email"));          
                
                Aluno al = alDAO.getAlunoByIdentidade(rs.getString("idtAluno"));
                conjuge.setIdentidadeAluno(al.getIdentidade());
                conjuge.setSituacaoAluno(al.getSituacao());
                conjuge.setIdPostoGraduacaoAluno(al.getIdPostoGraduacao());
                conjuge.setIdQasQmsAluno(al.getIdQasQms());
                conjuge.setIdCmtAluno(al.getIdCmt());
                conjuge.setDataNascimentoAluno(al.getDataNascimento());
                conjuge.setNomeAluno(al.getNome());
                conjuge.setSobrenomeAluno(al.getSobrenome());
                conjuge.setNomeguerraAluno(al.getNomeguerra());
                conjuge.setPreccpAluno(al.getPreccp());
                conjuge.setCpAluno(al.getCp());
                conjuge.setCpfAluno(al.getCpf());
                conjuge.setUltDataPracaAluno(al.getUltDataPraca());
                conjuge.setIdNatCidadeAluno(al.getIdNatCidade());
                conjuge.setIdEstadoCivilAluno(al.getIdEstadoCivil());
                conjuge.setTsAluno(al.getTs());
                conjuge.setFtrhAluno(al.getFtrh());
                conjuge.setPaiAluno(al.getPai());
                conjuge.setMaeAluno(al.getMae());
                conjuge.setEmailAluno(al.getEmail());
                conjuge.setFumanteAluno(al.getFumante());
                conjuge.setIdOMAluno(al.getIdOM());
                conjuge.setIdComportamentoAluno(al.getIdComportamento());
                conjuge.setIdChImtoAluno(al.getIdChImto());
                conjuge.setSexoAluno(al.getSexo());
                conjuge.setUltfuncao1Aluno(al.getUltfuncao1());
                conjuge.setUltfuncao2Aluno(al.getUltfuncao2());
                conjuge.setUltfuncao3Aluno(al.getUltfuncao3());
                conjuge.setIdTafAluno(al.getIdTaf());
                conjuge.setIdPromocaoAluno(al.getIdPromocao());
                conjuge.setIdPreparacaoAluno(al.getIdPreparacao());
                conjuge.setIdUniformeAluno(al.getIdUniforme());
                conjuge.setEasAluno(al.getEas());
                
                conjuges.add(conjuge);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return conjuges;
    }
}
