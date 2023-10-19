const edadInput = document.querySelector('#edadInput');
const generoInput = document.querySelector('#generoInput');
const imagenIMC = document.querySelector('.imagenIMC');
const alturaInput = document.querySelector('#alturaInput');
const pesoInput = document.querySelector('#pesoInput');
const resultado = document.querySelector('#resultado')
const radio = document.querySelectorAll('input[name="sexo"]');
const formSubmit = document.querySelector('.calculadoraSubmit')

const adolecente = 'adolecente';
const adulto = 'adulto';
const mayor = 'mayor';
const muyMayor = 'muyMayor';

let sexSelected

let findSelected = () => {
   const selected = document.querySelector('input[name="sexo"]:checked').value;
   sexSelected = selected;
}

radio.forEach(e => {
   e.addEventListener('change', e =>{
      findSelected()
   })
})

const calcularImc = (peso, altura) => {
   const imc = peso / (altura * altura);

   const tiposImc = {
      '01': imc < 18.5,
      '02': imc >= 18.5 && imc < 24.9,
      '03': imc >= 25 && imc < 29.9,
      '04': imc >= 30 && imc < 34.9,
      '05': imc >= 35 && imc < 40,
      '06': imc >= 40,
   };

   const tipo = Object.keys(tiposImc).find(key => tiposImc[key]);
   
   return {
      imc: imc,
      tipo: tipo || 'Desconocido',
   };
}

const calcularCalorias = (sexo, edad, peso, altura) => {
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
   const valores =  calcularImc( pesoInput.value, alturaInput.value);
   resultado.value = valores.imc;
   imagenIMC.src = `../imagenes/${valores.tipo}${sexSelected[0]}.png`
   imagenIMC.style.display =  'inline-block'
});

