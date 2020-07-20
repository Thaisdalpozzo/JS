function Contar () {    
    var inicio = document.getElementById('txti').value
    var fim = document.getElementById('txtf').value
    var passo = document.getElementById('txtp').value
    var res = document.getElementById('res')
   

if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
    //mensagem
    res.innerHTML = 'Impossivel Contar! '
    window.alert('[ERRO] Faltam dados!')
} else {
    res.innerHTML = 'Contando: <br> '
    let i = Number(inicio)
    let f = Number(fim)
    let p = Number(passo)
    if(p <= 0) {
        alert('Passo Invalido! Considerando Passo 1')
        p = 1
    }
    if (i < f) {
        //contagem crescente
    for(let c = i; c <= f; c += p) {
    res.innerHTML += ` ${c} \u{1F449} `
    }
} else {
    //contagem regressiva
     for(let c = i; c >= f; c -= p) {
     res.innerHTML += ` ${c} \u{1F449} `
     }
   }
  res.innerHTML += `\u{1F3C1}`
  }  
}