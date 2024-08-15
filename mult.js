const form = document.querySelector("form");
const situacao = document.getElementById("tipomulta");

form.addEventListener("submit", (e) => {

    const limite = parseFloat(form.inPermitida.value);
    const velVeiculo = parseFloat(form.inCondutor.value);

    if (isNaN(limite) || isNaN(velVeiculo)) {
        
        situacao.innerText = "Velocidade inválida";
        
    } else {

        if (
            velVeiculo <= limite) {
            situacao.innerText = "Situação: Sem multa";

        } else if (
            velVeiculo > limite && velVeiculo <= limite * 1.2) {
            situacao.innerText = "Situação: Multa leve";

        } else if (
            velVeiculo > limite * 1.2) {
            situacao.innerText = "Situação: Multa grave";

        } else if (
            velVeiculo > limite * 2) {
            situacao.innerText = "Situação: Perdeu Habilitação";
        }

    }

    e.preventDefault();

});



