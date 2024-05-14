export const Home = ( ) =>{

    
console.log('se ejecuta home');

    const homeView = `
    <h1>Explore el mundo</h1>
     <p>Encuentre su destino</p>
    `;

    const div = document.createElement('div');
    div.classList.add('home-title');
    div.innerHTML = homeView;

    return div;
}

