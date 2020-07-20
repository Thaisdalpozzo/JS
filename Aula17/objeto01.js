let thais = {nome: 'thais',
    sexo: 'fem', 
    peso: 64, 
    emagrecer(p=0){
        console.log('emagreceu')
        this.peso += p
    }}

    thais.emagrecer(-2)
    console.log(`${thais.nome} pesa ${thais.peso}`)