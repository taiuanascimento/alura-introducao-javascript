var titulo = document.querySelector("#titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var trPaciente = pacientes[i];

    var tdNome = trPaciente.querySelector(".info-nome");
    var nome = tdNome.textContent;
    
    var tdPeso = trPaciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var pesoValido = true;

    var tdAltura = trPaciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var alturaValida = true;

    var tdImc = trPaciente.querySelector(".info-imc");

    if (peso <= 0 || peso >= 600) {
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        tdPeso.classList.add("info-invalida");
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        tdAltura.classList.add("info-invalida");
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        alert("O paciente " + nome + ", está com altura e/ou peso inválido.");
        trPaciente.classList.add("paciente-invalido")
    }
}

function calculaImc(peso, altura){
    var imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}