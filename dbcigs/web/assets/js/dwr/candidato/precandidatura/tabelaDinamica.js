var colunasTentativas = [
    function(tentativas){ return tentativas.siglaCursoCat;},
    function(tentativas){ return tentativas.turma;},
    function(tentativas){ return tentativas.mtvDeslg;},
    function(tentativas){ return tentativas.faseDeslg;}
];

function getTentativasByCandidatoAndCurso(idtCandidato, idCurso){
    FacadeAjax.getQtdeTentativasByCandidatoAndCursoDWR(idtCandidato, idCurso, {
        callback:function(qtdeTentativas){
            dwr.util.setValues({qtdeTentativas: qtdeTentativas});
        }
    }); 
    
    FacadeAjax.getTentativasByCandidatoAndCursoDWR(idtCandidato, idCurso, {
        callback:function(tentativas){ 
            dwr.util.removeAllRows("tentativas");
            dwr.util.addRows("tentativas", tentativas, colunasTentativas, { escapeHtml: false });            
        }
    });
    
    FacadeAjax.getQtdeTentativasByCandidatoAndCursoDWR(idtCandidato, idCurso, {
       callback:function(qtdeTentativas){
            if(qtdeTentativas == 0){
                $("#info-tent").empty();
                $("#info-tent").append("Você tem mais 3 tentativas.");
                $("#info-tent").addClass("alert-success"); 
                $("#info-tent").removeClass("alert-danger");
                $("#div-btn-inicio-cad").empty();
                $("#div-btn-inicio-cad").append("<button type=\"submit\" id=\"btn\" class=\"btn btn-success btn-inicio-cadastro\" value=\"InicioCadastro\">Inciar Cadastro</button>");
            }
            if(qtdeTentativas == 1){
                $("#info-tent").empty();
                $("#info-tent").append("Você tem mais 2 tentativas.");
                $("#info-tent").addClass("alert-success"); 
                $("#info-tent").removeClass("alert-danger");
                $("#div-btn-inicio-cad").empty();
                $("#div-btn-inicio-cad").append("<button type=\"submit\" id=\"btn\" class=\"btn btn-success btn-inicio-cadastro\" value=\"InicioCadastro\">Inciar Cadastro</button>");
                
            }
            else if(qtdeTentativas == 2){
                $("#info-tent").empty();
                $("#info-tent").append("Você tem mais 1 tentativas.");
                $("#info-tent").addClass("alert-success"); 
                $("#info-tent").removeClass("alert-danger");
                $("#div-btn-inicio-cad").empty();
                $("#div-btn-inicio-cad").append("<button type=\"submit\" id=\"btn\" class=\"btn btn-success btn-inicio-cadastro\" value=\"InicioCadastro\">Inciar Cadastro</button>");
            }
            else if(qtdeTentativas == 3){
                $("#info-tent").empty();
                $("#info-tent").append("Você não tem mais tentativas.");
                $("#info-tent").addClass("alert-danger"); 
                $("#info-tent").removeClass("alert-success");
                $("#div-btn-inicio-cad").empty();
            }
       }
    });
    
    
}