const contenedor1=document.querySelector('.conteiner1');
const contenedor2=document.querySelector('.conteiner2');
const contenedor3=document.querySelector('.conteiner3');


const cambiar=document.getElementById('cambiar')
const volver=document.getElementById('volver')



cambiar.addEventListener('click',function(){
    contenedor1.style.width="100%"
    contenedor1.style.height="20vh"
    contenedor1.style.backgroundColor="green"
})

cambiar.addEventListener('click',function(){
    contenedor2.style.width="100%"
    contenedor2.style.height="20vh"
    contenedor2.style.backgroundColor="green"
})
cambiar.addEventListener('click',function(){
    contenedor3.style.width="100%"
    contenedor3.style.height="20vh"
    contenedor3.style.backgroundColor="green"
})



volver.addEventListener('click',function(){
    contenedor1.style.width="100%"
    contenedor1.style.height="30vh"
    contenedor1.style.backgroundColor="blueviolet"
})
volver.addEventListener('click',function(){
    contenedor2.style.width="50%"
    contenedor2.style.height="50vh"
    contenedor2.style.backgroundColor="blueviolet"
})
volver.addEventListener('click',function(){
    contenedor3.style.width="50%"
    contenedor3.style.height="50vh"
    contenedor3.style.backgroundColor="blueviolet"
})

