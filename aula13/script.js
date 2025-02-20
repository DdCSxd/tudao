function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.ariaValueMax.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Tente novamente')
    }else {
        window.alert('ok!')
    }
}