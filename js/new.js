document.addEventListener('DOMContentLoaded', function () {
   const edadInput = document.querySelector('#edadInput').value;
   const generoInput = document.querySelector('#generoInput')
   const alturaInput = document.querySelector('#alturaInput').value;
   const pesoInput = document.querySelector('#pesoInput').value;
   const resultado = document.querySelector('#resultado').value;
   const radio = document.querySelector('input[type="radio"][name="sexo"]:checked').value;
   const formSubmit = document.querySelector('.calculadoraSubmit');
 
   const adolecente = 'adolecente';
   const adulto = 'adulto';
   const mayor = 'mayor';
   const muyMayor = 'muyMayor';
 
   const calcularPeso = (sexo, edad, peso, altura) => {
      const tabla = {
         Hombre: {
            adolecente: 17.686 * peso + 658.2,
            adulto: 15.057 * peso + 692.2,
            mayor: 11.472 * peso + 873.1,
            muyMayor: 11.711 * peso + 587.7
         },
         Mujer: {
            adolecente: 13.384 * peso + 692.6,
            adulto: 14.018 * peso + 486.6,
            mayor: 8.126 * peso + 845.6,
            muyMayor: 9.082 * peso + 658.5
         }
      }
   
      let etapa = undefined;
   
      switch (true) {
         case edad < 18: etapa = adolecente; break;
         case edad >= 18 && edad < 30: etapa = adulto; break;
         case edad >= 30 && edad < 60: etapa = mayor; break;
         case edad >= 80: etapa = muyMayor; break;
      }
   
      let calculo = tabla[sexo][etapa];
      return (calculo);
   }
 
   formSubmit.addEventListener('click', (e) => {
      e.preventDefault();  
      console.log(edadInput.value)
      console.log(calcularPeso(radio.value, edadInput.value, pesoInput.value, alturaInput.value));
      
   });
 
   console.log("Hola");

 });