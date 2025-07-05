function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente.')
        // Aparece se o ano for maior que o ano atual, ou o cliente nao digitou o ano.
    } else{ // se o de la for falso as duas afirmações ele executa estas seções
        var fsex = document.getElementsByName('radsex') // atribui a esta variavel a opção masc e fem
        var idade = ano - Number(fano.value) // registra a idade, subtraindo o ano por fano; observe a conversão do valor em string para number.

        var genero =''// variavel string sem atribuição
        var img = document.createElement('img') // a variavel img cria a tag img
        img.setAttribute('id', 'foto')// a tag img é atribuida com o id foto

        if (fsex[0].checked){// se a variavel fsex for cehcada e atribuida ao campo 0(masc)
            var genero = 'Homem'
                if (idade >= 0 && idade <10){
                    img.setAttribute('src', 'imagens/bebe homem.jpg')
                } else if (idade <21){
                    img.setAttribute('src', 'imagens/jovem homem.jpg')
                } else if (idade <50){
                    img.setAttribute('src', 'imagens/aulto homem.jpg')
                } else {
                    img.setAttribute('src', 'imagens/idoso homem.jpg')
                }
            } 
            else if (fsex [1].checked){ // se a variavel fsex for cehcada e atribuida ao campo 1(fem)
                var genero = 'Mulher'
                if (idade >= 0 && idade <10){
                    //Criança
                    img.setAttribute('src', 'imagens/bebe mulher.jpg')
                } else if (idade <21){
                    //Jovem
                    img.setAttribute('src', 'imagens/jovem mulher.jpg')
                } else if (idade <50){
                    //adulto
                    img.setAttribute('src', 'imagens/adulto mulher.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', 'imagens/idosa mulher.jpg')
                }
            }

            res.style.textAlign = 'center' // centraliza por meio de JS
            res.innerHTML =`Detectamos  ${genero} com ${idade} anos`
            res.appendChild(img)// faz aparecer o elemento img na div#res
    }
}
