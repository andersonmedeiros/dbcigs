/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.bean;

import java.sql.Date;

/**
 *
 * @author anderson
 */
public class AlteracaoMilitar {
    private String idtMilitar, idtMilitarRespAlteracao, idtCivil, cpf, cp, preccp, nome, sobrenome, nomeGuerra, sexo, pai, mae, ts, ftrh, email, familiarContato, foneFamiliarContato, senha, endNum; 
    private int situacao;
    private Date dataNascimento, dataPraca, dataAlteracao;
    
    private final Cidade cid = new Cidade();
    private final Escolaridade esc = new Escolaridade();
    private final Religiao rel = new Religiao();
    private final EstadoCivil estciv = new EstadoCivil();
    private final Qas qas = new Qas();
    private final PostoGraduacao pg = new PostoGraduacao();
    private final Setor set = new Setor();
    private final Comportamento comp = new Comportamento();
    private final GrupoAcesso gpacesso = new GrupoAcesso();

    public String getIdtMilitarRespAlteracao() {
        return idtMilitarRespAlteracao;
    }

    public void setIdtMilitarRespAlteracao(String idtMilitarRespAlteracao) {
        this.idtMilitarRespAlteracao = idtMilitarRespAlteracao;
    }

    public Date getDataAlteracao() {
        return dataAlteracao;
    }

    public void setDataAlteracao(Date dataAlteracao) {
        this.dataAlteracao = dataAlteracao;
    }
        
    //Militar
    public String getIdtMilitar() {
        return idtMilitar;
    }

    public void setIdtMilitar(String idtMilitar) {
        this.idtMilitar = idtMilitar;
    }

    public String getIdtCivil() {
        return idtCivil;
    }

    public void setIdtCivil(String idtCivil) {
        this.idtCivil = idtCivil;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCp() {
        return cp;
    }

    public void setCp(String cp) {
        this.cp = cp;
    }

    public String getPreccp() {
        return preccp;
    }

    public void setPreccp(String preccp) {
        this.preccp = preccp;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getNomeGuerra() {
        return nomeGuerra;
    }

    public void setNomeGuerra(String nomeGuerra) {
        this.nomeGuerra = nomeGuerra;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getPai() {
        return pai;
    }

    public void setPai(String pai) {
        this.pai = pai;
    }

    public String getMae() {
        return mae;
    }

    public void setMae(String mae) {
        this.mae = mae;
    }

    public String getTs() {
        return ts;
    }

    public void setTs(String ts) {
        this.ts = ts;
    }

    public String getFtrh() {
        return ftrh;
    }

    public void setFtrh(String ftrh) {
        this.ftrh = ftrh;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFamiliarContato() {
        return familiarContato;
    }

    public void setFamiliarContato(String familiarContato) {
        this.familiarContato = familiarContato;
    }

    public String getFoneFamiliarContato() {
        return foneFamiliarContato;
    }

    public void setFoneFamiliarContato(String foneFamiliarContato) {
        this.foneFamiliarContato = foneFamiliarContato;
    }

    public int getSituacao() {
        return situacao;
    }

    public void setSituacao(int situacao) {
        this.situacao = situacao;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public Date getDataPraca() {
        return dataPraca;
    }

    public void setDataPraca(Date dataPraca) {
        this.dataPraca = dataPraca;
    }    
    
    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    } 
    
    public String getEndNum() {
        return endNum;
    }

    public void setEndNum(String endNum) {
        this.endNum = endNum;
    } 
    
    public int getIdPostoGraduacao() {
        return pg.getId();
    }

    public void setIdPostoGraduacao(int idPostoGraduacao) {
        pg.setId(idPostoGraduacao);
    }

    public String getNomePostoGraduacao() {
        return pg.getNome();
    }

    public void setNomePostoGraduacao(String nomePostoGraduacao) {
        pg.setNome(nomePostoGraduacao);
    }

    public String getAbreviaturaPostoGraduacao() {
        return pg.getAbreviatura();
    }

    public void setAbreviaturaPostoGraduacao(String abreviaturaPostoGraduacao) {
        pg.setAbreviatura(abreviaturaPostoGraduacao);
    }
    
    //Cidade
    public int getIdCidadeNaturalidade() {
        return cid.getId();
    }

    public void setIdCidadeNaturalidade(int id) {
        cid.setId(id);
    }

    public String getNomeCidadeNaturalidade() {
        return cid.getNome();
    }

    public void setNomeCidadeNaturalidade(String nome) {
        cid.setNome(nome);
    }
    
    public int getIdEstadoNaturalidade() {
        return cid.getIdEstado();
    }

    public void setIdEstadoNaturalidade(int idEstado) {
        cid.setIdEstado(idEstado);
    }

    public String getNomeEstadoNaturalidade() {
        return cid.getNomeEstado();
    }

    public void setNomeEstadoNaturalidade(String nomeEstado) {
        cid.setNomeEstado(nomeEstado);
    }

    public String getSiglaEstadoNaturalidade() {
        return cid.getSiglaEstado();
    }

    public void setSiglaEstadoNaturalidade(String siglaEstado) {
        cid.setSiglaEstado(siglaEstado);
    }
    
    //Escolaridade
    public int getIdEscolaridade() {
        return esc.getId();
    }

    public void setIdEscolaridade(int id) {
        esc.setId(id);
    }

    public String getNomeEscolaridade() {
        return esc.getNome();
    }

    public void setNomeEscolaridade(String nome) {
        esc.setNome(nome);
    }
    
    //Religiao
    public int getIdReligiao() {
        return rel.getId();
    }

    public void setIdReligiao(int id) {
        rel.setId(id);
    }

    public String getNomeReligiao() {
        return rel.getNome();
    }

    public void setNomeReligiao(String nome) {
        rel.setNome(nome);
    }
    
    //EstadoCivil
    public int getIdEstadoCivil() {
        return estciv.getId();
    }

    public void setIdEstadoCivil(int id) {
        estciv.setId(id);
    }

    public String getNomeEstadoCivil() {
        return estciv.getNome();
    }

    public void setNomeEstadoCivil(String nome) {
        estciv.setNome(nome);
    }
    
    //Qas
    public int getIdQas() {
        return qas.getId();
    }

    public void setIdQas(int id) {
        qas.setId(id);
    }

    public String getNomeQas() {
        return qas.getNome();
    }

    public void setNomeQas(String nome) {
        qas.setNome(nome);
    }

    public String getAbreviaturaQas() {
        return qas.getAbreviatura();
    }

    public void setAbreviaturaQas(String abreviatura) {
        qas.setAbreviatura(abreviatura);
    }
    
    //Setor
    public int getIdSetor() {
        return set.getId();
    }

    public void setIdSetor(int id) {
        set.setId(id);
    }

    public String getNomeSetor() {
        return set.getNome();
    }

    public void setNomeSetor(String nome) {
        set.setNome(nome);
    }

    public String getAbreviaturaSetor() {
        return set.getAbreviatura();
    }

    public void setAbreviaturaSetor(String abreviatura) {
        set.setAbreviatura(abreviatura);
    }
    
    public int getIdDivisaoSecao() {
        return set.getIdDivisaoSecao();
    }

    public void setIdDivisaoSecao(int id) {
        set.setIdDivisaoSecao(id);
    }

    public String getNomeDivisaoSecao() {
        return set.getNomeDivisaoSecao();
    }

    public void setNomeDivisaoSecao(String nome) {
        set.setNomeDivisaoSecao(nome);
    }

    public String getAbreviaturaDivisaoSecao() {
        return set.getAbreviaturaDivisaoSecao();
    }

    public void setAbreviaturaDivisaoSecao(String abreviatura) {
        set.setAbreviaturaDivisaoSecao(abreviatura);
    }
    
    //Comportamento
    public int getIdComportamento() {
        return comp.getId();
    }

    public void setIdComportamento(int id) {
        comp.setId(id);
    }

    public String getNomeComportamento() {
        return comp.getNome();
    }

    public void setNomeComportamento(String nome) {
        comp.setNome(nome);
    }
    
    //GrupoAcesso
    public int getIdGrupoAcesso() {
        return gpacesso.getId();
    }

    public void setIdGrupoAcesso(int id) {
        gpacesso.setId(id);
    }

    public String getNomeGrupoAcesso() {
        return gpacesso.getNome();
    }

    public void setNomeGrupoAcesso(String nome) {
        gpacesso.setNome(nome);
    }
}
