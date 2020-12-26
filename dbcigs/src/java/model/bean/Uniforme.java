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
public class Uniforme {
    private int id, tamCoturno;
    private String tamGandola, tamCalca, tamCamisaCamuflada;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTamCoturno() {
        return tamCoturno;
    }

    public void setTamCoturno(int tamCoturno) {
        this.tamCoturno = tamCoturno;
    }

    public String getTamGandola() {
        return tamGandola;
    }

    public void setTamGandola(String tamGandola) {
        this.tamGandola = tamGandola;
    }

    public String getTamCalca() {
        return tamCalca;
    }

    public void setTamCalca(String tamCalca) {
        this.tamCalca = tamCalca;
    }

    public String getTamCamisaCamuflada() {
        return tamCamisaCamuflada;
    }

    public void setTamCamisaCamuflada(String tamCamisaCamuflada) {
        this.tamCamisaCamuflada = tamCamisaCamuflada;
    }
}
