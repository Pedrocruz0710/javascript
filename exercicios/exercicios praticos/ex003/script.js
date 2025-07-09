function contar(){
    var inicio = document.getElementById('inicio') // registra o dado vindo do input#inicio
    var fim = document.getElementById('fim') // registra o dado vindo do input#fim
    var passo = document.getElementById ('passo')//Registra o dado vindo do input#passo
    var valorinicio = Number(inicio.value)// Estes tres asseguir transformam o dado em uma variavel tipo number
    var valorfim = Number(fim.value)
    var valorpasso = Number(passo.value)
    var contagem = document.getElementById('contagem')// variavel atribuida a div#contagem
    var c = valorinicio // varivel contadora, que é atribuida com o valor do inicio
    
    var contando = document.getElementById ('contando') // variavel atribuida ao paragrafo com id contando
    
    contando.innerHTML ='Contando'//muda a frase de preparando contagem, para, contando
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ // quando iniciado sem dado qualquer campo, ele manda um alerta
        window.alert ('Verifique os dados')
        contando.innerHTML = 'Contagem invalida'
    } else   if(valorpasso == 0 ){ // se o valor de passo for == 0 ele manda um alerta
        contando.innerHTML = 'Contagem invalida'
        window.alert ('Verifique os dados')
    } else {do {
        contagem.innerHTML += ` &#x1F449 ${c} ` // mostra a contagem
        c += valorpasso // a varaivel contadora recebe ela + o valor de passo
    }   while ( c <= valorfim) // para quando chega no valor de fim
    contagem.innerHTML += '&#x1F6A9'}// emoji de bandeira
      
    
    
}

