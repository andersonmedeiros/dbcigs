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
public class TituloEleitor {
    String registro, zona, secao;
    private final Cidade cidade = new Cidade();
    private final Militar mil = new Militar();

    public String getRegistro() {
        return registro;
    }

    public void setRegistro(String registro) {
        this.registro = registro;
    }

    public String getZona() {
        return zona;
    }

    public void setZona(String zona) {
        this.zona = zona;
    }

    public String getSecao() {
        return secao;
    }

    public void setSecao(String secao) {
        this.secao = secao;
    }
    
    public int getIdCidade() {
        return cidade.getId();
    }

    public void setIdCidade(int id) {
        cidade.setId(id);
    }

    public String getNomeCidade() {
        return cidade.getNome();
    }

    public void setNomeCidade(String nome) {
        cidade.setNome(nome);
    }
    
    public int getIdEstadoCidade() {
        return cidade.getIdEstado();
    }

    public void setIdEstadoCidade(int idEstado) {
        cidade.setIdEstado(idEstado);
    }

    public String getNomeEstadoCidade() {
        return cidade.getNomeEstado();
    }

    public void setNomeEstadoCidade(String nomeEstado) {
        cidade.setNomeEstado(nomeEstado);
    }

    public String getSiglaEstadoCidade() {
        return cidade.getSiglaEstado();
    }

    public void setSiglaEstadoCidade(String siglaEstado) {
        cidade.setSiglaEstado(siglaEstado);
    }
    
    //Militar
    public String getIdtMilitar() {
        return mil.getIdtMilitar();
    }

    public void setIdtMilitar(String idtMilitar) {
        mil.setIdtMilitar(idtMilitar);
    }

    public String getIdtCivilMilitar() {
        return mil.getIdtCivil();
    }

    public void setIdtCivilMilitar(String idtCivil) {
        mil.setIdtCivil(idtCivil);
    }

    public String getCpfMilitar() {
        return mil.getCpf();
    }

    public void setCpfMilitar(String cpf) {
        mil.setCpf(cpf);
    }

    public String getCpMilitar() {
        return mil.getCp();
    }

    public void setCpMilitar(String cp) {
        mil.setCp(cp);
    }

    public String getPreccpMilitar() {
        return mil.getPreccp();
    }

    public void setPreccpMilitar(String preccp) {
        mil.setPreccp(preccp);
    }

    public String getNomeMilitar() {
        return mil.getNome();
    }

    public void setNomeMilitar(String nome) {
        mil.setNome(nome);
    }

    public String getSobrenomeMilitar() {
        return mil.getSobrenome();
    }

    public void setSobrenomeMilitar(String sobrenome) {
        mil.setSobrenome(sobrenome);
    }

    public String getNomeGuerraMilitar() {
        return mil.getNomeGuerra();
    }

    public void setNomeGuerraMilitar(String nomeGuerra) {
        mil.setNomeGuerra(nomeGuerra);
    }

    public String getSexoMilitar() {
        return mil.getSexo();
    }

    public void setSexoMilitar(String sexo) {
        mil.setSexo(sexo);
    }

    public String getPaiMilitar() {
        return mil.getPai();
    }

    public void setPaiMilitar(String pai) {
        mil.setPai(pai);
    }

    public String getMaeMilitar() {
        return mil.getMae();
    }

    public void setMaeMilitar(String mae) {
        mil.setMae(mae);
    }

    public String getTsMilitar() {
        return mil.getTs();
    }

    public void setTsMilitar(String ts) {
        mil.setTs(ts);
    }

    public String getFtrhMilitar() {
        return mil.getFtrh();
    }

    public void setFtrhMilitar(String ftrh) {
        mil.setFtrh(ftrh);
    }

    public String getEmailMilitar() {
        return mil.getEmail();
    }

    public void setEmailMilitar(String email) {
        mil.setEmail(email);
    }

    public String getFamiliarContatoMilitar() {
        return mil.getFamiliarContato();
    }

    public void setFamiliarContatoMilitar(String familiarContato) {
        mil.setFamiliarContato(familiarContato);
    }

    public String getFoneFamiliarContatoMilitar() {
        return mil.getFoneFamiliarContato();
    }

    public void setFoneFamiliarContatoMilitar(String foneFamiliarContato) {
        mil.setFoneFamiliarContato(foneFamiliarContato);
    }

    public int getSituacaoMilitar() {
        return mil.getSituacao();
    }

    public void setSituacaoMilitar(int situacao) {
        mil.setSituacao(situacao);
    }

    public Date getDataNascimentoMilitar() {
        return mil.getDataNascimento();
    }

    public void setDataNascimentoMilitar(Date dataNascimento) {
        mil.setDataNascimento(dataNascimento);
    }

    public Date getDataPracaMilitar() {
        return mil.getDataPraca();
    }

    public void setDataPracaMilitar(Date dataPraca) {
        mil.setDataPraca(dataPraca);
    }  
    
    public String getEndNumMilitar() {
        return mil.getEndNum();
    }

    public void setEndNumMilitar(String endNum) {
        mil.setEndNum(endNum);
    } 
    
    public int getIdPostoGraduacaoMilitar() {
        return mil.getIdPostoGraduacao();
    }

    public void setIdPostoGraduacaoMilitar(int idPostoGraduacao) {
        mil.setIdPostoGraduacao(idPostoGraduacao);
    }

    public String getNomePostoGraduacaoMilitar() {
        return mil.getNomePostoGraduacao();
    }

    public void setNomePostoGraduacaoMilitar(String nomePostoGraduacao) {
        mil.setNomePostoGraduacao(nomePostoGraduacao);
    }

    public String getAbreviaturaPostoGraduacaoMilitar() {
        return mil.getAbreviaturaPostoGraduacao();
    }

    public void setAbreviaturaPostoGraduacaoMilitar(String abreviaturaPostoGraduacao) {
        mil.setAbreviaturaPostoGraduacao(abreviaturaPostoGraduacao);
    }
    
    //Cidade
    public int getIdCidadeNaturalidadeMilitar() {
        return mil.getIdCidadeNaturalidade();
    }

    public void setIdCidadeNaturalidadeMilitar(int id) {
        mil.setIdCidadeNaturalidade(id);
    }

    public String getNomeCidadeNaturalidadeMilitar() {
        return mil.getNomeCidadeNaturalidade();
    }

    public void setNomeCidadeNaturalidadeMilitar(String nome) {
        mil.setNomeCidadeNaturalidade(nome);
    }
    
    public int getIdEstadoNaturalidadeMilitar() {
        return mil.getIdEstadoNaturalidade();
    }

    public void setIdEstadoNaturalidadeMilitar(int idEstado) {
        mil.setIdEstadoNaturalidade(idEstado);
    }

    public String getNomeEstadoNaturalidadeMilitar() {
        return mil.getNomeEstadoNaturalidade();
    }

    public void setNomeEstadoNaturalidadeMilitar(String nomeEstado) {
        mil.setNomeEstadoNaturalidade(nomeEstado);
    }

    public String getSiglaEstadoNaturalidadeMilitar() {
        return mil.getSiglaEstadoNaturalidade();
    }

    public void setSiglaEstadoNaturalidadeMilitar(String siglaEstado) {
        mil.setSiglaEstadoNaturalidade(siglaEstado);
    }
    
    //Escolaridade
    public int getIdEscolaridadeMilitar() {
        return mil.getIdEscolaridade();
    }

    public void setIdEscolaridadeMilitar(int id) {
        mil.setIdEscolaridade(id);
    }

    public String getNomeEscolaridadeMilitar() {
        return mil.getNomeEscolaridade();
    }

    public void setNomeEscolaridadeMilitar(String nome) {
        mil.setNomeEscolaridade(nome);
    }
    
    //Religiao
    public int getIdReligiaoMilitar() {
        return mil.getIdReligiao();
    }

    public void setIdReligiaoMilitar(int id) {
        mil.setIdReligiao(id);
    }

    public String getNomeReligiaoMilitar() {
        return mil.getNomeReligiao();
    }

    public void setNomeReligiaoMilitar(String nome) {
        mil.setNomeReligiao(nome);
    }
    
    //EstadoCivil
    public int getIdEstadoCivilMilitar() {
        return mil.getIdEstadoCivil();
    }

    public void setIdEstadoCivilMilitar(int id) {
        mil.setIdEstadoCivil(id);
    }

    public String getNomeEstadoCivilMilitar() {
        return mil.getNomeEstadoCivil();
    }

    public void setNomeEstadoCivilMilitar(String nome) {
        mil.setNomeEstadoCivil(nome);
    }
    
    //Qas
    public int getIdQasMilitar() {
        return mil.getIdQas();
    }

    public void setIdQasMilitar(int id) {
        mil.setIdQas(id);
    }

    public String getNomeQasMilitar() {
        return mil.getNomeQas();
    }

    public void setNomeQasMilitar(String nome) {
        mil.setNomeQas(nome);
    }

    public String getAbreviaturaQasMilitar() {
        return mil.getAbreviaturaQas();
    }

    public void setAbreviaturaQasMilitar(String abreviatura) {
        mil.setAbreviaturaQas(abreviatura);
    }
    
    //Setor
    public int getIdSetorMilitar() {
        return mil.getIdSetor();
    }

    public void milIdSetorMilitar(int id) {
        mil.setIdSetor(id);
    }

    public String getNomeSetorMilitar() {
        return mil.getNomeSetor();
    }

    public void setNomeSetorMilitar(String nome) {
        mil.setNomeSetor(nome);
    }

    public String getAbreviaturaSetorMilitar() {
        return mil.getAbreviaturaSetor();
    }

    public void setAbreviaturaSetorMilitar(String abreviatura) {
        mil.setAbreviaturaSetor(abreviatura);
    }
    
    public int getIdDivisaoSecaoMilitar() {
        return mil.getIdDivisaoSecao();
    }

    public void setIdDivisaoSecaoMilitar(int id) {
        mil.setIdDivisaoSecao(id);
    }

    public String getNomeDivisaoSecaoMilitar() {
        return mil.getNomeDivisaoSecao();
    }

    public void setNomeDivisaoSecaoMilitar(String nome) {
        mil.setNomeDivisaoSecao(nome);
    }

    public String getAbreviaturaDivisaoSecaoMilitar() {
        return mil.getAbreviaturaDivisaoSecao();
    }

    public void setAbreviaturaDivisaoSecaoMilitar(String abreviatura) {
        mil.setAbreviaturaDivisaoSecao(abreviatura);
    }
    
    //Comportamento
    public int getIdComportamentoMilitar() {
        return mil.getIdComportamento();
    }

    public void setIdComportamentoMilitar(int id) {
        mil.setIdComportamento(id);
    }

    public String getNomeComportamentoMilitar() {
        return mil.getNomeComportamento();
    }

    public void setNomeComportamentoMilitar(String nome) {
        mil.setNomeComportamento(nome);
    }
    
    //GrupoAcesso
    public int getIdGrupoAcessoMilitar() {
        return mil.getIdGrupoAcesso();
    }

    public void setIdGrupoAcessoMilitar(int id) {
        mil.setIdGrupoAcesso(id);
    }

    public String getNomeGrupoAcessoMilitar() {
        return mil.getNomeGrupoAcesso();
    }

    public void setNomeGrupoAcessoMilitar(String nome) {
        mil.setNomeGrupoAcesso(nome);
    }
}