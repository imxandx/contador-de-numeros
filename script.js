function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value.length == 0 ||  fim.value.length == 0 || passo.value.length == 0) { // length: indica qunatas letras há, então, lê-se: se o início estiver vazio, ou se o fim estiver vazio, ou se o passo estiver vazio. (o alert significa que vai aacontecer caso estiver faltando algum dado)
        alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Impossível contar!'
    }else {
        res.innerHTML = "Contando: <br>" // isto é, vai aparecer se estiver tudo certo após preencher os inputs
        var i = Number(ini.value) // apesar de ja estar num type number, você precisa convertar a variável também
        var f = Number(fim.value) // lê-se: pegar um valor que estiver dentro de fim, e transformálo num número
        var p = Number(passo.value)
    
        if(p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f){ // lê-se: se o valor do início for menor do que o valor do final
            // Contagem crescente

            for(var c = i; c <= f; c += p) { // lê-se: o contador vai começar no início, e enquanto o contador for menor ou igual ao fim, o contador irá receber ele mesmo mais o passo
                res.innerHTML += `  ${c} \u{1F449}`
        }

        }else {
            // Cotagem Regressiva
            
            for(c = i; c >= f; c -= p){ 
                res.innerHTML += `  ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` // os emojis só funcionam entre crases
    }
}