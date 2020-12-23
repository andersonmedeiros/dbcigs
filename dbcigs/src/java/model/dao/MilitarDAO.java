/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.dao;

import model.bean.Militar;
import connection.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import model.bean.PostoGraduacao;

/**
 *
 * @author anderson
 */
public class MilitarDAO {
    //Tabela
    String tabela = "Militar";
    
    //Atributos
    String identidade = "identidade";
    String nome = "nome";
    String sobrenome = "sobrenome";
    String nomeguerra = "nomeguerra";
    String ngs = "ngs";
    String senha = "senha";
    String idPostoGraduacao = "idPostoGraduacao";
    String situacao = "situacao";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + identidade + "," + nome + "," + sobrenome +  "," + nomeguerra + "," + ngs +  "," + senha +  "," + idPostoGraduacao + "," +situacao + ")" +
                                  " VALUES(?,?,?,?,?,md5(?),?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + nome + "=?, " + sobrenome + "=?, " + nomeguerra + "=?, " + ngs + "=?, " + idPostoGraduacao + "=? " +
                                  "WHERE " + identidade + "=?;";
    
    private final String UPDATESENHA = "UPDATE " + tabela +
                                  " SET " + senha + "=md5(?) " +
                                  "WHERE " + identidade + "=?;";
    
    private final String UPDATESITUACAO = "UPDATE " + tabela +
                                  " SET " + situacao + "=? " +
                                  "WHERE " + identidade + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + identidade + "=?;";
    
    //Consultas SQL
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    //Insert SQL
    public void insert(Militar mil) {
        if (mil != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setString(1, mil.getIdentidade());
                pstm.setString(2, mil.getNome());
                pstm.setString(3, mil.getSobrenome());
                pstm.setString(4, mil.getNomeguerra());
                pstm.setInt(5, mil.getNgs());
                pstm.setString(6, mil.getSenha());
                pstm.setInt(7, mil.getIdPostoGraduacao());
                pstm.setInt(8, mil.getSituacao());
                
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
    public void update(Militar mil) {
        if (mil != null) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATE); 
                
                pstm.setString(1, mil.getNome());
                pstm.setString(2, mil.getSobrenome());
                pstm.setString(3, mil.getNomeguerra());
                pstm.setInt(4, mil.getNgs());
                System.out.println(mil.getNgs());
                pstm.setInt(5, mil.getIdPostoGraduacao());
                pstm.setString(6, mil.getIdentidade());
                
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
    public void updateSenha(String senha, String idtMilitar) {
        if (senha != "") {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATESENHA); 
                
                pstm.setString(1, senha);
                pstm.setString(2, idtMilitar);
                
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
    public void updateSituacao(int situacao, String idtMilitar) {
        if (situacao >= 0) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATESITUACAO); 
                
                pstm.setInt(1, situacao);
                pstm.setString(2, idtMilitar);
                
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
    public void delete(int identidade) {
        if (identidade != 0){
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(DELETE);
                pstm.setInt(1, identidade);
            
                pstm.execute();
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {            
            throw new RuntimeException();
        }
    }
    
    private final String GETMILITARBYIDT = "SELECT * " +
                                            "FROM Militar " + 
                                            "WHERE identidade = ?";
       
    public Militar getMilitarById(int identidade){
        Militar mil = new Militar();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETMILITARBYIDT);
            pstm.setInt(1, identidade);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                mil.setIdentidade(rs.getString("identidade"));
                mil.setNome(rs.getString("nome"));
                mil.setSobrenome(rs.getString("sobrenome"));                         
                mil.setNomeguerra(rs.getString("nomeguerra"));               
                mil.setNgs(rs.getInt("ngs"));               
                mil.setSenha(rs.getString("senha"));               
                mil.setSituacao(rs.getInt("situacao"));               
                
                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("idPostoGraduacao"));
                mil.setIdPostoGraduacao(pg.getId());
                mil.setNomePostoGraduacao(pg.getNome());
                mil.setAbreviaturaPostoGraduacao(pg.getAbreviatura());
                mil.setCirculohierarquicoPostoGraduacao(pg.getCirculohierarquico());                
                mil.setIdForcaPostoGraduacao(pg.getIdForca());
                mil.setNomeForcaPostoGraduacao(pg.getNomeForca());
                mil.setSiglaForcaPostoGraduacao(pg.getSiglaForca());
                mil.setIdTipoForcaPostoGraduacao(pg.getIdTipoForca());
                mil.setNomeTipoForcaPostoGraduacao(pg.getNomeTipoForca());
                mil.setIdCategoriaPostoGraduacao(pg.getIdCategoria());
                mil.setNomeCategoriaPostoGraduacao(pg.getNomeCategoria());
                mil.setDescricaoCategoriaPostoGraduacao(pg.getDescricaoCategoria());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return mil;
    }  
    
    private final String GETMILITARES = "SELECT * " +
                                        "FROM " + tabela;
       
    public ArrayList<Militar> getMilitares(){
        ArrayList<Militar> militares = new ArrayList<>();  
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETMILITARES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Militar mil = new Militar();
                
                mil.setIdentidade(rs.getString("identidade"));
                mil.setNome(rs.getString("nome"));
                mil.setSobrenome(rs.getString("sobrenome"));                         
                mil.setNomeguerra(rs.getString("nomeguerra"));               
                mil.setNgs(rs.getInt("ngs"));               
                mil.setSenha(rs.getString("senha"));                  
                mil.setSituacao(rs.getInt("situacao"));          
                
                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("idPostoGraduacao"));
                mil.setIdPostoGraduacao(pg.getId());
                mil.setNomePostoGraduacao(pg.getNome());
                mil.setAbreviaturaPostoGraduacao(pg.getAbreviatura());
                mil.setCirculohierarquicoPostoGraduacao(pg.getCirculohierarquico());                
                mil.setIdForcaPostoGraduacao(pg.getIdForca());
                mil.setNomeForcaPostoGraduacao(pg.getNomeForca());
                mil.setSiglaForcaPostoGraduacao(pg.getSiglaForca());
                mil.setIdTipoForcaPostoGraduacao(pg.getIdTipoForca());
                mil.setNomeTipoForcaPostoGraduacao(pg.getNomeTipoForca());
                mil.setIdCategoriaPostoGraduacao(pg.getIdCategoria());
                mil.setNomeCategoriaPostoGraduacao(pg.getNomeCategoria());
                mil.setDescricaoCategoriaPostoGraduacao(pg.getDescricaoCategoria());
                
                militares.add(mil);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return militares;
    }
    private final String GETMILITARESATIVOS = "SELECT * " +
                                        "FROM " + tabela + " WHERE situacao = 1";
       
    public ArrayList<Militar> getMilitaresAtivos(){
        ArrayList<Militar> militares = new ArrayList<>();  
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETMILITARESATIVOS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Militar mil = new Militar();
                
                mil.setIdentidade(rs.getString("identidade"));
                mil.setNome(rs.getString("nome"));
                mil.setSobrenome(rs.getString("sobrenome"));                         
                mil.setNomeguerra(rs.getString("nomeguerra"));               
                mil.setNgs(rs.getInt("ngs"));               
                mil.setSenha(rs.getString("senha"));                  
                mil.setSituacao(rs.getInt("situacao"));          
                
                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("idPostoGraduacao"));
                mil.setIdPostoGraduacao(pg.getId());
                mil.setNomePostoGraduacao(pg.getNome());
                mil.setAbreviaturaPostoGraduacao(pg.getAbreviatura());
                mil.setCirculohierarquicoPostoGraduacao(pg.getCirculohierarquico());                
                mil.setIdForcaPostoGraduacao(pg.getIdForca());
                mil.setNomeForcaPostoGraduacao(pg.getNomeForca());
                mil.setSiglaForcaPostoGraduacao(pg.getSiglaForca());
                mil.setIdTipoForcaPostoGraduacao(pg.getIdTipoForca());
                mil.setNomeTipoForcaPostoGraduacao(pg.getNomeTipoForca());
                mil.setIdCategoriaPostoGraduacao(pg.getIdCategoria());
                mil.setNomeCategoriaPostoGraduacao(pg.getNomeCategoria());
                mil.setDescricaoCategoriaPostoGraduacao(pg.getDescricaoCategoria());
                
                militares.add(mil);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return militares;
    }
    private final String GETMILITARESINATIVOS = "SELECT * " +
                                        "FROM " + tabela + " WHERE situacao = 0";
       
    public ArrayList<Militar> getMilitaresInativos(){
        ArrayList<Militar> militares = new ArrayList<>();  
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETMILITARESINATIVOS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Militar mil = new Militar();
                
                mil.setIdentidade(rs.getString("identidade"));
                mil.setNome(rs.getString("nome"));
                mil.setSobrenome(rs.getString("sobrenome"));                         
                mil.setNomeguerra(rs.getString("nomeguerra"));               
                mil.setNgs(rs.getInt("ngs"));               
                mil.setSenha(rs.getString("senha"));                  
                mil.setSituacao(rs.getInt("situacao"));          
                
                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("idPostoGraduacao"));
                mil.setIdPostoGraduacao(pg.getId());
                mil.setNomePostoGraduacao(pg.getNome());
                mil.setAbreviaturaPostoGraduacao(pg.getAbreviatura());
                mil.setCirculohierarquicoPostoGraduacao(pg.getCirculohierarquico());                
                mil.setIdForcaPostoGraduacao(pg.getIdForca());
                mil.setNomeForcaPostoGraduacao(pg.getNomeForca());
                mil.setSiglaForcaPostoGraduacao(pg.getSiglaForca());
                mil.setIdTipoForcaPostoGraduacao(pg.getIdTipoForca());
                mil.setNomeTipoForcaPostoGraduacao(pg.getNomeTipoForca());
                mil.setIdCategoriaPostoGraduacao(pg.getIdCategoria());
                mil.setNomeCategoriaPostoGraduacao(pg.getNomeCategoria());
                mil.setDescricaoCategoriaPostoGraduacao(pg.getDescricaoCategoria());
                
                militares.add(mil);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return militares;
    }
    
    private final static String GETMILITARBYIDTDWR = "SELECT * FROM Militar WHERE identidade = ?";
       
    public static Militar getMilitarByIdentidadeDWR(String identidade){
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        Militar mil = new Militar();
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETMILITARBYIDTDWR);
            pstm.setString(1, identidade);
           
            rs = pstm.executeQuery();
            while (rs.next()) {       
                mil.setIdentidade(rs.getString("identidade"));
                mil.setNome(rs.getString("nome"));
                mil.setSobrenome(rs.getString("sobrenome"));                         
                mil.setNomeguerra(rs.getString("nomeguerra"));               
                mil.setNgs(rs.getInt("ngs"));               
                mil.setSenha(rs.getString("senha"));                
                mil.setSituacao(rs.getInt("situacao"));            
                
                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("idPostoGraduacao"));
                mil.setIdPostoGraduacao(pg.getId());
                mil.setNomePostoGraduacao(pg.getNome());
                mil.setAbreviaturaPostoGraduacao(pg.getAbreviatura());
                mil.setCirculohierarquicoPostoGraduacao(pg.getCirculohierarquico());                
                mil.setIdForcaPostoGraduacao(pg.getIdForca());
                mil.setNomeForcaPostoGraduacao(pg.getNomeForca());
                mil.setSiglaForcaPostoGraduacao(pg.getSiglaForca());
                mil.setIdTipoForcaPostoGraduacao(pg.getIdTipoForca());
                mil.setNomeTipoForcaPostoGraduacao(pg.getNomeTipoForca());
                mil.setIdCategoriaPostoGraduacao(pg.getIdCategoria());
                mil.setNomeCategoriaPostoGraduacao(pg.getNomeCategoria());
                mil.setDescricaoCategoriaPostoGraduacao(pg.getDescricaoCategoria());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return mil;
    }
    
    //Consultas SQL
    private final String GETIDTSENHA = "SELECT " + identidade + "," + senha + " FROM " + tabela + " WHERE " + identidade + "=? AND " + senha + "=md5(?)";
    private final String GETSENHA = "SELECT " + senha + " FROM " + tabela + " WHERE " + senha + "=md5(?)";
    private final String GETIDENTIDADE = "SELECT "+ identidade + " FROM "+ tabela + " WHERE " + identidade + "=?";
    
    //Validação de Login(Identidade) e senha
    public boolean validarLoginSenha(String identidade, String senha) {
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETIDTSENHA);
            pstm.setString(1, identidade);
            pstm.setString(2, senha);
            rs = pstm.executeQuery();
            while (rs.next()) {
                return true;
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());            
        }
        return false;
    }
    
    //Validação de Login(Identidade)
    public boolean validarLogin(String identidade) {       
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETIDENTIDADE);
            pstm.setString(1, identidade);
            
            rs = pstm.executeQuery();
            while (rs.next()) {
                return true;
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());            
        }
        return false;
    }
    
    //Validação de Senha
    public boolean validarSenha(String senha) {
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETSENHA);
            
            pstm.setString(1, senha);
            rs = pstm.executeQuery();
            while (rs.next()) {
                return true;
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());            
        }
        return false;
    }
    
    //Recupera os dodos do militar que está logando
    public Militar autenticacao(Militar mil){
        Militar milRetorno = null;
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        if(mil != null){
            conn = null;
            try{
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(GETMILITARBYIDT);
                pstm.setString(1, mil.getIdentidade());
                
                rs = pstm.executeQuery();
                
                if(rs.next()){
                    milRetorno = new Militar();
                    
                    milRetorno.setIdentidade(rs.getString("identidade"));
                    milRetorno.setNome(rs.getString("nome"));
                    milRetorno.setSobrenome(rs.getString("sobrenome"));
                    milRetorno.setNomeguerra(rs.getString("nomeguerra"));
                    milRetorno.setNgs(rs.getInt("ngs"));               
                    milRetorno.setSenha(rs.getString("senha"));              
                mil.setSituacao(rs.getInt("situacao"));              

                    PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("idPostoGraduacao"));
                    milRetorno.setIdPostoGraduacao(pg.getId());
                    milRetorno.setNomePostoGraduacao(pg.getNome());
                    milRetorno.setAbreviaturaPostoGraduacao(pg.getAbreviatura());
                    milRetorno.setCirculohierarquicoPostoGraduacao(pg.getCirculohierarquico());                
                    milRetorno.setIdForcaPostoGraduacao(pg.getIdForca());
                    milRetorno.setNomeForcaPostoGraduacao(pg.getNomeForca());
                    milRetorno.setSiglaForcaPostoGraduacao(pg.getSiglaForca());
                    milRetorno.setIdTipoForcaPostoGraduacao(pg.getIdTipoForca());
                    milRetorno.setNomeTipoForcaPostoGraduacao(pg.getNomeTipoForca());
                    milRetorno.setIdCategoriaPostoGraduacao(pg.getIdCategoria());
                    milRetorno.setNomeCategoriaPostoGraduacao(pg.getNomeCategoria());
                    milRetorno.setDescricaoCategoriaPostoGraduacao(pg.getDescricaoCategoria());
                }
                
                ConnectionFactory.fechaConexao(conn, pstm, rs);
            }catch(SQLException e){
                throw new RuntimeException("Erro: " + e.getMessage());
            }
        }
        return milRetorno;
    }
}
