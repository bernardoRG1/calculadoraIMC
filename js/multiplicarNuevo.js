const numOption = document.querySelector('#numSelect');
const tablasSubmit = document.querySelector('#tablasSubmit');
const imgContainer = document.querySelector('.tablaImagesContainer');

tablasSubmit.addEventListener('click', (e) => {
  imgContainer.innerHTML = '';
  e.preventDefault();

  for (let x = 0; x < 11; x++) {
    const result = x * parseInt(numOption.value);
    const resultConcat = `${result}`;
    const divRowContainer = document.createElement('div');
    divRowContainer.className = 'tablaImagesRow';
    imgContainer.appendChild(divRowContainer);

    const createAndAppendImg = (src) => {
      const img = document.createElement('img');
      img.src = src;
      divRowContainer.appendChild(img);
    };

    createAndAppendImg(`../imagenes/nums/${numOption.value}.png`);
    createAndAppendImg(`../imagenes/nums/x.png`);
    createAndAppendImg(`../imagenes/nums/${x}.png`);
    createAndAppendImg(`../imagenes/nums/=.png`);

    if (result > 9) {
      createAndAppendImg(`../imagenes/nums/${resultConcat[0]}.png`);
      if (result > 99) {
        createAndAppendImg(`../imagenes/nums/${resultConcat[1]}.png`);
        createAndAppendImg(`../imagenes/nums/0.png`);
      }
    }
  }
});
