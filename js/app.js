document.addEventListener('DOMContentLoaded', function (){

  //variables
  const resultado = document.querySelector('#resultado');
  const marcaSelect = document.querySelector('#marca');
  const yearSelect = document.querySelector('#year');
  const maximoSelect = document.querySelector('#maximo');
  const minimoSelect = document.querySelector('#minimo');
  const puertasSelect = document.querySelector('#puertas');
  const transmisionSelect = document.querySelector('#transmision');
  const colorSelect = document.querySelector('#color');

  const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
  }
  function llenarSelect(){

    let marcas = [...new Set(autos.map(auto => auto.marca))].sort();
    let years = [...new Set(autos.map(auto => auto.year))].sort();
    let minimos = [...new Set(autos.map(auto => auto.precio))].sort();
    let maximos = [...new Set(autos.map(auto => auto.precio))].sort();
    let puertas = [...new Set(autos.map(auto => auto.puertas))].sort();
    let transmision = [...new Set(autos.map(auto => auto.transmision))].sort();
    let color = [...new Set(autos.map(auto => auto.color))].sort();

    marcas.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      marcaSelect.appendChild(opcion)
    })
    years.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      yearSelect.appendChild(opcion)
    })
    minimos.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      minimoSelect.appendChild(opcion)
    })
    maximos.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      maximoSelect.appendChild(opcion)
    })
    puertas.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      puertasSelect.appendChild(opcion)
    })
    transmision.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      transmisionSelect.appendChild(opcion)
    })
    color.forEach(auto => {
      const opcion =document.createElement('OPTION');
      opcion.value = auto;
      opcion.textContent = auto;
      colorSelect.appendChild(opcion)
    })
  }
    function limpiarHTML(){
      while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
      }
    }
  
  function mostrarAutos(autos){

    limpiarHTML()
    
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

  marcaSelect.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAutos()
  });

  yearSelect.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAutos()
  });

  minimoSelect.addEventListener('change', e =>{
    datosBusqueda.minimo = parseInt(e.target.value); 
    filtrarAutos()
  })
  maximoSelect.addEventListener('change', e =>{
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAutos()
  })
  puertasSelect.addEventListener('change', e =>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAutos()
  })
  transmisionSelect.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAutos()
  })
  colorSelect.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    filtrarAutos()
  })

  function filtrarAutos(){
    
    let resultado = autos
      .filter(filtrarMarca)
      .filter(filtrarYear)
      .filter(filtrarMinimo)
      .filter(filtrarMaximo)
      .filter(filtrarPuertas)
      .filter(filtrarTransmision)
      .filter(filtrarColor)
    ;
    
    if(resultado.length){
      mostrarAutos(resultado)
      const mensaje = document.querySelector('.alerta');
      console.log(mensaje)
      if(mensaje){
        mensaje.remove()
      }
    }else{
      noResultado()
    }
     

  } 
  function noResultado(){
    limpiarHTML()
    const mensajeResultado = document.createElement('DIV')
    mensajeResultado.classList.add('error','alerta');
    mensajeResultado.textContent = 'No hay resultados'
    resultado.insertAdjacentElement('afterend',mensajeResultado) 
  }

  function filtrarMarca(auto){
    const {marca} = datosBusqueda
    if(marca){
      return auto.marca === marca
    }
    return auto

  }
  function filtrarYear(auto){
    const {year} = datosBusqueda
    if(year){
      
      return (auto.year === year) 
    }
    return auto

  }
  function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;

    if(minimo){
      return auto.precio >= minimo
    }
    return auto
  }
  function filtrarMaximo(auto){
    const {maximo} = datosBusqueda
    if(maximo){
      return auto.precio <= maximo
    }
    return auto
  }
  function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;

    if(puertas){
      return auto.puertas === puertas;
    }
    return auto
  }
  function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;

    if(transmision){
      return auto.transmision === transmision;
    }
    return auto
  }
  function filtrarColor(auto){
    const {color} = datosBusqueda;

    if(color){
      return auto.color === color;
    }
    return auto
  }

  llenarSelect()
  mostrarAutos(autos)
})

 
