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
import model.bean.Dependente;
import model.bean.GrauParentesco;
import model.bean.Militar;

/**
 *
 * @author anderson
 */
public class DependenteDAO {
    //Tabela
    String tabela = "dbcigs_dependente";
    
    //Atributos
    String id = "id";
    String nome = "nome";
    String sobrenome = "sobrenome";
    String datanascimento = "datanascimento";
    String idGrauParentesco = "dbcigs_grauparentesco_id";
    String idtMilitar = "dbcigs_militar_idtmilitar";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + nome + "," + sobrenome +  "," + datanascimento + "," + idGrauParentesco + "," + idtMilitar + ")" +
                                  " VALUES(?,?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=?, " + sobrenome + "=?, " + datanascimento + "=?, " + idGrauParentesco + "=?, " + idtMilitar + "=? " +
                                  "WHERE " + id + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + idtMilitar + "=?;";
    
    //Consultas SQL
    private final String GETUltimoID = "SELECT MAX(" + id + ") as ultimo_id FROM " + tabela + ";";
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    //Insert SQL
    public void insert(Dependente dependente) {
        if (dependente != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setString(1, dependente.getNome());
                pstm.setString(2, dependente.getSobrenome());
                pstm.setDate(3, dependente.getDataNascimento());
                pstm.setInt(4, dependente.getIdGrauParentesco());
                pstm.setString(5, dependente.getIdtMilitar());
                
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
    public void update(Dependente dependente) {
        if (dependente != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);                   
                
                pstm.setString(1, dependente.getNome());
                pstm.setString(2, dependente.getSobrenome());
                pstm.setDate(3, dependente.getDataNascimento());
                pstm.setInt(4, dependente.getIdGrauParentesco());
                pstm.setString(5, dependente.getIdtMilitar());               
                pstm.setInt(6, dependente.getId());
                
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
    public void delete(String idtmilitar) {
        if (idtmilitar != ""){
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(DELETE);
                pstm.setString(1, idtmilitar);
            
                pstm.execute();
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {            
            throw new RuntimeException();
        }
    }
    
    private final String GETDEPENDENTEBYID = "SELECT * " +
                                           "FROM " + tabela + " " +
                                           "WHERE id = ?";
       
    public Dependente getDependenteById(int idDependente){
        Dependente dependente = new Dependente();
        GrauParentescoDAO parentescoDAO = new GrauParentescoDAO();
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETDEPENDENTEBYID);
            pstm.setInt(1, idDependente);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                dependente.setId(rs.getInt("id"));
                dependente.setNome(rs.getString("nome"));
                dependente.setSobrenome(rs.getString("sobrenome"));
                dependente.setDataNascimento(rs.getDate("datanascimento"));      
                
                GrauParentesco parentesco = parentescoDAO.getGrauParentescoById(rs.getInt("dbcigs_grauparentesco_id"));
                dependente.setIdGrauParentesco(parentesco.getId());
                dependente.setNomeGrauParentesco(parentesco.getNome());
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                dependente.setIdtMilitar(mil.getIdtMilitar());
                dependente.setSituacaoMilitar(mil.getSituacao());
                dependente.setIdtCivilMilitar(mil.getIdtCivil());
                dependente.setCpfMilitar(mil.getCpf());
                dependente.setCpMilitar(mil.getCp());
                dependente.setPreccpMilitar(mil.getPreccp());
                dependente.setNomeMilitar(mil.getNome());
                dependente.setSobrenomeMilitar(mil.getSobrenome());
                dependente.setNomeGuerraMilitar(mil.getNomeGuerra());
                dependente.setSexoMilitar(mil.getSexo());
                dependente.setPaiMilitar(mil.getPai());
                dependente.setMaeMilitar(mil.getMae());
                dependente.setDataNascimentoMilitar(mil.getDataNascimento());
                dependente.setDataPracaMilitar(mil.getDataPraca());
                dependente.setTsMilitar(mil.getTs());
                dependente.setFtrhMilitar(mil.getFtrh());
                dependente.setEmailMilitar(mil.getEmail());
                dependente.setFamiliarContatoMilitar(mil.getFamiliarContato());
                dependente.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                dependente.setSenhaMilitar(mil.getSenha());
                dependente.setEndNumMilitar(mil.getEndNum());
                
                dependente.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                dependente.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                dependente.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                dependente.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                dependente.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                dependente.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                dependente.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                dependente.setIdReligiaoMilitar(mil.getIdReligiao());
                dependente.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                dependente.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                dependente.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                dependente.setIdQasMilitar(mil.getIdQas());
                dependente.setNomeQasMilitar(mil.getNomeQas());
                dependente.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                dependente.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                dependente.setDescricaoPostoGraduacaoMilitar(mil.getDescricaoPostoGraduacao());
                dependente.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                dependente.setIdSetorMilitar(mil.getIdSetor());
                dependente.setNomeSetorMilitar(mil.getNomeSetor());
                dependente.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                dependente.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                dependente.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                dependente.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                dependente.setIdComportamentoMilitar(mil.getIdComportamento());
                dependente.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                dependente.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                dependente.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return dependente;
    }
    
    
    
    private final String GETDEPENDENTEBYIDTMILITAR = "SELECT * " +
                                                "FROM " + tabela + " " +
                                                "WHERE dbcigs_militar_idtmilitar = ?";
       
    public Dependente getDependenteByIdtMilitar(String idtMilitar){
        Dependente dependente = new Dependente();
        GrauParentescoDAO parentescoDAO = new GrauParentescoDAO();
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETDEPENDENTEBYIDTMILITAR);
            pstm.setString(1, idtMilitar);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                dependente.setId(rs.getInt("id"));
                dependente.setNome(rs.getString("nome"));
                dependente.setSobrenome(rs.getString("sobrenome"));
                dependente.setDataNascimento(rs.getDate("datanascimento"));                
                
                GrauParentesco parentesco = parentescoDAO.getGrauParentescoById(rs.getInt("dbcigs_grauparentesco_id"));
                dependente.setIdGrauParentesco(parentesco.getId());
                dependente.setNomeGrauParentesco(parentesco.getNome());
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                dependente.setIdtMilitar(mil.getIdtMilitar());
                dependente.setSituacaoMilitar(mil.getSituacao());
                dependente.setIdtCivilMilitar(mil.getIdtCivil());
                dependente.setCpfMilitar(mil.getCpf());
                dependente.setCpMilitar(mil.getCp());
                dependente.setPreccpMilitar(mil.getPreccp());
                dependente.setNomeMilitar(mil.getNome());
                dependente.setSobrenomeMilitar(mil.getSobrenome());
                dependente.setNomeGuerraMilitar(mil.getNomeGuerra());
                dependente.setSexoMilitar(mil.getSexo());
                dependente.setPaiMilitar(mil.getPai());
                dependente.setMaeMilitar(mil.getMae());
                dependente.setDataNascimentoMilitar(mil.getDataNascimento());
                dependente.setDataPracaMilitar(mil.getDataPraca());
                dependente.setTsMilitar(mil.getTs());
                dependente.setFtrhMilitar(mil.getFtrh());
                dependente.setEmailMilitar(mil.getEmail());
                dependente.setFamiliarContatoMilitar(mil.getFamiliarContato());
                dependente.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                dependente.setSenhaMilitar(mil.getSenha());
                dependente.setEndNumMilitar(mil.getEndNum());
                
                dependente.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                dependente.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                dependente.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                dependente.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                dependente.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                dependente.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                dependente.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                dependente.setIdReligiaoMilitar(mil.getIdReligiao());
                dependente.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                dependente.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                dependente.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                dependente.setIdQasMilitar(mil.getIdQas());
                dependente.setNomeQasMilitar(mil.getNomeQas());
                dependente.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                dependente.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                dependente.setDescricaoPostoGraduacaoMilitar(mil.getDescricaoPostoGraduacao());
                dependente.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                dependente.setIdSetorMilitar(mil.getIdSetor());
                dependente.setNomeSetorMilitar(mil.getNomeSetor());
                dependente.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                dependente.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                dependente.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                dependente.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                dependente.setIdComportamentoMilitar(mil.getIdComportamento());
                dependente.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                dependente.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                dependente.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return dependente;
    }
    
    private final String GETDEPENDENTES = "SELECT * " +
                                       "FROM " + tabela;
       
    public ArrayList<Dependente> getDependentes(){
        ArrayList<Dependente> dependentes = new ArrayList<>();
        GrauParentescoDAO parentescoDAO = new GrauParentescoDAO();
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETDEPENDENTES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Dependente dependente = new Dependente();
                
                dependente.setId(rs.getInt("id"));
                dependente.setNome(rs.getString("nome"));
                dependente.setSobrenome(rs.getString("sobrenome"));
                dependente.setDataNascimento(rs.getDate("datanascimento"));                
                
                GrauParentesco parentesco = parentescoDAO.getGrauParentescoById(rs.getInt("dbcigs_grauparentesco_id"));
                dependente.setIdGrauParentesco(parentesco.getId());
                dependente.setNomeGrauParentesco(parentesco.getNome());
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                dependente.setIdtMilitar(mil.getIdtMilitar());
                dependente.setSituacaoMilitar(mil.getSituacao());
                dependente.setIdtCivilMilitar(mil.getIdtCivil());
                dependente.setCpfMilitar(mil.getCpf());
                dependente.setCpMilitar(mil.getCp());
                dependente.setPreccpMilitar(mil.getPreccp());
                dependente.setNomeMilitar(mil.getNome());
                dependente.setSobrenomeMilitar(mil.getSobrenome());
                dependente.setNomeGuerraMilitar(mil.getNomeGuerra());
                dependente.setSexoMilitar(mil.getSexo());
                dependente.setPaiMilitar(mil.getPai());
                dependente.setMaeMilitar(mil.getMae());
                dependente.setDataNascimentoMilitar(mil.getDataNascimento());
                dependente.setDataPracaMilitar(mil.getDataPraca());
                dependente.setTsMilitar(mil.getTs());
                dependente.setFtrhMilitar(mil.getFtrh());
                dependente.setEmailMilitar(mil.getEmail());
                dependente.setFamiliarContatoMilitar(mil.getFamiliarContato());
                dependente.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                dependente.setSenhaMilitar(mil.getSenha());
                dependente.setEndNumMilitar(mil.getEndNum());
                
                dependente.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                dependente.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                dependente.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                dependente.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                dependente.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                dependente.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                dependente.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                dependente.setIdReligiaoMilitar(mil.getIdReligiao());
                dependente.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                dependente.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                dependente.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                dependente.setIdQasMilitar(mil.getIdQas());
                dependente.setNomeQasMilitar(mil.getNomeQas());
                dependente.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                dependente.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                dependente.setDescricaoPostoGraduacaoMilitar(mil.getDescricaoPostoGraduacao());
                dependente.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                dependente.setIdSetorMilitar(mil.getIdSetor());
                dependente.setNomeSetorMilitar(mil.getNomeSetor());
                dependente.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                dependente.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                dependente.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                dependente.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                dependente.setIdComportamentoMilitar(mil.getIdComportamento());
                dependente.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                dependente.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                dependente.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
                
                dependentes.add(dependente);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return dependentes;
    }
    
    private final static String GETDEPENDENTESBYIDTMILITARDWR = "SELECT * " +
                                                         "FROM dbcigs_dependente " +
                                                         "WHERE dbcigs_militar_idtmilitar=?";
       
    public static ArrayList<Dependente> getDependentesByIdtMilitarDWR(String idtmilitar){
        ArrayList<Dependente> dependentes = new ArrayList<>();
        GrauParentescoDAO parentescoDAO = new GrauParentescoDAO();
        MilitarDAO milDAO = new MilitarDAO();
        
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETDEPENDENTESBYIDTMILITARDWR);
            pstm.setString(1, idtmilitar);
            rs = pstm.executeQuery();
            while (rs.next()) {
                Dependente dependente = new Dependente();
                
                dependente.setId(rs.getInt("id"));
                dependente.setNome(rs.getString("nome"));
                dependente.setSobrenome(rs.getString("sobrenome"));
                dependente.setDataNascimento(rs.getDate("datanascimento"));                
                
                GrauParentesco parentesco = parentescoDAO.getGrauParentescoById(rs.getInt("dbcigs_grauparentesco_id"));
                dependente.setIdGrauParentesco(parentesco.getId());
                dependente.setNomeGrauParentesco(parentesco.getNome());
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                dependente.setIdtMilitar(mil.getIdtMilitar());
                dependente.setSituacaoMilitar(mil.getSituacao());
                dependente.setIdtCivilMilitar(mil.getIdtCivil());
                dependente.setCpfMilitar(mil.getCpf());
                dependente.setCpMilitar(mil.getCp());
                dependente.setPreccpMilitar(mil.getPreccp());
                dependente.setNomeMilitar(mil.getNome());
                dependente.setSobrenomeMilitar(mil.getSobrenome());
                dependente.setNomeGuerraMilitar(mil.getNomeGuerra());
                dependente.setSexoMilitar(mil.getSexo());
                dependente.setPaiMilitar(mil.getPai());
                dependente.setMaeMilitar(mil.getMae());
                dependente.setDataNascimentoMilitar(mil.getDataNascimento());
                dependente.setDataPracaMilitar(mil.getDataPraca());
                dependente.setTsMilitar(mil.getTs());
                dependente.setFtrhMilitar(mil.getFtrh());
                dependente.setEmailMilitar(mil.getEmail());
                dependente.setFamiliarContatoMilitar(mil.getFamiliarContato());
                dependente.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                dependente.setSenhaMilitar(mil.getSenha());
                dependente.setEndNumMilitar(mil.getEndNum());
                
                dependente.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                dependente.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                dependente.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                dependente.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                dependente.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                dependente.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                dependente.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                dependente.setIdReligiaoMilitar(mil.getIdReligiao());
                dependente.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                dependente.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                dependente.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                dependente.setIdQasMilitar(mil.getIdQas());
                dependente.setNomeQasMilitar(mil.getNomeQas());
                dependente.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                dependente.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                dependente.setDescricaoPostoGraduacaoMilitar(mil.getDescricaoPostoGraduacao());
                dependente.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                dependente.setIdSetorMilitar(mil.getIdSetor());
                dependente.setNomeSetorMilitar(mil.getNomeSetor());
                dependente.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                dependente.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                dependente.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                dependente.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                dependente.setIdComportamentoMilitar(mil.getIdComportamento());
                dependente.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                dependente.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                dependente.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
                
                dependentes.add(dependente);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return dependentes;
    }
}
