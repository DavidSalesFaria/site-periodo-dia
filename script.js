function carregar(){
    // Ober os elementos msg e imagem pelo id
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    // Extrair data, hora e minutos
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    // Período do dia (AM/PM) inicializado com PM
    periodo = "PM"


    if (horas >= 0 && horas < 12){
        // Bom dia
        img.src = "imagens/foto-manha.png"
        periodo = "AM"
        window.document.body.style.background = "#feeacd"
    }
    else if (horas >= 12 && horas < 18){
        // Boa tarde
        img.src = "imagens/foto-tarde.png"
        window.document.body.style.background = "#fea868"
    }
    else{
        // Boa noite
        img.src = "imagens/foto-noite.png"
        window.document.body.style.background = "#7e5596"
    }

    // Altera a mensagem para exibir as horas
    msg.innerHTML = `As horas são ${horas}:${minutos} ${periodo}.`
}