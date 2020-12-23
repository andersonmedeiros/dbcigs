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
    //Forca, Estado, OM, PostoGraduacao, Qas
    public ArrayList<TipoForca> getTiposForcaDWR() throws Throwable, Exception{
        ArrayList<TipoForca> tiposforca = new ArrayList<>();
        tiposforca = TipoForcaDAO.getTiposForcaDWR();
        return tiposforca;
    }
    public ArrayList<Forca> getForcasDWR() throws Throwable, Exception{
        ArrayList<Forca> forcas = new ArrayList<>();
        forcas = ForcaDAO.getForcasDWR();
        return forcas;
    }
    public Forca getForcaByIdDWR(int idForca) throws Throwable, Exception{
        Forca forca = ForcaDAO.getForcaByIdDWR(idForca);
        return forca;
    }
    public ArrayList<Forca> getForcasByIdTipoForcaDWR(int idTipoForca) throws Throwable, Exception{
        ArrayList<Forca> forcas = new ArrayList<>();
        forcas = ForcaDAO.getForcasByIdTipoForcaDWR(idTipoForca);
        return forcas;
    }
    public ArrayList<Estado> getEstadosByForcaDWR(int idForca) throws Throwable, Exception{
        ArrayList<Estado> estados = new ArrayList<>();
        estados = ForcaHasEstadoDAO.getEstadosByForcaDWR(idForca);
        return estados;
    }
    public ArrayList<Om> getOmsByForcaAndEstadoDWR(int idForca, int idEstado) throws Throwable, Exception{
        ArrayList<Om> oms = new ArrayList<>();
        oms = OmDAO.getOmsByForcaAndEstadoDWR(idForca, idEstado);
        return oms;
    }
    public ArrayList<PostoGraduacao> getPGsByForcaExcetoCbSdDWR(int idForca) throws Throwable, Exception{
        ArrayList<PostoGraduacao> pgs = new ArrayList<>();
        pgs = PostoGraduacaoDAO.getPGsByForcaExcetoCbSdDWR(idForca);
        return pgs;
    }
    public ArrayList<PostoGraduacao> getPGsByForcaExcetoOfGenAndCbSdDWR(int idForca) throws Throwable, Exception{
        ArrayList<PostoGraduacao> pgs = new ArrayList<>();
        pgs = PostoGraduacaoDAO.getPGsByForcaExcetoOfGenAndCbSdDWR(idForca);
        return pgs;
    }
    public ArrayList<PostoGraduacao> getPGsByForcaDWR(int idForca) throws Throwable, Exception{
        ArrayList<PostoGraduacao> pgs = new ArrayList<>();
        pgs = PostoGraduacaoDAO.getPGsByForcaDWR(idForca);
        return pgs;
    }
    public ArrayList<PostoGraduacao> getPGsByForcaAndCatDWR(int idForca, int idCategoria) throws Throwable, Exception{
        ArrayList<PostoGraduacao> pgs = new ArrayList<>();
        pgs = PostoGraduacaoDAO.getPGsByForcaAndCatDWR(idForca, idCategoria);
        return pgs;
    }
    public Om getOmByIdDWR(int idOM) throws Throwable, Exception{
        Om om = OmDAO.getOmByIdDWR(idOM);
        return om;
    }
    public ArrayList<Qas> getQasQmsByForcaDWR(int idForca) throws Throwable, Exception{
        ArrayList<Qas> qasqms = new ArrayList<>();
        qasqms = QasQmsDAO.getQasQmsByForcaDWR(idForca);
        return qasqms;
    }    
    //Oms Região Amazônica
    public ArrayList<Om> getOmsRegiaoNorteDWR(int idForca) throws Throwable, Exception{
        ArrayList<Om> oms = new ArrayList<>();
        oms = OmDAO.getOmsRegiaoNorteDWR(idForca);
        return oms;
    }
    
    //Estado, Cidade
    public ArrayList<Estado> getEstadosDWR() throws Throwable, Exception{
        ArrayList<Estado> estados = new ArrayList<>();
        estados = EstadoDAO.getEstadosDWR();
        return estados;
    }public ArrayList<Cidade> getCidadesByEstadoDWR(int idEstado) throws Throwable, Exception{
        ArrayList<Cidade> cidades = new ArrayList<>();
        cidades = CidadeDAO.getCidadesByEstadoDWR(idEstado);
        return cidades;
    }
    
    //Estado Civil
    public ArrayList<EstadoCivil> getEstadosCivisDWR() throws Throwable, Exception{
        ArrayList<EstadoCivil> ecs = new ArrayList<>();
        ecs = EstadoCivilDAO.getEstadosCivisDWR();
        return ecs;
    }
    
    //Escola Formação
    public ArrayList<EscolaFormacao> getEscolasFormacaoByForcaDWR(int idForca) throws Throwable, Exception{
        ArrayList<EscolaFormacao> escolas = new ArrayList<>();
        escolas = EscolaFormacaoDAO.getEscolasFormacaoByForcaDWR(idForca);
        return escolas;
    }
    
    //Grau de Parentesco
    public ArrayList<GrauParentesco> getGrausParentescoDWR() throws Throwable, Exception{
        ArrayList<GrauParentesco> grausparentesco = new ArrayList<>();
        grausparentesco = GrauParentescoDAO.getGrausParentescoDWR();
        return grausparentesco;
    }
    
    //Comportamentos
    public ArrayList<Comportamento> getComportamentosDWR() throws Throwable, Exception{
        ArrayList<Comportamento> comportamentos = new ArrayList<>();
        comportamentos = ComportamentoDAO.getComportamentosDWR();
        return comportamentos;
    }
    
    //Idiomas
    public ArrayList<Idioma> getIdiomasDWR() throws Throwable, Exception{
        ArrayList<Idioma> idiomas = new ArrayList<>();
        idiomas = IdiomaDAO.getIdiomasDWR();
        return idiomas;
    }
    
    //Cursos Militares
    public ArrayList<CursoMilitar> getCursosMilitaresByTipoAndCategoriaAndForcaDWR(int tipo, int idCategoria, int idForca) throws Throwable, Exception{
        ArrayList<CursoMilitar> cursosmilitares = new ArrayList<>();
        cursosmilitares = CursoMilitarHasCategoriaHasForcaDAO.getCursosMilitaresByTipoAndCategoriaAndForcaDWR(tipo, idCategoria, idForca);
        return cursosmilitares;
    }
    
    
    
    //Categoria
    public ArrayList<Categoria> getCategoriasDWR() throws Throwable, Exception{
        ArrayList<Categoria> categorias = new ArrayList<>();
        categorias = CategoriaDAO.getCategoriasDWR();
        return categorias;
    }
    public ArrayList<Categoria> getCategoriasByCursoDWR(int idCurso) throws Throwable, Exception{
        ArrayList<Categoria> categorias = new ArrayList<>();
        categorias = CursoHasCategoriaDAO.getCategoriasByCursoDWR(idCurso);
        return categorias;
    }
    
    //Curso;
    public Curso getCursoDWR(int idCurso) throws Throwable, Exception{
        Curso curso = new Curso();
        curso = CursoDAO.getCursoByIdDWR(idCurso);
        return curso;
    }
    public ArrayList<Curso> getCursosDWR() throws Throwable, Exception{
        ArrayList<Curso> cursos = new ArrayList<>();
        cursos = CursoDAO.getCursosDWR();
        return cursos;
    }
    
    //Turma
    public ArrayList<Turma> getTurmasByCursoAndCategoriaDWR(int idCurso, int idCategoria) throws Throwable, Exception{
        ArrayList<Turma> turmas = new ArrayList<>();
        turmas = TurmaDAO.getTurmasByCursoAndCategoriaDWR(idCurso, idCategoria);
        return turmas;
    }
    
    public ArrayList<Turma> getTurmasAbertasByCursoAndCategoriaDWR(int idCurso, int idCategoria) throws Throwable, Exception{
        ArrayList<Turma> turmas = new ArrayList<>();
        turmas = TurmaDAO.getTurmasAbertasByCursoAndCategoriaDWR(idCurso, idCategoria);
        return turmas;
    }
    
    //Tentativas
    public int getQtdeTentativasByCandidatoAndCursoDWR(String idtAluno, int idCurso) throws Throwable, Exception{
       return TentativaDAO.getQtdeTentativasByCandidatoAndCurso(idtAluno, idCurso);
    }
    
    public ArrayList<Tentativa> getTentativasByCandidatoAndCursoDWR(String idtAluno, int idCurso) throws Throwable, Exception{
        ArrayList<Tentativa> tentativas = new ArrayList<>();
        tentativas = TentativaDAO.getTentativasByCandidatoAndCursoDWR(idtAluno, idCurso);
        return tentativas;
    }
    
    //Aluno
    public Aluno getAlunoByIdentidadeDWR(String idtAluno) throws Throwable, Exception{
        Aluno al = AlunoDAO.getAlunoByIdentidadeDWR(idtAluno);
        return al;
    }
    
    public ArrayList<Aluno> getAlunosByTurmaDWR(int idTurma) throws Throwable, Exception{
        ArrayList<Aluno> alunos = new ArrayList<>();
        alunos = TurmaHasAlunoDAO.getAlunosByTurmaDWR(idTurma);
        return alunos;
    }
    
    public ArrayList<AvlPsico> getAvlPsicoAlunosByTurmaDWR(int idTurma) throws Throwable, Exception{
        ArrayList<AvlPsico> avls = new ArrayList<>();
        avls = AvlPsicoDAO.getAvlPsicoAlunosByTurmaDWR(idTurma);
        return avls;
    }
    
    public ArrayList<Tcm> getTcmsAlunosByTurmaDWR(int idTurma) throws Throwable, Exception{
        ArrayList<Tcm> tcms = new ArrayList<>();
        tcms = TcmDAO.getTcmsAlunosByTurmaDWR(idTurma);
        return tcms;
    }
    
    public ArrayList<Eaf> getEafsAlunosByTurmaDWR(int idTurma) throws Throwable, Exception{
        ArrayList<Eaf> eafs = new ArrayList<>();
        eafs = EafDAO.getEafsAlunosByTurmaDWR(idTurma);
        return eafs;
    }
    
    public ArrayList<InspecaoSaude> getISAlunosByTurmaDWR(int idTurma) throws Throwable, Exception{
        ArrayList<InspecaoSaude> iss = new ArrayList<>();
        iss = InspecaoSaudeDAO.getISAlunosByTurmaDWR(idTurma);
        return iss;
    }
    
    public String getSituacaoAvlPsicoByAlunoAndTurmaDWR(String idtAluno, int idTurma){
        return AvlPsicoDAO.getSituacaoAvlPsicoByAlunoAndTurmaDWR(idtAluno, idTurma);
    }
    
    public Militar getMilitarByIdentidadeDWR(String identidade) throws Throwable, Exception{
        return MilitarDAO.getMilitarByIdentidadeDWR(identidade);
    }
}
