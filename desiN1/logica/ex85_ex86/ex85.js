let primeiro = document.getElementById('primeiro')
let segundo = document.getElementById('segundo')
let numeros = []

for(i=0; i<50; i++){
    let n = gerarNumero(-100, 100)
    numeros.push(n)
}
primeiro.innerHTML = `<h2>Vetor original inteiro com join</h2>${numeros.join(' | ')}` 

primeiro.innerHTML += `<h2>Vetor original aos pedaços</h2>`
for(i=0; i<numeros.length; i++){
    primeiro.innerHTML += `<BR>${numeros[i]}`
}

primeiro.innerHTML += `<h2>Vetor novo sem negativos</h2>`
for(i=0; i<numeros.length; i++){
    if(numeros[i] < 0){
        numeros[i] = 0
    }
    segundo.innerHTML += `${numeros[i]}<BR>`
}


//=====================================================
function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}