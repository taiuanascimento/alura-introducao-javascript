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
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        alert("O paciente " + nome + ", está com altura e/ou peso inválido.");
        trPaciente.classList.add("paciente-invalido")
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();    

    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var novaTrPaciente = document.createElement("tr");
    novaTrPaciente.classList.add("paciete");
    
    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = nome;
    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    pesoTd.textContent = peso;
    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    alturaTd.textContent = altura;
    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    gorduraTd.textContent = gordura;
    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");

    novaTrPaciente.appendChild(nomeTd);
    novaTrPaciente.appendChild(pesoTd);
    novaTrPaciente.appendChild(alturaTd);
    novaTrPaciente.appendChild(gorduraTd);
    novaTrPaciente.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(novaTrPaciente);
    
    console.log(novaTrPaciente);
});



