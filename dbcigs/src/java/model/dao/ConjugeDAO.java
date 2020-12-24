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
import model.bean.Militar;
import model.bean.Conjuge;

/**
 *
 * @author anderson
 */
public class ConjugeDAO {
    //Tabela
    String tabela = "dbcigs_conjuge";
    
    //Atributos
    String id = "id";
    String nome = "nome";
    String sobrenome = "sobrenome";
    String datanascimento = "datanascimento";
    String email = "email";
    String fone = "fone";
    String gravidez = "gravidez";
    String idtMilitar = "dbcigs_militar_idtmilitar";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + nome + "," + sobrenome +  "," + datanascimento + "," + email + "," + fone + "," + gravidez + "," + idtMilitar + ")" +
                                  " VALUES(?,?,?,?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=?, " + sobrenome + "=?, " + datanascimento + "=?, " + email + "=?, " + fone + "=?, " + gravidez + "=?, " + idtMilitar + "=? " +
                                  "WHERE " + id + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    private final String GETUltimoID = "SELECT MAX(" + id + ") as ultimo_id FROM " + tabela + ";";
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    //Insert SQL
    public void insert(Conjuge conjuge) {
        if (conjuge != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setString(1, conjuge.getNome());
                pstm.setString(2, conjuge.getSobrenome());
                pstm.setDate(3, conjuge.getDataNascimento());
                pstm.setString(4, conjuge.getEmail());
                pstm.setString(5, conjuge.getFone());
                pstm.setInt(6, conjuge.getGravidez());
                pstm.setString(7, conjuge.getIdtMilitar());
                
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
                
                pstm.setString(1, conjuge.getNome());
                pstm.setString(2, conjuge.getSobrenome());
                pstm.setDate(3, conjuge.getDataNascimento());
                pstm.setString(4, conjuge.getEmail());
                pstm.setString(5, conjuge.getFone());
                pstm.setInt(6, conjuge.getGravidez());
                pstm.setString(7, conjuge.getIdtMilitar());               
                pstm.setInt(8, conjuge.getId());
                
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
    
    private final String GETCONJUGEBYID = "SELECT * " +
                                           "FROM " + tabela + " " +
                                           "WHERE id = ?";
       
    public Conjuge getConjugeById(int idConjuge){
        Conjuge conjuge = new Conjuge();
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCONJUGEBYID);
            pstm.setInt(1, idConjuge);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                conjuge.setId(rs.getInt("id"));
                conjuge.setNome(rs.getString("nome"));
                conjuge.setSobrenome(rs.getString("sobrenome"));
                conjuge.setDataNascimento(rs.getDate("datanascimento"));
                conjuge.setEmail(rs.getString("email"));            
                conjuge.setFone(rs.getString("fone"));            
                conjuge.setGravidez(rs.getInt("gravidez"));            
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                conjuge.setIdtMilitar(mil.getIdtMilitar());
                conjuge.setSituacaoMilitar(mil.getSituacao());
                conjuge.setIdtCivilMilitar(mil.getIdtCivil());
                conjuge.setCpfMilitar(mil.getCpf());
                conjuge.setCpMilitar(mil.getCp());
                conjuge.setPreccpMilitar(mil.getPreccp());
                conjuge.setNomeMilitar(mil.getNome());
                conjuge.setSobrenomeMilitar(mil.getSobrenome());
                conjuge.setNomeGuerraMilitar(mil.getNomeGuerra());
                conjuge.setSexoMilitar(mil.getSexo());
                conjuge.setPaiMilitar(mil.getPai());
                conjuge.setMaeMilitar(mil.getMae());
                conjuge.setDataNascimentoMilitar(mil.getDataNascimento());
                conjuge.setDataPracaMilitar(mil.getDataPraca());
                conjuge.setTsMilitar(mil.getTs());
                conjuge.setFtrhMilitar(mil.getFtrh());
                conjuge.setEmailMilitar(mil.getEmail());
                conjuge.setFamiliarContatoMilitar(mil.getFamiliarContato());
                conjuge.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                conjuge.setSenhaMilitar(mil.getSenha());
                conjuge.setEndNumMilitar(mil.getEndNum());
                
                conjuge.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                conjuge.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                conjuge.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                conjuge.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                conjuge.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                conjuge.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                conjuge.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                conjuge.setIdReligiaoMilitar(mil.getIdReligiao());
                conjuge.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                conjuge.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                conjuge.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                conjuge.setIdQasMilitar(mil.getIdQas());
                conjuge.setNomeQasMilitar(mil.getNomeQas());
                conjuge.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                conjuge.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                conjuge.setNomePostoGraduacaoMilitar(mil.getNomePostoGraduacao());
                conjuge.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                conjuge.setIdSetorMilitar(mil.getIdSetor());
                conjuge.setNomeSetorMilitar(mil.getNomeSetor());
                conjuge.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                conjuge.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                conjuge.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                conjuge.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                conjuge.setIdComportamentoMilitar(mil.getIdComportamento());
                conjuge.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                conjuge.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                conjuge.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return conjuge;
    }
    
    
    
    private final String GETCONJUGEBYIDTMILITAR = "SELECT * " +
                                                "FROM " + tabela + " " +
                                                "WHERE dbcigs_militar_idtmilitar = ?";
       
    public Conjuge getConjugeByIdtMilitar(String idtMilitar){
        Conjuge conjuge = new Conjuge();
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCONJUGEBYIDTMILITAR);
            pstm.setString(1, idtMilitar);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                conjuge.setId(rs.getInt("id"));
                conjuge.setNome(rs.getString("nome"));
                conjuge.setSobrenome(rs.getString("sobrenome"));
                conjuge.setDataNascimento(rs.getDate("datanascimento"));
                conjuge.setEmail(rs.getString("email"));            
                conjuge.setFone(rs.getString("fone"));            
                conjuge.setGravidez(rs.getInt("gravidez"));            
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                conjuge.setIdtMilitar(mil.getIdtMilitar());
                conjuge.setSituacaoMilitar(mil.getSituacao());
                conjuge.setIdtCivilMilitar(mil.getIdtCivil());
                conjuge.setCpfMilitar(mil.getCpf());
                conjuge.setCpMilitar(mil.getCp());
                conjuge.setPreccpMilitar(mil.getPreccp());
                conjuge.setNomeMilitar(mil.getNome());
                conjuge.setSobrenomeMilitar(mil.getSobrenome());
                conjuge.setNomeGuerraMilitar(mil.getNomeGuerra());
                conjuge.setSexoMilitar(mil.getSexo());
                conjuge.setPaiMilitar(mil.getPai());
                conjuge.setMaeMilitar(mil.getMae());
                conjuge.setDataNascimentoMilitar(mil.getDataNascimento());
                conjuge.setDataPracaMilitar(mil.getDataPraca());
                conjuge.setTsMilitar(mil.getTs());
                conjuge.setFtrhMilitar(mil.getFtrh());
                conjuge.setEmailMilitar(mil.getEmail());
                conjuge.setFamiliarContatoMilitar(mil.getFamiliarContato());
                conjuge.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                conjuge.setSenhaMilitar(mil.getSenha());
                conjuge.setEndNumMilitar(mil.getEndNum());
                
                conjuge.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                conjuge.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                conjuge.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                conjuge.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                conjuge.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                conjuge.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                conjuge.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                conjuge.setIdReligiaoMilitar(mil.getIdReligiao());
                conjuge.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                conjuge.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                conjuge.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                conjuge.setIdQasMilitar(mil.getIdQas());
                conjuge.setNomeQasMilitar(mil.getNomeQas());
                conjuge.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                conjuge.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                conjuge.setNomePostoGraduacaoMilitar(mil.getNomePostoGraduacao());
                conjuge.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                conjuge.setIdSetorMilitar(mil.getIdSetor());
                conjuge.setNomeSetorMilitar(mil.getNomeSetor());
                conjuge.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                conjuge.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                conjuge.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                conjuge.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                conjuge.setIdComportamentoMilitar(mil.getIdComportamento());
                conjuge.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                conjuge.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                conjuge.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
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
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCONJUGES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Conjuge conjuge = new Conjuge();
                
                conjuge.setId(rs.getInt("id"));
                conjuge.setNome(rs.getString("nome"));
                conjuge.setSobrenome(rs.getString("sobrenome"));
                conjuge.setDataNascimento(rs.getDate("datanascimento"));
                conjuge.setEmail(rs.getString("email"));            
                conjuge.setFone(rs.getString("fone"));            
                conjuge.setGravidez(rs.getInt("gravidez"));            
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                conjuge.setIdtMilitar(mil.getIdtMilitar());
                conjuge.setSituacaoMilitar(mil.getSituacao());
                conjuge.setIdtCivilMilitar(mil.getIdtCivil());
                conjuge.setCpfMilitar(mil.getCpf());
                conjuge.setCpMilitar(mil.getCp());
                conjuge.setPreccpMilitar(mil.getPreccp());
                conjuge.setNomeMilitar(mil.getNome());
                conjuge.setSobrenomeMilitar(mil.getSobrenome());
                conjuge.setNomeGuerraMilitar(mil.getNomeGuerra());
                conjuge.setSexoMilitar(mil.getSexo());
                conjuge.setPaiMilitar(mil.getPai());
                conjuge.setMaeMilitar(mil.getMae());
                conjuge.setDataNascimentoMilitar(mil.getDataNascimento());
                conjuge.setDataPracaMilitar(mil.getDataPraca());
                conjuge.setTsMilitar(mil.getTs());
                conjuge.setFtrhMilitar(mil.getFtrh());
                conjuge.setEmailMilitar(mil.getEmail());
                conjuge.setFamiliarContatoMilitar(mil.getFamiliarContato());
                conjuge.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                conjuge.setSenhaMilitar(mil.getSenha());
                conjuge.setEndNumMilitar(mil.getEndNum());
                
                conjuge.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                conjuge.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                conjuge.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                conjuge.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                conjuge.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                conjuge.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                conjuge.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                conjuge.setIdReligiaoMilitar(mil.getIdReligiao());
                conjuge.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                conjuge.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                conjuge.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                conjuge.setIdQasMilitar(mil.getIdQas());
                conjuge.setNomeQasMilitar(mil.getNomeQas());
                conjuge.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                conjuge.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                conjuge.setNomePostoGraduacaoMilitar(mil.getNomePostoGraduacao());
                conjuge.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                conjuge.setIdSetorMilitar(mil.getIdSetor());
                conjuge.setNomeSetorMilitar(mil.getNomeSetor());
                conjuge.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                conjuge.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                conjuge.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                conjuge.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                conjuge.setIdComportamentoMilitar(mil.getIdComportamento());
                conjuge.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                conjuge.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                conjuge.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
                
                conjuges.add(conjuge);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return conjuges;
    }
}
