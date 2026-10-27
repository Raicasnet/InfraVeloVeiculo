const form = document.getElementById("speedForm");
const situacao = document.getElementById("tipomulta");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const limite = parseFloat(document.getElementById("inPermitida").value);
    const velVeiculo = parseFloat(document.getElementById("inCondutor").value);

    if (isNaN(limite) || isNaN(velVeiculo) || limite <= 0 || velVeiculo < 0) {
        situacao.innerText = "Por favor, insira valores válidos.";
        situacao.className = "h5 mt-4 text-center text-danger";
        return;
    }

    if (velVeiculo <= limite) {
        situacao.innerText = "Situação: Sem multa";
        situacao.className = "h5 mt-4 text-center text-success";
    } else if (velVeiculo <= limite * 1.2) {
        situacao.innerText = "Situação: Multa leve";
        situacao.className = "h5 mt-4 text-center text-warning";
    } else if (velVeiculo <= limite * 2) {
        situacao.innerText = "Situação: Multa grave";
        situacao.className = "h5 mt-4 text-center text-danger";
    } else {
        situacao.innerText = "Situação: Perdeu Habilitação";
        situacao.className = "h5 mt-4 text-center text-danger fw-bold";
    }
});
