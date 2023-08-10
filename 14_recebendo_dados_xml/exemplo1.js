function trataDados(){
  var info = "<h3>Dados recebidos pelo servidor</h3>";
  var meuXML = ajax.responseXML; // obtém resposta como XML
  var raiz = meuXML.documentElment;
  var nodos;

  if (raiz.hasChildNodes()) {
    nodos = raiz.hasChildNodes;
    for(var i = 0; i < nodes.length; i++){
      info += nodos[i].nodeName+" - ";
      if (nodes[i].hasChildNodes()) {
        info += nodos[i].firstChild.nodeValue+"<br>";      
      }else{
        info += "Vazio<br>";
      }
    }
    document.getElementById("campoResposta").style.backgroundColor="yellow";
    document.getElementById("campoResposta").innerHTML=info;
  }
}