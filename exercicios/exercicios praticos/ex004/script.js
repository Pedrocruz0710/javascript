function carregar(){ // função que atribui o codigo ao elemento onclick
    var numero = document.querySelector('input#numero') // regista o dado do input
    var valnumero = Number(numero.value) // transforma o dado para numero, nunca esqueca do '.value', pois este dado ainda nao tem valor declarado
    var res = document.getElementById('res')//variavel que esta atribuida a select com id res
    var tabu = '' // valor que sera a tabuada

        for (var c = 1; c <=10; c++){// aqui eu usei a estrutura de repetição 'for' pois ja declaro a variavel contadora direto nela
            tabu = valnumero * c // multiplicação da tabuada
            let item = document.createElement('option')// vai criar uma variavel com e para ela atribuir um elemento que sera criado, que sera o option
            item.text = `${valnumero} x ${c} = ${tabu}`//o texto que ira aparecer na variavel item sera este
            res.appendChild(item)//faz aparecer a variavel item  de filho do do select
        }
}