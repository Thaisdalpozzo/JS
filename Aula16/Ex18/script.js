let numArr =  []
let tab = document.getElementById('seltab')
let res = document.getElementById('res')  

function Adicionar(num) {

    if (num < 1 || num > 100){
    window.alert('Número não está entre 1 e 100!')
    } else {  

        res.innerHTML ='' 
        if(numArr.length == 0){
            tab.innerHTML = ''   
        }
        
            let pos = numArr.indexOf(num)
            if (pos == -1) {
                numArr.push(num)
                let item = document.createElement('option')
                item.text = `Número ${num} adicionado!`
                item.value = `tab${num}`
                tab.appendChild(item)
            } else {
                window.alert('Número já foi adicionado!')
                
            
                
            }    
          
    }
}

function Finalizar() {

    numArr.sort()

    let qntNum = document.createElement('p')
    qntNum.innerHTML = `Ao todo temos ${numArr.length} numeros cadastrados.`
    res.appendChild(qntNum)

    let maior = document.createElement('p')
    maior.innerHTML = `O maior valor é  ${numArr[numArr.length - 1]}`
    res.appendChild(maior)

    let menor = document.createElement('p')
    menor.innerHTML = `O menor valor é  ${numArr[0]}`
    res.appendChild(menor)

    let somaHtml = document.createElement('p')
    let somaTotal = 0
    for(let num in numArr){
        somaTotal = somaTotal + Number.parseInt(numArr[num])
    }
    somaHtml.innerHTML = `A soma total é ${somaTotal}`
    res.appendChild(somaHtml)


    let media = document.createElement('p')
    media.innerHTML = `A media é ${somaTotal/numArr.length}`
    res.appendChild(media)


}

   