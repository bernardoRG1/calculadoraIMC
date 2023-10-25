   const numOption = document.querySelector('#numSelect');
   const tablasSubmit = document.querySelector('#tablasSubmit');
   const imgContainer = document.querySelector('.tablaImagesContainer');

   tablasSubmit.addEventListener('click', (e) => {
      imgContainer.innerHTML = '';  
      e.preventDefault();
      for(let x = 0; x < 11; x++) {
         let result = x * parseInt(numOption.value)
         let resultConcat = `${result}`;
   
         
         let divRowContainer = document.createElement('div');   
         divRowContainer.className = 'tablaImagesRow';
         imgContainer.appendChild(divRowContainer)

         let imgFirstNum = document.createElement('img')
         let timesImg = document.createElement('img')
         let secondNumImg = document.createElement('img')
         let equalsImg = document.createElement('img')

         imgFirstNum.src = `../imagenes/nums/${numOption.value}.png`;
         timesImg.src = `../imagenes/nums/x.png`;
         secondNumImg.src = `../imagenes/nums/${x}.png`
         equalsImg.src = `../imagenes/nums/=.png`

         divRowContainer.appendChild(imgFirstNum)
         divRowContainer.appendChild(timesImg)
         divRowContainer.appendChild(secondNumImg)
         divRowContainer.appendChild(equalsImg)
         if (result > 9 && result < 100) {
            let resultFirstNum = document.createElement('img');
            let secondNumResultImg = document.createElement('img');
            
            resultFirstNum.src = `../imagenes/nums/${resultConcat[0]}.png`;
            secondNumResultImg.src = `../imagenes/nums/${resultConcat[1]}.png`;
            divRowContainer.appendChild(secondNumResultImg);
            divRowContainer.appendChild(resultFirstNum);
            } 
         else if (result >= 100) {
            console.log(100);
            let resultFirstNum = document.createElement('img');
            let secondNumResultImg = document.createElement('img');
            let tercero = document.createElement('img');

            resultFirstNum.src = `../imagenes/nums/${resultConcat[0]}.png`;
            secondNumResultImg.src = `../imagenes/nums/${resultConcat[1]}.png`;
            tercero.src = `../imagenes/nums/0.png`;

            divRowContainer.appendChild(resultFirstNum);
            divRowContainer.appendChild(secondNumResultImg);
            divRowContainer.appendChild(tercero);

         } else {
            let resultFirstNum = document.createElement('img');
            resultFirstNum.src = `../imagenes/nums/${resultConcat[0]}.png`;
            divRowContainer.appendChild(resultFirstNum);
         }

         } 

      }
   )




