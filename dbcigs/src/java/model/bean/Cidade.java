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
public class Cidade {
    private int id;
    private String nome;
    private final Estado estado = new Estado();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public int getIdEstado() {
        return estado.getId();
    }

    public void setIdEstado(int idEstado) {
        estado.setId(idEstado);
    }

    public String getNomeEstado() {
        return estado.getNome();
    }

    public void setNomeEstado(String nomeEstado) {
        estado.setNome(nomeEstado);
    }

    public String getSiglaEstado() {
        return estado.getSigla();
    }

    public void setSiglaEstado(String siglaEstado) {
        estado.setSigla(siglaEstado);
    }
}
