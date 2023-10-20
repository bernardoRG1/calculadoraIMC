const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');

const valorAutoInput = document.getElementById('txtValorAuto');
const porcentajeInput = document.getElementById('txtPorcentaje');
const plazoInput = document.getElementById('plazos');

const pagoInicialTxt = document.getElementById('txtPagoInicial');
const totalFinTxt = document.getElementById('txtTotalFin');
const pagoMensualTxt = document.getElementById('txtPagoMensual');

btnCalcular.addEventListener('click', function(){
   

    //Hacer los calculos
    let pagoInicial = parseFloat(valorAutoInput.value) * (parseFloat(porcentajeInput.value)/100);
    console.log(valorAutoInput)
    let totalFin = parseFloat(valorAutoInput.value) - pagoInicial;
    let plazos = totalFin/parseFloat(plazoInput.value);

    //Mostrar los datos
    pagoInicialTxt.value = pagoInicial;
    totalFinTxt.value = totalFin;
    pagoMensualTxt.value = plazos;
});

//Asociar una funcion al evento click y se programa la funcion
btnLimpiar.addEventListener('click', function(){
    pagoInicialTxt.value="";
    totalFinTxt.value="";
    pagoMensualTxt.value="";

})

