function start(){
    var btnCalculateImc = document.querySelector("#calc-btn")

    btnCalculateImc.addEventListener("click", calcImc);
}

function calculateImc(weight, height){
return weight / (height*height);

}


function calcImc(){
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcCalc = document.querySelector('#result');
    var imcResult = document.querySelector('#result-imc');


    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height);
    var imcFormatted = imc.toFixed(2).replace('.', ',');
  
    imcCalc.textContent = imcFormatted;
    

    if (imc > 40) {
        imcResult.textContent = ("Obesidade Grau III.");
    }else if (imc > 35 && imc < 40){
        imcResult.textContent = ("Obesidade Grau II.");
    }else if (imc > 30 && imc < 35){
        imcResult.textContent = ("Obesidade Grau I.");
    }
    else if (imc > 25 && imc < 30){
        imcResult.textContent = ("Acima do Peso.");
    }
    else if (imc > 18.5 && imc < 25){
        imcResult.textContent = ("Peso Normal.");
    }
    else if (imc > 17 && imc < 18.5){
        imcResult.textContent = ("Abaixo do Peso.");
    }else {
        imcResult.textContent = ("Muito abaixo do Peso.");
    }

}



start();

