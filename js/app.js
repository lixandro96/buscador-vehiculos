document.addEventListener('DOMContentLoaded', function (){

  //variables
  const resultado = document.querySelector('#resultado');
  const marcaSelect = document.querySelector('#marca');
  const yearSelect = document.querySelector('#year');
  const maximoSelect = document.querySelector('#maximo');
  const minimoSelect = document.querySelector('#minimo');
  const puertasSlect = document.querySelector('#puertas');
  const transmisionSelect = document.querySelector('#transmision');
  const colorSelect = document.querySelector('#color');


  
  
  function llenarSelect(){

    let marcas = [...new Set(autos.map(auto => auto.marca))];
    let years = [...new Set(autos.map(auto => auto.year))];
    let minimos = [...new Set(autos.map(auto => auto.precio))];
    let maximos = [...new Set(autos.map(auto => auto.precio))];
    let puertas = [...new Set(autos.map(auto => auto.puertas))];
    let transmision = [...new Set(autos.map(auto => auto.transmision))];
    let color = [...new Set(autos.map(auto => auto.color))];

    marcas.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      marcaSelect.appendChild(opcion)
      console.log(auto)
    })
    years.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      yearSelect.appendChild(opcion)
      console.log(auto)
    })
    minimos.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      minimoSelect.appendChild(opcion)
      console.log(auto)
    })
    maximos.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      maximoSelect.appendChild(opcion)
      console.log(auto)
    })
    puertas.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      puertasSlect.appendChild(opcion)
      console.log(auto)
    })
    transmision.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      transmisionSelect.appendChild(opcion)
      console.log(auto)
    })
    color.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      colorSelect.appendChild(opcion)
      console.log(auto)
    })
  }
    
  
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

  llenarSelect()
  mostrarAutos()
})

 
