var hora = new Date()
console.log(`agora são extamente ${hora}`)
if(hora < 12){
    console.log('bom dia')
}else if (hora <= 18){
    console.log('boa tarde')
}else {
    console.log('boa noite')
}