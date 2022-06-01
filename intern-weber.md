function saudacao(obj) {
    var data = new Date();
    var hora = data.getHours();
    var txt = "";

    // Cria uma tag <img> com a imagem que quer exibir e guarda em variavelFoto 
    var variavelFoto = '<img src="https://image.shutterstock.com/image-vector/smiley-face-cartoon-260nw-67126804.jpg" height="42" width="42" style="vertical-align: middle;">';

    // como todos as versões de txt terão variavelFoto adicionado ao final retirei o trecho + variavelFoto; das verificações;
    if (hora < 12) {
        txt = "BOM DIA !";

    } else if (hora < 18) {
        txt = "BOA TARDE !";
    } else {
        txt = "BOA NOITE !";
    }

    // aqui abaixo ele insere o valor da variavel txt na div "saudacao" dentro de um span e adicionei o variavelFoto que retirei das verificações acima.
    document.getElementById("saudacao").innerHTML = '<span style="vertical-align: middle;">' + txt + '</span>' + variavelFoto;

}
