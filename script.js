function temaManha(){
    // Obtem a imagem pelo id
    var img = window.document.getElementById("imagem")
    // Altera a imagem
    img.src = "imagens/foto-manha.png"
    // Altera o período para AM 
    periodo = "AM"
    window.document.body.style.background = "#eebc88"
}
function temaTarde(){
    // Obtem a imagem pelo id
    var img = window.document.getElementById("imagem")
    // Altera a imagem
    img.src = "imagens/foto-tarde.png"
    window.document.body.style.background = "#fea868"
}
function temaNoite(){
    // Obtem a imagem pelo id
    var img = window.document.getElementById("imagem")
    // Altera a imagem
    img.src = "imagens/foto-noite.png"
    window.document.body.style.background = "#7e5596"
}

function carregar(){
    // Obtem a caixa de seleçaõ pelo id
    var selecionar = window.document.getElementById("selecionar")
    // Valor de se de seleção
    var val_selec = ""

    // Obter o elemento msg
    var msg = window.document.getElementById("msg")
    
    // Extrair data, hora e minutos
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    // Período do dia (AM/PM) inicializado com PM
    periodo = "PM"

    // Adiciona um Listener na caixa de seleção
    selecionar.addEventListener("change", function(){
        // Extrai o valor de selecionar
        val_selec = Number(selecionar.value)

        switch (val_selec) {
                   
            // 1 - Manhã
            case 1:
                temaManha()
                break;
            // 2 - Tarde
            case 2:
                temaTarde()
                break;
            // 3 - Noite
            case 3:
                temaNoite()
                break;
            // 0 - Automático
            default:
                carregar()
                break;
        }
    })

    // Checa se o horário está entre 00:00 e 11:59
    if (horas >= 0 && horas < 12){
        // Bom dia
        temaDia()
    }
    // Checa se o horário está entre 12:00 e 17:59
    else if (horas >= 12 && horas < 18){
        // Boa tarde
       temaTarde()
    }
    // Checa se o horário está entre 18:00 e 23:59
    else{
        // Boa noite
        temaNoite()
    }

    // Altera a mensagem para exibir as horas
    msg.innerHTML = `As horas são ${horas}:${minutos} ${periodo}.`


    
}