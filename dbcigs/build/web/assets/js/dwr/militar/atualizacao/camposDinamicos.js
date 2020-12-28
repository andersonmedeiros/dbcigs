//Anderson de Paula Andrade Medeiros
//Técnico em Informática
//28.12.2020


/*function alteraUsuario(identidade){
    FacadeAjax.getMilitarByIdentidadeDWR(identidade, {
        callback: function(mil){
            dwr.util.setValues({
                txtIdtAtt: mil.identidade,
                txtPGrad: mil.idPostoGraduacao,
                txtNome: mil.nome,
                txtSobrenome: mil.sobrenome,
                txtNomeGuerra: mil.nomeguerra
            });
        }
    });
}*/

function alteraSenhaMilitar(idtMilitar){
    FacadeAjax.getMilitarByIdtMilitarDWR(idtMilitar, {
        callback: function(mil){
            dwr.util.setValues({                
                txtIdtAttSenha: mil.idtMilitar
            });
        }
    });
}