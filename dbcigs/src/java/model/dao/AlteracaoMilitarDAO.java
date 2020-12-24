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
import model.bean.Comportamento;
import model.bean.Escolaridade;
import model.bean.EstadoCivil;
import model.bean.GrupoAcesso;
import model.bean.AlteracaoMilitar;
import model.bean.PostoGraduacao;
import model.bean.Qas;
import model.bean.Religiao;
import model.bean.Setor;

/**
 *
 * @author anderson
 */
public class AlteracaoMilitarDAO {
    //Tabela
    String tabela = "dbcigs_alteracaomilitar";
    
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
    String idCidade = "dbcigs_cidade_id";
    String idEscolaridade = "dbcigs_escolaridade_id";
    String idReligiao = "dbcigs_religiao_id";
    String idEstadoCivil = "dbcigs_estadocivil_id";
    String idQas = "dbcigs_qas_id";
    String idPostoGraduacao = "dbcigs_postograduacao_id";
    String idSetor = "dbcigs_setor_id";
    String idComportamento = "dbcigs_comportamento_id";
    String idGrupoAcesso = "dbcigs_grupoacesso_id";
    String dataalteracao = "dataalteracao";
    String militarrespalteracao = "militarrespalteracao";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + idtmilitar + "," + situacao + "," + idtcivil +  "," + cpf + "," + cp + "," + preccp + "," 
                                                                + nome + "," + sobrenome +  "," + nomeguerra + "," + sexo +  "," + pai + "," + mae + "," 
                                                                + datanascimento + "," + datapraca + "," + ts + "," + ftrh + "," + email + "," + familiarcontato + "," 
                                                                + fonefamiliarcontato + "," + senha + "," + endereconum + "," + idCidade + "," + idEscolaridade + "," 
                                                                + idReligiao + "," + idEstadoCivil + "," + idQas + "," + idPostoGraduacao + "," + idSetor + "," 
                                                                + idComportamento + "," + idGrupoAcesso + "," + dataalteracao + "," + militarrespalteracao + ")" +
                                  " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,md5(?),?,?,?,?,?,?,?,?,?,?,?,?);";
    
    
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + idtmilitar + "=?;";
    
    //Consultas SQL
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    //Insert SQL
    public void insert(AlteracaoMilitar mil) {
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
                pstm.setInt(22, mil.getIdCidadeNaturalidade());
                pstm.setInt(23, mil.getIdEscolaridade());
                pstm.setInt(24, mil.getIdReligiao());
                pstm.setInt(25, mil.getIdEstadoCivil());
                pstm.setInt(26, mil.getIdQas());
                pstm.setInt(27, mil.getIdPostoGraduacao());
                pstm.setInt(28, mil.getIdSetor());
                pstm.setInt(29, mil.getIdComportamento());
                pstm.setInt(30, mil.getIdGrupoAcesso());
                pstm.setDate(31, mil.getDataAlteracao());
                pstm.setString(32, mil.getIdtMilitarRespAlteracao());
                
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
    
    
}
