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
import model.bean.Cidade;
import model.bean.TituloEleitor;

/**
 *
 * @author anderson
 */
public class TituloEleitorDAO {
    //Tabela
    String tabela = "TituloEleitor";
    
    //Atributos
    String registro = "registro";
    String zona = "zona";
    String secao = "secao";
    String idCidade = "idCidade";
    String idtAluno = "idtAluno";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + registro + "," + zona + "," + secao + "," + idCidade + "," + idtAluno + ")" +
                                  " VALUES(?,?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + zona + "=?, " + secao + "=?, " + idCidade + "=?, " + idtAluno + "=? " +
                                  "WHERE " + registro + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + registro + "=?;";
    
    //Consultas SQL
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    //Insert SQL
    public void insert(TituloEleitor titeleitor) {
        if (titeleitor != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setString(1, titeleitor.getRegistro());
                pstm.setString(2, titeleitor.getZona());
                pstm.setString(3, titeleitor.getSecao());
                pstm.setInt(4, titeleitor.getIdCidade());
                pstm.setString(5, titeleitor.getIdentidadeAluno());
                
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
    public void update(TituloEleitor titeleitor) {
        if (titeleitor != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE);
                                
                pstm.setString(1, titeleitor.getZona());
                pstm.setString(2, titeleitor.getSecao());
                pstm.setInt(3, titeleitor.getIdCidade());
                pstm.setString(4, titeleitor.getIdentidadeAluno());
                pstm.setString(5, titeleitor.getRegistro());
                
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
    public void delete(String registro) {
        if (registro != null){
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(DELETE);
                pstm.setString(1, registro);
            
                pstm.execute();
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {            
            throw new RuntimeException();
        }
    }
    
    private final String GETTITULOELEITORBYREGISTRO = "SELECT * " +
                                                "FROM TituloEleitor " + 
                                                "WHERE registro = ?";
       
    public TituloEleitor getTituloEleitorByRegistro(String registro){
        TituloEleitor titEleitor = new TituloEleitor();
        CidadeDAO cidDAO = new CidadeDAO();
        AlunoDAO alDAO = new AlunoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETTITULOELEITORBYREGISTRO);
            pstm.setString(1, registro);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                titEleitor.setRegistro(rs.getString("registro"));
                titEleitor.setZona(rs.getString("zona"));
                titEleitor.setSecao(rs.getString("secao"));
                
                Cidade cid = cidDAO.getCidadeById(rs.getInt("idCidade"));
                titEleitor.setIdCidade(cid.getId());
                titEleitor.setNomeCidade(cid.getNome());
                titEleitor.setIdEstadoCidade(cid.getIdEstado());
                titEleitor.setNomeEstadoCidade(cid.getNomeEstado());
                titEleitor.setSiglaEstadoCidade(cid.getSiglaEstado());
                titEleitor.setIdRegiaoEstadoCidade(cid.getIdRegiaoEstado());
                titEleitor.setNomeRegiaoEstadoCidade(cid.getNomeRegiaoEstado());
                
                Aluno al = alDAO.getAlunoByIdentidade(rs.getString("idtAluno"));
                titEleitor.setIdentidadeAluno(al.getIdentidade());
                titEleitor.setSituacaoAluno(al.getSituacao());
                titEleitor.setIdPostoGraduacaoAluno(al.getIdPostoGraduacao());
                titEleitor.setIdQasQmsAluno(al.getIdQasQms());
                titEleitor.setIdCmtAluno(al.getIdCmt());
                titEleitor.setDataNascimentoAluno(al.getDataNascimento());
                titEleitor.setNomeAluno(al.getNome());
                titEleitor.setSobrenomeAluno(al.getSobrenome());
                titEleitor.setNomeguerraAluno(al.getNomeguerra());
                titEleitor.setPreccpAluno(al.getPreccp());
                titEleitor.setCpAluno(al.getCp());
                titEleitor.setCpfAluno(al.getCpf());
                titEleitor.setUltDataPracaAluno(al.getUltDataPraca());
                titEleitor.setIdNatCidadeAluno(al.getIdNatCidade());
                titEleitor.setIdEstadoCivilAluno(al.getIdEstadoCivil());
                titEleitor.setTsAluno(al.getTs());
                titEleitor.setFtrhAluno(al.getFtrh());
                titEleitor.setPaiAluno(al.getPai());
                titEleitor.setMaeAluno(al.getMae());
                titEleitor.setEmailAluno(al.getEmail());
                titEleitor.setFumanteAluno(al.getFumante());
                titEleitor.setIdOMAluno(al.getIdOM());
                titEleitor.setIdComportamentoAluno(al.getIdComportamento());
                titEleitor.setIdChImtoAluno(al.getIdChImto());
                titEleitor.setSexoAluno(al.getSexo());
                titEleitor.setUltfuncao1Aluno(al.getUltfuncao1());
                titEleitor.setUltfuncao2Aluno(al.getUltfuncao2());
                titEleitor.setUltfuncao3Aluno(al.getUltfuncao3());
                titEleitor.setIdTafAluno(al.getIdTaf());
                titEleitor.setIdPromocaoAluno(al.getIdPromocao());
                titEleitor.setIdPreparacaoAluno(al.getIdPreparacao());
                titEleitor.setIdUniformeAluno(al.getIdUniforme());
                titEleitor.setEasAluno(al.getEas());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return titEleitor;
    }
    
    private final String GETTITULOELEITORBYIDTALUNO = "SELECT * " +
                                                      "FROM TituloEleitor " + 
                                                      "WHERE idtAluno = ?";
       
    public TituloEleitor getTituloEleitorByIdtAluno(int idtAluno){
        TituloEleitor titEleitor = new TituloEleitor();
        CidadeDAO cidDAO = new CidadeDAO();
        AlunoDAO alDAO = new AlunoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETTITULOELEITORBYIDTALUNO);
            pstm.setInt(1, idtAluno);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                titEleitor.setRegistro(rs.getString("registro"));
                titEleitor.setZona(rs.getString("zona"));
                titEleitor.setSecao(rs.getString("secao"));
                
                Cidade cid = cidDAO.getCidadeById(rs.getInt("idCidade"));
                titEleitor.setIdCidade(cid.getId());
                titEleitor.setNomeCidade(cid.getNome());
                titEleitor.setIdEstadoCidade(cid.getIdEstado());
                titEleitor.setNomeEstadoCidade(cid.getNomeEstado());
                titEleitor.setSiglaEstadoCidade(cid.getSiglaEstado());
                titEleitor.setIdRegiaoEstadoCidade(cid.getIdRegiaoEstado());
                titEleitor.setNomeRegiaoEstadoCidade(cid.getNomeRegiaoEstado());
                
                Aluno al = alDAO.getAlunoByIdentidade(rs.getString("idtAluno"));
                titEleitor.setIdentidadeAluno(al.getIdentidade());
                titEleitor.setSituacaoAluno(al.getSituacao());
                titEleitor.setIdPostoGraduacaoAluno(al.getIdPostoGraduacao());
                titEleitor.setIdQasQmsAluno(al.getIdQasQms());
                titEleitor.setIdCmtAluno(al.getIdCmt());
                titEleitor.setDataNascimentoAluno(al.getDataNascimento());
                titEleitor.setNomeAluno(al.getNome());
                titEleitor.setSobrenomeAluno(al.getSobrenome());
                titEleitor.setNomeguerraAluno(al.getNomeguerra());
                titEleitor.setPreccpAluno(al.getPreccp());
                titEleitor.setCpAluno(al.getCp());
                titEleitor.setCpfAluno(al.getCpf());
                titEleitor.setUltDataPracaAluno(al.getUltDataPraca());
                titEleitor.setIdNatCidadeAluno(al.getIdNatCidade());
                titEleitor.setIdEstadoCivilAluno(al.getIdEstadoCivil());
                titEleitor.setTsAluno(al.getTs());
                titEleitor.setFtrhAluno(al.getFtrh());
                titEleitor.setPaiAluno(al.getPai());
                titEleitor.setMaeAluno(al.getMae());
                titEleitor.setEmailAluno(al.getEmail());
                titEleitor.setFumanteAluno(al.getFumante());
                titEleitor.setIdOMAluno(al.getIdOM());
                titEleitor.setIdComportamentoAluno(al.getIdComportamento());
                titEleitor.setIdChImtoAluno(al.getIdChImto());
                titEleitor.setSexoAluno(al.getSexo());
                titEleitor.setUltfuncao1Aluno(al.getUltfuncao1());
                titEleitor.setUltfuncao2Aluno(al.getUltfuncao2());
                titEleitor.setUltfuncao3Aluno(al.getUltfuncao3());
                titEleitor.setIdTafAluno(al.getIdTaf());
                titEleitor.setIdPromocaoAluno(al.getIdPromocao());
                titEleitor.setIdPreparacaoAluno(al.getIdPreparacao());
                titEleitor.setIdUniformeAluno(al.getIdUniforme());
                titEleitor.setEasAluno(al.getEas());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return titEleitor;
    }
    
    private final String GETTITULOS = "SELECT * " +
                                   "FROM " + tabela;
       
    public ArrayList<TituloEleitor> getTitulos(){
        ArrayList<TituloEleitor> titulos = new ArrayList<>();   
        CidadeDAO cidDAO = new CidadeDAO();
        AlunoDAO alDAO = new AlunoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETTITULOS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                TituloEleitor titEleitor = new TituloEleitor();
                
                titEleitor.setRegistro(rs.getString("registro"));
                titEleitor.setZona(rs.getString("zona"));
                titEleitor.setSecao(rs.getString("secao"));
                
                Cidade cid = cidDAO.getCidadeById(rs.getInt("idCidade"));
                titEleitor.setIdCidade(cid.getId());
                titEleitor.setNomeCidade(cid.getNome());
                titEleitor.setIdEstadoCidade(cid.getIdEstado());
                titEleitor.setNomeEstadoCidade(cid.getNomeEstado());
                titEleitor.setSiglaEstadoCidade(cid.getSiglaEstado());
                titEleitor.setIdRegiaoEstadoCidade(cid.getIdRegiaoEstado());
                titEleitor.setNomeRegiaoEstadoCidade(cid.getNomeRegiaoEstado());
                
                Aluno al = alDAO.getAlunoByIdentidade(rs.getString("idtAluno"));
                titEleitor.setIdentidadeAluno(al.getIdentidade());
                titEleitor.setSituacaoAluno(al.getSituacao());
                titEleitor.setIdPostoGraduacaoAluno(al.getIdPostoGraduacao());
                titEleitor.setIdQasQmsAluno(al.getIdQasQms());
                titEleitor.setIdCmtAluno(al.getIdCmt());
                titEleitor.setDataNascimentoAluno(al.getDataNascimento());
                titEleitor.setNomeAluno(al.getNome());
                titEleitor.setSobrenomeAluno(al.getSobrenome());
                titEleitor.setNomeguerraAluno(al.getNomeguerra());
                titEleitor.setPreccpAluno(al.getPreccp());
                titEleitor.setCpAluno(al.getCp());
                titEleitor.setCpfAluno(al.getCpf());
                titEleitor.setUltDataPracaAluno(al.getUltDataPraca());
                titEleitor.setIdNatCidadeAluno(al.getIdNatCidade());
                titEleitor.setIdEstadoCivilAluno(al.getIdEstadoCivil());
                titEleitor.setTsAluno(al.getTs());
                titEleitor.setFtrhAluno(al.getFtrh());
                titEleitor.setPaiAluno(al.getPai());
                titEleitor.setMaeAluno(al.getMae());
                titEleitor.setEmailAluno(al.getEmail());
                titEleitor.setFumanteAluno(al.getFumante());
                titEleitor.setIdOMAluno(al.getIdOM());
                titEleitor.setIdComportamentoAluno(al.getIdComportamento());
                titEleitor.setIdChImtoAluno(al.getIdChImto());
                titEleitor.setSexoAluno(al.getSexo());
                titEleitor.setUltfuncao1Aluno(al.getUltfuncao1());
                titEleitor.setUltfuncao2Aluno(al.getUltfuncao2());
                titEleitor.setUltfuncao3Aluno(al.getUltfuncao3());
                titEleitor.setIdTafAluno(al.getIdTaf());
                titEleitor.setIdPromocaoAluno(al.getIdPromocao());
                titEleitor.setIdPreparacaoAluno(al.getIdPreparacao());
                titEleitor.setIdUniformeAluno(al.getIdUniforme());
                titEleitor.setEasAluno(al.getEas());
                
                titulos.add(titEleitor);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return titulos;
    }
}
