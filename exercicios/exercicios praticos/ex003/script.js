function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById ('passo')
    var valorinicio = Number(inicio.value)
    var valorfim = Number(fim.value)
    var valorpasso = Number(passo.value)
    var contagem = document.getElementById('contagem')
    var c = valorinicio
    var contando = document.getElementById ('contando')
    
    contando.innerHTML ='Contando'
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert ('Verifique os dados')
        contando.innerHTML = 'Contagem invalida'
    } else   if(valorpasso == 0 ){
        contando.innerHTML = 'Contagem invalida'
        window.alert ('Verifique os dados')
    } else {do {
        contagem.innerHTML += ` &#x1F449 ${c} `
        c += valorpasso
    }   while ( c <= valorfim)
    contagem.innerHTML += '&#x1F6A9'}
      
    
    
}

