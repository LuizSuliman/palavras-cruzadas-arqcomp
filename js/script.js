var palavras_restantes = 18;
var listaRespostas = ["CPU", "ULA", "REGISTRADORES", "RAM", "ROM", "EPROM", "MEMORIADEMASSA", "FLASH", "DNA", "CS", "QUADCORE", "DUALCORE", "ADDRESSBUS", "THREADS", "CACHE", "DATABUS", "I5", "I7"];

function validar_palavra(numero_palavra) {
    var resposta_certa = "";
    for (var indicePalavra = 0; indicePalavra < listaRespostas.length; indicePalavra++) {
        if (numero_palavra == (indicePalavra + 1)) {
            resposta_certa = (listaRespostas[indicePalavra].toLowerCase())
        }
    }
    
    var acertou = true;
    for (var indiceLetra = 0; indiceLetra < resposta_certa.length; indiceLetra++) {
        var classe_input_atual = resposta_certa[indiceLetra] + numero_palavra
        var input_atual = document.getElementsByClassName(`${classe_input_atual}`)
        for (indiceClasses = 0; indiceClasses < input_atual.length; indiceClasses++) {
            var valor_input_atual = ((input_atual[indiceClasses].value).toLowerCase())
            if (valor_input_atual != resposta_certa[indiceLetra]) {
                acertou = false
            }
        }
    }
    
    if (acertou) {
        palavras_restantes --

        listaRespostas[numero_palavra - 1] = "";

        alert(`Parabéns! Faltam ${palavras_restantes} palavras.`)
    } else {
        alert("Ops! Tente novamente.")
    }
}