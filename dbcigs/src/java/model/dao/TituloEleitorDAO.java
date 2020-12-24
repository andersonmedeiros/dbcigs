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
import model.bean.Cidade;
import model.bean.TituloEleitor;

/**
 *
 * @author anderson
 */
public class TituloEleitorDAO {
    //Tabela
    String tabela = "dbcigs_tituloeleitor";
    
    //Atributos
    String registro = "registro";
    String zona = "zona";
    String secao = "secao";
    String idCidade = "dbcigs_cidade_id";
    String idtMilitar = "dbcigs_militar_idtmilitar";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + registro + "," + zona + "," + secao + "," + idCidade + "," + idtMilitar + ")" +
                                  " VALUES(?,?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + zona + "=?, " + secao + "=?, " + idCidade + "=?, " + idtMilitar + "=? " +
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
                pstm.setString(5, titeleitor.getIdtMilitar());
                
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
                pstm.setString(4, titeleitor.getIdtMilitar());
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
                                                      "FROM " + tabela + " " +
                                                      "WHERE registro = ?";
       
    public TituloEleitor getTituloEleitorByRegistro(String registro){
        TituloEleitor titEleitor = new TituloEleitor();
        CidadeDAO cidDAO = new CidadeDAO();
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETTITULOELEITORBYREGISTRO);
            pstm.setString(1, registro);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                titEleitor.setRegistro(rs.getString("registro"));
                titEleitor.setZona(rs.getString("zona"));
                titEleitor.setSecao(rs.getString("secao"));
                
                Cidade cid = cidDAO.getCidadeById(rs.getInt("dbcigs_cidade_id"));
                titEleitor.setIdCidade(cid.getId());
                titEleitor.setNomeCidade(cid.getNome());
                titEleitor.setIdEstadoCidade(cid.getIdEstado());
                titEleitor.setNomeEstadoCidade(cid.getNomeEstado());
                titEleitor.setSiglaEstadoCidade(cid.getSiglaEstado());         
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                titEleitor.setIdtMilitar(mil.getIdtMilitar());
                titEleitor.setSituacaoMilitar(mil.getSituacao());
                titEleitor.setIdtCivilMilitar(mil.getIdtCivil());
                titEleitor.setCpfMilitar(mil.getCpf());
                titEleitor.setCpMilitar(mil.getCp());
                titEleitor.setPreccpMilitar(mil.getPreccp());
                titEleitor.setNomeMilitar(mil.getNome());
                titEleitor.setSobrenomeMilitar(mil.getSobrenome());
                titEleitor.setNomeGuerraMilitar(mil.getNomeGuerra());
                titEleitor.setSexoMilitar(mil.getSexo());
                titEleitor.setPaiMilitar(mil.getPai());
                titEleitor.setMaeMilitar(mil.getMae());
                titEleitor.setDataNascimentoMilitar(mil.getDataNascimento());
                titEleitor.setDataPracaMilitar(mil.getDataPraca());
                titEleitor.setTsMilitar(mil.getTs());
                titEleitor.setFtrhMilitar(mil.getFtrh());
                titEleitor.setEmailMilitar(mil.getEmail());
                titEleitor.setFamiliarContatoMilitar(mil.getFamiliarContato());
                titEleitor.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                titEleitor.setSenhaMilitar(mil.getSenha());
                titEleitor.setEndNumMilitar(mil.getEndNum());
                
                titEleitor.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                titEleitor.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                titEleitor.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                titEleitor.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                titEleitor.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                titEleitor.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                titEleitor.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                titEleitor.setIdReligiaoMilitar(mil.getIdReligiao());
                titEleitor.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                titEleitor.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                titEleitor.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                titEleitor.setIdQasMilitar(mil.getIdQas());
                titEleitor.setNomeQasMilitar(mil.getNomeQas());
                titEleitor.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                titEleitor.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                titEleitor.setNomePostoGraduacaoMilitar(mil.getNomePostoGraduacao());
                titEleitor.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                titEleitor.setIdSetorMilitar(mil.getIdSetor());
                titEleitor.setNomeSetorMilitar(mil.getNomeSetor());
                titEleitor.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                titEleitor.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                titEleitor.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                titEleitor.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                titEleitor.setIdComportamentoMilitar(mil.getIdComportamento());
                titEleitor.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                titEleitor.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                titEleitor.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return titEleitor;
    }
    
    private final String GETTITULOELEITORBYIDTMILITAR = "SELECT * " +
                                                      "FROM " + tabela + " " +
                                                      "WHERE dbcigs_militar_idtmilitar = ?";
       
    public TituloEleitor getTituloEleitorByIdtMilitar(int idtMilitar){
        TituloEleitor titEleitor = new TituloEleitor();
        CidadeDAO cidDAO = new CidadeDAO();
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETTITULOELEITORBYIDTMILITAR);
            pstm.setInt(1, idtMilitar);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                titEleitor.setRegistro(rs.getString("registro"));
                titEleitor.setZona(rs.getString("zona"));
                titEleitor.setSecao(rs.getString("secao"));
                
                Cidade cid = cidDAO.getCidadeById(rs.getInt("dbcigs_cidade_id"));
                titEleitor.setIdCidade(cid.getId());
                titEleitor.setNomeCidade(cid.getNome());
                titEleitor.setIdEstadoCidade(cid.getIdEstado());
                titEleitor.setNomeEstadoCidade(cid.getNomeEstado());
                titEleitor.setSiglaEstadoCidade(cid.getSiglaEstado());         
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                titEleitor.setIdtMilitar(mil.getIdtMilitar());
                titEleitor.setSituacaoMilitar(mil.getSituacao());
                titEleitor.setIdtCivilMilitar(mil.getIdtCivil());
                titEleitor.setCpfMilitar(mil.getCpf());
                titEleitor.setCpMilitar(mil.getCp());
                titEleitor.setPreccpMilitar(mil.getPreccp());
                titEleitor.setNomeMilitar(mil.getNome());
                titEleitor.setSobrenomeMilitar(mil.getSobrenome());
                titEleitor.setNomeGuerraMilitar(mil.getNomeGuerra());
                titEleitor.setSexoMilitar(mil.getSexo());
                titEleitor.setPaiMilitar(mil.getPai());
                titEleitor.setMaeMilitar(mil.getMae());
                titEleitor.setDataNascimentoMilitar(mil.getDataNascimento());
                titEleitor.setDataPracaMilitar(mil.getDataPraca());
                titEleitor.setTsMilitar(mil.getTs());
                titEleitor.setFtrhMilitar(mil.getFtrh());
                titEleitor.setEmailMilitar(mil.getEmail());
                titEleitor.setFamiliarContatoMilitar(mil.getFamiliarContato());
                titEleitor.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                titEleitor.setSenhaMilitar(mil.getSenha());
                titEleitor.setEndNumMilitar(mil.getEndNum());
                
                titEleitor.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                titEleitor.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                titEleitor.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                titEleitor.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                titEleitor.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                titEleitor.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                titEleitor.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                titEleitor.setIdReligiaoMilitar(mil.getIdReligiao());
                titEleitor.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                titEleitor.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                titEleitor.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                titEleitor.setIdQasMilitar(mil.getIdQas());
                titEleitor.setNomeQasMilitar(mil.getNomeQas());
                titEleitor.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                titEleitor.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                titEleitor.setNomePostoGraduacaoMilitar(mil.getNomePostoGraduacao());
                titEleitor.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                titEleitor.setIdSetorMilitar(mil.getIdSetor());
                titEleitor.setNomeSetorMilitar(mil.getNomeSetor());
                titEleitor.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                titEleitor.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                titEleitor.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                titEleitor.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                titEleitor.setIdComportamentoMilitar(mil.getIdComportamento());
                titEleitor.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                titEleitor.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                titEleitor.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
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
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETTITULOS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                TituloEleitor titEleitor = new TituloEleitor();
                
                titEleitor.setRegistro(rs.getString("registro"));
                titEleitor.setZona(rs.getString("zona"));
                titEleitor.setSecao(rs.getString("secao"));
                
                Cidade cid = cidDAO.getCidadeById(rs.getInt("dbcigs_cidade_id"));
                titEleitor.setIdCidade(cid.getId());
                titEleitor.setNomeCidade(cid.getNome());
                titEleitor.setIdEstadoCidade(cid.getIdEstado());
                titEleitor.setNomeEstadoCidade(cid.getNomeEstado());
                titEleitor.setSiglaEstadoCidade(cid.getSiglaEstado());         
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                titEleitor.setIdtMilitar(mil.getIdtMilitar());
                titEleitor.setSituacaoMilitar(mil.getSituacao());
                titEleitor.setIdtCivilMilitar(mil.getIdtCivil());
                titEleitor.setCpfMilitar(mil.getCpf());
                titEleitor.setCpMilitar(mil.getCp());
                titEleitor.setPreccpMilitar(mil.getPreccp());
                titEleitor.setNomeMilitar(mil.getNome());
                titEleitor.setSobrenomeMilitar(mil.getSobrenome());
                titEleitor.setNomeGuerraMilitar(mil.getNomeGuerra());
                titEleitor.setSexoMilitar(mil.getSexo());
                titEleitor.setPaiMilitar(mil.getPai());
                titEleitor.setMaeMilitar(mil.getMae());
                titEleitor.setDataNascimentoMilitar(mil.getDataNascimento());
                titEleitor.setDataPracaMilitar(mil.getDataPraca());
                titEleitor.setTsMilitar(mil.getTs());
                titEleitor.setFtrhMilitar(mil.getFtrh());
                titEleitor.setEmailMilitar(mil.getEmail());
                titEleitor.setFamiliarContatoMilitar(mil.getFamiliarContato());
                titEleitor.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                titEleitor.setSenhaMilitar(mil.getSenha());
                titEleitor.setEndNumMilitar(mil.getEndNum());
                
                titEleitor.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                titEleitor.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                titEleitor.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                titEleitor.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                titEleitor.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                titEleitor.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                titEleitor.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                titEleitor.setIdReligiaoMilitar(mil.getIdReligiao());
                titEleitor.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                titEleitor.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                titEleitor.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                titEleitor.setIdQasMilitar(mil.getIdQas());
                titEleitor.setNomeQasMilitar(mil.getNomeQas());
                titEleitor.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                titEleitor.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                titEleitor.setNomePostoGraduacaoMilitar(mil.getNomePostoGraduacao());
                titEleitor.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                titEleitor.setIdSetorMilitar(mil.getIdSetor());
                titEleitor.setNomeSetorMilitar(mil.getNomeSetor());
                titEleitor.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                titEleitor.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                titEleitor.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                titEleitor.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                titEleitor.setIdComportamentoMilitar(mil.getIdComportamento());
                titEleitor.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                titEleitor.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                titEleitor.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
                
                titulos.add(titEleitor);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return titulos;
    }
}
