/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import java.util.ArrayList;
import model.bean.*;
import model.dao.*;
/**
 *
 * @author anderson
 */
public class FacadeAjax {
    //Lista Divisões e Seções 
    public ArrayList<DivisaoSecao> getDivisoesSecoesDWR() throws Throwable, Exception{
        ArrayList<DivisaoSecao> divisoessecoes = DivisaoSecaoDAO.getDivisoesSecoesDWR();
        return divisoessecoes;
    }
    
    //Lista Setores
    public ArrayList<Setor> getSetoresByDivisaoSecaoDWR(int idDivisaoSecao) throws Throwable, Exception{
        ArrayList<Setor> setores = SetorDAO.getSetoresByDivisaoSecaoDWR(idDivisaoSecao);
        return setores;
    }
    
    //Lista Postos e Graduações    
    public ArrayList<PostoGraduacao> getPostosGraduacoesDWR() throws Throwable, Exception{
        ArrayList<PostoGraduacao> pgs = PostoGraduacaoDAO.getPGsDWR();
        return pgs;
    }
    
    //Lista Quadros, Armas e Serviços
    public ArrayList<Qas> getQasDWR(int idForca) throws Throwable, Exception{
        ArrayList<Qas> qas = QasDAO.getQasDWR();
        return qas;
    }
    
    //Lista Estados 
    public ArrayList<Estado> getEstadosDWR() throws Throwable, Exception{
        ArrayList<Estado> estados = EstadoDAO.getEstadosDWR();
        return estados;
    }
    
    //Lista Cidades
    public ArrayList<Cidade> getCidadesByEstadoDWR(int idEstado) throws Throwable, Exception{
        ArrayList<Cidade> cidades = CidadeDAO.getCidadesByEstadoDWR(idEstado);
        return cidades;
    }
    
    //Lista Estados Civis
    public ArrayList<EstadoCivil> getEstadosCivisDWR() throws Throwable, Exception{
        ArrayList<EstadoCivil> ecs = EstadoCivilDAO.getEstadosCivisDWR();
        return ecs;
    }
    
    //Lista Graus de Parentesco
    public ArrayList<GrauParentesco> getGrausParentescoDWR() throws Throwable, Exception{
        ArrayList<GrauParentesco> grausparentesco = GrauParentescoDAO.getGrausParentescoDWR();
        return grausparentesco;
    }
    
    //Lista Comportamentos
    public ArrayList<Comportamento> getComportamentosDWR() throws Throwable, Exception{
        ArrayList<Comportamento> comportamentos = ComportamentoDAO.getComportamentosDWR();
        return comportamentos;
    }
    
    //Lista Escolaridades
    public ArrayList<Escolaridade> getEscolaridadesDWR() throws Throwable, Exception{
        ArrayList<Escolaridade> escolaridades = EscolaridadeDAO.getEscolaridadesDWR();
        return escolaridades;
    }
    
    //Lista Religiões
    public ArrayList<Religiao> getReligioesDWR() throws Throwable, Exception{
        ArrayList<Religiao> religioes = ReligiaoDAO.getReligioesDWR();
        return religioes;
    }
    
    //Militar by Identidade Militar
    public Militar getMilitarByIdtmiMilitarDWR(String idtmilitar) throws Throwable, Exception{
        return MilitarDAO.getMilitarByIdtMilitarDWR(idtmilitar);
    }
}
