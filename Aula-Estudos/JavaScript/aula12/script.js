function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML= `agora sao ${hora} horas.`

var hora = 18
if (hora >= 6 && hora < 12) {
    img.src = 'imagens/manha.png'
    document.body.style.background = '#FFD700'
} else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#808000'
} else {
    img.src = 'imagens/noite.png'
    document.body.style.background = '#B22222'
}

}