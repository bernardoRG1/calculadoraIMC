const generar = document.querySelector('#generar');
const cantidad = document.querySelector('#cantidadDeNumerosInput')
const promedioSpan = document.querySelector('#promedioSpan')
const mayorSpan = document.querySelector('#mayorSpan')
const menorSpan = document.querySelector('#menorSpan')
const procentajeParesSpan = document.querySelector('#procentajeParesSpan')
const procentajeImparesSpan = document.querySelector('#porcentajeImparesSpan')

let array = [];


function randomize(x) {
   const cmbAleatorios = document.getElementById('cmbNumeros');
   for(con=0; con<x; con++) {
      array[con] = Math.floor(Math.random() * 1000 )
      let option = document.createElement('option');
      option.value = array[con];
      option.innerHTML = array[con];
      cmbAleatorios.appendChild(option)
   }

}


const generarPromedio = (a) => {
   let suma = 0;
   a.forEach(x =>  suma = suma + x );

   promedioSpan.innerHTML = `prpmedio: ${suma }`;
}  

const mayorYMayor = (a) => {
   let numMayor  = 1, numMenor = 1001; i = 0, indice = 0, m = 0;
   a.forEach(x => {   
      
      if(x >= numMayor) {
         numMayor = x
         indice = i
      } 
      
      if (x < numMenor){
         numMenor = x;
         m = i;
      }

      i++   
   });
   mayorSpan.innerHTML = `mayor: ${numMayor} indice: ${indice}`;
   menorSpan.innerHTML = `Menor: ${numMenor} indice: ${m}`;

}

const paresImpares = a => {
   let pares = 0, impares = 0, l = 1;
   a.forEach(x => {
      (x % 2 == 0) ? pares++ : impares++;
      l++
   })

   procentajeImparesSpan.innerHTML = `Porcentaje de impares: ${(impares / i) * 100}%`
   procentajeParesSpan.innerHTML = `Porcentaje de pares; ${(pares / i) * 100}%`

   
}

generar.addEventListener('click', (e) => {
      e.preventDefault()
      randomize(parseInt(cantidad.value))
      generarPromedio(array)
      mayorYMayor(array)
      paresImpares(array)
      
   
})

