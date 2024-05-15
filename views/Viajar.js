import { BeneficiosViajar } from "../data/benefits.js";

export const Viajar = () => {

    const beneficios = BeneficiosViajar;

    const titleBenefits = `
    <h1>Beneficios de viajar</h1>`

    const sectionBeneficios = document.createElement('section')
    sectionBeneficios.classList.add('section-beneficios');
    sectionBeneficios.innerHTML = titleBenefits;

    const divBeneficios = document.createElement('div');
    divBeneficios.classList.add('div-beneficios')

    beneficios.forEach((benefit) => {
        const [key, value] = Object.entries(benefit)[0];
        
        const divContent= document.createElement('div')
        const content = `<h2>${key}</h2> <p>${value}</p>`
        divContent.innerHTML = content;
        divBeneficios.appendChild(divContent)
    })
    sectionBeneficios.appendChild(divBeneficios)
    
    return sectionBeneficios;
}