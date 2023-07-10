const headerButton = document.querySelector('.header--button')
const mainExchangeConteiner = document.querySelector('.main-exchange-conteiner')
const titulo = document.querySelectorAll('.titulo')
const fila = document.querySelectorAll('.fila')
const mainPlansContainer = document.querySelector('.main-plans-container')
const plansContainerCard = document.querySelector('.plans-container--card')
const planCardTitle = document.querySelectorAll('.plan-card--title')
const planCardPrice = document.querySelectorAll('.plan-card--price')
const planCardCa = document.querySelectorAll('.plan-card-ca')
const modos = document.querySelector('.modos')
const tabla1 = document.querySelector('.tabla-1')

function variasClases(v, quitar, poner){
    v.forEach(function(v) {
        v.classList.toggle(quitar);
        v.classList.toggle(poner);
    });
}

function alternarIconosModo() {
    modos.classList.toggle('sol')
    //modo osuro
    headerButton.classList.toggle('fondo-warm-black')
    headerButton.classList.toggle('letra-clara')

    mainExchangeConteiner.classList.toggle('modo-oscuro')

    variasClases(titulo,'letra-clara','letra-black')
/*
    fila.forEach(function(fila) {
        fila.classList.toggle('modo-just-white');
        fila.classList.toggle('fondo-warm-black');
    });
*/
    variasClases(fila,'modo-just-white','fondo-warm-black')

    mainPlansContainer.classList.toggle('modo-oscuro')

    variasClases(planCardTitle,'letra-black','letra-clara')
    
    variasClases(planCardPrice,'letra-black','color-bitcoin-orange')
    
    variasClases(planCardCa, 'z', 'degrade-naranja-negro')
    //modo claro
    headerButton.classList.toggle('modo-claro')
    headerButton.classList.toggle('letra-black')
    
    mainExchangeConteiner.classList.toggle('modo-claro')

}

modos.addEventListener('click', alternarIconosModo)

