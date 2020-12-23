function montaSelectCurso(cursos){
    dwr.util.removeAllOptions("txtCurso");
    dwr.util.addOptions("txtCurso", [{id: "0", sigla: "Selecione um Curso..."}], "id", "sigla");
    dwr.util.addOptions("txtCurso", cursos, "id", "sigla");
}

FacadeAjax.getCursosDWR(montaSelectCurso);
function montaSelectDependenteCurso(idCurso){
    FacadeAjax.getCategoriasByCursoDWR(idCurso, {
       callback: function(categorias){
           dwr.util.removeAllOptions("txtCategoria");
           dwr.util.addOptions("txtCategoria", [{id: "0", nome: "Selecione uma Categoria..."}], "id", "nome");
           dwr.util.addOptions("txtCategoria", categorias, "id", "nome");
       } 
    });
}

function montaSelectDependenteCursoAndCategoria(idCurso, idCategoria){
    FacadeAjax.getTurmasByCursoAndCategoriaDWR(idCurso, idCategoria, {
       callback: function(turmas){
           dwr.util.removeAllOptions("txtTurma");
           dwr.util.addOptions("txtTurma", [{id: "0", turma: "Selecione uma Turma..."}], "id", "turma");
           dwr.util.addOptions("txtTurma", turmas, "id", "turma");
       } 
    });
}

$("select[name=txtCurso").change(function(){
    montaSelectDependenteCurso(this.value);
});

$("select[name=txtCategoria").change(function(){
    var idCurso = $("select[name=txtCurso]").val();
    montaSelectDependenteCursoAndCategoria(idCurso, this.value);
});

