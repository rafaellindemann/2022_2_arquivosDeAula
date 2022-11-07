// Armazena a url onde roda a aplicação

url = "http://192.168.45.150"

  // Função que lê o valor do input e envia para a placa (estrutura: ip/rota?variavel=valor)

  function enviaAnalogica() {
    var valor = document.getElementById("saidaAnalogica").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url+"/saidaAnalogica?input1="+valor, true);    
    xhttp.send();
  }

  // Função acionada pelo botão que envia para a placa um comando (estrutura: ip/rota)

  function clickOn() { 
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url+"/saidaDigital/on", true);
    xhttp.send();
    document.getElementById("saidaDigital").innerHTML = "ON"; 
  }

  // Igual a anterior, apenas altera a rota

  function clickOff() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url+"/saidaDigital/off", true);       
    xhttp.send();
    document.getElementById("saidaDigital").innerHTML = "OFF";
  }

  // A cada 5 segundos solicita um valor da placa (estrutura: ip/rota)
  // A placa responde com um valor (this.responseText), simulando valor analógico, que é lido pela função interna

  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {	
        document.getElementById("entradaAnalogica").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", url+"/entradaAnalogica", true);    
    xhttp.send();
  }, 5000 ) ;

  // Igual a anterior, só que o valor retornado é "on" ou "off" (simulando valor digital)

  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("entradaDigital").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", url+"/entradaDigital", true);
    xhttp.send();
  }, 5000 ) ;
