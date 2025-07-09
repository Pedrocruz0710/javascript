function carregar(){
var fundo=window.document.getElementById('foto')//variavel representando a div com id foto, neste caso eu ultizei ela para fazer um teste para mudar a cor da div.
var msg = window.document.getElementById('msg')// Esta variavel atribui a div msg
var img = window.document.getElementById('imagem')// esta variavel neste caso esta atribuimdo a tag '<img>' por meio do id 'imagem'
var date = new Date()
var hora = date.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >=0 && hora < 12)// muda a imagem conforme a atriuição for veradaira
{
    //Bom dia
    img.src = 'imagens/manha imagem png.png'
    document.body.style.background ='#97ae9f'
  
} else if (hora >= 12 && hora < 18){
    //Boa tarde
    img.src = 'imagens/tarde imagem png.png'
    document.body.style.background ='#f0b86b'
} else{
    //Boa noite
    img.src = 'imagens/noite imagem png.png'
    // Se eu quisesse atribuir uma cor de fundo a div eu usaria a tag {fundo.style.background ='#282230' - esta é a cor}
    document.body.style.background ='#776391f6'//Para mudar a cor do background do body
}

}

