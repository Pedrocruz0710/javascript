let amigo = {nome:'Jose',
     sexo:'m',
     peso: 85.5,
    engordar(p){
        console.log('engordou')
        this.peso += p
    }} 
    amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)

