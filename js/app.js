
function comprarIngresso(qtd, tipo){
    let quantTotal = parseInt(document.getElementById(`qtd-${tipo}`).textContent);

    if(qtd <= quantTotal){
        quantTotal = quantTotal - qtd;
        document.getElementById(`qtd-${tipo}`).textContent = quantTotal;
    }
}

function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeComprar = parseInt(document.getElementById('qtd').value);

    if(tipoIngresso == 'pista'){
        comprarIngresso(quantidadeComprar, 'pista');
    } else if(tipoIngresso == 'superior'){
        comprarIngresso(quantidadeComprar, 'superior');
    } else if(tipoIngresso == 'inferior'){
        comprarIngresso(quantidadeComprar, 'inferior');
    }
}
