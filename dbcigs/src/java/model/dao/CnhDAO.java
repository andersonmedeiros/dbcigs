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
import model.bean.Cnh;

/**
 *
 * @author anderson
 */
public class CnhDAO {
    //Tabela
    String tabela = "dbcigs_cnh";
    
    //Atributos
    String numero = "numero";
    String categoria = "categoria";
    String datavalidade = "datavalidade";
    String idtMilitar = "dbcigs_militar_idtmilitar";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + numero + "," + categoria + "," + datavalidade +  "," + idtMilitar + ")" +
                                  " VALUES(?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + numero + "=?, " + categoria + "=?, " + datavalidade + "=? " +
                                  "WHERE " + idtMilitar + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + idtMilitar + "=?;";
    
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
                pstm.setString(4, cnh.getIdtMilitar());
                
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
                
                pstm.setString(1, cnh.getNumero());
                pstm.setString(2, cnh.getCategoria());
                pstm.setDate(3, cnh.getDataValidade());
                pstm.setString(4, cnh.getIdtMilitar());
                
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
        if (idtmilitar != null){
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
    
    private final String GETEXISTECNHBYIDTMILITAR = "SELECT * " +
                                                    "FROM " + tabela + " " +
                                                    "WHERE dbcigs_militar_idtmilitar = ?;";
    
    public boolean cnhExiste(String idtmilitar){
        boolean existe = false;
        
        try{
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETEXISTECNHBYIDTMILITAR);
            pstm.setString(1, idtmilitar);
            rs = pstm.executeQuery();
        
            while (rs.next()) {
               if(rs.getInt("dbcigs_militar_idtmilitar") != 0){
                   existe = true;
               }
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        }catch(SQLException e){
            throw new RuntimeException(e.getMessage());
        }
        return existe;
    }
    
    private final String GETCNHBYNUM = "SELECT * " +
                                        "FROM " + tabela + " " +
                                        "WHERE numero = ?";
       
    public Cnh getCnhByNum(String numero){
        Cnh cnh = new Cnh();
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCNHBYNUM);
            pstm.setString(1, numero);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                cnh.setNumero(rs.getString("numero"));
                cnh.setCategoria(rs.getString("categoria"));
                cnh.setDataValidade(rs.getDate("datavalidade"));               
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                cnh.setIdtMilitar(mil.getIdtMilitar());
                cnh.setSituacaoMilitar(mil.getSituacao());
                cnh.setIdtCivilMilitar(mil.getIdtCivil());
                cnh.setCpfMilitar(mil.getCpf());
                cnh.setCpMilitar(mil.getCp());
                cnh.setPreccpMilitar(mil.getPreccp());
                cnh.setNomeMilitar(mil.getNome());
                cnh.setSobrenomeMilitar(mil.getSobrenome());
                cnh.setNomeGuerraMilitar(mil.getNomeGuerra());
                cnh.setSexoMilitar(mil.getSexo());
                cnh.setPaiMilitar(mil.getPai());
                cnh.setMaeMilitar(mil.getMae());
                cnh.setDataNascimentoMilitar(mil.getDataNascimento());
                cnh.setDataPracaMilitar(mil.getDataPraca());
                cnh.setTsMilitar(mil.getTs());
                cnh.setFtrhMilitar(mil.getFtrh());
                cnh.setEmailMilitar(mil.getEmail());
                cnh.setFamiliarContatoMilitar(mil.getFamiliarContato());
                cnh.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                cnh.setSenhaMilitar(mil.getSenha());
                cnh.setEndNumMilitar(mil.getEndNum());
                
                cnh.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                cnh.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                cnh.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                cnh.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                cnh.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                cnh.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                cnh.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                cnh.setIdReligiaoMilitar(mil.getIdReligiao());
                cnh.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                cnh.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                cnh.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                cnh.setIdQasMilitar(mil.getIdQas());
                cnh.setNomeQasMilitar(mil.getNomeQas());
                cnh.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                cnh.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                cnh.setDescricaoPostoGraduacaoMilitar(mil.getDescricaoPostoGraduacao());
                cnh.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                cnh.setIdSetorMilitar(mil.getIdSetor());
                cnh.setNomeSetorMilitar(mil.getNomeSetor());
                cnh.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                cnh.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                cnh.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                cnh.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                cnh.setIdComportamentoMilitar(mil.getIdComportamento());
                cnh.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                cnh.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                cnh.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return cnh;
    }
    
    private final String GETCNHBYIDTMILITAR = "SELECT * " +
                                            "FROM " + tabela + " " +
                                            "WHERE dbcigs_militar_idtmilitar = ?";
       
    public Cnh getCnhByIdtMilitar(String idtMilitar){
        Cnh cnh = new Cnh();
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCNHBYIDTMILITAR);
            pstm.setString(1, idtMilitar);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                cnh.setNumero(rs.getString("numero"));
                cnh.setCategoria(rs.getString("categoria"));
                cnh.setDataValidade(rs.getDate("datavalidade"));               
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                cnh.setIdtMilitar(mil.getIdtMilitar());
                cnh.setSituacaoMilitar(mil.getSituacao());
                cnh.setIdtCivilMilitar(mil.getIdtCivil());
                cnh.setCpfMilitar(mil.getCpf());
                cnh.setCpMilitar(mil.getCp());
                cnh.setPreccpMilitar(mil.getPreccp());
                cnh.setNomeMilitar(mil.getNome());
                cnh.setSobrenomeMilitar(mil.getSobrenome());
                cnh.setNomeGuerraMilitar(mil.getNomeGuerra());
                cnh.setSexoMilitar(mil.getSexo());
                cnh.setPaiMilitar(mil.getPai());
                cnh.setMaeMilitar(mil.getMae());
                cnh.setDataNascimentoMilitar(mil.getDataNascimento());
                cnh.setDataPracaMilitar(mil.getDataPraca());
                cnh.setTsMilitar(mil.getTs());
                cnh.setFtrhMilitar(mil.getFtrh());
                cnh.setEmailMilitar(mil.getEmail());
                cnh.setFamiliarContatoMilitar(mil.getFamiliarContato());
                cnh.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                cnh.setSenhaMilitar(mil.getSenha());
                cnh.setEndNumMilitar(mil.getEndNum());
                
                cnh.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                cnh.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                cnh.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                cnh.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                cnh.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                cnh.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                cnh.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                cnh.setIdReligiaoMilitar(mil.getIdReligiao());
                cnh.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                cnh.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                cnh.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                cnh.setIdQasMilitar(mil.getIdQas());
                cnh.setNomeQasMilitar(mil.getNomeQas());
                cnh.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                cnh.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                cnh.setDescricaoPostoGraduacaoMilitar(mil.getDescricaoPostoGraduacao());
                cnh.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                cnh.setIdSetorMilitar(mil.getIdSetor());
                cnh.setNomeSetorMilitar(mil.getNomeSetor());
                cnh.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                cnh.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                cnh.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                cnh.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                cnh.setIdComportamentoMilitar(mil.getIdComportamento());
                cnh.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                cnh.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                cnh.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return cnh;
    }
    private final static String GETCNHBYIDTMILITARDWR = "SELECT * " +
                                                "FROM dbcigs_cnh " +
                                                "WHERE dbcigs_militar_idtmilitar = ?";
       
    public static Cnh getCnhByIdtMilitarDWR(String idtMilitar){
        Cnh cnh = new Cnh();
        MilitarDAO milDAO = new MilitarDAO();
        
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCNHBYIDTMILITARDWR);
            pstm.setString(1, idtMilitar);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                cnh.setNumero(rs.getString("numero"));
                cnh.setCategoria(rs.getString("categoria"));
                cnh.setDataValidade(rs.getDate("datavalidade"));               
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                cnh.setIdtMilitar(mil.getIdtMilitar());
                cnh.setSituacaoMilitar(mil.getSituacao());
                cnh.setIdtCivilMilitar(mil.getIdtCivil());
                cnh.setCpfMilitar(mil.getCpf());
                cnh.setCpMilitar(mil.getCp());
                cnh.setPreccpMilitar(mil.getPreccp());
                cnh.setNomeMilitar(mil.getNome());
                cnh.setSobrenomeMilitar(mil.getSobrenome());
                cnh.setNomeGuerraMilitar(mil.getNomeGuerra());
                cnh.setSexoMilitar(mil.getSexo());
                cnh.setPaiMilitar(mil.getPai());
                cnh.setMaeMilitar(mil.getMae());
                cnh.setDataNascimentoMilitar(mil.getDataNascimento());
                cnh.setDataPracaMilitar(mil.getDataPraca());
                cnh.setTsMilitar(mil.getTs());
                cnh.setFtrhMilitar(mil.getFtrh());
                cnh.setEmailMilitar(mil.getEmail());
                cnh.setFamiliarContatoMilitar(mil.getFamiliarContato());
                cnh.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                cnh.setSenhaMilitar(mil.getSenha());
                cnh.setEndNumMilitar(mil.getEndNum());
                
                cnh.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                cnh.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                cnh.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                cnh.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                cnh.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                cnh.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                cnh.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                cnh.setIdReligiaoMilitar(mil.getIdReligiao());
                cnh.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                cnh.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                cnh.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                cnh.setIdQasMilitar(mil.getIdQas());
                cnh.setNomeQasMilitar(mil.getNomeQas());
                cnh.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                cnh.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                cnh.setDescricaoPostoGraduacaoMilitar(mil.getDescricaoPostoGraduacao());
                cnh.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                cnh.setIdSetorMilitar(mil.getIdSetor());
                cnh.setNomeSetorMilitar(mil.getNomeSetor());
                cnh.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                cnh.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                cnh.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                cnh.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                cnh.setIdComportamentoMilitar(mil.getIdComportamento());
                cnh.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                cnh.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                cnh.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
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
        MilitarDAO milDAO = new MilitarDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETCNHS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Cnh cnh = new Cnh();
                
                cnh.setNumero(rs.getString("numero"));
                cnh.setCategoria(rs.getString("categoria"));
                cnh.setDataValidade(rs.getDate("datavalidade"));               
                
                Militar mil = milDAO.getMilitarByIdtMilitar(rs.getString("dbcigs_militar_idtmilitar"));
                cnh.setIdtMilitar(mil.getIdtMilitar());
                cnh.setSituacaoMilitar(mil.getSituacao());
                cnh.setIdtCivilMilitar(mil.getIdtCivil());
                cnh.setCpfMilitar(mil.getCpf());
                cnh.setCpMilitar(mil.getCp());
                cnh.setPreccpMilitar(mil.getPreccp());
                cnh.setNomeMilitar(mil.getNome());
                cnh.setSobrenomeMilitar(mil.getSobrenome());
                cnh.setNomeGuerraMilitar(mil.getNomeGuerra());
                cnh.setSexoMilitar(mil.getSexo());
                cnh.setPaiMilitar(mil.getPai());
                cnh.setMaeMilitar(mil.getMae());
                cnh.setDataNascimentoMilitar(mil.getDataNascimento());
                cnh.setDataPracaMilitar(mil.getDataPraca());
                cnh.setTsMilitar(mil.getTs());
                cnh.setFtrhMilitar(mil.getFtrh());
                cnh.setEmailMilitar(mil.getEmail());
                cnh.setFamiliarContatoMilitar(mil.getFamiliarContato());
                cnh.setFoneFamiliarContatoMilitar(mil.getFoneFamiliarContato());
                cnh.setSenhaMilitar(mil.getSenha());
                cnh.setEndNumMilitar(mil.getEndNum());
                
                cnh.setIdCidadeNaturalidadeMilitar(mil.getIdCidadeNaturalidade());
                cnh.setNomeCidadeNaturalidadeMilitar(mil.getNomeCidadeNaturalidade());
                cnh.setIdEstadoNaturalidadeMilitar(mil.getIdEstadoNaturalidade());
                cnh.setNomeEstadoNaturalidadeMilitar(mil.getNomeEstadoNaturalidade());
                cnh.setSiglaEstadoNaturalidadeMilitar(mil.getSiglaEstadoNaturalidade());
                
                cnh.setIdEscolaridadeMilitar(mil.getIdEscolaridade());
                cnh.setNomeEscolaridadeMilitar(mil.getNomeEscolaridade());
                
                cnh.setIdReligiaoMilitar(mil.getIdReligiao());
                cnh.setNomeReligiaoMilitar(mil.getNomeReligiao());
                
                cnh.setIdEstadoCivilMilitar(mil.getIdEstadoCivil());
                cnh.setNomeEstadoCivilMilitar(mil.getNomeEstadoCivil());
                
                cnh.setIdQasMilitar(mil.getIdQas());
                cnh.setNomeQasMilitar(mil.getNomeQas());
                cnh.setAbreviaturaQasMilitar(mil.getAbreviaturaQas());
                
                cnh.setIdPostoGraduacaoMilitar(mil.getIdPostoGraduacao());
                cnh.setDescricaoPostoGraduacaoMilitar(mil.getDescricaoPostoGraduacao());
                cnh.setAbreviaturaPostoGraduacaoMilitar(mil.getAbreviaturaPostoGraduacao());
                
                cnh.setIdSetorMilitar(mil.getIdSetor());
                cnh.setNomeSetorMilitar(mil.getNomeSetor());
                cnh.setAbreviaturaSetorMilitar(mil.getAbreviaturaSetor());
                cnh.setIdDivisaoSecaoMilitar(mil.getIdDivisaoSecao());
                cnh.setNomeDivisaoSecaoMilitar(mil.getNomeDivisaoSecao());
                cnh.setAbreviaturaDivisaoSecaoMilitar(mil.getAbreviaturaDivisaoSecao());
                
                cnh.setIdComportamentoMilitar(mil.getIdComportamento());
                cnh.setNomeComportamentoMilitar(mil.getNomeComportamento());
                
                cnh.setIdGrupoAcessoMilitar(mil.getIdGrupoAcesso());
                cnh.setNomeGrupoAcessoMilitar(mil.getNomeGrupoAcesso());
                
                cnhs.add(cnh);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return cnhs;
    }
}
