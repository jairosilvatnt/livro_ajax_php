var ajax;
var dadosUsuario;

// -----------Criar o objeto que faz a requisição-------------

function requisicaoHTTP(tipo,url,assinc){
  if (window.XMLHttpRequest){
    ajax = new XMLHttpRequest();
  }else if(window.ActiveXObject){
    ajax = new ActiveXObject("Msxml2.XMLHTTP");
    if(!ajax){
      ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }          
  }
  else {
    alert("Seu navegador não possui suporte a essa aplicação!");
  }

  // --------- Inicializa o objeto criando e envia os dados (se existirem)---------

  function iniciaRequisicao(tipo,url,bool) {
    ajax.onreadystatechange = trataResposta;
    ajax.open(tipo,url,bool);
    ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");
    // ajax.overrideMimeType("text/XML"); /* usando somente no Mozilla */
    ajax.send(dadosUsuario);
  }

  // -------Iniciando requisição com envio de dados --------

  function enviaDados(url) {
    criaQueryString();
    requisicaoHTTP("POST",url,true);
  }

  // ----------Cria a string a ser enviada, formato campo1=valor1*campo2=valor2....------
  function criaQueryString() {
    dadosUsuario = "";
    var frm = document.forms[0];
    var numElementos = frm.elements.length;
    for(var i = 0; i < numElementos; i++){
      if( i < numElementos - 1){
        dadosUsuario += frm.elements[i].name+"="+
        encodeURIComponent(frm.elements[i].value)+"&";
      }else{
        dadosUsuario += frm.elements[i].name+"="+
        encodeURIComponent(frm.elements[i].value);
      }
    }
  }

  //----------- Trata a resposta do servidor -----------
  
  function trataResposta() {
    if(ajax.readyState == 4){
      if(ajax.status == 200){
        trataDados();
      }else{
        alert ("Problema na comunicação com o objeto XMLHttpRequest.");
      }
    }
  }
}