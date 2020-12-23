/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
   var atual_fs, prox_fs, anterior_fs;
   var form = $("#formCadCandidato");
   
   
   function prox(elemento){
       atual_fs = $(elemento).parent();
       prox_fs = $(elemento).parent().next();
       
       $('#progress li').eq($('fieldset').index(prox_fs)).addClass('ativo');
       atual_fs.hide(800);
       prox_fs.show(800);
        
   }
   
   $('.anterior').click(function(){
       atual_fs = $(this).parent();
       anterior_fs = $(this).parent().prev();
       $('#progress li').eq($('fieldset').index(atual_fs)).removeClass('ativo');
       atual_fs.hide(800);
       anterior_fs.show(800);
        
   });
   
   $('#formCadCandidato button[type=button]').click(function(){
      return false; 
   });
   
   
   //Etapa 1: OM ATUAL
   $("button[name=btnProximo2]").click(function(){
        var foneOM = $("input[name=txtFoneOM]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        var endCepOM = $("input[name=txtEndCepOM]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        if($("select[name=txtForca]").val() == '0'){
            $("select[name=txtForca]").removeClass("is-valid");
            $("select[name=txtForca]").addClass("is-invalid");
            $("select[name=txtForca]").focus();
        }
        else if($("input[name=txtGCmdo]").val() == ''){
            $("input[name=txtGCmdo]").removeClass("is-valid");
            $("input[name=txtGCmdo]").addClass("is-invalid");
            $("input[name=txtGCmdo]").focus();
        }
        else if($("input[name=txtEscEnq]").val() == ''){
            $("input[name=txtEscEnq]").removeClass("is-valid");
            $("input[name=txtEscEnq]").addClass("is-invalid");
            $("input[name=txtEscEnq]").focus();
        }
        //Organização Militar - OM
        else if($("input[name=txtNomeOM]").val() == ''){
            $("input[name=txtNomeOM]").removeClass("is-valid");
            $("input[name=txtNomeOM]").addClass("is-invalid");
            $("input[name=txtNomeOM]").focus();
        }
        else if($("input[name=txtAbrevOM]").val() == ''){
            $("input[name=txtAbrevOM]").removeClass("is-valid");
            $("input[name=txtAbrevOM]").addClass("is-invalid");
            $("input[name=txtAbrevOM]").focus();
        }                
        else if(foneOM == ''){
            $("input[name=txtFoneOM]").removeClass("is-valid");
            $("input[name=txtFoneOM]").addClass("is-invalid");
            $("input[name=txtFoneOM]").focus();
            $(".invalid-fone").html("Campo Obrigatório!");            
        }
        else if(foneOM == '0000000000' || foneOM == '1111111111' || foneOM == '2222222222' || foneOM == '3333333333' ||                 
                 foneOM == '4444444444' || foneOM == '5555555555' || foneOM == '6666666666' || foneOM == '7777777777' ||                 
                 foneOM == '8888888888' || foneOM == '9999999999'){             
            $("input[name=txtFoneOM]").removeClass("is-valid");
            $("input[name=txtFoneOM]").addClass("is-invalid");
            $("input[name=txtFoneOM]").focus();
            $(".invalid-fone").html("Fone Inválido!");            
        }
        //Comandante
        else if($("select[name=txtPGradCmtOM]").val() == '0'){
            $("select[name=txtPGradCmtOM]").removeClass("is-valid");
            $("select[name=txtPGradCmtOM]").addClass("is-invalid");
            $("select[name=txtPGradCmtOM]").focus();
        }
        else if($("input[name=txtNomeCmtOM]").val() == ''){
            $("input[name=txtNomeCmtOM]").removeClass("is-valid");
            $("input[name=txtNomeCmtOM]").addClass("is-invalid");
            $("input[name=txtNomeCmtOM]").focus();
        }
        else if($("input[name=txtSobrenomeCmtOM]").val() == ''){
            $("input[name=txtSobrenomeCmtOM]").removeClass("is-valid");
            $("input[name=txtSobrenomeCmtOM]").addClass("is-invalid");
            $("input[name=txtSobrenomeCmtOM]").focus();
        }
        else if($("input[name=txtNomeGuerraCmtOM]").val() == ''){
            $("input[name=txtNomeGuerraCmtOM]").removeClass("is-valid");
            $("input[name=txtNomeGuerraCmtOM]").addClass("is-invalid");
            $("input[name=txtNomeGuerraCmtOM]").focus();
        }
        //Chefe Imediato
        else if($("select[name=txtPGradChImtoOM]").val() == '0'){
            $("select[name=txtPGradChImtoOM]").removeClass("is-valid");
            $("select[name=txtPGradChImtoOM]").addClass("is-invalid");
            $("select[name=txtPGradChImtoOM]").focus();
        }
        else if($("input[name=txtNomeChImtoOM]").val() == ''){
            $("input[name=txtNomeChImtoOM]").removeClass("is-valid");
            $("input[name=txtNomeChImtoOM]").addClass("is-invalid");
            $("input[name=txtNomeChImtoOM]").focus();
        }
        else if($("input[name=txtSobrenomeChImtoOM]").val() == ''){
            $("input[name=txtSobrenomeChImtoOM]").removeClass("is-valid");
            $("input[name=txtSobrenomeChImtoOM]").addClass("is-invalid");
            $("input[name=txtSobrenomeChImtoOM]").focus();
        }
        else if($("input[name=txtNomeGuerraChImtoOM]").val() == ''){
            $("input[name=txtNomeGuerraChImtoOM]").removeClass("is-valid");
            $("input[name=txtNomeGuerraChImtoOM]").addClass("is-invalid");
            $("input[name=txtNomeGuerraChImtoOM]").focus();
        }
        //Endereço da OM
        else if(endCepOM == ''){
            $("input[name=txtEndCepOM]").removeClass("is-valid");
            $("input[name=txtEndCepOM]").addClass("is-invalid");
            $("input[name=txtEndCepOM]").focus();
            $(".invalid-cep").html("Campo Obrigatório!");
        }
        else if(endCepOM == '00000000' || endCepOM == '11111111' || endCepOM == '22222222' || endCepOM == '33333333' ||                 
                endCepOM == '44444444' || endCepOM == '55555555' || endCepOM == '66666666' || endCepOM == '77777777' ||                 
                endCepOM == '88888888' || endCepOM == '99999999'){
            $("input[name=txtEndCepOM]").removeClass("is-valid");
            $("input[name=txtEndCepOM]").addClass("is-invalid");
            $("input[name=txtEndCepOM]").focus();
            $(".invalid-cep").html("CEP Inválido!");            
        }
        else if($("select[name=txtEndLogOM]").val() == '0'){
            $("select[name=txtEndLogOM]").removeClass("is-valid");
            $("select[name=txtEndLogOM]").addClass("is-invalid");
            $("select[name=txtEndLogOM]").focus();
        }
        else if($("input[name=txtEndNomeOM]").val() == ''){
            $("input[name=txtEndNomeOM]").removeClass("is-valid");
            $("input[name=txtEndNomeOM]").addClass("is-invalid");
            $("input[name=txtEndNomeOM]").focus();
        }
        else if($("input[name=txtEndNumOM]").val() == ''){
            $("input[name=txtEndNumOM]").removeClass("is-valid");
            $("input[name=txtEndNumOM]").addClass("is-invalid");
            $("input[name=txtEndNumOM]").focus();
        }
        else if($("select[name=txtEndPaisOM]").val() == '0'){
            $("select[name=txtEndPaisOM]").removeClass("is-valid");
            $("select[name=txtEndPaisOM]").addClass("is-invalid");
            $("select[name=txtEndPaisOM]").focus();
        }
        else if($("select[name=txtEndEstadoOM]").val() == '0'){
            $("select[name=txtEndEstadoOM]").removeClass("is-valid");
            $("select[name=txtEndEstadoOM]").addClass("is-invalid");
            $("select[name=txtEndEstadoOM]").focus();
        }
        else if($("select[name=txtEndCidadeOM]").val() == '0'){
            $("select[name=txtEndCidadeOM]").removeClass("is-valid");
            $("select[name=txtEndCidadeOM]").addClass("is-invalid");
            $("select[name=txtEndCidadeOM]").focus();
        }
        else if($("select[name=txtEndBairroOM]").val() == '0'){
            $("select[name=txtEndBairroOM]").removeClass("is-valid");
            $("select[name=txtEndBairroOM]").addClass("is-invalid");
            $("select[name=txtEndBairroOM]").focus();
        }        
        //Próxima Etapa
        else{
            prox($(this));
        }
    });
    var cpfOk = 0;
    //Campo Input CPF
    function validCPFAlTReal(campo){  
        $(campo).change(function(){
            var cpfAl = $(campo).val().replace(".","").replace(".","").replace("-","");
            if(cpfAl == ''){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpfAl").html("Campo Obrigatório!");
                cpfOk = 0;
            }
            else if(cpfAl == '00000000000' || cpfAl == '11111111111' || cpfAl == '22222222222' || cpfAl == '33333333333' ||                 
                    cpfAl == '44444444444' || cpfAl == '55555555555' || cpfAl == '66666666666' || cpfAl == '77777777777' ||                 
                    cpfAl == '88888888888' || cpfAl == '99999999999'){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpfAl").html("CPF Inválido!");
                cpfOk = 0;
            }else{
                // Valida 1o digito	
                var add = 0;	
                for (var i=0; i < 9; i ++)		
                    add += parseInt(cpfAl.charAt(i)) * (10 - i);	
                    var rev = 11 - (add % 11);	
                    if (rev == 10 || rev == 11)		
                        rev = 0;	
                    if (rev != parseInt(cpfAl.charAt(9))){
                        $(campo).removeClass("is-valid");
                        $(campo).addClass("is-invalid");
                        $(".invalid-cpfAl").html("CPF Inválido!");
                        cpfOk = 0;
                    }else{
                        $(campo).removeClass("is-invalid");
                        $(campo).addClass("is-valid");
                        cpfOk = 1;
                    }
                // Valida 2o digito	
                add = 0;	
                for (var i = 0; i < 10; i ++)		
                    add += parseInt(cpfAl.charAt(i)) * (11 - i);	
                rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)	
                    rev = 0;	
                if (rev != parseInt(cpfAl.charAt(10))){
                    $(campo).removeClass("is-valid");
                    $(campo).addClass("is-invalid");
                    $(".invalid-cpfAl").html("CPF Inválido!");
                    cpfOk = 0;
                }else{
                    $(campo).removeClass("is-invalid");
                    $(campo).addClass("is-valid");
                    cpfOk = 1;
                }    
            }        
        });
    };
    validCPFAlTReal("input[name=txtCpfAl]");
    //Etapa 2: DADOS INDIVIDUAIS
    $("button[name=btnProximo3]").click(function(){
        var dataNascAl = $("input[name=txtDataNascAl]").val();
        var dataNascAlSplit = dataNascAl.split('-');        
        var diaNascAl = dataNascAlSplit[2];
        var mesNascAl = dataNascAlSplit[1];
        var anoNascAl = dataNascAlSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        var idtMilAl = $("input[name=txtIdtMilAl]").val().replace("-","").replace(" ","");
        var cpfAl = $("input[name=txtCpfAl]").val().replace(".","").replace(".","").replace("-","");
        
        //Dados Individuais
        if($("select[name=txtPGradAl]").val() == '0'){
            $("select[name=txtPGradAl]").removeClass("is-valid");
            $("select[name=txtPGradAl]").addClass("is-invalid");
            $("select[name=txtPGradAl]").focus();
        }
        else if($("select[name=txtArmaAl]").val() == '0'){
            $("select[name=txtArmaAl]").removeClass("is-valid");
            $("select[name=txtArmaAl]").addClass("is-invalid");
            $("select[name=txtArmaAl]").focus();
        }
        else if(dataNascAl == ''){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("Campo Obrigatório!");
        }       
        else if((anoNascAl == anoAtual) && (mesNascAl == mesAtual) && (diaNascAl > diaAtual)){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("Data Inválida!");
        }       
        else if((anoNascAl == anoAtual) && (mesNascAl > mesAtual)){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("Data Inválida!");
        }       
        else if((anoNascAl > anoAtual)){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("Data Inválida!");
        }       
        else if((anoAtual - anoNascAl) < 18){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }
        else if($("input[name=txtNomeAl]").val() == ''){
            $("input[name=txtNomeAl]").removeClass("is-valid");
            $("input[name=txtNomeAl]").addClass("is-invalid");
            $("input[name=txtNomeAl]").focus();
        }
        else if($("input[name=txtSobrenomeAl]").val() == ''){
            $("input[name=txtSobrenomeAl]").removeClass("is-valid");
            $("input[name=txtSobrenomeAl]").addClass("is-invalid");
            $("input[name=txtSobrenomeAl]").focus();
        }
        else if($("input[name=txtNomeGuerraAl]").val() == ''){
            $("input[name=txtNomeGuerraAl]").removeClass("is-valid");
            $("input[name=txtNomeGuerraAl]").addClass("is-invalid");
            $("input[name=txtNomeGuerraAl]").focus();
        }
        else if(idtMilAl == ''){
            $("input[name=txtIdtMilAl]").removeClass("is-valid");
            $("input[name=txtIdtMilAl]").addClass("is-invalid");
            $("input[name=txtIdtMilAl]").focus();
            $(".invalid-idtMilAl").html("Campo Obrigatório!");
        }
        else if(idtMilAl == '0000000000' || idtMilAl == '1111111111' || idtMilAl == '2222222222' || idtMilAl == '3333333333' ||                 
                idtMilAl == '4444444444' || idtMilAl == '5555555555' || idtMilAl == '6666666666' || idtMilAl == '7777777777' ||                 
                idtMilAl == '8888888888' || idtMilAl == '9999999999'){
            $("input[name=txtIdtMilAl]").removeClass("is-valid");
            $("input[name=txtIdtMilAl]").addClass("is-invalid");
            $("input[name=txtIdtMilAl]").focus();
            $(".invalid-idtMilAl").html("Identidade Militar Inválida!");            
        }
        else if(cpfAl == ''){
            $("input[name=txtCpfAl]").removeClass("is-valid");
            $("input[name=txtCpfAl]").addClass("is-invalid");
            $("input[name=txtCpfAl]").focus();
            $(".invalid-cpfAl").html("Campo Obrigatório!");
        }        
        else if(cpfAl == '00000000000' || cpfAl == '11111111111' || cpfAl == '22222222222' || cpfAl == '33333333333' ||                 
                cpfAl == '44444444444' || cpfAl == '55555555555' || cpfAl == '66666666666' || cpfAl == '77777777777' ||                 
                cpfAl == '88888888888' || cpfAl == '99999999999'){            
            $("input[name=txtCpfAl]").removeClass("is-valid");
            $("input[name=txtCpfAl]").addClass("is-invalid");
            $("input[name=txtCpfAl]").focus();
            $(".invalid-cpfAl").html("CPF Inválido!");            
        }
        
        else if(cpfOk == 0){
            // Valida 1o digito	
            var add = 0;	
            for (var i=0; i < 9; i ++)		
                add += parseInt(cpfAl.charAt(i)) * (10 - i);	
            var rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpfAl.charAt(9))){
                $("input[name=txtCpfAl]").removeClass("is-valid");
                $("input[name=txtCpfAl]").addClass("is-invalid");
                $("input[name=txtCpfAl]").focus();
                $(".invalid-cpfAl").html("CPF Inválido!");

            }else{
                $("input[name=txtCpfAl]").removeClass("is-invalid");
                $("input[name=txtCpfAl]").addClass("is-valid");
            }
            // Valida 2o digito	
            add = 0;	
            for (var i = 0; i < 10; i ++)		
                add += parseInt(cpfAl.charAt(i)) * (11 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)	
                rev = 0;	
            if (rev != parseInt(cpfAl.charAt(10))){
                $("input[name=txtCpfAl]").removeClass("is-valid");
                $("input[name=txtCpfAl]").addClass("is-invalid");
                $("input[name=txtCpfAl]").focus();
                $(".invalid-cpfAl").html("CPF Inválido!");
                
            }else{
                $("input[name=txtCpfAl]").removeClass("is-invalid");
                $("input[name=txtCpfAl]").addClass("is-valid");
            }    
        }
        else if($("input[name=txtUltDataPracaAl]").val() == ''){
            $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
            $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
            $("input[name=txtUltDataPracaAl]").focus();
        }
        else if($("input[name=txtNatEstAl]").val() == ''){
            $("input[name=txtNatEstAl]").removeClass("is-valid");
            $("input[name=txtNatEstAl]").addClass("is-invalid");
            $("input[name=txtNatEstAl]").focus();
        }
        else if($("input[name=txtNatCidAl]").val() == ''){
            $("input[name=txtNatCidAl]").removeClass("is-valid");
            $("input[name=txtNatCidAl]").addClass("is-invalid");
            $("input[name=txtNatCidAl]").focus();
        }
        else if($("select[name=txtEstCivilAl]").val() == '0'){
            $("select[name=txtEstCivilAl]").removeClass("is-valid");
            $("select[name=txtEstCivilAl]").addClass("is-invalid");
            $("select[name=txtEstCivilAl]").focus();
        }
        else if($("select[name=txtSexoAl]").val() == '0'){
            $("select[name=txtSexoAl]").removeClass("is-valid");
            $("select[name=txtSexoAl]").addClass("is-invalid");
            $("select[name=txtSexoAl]").focus();
        }
        else if($("select[name=txtTSAl]").val() == '0'){
            $("select[name=txtTSAl]").removeClass("is-valid");
            $("select[name=txtTSAl]").addClass("is-invalid");
            $("select[name=txtTSAl]").focus();
        }
        else if($("select[name=txtFatorRHAl]").val() == '0'){
            $("select[name=txtFatorRHAl]").removeClass("is-valid");
            $("select[name=txtFatorRHAl]").addClass("is-invalid");
            $("select[name=txtFatorRHAl]").focus();
        }
        else if($("input[name=txtTitEleitorNumAl]").val() == ''){
            $("input[name=txtTitEleitorNumAl]").removeClass("is-valid");
            $("input[name=txtTitEleitorNumAl]").addClass("is-invalid");
            $("input[name=txtTitEleitorNumAl]").focus();
        }
        else if($("input[name=txtTitEleitorZonaAl]").val() == ''){
            $("input[name=txtTitEleitorZonaAl]").removeClass("is-valid");
            $("input[name=txtTitEleitorZonaAl]").addClass("is-invalid");
            $("input[name=txtTitEleitorZonaAl]").focus();
        }
        else if($("input[name=txtTitEleitorSecaoAl]").val() == ''){
            $("input[name=txtTitEleitorSecaoAl]").removeClass("is-valid");
            $("input[name=txtTitEleitorSecaoAl]").addClass("is-invalid");
            $("input[name=txtTitEleitorSecaoAl]").focus();
        }
        else if($("input[name=txtTitEleitorEstAl]").val() == ''){
            $("input[name=txtTitEleitorEstAl]").removeClass("is-valid");
            $("input[name=txtTitEleitorEstAl]").addClass("is-invalid");
            $("input[name=txtTitEleitorEstAl]").focus();
        }
        else if($("input[name=txtTitEleitorCidAl]").val() == ''){
            $("input[name=txtTitEleitorCidAl]").removeClass("is-valid");
            $("input[name=txtTitEleitorCidAl]").addClass("is-invalid");
            $("input[name=txtTitEleitorCidAl]").focus();
        }
        else if($("input[name=txtBancoAl]").val() == ''){
            $("input[name=txtBancoAl]").removeClass("is-valid");
            $("input[name=txtBancoAl]").addClass("is-invalid");
            $("input[name=txtBancoAl]").focus();
        }
        else if($("input[name=txtAgenciaAl]").val() == ''){
            $("input[name=txtAgenciaAl]").removeClass("is-valid");
            $("input[name=txtAgenciaAl]").addClass("is-invalid");
            $("input[name=txtAgenciaAl]").focus();
        }
        else if($("input[name=txtContaAl]").val() == ''){
            $("input[name=txtContaAl]").removeClass("is-valid");
            $("input[name=txtContaAl]").addClass("is-invalid");
            $("input[name=txtContaAl]").focus();
        }
        else if($("input[name=txtEmailAl]").val() == ''){
            $("input[name=txtEmailAl]").removeClass("is-valid");
            $("input[name=txtEmailAl]").addClass("is-invalid");
            $("input[name=txtEmailAl]").focus();
        }
        else if($("input[name=txtFoneAl]").val() == ''){
            $("input[name=txtFoneAl]").removeClass("is-valid");
            $("input[name=txtFoneAl]").addClass("is-invalid");
            $("input[name=txtFoneAl]").focus();
        }
        else if($("select[name=txtNumCoturnoAl]").val() == '0'){
            $("select[name=txtNumCoturnoAl]").removeClass("is-valid");
            $("select[name=txtNumCoturnoAl]").addClass("is-invalid");
            $("select[name=txtNumCoturnoAl]").focus();
        }
        else if($("select[name=txtTamGandAl]").val() == '0'){
            $("select[name=txtTamGandAl]").removeClass("is-valid");
            $("select[name=txtTamGandAl]").addClass("is-invalid");
            $("select[name=txtTamGandAl]").focus();
        }
        else if($("select[name=txtTamCalcaAl]").val() == '0'){
            $("select[name=txtTamCalcaAl]").removeClass("is-valid");
            $("select[name=txtTamCalcaAl]").addClass("is-invalid");
            $("select[name=txtTamCalcaAl]").focus();
        }
        else if($("select[name=txtTamCamCmfAl]").val() == '0'){
            $("select[name=txtTamCamCmfAl]").removeClass("is-valid");
            $("select[name=txtTamCamCmfAl]").addClass("is-invalid");
            $("select[name=txtTamCamCmfAl]").focus();
        }
        else if($("select[name=txtPossuiCNH]").val() == '0'){
            $("select[name=txtPossuiCNH]").removeClass("is-valid");
            $("select[name=txtPossuiCNH]").addClass("is-invalid");
            $("select[name=txtPossuiCNH]").focus();
        }
        else if($("select[name=txtTraraVeiculo]").val() == '0'){
            $("select[name=txtTraraVeiculo]").removeClass("is-valid");
            $("select[name=txtTraraVeiculo]").addClass("is-invalid");
            $("select[name=txtTraraVeiculo]").focus();
        } 
        //Não possui CNH
        else if($("select[name=txtPossuiCNH]").val() == 'n'){                       
            //Não possui Veículo
            if($("select[name=txtTraraVeiculo]").val() == 'n'){
                prox($(this));
            }
            //Possui Veículo
            else if($("select[name=txtTraraVeiculo]").val() == 's'){
                for(var i=0;i<($("input[name=txtPlacaVeiculoAl").length);i++){
                    if($("select[name=txtTipoVeiculoAl]").eq(i).val() == '0' ){
                        $("select[name=txtTipoVeiculoAl]").eq(i).removeClass("is-valid");
                        $("select[name=txtTipoVeiculoAl]").eq(i).addClass("is-invalid");
                        $("select[name=txtTipoVeiculoAl]").eq(i).focus();
                        break;
                    }                    
                    else if($("input[name=txtMarcaVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtMarcaVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtMarcaVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtMarcaVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtModeloVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtModeloVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtModeloVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtModeloVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtCorVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtCorVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtCorVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtCorVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtPlacaVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtPlacaVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtPlacaVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtPlacaVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if(($("input[name=txtPlacaVeiculoAl]").eq($("input[name=txtPlacaVeiculoAl]").length-1).val()) != ''){
                        prox($(this));
                    }
                }                       
            }
        }        
        //Possui CNH
       else if($("select[name=txtPossuiCNH]").val() == 's'){
            if($("input[name=txtCNHNumAl]").val() == ''){
                $("input[name=txtCNHNumAl]").removeClass("is-valid");
                $("input[name=txtCNHNumAl]").addClass("is-invalid");
                $("input[name=txtCNHNumAl]").focus();
            }
            else if($("select[name=txtCNHCatgAl]").val() == '0'){
                $("select[name=txtCNHCatgAl]").removeClass("is-valid");
                $("select[name=txtCNHCatgAl]").addClass("is-invalid");
                $("select[name=txtCNHCatgAl]").focus();
            }
            else if($("input[name=txtCNHDataValAl]").val() == ''){
                $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                $("input[name=txtCNHDataValAl]").focus();
            }            
            //Não possui Veículo
            else if($("select[name=txtTraraVeiculo]").val() == 'n'){
                prox($(this));
            }
            //Possui Veículo
            else if($("select[name=txtTraraVeiculo]").val() == 's'){
                for(var i=0;i<($("input[name=txtPlacaVeiculoAl").length);i++){
                    if($("select[name=txtTipoVeiculoAl]").eq(i).val() == '0' ){
                        $("select[name=txtTipoVeiculoAl]").eq(i).removeClass("is-valid");
                        $("select[name=txtTipoVeiculoAl]").eq(i).addClass("is-invalid");
                        $("select[name=txtTipoVeiculoAl]").eq(i).focus();
                        break;
                    }                    
                    else if($("input[name=txtMarcaVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtMarcaVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtMarcaVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtMarcaVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtModeloVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtModeloVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtModeloVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtModeloVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtCorVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtCorVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtCorVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtCorVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtPlacaVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtPlacaVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtPlacaVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtPlacaVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if(($("input[name=txtPlacaVeiculoAl]").eq($("input[name=txtPlacaVeiculoAl]").length-1).val()) != ''){
                        prox($(this));
                    }
                }
            }
        }   
        //Próxima Etapa
        else{
            prox($(this));
        }
    });
    
    //Etapa 3: SAÚDE
    $("button[name=btnProximo4]").click(function(){
        if($("select[name=txtFumante]").val() == '0'){
            $("select[name=txtFumante]").removeClass("is-valid");
            $("select[name=txtFumante]").addClass("is-invalid");
            $("select[name=txtFumante]").focus();
        }
        else if($("select[name=txtAlergico]").val() == '0'){
            $("select[name=txtAlergico]").removeClass("is-valid");
            $("select[name=txtAlergico]").addClass("is-invalid");
            $("select[name=txtAlergico]").focus();
        }
        else if($("select[name=txtUsoMtoCt]").val() == '0'){
            $("select[name=txtUsoMtoCt]").removeClass("is-valid");
            $("select[name=txtUsoMtoCt]").addClass("is-invalid");
            $("select[name=txtUsoMtoCt]").focus();
        }
        else if($("select[name=txtUsoTermErgSupAli]").val() == '0'){
            $("select[name=txtUsoTermErgSupAli]").removeClass("is-valid");
            $("select[name=txtUsoTermErgSupAli]").addClass("is-invalid");
            $("select[name=txtUsoTermErgSupAli]").focus();
        }        
        else if(($("select[name=txtAlergico]").val() == 'n') && ($("select[name=txtUsoMtoCt]").val() == 'n') && ($("select[name=txtUsoTermErgSupAli]").val() == 'n')){
            prox($(this));
        }
        else if(($("select[name=txtAlergico]").val() == 's') && ($("select[name=txtUsoMtoCt]").val() == 'n') && ($("select[name=txtUsoTermErgSupAli]").val() == 'n')){
            for(var i=0;i<($("input[name=txtAlergia").length);i++){
                if($("input[name=txtAlergia]").eq(i).val() == '' ){
                    $("input[name=txtAlergia]").eq(i).removeClass("is-valid");
                    $("input[name=txtAlergia]").eq(i).addClass("is-invalid");
                    $("input[name=txtAlergia]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAlergia]").eq($("input[name=txtAlergia]").length-1).val()) != ''){
                    prox($(this));
                }
            }
        }
        else if(($("select[name=txtAlergico]").val() == 'n') && ($("select[name=txtUsoMtoCt]").val() == 's') && ($("select[name=txtUsoTermErgSupAli]").val() == 'n')){
            for(var i=0;i<($("select[name=txtTpMtoCt").length);i++){
                if($("input[name=txtNomeMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtNomeMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeMtoCt]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtFrqMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtFrqMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtFrqMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtFrqMtoCt]").eq(i).focus();
                    break;
                }
                else if($("select[name=txtTpMtoCt]").eq(i).val() == '0' ){
                    $("select[name=txtTpMtoCt]").eq(i).removeClass("is-valid");
                    $("select[name=txtTpMtoCt]").eq(i).addClass("is-invalid");
                    $("select[name=txtTpMtoCt]").eq(i).focus();
                    break;
                }
                else if(($("select[name=txtTpMtoCt]").eq($("select[name=txtTpMtoCt]").length-1).val()) != '0'){
                    prox($(this));
                }
            }
        }
        else if(($("select[name=txtAlergico]").val() == 'n') && ($("select[name=txtUsoMtoCt]").val() == 'n') && ($("select[name=txtUsoTermErgSupAli]").val() == 's')){
            for(var i=0;i<($("input[name=txtNomeTermErgSupAli").length);i++){
                if($("input[name=txtNomeTermErgSupAli]").eq(i).val() == '' ){
                    $("input[name=txtNomeTermErgSupAli]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtNomeTermErgSupAli]").eq($("input[name=txtNomeTermErgSupAli]").length-1).val()) != ''){
                    prox($(this));
                }
            }
        }        
        else if(($("select[name=txtAlergico]").val() == 'n') && ($("select[name=txtUsoMtoCt]").val() == 's') && ($("select[name=txtUsoTermErgSupAli]").val() == 's')){
            var prontoMtoCt = 0;
            var prontoTermErgSupAli = 0;
            
            for(var i=0;i<($("select[name=txtTpMtoCt").length);i++){
                if($("input[name=txtNomeMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtNomeMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeMtoCt]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtFrqMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtFrqMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtFrqMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtFrqMtoCt]").eq(i).focus();
                    break;
                }
                else if($("select[name=txtTpMtoCt]").eq(i).val() == '0' ){
                    $("select[name=txtTpMtoCt]").eq(i).removeClass("is-valid");
                    $("select[name=txtTpMtoCt]").eq(i).addClass("is-invalid");
                    $("select[name=txtTpMtoCt]").eq(i).focus();
                    break;
                }
                else if(($("select[name=txtTpMtoCt]").eq($("select[name=txtTpMtoCt]").length-1).val()) != '0'){
                    prontoMtoCt=1;
                }
            }             
            for(var i=0;i<($("input[name=txtNomeTermErgSupAli").length);i++){
                if($("input[name=txtNomeTermErgSupAli]").eq(i).val() == '' ){
                    $("input[name=txtNomeTermErgSupAli]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtNomeTermErgSupAli]").eq($("input[name=txtNomeTermErgSupAli]").length-1).val()) != ''){
                    prontoTermErgSupAli = 1;
                }
            }            
            if((prontoMtoCt == 1) && (prontoTermErgSupAli == 1)){
                prox($(this));
            }
        }
        else if(($("select[name=txtAlergico]").val() == 's') && ($("select[name=txtUsoMtoCt]").val() == 'n') && ($("select[name=txtUsoTermErgSupAli]").val() == 's')){
            var prontoAlergico = 0;
            var prontoTermErgSupAli = 0;
            
            for(var i=0;i<($("input[name=txtAlergia").length);i++){
                if($("input[name=txtAlergia]").eq(i).val() == '' ){
                    $("input[name=txtAlergia]").eq(i).removeClass("is-valid");
                    $("input[name=txtAlergia]").eq(i).addClass("is-invalid");
                    $("input[name=txtAlergia]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAlergia]").eq($("input[name=txtAlergia]").length-1).val()) != ''){
                    prontoAlergico = 1;
                }
            }             
            for(var i=0;i<($("input[name=txtNomeTermErgSupAli").length);i++){
                if($("input[name=txtNomeTermErgSupAli]").eq(i).val() == '' ){
                    $("input[name=txtNomeTermErgSupAli]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtNomeTermErgSupAli]").eq($("input[name=txtNomeTermErgSupAli]").length-1).val()) != ''){
                    prontoTermErgSupAli = 1;
                }
            }            
            if((prontoAlergico == 1) && (prontoTermErgSupAli == 1)){
                prox($(this));
            }
        }
        else if(($("select[name=txtAlergico]").val() == 's') && ($("select[name=txtUsoMtoCt]").val() == 's') && ($("select[name=txtUsoTermErgSupAli]").val() == 'n')){
            var prontoAlergico = 0;
            var prontoMtoCt = 0;
            
            for(var i=0;i<($("input[name=txtAlergia").length);i++){
                if($("input[name=txtAlergia]").eq(i).val() == '' ){
                    $("input[name=txtAlergia]").eq(i).removeClass("is-valid");
                    $("input[name=txtAlergia]").eq(i).addClass("is-invalid");
                    $("input[name=txtAlergia]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAlergia]").eq($("input[name=txtAlergia]").length-1).val()) != ''){
                    prontoAlergico = 1;
                }
            }             
            for(var i=0;i<($("select[name=txtTpMtoCt").length);i++){
                if($("input[name=txtNomeMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtNomeMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeMtoCt]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtFrqMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtFrqMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtFrqMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtFrqMtoCt]").eq(i).focus();
                    break;
                }
                else if($("select[name=txtTpMtoCt]").eq(i).val() == '0' ){
                    $("select[name=txtTpMtoCt]").eq(i).removeClass("is-valid");
                    $("select[name=txtTpMtoCt]").eq(i).addClass("is-invalid");
                    $("select[name=txtTpMtoCt]").eq(i).focus();
                    break;
                }
                else if(($("select[name=txtTpMtoCt]").eq($("select[name=txtTpMtoCt]").length-1).val()) != '0'){
                    prontoMtoCt=1;
                }
            }            
            if((prontoAlergico == 1) && (prontoMtoCt == 1)){
                prox($(this));
            }
        }
        
        else if(($("select[name=txtAlergico]").val() == 's') && ($("select[name=txtUsoMtoCt]").val() == 's') && ($("select[name=txtUsoTermErgSupAli]").val() == 's')){
            var prontoAlergico = 0;
            var prontoMtoCt = 0;
            var prontoTermErgSupAli =0;
            
            for(var i=0;i<($("input[name=txtAlergia").length);i++){
                if($("input[name=txtAlergia]").eq(i).val() == '' ){
                    $("input[name=txtAlergia]").eq(i).removeClass("is-valid");
                    $("input[name=txtAlergia]").eq(i).addClass("is-invalid");
                    $("input[name=txtAlergia]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAlergia]").eq($("input[name=txtAlergia]").length-1).val()) != ''){
                    prontoAlergico = 1;
                }
            }             
            for(var i=0;i<($("select[name=txtTpMtoCt").length);i++){
                if($("input[name=txtNomeMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtNomeMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeMtoCt]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtFrqMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtFrqMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtFrqMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtFrqMtoCt]").eq(i).focus();
                    break;
                }
                else if($("select[name=txtTpMtoCt]").eq(i).val() == '0' ){
                    $("select[name=txtTpMtoCt]").eq(i).removeClass("is-valid");
                    $("select[name=txtTpMtoCt]").eq(i).addClass("is-invalid");
                    $("select[name=txtTpMtoCt]").eq(i).focus();
                    break;
                }
                else if(($("select[name=txtTpMtoCt]").eq($("select[name=txtTpMtoCt]").length-1).val()) != '0'){
                    prontoMtoCt=1;
                }
            }            
            for(var i=0;i<($("input[name=txtNomeTermErgSupAli").length);i++){
                if($("input[name=txtNomeTermErgSupAli]").eq(i).val() == '' ){
                    $("input[name=txtNomeTermErgSupAli]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtNomeTermErgSupAli]").eq($("input[name=txtNomeTermErgSupAli]").length-1).val()) != ''){
                    prontoTermErgSupAli = 1;
                }
            }            
            if((prontoAlergico == 1) && (prontoMtoCt == 1) && (prontoTermErgSupAli == 1)){
                prox($(this));
            }
        }        
    });
    
    //Etapa 4: DADOS MILITARES
    $("button[name=btnProximo5]").click(function(){
        if($("input[name=txtFormEscNome]").val() == ''){
            $("input[name=txtFormEscNome]").removeClass("is-valid");
            $("input[name=txtFormEscNome]").addClass("is-invalid");
            $("input[name=txtFormEscNome]").focus();
        }
        else if($("input[name=txtFormEscAbrev]").val() == ''){
            $("input[name=txtFormEscAbrev]").removeClass("is-valid");
            $("input[name=txtFormEscAbrev]").addClass("is-invalid");
            $("input[name=txtFormEscAbrev]").focus();
        }
        else if($("input[name=txtFormTurma]").val() == ''){
            $("input[name=txtFormTurma]").removeClass("is-valid");
            $("input[name=txtFormTurma]").addClass("is-invalid");
            $("input[name=txtFormTurma]").focus();
        }
        else if($("select[name=txtCptmAl]").val() == '0'){
            $("select[name=txtCptmAl]").removeClass("is-valid");
            $("select[name=txtCptmAl]").addClass("is-invalid");
            $("select[name=txtCptmAl]").focus();
        }
        else if($("input[name=txtDataUltProm]").val() == ''){
            $("input[name=txtDataUltProm]").removeClass("is-valid");
            $("input[name=txtDataUltProm]").addClass("is-invalid");
            $("input[name=txtDataUltProm]").focus();
        }
        else if($("select[name=txtQaProm]").val() == '0'){
            $("select[name=txtQaProm]").removeClass("is-valid");
            $("select[name=txtQaProm]").addClass("is-invalid");
            $("select[name=txtQaProm]").focus();
        }
        else if($("select[name=txtQaProm]").val() == 's'){
            if($("input[name=txtQaQuandoProm]").val() == ''){
                $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                $("input[name=txtQaQuandoProm]").focus();                
            }
            else if($("input[name=txtDataUltTAF]").val() == ''){
                $("input[name=txtDataUltTAF]").removeClass("is-valid");
                $("input[name=txtDataUltTAF]").addClass("is-invalid");
                $("input[name=txtDataUltTAF]").focus();                
            }
            else if($("select[name=txtMencaoTAF]").val() == '0'){
                $("select[name=txtMencaoTAF]").removeClass("is-valid");
                $("select[name=txtMencaoTAF]").addClass("is-invalid");
                $("select[name=txtMencaoTAF]").focus();
            }
            else if($("input[name=txtFunc1]").val() == ''){
                $("input[name=txtFunc1]").removeClass("is-valid");
                $("input[name=txtFunc1]").addClass("is-invalid");
                $("input[name=txtFunc1]").focus();                
            }
            else if($("input[name=txtFunc2]").val() == ''){
                $("input[name=txtFunc2]").removeClass("is-valid");
                $("input[name=txtFunc2]").addClass("is-invalid");
                $("input[name=txtFunc2]").focus();                
            }
            else if($("input[name=txtFunc3]").val() == ''){
                $("input[name=txtFunc3]").removeClass("is-valid");
                $("input[name=txtFunc3]").addClass("is-invalid");
                $("input[name=txtFunc3]").focus();                
            }
            else{
                prox($(this));
            }
        }
        else if($("select[name=txtQaProm]").val() == 'n'){            
            if($("input[name=txtDataUltTAF]").val() == ''){
                $("input[name=txtDataUltTAF]").removeClass("is-valid");
                $("input[name=txtDataUltTAF]").addClass("is-invalid");
                $("input[name=txtDataUltTAF]").focus();                
            }
            else if($("select[name=txtMencaoTAF]").val() == '0'){
                $("select[name=txtMencaoTAF]").removeClass("is-valid");
                $("select[name=txtMencaoTAF]").addClass("is-invalid");
                $("select[name=txtMencaoTAF]").focus();
            }
            else if($("input[name=txtFunc1]").val() == ''){
                $("input[name=txtFunc1]").removeClass("is-valid");
                $("input[name=txtFunc1]").addClass("is-invalid");
                $("input[name=txtFunc1]").focus();                
            }
            else if($("input[name=txtFunc2]").val() == ''){
                $("input[name=txtFunc2]").removeClass("is-valid");
                $("input[name=txtFunc2]").addClass("is-invalid");
                $("input[name=txtFunc2]").focus();                
            }
            else if($("input[name=txtFunc3]").val() == ''){
                $("input[name=txtFunc3]").removeClass("is-valid");
                $("input[name=txtFunc3]").addClass("is-invalid");
                $("input[name=txtFunc3]").focus();                
            }
            else{
                prox($(this));
            }
        }        
    });
    
    //Etapa 5: DADOS FAMILIARES
    $("button[name=btnProximo6]").click(function(){
        if($("select[name=txtPossuiConjuge]").val() == '0'){
            $("select[name=txtPossuiConjuge]").removeClass("is-valid");
            $("select[name=txtPossuiConjuge]").addClass("is-invalid");
            $("select[name=txtPossuiConjuge]").focus();
        }
        else if($("select[name=txtAddRefConclusao]").val() == '0'){
            $("select[name=txtAddRefConclusao]").removeClass("is-valid");
            $("select[name=txtAddRefConclusao]").addClass("is-invalid");
            $("select[name=txtAddRefConclusao]").focus();
        }
        else if($("select[name=txtPossuiConjuge]").val() == 'n'){
            //Referência
            if($("select[name=txtParentescoRef]").val() == '0'){
                $("select[name=txtParentescoRef]").removeClass("is-valid");
                $("select[name=txtParentescoRef]").addClass("is-invalid");
                $("select[name=txtParentescoRef]").focus();
            }
            else if($("input[name=txtNomeRef]").val() == ''){
                $("input[name=txtNomeRef]").removeClass("is-valid");
                $("input[name=txtNomeRef]").addClass("is-invalid");
                $("input[name=txtNomeRef]").focus();                
            }
            else if($("input[name=txtSobrenomeRef]").val() == ''){
                $("input[name=txtSobrenomeRef]").removeClass("is-valid");
                $("input[name=txtSobrenomeRef]").addClass("is-invalid");
                $("input[name=txtSobrenomeRef]").focus();                
            }
            else if($("input[name=txtCpfRef]").val() == ''){
                $("input[name=txtCpfRef]").removeClass("is-valid");
                $("input[name=txtCpfRef]").addClass("is-invalid");
                $("input[name=txtCpfRef]").focus();                
            }
            else if($("input[name=txtEmailRef]").val() == ''){
                $("input[name=txtEmailRef]").removeClass("is-valid");
                $("input[name=txtEmailRef]").addClass("is-invalid");
                $("input[name=txtEmailRef]").focus();                
            }
            else if($("input[name=txtFoneRef]").val() == ''){
                $("input[name=txtFoneRef]").removeClass("is-valid");
                $("input[name=txtFoneRef]").addClass("is-invalid");
                $("input[name=txtFoneRef]").focus();                
            }
            
            //Referência Conclusão
            else if($("select[name=txtAddRefConclusao]").val() == 'n'){
                prox($(this));
            }            
            else if($("select[name=txtAddRefConclusao]").val() == 's'){
                if($("select[name=txtParentescoRefConclusao]").val() == '0'){
                    $("select[name=txtParentescoRefConclusao]").removeClass("is-valid");
                    $("select[name=txtParentescoRefConclusao]").addClass("is-invalid");
                    $("select[name=txtParentescoRefConclusao]").focus();
                }
                else if($("input[name=txtNomeRefConclusao]").val() == ''){
                    $("input[name=txtNomeRefConclusao]").removeClass("is-valid");
                    $("input[name=txtNomeRefConclusao]").addClass("is-invalid");
                    $("input[name=txtNomeRefConclusao]").focus();                
                }
                else if($("input[name=txtSobrenomeRefConclusao]").val() == ''){
                    $("input[name=txtSobrenomeRefConclusao]").removeClass("is-valid");
                    $("input[name=txtSobrenomeRefConclusao]").addClass("is-invalid");
                    $("input[name=txtSobrenomeRefConclusao]").focus();                
                }
                else if($("input[name=txtCpfRefConclusao]").val() == ''){
                    $("input[name=txtCpfRefConclusao]").removeClass("is-valid");
                    $("input[name=txtCpfRefConclusao]").addClass("is-invalid");
                    $("input[name=txtCpfRefConclusao]").focus();                
                }
                else if($("input[name=txtEmailRefConclusao]").val() == ''){
                    $("input[name=txtEmailRefConclusao]").removeClass("is-valid");
                    $("input[name=txtEmailRefConclusao]").addClass("is-invalid");
                    $("input[name=txtEmailRefConclusao]").focus();                
                }
                else if($("input[name=txtFoneRefConclusao]").val() == ''){
                    $("input[name=txtFoneRefConclusao]").removeClass("is-valid");
                    $("input[name=txtFoneRefConclusao]").addClass("is-invalid");
                    $("input[name=txtFoneRefConclusao]").focus();                
                }
                else{
                    prox($(this));
                }
            }
        }
        else if($("select[name=txtPossuiConjuge]").val() == 's'){
            //Cônjuge
            if($("input[name=txtCpfConjuge]").val() == ''){
                $("input[name=txtCpfConjuge]").removeClass("is-valid");
                $("input[name=txtCpfConjuge]").addClass("is-invalid");
                $("input[name=txtCpfConjuge]").focus();                
            }
            else if($("input[name=txtNomeConjuge]").val() == ''){
                $("input[name=txtNomeConjuge]").removeClass("is-valid");
                $("input[name=txtNomeConjuge]").addClass("is-invalid");
                $("input[name=txtNomeConjuge]").focus();                
            }
            else if($("input[name=txtSobrenomeConjuge]").val() == ''){
                $("input[name=txtSobrenomeConjuge]").removeClass("is-valid");
                $("input[name=txtSobrenomeConjuge]").addClass("is-invalid");
                $("input[name=txtSobrenomeConjuge]").focus();                
            }
            else if($("input[name=txtEmailConjuge]").val() == ''){
                $("input[name=txtEmailConjuge]").removeClass("is-valid");
                $("input[name=txtEmailConjuge]").addClass("is-invalid");
                $("input[name=txtEmailConjuge]").focus();                
            }
            else if($("input[name=txtFoneConjuge]").val() == ''){
                $("input[name=txtFoneConjuge]").removeClass("is-valid");
                $("input[name=txtFoneConjuge]").addClass("is-invalid");
                $("input[name=txtFoneConjuge]").focus();                
            }
            
            //Referência
            else if($("select[name=txtParentescoRef]").val() == '0'){
                $("select[name=txtParentescoRef]").removeClass("is-valid");
                $("select[name=txtParentescoRef]").addClass("is-invalid");
                $("select[name=txtParentescoRef]").focus();
            }
            else if($("input[name=txtNomeRef]").val() == ''){
                $("input[name=txtNomeRef]").removeClass("is-valid");
                $("input[name=txtNomeRef]").addClass("is-invalid");
                $("input[name=txtNomeRef]").focus();                
            }
            else if($("input[name=txtSobrenomeRef]").val() == ''){
                $("input[name=txtSobrenomeRef]").removeClass("is-valid");
                $("input[name=txtSobrenomeRef]").addClass("is-invalid");
                $("input[name=txtSobrenomeRef]").focus();                
            }
            else if($("input[name=txtCpfRef]").val() == ''){
                $("input[name=txtCpfRef]").removeClass("is-valid");
                $("input[name=txtCpfRef]").addClass("is-invalid");
                $("input[name=txtCpfRef]").focus();                
            }
            else if($("input[name=txtEmailRef]").val() == ''){
                $("input[name=txtEmailRef]").removeClass("is-valid");
                $("input[name=txtEmailRef]").addClass("is-invalid");
                $("input[name=txtEmailRef]").focus();                
            }
            else if($("input[name=txtFoneRef]").val() == ''){
                $("input[name=txtFoneRef]").removeClass("is-valid");
                $("input[name=txtFoneRef]").addClass("is-invalid");
                $("input[name=txtFoneRef]").focus();                
            }
            
            //Referência Conclusão
            else if($("select[name=txtAddRefConclusao]").val() == 'n'){
                prox($(this));
            }
            else if($("select[name=txtAddRefConclusao]").val() == 's'){
                if($("select[name=txtParentescoRefConclusao]").val() == '0'){
                    $("select[name=txtParentescoRefConclusao]").removeClass("is-valid");
                    $("select[name=txtParentescoRefConclusao]").addClass("is-invalid");
                    $("select[name=txtParentescoRefConclusao]").focus();
                }
                else if($("input[name=txtNomeRefConclusao]").val() == ''){
                    $("input[name=txtNomeRefConclusao]").removeClass("is-valid");
                    $("input[name=txtNomeRefConclusao]").addClass("is-invalid");
                    $("input[name=txtNomeRefConclusao]").focus();                
                }
                else if($("input[name=txtSobrenomeRefConclusao]").val() == ''){
                    $("input[name=txtSobrenomeRefConclusao]").removeClass("is-valid");
                    $("input[name=txtSobrenomeRefConclusao]").addClass("is-invalid");
                    $("input[name=txtSobrenomeRefConclusao]").focus();                
                }
                else if($("input[name=txtCpfRefConclusao]").val() == ''){
                    $("input[name=txtCpfRefConclusao]").removeClass("is-valid");
                    $("input[name=txtCpfRefConclusao]").addClass("is-invalid");
                    $("input[name=txtCpfRefConclusao]").focus();                
                }
                else if($("input[name=txtEmailRefConclusao]").val() == ''){
                    $("input[name=txtEmailRefConclusao]").removeClass("is-valid");
                    $("input[name=txtEmailRefConclusao]").addClass("is-invalid");
                    $("input[name=txtEmailRefConclusao]").focus();                
                }
                else if($("input[name=txtFoneRefConclusao]").val() == ''){
                    $("input[name=txtFoneRefConclusao]").removeClass("is-valid");
                    $("input[name=txtFoneRefConclusao]").addClass("is-invalid");
                    $("input[name=txtFoneRefConclusao]").focus();                
                }
                else{
                    prox($(this));
                }
            }
        }        
    });
    
    //Etapa 6: DADOS DE ENDEREÇO
    $("button[name=btnProximo7]").click(function(){
        //Residência
        if($("input[name=txtCepEndResid]").val() == ''){
            $("input[name=txtCepEndResid]").removeClass("is-valid");
            $("input[name=txtCepEndResid]").addClass("is-invalid");
            $("input[name=txtCepEndResid]").focus();                
        }
        else if($("select[name=txtLogEndResid]").val() == '0'){
            $("select[name=txtLogEndResid]").removeClass("is-valid");
            $("select[name=txtLogEndResid]").addClass("is-invalid");
            $("select[name=txtLogEndResid]").focus();
        }
        else if($("input[name=txtNomeEndResid]").val() == ''){
            $("input[name=txtNomeEndResid]").removeClass("is-valid");
            $("input[name=txtNomeEndResid]").addClass("is-invalid");
            $("input[name=txtNomeEndResid]").focus();                
        }
        else if($("input[name=txtNumEndResid]").val() == ''){
            $("input[name=txtNumEndResid]").removeClass("is-valid");
            $("input[name=txtNumEndResid]").addClass("is-invalid");
            $("input[name=txtNumEndResid]").focus();                
        }
        else if($("select[name=txtPaisEndResid]").val() == '0'){
            $("select[name=txtPaisEndResid]").removeClass("is-valid");
            $("select[name=txtPaisEndResid]").addClass("is-invalid");
            $("select[name=txtPaisEndResid]").focus();
        }
        else if($("select[name=txtEstadoEndResid]").val() == '0'){
            $("select[name=txtEstadoEndResid]").removeClass("is-valid");
            $("select[name=txtEstadoEndResid]").addClass("is-invalid");
            $("select[name=txtEstadoEndResid]").focus();
        }
        else if($("select[name=txtCidadeEndResid]").val() == '0'){
            $("select[name=txtCidadeEndResid]").removeClass("is-valid");
            $("select[name=txtCidadeEndResid]").addClass("is-invalid");
            $("select[name=txtCidadeEndResid]").focus();
        }
        else if($("select[name=txtBairroEndResid]").val() == '0'){
            $("select[name=txtBairroEndResid]").removeClass("is-valid");
            $("select[name=txtBairroEndResid]").addClass("is-invalid");
            $("select[name=txtBairroEndResid]").focus();
        }
        //Enderço durante curso
        else if($("select[name=txtEndCurso]").val() == '0'){
            $("select[name=txtEndCurso]").removeClass("is-valid");
            $("select[name=txtEndCurso]").addClass("is-invalid");
            $("select[name=txtEndCurso]").focus();
        }
        else if($("input[name=txtCepEndCurso]").val() == ''){
            $("input[name=txtCepEndCurso]").removeClass("is-valid");
            $("input[name=txtCepEndCurso]").addClass("is-invalid");
            $("input[name=txtCepEndCurso]").focus();                
        }
        else if($("select[name=txtLogEndCurso]").val() == '0'){
            $("select[name=txtLogEndCurso]").removeClass("is-valid");
            $("select[name=txtLogEndCurso]").addClass("is-invalid");
            $("select[name=txtLogEndCurso]").focus();
        }
        else if($("input[name=txtNomeEndCurso]").val() == ''){
            $("input[name=txtNomeEndCurso]").removeClass("is-valid");
            $("input[name=txtNomeEndCurso]").addClass("is-invalid");
            $("input[name=txtNomeEndCurso]").focus();                
        }
        else if($("input[name=txtNumEndCurso]").val() == ''){
            $("input[name=txtNumEndCurso]").removeClass("is-valid");
            $("input[name=txtNumEndCurso]").addClass("is-invalid");
            $("input[name=txtNumEndCurso]").focus();                
        }
        else if($("select[name=txtPaisEndCurso]").val() == '0'){
            $("select[name=txtPaisEndCurso]").removeClass("is-valid");
            $("select[name=txtPaisEndCurso]").addClass("is-invalid");
            $("select[name=txtPaisEndCurso]").focus();
        }
        else if($("select[name=txtEstadoEndCurso]").val() == '0'){
            $("select[name=txtEstadoEndCurso]").removeClass("is-valid");
            $("select[name=txtEstadoEndCurso]").addClass("is-invalid");
            $("select[name=txtEstadoEndCurso]").focus();
        }
        else if($("select[name=txtCidadeEndCurso]").val() == '0'){
            $("select[name=txtCidadeEndCurso]").removeClass("is-valid");
            $("select[name=txtCidadeEndCurso]").addClass("is-invalid");
            $("select[name=txtCidadeEndCurso]").focus();
        }
        else if($("select[name=txtBairroEndCurso]").val() == '0'){
            $("select[name=txtBairroEndCurso]").removeClass("is-valid");
            $("select[name=txtBairroEndCurso]").addClass("is-invalid");
            $("select[name=txtBairroEndCurso]").focus();
        }
        else{
            prox($(this));
        }
    });
    //Etapa 7: CURSOS/ESTÁGIOS
    $("button[name=btnProximo8]").click(function(){
        if($("select[name=txtHabIdiomas]").val() == '0'){
            $("select[name=txtHabIdiomas]").removeClass("is-valid");
            $("select[name=txtHabIdiomas]").addClass("is-invalid");
            $("select[name=txtHabIdiomas]").focus();
        }
        else if($("select[name=txtPossuiCAltEstudos]").val() == '0'){
            $("select[name=txtPossuiCAltEstudos]").removeClass("is-valid");
            $("select[name=txtPossuiCAltEstudos]").addClass("is-invalid");
            $("select[name=txtPossuiCAltEstudos]").focus();
        }
        else if($("select[name=txtPossuiCExtsEsp]").val() == '0'){
            $("select[name=txtPossuiCExtsEsp]").removeClass("is-valid");
            $("select[name=txtPossuiCExtsEsp]").addClass("is-invalid");
            $("select[name=txtPossuiCExtsEsp]").focus();
        }        
        else if($("select[name=txtPossuiEstMil]").val() == '0'){
            $("select[name=txtPossuiEstMil]").removeClass("is-valid");
            $("select[name=txtPossuiEstMil]").addClass("is-invalid");
            $("select[name=txtPossuiEstMil]").focus();
        }
        //1
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            prox($(this));
        }
        //2
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prox($(this));
                }
            }
        }
        //3
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prox($(this));
            }
        }
        //4
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prox($(this));
            }
        }
        //5
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prox($(this));
                }
            }
        }
        //6
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prox($(this));
                }
            }
        }
        //7
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoCExtsEsp = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            if((prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //8
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoCAltEstudos = 0;
            var prontoEstMil = 0;
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            if((prontoCAltEstudos == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //9
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoCAltEstudos = 0;
            var prontoCExtsEsp = 0;
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            if((prontoCAltEstudos == 1) && (prontoCExtsEsp == 1)){
                prox($(this));
            }
        }
        //10
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoCAltEstudos = 0;
            var prontoCExtsEsp = 0;
            var prontoEstMil = 0;
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            if((prontoCAltEstudos == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //11
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoCAperf = 0;
            var prontoEstMil = 0;
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            if((prontoCAperf == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //12
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoCAperf = 0;
            var prontoCExtsEsp = 0;
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            if((prontoCAperf == 1) && (prontoCExtsEsp == 1)){
                prox($(this));
            }
        }
        //13
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoCAperf = 0;
            var prontoCExtsEsp = 0;
            var prontoEstMil = 0;
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoCAperf == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //14
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            if((prontoCAperf == 1) && (prontoCAltEstudos == 1)){
                prox($(this));
            }
        }
        //15
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            var prontoEstMil = 0;
            
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //16
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            var prontoCExtsEsp = 0;
            
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            if((prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1)){
                prox($(this));
            }
        }
        //17
        else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            var prontoCExtsEsp = 0;
            var prontoEstMil = 0;
            
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //18
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //19
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCExtsEsp = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            if((prontoIdiomas == 1) && (prontoCExtsEsp == 1)){
                prox($(this));
            }
        }
        
        //20
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCExtsEsp = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        
        //21
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAltEstudos = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            if((prontoIdiomas == 1) && (prontoCAltEstudos == 1)){
                prox($(this));
            }
        }
        //22
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCAltEstudos = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAltEstudos == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //23
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAltEstudos = 0;
            var prontoCExtsEsp = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }     
            
            if((prontoIdiomas == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1)){
                prox($(this));
            }
        }
        //24
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCAltEstudos = 0;
            var prontoCExtsEsp = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //25
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1)){
                prox($(this));
            }
        }
        //26
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //27
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoCExtsEsp = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCExtsEsp == 1)){
                prox($(this));
            }
        }
        //28
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoCExtsEsp = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //29
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCAltEstudos == 1)){
                prox($(this));
            }
        }
        //30
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
        //31
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            var prontoCExtsEsp = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1)){
                prox($(this));
            }
        }
        //32
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            var prontoCExtsEsp = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("input[name=txtIdioma").length);i++){
                if($("input[name=txtIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    prontoIdiomas = 1;
                }
            }
            
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == '' ){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == '' ){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp").length);i++){
                if($("select[name=txtTipoCExtsEsp]").eq(i).val() == '0' ){
                    $("select[name=txtTipoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("select[name=txtTipoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtCExtsEsp]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == '' ){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            for(var i=0;i<($("input[name=txtEstagio").length);i++){
                if($("input[name=txtEstagio]").eq(i).val() == '' ){
                    $("input[name=txtEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtEstagio]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtAnoEstagio]").eq(i).val() == '' ){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                prox($(this));
            }
        }
    });
    
    //Etapa 8: PREPARAÇÃO 
    $("button[name=btnProximo9]").click(function(){
        if($("select[name=txtPrepFisica]").val() == '0'){
            $("select[name=txtPrepFisica]").removeClass("is-valid");
            $("select[name=txtPrepFisica]").addClass("is-invalid");
            $("select[name=txtPrepFisica]").focus();
        }
        else if($("select[name=txtApoioFam]").val() == '0'){
            $("select[name=txtApoioFam]").removeClass("is-valid");
            $("select[name=txtApoioFam]").addClass("is-invalid");
            $("select[name=txtApoioFam]").focus();
        }
        else if($("select[name=txtApoioOM]").val() == '0'){
            $("select[name=txtApoioOM]").removeClass("is-valid");
            $("select[name=txtApoioOM]").addClass("is-invalid");
            $("select[name=txtApoioOM]").focus();
        }
        else if($("select[name=txtCPrepCOS]").val() == '0'){
            $("select[name=txtCPrepCOS]").removeClass("is-valid");
            $("select[name=txtCPrepCOS]").addClass("is-invalid");
            $("select[name=txtCPrepCOS]").focus();
        }
        else if($("select[name=txtCPrepCOS]").val() == '0'){
            $("select[name=txtCPrepCOS]").removeClass("is-valid");
            $("select[name=txtCPrepCOS]").addClass("is-invalid");
            $("select[name=txtCPrepCOS]").focus();
        }
        else if($("select[name=txtProbRend]").val() == '0'){
            $("select[name=txtProbRend]").removeClass("is-valid");
            $("select[name=txtProbRend]").addClass("is-invalid");
            $("select[name=txtProbRend]").focus();
        }
        else if($("select[name=txtTempoPrep]").val() == '0'){
            $("select[name=txtTempoPrep]").removeClass("is-valid");
            $("select[name=txtTempoPrep]").addClass("is-invalid");
            $("select[name=txtTempoPrep]").focus();
        }
        else if($("select[name=txtDedicacaoDoutOPS]").val() == '0'){
            $("select[name=txtDedicacaoDoutOPS]").removeClass("is-valid");
            $("select[name=txtDedicacaoDoutOPS]").addClass("is-invalid");
            $("select[name=txtDedicacaoDoutOPS]").focus();
        }
        else if($("input[name=txtFatorMotivacao]").val() == ''){
            $("input[name=txtFatorMotivacao]").removeClass("is-valid");
            $("input[name=txtFatorMotivacao]").addClass("is-invalid");
            $("input[name=txtFatorMotivacao]").focus();
        }
        else if($("select[name=txtCsltSite]").val() == '0'){
            $("select[name=txtCsltSite]").removeClass("is-valid");
            $("select[name=txtCsltSite]").addClass("is-invalid");
            $("select[name=txtCsltSite]").focus();
        }
        else if($("select[name=txtCsltAmbVirtAl]").val() == '0'){
            $("select[name=txtCsltAmbVirtAl]").removeClass("is-valid");
            $("select[name=txtCsltAmbVirtAl]").addClass("is-invalid");
            $("select[name=txtCsltAmbVirtAl]").focus();
        }else{
            prox($(this));
        }
    });
    
    //Etapa 9: VIVÊNCIA NA AMAZÔNIA
    $("button[name=btnSalvar]").click(function(){
        if($("select[name=txtSvAmz]").val() == '0'){
            $("select[name=txtSvAmz]").removeClass("is-valid");
            $("select[name=txtSvAmz]").addClass("is-invalid");
            $("select[name=txtSvAmz]").focus();
            return false;
        }
        else if($("select[name=txtTentC]").val() == '0'){
            $("select[name=txtTentC]").removeClass("is-valid");
            $("select[name=txtTentC]").addClass("is-invalid");
            $("select[name=txtTentC]").focus();
            return false;
        }
        else if($("select[name=txtSvAmz]").val() == 'n'){
            $("select[name=txtSvAmz]").removeClass("is-invalid");
            $("select[name=txtSvAmz]").addClass("is-valid");
            
            if($("select[name=txtTentC]").val() == 'n'){
                $("select[name=txtTentC]").removeClass("is-invalid");
                $("select[name=txtTentC]").addClass("is-valid");
            }
            else if($("select[name=txtTentC]").val() == 's'){
                $("select[name=txtTentC]").removeClass("is-invalid");
                $("select[name=txtTentC]").addClass("is-valid");
                
                if($("select[name=txtQntTentC]").val() == '0'){
                    $("select[name=txtQntTentC]").removeClass("is-valid");
                    $("select[name=txtQntTentC]").addClass("is-invalid");
                    $("select[name=txtQntTentC]").focus();
                    return false;
                }
                else{
                    $("select[name=txtQntTentC]").removeClass("is-invalid");
                    $("select[name=txtQntTentC]").addClass("is-valid");
                    
                    if(($("input[name=txtAnoTentC").length) == 0){
                        return false;
                    }                    

                    for(var i=0;i<($("input[name=txtAnoTentC").length);i++){
                        if($("input[name=txtAnoTentC]").eq(i).val() == '' ){
                            $("input[name=txtAnoTentC]").eq(i).removeClass("is-valid");
                            $("input[name=txtAnoTentC]").eq(i).addClass("is-invalid");
                            $("input[name=txtAnoTentC]").eq(i).focus();
                            return false;
                            break;
                        }
                        else if($("input[name=txtOMNomeTentC]").eq(i).val() == '' ){
                            $("input[name=txtOMNomeTentC]").eq(i).removeClass("is-valid");
                            $("input[name=txtOMNomeTentC]").eq(i).addClass("is-invalid");
                            $("input[name=txtOMNomeTentC]").eq(i).focus();
                            return false;
                            break;
                        }
                        else if($("input[name=txtOMAbrevTentC]").eq(i).val() == '' ){
                            $("input[name=txtOMAbrevTentC]").eq(i).removeClass("is-valid");
                            $("input[name=txtOMAbrevTentC]").eq(i).addClass("is-invalid");
                            $("input[name=txtOMAbrevTentC]").eq(i).focus();
                            return false;
                            break;
                        }
                        else if($("select[name=txtMtvDeslTentC]").eq(i).val() == '0' ){
                            $("select[name=txtMtvDeslTentC]").eq(i).removeClass("is-valid");
                            $("select[name=txtMtvDeslTentC]").eq(i).addClass("is-invalid");
                            $("select[name=txtMtvDeslTentC]").eq(i).focus();
                            return false;
                            break;
                        }
                        else if($("select[name=txtFaseDeslTentC]").eq(i).val() == '0' ){
                            $("select[name=txtFaseDeslTentC]").eq(i).removeClass("is-valid");
                            $("select[name=txtFaseDeslTentC]").eq(i).addClass("is-invalid");
                            $("select[name=txtFaseDeslTentC]").eq(i).focus();
                            return false;
                            break;
                        }                        
                        else if(($("select[name=txtFaseDeslTentC]").eq($("select[name=txtFaseDeslTentC]").length-1).val()) != '0'){
                            return true;
                        }
                    }
                }
            }   
        }   
        else if($("select[name=txtSvAmz]").val() == 's'){
            $("select[name=txtSvAmz]").removeClass("is-invalid");
            $("select[name=txtSvAmz]").addClass("is-valid");
            
            if(($("input[name=txtOMNomeSvAmz").length) == 0){
                return false;
            }
            
            for(var i=0;i<($("input[name=txtOMNomeSvAmz").length);i++){
                if($("input[name=txtOMNomeSvAmz]").eq(i).val() == '' ){
                    $("input[name=txtOMNomeSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtOMNomeSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtOMNomeSvAmz]").eq(i).focus();
                    return false;
                    break;
                }
                else if($("input[name=txtOMAbrevSvAmz]").eq(i).val() == '' ){
                    $("input[name=txtOMAbrevSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtOMAbrevSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtOMAbrevSvAmz]").eq(i).focus();
                    return false;
                    break;
                }
                else if($("input[name=txtDInOMSvAmz]").eq(i).val() == '' ){
                    $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDInOMSvAmz]").eq(i).focus();
                    return false;
                    break;
                }
                else if($("input[name=txtDFimOMSvAmz]").eq(i).val() == '' ){
                    $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                    return false;
                    break;
                }
                else if($("input[name=txtFunc1OMSvAmz]").eq(i).val() == '' ){
                    $("input[name=txtFunc1OMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtFunc1OMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtFunc1OMSvAmz]").eq(i).focus();
                    return false;
                    break;
                }
                else if($("input[name=txtFunc2OMSvAmz]").eq(i).val() == '' ){
                    $("input[name=txtFunc2OMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtFunc2OMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtFunc2OMSvAmz]").eq(i).focus();
                    return false;
                    break;
                }
                else if($("input[name=txtFunc3OMSvAmz]").eq(i).val() == '' ){
                    $("input[name=txtFunc3OMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtFunc3OMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtFunc3OMSvAmz]").eq(i).focus();
                    return false;
                    break;
                }
            }            
            if($("select[name=txtTentC]").val() == 'n'){
                $("select[name=txtTentC]").removeClass("is-invalid");
                $("select[name=txtTentC]").addClass("is-valid");
            }
            else if($("select[name=txtTentC]").val() == 's'){
                $("select[name=txtTentC]").removeClass("is-invalid");
                $("select[name=txtTentC]").addClass("is-valid");
                
                if($("select[name=txtQntTentC]").val() == '0'){
                    $("select[name=txtQntTentC]").removeClass("is-valid");
                    $("select[name=txtQntTentC]").addClass("is-invalid");
                    $("select[name=txtQntTentC]").focus();
                    return false;
                }
                else{
                    $("select[name=txtQntTentC]").removeClass("is-invalid");
                    $("select[name=txtQntTentC]").addClass("is-valid");
                    
                    if(($("input[name=txtAnoTentC").length) == 0){
                        return false;
                    }                    

                    for(var i=0;i<($("input[name=txtAnoTentC").length);i++){
                        if($("input[name=txtAnoTentC]").eq(i).val() == '' ){
                            $("input[name=txtAnoTentC]").eq(i).removeClass("is-valid");
                            $("input[name=txtAnoTentC]").eq(i).addClass("is-invalid");
                            $("input[name=txtAnoTentC]").eq(i).focus();
                            return false;
                            break;
                        }
                        else if($("input[name=txtOMNomeTentC]").eq(i).val() == '' ){
                            $("input[name=txtOMNomeTentC]").eq(i).removeClass("is-valid");
                            $("input[name=txtOMNomeTentC]").eq(i).addClass("is-invalid");
                            $("input[name=txtOMNomeTentC]").eq(i).focus();
                            return false;
                            break;
                        }
                        else if($("input[name=txtOMAbrevTentC]").eq(i).val() == '' ){
                            $("input[name=txtOMAbrevTentC]").eq(i).removeClass("is-valid");
                            $("input[name=txtOMAbrevTentC]").eq(i).addClass("is-invalid");
                            $("input[name=txtOMAbrevTentC]").eq(i).focus();
                            return false;
                            break;
                        }
                        else if($("select[name=txtMtvDeslTentC]").eq(i).val() == '0' ){
                            $("select[name=txtMtvDeslTentC]").eq(i).removeClass("is-valid");
                            $("select[name=txtMtvDeslTentC]").eq(i).addClass("is-invalid");
                            $("select[name=txtMtvDeslTentC]").eq(i).focus();
                            return false;
                            break;
                        }
                        else if($("select[name=txtFaseDeslTentC]").eq(i).val() == '0' ){
                            $("select[name=txtFaseDeslTentC]").eq(i).removeClass("is-valid");
                            $("select[name=txtFaseDeslTentC]").eq(i).addClass("is-invalid");
                            $("select[name=txtFaseDeslTentC]").eq(i).focus();
                            return false;
                            break;
                        }                        
                        else if(($("select[name=txtFaseDeslTentC]").eq($("select[name=txtFaseDeslTentC]").length-1).val()) != '0'){
                            return true;
                        }
                    }
                }
            }
        }   
        
        
    });
});

