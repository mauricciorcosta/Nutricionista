var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var tdAltura = pacientes[i].querySelector(".info-altura");
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    var tdImc = pacientes[i].querySelector(".info-imc");
    var imc = calculaIMC(peso,altura);
    
    function calculaIMC(peso, altura) {
        var imc = 0;
        imc = peso / (altura*altura);
        return imc.toFixed(2)
    }
    
    if (!pesoValido) {
        tdImc.textContent = "Peso Inválido";
        pesoValido = false;
        pacientes[i].classList.add("paciente-invalido");
    }
    
    if (!alturaValida) {
        tdImc.textContent = "Altura Inválida";
        alturaValida = false;
        pacientes[i].classList.add("paciente-invalido");
    }
    
    
    if (pesoValido && alturaValida){
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0  && peso <= 1000) {
        return true;
     } else {
        return false;
     };
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 4) {
        return true;
    } else {
        return false;
    }
}
