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
import model.bean.Cidade;
import model.bean.Comportamento;
import model.bean.Endereco;
import model.bean.Escolaridade;
import model.bean.EstadoCivil;
import model.bean.GrupoAcesso;
import model.bean.PostoGraduacao;
import model.bean.Qas;
import model.bean.Religiao;
import model.bean.Setor;
import model.bean.Uniforme;

/**
 *
 * @author anderson
 */
public class MilitarDAO {
    //Tabela
    String tabela = "dbcigs_militar";
    
    //Atributos
    String idtmilitar = "idtmilitar";
    String situacao = "situacao";
    String idtcivil = "idtcivil";
    String cpf = "cpf";
    String cp = "cp";
    String preccp = "preccp";
    String nome = "nome";
    String sobrenome = "sobrenome";
    String nomeguerra = "nomeguerra";
    String sexo = "sexo";
    String pai = "pai";
    String mae = "mae";
    String datanascimento = "datanascimento";
    String datapraca = "datapraca";
    String ts = "ts";
    String ftrh = "ftrh";
    String email = "email";
    String familiarcontato = "familiarcontato";
    String fonefamiliarcontato = "fonefamiliarcontato";
    String senha = "senha";
    String endereconum = "endereconum";
    String cia = "cia";
    String idEndereco = "dbcigs_endereco_id";
    String idCidade = "dbcigs_cidade_id";
    String idEscolaridade = "dbcigs_escolaridade_id";
    String idReligiao = "dbcigs_religiao_id";
    String idEstadoCivil = "dbcigs_estadocivil_id";
    String idQas = "dbcigs_qas_id";
    String idPostoGraduacao = "dbcigs_postograduacao_id";
    String idSetor = "dbcigs_setor_id";
    String idComportamento = "dbcigs_comportamento_id";
    String idUniforme = "dbcigs_uniforme_id";
    String idGrupoAcesso = "dbcigs_grupoacesso_id";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + idtmilitar + "," + situacao + "," + idtcivil +  "," + cpf + "," + cp + "," + preccp + "," 
                                                                + nome + "," + sobrenome +  "," + nomeguerra + "," + sexo +  "," + pai + "," + mae + "," 
                                                                + datanascimento + "," + datapraca + "," + ts + "," + ftrh + "," + email + "," + familiarcontato + "," 
                                                                + fonefamiliarcontato + "," + senha + "," + endereconum + "," + cia + "," + idEndereco + "," + idCidade + "," + idEscolaridade + "," 
                                                                + idReligiao + "," + idEstadoCivil + "," + idQas + "," + idPostoGraduacao + "," + idSetor + "," 
                                                                + idComportamento + "," + idUniforme + "," + idGrupoAcesso + ")" +
                                  " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,md5(?),?,?,?,?,?,?,?,?,?,?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                  " SET " + idtcivil + "=?, " + cpf + "=?, " + cp + "=?, " + preccp + "=?, " + nome + "=?, " +
                                            sobrenome + "=?, " + nomeguerra + "=?, " + sexo + "=?, " + pai + "=?, " + mae + "=?, " +
                                            datanascimento + "=?, " + datapraca + "=?, " + ts + "=?, " + ftrh + "=?, " + email + "=?, " +
                                            familiarcontato + "=?, " + fonefamiliarcontato + "=?, " + endereconum + "=?, " + cia + "=?, " + idEndereco + "=?, " + idCidade + "=?, " + idEscolaridade + "=?, " +
                                            idReligiao + "=?, " + idEstadoCivil + "=?, " + idQas + "=?, " + idPostoGraduacao + "=?, " + idSetor + "=?, " +
                                            idComportamento + "=?, " + idUniforme + "=? " +
                                  "WHERE " + idtmilitar + "=?;";
    
    private final String UPDATESENHA = "UPDATE " + tabela +
                                  " SET " + senha + "=md5(?) " +
                                  "WHERE " + idtmilitar + "=?;";
    
    private final String UPDATESITUACAO = "UPDATE " + tabela +
                                  " SET " + situacao + "=? " +
                                  "WHERE " + idtmilitar + "=?;";
    
    private final String UPDATEGRPACESSO = "UPDATE " + tabela +
                                          " SET " + idGrupoAcesso + "=? " +
                                          "WHERE " + idtmilitar + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + idtmilitar + "=?;";
    
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
                
                pstm.setString(1, mil.getIdtMilitar());
                pstm.setInt(2, mil.getSituacao());
                pstm.setString(3, mil.getIdtCivil());
                pstm.setString(4, mil.getCpf());
                pstm.setString(5, mil.getCp());
                pstm.setString(6, mil.getPreccp());
                pstm.setString(7, mil.getNome());
                pstm.setString(8, mil.getSobrenome());
                pstm.setString(9, mil.getNomeGuerra());
                pstm.setString(10, mil.getSexo());
                pstm.setString(11, mil.getPai());
                pstm.setString(12, mil.getMae());
                pstm.setDate(13, mil.getDataNascimento());
                pstm.setDate(14, mil.getDataPraca());
                pstm.setString(15, mil.getTs());
                pstm.setString(16, mil.getFtrh());
                pstm.setString(17, mil.getEmail());
                pstm.setString(18, mil.getFamiliarContato());
                pstm.setString(19, mil.getFoneFamiliarContato());
                pstm.setString(20, mil.getSenha());
                pstm.setString(21, mil.getEndNum());
                pstm.setInt(22, mil.getCia());
                pstm.setInt(23, mil.getIdEndereco());
                pstm.setInt(24, mil.getIdCidadeNaturalidade());
                pstm.setInt(25, mil.getIdEscolaridade());
                pstm.setInt(26, mil.getIdReligiao());
                pstm.setInt(27, mil.getIdEstadoCivil());
                pstm.setInt(28, mil.getIdQas());
                pstm.setInt(29, mil.getIdPostoGraduacao());
                pstm.setInt(30, mil.getIdSetor());
                pstm.setInt(31, mil.getIdComportamento());
                pstm.setInt(32, mil.getIdUniforme());
                pstm.setInt(33, mil.getIdGrupoAcesso());
                
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
                
                pstm.setString(1, mil.getIdtCivil());
                pstm.setString(2, mil.getCpf());
                pstm.setString(3, mil.getCp());
                pstm.setString(4, mil.getPreccp());
                pstm.setString(5, mil.getNome());
                pstm.setString(6, mil.getSobrenome());
                pstm.setString(7, mil.getNomeGuerra());
                pstm.setString(8, mil.getSexo());
                pstm.setString(9, mil.getPai());
                pstm.setString(10, mil.getMae());
                pstm.setDate(11, mil.getDataNascimento());
                pstm.setDate(12, mil.getDataPraca());
                pstm.setString(13, mil.getTs());
                pstm.setString(14, mil.getFtrh());
                pstm.setString(15, mil.getEmail());
                pstm.setString(16, mil.getFamiliarContato());
                pstm.setString(17, mil.getFoneFamiliarContato());
                pstm.setString(18, mil.getEndNum());
                pstm.setInt(19, mil.getCia());
                pstm.setInt(20, mil.getIdEndereco());
                pstm.setInt(21, mil.getIdCidadeNaturalidade());
                pstm.setInt(22, mil.getIdEscolaridade());
                pstm.setInt(23, mil.getIdReligiao());
                pstm.setInt(24, mil.getIdEstadoCivil());
                pstm.setInt(25, mil.getIdQas());
                pstm.setInt(26, mil.getIdPostoGraduacao());
                pstm.setInt(27, mil.getIdSetor());
                pstm.setInt(28, mil.getIdComportamento());
                pstm.setInt(29, mil.getIdUniforme());
                pstm.setString(30, mil.getIdtMilitar());
                
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
    
//Update SQL
    public void updateGrupoAcesso(int idGrupoAcesso, String idtMilitar) {
        if (idGrupoAcesso >= 0) {
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(UPDATEGRPACESSO); 
                
                pstm.setInt(1, idGrupoAcesso);
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
                                            "FROM " + tabela + " " + 
                                            "WHERE idtmilitar = ?";
       
    public Militar getMilitarByIdtMilitar(String idtmilitar){
        Militar mil = new Militar();
        
        UniformeDAO uniDAO = new UniformeDAO();
        EnderecoDAO endDAO = new EnderecoDAO();
        CidadeDAO cidDAO = new CidadeDAO();
        EscolaridadeDAO escDAO = new EscolaridadeDAO();
        ReligiaoDAO relDAO = new ReligiaoDAO();
        EstadoCivilDAO ecDAO = new EstadoCivilDAO();
        QasDAO qasDAO = new QasDAO();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        SetorDAO setDAO = new SetorDAO();
        ComportamentoDAO compDAO = new ComportamentoDAO();
        GrupoAcessoDAO grpacessoDAO = new GrupoAcessoDAO();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETMILITARBYIDT);
            pstm.setString(1, idtmilitar);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                mil.setIdtMilitar(rs.getString("idtmilitar"));
                mil.setSituacao(rs.getInt("situacao")); 
                mil.setIdtCivil(rs.getString("idtcivil"));
                mil.setCpf(rs.getString("cpf"));
                mil.setCp(rs.getString("cp"));
                mil.setPreccp(rs.getString("preccp"));
                mil.setNome(rs.getString("nome"));
                mil.setSobrenome(rs.getString("sobrenome"));                         
                mil.setNomeGuerra(rs.getString("nomeguerra"));               
                mil.setSexo(rs.getString("sexo"));               
                mil.setPai(rs.getString("pai"));               
                mil.setMae(rs.getString("mae"));               
                mil.setDataNascimento(rs.getDate("datanascimento"));               
                mil.setDataPraca(rs.getDate("datapraca"));               
                mil.setTs(rs.getString("ts"));               
                mil.setFtrh(rs.getString("ftrh"));               
                mil.setEmail(rs.getString("email"));               
                mil.setFamiliarContato(rs.getString("familiarcontato"));               
                mil.setFoneFamiliarContato(rs.getString("fonefamiliarcontato"));               
                mil.setSenha(rs.getString("senha"));               
                mil.setEndNum(rs.getString("endereconum"));               
                mil.setCia(rs.getInt("cia"));     
                
                Uniforme uni = uniDAO.getUniformeById(rs.getInt("dbcigs_uniforme_id")); 
                mil.setIdUniforme(uni.getId());
                mil.setTamCoturnoUniforme(uni.getTamCoturno());
                mil.setTamGandolaUniforme(uni.getTamGandola());
                mil.setTamCalcaUniforme(uni.getTamCalca());
                mil.setTamCamisaCamufladaUniforme(uni.getTamCamisaCamuflada());
                
                Endereco end = endDAO.getEnderecoById(rs.getInt("dbcigs_endereco_id"));
                mil.setIdEndereco(end.getId());
                mil.setCepEndereco(end.getCep());
                mil.setBairroEndereco(end.getBairro());
                mil.setDescricaoEndereco(end.getDescricao());
                mil.setComplementoEndereco(end.getComplemento());
                mil.setPontoreferenciaEndereco(end.getPontoreferencia());
                mil.setIdCidadeEndereco(end.getIdCidade());
                mil.setNomeCidadeEndereco(end.getNomeCidade());
                mil.setIdEstadoCidadeEndereco(end.getIdEstadoCidade());
                mil.setNomeEstadoCidadeEndereco(end.getNomeEstadoCidade());
                mil.setSiglaEstadoCidadeEndereco(end.getSiglaEstadoCidade());
                
                Cidade cid = cidDAO.getCidadeById(rs.getInt("dbcigs_cidade_id"));
                mil.setIdCidadeNaturalidade(cid.getId());
                mil.setNomeCidadeNaturalidade(cid.getNome());
                mil.setIdEstadoNaturalidade(cid.getIdEstado());
                mil.setNomeEstadoNaturalidade(cid.getNomeEstado());
                mil.setSiglaEstadoNaturalidade(cid.getSiglaEstado());
                
                Escolaridade esc = escDAO.getEscolaridadeById(rs.getInt("dbcigs_escolaridade_id"));
                mil.setIdEscolaridade(esc.getId());
                mil.setNomeEscolaridade(esc.getNome());
                
                Religiao rel = relDAO.getReligiaoById(rs.getInt("dbcigs_religiao_id"));
                mil.setIdReligiao(rel.getId());
                mil.setNomeReligiao(rel.getNome());
                
                EstadoCivil ec = ecDAO.getEstadoCivilById(rs.getInt("dbcigs_estadocivil_id"));
                mil.setIdEstadoCivil(ec.getId());
                mil.setNomeEstadoCivil(ec.getNome());
                
                Qas qas = qasDAO.getQasById(rs.getInt("dbcigs_qas_id"));
                mil.setIdQas(qas.getId());
                mil.setNomeQas(qas.getNome());
                mil.setAbreviaturaQas(qas.getAbreviatura());
                
                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("dbcigs_postograduacao_id"));
                mil.setIdPostoGraduacao(pg.getId());
                mil.setDescricaoPostoGraduacao(pg.getDescricao());
                mil.setAbreviaturaPostoGraduacao(pg.getAbreviatura());
                
                Setor set = setDAO.getSetorById(rs.getInt("dbcigs_setor_id"));
                mil.setIdSetor(set.getId());
                mil.setNomeSetor(set.getNome());
                mil.setAbreviaturaSetor(set.getAbreviatura());
                mil.setIdDivisaoSecao(set.getIdDivisaoSecao());
                mil.setNomeDivisaoSecao(set.getNomeDivisaoSecao());
                mil.setAbreviaturaDivisaoSecao(set.getAbreviaturaDivisaoSecao());
                
                Comportamento comp = compDAO.getComportamentoById(rs.getInt("dbcigs_comportamento_id"));
                mil.setIdComportamento(comp.getId());
                mil.setNomeComportamento(comp.getNome());
                
                GrupoAcesso grpacesso = grpacessoDAO.getGrupoAcessoById(rs.getInt("dbcigs_grupoacesso_id"));
                mil.setIdGrupoAcesso(grpacesso.getId());
                mil.setNomeGrupoAcesso(grpacesso.getNome());
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
        
        UniformeDAO uniDAO = new UniformeDAO();
        EnderecoDAO endDAO = new EnderecoDAO();
        CidadeDAO cidDAO = new CidadeDAO();
        EscolaridadeDAO escDAO = new EscolaridadeDAO();
        ReligiaoDAO relDAO = new ReligiaoDAO();
        EstadoCivilDAO ecDAO = new EstadoCivilDAO();
        QasDAO qasDAO = new QasDAO();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        SetorDAO setDAO = new SetorDAO();
        ComportamentoDAO compDAO = new ComportamentoDAO();
        GrupoAcessoDAO grpacessoDAO = new GrupoAcessoDAO();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETMILITARES);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Militar mil = new Militar();
                
                mil.setIdtMilitar(rs.getString("idtmilitar"));
                mil.setSituacao(rs.getInt("situacao")); 
                mil.setIdtCivil(rs.getString("idtcivil"));
                mil.setCpf(rs.getString("cpf"));
                mil.setCp(rs.getString("cp"));
                mil.setPreccp(rs.getString("preccp"));
                mil.setNome(rs.getString("nome"));
                mil.setSobrenome(rs.getString("sobrenome"));                         
                mil.setNomeGuerra(rs.getString("nomeguerra"));               
                mil.setSexo(rs.getString("sexo"));               
                mil.setPai(rs.getString("pai"));               
                mil.setMae(rs.getString("mae"));               
                mil.setDataNascimento(rs.getDate("datanascimento"));               
                mil.setDataPraca(rs.getDate("datapraca"));               
                mil.setTs(rs.getString("ts"));               
                mil.setFtrh(rs.getString("ftrh"));               
                mil.setEmail(rs.getString("email"));               
                mil.setFamiliarContato(rs.getString("familiarcontato"));               
                mil.setFoneFamiliarContato(rs.getString("fonefamiliarcontato"));               
                mil.setSenha(rs.getString("senha"));               
                mil.setEndNum(rs.getString("endereconum"));     
                mil.setCia(rs.getInt("cia"));
                
                Uniforme uni = uniDAO.getUniformeById(rs.getInt("dbcigs_uniforme_id")); 
                mil.setIdUniforme(uni.getId());
                mil.setTamCoturnoUniforme(uni.getTamCoturno());
                mil.setTamGandolaUniforme(uni.getTamGandola());
                mil.setTamCalcaUniforme(uni.getTamCalca());
                mil.setTamCamisaCamufladaUniforme(uni.getTamCamisaCamuflada());
                
                Endereco end = endDAO.getEnderecoById(rs.getInt("dbcigs_endereco_id"));
                mil.setIdEndereco(end.getId());
                mil.setCepEndereco(end.getCep());
                mil.setBairroEndereco(end.getBairro());
                mil.setDescricaoEndereco(end.getDescricao());
                mil.setComplementoEndereco(end.getComplemento());
                mil.setPontoreferenciaEndereco(end.getPontoreferencia());
                mil.setIdCidadeEndereco(end.getIdCidade());
                mil.setNomeCidadeEndereco(end.getNomeCidade());
                mil.setIdEstadoCidadeEndereco(end.getIdEstadoCidade());
                mil.setNomeEstadoCidadeEndereco(end.getNomeEstadoCidade());
                mil.setSiglaEstadoCidadeEndereco(end.getSiglaEstadoCidade());
                              
                Cidade cid = cidDAO.getCidadeById(rs.getInt("dbcigs_cidade_id"));
                mil.setIdCidadeNaturalidade(cid.getId());
                mil.setNomeCidadeNaturalidade(cid.getNome());
                mil.setIdEstadoNaturalidade(cid.getIdEstado());
                mil.setNomeEstadoNaturalidade(cid.getNomeEstado());
                mil.setSiglaEstadoNaturalidade(cid.getSiglaEstado());
                
                Escolaridade esc = escDAO.getEscolaridadeById(rs.getInt("dbcigs_escolaridade_id"));
                mil.setIdEscolaridade(esc.getId());
                mil.setNomeEscolaridade(esc.getNome());
                
                Religiao rel = relDAO.getReligiaoById(rs.getInt("dbcigs_religiao_id"));
                mil.setIdReligiao(rel.getId());
                mil.setNomeReligiao(rel.getNome());
                
                EstadoCivil ec = ecDAO.getEstadoCivilById(rs.getInt("dbcigs_estadocivil_id"));
                mil.setIdEstadoCivil(ec.getId());
                mil.setNomeEstadoCivil(ec.getNome());
                
                Qas qas = qasDAO.getQasById(rs.getInt("dbcigs_qas_id"));
                mil.setIdQas(qas.getId());
                mil.setNomeQas(qas.getNome());
                mil.setAbreviaturaQas(qas.getAbreviatura());
                
                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("dbcigs_postograduacao_id"));
                mil.setIdPostoGraduacao(pg.getId());
                mil.setDescricaoPostoGraduacao(pg.getDescricao());
                mil.setAbreviaturaPostoGraduacao(pg.getAbreviatura());
                
                Setor set = setDAO.getSetorById(rs.getInt("dbcigs_setor_id"));
                mil.setIdSetor(set.getId());
                mil.setNomeSetor(set.getNome());
                mil.setAbreviaturaSetor(set.getAbreviatura());
                mil.setIdDivisaoSecao(set.getIdDivisaoSecao());
                mil.setNomeDivisaoSecao(set.getNomeDivisaoSecao());
                mil.setAbreviaturaDivisaoSecao(set.getAbreviaturaDivisaoSecao());
                
                Comportamento comp = compDAO.getComportamentoById(rs.getInt("dbcigs_comportamento_id"));
                mil.setIdComportamento(comp.getId());
                mil.setNomeComportamento(comp.getNome());
                
                GrupoAcesso grpacesso = grpacessoDAO.getGrupoAcessoById(rs.getInt("dbcigs_grupoacesso_id"));
                mil.setIdGrupoAcesso(grpacesso.getId());
                mil.setNomeGrupoAcesso(grpacesso.getNome());
                
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
        
        UniformeDAO uniDAO = new UniformeDAO();
        EnderecoDAO endDAO = new EnderecoDAO();
        CidadeDAO cidDAO = new CidadeDAO();
        EscolaridadeDAO escDAO = new EscolaridadeDAO();
        ReligiaoDAO relDAO = new ReligiaoDAO();
        EstadoCivilDAO ecDAO = new EstadoCivilDAO();
        QasDAO qasDAO = new QasDAO();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        SetorDAO setDAO = new SetorDAO();
        ComportamentoDAO compDAO = new ComportamentoDAO();
        GrupoAcessoDAO grpacessoDAO = new GrupoAcessoDAO();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETMILITARESATIVOS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Militar mil = new Militar();
                
                mil.setIdtMilitar(rs.getString("idtmilitar"));
                mil.setSituacao(rs.getInt("situacao")); 
                mil.setIdtCivil(rs.getString("idtcivil"));
                mil.setCpf(rs.getString("cpf"));
                mil.setCp(rs.getString("cp"));
                mil.setPreccp(rs.getString("preccp"));
                mil.setNome(rs.getString("nome"));
                mil.setSobrenome(rs.getString("sobrenome"));                         
                mil.setNomeGuerra(rs.getString("nomeguerra"));               
                mil.setSexo(rs.getString("sexo"));               
                mil.setPai(rs.getString("pai"));               
                mil.setMae(rs.getString("mae"));               
                mil.setDataNascimento(rs.getDate("datanascimento"));               
                mil.setDataPraca(rs.getDate("datapraca"));               
                mil.setTs(rs.getString("ts"));               
                mil.setFtrh(rs.getString("ftrh"));               
                mil.setEmail(rs.getString("email"));               
                mil.setFamiliarContato(rs.getString("familiarcontato"));               
                mil.setFoneFamiliarContato(rs.getString("fonefamiliarcontato"));               
                mil.setSenha(rs.getString("senha"));               
                mil.setEndNum(rs.getString("endereconum"));             
                mil.setCia(rs.getInt("cia"));
                
                Uniforme uni = uniDAO.getUniformeById(rs.getInt("dbcigs_uniforme_id")); 
                mil.setIdUniforme(uni.getId());
                mil.setTamCoturnoUniforme(uni.getTamCoturno());
                mil.setTamGandolaUniforme(uni.getTamGandola());
                mil.setTamCalcaUniforme(uni.getTamCalca());
                mil.setTamCamisaCamufladaUniforme(uni.getTamCamisaCamuflada());
                
                Endereco end = endDAO.getEnderecoById(rs.getInt("dbcigs_endereco_id"));
                mil.setIdEndereco(end.getId());
                mil.setCepEndereco(end.getCep());
                mil.setBairroEndereco(end.getBairro());
                mil.setDescricaoEndereco(end.getDescricao());
                mil.setComplementoEndereco(end.getComplemento());
                mil.setPontoreferenciaEndereco(end.getPontoreferencia());
                mil.setIdCidadeEndereco(end.getIdCidade());
                mil.setNomeCidadeEndereco(end.getNomeCidade());
                mil.setIdEstadoCidadeEndereco(end.getIdEstadoCidade());
                mil.setNomeEstadoCidadeEndereco(end.getNomeEstadoCidade());
                mil.setSiglaEstadoCidadeEndereco(end.getSiglaEstadoCidade());
                              
                Cidade cid = cidDAO.getCidadeById(rs.getInt("dbcigs_cidade_id"));
                mil.setIdCidadeNaturalidade(cid.getId());
                mil.setNomeCidadeNaturalidade(cid.getNome());
                mil.setIdEstadoNaturalidade(cid.getIdEstado());
                mil.setNomeEstadoNaturalidade(cid.getNomeEstado());
                mil.setSiglaEstadoNaturalidade(cid.getSiglaEstado());
                
                Escolaridade esc = escDAO.getEscolaridadeById(rs.getInt("dbcigs_escolaridade_id"));
                mil.setIdEscolaridade(esc.getId());
                mil.setNomeEscolaridade(esc.getNome());
                
                Religiao rel = relDAO.getReligiaoById(rs.getInt("dbcigs_religiao_id"));
                mil.setIdReligiao(rel.getId());
                mil.setNomeReligiao(rel.getNome());
                
                EstadoCivil ec = ecDAO.getEstadoCivilById(rs.getInt("dbcigs_estadocivil_id"));
                mil.setIdEstadoCivil(ec.getId());
                mil.setNomeEstadoCivil(ec.getNome());
                
                Qas qas = qasDAO.getQasById(rs.getInt("dbcigs_qas_id"));
                mil.setIdQas(qas.getId());
                mil.setNomeQas(qas.getNome());
                mil.setAbreviaturaQas(qas.getAbreviatura());
                
                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("dbcigs_postograduacao_id"));
                mil.setIdPostoGraduacao(pg.getId());
                mil.setDescricaoPostoGraduacao(pg.getDescricao());
                mil.setAbreviaturaPostoGraduacao(pg.getAbreviatura());
                
                Setor set = setDAO.getSetorById(rs.getInt("dbcigs_setor_id"));
                mil.setIdSetor(set.getId());
                mil.setNomeSetor(set.getNome());
                mil.setAbreviaturaSetor(set.getAbreviatura());
                mil.setIdDivisaoSecao(set.getIdDivisaoSecao());
                mil.setNomeDivisaoSecao(set.getNomeDivisaoSecao());
                mil.setAbreviaturaDivisaoSecao(set.getAbreviaturaDivisaoSecao());
                
                Comportamento comp = compDAO.getComportamentoById(rs.getInt("dbcigs_comportamento_id"));
                mil.setIdComportamento(comp.getId());
                mil.setNomeComportamento(comp.getNome());
                
                GrupoAcesso grpacesso = grpacessoDAO.getGrupoAcessoById(rs.getInt("dbcigs_grupoacesso_id"));
                mil.setIdGrupoAcesso(grpacesso.getId());
                mil.setNomeGrupoAcesso(grpacesso.getNome());
                
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
        
        UniformeDAO uniDAO = new UniformeDAO();
        EnderecoDAO endDAO = new EnderecoDAO();
        CidadeDAO cidDAO = new CidadeDAO();
        EscolaridadeDAO escDAO = new EscolaridadeDAO();
        ReligiaoDAO relDAO = new ReligiaoDAO();
        EstadoCivilDAO ecDAO = new EstadoCivilDAO();
        QasDAO qasDAO = new QasDAO();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        SetorDAO setDAO = new SetorDAO();
        ComportamentoDAO compDAO = new ComportamentoDAO();
        GrupoAcessoDAO grpacessoDAO = new GrupoAcessoDAO();
        
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETMILITARESINATIVOS);
           
            rs = pstm.executeQuery();
            while (rs.next()) {
                Militar mil = new Militar();
                
                mil.setIdtMilitar(rs.getString("idtmilitar"));
                mil.setSituacao(rs.getInt("situacao")); 
                mil.setIdtCivil(rs.getString("idtcivil"));
                mil.setCpf(rs.getString("cpf"));
                mil.setCp(rs.getString("cp"));
                mil.setPreccp(rs.getString("preccp"));
                mil.setNome(rs.getString("nome"));
                mil.setSobrenome(rs.getString("sobrenome"));                         
                mil.setNomeGuerra(rs.getString("nomeguerra"));               
                mil.setSexo(rs.getString("sexo"));               
                mil.setPai(rs.getString("pai"));               
                mil.setMae(rs.getString("mae"));               
                mil.setDataNascimento(rs.getDate("datanascimento"));               
                mil.setDataPraca(rs.getDate("datapraca"));               
                mil.setTs(rs.getString("ts"));               
                mil.setFtrh(rs.getString("ftrh"));               
                mil.setEmail(rs.getString("email"));               
                mil.setFamiliarContato(rs.getString("familiarcontato"));               
                mil.setFoneFamiliarContato(rs.getString("fonefamiliarcontato"));               
                mil.setSenha(rs.getString("senha"));               
                mil.setEndNum(rs.getString("endereconum"));          
                mil.setCia(rs.getInt("cia"));
                
                Uniforme uni = uniDAO.getUniformeById(rs.getInt("dbcigs_uniforme_id")); 
                mil.setIdUniforme(uni.getId());
                mil.setTamCoturnoUniforme(uni.getTamCoturno());
                mil.setTamGandolaUniforme(uni.getTamGandola());
                mil.setTamCalcaUniforme(uni.getTamCalca());
                mil.setTamCamisaCamufladaUniforme(uni.getTamCamisaCamuflada());
                
                Endereco end = endDAO.getEnderecoById(rs.getInt("dbcigs_endereco_id"));
                mil.setIdEndereco(end.getId());
                mil.setCepEndereco(end.getCep());
                mil.setBairroEndereco(end.getBairro());
                mil.setDescricaoEndereco(end.getDescricao());
                mil.setComplementoEndereco(end.getComplemento());
                mil.setPontoreferenciaEndereco(end.getPontoreferencia());
                mil.setIdCidadeEndereco(end.getIdCidade());
                mil.setNomeCidadeEndereco(end.getNomeCidade());
                mil.setIdEstadoCidadeEndereco(end.getIdEstadoCidade());
                mil.setNomeEstadoCidadeEndereco(end.getNomeEstadoCidade());
                mil.setSiglaEstadoCidadeEndereco(end.getSiglaEstadoCidade());
                              
                Cidade cid = cidDAO.getCidadeById(rs.getInt("dbcigs_cidade_id"));
                mil.setIdCidadeNaturalidade(cid.getId());
                mil.setNomeCidadeNaturalidade(cid.getNome());
                mil.setIdEstadoNaturalidade(cid.getIdEstado());
                mil.setNomeEstadoNaturalidade(cid.getNomeEstado());
                mil.setSiglaEstadoNaturalidade(cid.getSiglaEstado());
                
                Escolaridade esc = escDAO.getEscolaridadeById(rs.getInt("dbcigs_escolaridade_id"));
                mil.setIdEscolaridade(esc.getId());
                mil.setNomeEscolaridade(esc.getNome());
                
                Religiao rel = relDAO.getReligiaoById(rs.getInt("dbcigs_religiao_id"));
                mil.setIdReligiao(rel.getId());
                mil.setNomeReligiao(rel.getNome());
                
                EstadoCivil ec = ecDAO.getEstadoCivilById(rs.getInt("dbcigs_estadocivil_id"));
                mil.setIdEstadoCivil(ec.getId());
                mil.setNomeEstadoCivil(ec.getNome());
                
                Qas qas = qasDAO.getQasById(rs.getInt("dbcigs_qas_id"));
                mil.setIdQas(qas.getId());
                mil.setNomeQas(qas.getNome());
                mil.setAbreviaturaQas(qas.getAbreviatura());
                
                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("dbcigs_postograduacao_id"));
                mil.setIdPostoGraduacao(pg.getId());
                mil.setDescricaoPostoGraduacao(pg.getDescricao());
                mil.setAbreviaturaPostoGraduacao(pg.getAbreviatura());
                
                Setor set = setDAO.getSetorById(rs.getInt("dbcigs_setor_id"));
                mil.setIdSetor(set.getId());
                mil.setNomeSetor(set.getNome());
                mil.setAbreviaturaSetor(set.getAbreviatura());
                mil.setIdDivisaoSecao(set.getIdDivisaoSecao());
                mil.setNomeDivisaoSecao(set.getNomeDivisaoSecao());
                mil.setAbreviaturaDivisaoSecao(set.getAbreviaturaDivisaoSecao());
                
                Comportamento comp = compDAO.getComportamentoById(rs.getInt("dbcigs_comportamento_id"));
                mil.setIdComportamento(comp.getId());
                mil.setNomeComportamento(comp.getNome());
                
                GrupoAcesso grpacesso = grpacessoDAO.getGrupoAcessoById(rs.getInt("dbcigs_grupoacesso_id"));
                mil.setIdGrupoAcesso(grpacesso.getId());
                mil.setNomeGrupoAcesso(grpacesso.getNome());
                
                militares.add(mil);
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return militares;
    }
    
    private final static String GETMILITARBYIDTDWR = "SELECT * " +
                                                     "FROM dbcigs_militar " +
                                                     "WHERE idtmilitar = ?";
       
    public static Militar getMilitarByIdtMilitarDWR(String idtmilitar){
        Militar mil = new Militar();
        
        UniformeDAO uniDAO = new UniformeDAO();
        EnderecoDAO endDAO = new EnderecoDAO();
        CidadeDAO cidDAO = new CidadeDAO();
        EscolaridadeDAO escDAO = new EscolaridadeDAO();
        ReligiaoDAO relDAO = new ReligiaoDAO();
        EstadoCivilDAO ecDAO = new EstadoCivilDAO();
        QasDAO qasDAO = new QasDAO();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        SetorDAO setDAO = new SetorDAO();
        ComportamentoDAO compDAO = new ComportamentoDAO();
        GrupoAcessoDAO grpacessoDAO = new GrupoAcessoDAO();
        
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETMILITARBYIDTDWR);
            pstm.setString(1, idtmilitar);
           
            rs = pstm.executeQuery();
            while (rs.next()) {       
                mil.setIdtMilitar(rs.getString("idtmilitar"));
                mil.setSituacao(rs.getInt("situacao")); 
                mil.setIdtCivil(rs.getString("idtcivil"));
                mil.setCpf(rs.getString("cpf"));
                mil.setCp(rs.getString("cp"));
                mil.setPreccp(rs.getString("preccp"));
                mil.setNome(rs.getString("nome"));
                mil.setSobrenome(rs.getString("sobrenome"));                         
                mil.setNomeGuerra(rs.getString("nomeguerra"));               
                mil.setSexo(rs.getString("sexo"));               
                mil.setPai(rs.getString("pai"));               
                mil.setMae(rs.getString("mae"));               
                mil.setDataNascimento(rs.getDate("datanascimento"));               
                mil.setDataPraca(rs.getDate("datapraca"));               
                mil.setTs(rs.getString("ts"));               
                mil.setFtrh(rs.getString("ftrh"));               
                mil.setEmail(rs.getString("email"));               
                mil.setFamiliarContato(rs.getString("familiarcontato"));               
                mil.setFoneFamiliarContato(rs.getString("fonefamiliarcontato"));               
                mil.setSenha(rs.getString("senha"));               
                mil.setEndNum(rs.getString("endereconum"));           
                mil.setCia(rs.getInt("cia"));
                
                Uniforme uni = uniDAO.getUniformeById(rs.getInt("dbcigs_uniforme_id")); 
                mil.setIdUniforme(uni.getId());
                mil.setTamCoturnoUniforme(uni.getTamCoturno());
                mil.setTamGandolaUniforme(uni.getTamGandola());
                mil.setTamCalcaUniforme(uni.getTamCalca());
                mil.setTamCamisaCamufladaUniforme(uni.getTamCamisaCamuflada());
                
                Endereco end = endDAO.getEnderecoById(rs.getInt("dbcigs_endereco_id"));
                mil.setIdEndereco(end.getId());
                mil.setCepEndereco(end.getCep());
                mil.setBairroEndereco(end.getBairro());
                mil.setDescricaoEndereco(end.getDescricao());
                mil.setComplementoEndereco(end.getComplemento());
                mil.setPontoreferenciaEndereco(end.getPontoreferencia());
                mil.setIdCidadeEndereco(end.getIdCidade());
                mil.setNomeCidadeEndereco(end.getNomeCidade());
                mil.setIdEstadoCidadeEndereco(end.getIdEstadoCidade());
                mil.setNomeEstadoCidadeEndereco(end.getNomeEstadoCidade());
                mil.setSiglaEstadoCidadeEndereco(end.getSiglaEstadoCidade());
                              
                Cidade cid = cidDAO.getCidadeById(rs.getInt("dbcigs_cidade_id"));
                mil.setIdCidadeNaturalidade(cid.getId());
                mil.setNomeCidadeNaturalidade(cid.getNome());
                mil.setIdEstadoNaturalidade(cid.getIdEstado());
                mil.setNomeEstadoNaturalidade(cid.getNomeEstado());
                mil.setSiglaEstadoNaturalidade(cid.getSiglaEstado());
                
                Escolaridade esc = escDAO.getEscolaridadeById(rs.getInt("dbcigs_escolaridade_id"));
                mil.setIdEscolaridade(esc.getId());
                mil.setNomeEscolaridade(esc.getNome());
                
                Religiao rel = relDAO.getReligiaoById(rs.getInt("dbcigs_religiao_id"));
                mil.setIdReligiao(rel.getId());
                mil.setNomeReligiao(rel.getNome());
                
                EstadoCivil ec = ecDAO.getEstadoCivilById(rs.getInt("dbcigs_estadocivil_id"));
                mil.setIdEstadoCivil(ec.getId());
                mil.setNomeEstadoCivil(ec.getNome());
                
                Qas qas = qasDAO.getQasById(rs.getInt("dbcigs_qas_id"));
                mil.setIdQas(qas.getId());
                mil.setNomeQas(qas.getNome());
                mil.setAbreviaturaQas(qas.getAbreviatura());
                
                PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("dbcigs_postograduacao_id"));
                mil.setIdPostoGraduacao(pg.getId());
                mil.setDescricaoPostoGraduacao(pg.getDescricao());
                mil.setAbreviaturaPostoGraduacao(pg.getAbreviatura());
                
                Setor set = setDAO.getSetorById(rs.getInt("dbcigs_setor_id"));
                mil.setIdSetor(set.getId());
                mil.setNomeSetor(set.getNome());
                mil.setAbreviaturaSetor(set.getAbreviatura());
                mil.setIdDivisaoSecao(set.getIdDivisaoSecao());
                mil.setNomeDivisaoSecao(set.getNomeDivisaoSecao());
                mil.setAbreviaturaDivisaoSecao(set.getAbreviaturaDivisaoSecao());
                
                Comportamento comp = compDAO.getComportamentoById(rs.getInt("dbcigs_comportamento_id"));
                mil.setIdComportamento(comp.getId());
                mil.setNomeComportamento(comp.getNome());
                
                GrupoAcesso grpacesso = grpacessoDAO.getGrupoAcessoById(rs.getInt("dbcigs_grupoacesso_id"));
                mil.setIdGrupoAcesso(grpacesso.getId());
                mil.setNomeGrupoAcesso(grpacesso.getNome());
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return mil;
    }
    
    //Consultas SQL
    private final String GETIDTSENHA = "SELECT " + idtmilitar + "," + senha + " FROM " + tabela + " WHERE " + idtmilitar + "=? AND " + senha + "=md5(?)";
    private final String GETSENHA = "SELECT " + senha + " FROM " + tabela + " WHERE " + senha + "=md5(?)";
    private final String GETIDENTIDADE = "SELECT "+ idtmilitar + " FROM "+ tabela + " WHERE " + idtmilitar + "=?";
    
    //Validação de Login(Identidade) e senha
    public boolean validarLoginSenha(String idtmilitar, String senha) {
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETIDTSENHA);
            pstm.setString(1, idtmilitar);
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
    public boolean validarLogin(String idtmilitar) {       
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETIDENTIDADE);
            pstm.setString(1, idtmilitar);
            
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
        
        UniformeDAO uniDAO = new UniformeDAO();
        EnderecoDAO endDAO = new EnderecoDAO();
        CidadeDAO cidDAO = new CidadeDAO();
        EscolaridadeDAO escDAO = new EscolaridadeDAO();
        ReligiaoDAO relDAO = new ReligiaoDAO();
        EstadoCivilDAO ecDAO = new EstadoCivilDAO();
        QasDAO qasDAO = new QasDAO();
        PostoGraduacaoDAO pgDAO = new PostoGraduacaoDAO();
        SetorDAO setDAO = new SetorDAO();
        ComportamentoDAO compDAO = new ComportamentoDAO();
        GrupoAcessoDAO grpacessoDAO = new GrupoAcessoDAO();
        
        if(mil != null){
            conn = null;
            try{
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(GETMILITARBYIDT);
                pstm.setString(1, mil.getIdtMilitar());
                
                rs = pstm.executeQuery();
                
                if(rs.next()){
                    milRetorno = new Militar();
                    
                    milRetorno.setIdtMilitar(rs.getString("idtmilitar"));
                    milRetorno.setSituacao(rs.getInt("situacao")); 
                    milRetorno.setIdtCivil(rs.getString("idtcivil"));
                    milRetorno.setCpf(rs.getString("cpf"));
                    milRetorno.setCp(rs.getString("cp"));
                    milRetorno.setPreccp(rs.getString("preccp"));
                    milRetorno.setNome(rs.getString("nome"));
                    milRetorno.setSobrenome(rs.getString("sobrenome"));                         
                    milRetorno.setNomeGuerra(rs.getString("nomeguerra"));               
                    milRetorno.setSexo(rs.getString("sexo"));               
                    milRetorno.setPai(rs.getString("pai"));               
                    milRetorno.setMae(rs.getString("mae"));               
                    milRetorno.setDataNascimento(rs.getDate("datanascimento"));               
                    milRetorno.setDataPraca(rs.getDate("datapraca"));               
                    milRetorno.setTs(rs.getString("ts"));               
                    milRetorno.setFtrh(rs.getString("ftrh"));               
                    milRetorno.setEmail(rs.getString("email"));               
                    milRetorno.setFamiliarContato(rs.getString("familiarcontato"));               
                    milRetorno.setFoneFamiliarContato(rs.getString("fonefamiliarcontato"));               
                    milRetorno.setSenha(rs.getString("senha"));               
                    milRetorno.setEndNum(rs.getString("endereconum"));  
                    milRetorno.setCia(rs.getInt("cia"));
                    
                    Uniforme uni = uniDAO.getUniformeById(rs.getInt("dbcigs_uniforme_id")); 
                    milRetorno.setIdUniforme(uni.getId());
                    milRetorno.setTamCoturnoUniforme(uni.getTamCoturno());
                    milRetorno.setTamGandolaUniforme(uni.getTamGandola());
                    milRetorno.setTamCalcaUniforme(uni.getTamCalca());
                    milRetorno.setTamCamisaCamufladaUniforme(uni.getTamCamisaCamuflada());
                    
                    Endereco end = endDAO.getEnderecoById(rs.getInt("dbcigs_endereco_id"));
                    milRetorno.setIdEndereco(end.getId());
                    milRetorno.setCepEndereco(end.getCep());
                    milRetorno.setBairroEndereco(end.getBairro());
                    milRetorno.setDescricaoEndereco(end.getDescricao());
                    milRetorno.setComplementoEndereco(end.getComplemento());
                    milRetorno.setPontoreferenciaEndereco(end.getPontoreferencia());
                    milRetorno.setIdCidadeEndereco(end.getIdCidade());
                    milRetorno.setNomeCidadeEndereco(end.getNomeCidade());
                    milRetorno.setIdEstadoCidadeEndereco(end.getIdEstadoCidade());
                    milRetorno.setNomeEstadoCidadeEndereco(end.getNomeEstadoCidade());
                    milRetorno.setSiglaEstadoCidadeEndereco(end.getSiglaEstadoCidade());

                    Cidade cid = cidDAO.getCidadeById(rs.getInt("dbcigs_cidade_id"));
                    milRetorno.setIdCidadeNaturalidade(cid.getId());
                    milRetorno.setNomeCidadeNaturalidade(cid.getNome());
                    milRetorno.setIdEstadoNaturalidade(cid.getIdEstado());
                    milRetorno.setNomeEstadoNaturalidade(cid.getNomeEstado());
                    milRetorno.setSiglaEstadoNaturalidade(cid.getSiglaEstado());

                    Escolaridade esc = escDAO.getEscolaridadeById(rs.getInt("dbcigs_escolaridade_id"));
                    milRetorno.setIdEscolaridade(esc.getId());
                    milRetorno.setNomeEscolaridade(esc.getNome());

                    Religiao rel = relDAO.getReligiaoById(rs.getInt("dbcigs_religiao_id"));
                    milRetorno.setIdReligiao(rel.getId());
                    milRetorno.setNomeReligiao(rel.getNome());

                    EstadoCivil ec = ecDAO.getEstadoCivilById(rs.getInt("dbcigs_estadocivil_id"));
                    milRetorno.setIdEstadoCivil(ec.getId());
                    milRetorno.setNomeEstadoCivil(ec.getNome());

                    Qas qas = qasDAO.getQasById(rs.getInt("dbcigs_qas_id"));
                    milRetorno.setIdQas(qas.getId());
                    milRetorno.setNomeQas(qas.getNome());
                    milRetorno.setAbreviaturaQas(qas.getAbreviatura());

                    PostoGraduacao pg = pgDAO.getPostoGraduacaoById(rs.getInt("dbcigs_postograduacao_id"));
                    milRetorno.setIdPostoGraduacao(pg.getId());
                    milRetorno.setDescricaoPostoGraduacao(pg.getDescricao());
                    milRetorno.setAbreviaturaPostoGraduacao(pg.getAbreviatura());

                    Setor set = setDAO.getSetorById(rs.getInt("dbcigs_setor_id"));
                    milRetorno.setIdSetor(set.getId());
                    milRetorno.setNomeSetor(set.getNome());
                    milRetorno.setAbreviaturaSetor(set.getAbreviatura());
                    milRetorno.setIdDivisaoSecao(set.getIdDivisaoSecao());
                    milRetorno.setNomeDivisaoSecao(set.getNomeDivisaoSecao());
                    milRetorno.setAbreviaturaDivisaoSecao(set.getAbreviaturaDivisaoSecao());

                    Comportamento comp = compDAO.getComportamentoById(rs.getInt("dbcigs_comportamento_id"));
                    milRetorno.setIdComportamento(comp.getId());
                    milRetorno.setNomeComportamento(comp.getNome());

                    GrupoAcesso grpacesso = grpacessoDAO.getGrupoAcessoById(rs.getInt("dbcigs_grupoacesso_id"));
                    milRetorno.setIdGrupoAcesso(grpacesso.getId());
                    milRetorno.setNomeGrupoAcesso(grpacesso.getNome());
                }
                
                ConnectionFactory.fechaConexao(conn, pstm, rs);
            }catch(SQLException e){
                throw new RuntimeException("Erro: " + e.getMessage());
            }
        }
        return milRetorno;
    }
}
