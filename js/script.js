var palavras_restantes = 18
var listaRespostas = ["CPU", "ULA", "REGISTRADORES", "RAM", "ROM", "EPROM", "MEMORIADEMASSA", "FLASH", "DNA", "CS", "QUADCORE", "DUALCORE", "ADDRESSBUS", "THREADS", "CACHE", "DATABUS", "I5", "I7"]
var listaValidadas = []

function validar_palavra(numero_palavra) {
    var resposta_certa = ""
    for (var indicePalavra = 0; indicePalavra < listaRespostas.length; indicePalavra++) {
        if (numero_palavra == (indicePalavra + 1)) {
            resposta_certa = (listaRespostas[indicePalavra].toLowerCase())
        }
    }

    var jaValidou = false
    for (var indiceValidadas = 0; indiceValidadas < listaValidadas.length; indiceValidadas++) {
        if (resposta_cer ta == listaValidadas[indiceValidadas]) {
            jaValidou = true
        }
    }

    if (jaValidou) {
        alert("Você já validou essa palavra! Tente outra.")
    } else {
        console.log("Resposta Certa" + resposta_certa)
        
        var acertou = true;
        for (var indiceLetra = 0; indiceLetra < resposta_certa.length; indiceLetra++) {
            var classe_input_atual = resposta_certa[indiceLetra] + numero_palavra
            var input_atual = document.getElementsByClassName(`${classe_input_atual}`)
            console.log("Input Atual" + classe_input_atual)
            for (indiceClasses = 0; indiceClasses < input_atual.length; indiceClasses++) {
                var valor_input_atual = ((input_atual[indiceClasses].value).toLowerCase())
                if (valor_input_atual != resposta_certa[indiceLetra]) {
                    acertou = false
                }
            }
        }
        
        if (acertou) {
            palavras_restantes --
    
            listaValidadas.push(resposta_certa)
            if (palavras_restantes == 0) {
                alert("Você ganhou! Agora pode montar um PC do zero.")
                reiniciarCruzadinha();
            } else {
                alert(`Parabéns! Faltam ${palavras_restantes} palavras.`);
            }
        } else {
            alert("Ops! Tente novamente.")
        }
    }
}

function reiniciarCruzadinha() {
    alert("Reiniciando cruzadinha...")
    location.reload();
}