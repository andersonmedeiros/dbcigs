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
public class Militar {
    private String idtMilitar, idtCivil, cpf, cp, preccp, nome, sobrenome, nomeGuerra, sexo, pai, mae, ts, ftrh, email, familiarContato, foneFamiliarContato, senha, endNum; 
    private int situacao, cia;
    private Date dataNascimento, dataPraca;
    
    private final Uniforme uni = new Uniforme();
    private final Endereco end = new Endereco();
    private final Cidade cid = new Cidade();
    private final Escolaridade esc = new Escolaridade();
    private final Religiao rel = new Religiao();
    private final EstadoCivil estciv = new EstadoCivil();
    private final Qas qas = new Qas();
    private final PostoGraduacao pg = new PostoGraduacao();
    private final Setor set = new Setor();
    private final Comportamento comp = new Comportamento();
    private final GrupoAcesso gpacesso = new GrupoAcesso();

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

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
    public int getSituacao() {
        return situacao;
    }

    public void setSituacao(int situacao) {
        this.situacao = situacao;
    }

    public int getCia() {
        return cia;
    }

    public void setCia(int cia) {
        this.cia = cia;
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

    public void setDataPraca(Date dataPracao) {
        this.dataPraca = dataPracao;
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

    public String getDescricaoPostoGraduacao() {
        return pg.getDescricao();
    }

    public void setDescricaoPostoGraduacao(String nomePostoGraduacao) {
        pg.setDescricao(nomePostoGraduacao);
    }

    public String getAbreviaturaPostoGraduacao() {
        return pg.getAbreviatura();
    }

    public void setAbreviaturaPostoGraduacao(String abreviaturaPostoGraduacao) {
        pg.setAbreviatura(abreviaturaPostoGraduacao);
    }
    
    //Uniforme
    public int getIdUniforme() {
        return uni.getId();
    }

    public void setIdUniforme(int id) {
        uni.setId(id);
    }

    public int getTamCoturnoUniforme() {
        return uni.getTamCoturno();
    }

    public void setTamCoturnoUniforme(int tamCoturno) {
        uni.setTamCoturno(tamCoturno);
    }

    public String getTamGandolaUniforme() {
        return uni.getTamGandola();
    }

    public void setTamGandolaUniforme(String tamGandola) {
        uni.setTamGandola(tamGandola);
    }

    public String getTamCalcaUniforme() {
        return uni.getTamCalca();
    }

    public void setTamCalcaUniforme(String tamCalca) {
        uni.setTamCalca(tamCalca);
    }

    public String getTamCamisaCamufladaUniforme() {
        return uni.getTamCamisaCamuflada();
    }

    public void setTamCamisaCamufladaUniforme(String tamCamisaCamuflada) {
        uni.setTamCamisaCamuflada(tamCamisaCamuflada);
    }
    
    //Endereco
    public int getIdEndereco() {
        return end.getId();
    }

    public void setIdEndereco(int id) {
        end.setId(id);
    }

    public String getCepEndereco() {
        return end.getCep();
    }

    public void setCepEndereco(String cep) {
        end.setCep(cep);
    }

    public String getDescricaoEndereco() {
        return end.getDescricao();
    }

    public void setDescricaoEndereco(String descricao) {
        end.setDescricao(descricao);
    }

    public String getComplementoEndereco() {
        return end.getComplemento();
    }

    public void setComplementoEndereco(String complemento) {
        end.setComplemento(complemento);
    }

    public String getPontoreferenciaEndereco() {
        return end.getPontoreferencia();
    }

    public void setPontoreferenciaEndereco(String pontoreferencia) {
        end.setPontoreferencia(pontoreferencia);
    }

    public String getBairroEndereco() {
        return end.getBairro();
    }

    public void setBairroEndereco(String bairro) {
        end.setBairro(bairro);
    }
    
    public int getIdCidadeEndereco() {
        return end.getIdCidade();
    }

    public void setIdCidadeEndereco(int id) {
        end.setIdCidade(id);
    }

    public String getNomeCidadeEndereco() {
        return end.getNomeCidade();
    }

    public void setNomeCidadeEndereco(String nome) {
        end.setNomeCidade(nome);
    }
    
    public int getIdEstadoCidadeEndereco() {
        return end.getIdEstadoCidade();
    }

    public void setIdEstadoCidadeEndereco(int idEstado) {
        end.setIdEstadoCidade(idEstado);
    }

    public String getNomeEstadoCidadeEndereco() {
        return end.getNomeEstadoCidade();
    }

    public void setNomeEstadoCidadeEndereco(String nomeEstado) {
       end.setNomeEstadoCidade(nomeEstado);
    }

    public String getSiglaEstadoCidadeEndereco() {
        return end.getSiglaEstadoCidade();
    }

    public void setSiglaEstadoCidadeEndereco(String siglaEstado) {
        end.setSiglaEstadoCidade(siglaEstado);
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
