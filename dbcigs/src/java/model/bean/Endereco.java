/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.bean;

/**
 *
 * @author anderson
 */
public class Endereco {
    private int id;
    private String cep, descricao, complemento, pontoreferencia, bairro;
    private final Cidade cid = new Cidade();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getPontoreferencia() {
        return pontoreferencia;
    }

    public void setPontoreferencia(String pontoreferencia) {
        this.pontoreferencia = pontoreferencia;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }
    
    public int getIdCidade() {
        return cid.getId();
    }

    public void setIdCidade(int id) {
        cid.setId(id);
    }

    public String getNomeCidade() {
        return cid.getNome();
    }

    public void setNomeCidade(String nome) {
        cid.setNome(nome);
    }
    
    public int getIdEstadoCidade() {
        return cid.getIdEstado();
    }

    public void setIdEstadoCidade(int idEstado) {
        cid.setIdEstado(idEstado);
    }

    public String getNomeEstadoCidade() {
        return cid.getNomeEstado();
    }

    public void setNomeEstadoCidade(String nomeEstado) {
        cid.setNomeEstado(nomeEstado);
    }

    public String getSiglaEstadoCidade() {
        return cid.getSiglaEstado();
    }

    public void setSiglaEstadoCidade(String siglaEstado) {
        cid.setSiglaEstado(siglaEstado);
    }    
}
