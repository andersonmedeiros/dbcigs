/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller.militar;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import model.bean.Cnh;
import model.bean.Conjuge;
import model.bean.Dependente;
import model.bean.Endereco;
import model.bean.Fone;
import model.bean.Militar;
import model.bean.TituloEleitor;
import model.bean.Uniforme;
import model.dao.CnhDAO;
import model.dao.ConjugeDAO;
import model.dao.DependenteDAO;
import model.dao.EnderecoDAO;
import model.dao.FoneDAO;
import model.dao.MilitarDAO;
import model.dao.TituloEleitorDAO;
import model.dao.UniformeDAO;

/**
 *
 * @author anderson
 */
public class Atualizacao extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Atualizacao</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Atualizacao at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        HttpSession sessao = request.getSession();
        if(sessao.getAttribute("militarAutenticado") != null){
            try{
                //--> Uniforme
                UniformeDAO unMilitarDAO = new UniformeDAO();
                int idUniformeMil;
                int tamCoturno = Integer.parseInt(request.getParameter("txtNumCoturno"));
                String tamGandola = String.valueOf(request.getParameter("txtTamGand")).toUpperCase();
                String tamCalca = String.valueOf(request.getParameter("txtTamCalca")).toUpperCase();
                String tamCamCmf = String.valueOf(request.getParameter("txtTamCamCmf")).toUpperCase();

                System.out.println("UNIFORME: ");
                System.out.println("tam coturno: " + tamCoturno);
                System.out.println("tam gandola: " + tamGandola);
                System.out.println("tam calca: " + tamCalca);
                System.out.println("tam cam camuflada: " + tamCamCmf);
                System.out.println("-----------");
                System.out.println("");

                Uniforme uniExistente = unMilitarDAO.getUniformeExistente(tamCoturno, tamGandola, tamCalca, tamCamCmf);
                //Verfica se o uniforme já existe no banco de dados
                if(uniExistente != null){
                    idUniformeMil = uniExistente.getId();
                }else{
                    idUniformeMil = unMilitarDAO.proxID();

                    Uniforme unMilitar = new Uniforme();
                    unMilitar.setId(idUniformeMil);
                    unMilitar.setTamCoturno(tamCoturno);
                    unMilitar.setTamGandola(tamGandola);
                    unMilitar.setTamCalca(tamCalca);
                    unMilitar.setTamCamisaCamuflada(tamCamCmf);
                    
                    unMilitarDAO.insert(unMilitar);
                }
                //--> Fim Uniforme
                
                //--> Endereço
                EnderecoDAO endDAO = new EnderecoDAO();
                int idEndResid;
                String cepEndResid = String.valueOf(request.getParameter("txtCepEndResid").replace("-", ""));
                String descricaoEndResid = String.valueOf(request.getParameter("txtNomeEndResid")).toUpperCase();
                String numEndResid = String.valueOf(request.getParameter("txtNumEndResid")).toUpperCase();
                int idCidadeEndResid = Integer.parseInt(request.getParameter("txtCidadeEndResid"));
                String bairroEndResid = String.valueOf(request.getParameter("txtBairroEndResid")).toUpperCase();
                String complementoEndResid = String.valueOf(request.getParameter("txtCompEndResid")).toUpperCase();
                String pontoRefEndResid = String.valueOf(request.getParameter("txtPtRefEndResid")).toUpperCase();

                System.out.println("ENDERECO DE RESIDENCIA: ");
                System.out.println("cep: " + cepEndResid);
                System.out.println("descricao: " + descricaoEndResid);
                System.out.println("num: " + numEndResid);
                System.out.println("cidade: " + idCidadeEndResid);
                System.out.println("bairro: " + bairroEndResid);

                Endereco endExistente = endDAO.getEnderecoExistente(cepEndResid, descricaoEndResid, complementoEndResid, pontoRefEndResid, bairroEndResid, idCidadeEndResid);
                //Verifica se o endereço já existe no banco de dados
                if(endExistente != null){
                    idEndResid = endExistente.getId();
                }else{
                    Endereco endMil = new Endereco();

                    idEndResid = endDAO.proxID();
                    endMil.setId(idEndResid);
                    endMil.setCep(cepEndResid);
                    endMil.setDescricao(descricaoEndResid);
                    endMil.setBairro(bairroEndResid);

                    if(!request.getParameter("txtCompEndResid").equals("")){
                        endMil.setComplemento(complementoEndResid);
                        System.out.println("complemento: " + complementoEndResid);
                    }
                    if(!request.getParameter("txtPtRefEndResid").equals("")){
                        endMil.setPontoreferencia(pontoRefEndResid);
                        System.out.println("ponto ref: " + pontoRefEndResid);
                    }
                    endMil.setIdCidade(idCidadeEndResid);

                    endDAO.insert(endMil);                       
                }

                System.out.println("------------------");
                System.out.println("");
                //--> Fim Endereço
                
                //-->Militar
                
                //-->Identidade Militar
                String idtMilitar = String.valueOf(request.getParameter("txtIdtMil").replace("-", ""));
                
                MilitarDAO milDAO = new MilitarDAO();
                Militar mil = new Militar();
                
                mil.setIdtMilitar(idtMilitar);
                mil.setIdtCivil(request.getParameter("txtIdtCivil").replace("-", ""));
                
                String dtNascMilSeparada[] = String.valueOf(request.getParameter("txtDataNasc")).split("-");
                Date dataNascMil = new Date((Integer.parseInt(dtNascMilSeparada[0])-1900), (Integer.parseInt(dtNascMilSeparada[1]) - 1), Integer.parseInt(dtNascMilSeparada[2]));
                mil.setDataNascimento(dataNascMil);
                
                mil.setCpf(request.getParameter("txtCpf").replace(".", "").replace("-", ""));
                mil.setPreccp(request.getParameter("txtPreccp"));
                
                if(!request.getParameter("txtCP").equals("")){
                    mil.setCp(request.getParameter("txtCP"));
                }
                
                mil.setNome(request.getParameter("txtNome").toUpperCase());
                mil.setSobrenome(request.getParameter("txtSobrenome").toUpperCase());
                mil.setNomeGuerra(request.getParameter("txtNomeGuerra").toUpperCase());
                mil.setSexo(request.getParameter("txtSexo").toUpperCase());
                mil.setTs(request.getParameter("txtTS").toUpperCase());
                mil.setFtrh(request.getParameter("txtFatorRH").toUpperCase());
                
                if(!request.getParameter("txtPai").equals("")){
                    mil.setPai(request.getParameter("txtPai").toUpperCase());
                }
                
                if(!request.getParameter("txtMae").equals("")){
                    mil.setMae(request.getParameter("txtMae").toUpperCase());
                }
                
                mil.setIdEstadoCivil(Integer.parseInt(request.getParameter("txtEstCivil")));
                mil.setIdEscolaridade(Integer.parseInt(request.getParameter("txtEscolaridade")));
                mil.setIdReligiao(Integer.parseInt(request.getParameter("txtReligiao")));
                mil.setIdCidadeNaturalidade(Integer.parseInt(request.getParameter("txtNatCid")));
                
                String dtPracaSeparada[] = String.valueOf(request.getParameter("txtDataPraca")).split("-");
                Date dataPraca = new Date((Integer.parseInt(dtPracaSeparada[0])-1900), (Integer.parseInt(dtPracaSeparada[1]) - 1), Integer.parseInt(dtPracaSeparada[2]));
                mil.setDataPraca(dataPraca);
                
                mil.setIdUniforme(idUniformeMil);
                
                mil.setIdPostoGraduacao(Integer.parseInt(request.getParameter("txtPGrad")));
                mil.setIdQas(Integer.parseInt(request.getParameter("txtQas")));
                mil.setCia(Integer.parseInt(request.getParameter("txtCia")));
                mil.setIdComportamento(Integer.parseInt(request.getParameter("txtCptm")));
                mil.setIdSetor(Integer.parseInt(request.getParameter("txtSetor")));
                
                mil.setEndNum(numEndResid);
                mil.setIdEndereco(idEndResid);
                
                mil.setEmail(request.getParameter("txtEmail").toUpperCase());
                mil.setFamiliarContato(request.getParameter("txtFamiliar").toUpperCase());
                mil.setFoneFamiliarContato(request.getParameter("txtFoneFamiliar").replace("(", "").replace(")", "").replace(" ", "").replace("-", ""));
                
                                
                System.out.println("MILITAR: ");
                System.out.println("idt militar: " + mil.getIdtMilitar());
                System.out.println("idt civil: " + mil.getIdtCivil());
                System.out.println("datanasc: " + mil.getDataNascimento());
                System.out.println("cpf: " + mil.getCpf());
                System.out.println("preccp: " + mil.getPreccp());
                System.out.println("cp: " + mil.getCp());
                System.out.println("nome: " + mil.getNome());
                System.out.println("sobrenome: " + mil.getSobrenome());
                System.out.println("nome guerra: " + mil.getNomeGuerra());
                System.out.println("sexo: " + mil.getSexo());
                System.out.println("ts: " + mil.getTs());
                System.out.println("ftrh: " + mil.getFtrh());
                System.out.println("pai: " + mil.getPai());
                System.out.println("mãe: " + mil.getMae());
                System.out.println("estado civil: " + mil.getIdEstadoCivil());
                System.out.println("escolaridae: " + mil.getIdEscolaridade());
                System.out.println("religião: " + mil.getIdReligiao());
                System.out.println("nat cidade: " + mil.getIdCidadeNaturalidade());
                System.out.println("data praça: " + mil.getDataPraca());
                System.out.println("posto/graduação: " + mil.getIdPostoGraduacao());
                System.out.println("qas: " + mil.getIdQas());
                System.out.println("cia: " + mil.getCia());
                System.out.println("comportamento: " + mil.getIdComportamento());
                System.out.println("setor: " + mil.getIdSetor());
                System.out.println("endereço número: " + mil.getEndNum());
                System.out.println("endereço: " + mil.getIdEndereco());
                System.out.println("email: " + mil.getEmail());
                System.out.println("familiar: " + mil.getFamiliarContato());
                System.out.println("fone familiar: " + mil.getFoneFamiliarContato());
                System.out.println("-----------");
                System.out.println("");                
                
                milDAO.update(mil);
                //--> Fim Militar
                
                //--> Titulo de Eleitor
                TituloEleitorDAO titEleitorDAO = new TituloEleitorDAO();
                TituloEleitor titEleitor = new TituloEleitor();
                titEleitor.setRegistro(String.valueOf(request.getParameter("txtTitEleitorNum").replace(" ", "")));
                titEleitor.setZona(String.valueOf(request.getParameter("txtTitEleitorZona")));
                titEleitor.setSecao(String.valueOf(request.getParameter("txtTitEleitorSecao")));
                titEleitor.setIdCidade(Integer.parseInt(request.getParameter("txtTitEleitorCid")));
                titEleitor.setIdtMilitar(idtMilitar);

                System.out.println("TITULO ELEITOR: ");
                System.out.println("número: " + titEleitor.getRegistro());
                System.out.println("zona: " + titEleitor.getZona());
                System.out.println("seção: " + titEleitor.getSecao());
                System.out.println("cidade: " + titEleitor.getIdCidade());
                System.out.println("-----------");
                System.out.println("");

                titEleitorDAO.update(titEleitor);
                // --> Fim Titulo de Eleitor
                
                // --> CNH
                CnhDAO cnhDAO = new CnhDAO();
                if(!request.getParameter("txtPossuiCNH").equals("n") && !request.getParameter("txtPossuiCNH").equals("0")){
                    Cnh cnhMil = new Cnh();
                    cnhMil.setNumero(String.valueOf(request.getParameter("txtCNHNum")));
                    cnhMil.setCategoria(String.valueOf(request.getParameter("txtCNHCatg")));
                    String cnhDataValSeparada[] = String.valueOf(request.getParameter("txtCNHDataVal")).split("-");
                    Date cnhDataVal = new Date((Integer.parseInt(cnhDataValSeparada[0])-1900), (Integer.parseInt(cnhDataValSeparada[1]) - 1), Integer.parseInt(cnhDataValSeparada[2]));
                    cnhMil.setDataValidade(cnhDataVal);
                    cnhMil.setIdtMilitar(idtMilitar);
                    
                    System.out.println("CNH: ");
                    System.out.println("cnh número: " + cnhMil.getNumero());
                    System.out.println("cnh categoria: " + cnhMil.getCategoria());
                    System.out.println("cnh data validade: " + cnhMil.getDataValidade());
                    System.out.println("-----------------------");
                    System.out.println("");
                    
                    if(cnhDAO.cnhExiste(idtMilitar) == false){
                        cnhDAO.insert(cnhMil);
                    }
                    else{
                        cnhDAO.update(cnhMil);
                    }
                    
                }
                else if(request.getParameter("txtPossuiCNH").equals("n") && cnhDAO.cnhExiste(idtMilitar) == true){
                    cnhDAO.delete(idtMilitar);
                }
                // --> Fim CNH
                
                //--> Conjuge
                ConjugeDAO conjugeDAO = new ConjugeDAO();
                if(!request.getParameter("txtPossuiConjuge").equals("n") && !request.getParameter("txtPossuiConjuge").equals("0")){
                    Conjuge conjuge = new Conjuge();

                    conjuge.setNome(String.valueOf(request.getParameter("txtNomeConjuge")).toUpperCase());
                    conjuge.setSobrenome(String.valueOf(request.getParameter("txtSobrenomeConjuge")).toUpperCase());

                    String DataNascConjugeSeparada[] = String.valueOf(request.getParameter("txtDataNascConjuge")).split("-");
                    Date DataNascConjuge = new Date((Integer.parseInt(DataNascConjugeSeparada[0])-1900), (Integer.parseInt(DataNascConjugeSeparada[1]) - 1), Integer.parseInt(DataNascConjugeSeparada[2]));
                    conjuge.setDataNascimento(DataNascConjuge);
                    conjuge.setEmail(String.valueOf(request.getParameter("txtEmailConjuge")).toUpperCase());
                    conjuge.setFone(String.valueOf(request.getParameter("txtFoneConjuge").replace("(", "").replace(")", "").replace(" ", "").replace("-", "")));
                    conjuge.setIdtMilitar(idtMilitar);

                    System.out.println("CONJUGE: ");
                    System.out.println("conjuge nome: " + conjuge.getNome());
                    System.out.println("conjuge data de nascimento: " + conjuge.getDataNascimento());
                    System.out.println("conjuge email: " + conjuge.getEmail());
                    System.out.println("conjuge fone: " + conjuge.getFone());                        

                    if(!request.getParameter("txtSexoConjuge").equals("M") && !request.getParameter("txtSexoConjuge").equals("0")){
                        conjuge.setGravidez(Integer.parseInt(request.getParameter("txtGravidez")));
                        System.out.println("conjuge gravidez: " + conjuge.getGravidez());
                    }

                    System.out.println("conjuge idt militar: " + conjuge.getIdtMilitar()); 
                    System.out.println("---------------------");                
                    
                    if(conjugeDAO.conjugeExiste(idtMilitar) == false){
                        conjugeDAO.insert(conjuge);
                    }
                    else{
                        conjugeDAO.update(conjuge);
                    }                  
                }
                else if(request.getParameter("txtPossuiConjuge").equals("n") && conjugeDAO.conjugeExiste(idtMilitar) == true){
                    conjugeDAO.delete(idtMilitar);
                }
                //--> Fim Conjuge
                
                //--> Dependente
                DependenteDAO depDAO = new DependenteDAO();
                depDAO.delete(idtMilitar);
                if(!request.getParameter("txtPossuiDependente").equals("n") && !request.getParameter("txtPossuiDependente").equals("0")){
                    String[] nomeDep = request.getParameterValues("txtNomeDep");
                    String[] sobrenomeDep = request.getParameterValues("txtSobrenomeDep");
                    String[] dataNascDep = request.getParameterValues("txtDataNascDep");
                    String[] parentescoDep = request.getParameterValues("txtGrauParentescoDep");
                    
                    if(nomeDep != null){
                        System.out.println("DEPENDENTES: ");
                        for(int i=0;i<nomeDep.length;i++){
                            Dependente dep = new Dependente();
                            dep.setNome(nomeDep[i].toUpperCase());
                            dep.setSobrenome(sobrenomeDep[i].toUpperCase());
                            
                            String DataNascDepSeparada[] = String.valueOf(dataNascDep[i]).split("-");                            
                            dep.setDataNascimento(new Date((Integer.parseInt(DataNascDepSeparada[0])-1900), (Integer.parseInt(DataNascDepSeparada[1]) - 1), Integer.parseInt(DataNascDepSeparada[2])));
                            
                            dep.setIdGrauParentesco(Integer.parseInt(parentescoDep[i]));
                            dep.setIdtMilitar(idtMilitar);
                            
                            System.out.println("dep nome: " + dep.getNome());
                            System.out.println("dep sobrenome: " + dep.getSobrenome());
                            System.out.println("dep data nascimento: " + dep.getDataNascimento());
                            System.out.println("dep grau parentesco: " + dep.getIdGrauParentesco());
                            System.out.println("dep idt militar: " + dep.getIdtMilitar());
                            
                            depDAO.insert(dep);
                        }
                        System.out.println("-------------");
                        System.out.println("");
                    }
                }
                //--> Fim Dependente
                
                //--> Fone Militar
                FoneDAO foneDAO = new FoneDAO();
                foneDAO.delete(idtMilitar);
                
                String foneMil01 = String.valueOf(request.getParameter("txtFone01").replace("(", "").replace(")", "").replace(" ", "").replace("-", ""));
                Fone fone01 = new Fone();
                fone01.setFone(foneMil01);
                fone01.setIdtMilitar(idtMilitar);
                
                System.out.println("FONE 02: ");
                System.out.println("numero: " + fone01.getFone());
                System.out.println("-----------");
                System.out.println("");
                
                foneDAO.insertFoneMilitar(fone01);
                
                if(!request.getParameter("txtFone02").equals("")){
                    String foneMil02 = String.valueOf(request.getParameter("txtFone02").replace("(", "").replace(")", "").replace(" ", "").replace("-", ""));
                    
                    Fone fone02 = new Fone();
                    fone02.setFone(foneMil02);
                    fone02.setIdtMilitar(idtMilitar);
                    
                    System.out.println("FONE 02: ");
                    System.out.println("numero: " + fone02.getFone());
                    System.out.println("-----------");
                    System.out.println("");
                    
                    foneDAO.insertFoneMilitar(fone02);
                }
                //--> Fim Fone Militar
                
                
            }catch(Exception ex){
                //e=2: erro durante realização do cadastro
                response.sendRedirect("/dbcigs/restrito/militar/atualizacao.jsp?e=2");
                throw new ServletException(ex);
            }
            //e=1: cadastro sucesso
            response.sendRedirect("/dbcigs/restrito/militar/atualizacao.jsp?e=1");
        }
        else{
            //e=4: Sessão Encerrada
            response.sendRedirect("/dbcigs/index.jsp?e=4");
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
