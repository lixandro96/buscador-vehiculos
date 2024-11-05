document.addEventListener('DOMContentLoaded', function (){

  //variables
  const resultado = document.querySelector('#resultado')
  function mostrarAutos(){


    autos.forEach(auto => {
      const {marca,modelo,year,precio,puertas,color,transmision,imagen} = auto;
      const card = document.createElement('DIV');
      card.classList.add('card')
      const marcaAuto = document.createElement('P');
      marcaAuto.textContent = `Marca: ${marca}`
      const modeloAuto = document.createElement('P');
      modeloAuto.textContent = `Modelo: ${modelo}`
      const yearAuto = document.createElement('P');
      yearAuto.textContent = `Año: ${year}`
      const precioAuto = document.createElement('P');
      precioAuto.textContent = `Precio: ${precio}`
      const puertasAuto = document.createElement('P');
      puertasAuto.textContent = `Puertas: ${puertas}`
      const colorAuto = document.createElement('P');
      colorAuto.textContent = `Color: ${color}`
      const transmisionAuto = document.createElement('P');
      transmisionAuto.textContent = `Transmision: ${transmision}`
      const contenedorinfo =document.createElement('DIV');
      contenedorinfo.classList.add('contenedorinfo')
      const imagenAuto = document.createElement('img');
      imagenAuto.classList.add('imagenAuto')
      imagenAuto.src = imagen
     

      card.appendChild(imagenAuto)
      contenedorinfo.appendChild(marcaAuto)
      contenedorinfo.appendChild(modeloAuto)
      contenedorinfo.appendChild(yearAuto)
      contenedorinfo.appendChild(precioAuto)
      contenedorinfo.appendChild(puertasAuto)
      contenedorinfo.appendChild(colorAuto)
      contenedorinfo.appendChild(transmisionAuto)

      card.appendChild(contenedorinfo)
      resultado.appendChild(card)
    })
  } 


  mostrarAutos()
})

 
