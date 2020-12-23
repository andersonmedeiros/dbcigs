//CB Anderson de Paula Andrade Medeiros
//Técnico em Informática
//01.08.2020

FacadeAjax.getPGsByForcaExcetoCbSdDWR(2, {
    callback: function(pgs){
        dwr.util.removeAllOptions("txtPGrad");
        dwr.util.addOptions("txtPGrad", [{id: "0", nome: "Selecione um Posto/Graduação..."}], "id", "nome");
        dwr.util.addOptions("txtPGrad", pgs, "id", "nome");
    } 
});

function alteraUsuario(identidade){
    FacadeAjax.getMilitarByIdentidadeDWR(identidade, {
        callback: function(militar){
            dwr.util.setValues({
                txtIdtAtt: militar.identidade,
                txtPGrad: militar.idPostoGraduacao,
                txtNome: militar.nome,
                txtSobrenome: militar.sobrenome,
                txtNomeGuerra: militar.nomeguerra,
                txtNGS: militar.ngs
            });
        }
    });
}

function alteraSenhaUsuario(identidade){
    FacadeAjax.getMilitarByIdentidadeDWR(identidade, {
        callback: function(militar){
            dwr.util.setValues({
                txtIdtAttSenha: militar.identidade
            });
        }
    });
}