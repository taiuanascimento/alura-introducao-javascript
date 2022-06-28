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
