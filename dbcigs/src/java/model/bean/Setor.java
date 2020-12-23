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
public class Setor {
    private int id;
    private String nome, abreviatura;
    private final DivisaoSecao divsec = new DivisaoSecao();

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

    public String getAbreviatura() {
        return abreviatura;
    }

    public void setAbreviatura(String abreviatura) {
        this.abreviatura = abreviatura;
    }
    
    public int getIdDivisaoSecao() {
        return divsec.getId();
    }

    public void setIdDivisaoSecao(int id) {
        divsec.setId(id);
    }

    public String getNomeDivisaoSecao() {
        return divsec.getNome();
    }

    public void setNomeDivisaoSecao(String nome) {
        divsec.setNome(nome);
    }

    public String getAbreviaturaDivisaoSecao() {
        return divsec.getAbreviatura();
    }

    public void setAbreviaturaDivisaoSecao(String abreviatura) {
        divsec.setAbreviatura(abreviatura);
    }
    
}
