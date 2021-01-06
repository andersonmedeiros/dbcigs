/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.bean;

import model.dao.EnderecoDAO;

/**
 *
 * @author anderson
 */
public class teste {
    public static void main(String[] args) {
        int idEndResid;
        EnderecoDAO endDAO = new EnderecoDAO();
        Endereco endExistente = endDAO.getEnderecoExistente("69073571", "TRAVESSA JONAS BARRETO", null, null, "SÃO LÁZARO", 256);
                //Verifica se o endereço já existe no banco de dados
                if(endExistente != null){
                    idEndResid = endExistente.getId();
                    System.out.println(idEndResid + " " + endExistente.getDescricao());
                }else{
                    System.out.println("novo");
                }
    }
}
