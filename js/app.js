const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');
const valorAutoInput = document.getElementById('txtValorAuto');
const porcentajeInput = document.getElementById('txtPorcentaje');
const plazoInput = document.getElementById('plazos');
const pagoInicialTxt = document.getElementById('txtPagoInicial');
const totalFinTxt = document.getElementById('txtTotalFin');
const pagoMensualTxt = document.getElementById('txtPagoMensual');

btnCalcular.addEventListener('click', function(){
   pagoInicialTxt.value = parseFloat(valorAutoInput.value) * (parseFloat(porcentajeInput.value)/100);
   totalFinTxt.value = parseFloat(valorAutoInput.value) - pagoInicialTxt.value;
   pagoMensualTxt.value = totalFinTxt.value/parseFloat(plazoInput.value);
});

btnLimpiar.addEventListener('click', () => location.reload())

