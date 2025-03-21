function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}


const timer = setInterval(()=>{
    console.log(mostraHora())
}, 1000);

setTimeout(()=>{
    clearInterval(timer);
},10000)