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
    public ArrayList<Qas> getQasDWR() throws Throwable, Exception{
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
    public Militar getMilitarByIdtMilitarDWR(String idtmilitar) throws Throwable, Exception{
        return MilitarDAO.getMilitarByIdtMilitarDWR(idtmilitar);
    }
    
    //Titulo Eleitor by Identidade Militar
    public TituloEleitor getTituloEleitorByIdtMilitarDWR(String idtmilitar) throws Throwable, Exception{
        return TituloEleitorDAO.getTituloEleitorByIdtMilitarDWR(idtmilitar);
    }
    
    //Uniforme by Id
    public Uniforme getUniformeByIdDWR(int id) throws Throwable, Exception{
        return UniformeDAO.getUniformeByIdDWR(id);
    }
    
    //Cnh by Identidade Militar
    public Cnh getCnhByIdtMilitarDWR(String idtMilitar) throws Throwable, Exception{
        return CnhDAO.getCnhByIdtMilitarDWR(idtMilitar);
    }
    
    //Conjuge by Identidade Militar
    public Conjuge getConjugeByIdtMilitarDWR(String idtMilitar) throws Throwable, Exception{
        return ConjugeDAO.getConjugeByIdtMilitarDWR(idtMilitar);
    }
    
    //Dependentes by Identidade Militar
    public ArrayList<Dependente> getDependentesByIdtMilitarDWR(String idtmilitar) throws Throwable, Exception{
        ArrayList<Dependente> dependentes = DependenteDAO.getDependentesByIdtMilitarDWR(idtmilitar);
        return dependentes;
    }
    
    //Endereco by Id
    public Endereco getEnderecoByIdDWR(int id) throws Throwable, Exception{
        return EnderecoDAO.getEnderecoByIdDWR(id);
    }
    
    //Fones by Identidade Militar
    public ArrayList<Fone> getFonesByIdtMilitarDWR(String idtmilitar) throws Throwable, Exception{
        ArrayList<Fone> fones = FoneDAO.getFonesByIdtMilitarDWR(idtmilitar);
        return fones;
    }
    
    //Plano Chamada by Divisão ou Seção
    public ArrayList<Fone> getMilitaresByDivSecDWR(int idDivSec) throws Throwable, Exception{
        ArrayList<Fone> militares = RelatorioDAO.getMilitaresByDivSecDWR(idDivSec);
        return militares;
    }
    
    //Plano Chamada by Companhia
    public ArrayList<Fone> getMilitaresByCiaDWR(int cia) throws Throwable, Exception{
        ArrayList<Fone> militares = RelatorioDAO.getMilitaresByCiaDWR(cia);
        return militares;
    }
    
    //Plano Chamada CIGS
    public ArrayList<Fone> getMilitaresCIGSDWR() throws Throwable, Exception{
        ArrayList<Fone> militares = RelatorioDAO.getMilitaresCIGSDWR();
        return militares;
    }
    
    //Plano Chamada by Militar
    public ArrayList<Fone> getPlanoChamadaByMilitarDWR(int idPostoGraduacao, String nomeguerra) throws Throwable, Exception{
        ArrayList<Fone> militares = RelatorioDAO.getPlanoChamadaByMilitarDWR(idPostoGraduacao, nomeguerra);
        return militares;
    }
    
    //Plano Chamada by Posto ou Graduação
    public ArrayList<Fone> getMilitaresByPGradDWR(int idPostoGraduacao) throws Throwable, Exception{
        ArrayList<Fone> militares = RelatorioDAO.getMilitaresByPGradDWR(idPostoGraduacao);
        return militares;
    }
}
