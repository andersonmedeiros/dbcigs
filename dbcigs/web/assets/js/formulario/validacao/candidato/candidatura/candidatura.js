// Variáveis Auxiliares
//var camposOk = 0; //testar se todos campos foram preenchidos corretamente
var cpfOk = 0; //testar validade do cpf
var cpfConjugeOk = 0; //testar validade do cpf
var cpfRefOk = 0; //testar validade do cpf
var cpfRefConclusaoOk = 0; //testar validade do cpf

$(document).ready(function(){
// --> Início Etapa 1: OM ATUAL
    limpaCampoSelect("select[name=txtForca]");
    limpaCampoSelect("select[name=txtEstadoForca]");
    limpaCampoSelect("select[name=txtNomeOM]");
    limpaCampoInput("input[name=txtFoneOM]");
    /*limpaCampoInput("input[name=txtEndCepOM]");
    limpaCampoInput("input[name=txtEndNomeOM]");
    limpaCampoInput("input[name=txtEndNumOM]");
    limpaCampoInput("input[name=txtEndEstadoOM]");
    limpaCampoInput("input[name=txtEndCidadeOM]");
    limpaCampoInput("input[name=txtEndBairroOM]");
    limpaCampoInput("input[name=txtEndCompOM]");
    limpaCampoInput("input[name=txtEndPtRefOM]");*/
    limpaCampoSelect("select[name=txtPGradCmtOM]");
    limpaCampoSelect("select[name=txtPGradChImtoOM]");
    limpaCampoSelect("select[name=txtPGradAl]");
    
    //Campo Select Força
    validSelect("select[name=txtTipoForca]");
    validSelectTReal("select[name=txtTipoForca]");
    
    //Campo Select Força
    validSelect("select[name=txtForca]");
    validSelectTReal("select[name=txtForca]");
    
    //Campo Input EstadoForca
    validSelect("select[name=txtEstadoForca]");
    validSelectTReal("select[name=txtEstadoForca]");

    //Campo Input Nome OM
    validSelect("select[name=txtNomeOM]"); 
    validSelectTReal("select[name=txtNomeOM]"); 
    
    //Campo Input Fone OM
    validFone("input[name=txtFoneOM]"); 
    validFoneTReal("input[name=txtFoneOM]");    

    //Campo Input Número
    validInput("input[name=txtEndNumOM]");
    validInputTReal("input[name=txtEndNumOM]");
    
    //Campo Input Ponto Referência
    validInput("input[name=txtEndPtRefOM]");
    validInputNuloTReal("input[name=txtEndPtRefOM]");
    
    //Campo Select Posto/Graduação Cmt OM
    validSelect("select[name=txtPGradCmtOM]");
    validSelectTReal("select[name=txtPGradCmtOM]");

    //Campo Input Nome Cmt OM
    validInput("input[name=txtNomeCmtOM]"); 
    validInputTReal("input[name=txtNomeCmtOM]"); 

    //Campo Input Sobrenome Cmt OM
    validInput("input[name=txtSobrenomeCmtOM]");
    validInputTReal("input[name=txtSobrenomeCmtOM]");

    //Campo Input Nome de Guerra Cmt OM
    validInput("input[name=txtNomeGuerraCmtOM]");
    validInputTReal("input[name=txtNomeGuerraCmtOM]");

    //Campo Select Posto/Graduação Ch Imediato
    validSelect("select[name=txtPGradChImtoOM]");
    validSelectTReal("select[name=txtPGradChImtoOM]");

    //Campo Input Nome Ch Imediato
    validInput("input[name=txtNomeChImtoOM]");
    validInputTReal("input[name=txtNomeChImtoOM]");

    //Campo Input Sobrenome Ch Imediato
    validInput("input[name=txtSobrenomeChImtoOM]");
    validInputTReal("input[name=txtSobrenomeChImtoOM]");

    //Campo Input Nome de Guerra Ch Imediato
    validInput("input[name=txtNomeGuerraChImtoOM]");
    validInputTReal("input[name=txtNomeGuerraChImtoOM]");
// --> Fim Etapa 1: OM ATUAL
    
// --> Início Etapa 2: DADOS INDIVIDUAIS
    //Campo Select Posto/Graduação
    validSelect("select[name=txtPGradAl]");
    validSelectTReal("select[name=txtPGradAl]");
    
    //Campo Select Arma
    validSelect("select[name=txtArmaAl]");
    validSelectTReal("select[name=txtArmaAl]");
    
    //Campo Input Data de Nascimento
    validDataNascAl("input[name=txtDataNascAl]");
    validDataNascAlTReal("input[name=txtDataNascAl]");
    
    //Campo Input Nome
    validInput("input[name=txtNomeAl]");
    validInputTReal("input[name=txtNomeAl]");
    
    //Campo Input Sobrenome
    validInput("input[name=txtSobrenomeAl]");
    validInputTReal("input[name=txtSobrenomeAl]");
    
    //Campo Input Nome de Guerra
    validInput("input[name=txtNomeGuerraAl]");
    validInputTReal("input[name=txtNomeGuerraAl]");
    
    //Campo Input Identidade Militar
    validIdtMilAl("input[name=txtIdtMilAl]");
    validIdtMilAlTReal("input[name=txtIdtMilAl]");
    
    //Campo Input Preccp    
    validPreccpAl("input[name=txtPreccpAl]");
    validPreccpAlTReal("input[name=txtPreccpAl]");
    somenteNumero("input[name=txtPreccpAl]");
    
    //Campo Input CP    
    validCPAl("input[name=txtCPAl]");
    validCPAlTReal("input[name=txtCPAl]");
    somenteNumero("input[name=txtCPAl]");
    
    //Campo Input CPF
    validCPFAl("input[name=txtCpfAl]");
    validCPFAlTReal("input[name=txtCpfAl]");
    
    //Campo Input Última Data de Praça
    validDataPracaAl("input[name=txtUltDataPracaAl]", "input[name=txtDataNascAl]");
    validDataPracaAlTReal("input[name=txtUltDataPracaAl]", "input[name=txtDataNascAl]");
    
    //Campo Select Naturalidade (Estado)
    validSelect("select[name=txtNatEstAl]");
    validSelectTReal("select[name=txtNatEstAl]");
    
    //Campo Select Naturalidade (Cidade)
    validSelect("select[name=txtNatCidAl]");
    validSelectTReal("select[name=txtNatCidAl]");
    
    //Campo Select Estado Civil
    validSelect("select[name=txtEstCivilAl]");
    validSelectTReal("select[name=txtEstCivilAl]");
    
    //Campo Select Sexo
    validSelect("select[name=txtSexoAl]");
    validSelectTReal("select[name=txtSexoAl]");
    
    //Campo Select Tipo Sanguíneo
    validSelect("select[name=txtTSAl]");
    validSelectTReal("select[name=txtTSAl]");
    
    //Campo Select Fator RH
    validSelect("select[name=txtFatorRHAl]");
    validSelectTReal("select[name=txtFatorRHAl]");
    
    //Campo Input Pai
    validInput("input[name=txtPaiAl]");
    validInputNuloTReal("input[name=txtPaiAl]");
    
    //Campo Input Mãe
    validInput("input[name=txtMaeAl]");
    validInputNuloTReal("input[name=txtMaeAl]");
    
    //Campo Input Titulo Eleitoral
    validTituloEleitorAl("input[name=txtTitEleitorNumAl]");
    validTituloEleitorAlTReal("input[name=txtTitEleitorNumAl]");
    
    //Campo Input Zona Eleitoral
    validTitEleitorZonaAl("input[name=txtTitEleitorZonaAl]");
    validTitEleitorZonaAlTReal("input[name=txtTitEleitorZonaAl]");
    somenteNumero("input[name=txtTitEleitorZonaAl]");
    
    //Campo Input Seção Eleitoral
    validTitEleitorSecaoAl("input[name=txtTitEleitorSecaoAl]");
    validTitEleitorSecaoAlTReal("input[name=txtTitEleitorSecaoAl]");
    somenteNumero("input[name=txtTitEleitorSecaoAl]");
    
    //Campo Select Titulo Eleitor Estado
    validSelect("select[name=txtTitEleitorEstAl]");
    validSelectTReal("select[name=txtTitEleitorEstAl]");
    
    //Campo Select Titulo Eleitor Cidade
    validSelect("select[name=txtTitEleitorCidAl]");
    validSelectTReal("select[name=txtTitEleitorCidAl]");
    
    //Campo Input Banco
    validInput("input[name=txtBancoAl]");
    validInputTReal("input[name=txtBancoAl]");
    
    //Campo Input Agência
    validInput("input[name=txtAgenciaAl]");
    validInputTReal("input[name=txtAgenciaAl]");
    somenteNumero("input[name=txtAgenciaAl]");
    
    //Campo Input Digito Verficador Agência
    validInput("input[name=txtDvAgenciaAl]");
    validInputTReal("input[name=txtDvAgenciaAl]");
    somenteNumero("input[name=txtDvAgenciaAl]");
    
    //Campo Input Conta
    validInput("input[name=txtContaAl]");
    validInputTReal("input[name=txtContaAl]");
    somenteNumero("input[name=txtContaAl]");
    
    //Campo Input Digito Conta
    validInput("input[name=txtDvContaAl]");
    validInputTReal("input[name=txtDvContaAl]");
    somenteNumero("input[name=txtDvContaAl]");
    
    //Campo Input Email
    validEmail("input[name=txtEmailAl]");
    validEmailTReal("input[name=txtEmailAl]");
    
    //Campo Input Fone
    validFoneCel("input[name=txtFoneAl]");
    validFoneCelTReal("input[name=txtFoneAl]");
    
    //Campo Select Número Coturno
    validSelect("select[name=txtNumCoturnoAl]");
    validSelectTReal("select[name=txtNumCoturnoAl]");
    
    //Campo Select Tamanho Gandola
    validSelect("select[name=txtTamGandAl]");
    validSelectTReal("select[name=txtTamGandAl]");
    
    //Campo Select Tamanho Calça
    validSelect("select[name=txtTamCalcaAl]");
    validSelectTReal("select[name=txtTamCalcaAl]");
    
    //Campo Select Tamanho Camuflada
    validSelect("select[name=txtTamCamCmfAl]");
    validSelectTReal("select[name=txtTamCamCmfAl]");
    
    //Campo Select Possui CNH
    validSelect("select[name=txtPossuiCNH]");
    validSelectTReal("select[name=txtPossuiCNH]");    
    acionamentoForm("select[name=txtPossuiCNH]", "#divCNH");  
    
        validNumCNH("input[name=txtCNHNumAl]");
        validNumCNHTReal("input[name=txtCNHNumAl]");
        somenteNumero("input[name=txtCNHNumAl]");

        validSelect("select[name=txtCNHCatgAl]");
        validSelectTReal("select[name=txtCNHCatgAl]");

        validDataValidadeCNH("input[name=txtCNHDataValAl]");
        validDataValidadeCNHTReal("input[name=txtCNHDataValAl]");
    
    //Campo Select Trará veículo para o CIGS
    validSelect("select[name=txtTraraVeiculo]");
    validSelectTReal("select[name=txtTraraVeiculo]");   
    acionamentoForm("select[name=txtTraraVeiculo]", "#divVeiculos");
        
        validSelect("select[name=txtTipoVeiculoAl]");
        validSelectTReal("select[name=txtTipoVeiculoAl]");
        
        validInput("input[name=txtMarcaVeiculoAl]");
        validInputTReal("input[name=txtMarcaVeiculoAl]");
        
        validInput("input[name=txtModeloVeiculoAl]");
        validInputTReal("input[name=txtModeloVeiculoAl]");
        
        validInput("input[name=txtCorVeiculoAl]");
        validInputTReal("input[name=txtCorVeiculoAl]");
        
        validInput("input[name=txtPlacaVeiculoAl]");
        validInputTReal("input[name=txtPlacaVeiculoAl]");
    
// --> Fim Etapa 2: DADOS INDIVIDUAIS
    
// --> Início Etapa 3: SAÚDE
    //Campo Select Fumante
    validSelect("select[name=txtFumante]");
    validSelectTReal("select[name=txtFumante]");
    
    //Campo Select Alergico
    validSelect("select[name=txtAlergico]");
    validSelectTReal("select[name=txtAlergico]");
    acionamentoForm("select[name=txtAlergico]", "#divAlergias");
    
    //Campo Select Medicamentos Controlados
    validSelect("select[name=txtUsoMtoCt]");
    validSelectTReal("select[name=txtUsoMtoCt]");
    acionamentoForm("select[name=txtUsoMtoCt]", "#divMtoCt");
    
    //Campo Select Termogênicos, Ergogênicos ou Suplementos Alimentares
    validSelect("select[name=txtUsoTermErgSupAli]");
    validSelectTReal("select[name=txtUsoTermErgSupAli]");
    acionamentoForm("select[name=txtUsoTermErgSupAli]", "#divTermErgSupAli");
// --> Fim Etapa 3: SAÚDE

// --> Início Etapa 4: DADOS MILITARES
    //Campo Input Escola de Formação
    validSelect("select[name=txtFormEscNome]");
    validSelectTReal("select[name=txtFormEscNome]");
    
    //Campo Input Turma
    validAno("input[name=txtFormTurma]");
    validAnoTReal("input[name=txtFormTurma]");
    somenteNumero("input[name=txtFormTurma]");
    
    //Campo Select Comportamento
    validSelect("select[name=txtCptmAl]");
    validSelectTReal("select[name=txtCptmAl]");
    
    //Campo Input Última Promoção
    validDataUltProm("input[name=txtUltDataPracaAl]", "input[name=txtDataUltProm]");
    validDataUltPromTReal("input[name=txtUltDataPracaAl]", "input[name=txtDataUltProm]");
    
    //Campo Select QA para Promoção
    validSelect("select[name=txtQaProm]");
    validSelectTReal("select[name=txtQaProm]");    
    acionamentoForm("select[name=txtQaProm]", "#divQaQuando");
    
    //Campo Input QA Quando
    validDataQaQuando("input[name=txtDataUltProm]", "input[name=txtQaQuandoProm]");
    validDataQaQuandoTReal("input[name=txtDataUltProm]", "input[name=txtQaQuandoProm]");
    
    //Campo Input Data Último TAF
    validDataUltTAF("input[name=txtUltDataPracaAl]", "input[name=txtDataUltTAF]");
    validDataUltTAFTReal("input[name=txtUltDataPracaAl]", "input[name=txtDataUltTAF]");
    
    //Campo Select Menção
    validSelect("select[name=txtMencaoTAF]");
    validSelectTReal("select[name=txtMencaoTAF]");
    
    //Campo Input Função 1
    validInput("input[name=txtFunc1]");
    validInputTReal("input[name=txtFunc1]");
    
    //Campo Input Função 2
    validInput("input[name=txtFunc2]");
    validInputTReal("input[name=txtFunc2]");
    
    //Campo Input Função 3
    validInput("input[name=txtFunc3]");
    validInputTReal("input[name=txtFunc3]");
// --> Fim Etapa 4: DADOS MILITARES

// --> Início Etapa 5: DADOS FAMILIARES
    //Campo Select Possui Cônjuge
    validSelect("select[name=txtPossuiConjuge]");
    validSelectTReal("select[name=txtPossuiConjuge]");
    acionamentoForm("select[name=txtPossuiConjuge]", "#divConjuge");    
    
    //Campo Input Nome Cônjuge
    validInput("input[name=txtNomeConjuge]");
    validInputTReal("input[name=txtNomeConjuge]");
    
    //Campo Input Sobrenome Cônjuge
    validInput("input[name=txtSobrenomeConjuge]");
    validInputTReal("input[name=txtSobrenomeConjuge]");
    
    //Campo Input CPF Cônjuge
    validCPF("input[name=txtCpfConjuge]");
    validCPFTReal("input[name=txtCpfConjuge]");
    
    //Campo Input Email Cônjuge
    validEmail("input[name=txtEmailConjuge]");
    validEmailTReal("input[name=txtEmailConjuge]");
    
    //Campo Input Fone Cônjuge
    validFoneCel("input[name=txtFoneConjuge]");
    validFoneCelTReal("input[name=txtFoneConjuge]");
    
    //Campo Select Parentesco Referência
    validSelect("select[name=txtParentescoRef]");
    validSelectTReal("select[name=txtParentescoRef]");
    
    //Campo Input Nome Referência
    validInput("input[name=txtNomeRef]");
    validInputTReal("input[name=txtNomeRef]");
    
    //Campo Input Sobrenome Referência
    validInput("input[name=txtSobrenomeRef]");
    validInputTReal("input[name=txtSobrenomeRef]");
    
    //Campo Input CPF Referência
    validCPF("input[name=txtCpfRef]");
    validCPFTReal("input[name=txtCpfRef]");
    
    //Campo Input Email Referência
    validEmail("input[name=txtEmailRef]");
    validEmailTReal("input[name=txtEmailRef]");
    
    //Campo Input Fone Referência
    validFoneCel("input[name=txtFoneRef]");
    validFoneCelTReal("input[name=txtFoneRef]");
    
    //Campo Select Referência Conclusão
    validSelect("select[name=txtAddRefConclusao]");
    validSelectTReal("select[name=txtAddRefConclusao]");
    acionamentoForm("select[name=txtAddRefConclusao]", "#divRefConclusao");
    
    //Campo Select Parentesco Referência Conclusão
    validSelect("select[name=txtParentescoRefConclusao]");
    validSelectTReal("select[name=txtParentescoRefConclusao]");
    
    //Campo Input Nome Referência Conclusão
    validInput("input[name=txtNomeRefConclusao]");
    validInputTReal("input[name=txtNomeRefConclusao]");
    
     //Campo Input Sobrenome Referência Conclusão
    validInput("input[name=txtSobrenomeRefConclusao]");
    validInputTReal("input[name=txtSobrenomeRefConclusao]");
    
    //Campo Input CPF Referência Conclusão
    validCPF("input[name=txtCpfRefConclusao]");
    validCPFTReal("input[name=txtCpfRefConclusao]");
    
    //Campo Input Email Referência Conclusão
    validEmail("input[name=txtEmailRefConclusao]");
    validEmailTReal("input[name=txtEmailRefConclusao]");
    
    //Campo Input Fone Referência Conclusão
    validFoneCel("input[name=txtFoneRefConclusao]");
    validFoneCelTReal("input[name=txtFoneRefConclusao]");
// --> Fim Etapa 5: DADOS FAMILIARES

// --> Início Etapa 6: DADOS DE ENDEREÇO
    //Campo Input CEP Residência
    validCEP("input[name=txtCepEndResid]");
    validCEPTReal("input[name=txtCepEndResid]");
    
    //Campo Input Endereço Residência
    validInput("input[name=txtNomeEndResid]");
    validInputTReal("input[name=txtNomeEndResid]");
    
    //Campo Input Número Residência
    validInput("input[name=txtNumEndResid]");
    validInputTReal("input[name=txtNumEndResid]");
    
    //Campo Input Estado Residência
    validSelect("select[name=txtEstadoEndResid]");
    validSelectTReal("select[name=txtEstadoEndResid]");
    
    //Campo Input Cidade Residência
    validSelect("select[name=txtCidadeEndResid]");
    validSelectTReal("select[name=txtCidadeEndResid]");
    
    //Campo Input Bairro Residência
    validInput("input[name=txtBairroEndResid]");
    validInputTReal("input[name=txtBairroEndResid]");
    
    //Campo Input Complemento Residência
    validInput("input[name=txtCompEndResid]");
    validInputNuloTReal("input[name=txtCompEndResid]");
    
    //Campo Input Ponto de Referencia Residência
    validInput("input[name=txtPtRefEndResid]");
    validInputNuloTReal("input[name=txtPtRefEndResid]");
    
    //Campo Select Endereço durante Curso
    validSelect("select[name=txtEndCurso]");
    validSelectTReal("select[name=txtEndCurso]");
        
    //Campo Input CEP durante Curso
    validCEP("input[name=txtCepEndCurso]");
    validCEPTReal("input[name=txtCepEndCurso]");
    
    //Campo Input Endereço durante Curso
    validInput("input[name=txtNomeEndCurso]");
    validInputTReal("input[name=txtNomeEndCurso]");
    
    //Campo Input Número durante Curso
    validInput("input[name=txtNumEndCurso]");
    validInputTReal("input[name=txtNumEndCurso]");
    
    //Campo Input Estado durante Curso
    validSelect("select[name=txtEstadoEndCurso]");
    validSelectTReal("select[name=txtEstadoEndCurso]");
    
    //Campo Input Cidade durante Curso
    validSelect("select[name=txtCidadeEndCurso]");
    validSelectTReal("select[name=txtCidadeEndCurso]");
    
    //Campo Input Bairro durante Curso
    validInput("input[name=txtBairroEndCurso]");
    validInputTReal("input[name=txtBairroEndCurso]");
    
    //Campo Input Complemento durante Curso
    validInput("input[name=txtCompEndCurso]");
    validInputNuloTReal("input[name=txtCompEndCurso]");
    
    //Campo Input Ponto de Referencia durante Curso
    validInput("input[name=txtPtRefEndCurso]");
    validInputNuloTReal("input[name=txtPtRefEndCurso]");
// --> Fim Etapa 6: DADOS DE ENDEREÇO

// --> Início Etapa 7: CURSOS/ESTÁGIO
    //Campo Select EAS
    validSelect("select[name=txtPossuiEAS]");
    validSelectTReal("select[name=txtPossuiEAS]");
    
    //Campo Select Idiomas    
    validSelect("select[name=txtHabIdiomas]");
    validSelectTReal("select[name=txtHabIdiomas]");
    acionamentoForm("select[name=txtHabIdiomas]" ,"#divIdiomas");
    
    //Campo Select Curso Aperfiçoamento
    validSelect("select[name=txtPossuiCAperf]");
    validSelectTReal("select[name=txtPossuiCAperf]");
    acionamentoForm("select[name=txtPossuiCAperf]", "#divCAperf");
        
        //Campo Input Select Curso
        validSelect("select[name=txtCAperf]");    
        validSelectTReal("select[name=txtCAperf]");    
        
        //Campo Input Ano Conclusão Curso de Aperfeiçoamento            
        validAno("input[name=txtAnoCAperf");
        validAnoTReal("input[name=txtAnoCAperf");
        
    //Campo Select Curso Altos Estudos
    validSelect("select[name=txtPossuiCAltEstudos]");
    validSelectTReal("select[name=txtPossuiCAltEstudos]");
    acionamentoForm("select[name=txtPossuiCAltEstudos]", "#divCAltEstudos");
    
        //Campo Input Select Curso
        validSelect("select[name=txtCAltEstudos]");
        validSelectTReal("select[name=txtCAltEstudos]");

        //Campo Input Ano Conclusão Curso de Aperfeiçoamento
        validAno("input[name=txtAnoCAltEstudos");
        validAnoTReal("input[name=txtAnoCAltEstudos");
    
    //Campo Select Cursos Extensão ou Especialização
    /*validSelect("select[name=txtPossuiCExtsEsp]");  
    validSelectTReal("select[name=txtPossuiCExtsEsp]");  
    acionamentoForm("select[name=txtPossuiCExtsEsp]", "#divCExtsEsp");
        
    //Campo Select Estágios Militares Operacionais
    validSelect("select[name=txtPossuiEstMil]");
    validSelectTReal("select[name=txtPossuiEstMil]");
    acionamentoForm("select[name=txtPossuiEstMil]", "#divEstagios");*/
// --> Fim Etapa 7: CURSOS/ESTÁGIO

// --> Início Etapa 8: PREPARAÇÃO
    //Campo Select Preparação Física
    validSelect("select[name=txtPrepFisica]");
    validSelectTReal("select[name=txtPrepFisica]");
    
    //Campo Select Apoio Familiar
    validSelect("select[name=txtApoioFam]");
    validSelectTReal("select[name=txtApoioFam]");
    
    //Campo Select Apoio de sua OM
    validSelect("select[name=txtApoioOM]");
    validSelectTReal("select[name=txtApoioOM]");
    
    //Campo Select OM Curso de preparação
    validSelect("select[name=txtCPrepCOS]");
    validSelectTReal("select[name=txtCPrepCOS]");
    
    //Campo Select Problemas comprometer seu rendimento
    validSelect("select[name=txtProbRend]");
    validSelectTReal("select[name=txtProbRend]");
    
    //Campo Select Tempo de Preparação
    validSelect("select[name=txtTempoPrep]");
    validSelectTReal("select[name=txtTempoPrep]");
    
    //Campo Select Preparo intelectual no assunto de Doutrina de Operações na Selva
    validSelect("select[name=txtDedicacaoDoutOPS]");
    validSelectTReal("select[name=txtDedicacaoDoutOPS]");
    
    //Campo Input Fator Motivação
    validInput("input[name=txtFatorMotivacao]");
    validInputTReal("input[name=txtFatorMotivacao]");
    
    //Campo Select Consultou Site
    validSelect("select[name=txtCsltSite]");
    validSelectTReal("select[name=txtCsltSite]");
    
    //Campo Select Consultou Ambiente Virtual do Aluno
    validSelect("select[name=txtCsltAmbVirtAl]");
    validSelectTReal("select[name=txtCsltAmbVirtAl]");
// --> Fim Etapa 8: PREPARAÇÃO

// --> Início Etapa 9: VIVÊNCIA NA AMAZÔNIA
    //Campo Select Já serviu na Amazônia
    validSelect("select[name=txtSvAmz]");
    validSelectTReal("select[name=txtSvAmz]");
    acionamentoForm("select[name=txtSvAmz]", "#divSvAmz");
// --> Fim Etapa 9: VIVÊNCIA NA AMAZÔNIA
});

// --> Início Etapa 1: OM ATUAL
$("select[name=txtTipoForca]").change(function(){
    limpaCampoSelect("select[name=txtForca]");
    limpaCampoSelect("select[name=txtEstadoForca]");
    limpaCampoSelect("select[name=txtNomeOM]");
    limpaCampoInput("input[name=txtFoneOM]");
    limpaCampoSelect("select[name=txtPGradCmtOM]");
    limpaCampoSelect("select[name=txtPGradChImtoOM]");
    limpaCampoSelect("select[name=txtPGradAl]");
});
$("select[name=txtForca]").change(function(){
    limpaCampoSelect("select[name=txtEstadoForca]");
    limpaCampoSelect("select[name=txtNomeOM]");
    limpaCampoInput("input[name=txtFoneOM]");
    /*limpaCampoInput("input[name=txtEndCepOM]");
    limpaCampoInput("input[name=txtEndNomeOM]");
    limpaCampoInput("input[name=txtEndNumOM]");
    limpaCampoInput("input[name=txtEndEstadoOM]");
    limpaCampoInput("input[name=txtEndCidadeOM]");
    limpaCampoInput("input[name=txtEndBairroOM]");
    limpaCampoInput("input[name=txtEndCompOM]");
    limpaCampoInput("input[name=txtEndPtRefOM]");*/
    limpaCampoSelect("select[name=txtPGradCmtOM]");
    limpaCampoSelect("select[name=txtPGradChImtoOM]");
    limpaCampoSelect("select[name=txtPGradAl]");
});

$("select[name=txtEstadoForca]").change(function(){
    limpaCampoSelect("select[name=txtNomeOM]");
    limpaCampoInput("input[name=txtFoneOM]");
    /*limpaCampoInput("input[name=txtEndCepOM]");
    limpaCampoInput("input[name=txtEndNomeOM]");
    limpaCampoInput("input[name=txtEndNumOM]");
    limpaCampoInput("input[name=txtEndEstadoOM]");
    limpaCampoInput("input[name=txtEndCidadeOM]");
    limpaCampoInput("input[name=txtEndBairroOM]");
    limpaCampoInput("input[name=txtEndCompOM]");
    limpaCampoInput("input[name=txtEndPtRefOM]");*/
});

$("select[name=txtNomeOM]").change(function(){
    /*limpaCampoInput("input[name=txtFoneOM]");
    limpaCampoInput("input[name=txtEndCepOM]");
    limpaCampoInput("input[name=txtEndNomeOM]");
    limpaCampoInput("input[name=txtEndNumOM]");
    limpaCampoInput("input[name=txtEndEstadoOM]");
    limpaCampoInput("input[name=txtEndCidadeOM]");
    limpaCampoInput("input[name=txtEndBairroOM]");
    limpaCampoInput("input[name=txtEndCompOM]");
    limpaCampoInput("input[name=txtEndPtRefOM]");*/
});
// <-- Fim Etapa 1: OM ATUAL

// --> Início Etapa 2: DADOS INDIVIDUAIS
$("select[name=txtNatEstAl]").change(function(){
    limpaCampoSelect("select[name=txtNatCidAl]");
});
$("select[name=txtTitEleitorEstAl]").change(function(){
    limpaCampoSelect("select[name=txtTitEleitorCidAl]");
});
// <-- Fim Etapa 2: DADOS INDIVIDUAIS

$(function(){
    var atual_fs, prox_fs, anterior_fs;
    
    function proximo(elemento){
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
    
    // Obrigatoriedade
    // --> Início Etapa 1: OM ATUAL
    $("button[name=btnProximo2]").click(function(){
        var foneOM = $("input[name=txtFoneOM]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        //var endCepOM = $("input[name=txtEndCepOM]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        if($("select[name=txtTipoForca]").val() == '0'){
            $("select[name=txtTipoForca]").removeClass("is-valid");
            $("select[name=txtTipoForca]").addClass("is-invalid");
            $("select[name=txtTipoForca]").focus();
        }
        else if($("select[name=txtForca]").val() == '0'){
            $("select[name=txtForca]").removeClass("is-valid");
            $("select[name=txtForca]").addClass("is-invalid");
            $("select[name=txtForca]").focus();
        }
        else if($("select[name=txtEstadoForca]").val() == '0'){
            $("select[name=txtEstadoForca]").removeClass("is-valid");
            $("select[name=txtEstadoForca]").addClass("is-invalid");
            $("select[name=txtEstadoForca]").focus();
        }
        else if($("select[name=txtNomeOM]").val() == '0'){
            $("select[name=txtNomeOM]").removeClass("is-valid");
            $("select[name=txtNomeOM]").addClass("is-invalid");
            $("select[name=txtNomeOM]").focus();
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
        /*else if(endCepOM == ''){
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
        }*/
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
        //Próxima Etapa
        else{
            proximo($(this));
        }
    });
    // --> Fim Etapa 1: OM ATUAL
    
    // --> Início Etapa 2: DADOS INDIVIDUAIS
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
        
        var dataPracaAl = $("input[name=txtUltDataPracaAl]").val();
        var dataPracaAlSplit = dataPracaAl.split('-');        
        var diaPracaAl = dataPracaAlSplit[2];
        var mesPracaAl = dataPracaAlSplit[1];
        var anoPracaAl = dataPracaAlSplit[0];
        
        var titEleitorNumAl = $("input[name=txtTitEleitorNumAl]").val().replace(" ","").replace(" ","").replace(" ","");
        var titEleitorZonaAl = $("input[name=txtTitEleitorZonaAl]").val().replace(" ","").replace(" ","").replace(" ","");        
        var titEleitorSecaoAl = $("input[name=txtTitEleitorSecaoAl]").val().replace(" ","").replace(" ","").replace(" ","");
        
        var foneCel = $("input[name=txtFoneAl]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        
        var filtro = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
        var emailAl = $("input[name=txtEmailAl]").val();               
        
        var numCNH = $("input[name=txtCNHNumAl]").val().replace(" ","").replace(" ","").replace(" ","");        
        var dataValCNH = $("input[name=txtCNHDataValAl]").val();
        var dataValCNHSplit = dataValCNH.split('-');        
        var diaValCNH = dataValCNHSplit[2];
        var mesValCNH = dataValCNHSplit[1];
        var anoValCNH = dataValCNHSplit[0];
        
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
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNascAl == anoAtual) && (mesNascAl > mesAtual)){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNascAl > anoAtual)){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoAtual - anoNascAl) < 18){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNascAl) === 18) && (mesNascAl < mesAtual)){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNascAl) === 18) && (mesNascAl === mesAtual) && (diaNascAl < diaAtual)){
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
                cpfOk=1;
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
                cpfOk=1;
            }    
        }
        else if($("select[name=txtForca]").val() == 2){
            var preccp = $("input[name=txtPreccpAl]").val().replace("-","").replace(" ","");
            var cp = $("input[name=txtCPAl]").val().replace("-","").replace(" ","");
            if(preccp == ''){
                $("input[name=txtPreccpAl]").removeClass("is-valid");
                $("input[name=txtPreccpAl]").addClass("is-invalid");
                $("input[name=txtPreccpAl]").focus();
                $(".invalid-preccpAl").html("Campo Obrigatório!");
            }
            else if(preccp == '000000000' || preccp == '111111111' || preccp == '222222222' || preccp == '333333333' ||                 
                    preccp == '444444444' || preccp == '555555555' || preccp == '666666666' || preccp == '777777777' ||                 
                    preccp == '888888888' || preccp == '999999999'){
                $("input[name=txtPreccpAl]").removeClass("is-valid");
                $("input[name=txtPreccpAl]").addClass("is-invalid");
                $("input[name=txtPreccpAl]").focus();
                $(".invalid-preccpAl").html("Prec-CP Inválida!");  
            }
            else if(cp == ''){
                $("input[name=txtCPAlAl]").removeClass("is-valid");
                $("input[name=txtCPAl]").addClass("is-invalid");
                $("input[name=txtCPAl]").focus();
                $(".invalid-cpAl").html("Campo Obrigatório!");
            }
            else if(cp == '000000' || cp == '111111' || cp == '222222' || cp == '333333' ||                 
                    cp == '444444' || cp == '555555' || cp == '666666' || cp == '777777' ||                 
                    cp == '888888' || cp == '999999'){
                $("input[name=txtCPAl]").removeClass("is-valid");
                $("input[name=txtCPAl]").addClass("is-invalid");
                $("input[name=txtCPAl]").focus();
                $(".invalid-cpAl").html("CP Inválido!");  
            }
            else if(dataPracaAl == ''){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Campo Obrigatório!");
            }       
            else if((anoPracaAl == anoAtual) && (mesPracaAl == mesAtual) && (diaPracaAl > diaAtual)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
            }       
            else if((anoPracaAl == anoNascAl) && (mesPracaAl == mesNascAl) && (diaPracaAl < diaNascAl)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
            }       
            else if((anoPracaAl == anoAtual) && (mesPracaAl > mesAtual)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
            }       
            else if((anoPracaAl == anoNascAl) && (mesPracaAl < mesNascAl)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
            }       
            else if((anoPracaAl > anoAtual)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
            }       
            else if((anoPracaAl < anoNascAl)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
            }
            else if((anoPracaAl - anoNascAl) < 18){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
            }   
            else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl < mesNascAl)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
            }   
            else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl === mesNascAl) && (diaPracaAl < diaNascAl)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
            }
            else if($("select[name=txtNatEstAl]").val() == '0'){
                $("select[name=txtNatEstAl]").removeClass("is-valid");
                $("select[name=txtNatEstAl]").addClass("is-invalid");
                $("select[name=txtNatEstAl]").focus();
            }
            else if($("select[name=txtNatCidAl]").val() == '0'){
                $("select[name=txtNatCidAl]").removeClass("is-valid");
                $("select[name=txtNatCidAl]").addClass("is-invalid");
                $("select[name=txtNatCidAl]").focus();
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
            else if(titEleitorNumAl == ''){
                $("input[name=txtTitEleitorNumAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorNumAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorNumAl]").focus();
                $(".invalid-titEleitorNumAl").html("Campo Obrigatório!");
            }
            else if(titEleitorNumAl == '000000000000' || titEleitorNumAl == '111111111111' || titEleitorNumAl == '222222222222' || titEleitorNumAl == '333333333333' ||                 
                    titEleitorNumAl == '444444444444' || titEleitorNumAl == '555555555555' || titEleitorNumAl == '666666666666' || titEleitorNumAl == '777777777777' ||                 
                    titEleitorNumAl == '888888888888' || titEleitorNumAl == '999999999999'){
                $("input[name=txtTitEleitorNumAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorNumAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorNumAl]").focus();
                $(".invalid-titEleitorNumAl").html("Título de Eleitor Inválido!");   
            }        
            else if(titEleitorZonaAl == ''){
                $("input[name=txtTitEleitorZonaAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorZonaAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorZonaAl]").focus();
                $(".invalid-titEleitorZonaAl").html("Campo Obrigatório!");
            }
            else if((titEleitorZonaAl != '') && (titEleitorZonaAl.length < 3)){
                $("input[name=txtTitEleitorZonaAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorZonaAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorZonaAl]").focus();
                $(".invalid-titEleitorZonaAl").html("A Zona é formada por 3 caracteres!");   
            }
            else if(titEleitorSecaoAl == ''){
                $("input[name=txtTitEleitorSecaoAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorSecaoAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorSecaoAl]").focus();
                $(".invalid-titEleitorSecaoAl").html("Campo Obrigatório!");
            }
            else if((titEleitorSecaoAl != '') && (titEleitorSecaoAl.length < 4)){
                $("input[name=txtTitEleitorSecaoAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorSecaoAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorSecaoAl]").focus();
                $(".invalid-titEleitorSecaoAl").html("A Secao é formada por 4 caracteres!");   
            }
            else if($("select[name=txtTitEleitorEstAl]").val() == '0'){
                $("select[name=txtTitEleitorEstAl]").removeClass("is-valid");
                $("select[name=txtTitEleitorEstAl]").addClass("is-invalid");
                $("select[name=txtTitEleitorEstAl]").focus();
            }
            else if($("select[name=txtTitEleitorCidAl]").val() == '0'){
                $("select[name=txtTitEleitorCidAl]").removeClass("is-valid");
                $("select[name=txtTitEleitorCidAl]").addClass("is-invalid");
                $("select[name=txtTitEleitorCidAl]").focus();
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
            else if($("input[name=txtDvAgenciaAl]").val() == ''){
                $("input[name=txtDvAgenciaAl]").removeClass("is-valid");
                $("input[name=txtDvAgenciaAl]").addClass("is-invalid");
                $("input[name=txtDvAgenciaAl]").focus();
            }
            else if($("input[name=txtContaAl]").val() == ''){
                $("input[name=txtContaAl]").removeClass("is-valid");
                $("input[name=txtContaAl]").addClass("is-invalid");
                $("input[name=txtContaAl]").focus();
            }
            else if($("input[name=txtDvContaAl]").val() == ''){
                $("input[name=txtDvContaAl]").removeClass("is-valid");
                $("input[name=txtDvContaAl]").addClass("is-invalid");
                $("input[name=txtDvContaAl]").focus();
            }
            else if(emailAl == ''){
                $("input[name=txtEmailAl]").removeClass("is-valid");
                $("input[name=txtEmailAl]").addClass("is-invalid");
                $("input[name=txtEmailAl]").focus();
                $(".invalid-email").html("Campo Obrigatório!");
            }        
            else if(filtro.test(emailAl) == false){
                $("input[name=txtEmailAl]").removeClass("is-valid");
                $("input[name=txtEmailAl]").addClass("is-invalid");
                $("input[name=txtEmailAl]").focus();
                $(".invalid-email").html("Email Inválido!");
            }
            else if(foneCel == ''){
                $("input[name=txtFoneAl]").removeClass("is-valid");
                $("input[name=txtFoneAl]").addClass("is-invalid");
                $("input[name=txtFoneAl]").focus();
                $(".invalid-foneCel").html("Campo Obrigatório!");
            }
            else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
                    foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
                    foneCel == '88888888888' || foneCel == '99999999999'){
                $("input[name=txtFoneAl]").removeClass("is-valid");
                $("input[name=txtFoneAl]").addClass("is-invalid");
                $("input[name=txtFoneAl]").focus();
                $(".invalid-foneCel").html("Fone Inválido!");
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
                    proximo($(this));
                }
                //Possui Veículo
                else if($("select[name=txtTraraVeiculo]").val() == 's'){
                    if($("select[name=txtTipoVeiculoAl]").val() == '0' ){
                        $("select[name=txtTipoVeiculoAl]").removeClass("is-valid");
                        $("select[name=txtTipoVeiculoAl]").addClass("is-invalid");
                        $("select[name=txtTipoVeiculoAl]").focus();
                    }                    
                    else if($("input[name=txtMarcaVeiculoAl]").val() == ''){
                        $("input[name=txtMarcaVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtMarcaVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtMarcaVeiculoAl]").focus();
                    }
                    else if($("input[name=txtModeloVeiculoAl]").val() == ''){
                        $("input[name=txtModeloVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtModeloVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtModeloVeiculoAl]").focus();
                    }
                    else if($("input[name=txtCorVeiculoAl]").val() == ''){
                        $("input[name=txtCorVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtCorVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtCorVeiculoAl]").focus();
                    }
                    else if($("input[name=txtPlacaVeiculoAl]").val() == ''){
                        $("input[name=txtPlacaVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtPlacaVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtPlacaVeiculoAl]").focus();
                    }
                    else{
                        proximo($(this));
                    }                  
                }
            }        
            //Possui CNH
           else if($("select[name=txtPossuiCNH]").val() == 's'){            
                if(numCNH == ''){
                    $("input[name=txtCNHNumAl]").removeClass("is-valid");
                    $("input[name=txtCNHNumAl]").addClass("is-invalid");
                    $("input[name=txtCNHNumAl]").focus();
                    $(".invalid-numCNH").html("Campo Obrigatório!");
                }
                else if(numCNH == '00000000000' || numCNH == '11111111111' || numCNH == '22222222222' || numCNH == '33333333333' ||                 
                        numCNH == '44444444444' || numCNH == '55555555555' || numCNH == '66666666666' || numCNH == '77777777777' ||                 
                        numCNH == '88888888888' || numCNH == '99999999999'){
                    $("input[name=txtCNHNumAl]").removeClass("is-valid");
                    $("input[name=txtCNHNumAl]").addClass("is-invalid");
                    $("input[name=txtCNHNumAl]").focus();
                    $(".invalid-numCNH").html("CNH Inválida!");   
                }
                else if($("select[name=txtCNHCatgAl]").val() == '0'){
                    $("select[name=txtCNHCatgAl]").removeClass("is-valid");
                    $("select[name=txtCNHCatgAl]").addClass("is-invalid");
                    $("select[name=txtCNHCatgAl]").focus();
                }
                else if(dataValCNH == ''){
                    $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                    $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                    $("input[name=txtCNHDataValAl]").focus();
                    $(".invalid-dataValCNH").html("Campo Obrigatório!");
                }       
                else if((anoValCNH == anoAtual) && (mesValCNH == mesAtual) && (diaValCNH < diaAtual)){
                    $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                    $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                    $("input[name=txtCNHDataValAl]").focus();
                    $(".invalid-dataValCNH").html("CNH Vencida!");
                }       
                else if((anoValCNH == anoAtual) && (mesValCNH < mesAtual)){
                    $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                    $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                    $("input[name=txtCNHDataValAl]").focus();
                    $(".invalid-dataValCNH").html("CNH Vencida!");
                }       
                else if((anoValCNH < anoAtual)){
                    $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                    $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                    $("input[name=txtCNHDataValAl]").focus();
                    $(".invalid-dataValCNH").html("CNH Vencida!");
                } 
                //Não possui Veículo
                else if($("select[name=txtTraraVeiculo]").val() == 'n'){
                    proximo($(this));
                }
                //Possui Veículo
                else if($("select[name=txtTraraVeiculo]").val() == 's'){
                    if($("select[name=txtTipoVeiculoAl]").val() == '0' ){
                        $("select[name=txtTipoVeiculoAl]").removeClass("is-valid");
                        $("select[name=txtTipoVeiculoAl]").addClass("is-invalid");
                        $("select[name=txtTipoVeiculoAl]").focus();
                    }                    
                    else if($("input[name=txtMarcaVeiculoAl]").val() == ''){
                        $("input[name=txtMarcaVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtMarcaVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtMarcaVeiculoAl]").focus();
                    }
                    else if($("input[name=txtModeloVeiculoAl]").val() == ''){
                        $("input[name=txtModeloVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtModeloVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtModeloVeiculoAl]").focus();
                    }
                    else if($("input[name=txtCorVeiculoAl]").val() == ''){
                        $("input[name=txtCorVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtCorVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtCorVeiculoAl]").focus();
                    }
                    else if($("input[name=txtPlacaVeiculoAl]").val() == ''){
                        $("input[name=txtPlacaVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtPlacaVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtPlacaVeiculoAl]").focus();
                    }
                    else{
                        proximo($(this));
                    } 
                }
            }
            //Próxima Etapa
            else{
                proximo($(this));
            }
        }else{
            if(dataPracaAl == ''){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Campo Obrigatório!");
            }       
            else if((anoPracaAl == anoAtual) && (mesPracaAl == mesAtual) && (diaPracaAl > diaAtual)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
            }       
            else if((anoPracaAl == anoNascAl) && (mesPracaAl == mesNascAl) && (diaPracaAl < diaNascAl)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
            }       
            else if((anoPracaAl == anoAtual) && (mesPracaAl > mesAtual)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
            }       
            else if((anoPracaAl == anoNascAl) && (mesPracaAl < mesNascAl)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
            }       
            else if((anoPracaAl > anoAtual)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
            }       
            else if((anoPracaAl < anoNascAl)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
            }
            else if((anoPracaAl - anoNascAl) < 18){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
            }   
            else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl < mesNascAl)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
            }   
            else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl === mesNascAl) && (diaPracaAl < diaNascAl)){
                $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
                $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
                $("input[name=txtUltDataPracaAl]").focus();
                $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
            }
            else if($("select[name=txtNatEstAl]").val() == '0'){
                $("select[name=txtNatEstAl]").removeClass("is-valid");
                $("select[name=txtNatEstAl]").addClass("is-invalid");
                $("select[name=txtNatEstAl]").focus();
            }
            else if($("select[name=txtNatCidAl]").val() == '0'){
                $("select[name=txtNatCidAl]").removeClass("is-valid");
                $("select[name=txtNatCidAl]").addClass("is-invalid");
                $("select[name=txtNatCidAl]").focus();
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
            else if(titEleitorNumAl == ''){
                $("input[name=txtTitEleitorNumAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorNumAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorNumAl]").focus();
                $(".invalid-titEleitorNumAl").html("Campo Obrigatório!");
            }
            else if(titEleitorNumAl == '000000000000' || titEleitorNumAl == '111111111111' || titEleitorNumAl == '222222222222' || titEleitorNumAl == '333333333333' ||                 
                    titEleitorNumAl == '444444444444' || titEleitorNumAl == '555555555555' || titEleitorNumAl == '666666666666' || titEleitorNumAl == '777777777777' ||                 
                    titEleitorNumAl == '888888888888' || titEleitorNumAl == '999999999999'){
                $("input[name=txtTitEleitorNumAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorNumAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorNumAl]").focus();
                $(".invalid-titEleitorNumAl").html("Título de Eleitor Inválido!");   
            }        
            else if(titEleitorZonaAl == ''){
                $("input[name=txtTitEleitorZonaAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorZonaAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorZonaAl]").focus();
                $(".invalid-titEleitorZonaAl").html("Campo Obrigatório!");
            }
            else if((titEleitorZonaAl != '') && (titEleitorZonaAl.length < 3)){
                $("input[name=txtTitEleitorZonaAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorZonaAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorZonaAl]").focus();
                $(".invalid-titEleitorZonaAl").html("A Zona é formada por 3 caracteres!");   
            }
            else if(titEleitorSecaoAl == ''){
                $("input[name=txtTitEleitorSecaoAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorSecaoAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorSecaoAl]").focus();
                $(".invalid-titEleitorSecaoAl").html("Campo Obrigatório!");
            }
            else if((titEleitorSecaoAl != '') && (titEleitorSecaoAl.length < 4)){
                $("input[name=txtTitEleitorSecaoAl]").removeClass("is-valid");
                $("input[name=txtTitEleitorSecaoAl]").addClass("is-invalid");
                $("input[name=txtTitEleitorSecaoAl]").focus();
                $(".invalid-titEleitorSecaoAl").html("A Secao é formada por 4 caracteres!");   
            }
            else if($("select[name=txtTitEleitorEstAl]").val() == '0'){
                $("select[name=txtTitEleitorEstAl]").removeClass("is-valid");
                $("select[name=txtTitEleitorEstAl]").addClass("is-invalid");
                $("select[name=txtTitEleitorEstAl]").focus();
            }
            else if($("select[name=txtTitEleitorCidAl]").val() == '0'){
                $("select[name=txtTitEleitorCidAl]").removeClass("is-valid");
                $("select[name=txtTitEleitorCidAl]").addClass("is-invalid");
                $("select[name=txtTitEleitorCidAl]").focus();
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
            else if($("input[name=txtDvAgenciaAl]").val() == ''){
                $("input[name=txtDvAgenciaAl]").removeClass("is-valid");
                $("input[name=txtDvAgenciaAl]").addClass("is-invalid");
                $("input[name=txtDvAgenciaAl]").focus();
            }
            else if($("input[name=txtContaAl]").val() == ''){
                $("input[name=txtContaAl]").removeClass("is-valid");
                $("input[name=txtContaAl]").addClass("is-invalid");
                $("input[name=txtContaAl]").focus();
            }
            else if($("input[name=txtDvContaAl]").val() == ''){
                $("input[name=txtDvContaAl]").removeClass("is-valid");
                $("input[name=txtDvContaAl]").addClass("is-invalid");
                $("input[name=txtDvContaAl]").focus();
            }
            else if(emailAl == ''){
                $("input[name=txtEmailAl]").removeClass("is-valid");
                $("input[name=txtEmailAl]").addClass("is-invalid");
                $("input[name=txtEmailAl]").focus();
                $(".invalid-email").html("Campo Obrigatório!");
            }        
            else if(filtro.test(emailAl) == false){
                $("input[name=txtEmailAl]").removeClass("is-valid");
                $("input[name=txtEmailAl]").addClass("is-invalid");
                $("input[name=txtEmailAl]").focus();
                $(".invalid-email").html("Email Inválido!");
            }
            else if(foneCel == ''){
                $("input[name=txtFoneAl]").removeClass("is-valid");
                $("input[name=txtFoneAl]").addClass("is-invalid");
                $("input[name=txtFoneAl]").focus();
                $(".invalid-foneCel").html("Campo Obrigatório!");
            }
            else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
                    foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
                    foneCel == '88888888888' || foneCel == '99999999999'){
                $("input[name=txtFoneAl]").removeClass("is-valid");
                $("input[name=txtFoneAl]").addClass("is-invalid");
                $("input[name=txtFoneAl]").focus();
                $(".invalid-foneCel").html("Fone Inválido!");
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
                    proximo($(this));
                }
                //Possui Veículo
                else if($("select[name=txtTraraVeiculo]").val() == 's'){
                    if($("select[name=txtTipoVeiculoAl]").val() == '0' ){
                        $("select[name=txtTipoVeiculoAl]").removeClass("is-valid");
                        $("select[name=txtTipoVeiculoAl]").addClass("is-invalid");
                        $("select[name=txtTipoVeiculoAl]").focus();
                    }                    
                    else if($("input[name=txtMarcaVeiculoAl]").val() == ''){
                        $("input[name=txtMarcaVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtMarcaVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtMarcaVeiculoAl]").focus();
                    }
                    else if($("input[name=txtModeloVeiculoAl]").val() == ''){
                        $("input[name=txtModeloVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtModeloVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtModeloVeiculoAl]").focus();
                    }
                    else if($("input[name=txtCorVeiculoAl]").val() == ''){
                        $("input[name=txtCorVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtCorVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtCorVeiculoAl]").focus();
                    }
                    else if($("input[name=txtPlacaVeiculoAl]").val() == ''){
                        $("input[name=txtPlacaVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtPlacaVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtPlacaVeiculoAl]").focus();
                    }
                    else{
                        proximo($(this));
                    }           
                }
            }        
            //Possui CNH
           else if($("select[name=txtPossuiCNH]").val() == 's'){            
                if(numCNH == ''){
                    $("input[name=txtCNHNumAl]").removeClass("is-valid");
                    $("input[name=txtCNHNumAl]").addClass("is-invalid");
                    $("input[name=txtCNHNumAl]").focus();
                    $(".invalid-numCNH").html("Campo Obrigatório!");
                }
                else if(numCNH == '00000000000' || numCNH == '11111111111' || numCNH == '22222222222' || numCNH == '33333333333' ||                 
                        numCNH == '44444444444' || numCNH == '55555555555' || numCNH == '66666666666' || numCNH == '77777777777' ||                 
                        numCNH == '88888888888' || numCNH == '99999999999'){
                    $("input[name=txtCNHNumAl]").removeClass("is-valid");
                    $("input[name=txtCNHNumAl]").addClass("is-invalid");
                    $("input[name=txtCNHNumAl]").focus();
                    $(".invalid-numCNH").html("CNH Inválida!");   
                }
                else if($("select[name=txtCNHCatgAl]").val() == '0'){
                    $("select[name=txtCNHCatgAl]").removeClass("is-valid");
                    $("select[name=txtCNHCatgAl]").addClass("is-invalid");
                    $("select[name=txtCNHCatgAl]").focus();
                }
                else if(dataValCNH == ''){
                    $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                    $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                    $("input[name=txtCNHDataValAl]").focus();
                    $(".invalid-dataValCNH").html("Campo Obrigatório!");
                }       
                else if((anoValCNH == anoAtual) && (mesValCNH == mesAtual) && (diaValCNH < diaAtual)){
                    $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                    $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                    $("input[name=txtCNHDataValAl]").focus();
                    $(".invalid-dataValCNH").html("CNH Vencida!");
                }       
                else if((anoValCNH == anoAtual) && (mesValCNH < mesAtual)){
                    $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                    $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                    $("input[name=txtCNHDataValAl]").focus();
                    $(".invalid-dataValCNH").html("CNH Vencida!");
                }       
                else if((anoValCNH < anoAtual)){
                    $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                    $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                    $("input[name=txtCNHDataValAl]").focus();
                    $(".invalid-dataValCNH").html("CNH Vencida!");
                } 
                //Não possui Veículo
                else if($("select[name=txtTraraVeiculo]").val() == 'n'){
                    proximo($(this));
                }
                //Possui Veículo
                else if($("select[name=txtTraraVeiculo]").val() == 's'){
                    if($("select[name=txtTipoVeiculoAl]").val() == '0' ){
                        $("select[name=txtTipoVeiculoAl]").removeClass("is-valid");
                        $("select[name=txtTipoVeiculoAl]").addClass("is-invalid");
                        $("select[name=txtTipoVeiculoAl]").focus();
                    }                    
                    else if($("input[name=txtMarcaVeiculoAl]").val() == ''){
                        $("input[name=txtMarcaVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtMarcaVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtMarcaVeiculoAl]").focus();
                    }
                    else if($("input[name=txtModeloVeiculoAl]").val() == ''){
                        $("input[name=txtModeloVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtModeloVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtModeloVeiculoAl]").focus();
                    }
                    else if($("input[name=txtCorVeiculoAl]").val() == ''){
                        $("input[name=txtCorVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtCorVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtCorVeiculoAl]").focus();
                    }
                    else if($("input[name=txtPlacaVeiculoAl]").val() == ''){
                        $("input[name=txtPlacaVeiculoAl]").removeClass("is-valid");
                        $("input[name=txtPlacaVeiculoAl]").addClass("is-invalid");
                        $("input[name=txtPlacaVeiculoAl]").focus();
                    }
                    else{
                        proximo($(this));
                    } 
                }
            }
            //Próxima Etapa
            else{
                proximo($(this));
            }
        }
    });        
    // --> Fim Etapa 2: DADOS INDIVIDUAIS
    
    // --> Início Etapa 3: SAÚDE
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
            proximo($(this));
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
                    proximo($(this));
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
                    proximo($(this));
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
                    proximo($(this));
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
                proximo($(this));
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
                proximo($(this));
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
                proximo($(this));
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
                proximo($(this));
            }
        }        
    });
    // --> Fim Etapa 3: SAÚDE
    
    // --> Início Etapa 4: DADOS MILITARES
    $("button[name=btnProximo5]").click(function(){        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        
        var dataUltProm = $("input[name=txtDataUltProm]").val();
        var dataUltPromSplit = dataUltProm.split('-');        
        var diaUltProm = dataUltPromSplit[2];
        var mesUltProm = dataUltPromSplit[1];
        var anoUltProm = dataUltPromSplit[0];
        
        var dataPracaAl = $("input[name=txtUltDataPracaAl]").val();
        var dataPracaAlSplit = dataPracaAl.split('-');        
        var diaPracaAl = dataPracaAlSplit[2];
        var mesPracaAl = dataPracaAlSplit[1];
        var anoPracaAl = dataPracaAlSplit[0];
        
        var dataQaQuando = $("input[name=txtQaQuandoProm]").val();
        var dataQaQuandoSplit = dataQaQuando.split('-');        
        var diaQaQuando = dataQaQuandoSplit[2];
        var mesQaQuando = dataQaQuandoSplit[1];
        var anoQaQuando = dataQaQuandoSplit[0];        

        var dataUltTAF = $("input[name=txtDataUltTAF]").val();
        var dataUltTAFSplit = dataUltTAF.split('-');        
        var diaUltTAF = dataUltTAFSplit[2];
        var mesUltTAF = dataUltTAFSplit[1];
        var anoUltTAF = dataUltTAFSplit[0];
        
        if($("select[name=txtTipoForca]").val() == '1'){
            var ano = $("input[name=txtFormTurma]").val();
            
            if($("select[name=txtFormEscNome]").val() == '0'){
                $("select[name=txtFormEscNome]").removeClass("is-valid");
                $("select[name=txtFormEscNome]").addClass("is-invalid");
                $("select[name=txtFormEscNome]").focus();
            }
            else if(ano == ''){
                $("input[name=txtFormTurma]").removeClass("is-valid");
                $("input[name=txtFormTurma]").addClass("is-invalid");
                $("input[name=txtFormTurma]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if((ano != '') && (ano.length < 4)){
                $("input[name=txtFormTurma]").removeClass("is-valid");
                $("input[name=txtFormTurma]").addClass("is-invalid");
                $("input[name=txtFormTurma]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else if($("select[name=txtCptmAl]").val() == '0'){
                $("select[name=txtCptmAl]").removeClass("is-valid");
                $("select[name=txtCptmAl]").addClass("is-invalid");
                $("select[name=txtCptmAl]").focus();
            }
            else if(dataUltProm == ''){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Campo Obrigatório!");
            }       
            else if((anoUltProm == anoAtual) && (mesUltProm == mesAtual) && (diaUltProm > diaAtual)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
            }       
            else if((anoUltProm == anoPracaAl) && (mesUltProm == mesPracaAl) && (diaUltProm < diaPracaAl)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
            }       
            else if((anoUltProm == anoAtual) && (mesUltProm > mesAtual)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
            }       
            else if((anoUltProm == anoPracaAl) && (mesUltProm < mesPracaAl)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
            }       
            else if((anoUltProm > anoAtual)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
            }       
            else if((anoUltProm < anoPracaAl)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
            }
            else if($("select[name=txtQaProm]").val() == '0'){
                $("select[name=txtQaProm]").removeClass("is-valid");
                $("select[name=txtQaProm]").addClass("is-invalid");
                $("select[name=txtQaProm]").focus();
            }
            else if($("select[name=txtQaProm]").val() == 's'){
                if(dataQaQuando == ''){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Campo Obrigatório!");
                }       
                else if((anoQaQuando == anoAtual) && (mesQaQuando == mesAtual) && (diaQaQuando < diaAtual)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
                }       
                else if((anoQaQuando == anoUltProm) && (mesQaQuando == mesUltProm) && (diaQaQuando < diaUltProm)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
                }       
                else if((anoQaQuando == anoAtual) && (mesQaQuando < mesAtual)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
                }       
                else if((anoQaQuando == anoUltProm) && (mesQaQuando < mesUltProm)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
                }       
                else if((anoQaQuando < anoAtual)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
                }       
                else if((anoQaQuando < anoUltProm)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
                }
                else if(dataUltTAF == ''){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Campo Obrigatório!");
                }       
                else if((anoUltTAF == anoAtual) && (mesUltTAF == mesAtual) && (diaUltTAF > diaAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF == anoPracaAl) && (mesUltTAF == mesPracaAl) && (diaUltTAF < diaPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
                }       
                else if((anoUltTAF == anoAtual) && (mesUltTAF > mesAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF == anoPracaAl) && (mesUltTAF < mesPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
                }       
                else if((anoUltTAF > anoAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF < anoPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
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
                else if($("select[name=txtSvAmz]").val() == '0'){
                    $("select[name=txtSvAmz]").removeClass("is-valid");
                    $("select[name=txtSvAmz]").addClass("is-invalid");
                    $("select[name=txtSvAmz]").focus();
                }
                else if($("select[name=txtSvAmz]").val() == 'n'){
                    $("select[name=txtSvAmz]").removeClass("is-invalid");
                    $("select[name=txtSvAmz]").addClass("is-valid");
                    proximo($(this));
                }
                else if($("select[name=txtSvAmz]").val() == 's'){
                    for(var i=0;i<($("select[name=txtOMNomeSvAmz").length);i++){                
                        var dataInicio = $("input[name=txtDInOMSvAmz]").eq(i).val();
                        var dataInicioSplit = dataInicio.split('-');        
                        var diaInicio = dataInicioSplit[2];
                        var mesInicio = dataInicioSplit[1];
                        var anoInicio = dataInicioSplit[0];

                        var dataFim = $("input[name=txtDFimOMSvAmz]").eq(i).val();
                        var dataFimSplit = dataFim.split('-');        
                        var diaFim = dataFimSplit[2];
                        var mesFim = dataFimSplit[1];
                        var anoFim = dataFimSplit[0];

                        if($("select[name=txtOMNomeSvAmz]").eq(i).val() == '0' ){
                            $("select[name=txtOMNomeSvAmz]").eq(i).removeClass("is-valid");
                            $("select[name=txtOMNomeSvAmz]").eq(i).addClass("is-invalid");
                            $("select[name=txtOMNomeSvAmz]").eq(i).focus();
                            break;
                        }    
                        else if(dataInicio == ''){
                            $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDInOMSvAmz]").eq(i).focus();
                            $(".invalid-dataInicio").html("Campo Obrigatório!");
                            break;
                        }       
                        else if((anoInicio == anoAtual) && (mesInicio == mesAtual) && (diaInicio > diaAtual)){
                            $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDInOMSvAmz]").eq(i).eq(i).focus();
                            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
                            break;
                        }       
                        else if((anoInicio == anoAtual) && (mesInicio > mesAtual)){
                            $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDInOMSvAmz]").eq(i).focus();
                            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
                            break;
                        }       
                        else if((anoInicio > anoAtual)){
                            $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDInOMSvAmz]").eq(i).focus();
                            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
                            break;
                        }
                        else if(dataFim == ''){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Campo Obrigatório!");
                            break;
                        }       
                        else if((anoFim == anoAtual) && (mesFim == mesAtual) && (diaFim > diaAtual)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
                            break;
                        }       
                        else if((anoFim == anoAtual) && (mesFim > mesAtual)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
                            break;
                        }       
                        else if((anoFim > anoAtual)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
                            break;
                        }         
                        else if((anoFim == anoInicio) && (mesFim == mesInicio) && (diaFim < diaInicio)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
                            break;
                        }       
                        else if((anoFim == anoInicio) && (mesFim < mesInicio)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
                            break;
                        }       
                        else if((anoFim < anoInicio)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
                            break;
                        }
                        else if($("input[name=txtFunc1OMSvAmz]").eq(i).val() == '' ){
                            $("input[name=txtFunc1OMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtFunc1OMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtFunc1OMSvAmz]").eq(i).focus();
                            break;
                        }
                        else if($("input[name=txtFunc2OMSvAmz]").eq(i).val() == '' ){
                            $("input[name=txtFunc2OMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtFunc2OMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtFunc2OMSvAmz]").eq(i).focus();
                            break;
                        }
                        else if($("input[name=txtFunc3OMSvAmz]").eq(i).val() == '' ){
                            $("input[name=txtFunc3OMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtFunc3OMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtFunc3OMSvAmz]").eq(i).focus();
                            break;
                        }
                        else if(($("input[name=txtFunc3OMSvAmz]").eq($("input[name=txtFunc3OMSvAmz]").length-1).val()) != ''){
                            proximo($(this));
                        }
                    }            
                }
                else{
                    proximo($(this));
                }
            }
            else if($("select[name=txtQaProm]").val() == 'n'){            
                if(dataUltTAF == ''){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Campo Obrigatório!");
                }       
                else if((anoUltTAF == anoAtual) && (mesUltTAF == mesAtual) && (diaUltTAF > diaAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF == anoPracaAl) && (mesUltTAF == mesPracaAl) && (diaUltTAF < diaPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
                }       
                else if((anoUltTAF == anoAtual) && (mesUltTAF > mesAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF == anoPracaAl) && (mesUltTAF < mesPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
                }       
                else if((anoUltTAF > anoAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF < anoPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
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
                else if($("select[name=txtSvAmz]").val() == '0'){
                    $("select[name=txtSvAmz]").removeClass("is-valid");
                    $("select[name=txtSvAmz]").addClass("is-invalid");
                    $("select[name=txtSvAmz]").focus();
                }
                else if($("select[name=txtSvAmz]").val() == 'n'){
                    $("select[name=txtSvAmz]").removeClass("is-invalid");
                    $("select[name=txtSvAmz]").addClass("is-valid");
                    proximo($(this));
                }
                else if($("select[name=txtSvAmz]").val() == 's'){
                    for(var i=0;i<($("select[name=txtOMNomeSvAmz").length);i++){                
                        var dataInicio = $("input[name=txtDInOMSvAmz]").eq(i).val();
                        var dataInicioSplit = dataInicio.split('-');        
                        var diaInicio = dataInicioSplit[2];
                        var mesInicio = dataInicioSplit[1];
                        var anoInicio = dataInicioSplit[0];

                        var dataFim = $("input[name=txtDFimOMSvAmz]").eq(i).val();
                        var dataFimSplit = dataFim.split('-');        
                        var diaFim = dataFimSplit[2];
                        var mesFim = dataFimSplit[1];
                        var anoFim = dataFimSplit[0];

                        if($("select[name=txtOMNomeSvAmz]").eq(i).val() == '0' ){
                            $("select[name=txtOMNomeSvAmz]").eq(i).removeClass("is-valid");
                            $("select[name=txtOMNomeSvAmz]").eq(i).addClass("is-invalid");
                            $("select[name=txtOMNomeSvAmz]").eq(i).focus();
                            break;
                        }    
                        else if(dataInicio == ''){
                            $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDInOMSvAmz]").eq(i).focus();
                            $(".invalid-dataInicio").html("Campo Obrigatório!");
                            break;
                        }       
                        else if((anoInicio == anoAtual) && (mesInicio == mesAtual) && (diaInicio > diaAtual)){
                            $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDInOMSvAmz]").eq(i).eq(i).focus();
                            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
                            break;
                        }       
                        else if((anoInicio == anoAtual) && (mesInicio > mesAtual)){
                            $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDInOMSvAmz]").eq(i).focus();
                            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
                            break;
                        }       
                        else if((anoInicio > anoAtual)){
                            $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDInOMSvAmz]").eq(i).focus();
                            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
                            break;
                        }
                        else if(dataFim == ''){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Campo Obrigatório!");
                            break;
                        }       
                        else if((anoFim == anoAtual) && (mesFim == mesAtual) && (diaFim > diaAtual)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
                            break;
                        }       
                        else if((anoFim == anoAtual) && (mesFim > mesAtual)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
                            break;
                        }       
                        else if((anoFim > anoAtual)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
                            break;
                        }         
                        else if((anoFim == anoInicio) && (mesFim == mesInicio) && (diaFim < diaInicio)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
                            break;
                        }       
                        else if((anoFim == anoInicio) && (mesFim < mesInicio)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
                            break;
                        }       
                        else if((anoFim < anoInicio)){
                            $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
                            break;
                        }
                        else if($("input[name=txtFunc1OMSvAmz]").eq(i).val() == '' ){
                            $("input[name=txtFunc1OMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtFunc1OMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtFunc1OMSvAmz]").eq(i).focus();
                            break;
                        }
                        else if($("input[name=txtFunc2OMSvAmz]").eq(i).val() == '' ){
                            $("input[name=txtFunc2OMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtFunc2OMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtFunc2OMSvAmz]").eq(i).focus();
                            break;
                        }
                        else if($("input[name=txtFunc3OMSvAmz]").eq(i).val() == '' ){
                            $("input[name=txtFunc3OMSvAmz]").eq(i).removeClass("is-valid");
                            $("input[name=txtFunc3OMSvAmz]").eq(i).addClass("is-invalid");
                            $("input[name=txtFunc3OMSvAmz]").eq(i).focus();
                            break;
                        }
                        else if(($("input[name=txtFunc3OMSvAmz]").eq($("input[name=txtFunc3OMSvAmz]").length-1).val()) != ''){
                            proximo($(this));
                        }
                    }            
                }
                else{
                    proximo($(this));
                }
            }
        }
        else{
            if($("select[name=txtCptmAl]").val() == '0'){
                $("select[name=txtCptmAl]").removeClass("is-valid");
                $("select[name=txtCptmAl]").addClass("is-invalid");
                $("select[name=txtCptmAl]").focus();
            }
            else if(dataUltProm == ''){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Campo Obrigatório!");
            }       
            else if((anoUltProm == anoAtual) && (mesUltProm == mesAtual) && (diaUltProm > diaAtual)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
            }       
            else if((anoUltProm == anoPracaAl) && (mesUltProm == mesPracaAl) && (diaUltProm < diaPracaAl)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
            }       
            else if((anoUltProm == anoAtual) && (mesUltProm > mesAtual)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
            }       
            else if((anoUltProm == anoPracaAl) && (mesUltProm < mesPracaAl)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
            }       
            else if((anoUltProm > anoAtual)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
            }       
            else if((anoUltProm < anoPracaAl)){
                $("input[name=txtDataUltProm]").removeClass("is-valid");
                $("input[name=txtDataUltProm]").addClass("is-invalid");
                $("input[name=txtDataUltProm]").focus();
                $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
            }
            else if($("select[name=txtQaProm]").val() == '0'){
                $("select[name=txtQaProm]").removeClass("is-valid");
                $("select[name=txtQaProm]").addClass("is-invalid");
                $("select[name=txtQaProm]").focus();
            }
            else if($("select[name=txtQaProm]").val() == 's'){
                if(dataQaQuando == ''){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Campo Obrigatório!");
                }       
                else if((anoQaQuando == anoAtual) && (mesQaQuando == mesAtual) && (diaQaQuando < diaAtual)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
                }       
                else if((anoQaQuando == anoUltProm) && (mesQaQuando == mesUltProm) && (diaQaQuando < diaUltProm)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
                }       
                else if((anoQaQuando == anoAtual) && (mesQaQuando < mesAtual)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
                }       
                else if((anoQaQuando == anoUltProm) && (mesQaQuando < mesUltProm)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
                }       
                else if((anoQaQuando < anoAtual)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! Última promoção antes da data atual.");
                }       
                else if((anoQaQuando < anoUltProm)){
                    $("input[name=txtQaQuandoProm]").removeClass("is-valid");
                    $("input[name=txtQaQuandoProm]").addClass("is-invalid");
                    $("input[name=txtQaQuandoProm]").focus();
                    $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
                }
                else if(dataUltTAF == ''){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Campo Obrigatório!");
                }       
                else if((anoUltTAF == anoAtual) && (mesUltTAF == mesAtual) && (diaUltTAF > diaAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF == anoPracaAl) && (mesUltTAF == mesPracaAl) && (diaUltTAF < diaPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
                }       
                else if((anoUltTAF == anoAtual) && (mesUltTAF > mesAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF == anoPracaAl) && (mesUltTAF < mesPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
                }       
                else if((anoUltTAF > anoAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF < anoPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
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
                    proximo($(this));
                }
            }
            else if($("select[name=txtQaProm]").val() == 'n'){            
                if(dataUltTAF == ''){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Campo Obrigatório!");
                }       
                else if((anoUltTAF == anoAtual) && (mesUltTAF == mesAtual) && (diaUltTAF > diaAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF == anoPracaAl) && (mesUltTAF == mesPracaAl) && (diaUltTAF < diaPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
                }       
                else if((anoUltTAF == anoAtual) && (mesUltTAF > mesAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF == anoPracaAl) && (mesUltTAF < mesPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
                }       
                else if((anoUltTAF > anoAtual)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
                }       
                else if((anoUltTAF < anoPracaAl)){
                    $("input[name=txtDataUltTAF]").removeClass("is-valid");
                    $("input[name=txtDataUltTAF]").addClass("is-invalid");
                    $("input[name=txtDataUltTAF]").focus();
                    $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
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
                    proximo($(this));
                }
            }
        }
    });
    // --> Fim Etapa 4: DADOS MILITARES
    
    // --> Fim Etapa 5: DADOS FAMILIARES
    $("button[name=btnProximo6]").click(function(){
        var filtro = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/; 
        var cpfConjuge = $("input[name=txtCpfConjuge]").val().replace(".","").replace(".","").replace("-","");
        var foneCelConjuge = $("input[name=txtFoneConjuge]").val().replace("-","").replace("(","").replace(")","").replace(" ","");          
        var emailConjuge = $("input[name=txtEmailConjuge]").val();        
        
        var cpfRef = $("input[name=txtCpfRef]").val().replace(".","").replace(".","").replace("-","");        
        var foneCelRef = $("input[name=txtFoneRef]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        var emailRef = $("input[name=txtEmailRef]").val();        
        
        var cpfRefConclusao = $("input[name=txtCpfRefConclusao]").val().replace(".","").replace(".","").replace("-","");        
        var foneCelRefConclusao = $("input[name=txtFoneRefConclusao]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        var emailRefConclusao = $("input[name=txtEmailRefConclusao]").val();
        
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
            else if(cpfRef == ''){
                $("input[name=txtCpfRef]").removeClass("is-valid");
                $("input[name=txtCpfRef]").addClass("is-invalid");
                $("input[name=txtCpfRef]").focus();
                $(".invalid-cpf").html("Campo Obrigatório!");
            }
            else if(cpfRef == '00000000000' || cpfRef == '11111111111' || cpfRef == '22222222222' || cpfRef == '33333333333' ||                 
                    cpfRef == '44444444444' || cpfRef == '55555555555' || cpfRef == '66666666666' || cpfRef == '77777777777' ||                 
                    cpfRef == '88888888888' || cpfRef == '99999999999'){
                $("input[name=txtCpfRef]").removeClass("is-valid");
                $("input[name=txtCpfRef]").addClass("is-invalid");
                $("input[name=txtCpfRef]").focus();
                $(".invalid-cpf").html("CPF Inválido!");
            }else if(cpfRefOk == 0){
                // Valida 1o digito	
                var add = 0;	
                for (var i=0; i < 9; i ++)		
                    add += parseInt(cpfRef.charAt(i)) * (10 - i);	
                    var rev = 11 - (add % 11);	
                    if (rev == 10 || rev == 11)		
                        rev = 0;	
                    if (rev != parseInt(cpfRef.charAt(9))){
                        $("input[name=txtCpfRef]").removeClass("is-valid");
                        $("input[name=txtCpfRef]").addClass("is-invalid");
                        $("input[name=txtCpfRef]").focus();
                        $(".invalid-cpf").html("CPF Inválido!");
                    }else{
                        $("input[name=txtCpfRef]").removeClass("is-invalid");
                        $("input[name=txtCpfRef]").addClass("is-valid");
                        cpfRefOk = 1;
                    }
                // Valida 2o digito	
                add = 0;	
                for (var i = 0; i < 10; i ++)		
                    add += parseInt(cpfRef.charAt(i)) * (11 - i);	
                rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)	
                    rev = 0;	
                if (rev != parseInt(cpfRef.charAt(10))){
                    $("input[name=txtCpfRef]").removeClass("is-valid");
                    $("input[name=txtCpfRef]").addClass("is-invalid");
                    $("input[name=txtCpfRef]").focus();
                    $(".invalid-cpf").html("CPF Inválido!");
                }else{
                    $("input[name=txtCpfRef]").removeClass("is-invalid");
                    $("input[name=txtCpfRef]").addClass("is-valid");
                    cpfRefOk = 1;
                }    
            }
            else if(emailRef == ''){
                $("input[name=txtEmailRef]").removeClass("is-valid");
                $("input[name=txtEmailRef]").addClass("is-invalid");
                $("input[name=txtEmailRef]").focus();
                $(".invalid-email").html("Campo Obrigatório!");
            }        
            else if(filtro.test(emailRef) == false){
                $("input[name=txtEmailRef]").removeClass("is-valid");
                $("input[name=txtEmailRef]").addClass("is-invalid");
                $("input[name=txtEmailRef]").focus();
                $(".invalid-email").html("Email Inválido!");
            }            
            else if(foneCelRef == ''){
                $("input[name=txtFoneRef]").removeClass("is-valid");
                $("input[name=txtFoneRef]").addClass("is-invalid");
                $("input[name=txtFoneRef]").focus();
                $(".invalid-foneCel").html("Campo Obrigatório!");
            }
            else if(foneCelRef == '00000000000' || foneCelRef == '11111111111' || foneCelRef == '22222222222' || foneCelRef == '33333333333' ||                 
                    foneCelRef == '44444444444' || foneCelRef == '55555555555' || foneCelRef == '66666666666' || foneCelRef == '77777777777' ||                 
                    foneCelRef == '88888888888' || foneCelRef == '99999999999'){
                $("input[name=txtFoneRef]").removeClass("is-valid");
                $("input[name=txtFoneRef]").addClass("is-invalid");
                $("input[name=txtFoneRef]").focus();
                $(".invalid-foneCel").html("Fone Inválido!");
            }            
            //Referência Conclusão
            else if($("select[name=txtAddRefConclusao]").val() == 'n'){
                proximo($(this));
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
                else if(cpfRefConclusao == ''){
                    $("input[name=txtCpfRefConclusao]").removeClass("is-valid");
                    $("input[name=txtCpfRefConclusao]").addClass("is-invalid");
                    $("input[name=txtCpfRefConclusao]").focus();
                    $(".invalid-cpf").html("Campo Obrigatório!");
                }
                else if(cpfRefConclusao == '00000000000' || cpfRefConclusao == '11111111111' || cpfRefConclusao == '22222222222' || cpfRefConclusao == '33333333333' ||                 
                        cpfRefConclusao == '44444444444' || cpfRefConclusao == '55555555555' || cpfRefConclusao == '66666666666' || cpfRefConclusao == '77777777777' ||                 
                        cpfRefConclusao == '88888888888' || cpfRefConclusao == '99999999999'){
                    $("input[name=txtCpfRefConclusao]").removeClass("is-valid");
                    $("input[name=txtCpfRefConclusao]").addClass("is-invalid");
                    $("input[name=txtCpfRefConclusao]").focus();
                    $(".invalid-cpf").html("CPF Inválido!");
                }else if(cpfRefConclusaoOk == 0){
                    // Valida 1o digito	
                    var add = 0;	
                    for (var i=0; i < 9; i ++)		
                        add += parseInt(cpfRefConclusao.charAt(i)) * (10 - i);	
                        var rev = 11 - (add % 11);	
                        if (rev == 10 || rev == 11)		
                            rev = 0;	
                        if (rev != parseInt(cpfRefConclusao.charAt(9))){
                            $("input[name=txtCpfRefConclusao]").removeClass("is-valid");
                            $("input[name=txtCpfRefConclusao]").addClass("is-invalid");
                            $("input[name=txtCpfRefConclusao]").focus();
                            $(".invalid-cpf").html("CPF Inválido!");
                        }else{
                            $("input[name=txtCpfRefConclusao]").removeClass("is-invalid");
                            $("input[name=txtCpfRefConclusao]").addClass("is-valid");
                            cpfRefConclusaoOk = 1;
                        }
                    // Valida 2o digito	
                    add = 0;	
                    for (var i = 0; i < 10; i ++)		
                        add += parseInt(cpfRefConclusao.charAt(i)) * (11 - i);	
                    rev = 11 - (add % 11);	
                    if (rev == 10 || rev == 11)	
                        rev = 0;	
                    if (rev != parseInt(cpfRefConclusao.charAt(10))){
                        $("input[name=txtCpfRefConclusao]").removeClass("is-valid");
                        $("input[name=txtCpfRefConclusao]").addClass("is-invalid");
                        $("input[name=txtCpfRefConclusao]").focus();
                        $(".invalid-cpf").html("CPF Inválido!");
                    }else{
                        $("input[name=txtCpfRefConclusao]").removeClass("is-invalid");
                        $("input[name=txtCpfRefConclusao]").addClass("is-valid");
                        cpfRefConclusaoOk = 1;
                    }    
                }
                else if(emailRefConclusao == ''){
                    $("input[name=txtEmailRefConclusao]").removeClass("is-valid");
                    $("input[name=txtEmailRefConclusao]").addClass("is-invalid");
                    $("input[name=txtEmailRefConclusao]").focus();
                    $(".invalid-email").html("Campo Obrigatório!");
                }        
                else if(filtro.test(emailRefConclusao) == false){
                    $("input[name=txtEmailRefConclusao]").removeClass("is-valid");
                    $("input[name=txtEmailRefConclusao]").addClass("is-invalid");
                    $("input[name=txtEmailRefConclusao]").focus();
                    $(".invalid-email").html("Email Inválido!");
                }
                else if(foneCelRefConclusao == ''){
                    $("input[name=txtFoneRefConclusao]").removeClass("is-valid");
                    $("input[name=txtFoneRefConclusao]").addClass("is-invalid");
                    $("input[name=txtFoneRefConclusao]").focus();
                    $(".invalid-foneCel").html("Campo Obrigatório!");
                }
                else if(foneCelRefConclusao == '00000000000' || foneCelRefConclusao == '11111111111' || foneCelRefConclusao == '22222222222' || foneCelRefConclusao == '33333333333' ||                 
                        foneCelRefConclusao == '44444444444' || foneCelRefConclusao == '55555555555' || foneCelRefConclusao == '66666666666' || foneCelRefConclusao == '77777777777' ||                 
                        foneCelRefConclusao == '88888888888' || foneCelRefConclusao == '99999999999'){
                    $("input[name=txtFoneRefConclusao]").removeClass("is-valid");
                    $("input[name=txtFoneRefConclusao]").addClass("is-invalid");
                    $("input[name=txtFoneRefConclusao]").focus();
                    $(".invalid-foneCel").html("Fone Inválido!");
                }
                else{
                    proximo($(this));
                }
            }
        }
        else if($("select[name=txtPossuiConjuge]").val() == 's'){
            //Cônjuge            
            if($("input[name=txtNomeConjuge]").val() == ''){
                $("input[name=txtNomeConjuge]").removeClass("is-valid");
                $("input[name=txtNomeConjuge]").addClass("is-invalid");
                $("input[name=txtNomeConjuge]").focus();                
            }
            else if($("input[name=txtSobrenomeConjuge]").val() == ''){
                $("input[name=txtSobrenomeConjuge]").removeClass("is-valid");
                $("input[name=txtSobrenomeConjuge]").addClass("is-invalid");
                $("input[name=txtSobrenomeConjuge]").focus();                
            }
            else if(cpfConjuge == ''){
                $("input[name=txtCpfConjuge]").removeClass("is-valid");
                $("input[name=txtCpfConjuge]").addClass("is-invalid");
                $("input[name=txtCpfConjuge]").focus();
                $(".invalid-cpf").html("Campo Obrigatório!");
            }
            else if(cpfConjuge == '00000000000' || cpfConjuge == '11111111111' || cpfConjuge == '22222222222' || cpfConjuge == '33333333333' ||                 
                    cpfConjuge == '44444444444' || cpfConjuge == '55555555555' || cpfConjuge == '66666666666' || cpfConjuge == '77777777777' ||                 
                    cpfConjuge == '88888888888' || cpfConjuge == '99999999999'){
                $("input[name=txtCpfConjuge]").removeClass("is-valid");
                $("input[name=txtCpfConjuge]").addClass("is-invalid");
                $("input[name=txtCpfConjuge]").focus();
                $(".invalid-cpf").html("CPF Inválido!");
            }else if(cpfConjugeOk == 0){
                // Valida 1o digito	
                var add = 0;	
                for (var i=0; i < 9; i ++)		
                    add += parseInt(cpfConjuge.charAt(i)) * (10 - i);	
                    var rev = 11 - (add % 11);	
                    if (rev == 10 || rev == 11)		
                        rev = 0;	
                    if (rev != parseInt(cpfConjuge.charAt(9))){
                        $("input[name=txtCpfConjuge]").removeClass("is-valid");
                        $("input[name=txtCpfConjuge]").addClass("is-invalid");
                        $("input[name=txtCpfConjuge]").focus();
                        $(".invalid-cpf").html("CPF Inválido!");
                    }else{
                        $("input[name=txtCpfConjuge]").removeClass("is-invalid");
                        $("input[name=txtCpfConjuge]").addClass("is-valid");
                        cpfConjugeOk = 1;
                    }
                // Valida 2o digito	
                add = 0;	
                for (var i = 0; i < 10; i ++)		
                    add += parseInt(cpfConjuge.charAt(i)) * (11 - i);	
                rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)	
                    rev = 0;	
                if (rev != parseInt(cpfConjuge.charAt(10))){
                    $("input[name=txtCpfConjuge]").removeClass("is-valid");
                    $("input[name=txtCpfConjuge]").addClass("is-invalid");
                    $("input[name=txtCpfConjuge]").focus();
                    $(".invalid-cpf").html("CPF Inválido!");
                }else{
                    $("input[name=txtCpfConjuge]").removeClass("is-invalid");
                    $("input[name=txtCpfConjuge]").addClass("is-valid");
                    cpfConjugeOk = 1;
                }    
            }
            else if(emailConjuge == ''){
                $("input[name=txtEmailConjuge]").removeClass("is-valid");
                $("input[name=txtEmailConjuge]").addClass("is-invalid");
                $("input[name=txtEmailConjuge]").focus();
                $(".invalid-email").html("Campo Obrigatório!");
            }        
            else if(filtro.test(emailConjuge) == false){
                $("input[name=txtEmailConjuge]").removeClass("is-valid");
                $("input[name=txtEmailConjuge]").addClass("is-invalid");
                $("input[name=txtEmailConjuge]").focus();
                $(".invalid-email").html("Email Inválido!");
            }
            else if(foneCelConjuge == ''){
                $("input[name=txtFoneConjuge]").removeClass("is-valid");
                $("input[name=txtFoneConjuge]").addClass("is-invalid");
                $("input[name=txtFoneConjuge]").focus();
                $(".invalid-foneCel").html("Campo Obrigatório!");
            }
            else if(foneCelConjuge == '00000000000' || foneCelConjuge == '11111111111' || foneCelConjuge == '22222222222' || foneCelConjuge == '33333333333' ||                 
                    foneCelConjuge == '44444444444' || foneCelConjuge == '55555555555' || foneCelConjuge == '66666666666' || foneCelConjuge == '77777777777' ||                 
                    foneCelConjuge == '88888888888' || foneCelConjuge == '99999999999'){
                $("input[name=txtFoneConjuge]").removeClass("is-valid");
                $("input[name=txtFoneConjuge]").addClass("is-invalid");
                $("input[name=txtFoneConjuge]").focus();
                $(".invalid-foneCel").html("Fone Inválido!");
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
            else if(cpfRef == ''){
                $("input[name=txtCpfRef]").removeClass("is-valid");
                $("input[name=txtCpfRef]").addClass("is-invalid");
                $("input[name=txtCpfRef]").focus();
                $(".invalid-cpf").html("Campo Obrigatório!");
            }
            else if(cpfRef == '00000000000' || cpfRef == '11111111111' || cpfRef == '22222222222' || cpfRef == '33333333333' ||                 
                    cpfRef == '44444444444' || cpfRef == '55555555555' || cpfRef == '66666666666' || cpfRef == '77777777777' ||                 
                    cpfRef == '88888888888' || cpfRef == '99999999999'){
                $("input[name=txtCpfRef]").removeClass("is-valid");
                $("input[name=txtCpfRef]").addClass("is-invalid");
                $("input[name=txtCpfRef]").focus();
                $(".invalid-cpf").html("CPF Inválido!");
            }else if(cpfRefOk == 0){
                // Valida 1o digito	
                var add = 0;	
                for (var i=0; i < 9; i ++)		
                    add += parseInt(cpfRef.charAt(i)) * (10 - i);	
                    var rev = 11 - (add % 11);	
                    if (rev == 10 || rev == 11)		
                        rev = 0;	
                    if (rev != parseInt(cpfRef.charAt(9))){
                        $("input[name=txtCpfRef]").removeClass("is-valid");
                        $("input[name=txtCpfRef]").addClass("is-invalid");
                        $("input[name=txtCpfRef]").focus();
                        $(".invalid-cpf").html("CPF Inválido!");
                    }else{
                        $("input[name=txtCpfRef]").removeClass("is-invalid");
                        $("input[name=txtCpfRef]").addClass("is-valid");
                        cpfRefOk = 1;
                    }
                // Valida 2o digito	
                add = 0;	
                for (var i = 0; i < 10; i ++)		
                    add += parseInt(cpfRef.charAt(i)) * (11 - i);	
                rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)	
                    rev = 0;	
                if (rev != parseInt(cpfRef.charAt(10))){
                    $("input[name=txtCpfRef]").removeClass("is-valid");
                    $("input[name=txtCpfRef]").addClass("is-invalid");
                    $("input[name=txtCpfRef]").focus();
                    $(".invalid-cpf").html("CPF Inválido!");
                }else{
                    $("input[name=txtCpfRef]").removeClass("is-invalid");
                    $("input[name=txtCpfRef]").addClass("is-valid");
                    cpfRefOk = 1;
                }    
            }
            else if(emailRef == ''){
                $("input[name=txtEmailRef]").removeClass("is-valid");
                $("input[name=txtEmailRef]").addClass("is-invalid");
                $("input[name=txtEmailRef]").focus();
                $(".invalid-email").html("Campo Obrigatório!");
            }        
            else if(filtro.test(emailRef) == false){
                $("input[name=txtEmailRef]").removeClass("is-valid");
                $("input[name=txtEmailRef]").addClass("is-invalid");
                $("input[name=txtEmailRef]").focus();
                $(".invalid-email").html("Email Inválido!");
            }
            else if(foneCelRef == ''){
                $("input[name=txtFoneRef]").removeClass("is-valid");
                $("input[name=txtFoneRef]").addClass("is-invalid");
                $("input[name=txtFoneRef]").focus();
                $(".invalid-foneCel").html("Campo Obrigatório!");
            }
            else if(foneCelRef == '00000000000' || foneCelRef == '11111111111' || foneCelRef == '22222222222' || foneCelRef == '33333333333' ||                 
                    foneCelRef == '44444444444' || foneCelRef == '55555555555' || foneCelRef == '66666666666' || foneCelRef == '77777777777' ||                 
                    foneCelRef == '88888888888' || foneCelRef == '99999999999'){
                $("input[name=txtFoneRef]").removeClass("is-valid");
                $("input[name=txtFoneRef]").addClass("is-invalid");
                $("input[name=txtFoneRef]").focus();
                $(".invalid-foneCel").html("Fone Inválido!");
            }            
            //Referência Conclusão
            else if($("select[name=txtAddRefConclusao]").val() == 'n'){
                proximo($(this));
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
                else if(cpfRefConclusao == ''){
                    $("input[name=txtCpfRefConclusao]").removeClass("is-valid");
                    $("input[name=txtCpfRefConclusao]").addClass("is-invalid");
                    $("input[name=txtCpfRefConclusao]").focus();
                    $(".invalid-cpf").html("Campo Obrigatório!");
                }
                else if(cpfRefConclusao == '00000000000' || cpfRefConclusao == '11111111111' || cpfRefConclusao == '22222222222' || cpfRefConclusao == '33333333333' ||                 
                        cpfRefConclusao == '44444444444' || cpfRefConclusao == '55555555555' || cpfRefConclusao == '66666666666' || cpfRefConclusao == '77777777777' ||                 
                        cpfRefConclusao == '88888888888' || cpfRefConclusao == '99999999999'){
                    $("input[name=txtCpfRefConclusao]").removeClass("is-valid");
                    $("input[name=txtCpfRefConclusao]").addClass("is-invalid");
                    $("input[name=txtCpfRefConclusao]").focus();
                    $(".invalid-cpf").html("CPF Inválido!");
                }else if(cpfRefConclusaoOk == 0){
                    // Valida 1o digito	
                    var add = 0;	
                    for (var i=0; i < 9; i ++)		
                        add += parseInt(cpfRefConclusao.charAt(i)) * (10 - i);	
                        var rev = 11 - (add % 11);	
                        if (rev == 10 || rev == 11)		
                            rev = 0;	
                        if (rev != parseInt(cpfRefConclusao.charAt(9))){
                            $("input[name=txtCpfRefConclusao]").removeClass("is-valid");
                            $("input[name=txtCpfRefConclusao]").addClass("is-invalid");
                            $("input[name=txtCpfRefConclusao]").focus();
                            $(".invalid-cpf").html("CPF Inválido!");
                        }else{
                            $("input[name=txtCpfRefConclusao]").removeClass("is-invalid");
                            $("input[name=txtCpfRefConclusao]").addClass("is-valid");
                            cpfRefConclusaoOk = 1;
                        }
                    // Valida 2o digito	
                    add = 0;	
                    for (var i = 0; i < 10; i ++)		
                        add += parseInt(cpfRefConclusao.charAt(i)) * (11 - i);	
                    rev = 11 - (add % 11);	
                    if (rev == 10 || rev == 11)	
                        rev = 0;	
                    if (rev != parseInt(cpfRefConclusao.charAt(10))){
                        $("input[name=txtCpfRefConclusao]").removeClass("is-valid");
                        $("input[name=txtCpfRefConclusao]").addClass("is-invalid");
                        $("input[name=txtCpfRefConclusao]").focus();
                        $(".invalid-cpf").html("CPF Inválido!");
                    }else{
                        $("input[name=txtCpfRefConclusao]").removeClass("is-invalid");
                        $("input[name=txtCpfRefConclusao]").addClass("is-valid");
                        cpfRefConclusaoOk = 1;
                    }    
                }
                else if(emailRefConclusao == ''){
                    $("input[name=txtEmailRefConclusao]").removeClass("is-valid");
                    $("input[name=txtEmailRefConclusao]").addClass("is-invalid");
                    $("input[name=txtEmailRefConclusao]").focus();
                    $(".invalid-email").html("Campo Obrigatório!");
                }        
                else if(filtro.test(emailRefConclusao) == false){
                    $("input[name=txtEmailRefConclusao]").removeClass("is-valid");
                    $("input[name=txtEmailRefConclusao]").addClass("is-invalid");
                    $("input[name=txtEmailRefConclusao]").focus();
                    $(".invalid-email").html("Email Inválido!");
                }
                else if(foneCelRefConclusao == ''){
                    $("input[name=txtFoneRefConclusao]").removeClass("is-valid");
                    $("input[name=txtFoneRefConclusao]").addClass("is-invalid");
                    $("input[name=txtFoneRefConclusao]").focus();
                    $(".invalid-foneCel").html("Campo Obrigatório!");
                }
                else if(foneCelRefConclusao == '00000000000' || foneCelRefConclusao == '11111111111' || foneCelRefConclusao == '22222222222' || foneCelRefConclusao == '33333333333' ||                 
                        foneCelRefConclusao == '44444444444' || foneCelRefConclusao == '55555555555' || foneCelRefConclusao == '66666666666' || foneCelRefConclusao == '77777777777' ||                 
                        foneCelRefConclusao == '88888888888' || foneCelRefConclusao == '99999999999'){
                    $("input[name=txtFoneRefConclusao]").removeClass("is-valid");
                    $("input[name=txtFoneRefConclusao]").addClass("is-invalid");
                    $("input[name=txtFoneRefConclusao]").focus();
                    $(".invalid-foneCel").html("Fone Inválido!");
                }
                else{
                    proximo($(this));
                }
            }
        }
    });
    // --> Fim Etapa 5: DADOS FAMILIARES
    
    // --> Início Etapa 6: DADOS DE ENDEREÇO
    $("button[name=btnProximo7]").click(function(){        
        var cepEndResid = $("input[name=txtCepEndResid]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        var cepEndCurso = $("input[name=txtCepEndCurso]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        //Residência
        if(cepEndResid == ''){
            $("input[name=txtCepEndResid]").removeClass("is-valid");
            $("input[name=txtCepEndResid]").addClass("is-invalid");
            $("input[name=txtCepEndResid]").focus();
            $(".invalid-cep").html("Campo Obrigatório!");
        }
        else if(cepEndResid == '00000000' || cepEndResid == '11111111' || cepEndResid == '22222222' || cepEndResid == '33333333' ||                 
                cepEndResid == '44444444' || cepEndResid == '55555555' || cepEndResid == '66666666' || cepEndResid == '77777777' ||                 
                cepEndResid == '88888888' || cepEndResid == '99999999'){
            $("input[name=txtCepEndResid]").removeClass("is-valid");
            $("input[name=txtCepEndResid]").addClass("is-invalid");
            $("input[name=txtCepEndResid]").focus();
            $(".invalid-cep").html("CEP Inválido!");       
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
        else if($("input[name=txtBairroEndResid]").val() == ''){
            $("input[name=txtBairroEndResid]").removeClass("is-valid");
            $("input[name=txtBairroEndResid]").addClass("is-invalid");
            $("input[name=txtBairroEndResid]").focus();
        }
        //Enderço durante curso
        else if($("select[name=txtEndCurso]").val() == '0'){
            $("select[name=txtEndCurso]").removeClass("is-valid");
            $("select[name=txtEndCurso]").addClass("is-invalid");
            $("select[name=txtEndCurso]").focus();
        }
        else if(cepEndCurso == ''){
            $("input[name=txtCepEndCurso]").removeClass("is-valid");
            $("input[name=txtCepEndCurso]").addClass("is-invalid");
            $("input[name=txtCepEndCurso]").focus();
            $(".invalid-cep").html("Campo Obrigatório!");
        }
        else if(cepEndCurso == '00000000' || cepEndCurso == '11111111' || cepEndCurso == '22222222' || cepEndCurso == '33333333' ||                 
                cepEndCurso == '44444444' || cepEndCurso == '55555555' || cepEndCurso == '66666666' || cepEndCurso == '77777777' ||                 
                cepEndCurso == '88888888' || cepEndCurso == '99999999'){
            $("input[name=txtCepEndCurso]").removeClass("is-valid");
            $("input[name=txtCepEndCurso]").addClass("is-invalid");
            $("input[name=txtCepEndCurso]").focus();
            $(".invalid-cep").html("CEP Inválido!");       
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
        else if($("input[name=txtBairroEndCurso]").val() == ''){
            $("input[name=txtBairroEndCurso]").removeClass("is-valid");
            $("input[name=txtBairroEndCurso]").addClass("is-invalid");
            $("input[name=txtBairroEndCurso]").focus();
        }
        else{
            proximo($(this));
        }
    });
    // --> Fim Etapa 6: DADOS DE ENDEREÇO
    
    // --> Início Etapa 7: CURSOS/ESTÁGIO
    $("button[name=btnProximo8]").click(function(){
        if($("select[name=txtPossuiEAS]").val() == '0'){
            $("select[name=txtPossuiEAS]").removeClass("is-valid");
            $("select[name=txtPossuiEAS]").addClass("is-invalid");
            $("select[name=txtPossuiEAS]").focus();
        }
        else if($("select[name=txtHabIdiomas]").val() == '0'){
            $("select[name=txtHabIdiomas]").removeClass("is-valid");
            $("select[name=txtHabIdiomas]").addClass("is-invalid");
            $("select[name=txtHabIdiomas]").focus();
        }
        else if($("select[name=txtTipoForca]").val() == '1'){
            if($("select[name=txtForca]").val() == '2'){
                if($("select[name=txtPossuiCAperf]").val() == '0'){
                    $("select[name=txtPossuiCAperf]").removeClass("is-valid");
                    $("select[name=txtPossuiCAperf]").addClass("is-invalid");
                    $("select[name=txtPossuiCAperf]").focus();
                }
                else if($("select[name=txtPossuiCAltEstudos]").val() == '0'){
                    $("select[name=txtPossuiCAltEstudos]").removeClass("is-valid");
                    $("select[name=txtPossuiCAltEstudos]").addClass("is-invalid");
                    $("select[name=txtPossuiCAltEstudos]").focus();
                }
                /*else if($("select[name=txtPossuiCExtsEsp]").val() == '0'){
                    $("select[name=txtPossuiCExtsEsp]").removeClass("is-valid");
                    $("select[name=txtPossuiCExtsEsp]").addClass("is-invalid");
                    $("select[name=txtPossuiCExtsEsp]").focus();
                }        
                else if($("select[name=txtPossuiEstMil]").val() == '0'){
                    $("select[name=txtPossuiEstMil]").removeClass("is-valid");
                    $("select[name=txtPossuiEstMil]").addClass("is-invalid");
                    $("select[name=txtPossuiEstMil]").focus();
                }*/
                else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')){
                    proximo($(this));
                }
                else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')){
                    for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                        if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                            $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                            $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                            $("select[name=txtIdioma]").eq(i).focus();
                            break;
                        }
                        else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                            $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                            $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                            $("input[name=txtIplIdioma]").eq(i).focus();
                            break;
                        }
                        else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                            proximo($(this));
                        }
                    }
                }
                else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')){
                    if($("select[name=txtCAperf]").val() == '0' ){
                        $("select[name=txtCAperf]").removeClass("is-valid");
                        $("select[name=txtCAperf]").addClass("is-invalid");
                        $("select[name=txtCAperf]").focus();
                    }            
                    else if($("input[name=txtAnoCAperf]").val() == ''){
                        $("input[name=txtAnoCAperf]").removeClass("is-valid");
                        $("input[name=txtAnoCAperf]").addClass("is-invalid");
                        $("input[name=txtAnoCAperf]").focus();
                        $(".invalid-ano").html("Campo Obrigatório!");
                    }
                    else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                        $("input[name=txtAnoCAperf]").removeClass("is-valid");
                        $("input[name=txtAnoCAperf]").addClass("is-invalid");
                        $("input[name=txtAnoCAperf]").focus();
                        $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    }
                    else{
                        proximo($(this));
                    }
                }
                else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')){
                    if($("select[name=txtCAltEstudos]").val() == '0' ){
                        $("select[name=txtCAltEstudos]").removeClass("is-valid");
                        $("select[name=txtCAltEstudos]").addClass("is-invalid");
                        $("select[name=txtCAltEstudos]").focus();
                    }
                    else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                        $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                        $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                        $("input[name=txtAnoCAltEstudos]").focus();
                        $(".invalid-ano").html("Campo Obrigatório!");
                    }
                    else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                        $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                        $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                        $("input[name=txtAnoCAltEstudos]").focus();
                        $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    }
                    else{
                        proximo($(this));
                    }
                }
                else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')){
                    var prontoCAperf = 0;
                    var prontoCAltEstudos = 0;
                    if($("select[name=txtCAperf]").val() == '0' ){
                        $("select[name=txtCAperf]").removeClass("is-valid");
                        $("select[name=txtCAperf]").addClass("is-invalid");
                        $("select[name=txtCAperf]").focus();
                    }
                    else if($("input[name=txtAnoCAperf]").val() == ''){
                        $("input[name=txtAnoCAperf]").removeClass("is-valid");
                        $("input[name=txtAnoCAperf]").addClass("is-invalid");
                        $("input[name=txtAnoCAperf]").focus();
                        $(".invalid-ano").html("Campo Obrigatório!");
                    }
                    else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                        $("input[name=txtAnoCAperf]").removeClass("is-valid");
                        $("input[name=txtAnoCAperf]").addClass("is-invalid");
                        $("input[name=txtAnoCAperf]").focus();
                        $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    }
                    else{
                        prontoCAperf = 1;
                    }

                    if($("select[name=txtCAltEstudos]").val() == '0' ){
                        $("select[name=txtCAltEstudos]").removeClass("is-valid");
                        $("select[name=txtCAltEstudos]").addClass("is-invalid");
                        $("select[name=txtCAltEstudos]").focus();
                    }
                    else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                        $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                        $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                        $("input[name=txtAnoCAltEstudos]").focus();
                        $(".invalid-ano").html("Campo Obrigatório!");
                    }
                    else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                        $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                        $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                        $("input[name=txtAnoCAltEstudos]").focus();
                        $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    }
                    else{
                        prontoCAltEstudos = 1;
                    }

                    if((prontoCAperf == 1) && (prontoCAltEstudos == 1)){
                        proximo($(this));
                    }
                }
                else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')){
                    var prontoIdiomas = 0;
                    var prontoCAltEstudos = 0;

                    for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                        if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                            $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                            $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                            $("select[name=txtIdioma]").eq(i).focus();
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
                    else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                        $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                        $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                        $("input[name=txtAnoCAltEstudos]").focus();
                        $(".invalid-ano").html("Campo Obrigatório!");
                    }
                    else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                        $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                        $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                        $("input[name=txtAnoCAltEstudos]").focus();
                        $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    }
                    else{
                        prontoCAltEstudos = 1;
                    }

                    if((prontoIdiomas == 1) && (prontoCAltEstudos == 1)){
                        proximo($(this));
                    }
                }
                else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')){
                    var prontoIdiomas = 0;
                    var prontoCAperf = 0;

                    for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                        if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                            $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                            $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                            $("select[name=txtIdioma]").eq(i).focus();
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
                    else if($("input[name=txtAnoCAperf]").val() == ''){
                        $("input[name=txtAnoCAperf]").removeClass("is-valid");
                        $("input[name=txtAnoCAperf]").addClass("is-invalid");
                        $("input[name=txtAnoCAperf]").focus();
                        $(".invalid-ano").html("Campo Obrigatório!");
                    }
                    else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                        $("input[name=txtAnoCAperf]").removeClass("is-valid");
                        $("input[name=txtAnoCAperf]").addClass("is-invalid");
                        $("input[name=txtAnoCAperf]").focus();
                        $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    }
                    else{
                        prontoCAperf = 1;
                    }

                    if((prontoIdiomas == 1) && (prontoCAperf == 1)){
                        proximo($(this));
                    }
                }
                else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')){
                    var prontoIdiomas = 0;
                    var prontoCAperf = 0;
                    var prontoCAltEstudos = 0;

                    for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                        if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                            $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                            $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                            $("select[name=txtIdioma]").eq(i).focus();
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
                    else if($("input[name=txtAnoCAperf]").val() == ''){
                        $("input[name=txtAnoCAperf]").removeClass("is-valid");
                        $("input[name=txtAnoCAperf]").addClass("is-invalid");
                        $("input[name=txtAnoCAperf]").focus();
                        $(".invalid-ano").html("Campo Obrigatório!");
                    }
                    else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                        $("input[name=txtAnoCAperf]").removeClass("is-valid");
                        $("input[name=txtAnoCAperf]").addClass("is-invalid");
                        $("input[name=txtAnoCAperf]").focus();
                        $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    }
                    else{
                        prontoCAperf = 1;
                    }

                    if($("select[name=txtCAltEstudos]").val() == '0' ){
                        $("select[name=txtCAltEstudos]").removeClass("is-valid");
                        $("select[name=txtCAltEstudos]").addClass("is-invalid");
                        $("select[name=txtCAltEstudos]").focus();
                    }
                    else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                        $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                        $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                        $("input[name=txtAnoCAltEstudos]").focus();
                        $(".invalid-ano").html("Campo Obrigatório!");
                    }
                    else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                        $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                        $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                        $("input[name=txtAnoCAltEstudos]").focus();
                        $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    }
                    else{
                        prontoCAltEstudos = 1;
                    }

                    if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCAltEstudos == 1)){
                        proximo($(this));
                    }
                }        
            }else{
                if($("select[name=txtHabIdiomas]").val() == 'n'){
                    proximo($(this));
                }
                else if($("select[name=txtHabIdiomas]").val() == 's'){
                    for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                        if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                            $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                            $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                            $("select[name=txtIdioma]").eq(i).focus();
                            break;
                        }
                        else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                            $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                            $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                            $("input[name=txtIplIdioma]").eq(i).focus();
                            break;
                        }
                        else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                            proximo($(this));
                        }
                    }
                }
            }
        }
        else if($("select[name=txtTipoForca]").val() == '2'){
            if($("select[name=txtHabIdiomas]").val() == 'n'){
                proximo($(this));
            }
            else if($("select[name=txtHabIdiomas]").val() == 's'){
                for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                    if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                        $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                        $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                        $("select[name=txtIdioma]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                        $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                        $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                        $("input[name=txtIplIdioma]").eq(i).focus();
                        break;
                    }
                    else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                        proximo($(this));
                    }
                }
            }
        }
        /*//1
        /*else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            proximo($(this));
        }
        //2
        /*else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtIplIdioma]").eq(i).val() == '' ){
                    $("input[name=txtIplIdioma]").eq(i).removeClass("is-valid");
                    $("input[name=txtIplIdioma]").eq(i).addClass("is-invalid");
                    $("input[name=txtIplIdioma]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtIplIdioma]").eq($("input[name=txtIplIdioma]").length-1).val()) != ''){
                    proximo($(this));
                }
            }
        }
        //3
        /*else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }            
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                proximo($(this));
            }
        }        
        //4
        /*else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                proximo($(this));
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    proximo($(this));
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    proximo($(this));
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            if((prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                proximo($(this));
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
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            if((prontoCAltEstudos == 1) && (prontoEstMil == 1)){
                proximo($(this));
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
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            if((prontoCAltEstudos == 1) && (prontoCExtsEsp == 1)){
                proximo($(this));
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
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            if((prontoCAltEstudos == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                proximo($(this));
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            if((prontoCAperf == 1) && (prontoEstMil == 1)){
                proximo($(this));
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            if((prontoCAperf == 1) && (prontoCExtsEsp == 1)){
                proximo($(this));
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoCAperf == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                proximo($(this));
            }
        }
        //14
        /*else if(($("select[name=txtHabIdiomas]").val() == 'n') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            if($("select[name=txtCAperf]").val() == '0' ){
                $("select[name=txtCAperf]").removeClass("is-valid");
                $("select[name=txtCAperf]").addClass("is-invalid");
                $("select[name=txtCAperf]").focus();
            }
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            if((prontoCAperf == 1) && (prontoCAltEstudos == 1)){
                proximo($(this));
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoEstMil == 1)){
                proximo($(this));
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            if((prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1)){
                proximo($(this));
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                proximo($(this));
            }
        }
        //18
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoEstMil == 1)){
                proximo($(this));
            }
        }
        //19
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCExtsEsp = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            if((prontoIdiomas == 1) && (prontoCExtsEsp == 1)){
                proximo($(this));
            }
        }
        
        //20
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCExtsEsp = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                proximo($(this));
            }
        }
        
        //21
        /*else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAltEstudos = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            if((prontoIdiomas == 1) && (prontoCAltEstudos == 1)){
                proximo($(this));
            }
        }
        //22
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCAltEstudos = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAltEstudos == 1) && (prontoEstMil == 1)){
                proximo($(this));
            }
        }
        //23
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAltEstudos = 0;
            var prontoCExtsEsp = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }     
            
            if((prontoIdiomas == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1)){
                proximo($(this));
            }
        }
        //24
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 'n') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCAltEstudos = 0;
            var prontoCExtsEsp = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                proximo($(this));
            }
        }
        //25
        /*else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAperf = 1;
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1)){
                proximo($(this));
            }
        }
        //26
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoEstMil == 1)){
                proximo($(this));
            }
        }
        //27
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoCExtsEsp = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCExtsEsp == 1)){
                proximo($(this));
            }
        }
        //28
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 'n')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoCExtsEsp = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                proximo($(this));
            }
        }
        //29
        /*else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCAltEstudos == 1)){
                proximo($(this));
            }
        }
        //30
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 'n') && ($("select[name=txtPossuiEstMil]").val() == 's')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            var prontoEstMil = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoEstMil == 1)){
                proximo($(this));
            }
        }
        //31
        else if(($("select[name=txtHabIdiomas]").val() == 's') && ($("select[name=txtPossuiCAperf]").val() == 's') && ($("select[name=txtPossuiCAltEstudos]").val() == 's')
                && ($("select[name=txtPossuiCExtsEsp]").val() == 's') && ($("select[name=txtPossuiEstMil]").val() == 'n')){
            var prontoIdiomas = 0;
            var prontoCAperf = 0;
            var prontoCAltEstudos = 0;
            var prontoCExtsEsp = 0;
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq($("input[name=txtAnoCExtsEsp]").length-1).val()) != ''){
                    prontoCExtsEsp = 1;
                }
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1)){
                proximo($(this));
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
            
            for(var i=0;i<($("select[name=txtIdioma]").length);i++){
                if($("select[name=txtIdioma]").eq(i).val() == '0' ){
                    $("select[name=txtIdioma]").eq(i).removeClass("is-valid");
                    $("select[name=txtIdioma]").eq(i).addClass("is-invalid");
                    $("select[name=txtIdioma]").eq(i).focus();
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
            else if($("input[name=txtAnoCAperf]").val() == ''){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAperf]").val() != '') && ($("input[name=txtAnoCAperf]").val().length < 4)){
                $("input[name=txtAnoCAperf]").removeClass("is-valid");
                $("input[name=txtAnoCAperf]").addClass("is-invalid");
                $("input[name=txtAnoCAperf]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAperf = 1;
            }
            
            if($("select[name=txtCAltEstudos]").val() == '0' ){
                $("select[name=txtCAltEstudos]").removeClass("is-valid");
                $("select[name=txtCAltEstudos]").addClass("is-invalid");
                $("select[name=txtCAltEstudos]").focus();
            }
            else if($("input[name=txtAnoCAltEstudos]").val() == ''){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("Campo Obrigatório!");
            }
            else if(($("input[name=txtAnoCAltEstudos]").val() != '') && ($("input[name=txtAnoCAltEstudos]").val().length < 4)){
                $("input[name=txtAnoCAltEstudos]").removeClass("is-valid");
                $("input[name=txtAnoCAltEstudos]").addClass("is-invalid");
                $("input[name=txtAnoCAltEstudos]").focus();
                $(".invalid-ano").html("O ano é formado 4 caracteres!");   
            }
            else{
                prontoCAltEstudos = 1;
            }
            
            for(var i=0;i<($("select[name=txtTipoCExtsEsp]").length);i++){
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
                else if($("input[name=txtAnoCExtsEsp]").eq(i).val() == ''){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoCExtsEsp]").eq(i).val() != '') && ($("input[name=txtAnoCExtsEsp]").eq(i).val().length < 4)){
                    $("input[name=txtAnoCExtsEsp]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoCExtsEsp]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
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
                    $(".invalid-ano").html("Campo Obrigatório!");
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq(i).val() != '') && ($("input[name=txtAnoEstagio]").eq(i).val().length < 4)){
                    $("input[name=txtAnoEstagio]").eq(i).removeClass("is-valid");
                    $("input[name=txtAnoEstagio]").eq(i).addClass("is-invalid");
                    $("input[name=txtAnoEstagio]").eq(i).focus();
                    $(".invalid-ano").html("O ano é formado 4 caracteres!");   
                    break;
                }
                else if(($("input[name=txtAnoEstagio]").eq($("input[name=txtAnoEstagio]").length-1).val()) != ''){
                    prontoEstMil = 1;
                }        
            }
            
            if((prontoIdiomas == 1) && (prontoCAperf == 1) && (prontoCAltEstudos == 1) && (prontoCExtsEsp == 1) && (prontoEstMil == 1)){
                proximo($(this));
            }
        }*/
    });
    // --> Fim Etapa 7: CURSOS/ESTÁGIO
    
    // --> Início Etapa 8: PREPARAÇÃO
    //$("button[name=btnProximo9]").click(function(){
    $("button[name=btnSalvar]").click(function(){
        if($("select[name=txtPrepFisica]").val() == '0'){
            $("select[name=txtPrepFisica]").removeClass("is-valid");
            $("select[name=txtPrepFisica]").addClass("is-invalid");
            $("select[name=txtPrepFisica]").focus();
            return false;
        }
        else if($("select[name=txtApoioFam]").val() == '0'){
            $("select[name=txtApoioFam]").removeClass("is-valid");
            $("select[name=txtApoioFam]").addClass("is-invalid");
            $("select[name=txtApoioFam]").focus();
            return false;
        }
        else if($("select[name=txtApoioOM]").val() == '0'){
            $("select[name=txtApoioOM]").removeClass("is-valid");
            $("select[name=txtApoioOM]").addClass("is-invalid");
            $("select[name=txtApoioOM]").focus();
            return false;
        }
        else if($("select[name=txtCPrepCOS]").val() == '0'){
            $("select[name=txtCPrepCOS]").removeClass("is-valid");
            $("select[name=txtCPrepCOS]").addClass("is-invalid");
            $("select[name=txtCPrepCOS]").focus();
            return false;
        }
        else if($("select[name=txtCPrepCOS]").val() == '0'){
            $("select[name=txtCPrepCOS]").removeClass("is-valid");
            $("select[name=txtCPrepCOS]").addClass("is-invalid");
            $("select[name=txtCPrepCOS]").focus();
            return false;
        }
        else if($("select[name=txtProbRend]").val() == '0'){
            $("select[name=txtProbRend]").removeClass("is-valid");
            $("select[name=txtProbRend]").addClass("is-invalid");
            $("select[name=txtProbRend]").focus();
            return false;
        }
        else if($("select[name=txtTempoPrep]").val() == '0'){
            $("select[name=txtTempoPrep]").removeClass("is-valid");
            $("select[name=txtTempoPrep]").addClass("is-invalid");
            $("select[name=txtTempoPrep]").focus();
            return false;
        }
        else if($("select[name=txtDedicacaoDoutOPS]").val() == '0'){
            $("select[name=txtDedicacaoDoutOPS]").removeClass("is-valid");
            $("select[name=txtDedicacaoDoutOPS]").addClass("is-invalid");
            $("select[name=txtDedicacaoDoutOPS]").focus();
            return false;
        }
        else if($("input[name=txtFatorMotivacao]").val() == ''){
            $("input[name=txtFatorMotivacao]").removeClass("is-valid");
            $("input[name=txtFatorMotivacao]").addClass("is-invalid");
            $("input[name=txtFatorMotivacao]").focus();
            return false;
        }
        else if($("select[name=txtCsltSite]").val() == '0'){
            $("select[name=txtCsltSite]").removeClass("is-valid");
            $("select[name=txtCsltSite]").addClass("is-invalid");
            $("select[name=txtCsltSite]").focus();
            return false;
        }
        else if($("select[name=txtCsltAmbVirtAl]").val() == '0'){
            $("select[name=txtCsltAmbVirtAl]").removeClass("is-valid");
            $("select[name=txtCsltAmbVirtAl]").addClass("is-invalid");
            $("select[name=txtCsltAmbVirtAl]").focus();
            return false;
        }else{
            return true;
        }
    });
    // --> Fim Etapa 8: PREPARAÇÃO

    // --> Início Etapa 9: VIVÊNCIA NA AMAZÔNIA
    /*$("button[name=btnSalvar]").click(function(){
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        
        if($("select[name=txtSvAmz]").val() == '0'){
            $("select[name=txtSvAmz]").removeClass("is-valid");
            $("select[name=txtSvAmz]").addClass("is-invalid");
            $("select[name=txtSvAmz]").focus();
            return false;
        }
        else if($("select[name=txtSvAmz]").val() == 'n'){
            $("select[name=txtSvAmz]").removeClass("is-invalid");
            $("select[name=txtSvAmz]").addClass("is-valid");
            return true;
        }   
        else if($("select[name=txtSvAmz]").val() == 's'){
            $("select[name=txtSvAmz]").removeClass("is-invalid");
            $("select[name=txtSvAmz]").addClass("is-valid");
            
            if(($("select[name=txtOMNomeSvAmz").length) == 0){
                return false;
            }
            
            for(var i=0;i<($("select[name=txtOMNomeSvAmz").length);i++){                
                var dataInicio = $("input[name=txtDInOMSvAmz]").eq(i).val();
                var dataInicioSplit = dataInicio.split('-');        
                var diaInicio = dataInicioSplit[2];
                var mesInicio = dataInicioSplit[1];
                var anoInicio = dataInicioSplit[0];
                
                var dataFim = $("input[name=txtDFimOMSvAmz]").eq(i).val();
                var dataFimSplit = dataFim.split('-');        
                var diaFim = dataFimSplit[2];
                var mesFim = dataFimSplit[1];
                var anoFim = dataFimSplit[0];
                
                if($("select[name=txtOMNomeSvAmz]").eq(i).val() == '0' ){
                    $("select[name=txtOMNomeSvAmz]").eq(i).removeClass("is-valid");
                    $("select[name=txtOMNomeSvAmz]").eq(i).addClass("is-invalid");
                    $("select[name=txtOMNomeSvAmz]").eq(i).focus();
                    return false;
                    break;
                }    
                else if(dataInicio == ''){
                    $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDInOMSvAmz]").eq(i).focus();
                    $(".invalid-dataInicio").html("Campo Obrigatório!");
                    return false;
                    break;
                }       
                else if((anoInicio == anoAtual) && (mesInicio == mesAtual) && (diaInicio > diaAtual)){
                    $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDInOMSvAmz]").eq(i).eq(i).focus();
                    $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
                    return false;
                    break;
                }       
                else if((anoInicio == anoAtual) && (mesInicio > mesAtual)){
                    $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDInOMSvAmz]").eq(i).focus();
                    $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
                    return false;
                    break;
                }       
                else if((anoInicio > anoAtual)){
                    $("input[name=txtDInOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDInOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDInOMSvAmz]").eq(i).focus();
                    $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
                    return false;
                    break;
                }
                else if(dataFim == ''){
                    $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                    $(".invalid-dataFim").html("Campo Obrigatório!");
                    return false;
                    break;
                }       
                else if((anoFim == anoAtual) && (mesFim == mesAtual) && (diaFim > diaAtual)){
                    $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                    $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
                    return false;
                    break;
                }       
                else if((anoFim == anoAtual) && (mesFim > mesAtual)){
                    $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                    $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
                    return false;
                    break;
                }       
                else if((anoFim > anoAtual)){
                    $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                    $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
                    return false;
                    break;
                }         
                else if((anoFim == anoInicio) && (mesFim == mesInicio) && (diaFim < diaInicio)){
                    $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                    $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
                    return false;
                    break;
                }       
                else if((anoFim == anoInicio) && (mesFim < mesInicio)){
                    $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                    $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
                    return false;
                    break;
                }       
                else if((anoFim < anoInicio)){
                    $("input[name=txtDFimOMSvAmz]").eq(i).removeClass("is-valid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).addClass("is-invalid");
                    $("input[name=txtDFimOMSvAmz]").eq(i).focus();
                    $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
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
                else if(($("input[name=txtFunc3OMSvAmz]").eq($("input[name=txtFunc3OMSvAmz]").length-1).val()) != ''){
                    return true;
                }
            }            
        }   
    });*/
    // --> Fim Etapa 9: VIVÊNCIA NA AMAZÔNIA
});