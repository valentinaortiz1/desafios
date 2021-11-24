


// punto1
const inputNum1 = document.getElementById('num1');
const inputNum2 = document.getElementById('num2');
const btnResolver = document.getElementById('resolver');
const resultado = document.getElementById('resultado');

btnResolver.addEventListener('click', resolver);

function resolver(){
    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);
    resultado.innerHTML = num1+num2;
}

/* ------------------------------------*/

// punto2
const inputNota1 = document.getElementById('nota1');
const inputNota2 = document.getElementById('nota2');
const inputNota3 = document.getElementById('nota3');
const btnPromediar = document.getElementById('promediar');
const promedio = document.getElementById('promedio');

btnPromediar.addEventListener('click', promediar);

function promediar(){
    let nota1 = parseInt(inputNota1.value);
    let nota2 = parseInt(inputNota2.value);
    let nota3 = parseInt(inputNota3.value);

    let resultadoPromedio = ((nota1+nota2+nota3)/3).toFixed(2);
    
    if(resultadoPromedio >= 7){
        promedio.innerHTML = "Aprobado ("+resultadoPromedio+")";
        promedio.classList.remove("desaprobado");
        promedio.classList.add("aprobado");
    }else{
        promedio.innerHTML = "Desaprobado ("+resultadoPromedio+")";
        promedio.classList.remove("aprobado");
        promedio.classList.add("desaprobado");
    }
}




// punto3

const color1 = document.getElementById('color1');
const btnCambiarColor1 = document.getElementById('cambiarColor1');
const color2 = document.getElementById('color2');
const btnCambiarColor2 = document.getElementById('cambiarColor2');
const color3 = document.getElementById('color3');
const btnCambiarColor3 = document.getElementById('cambiarColor3');
const body = document.getElementsByTagName('body');

btnCambiarColor1.addEventListener('click', function(){body[0].style.background = color1.value});
btnCambiarColor2.addEventListener('click', function(){body[0].style.background = color2.value});
btnCambiarColor3.addEventListener('click', function(){body[0].style.background = color3.value});

