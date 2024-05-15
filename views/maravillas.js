
export const Maravillas = () => {

    const monumentos = [
        { nombre: "Cristo Redentor", urlImage: '../assets/maravillas/cristo.jpg' },
        { nombre: "Taj Mahal", urlImage: '../assets/maravillas/tajmahal.jpg' },
        { nombre: "Machu Picchu", urlImage: '../assets/maravillas/machu.jpg' },
        { nombre: "Petra", urlImage: '../assets/maravillas/petra.jpg' },
        { nombre: "Chichén Itzá", urlImage: '../assets/maravillas/chichen.jpg' },
        { nombre: "Muralla China", urlImage: '../assets/maravillas/muralla.jpg' }, 
        { nombre: "Coliseo", urlImage: '../assets/maravillas/coliseo.jpg' },

        
    ];

    const showMonument = (index) => {
        const section = document.createElement('section');
        section.classList.add('section-maravillas')
        const divImg = document.createElement('div');
        const h1 = document.createElement('h1');
        const btn = document.createElement('button');
        const img = document.createElement('img');



        h1.textContent = monumentos[index].nombre;
        btn.textContent = 'Siguiente';
        img.src = monumentos[index].urlImage;
        divImg.appendChild(img);

        btn.addEventListener('click', () => {
            index = (index + 1) % monumentos.length;
            h1.textContent = monumentos[index].nombre;
            img.src = monumentos[index].urlImage;

        });



        section.appendChild(divImg)
        section.appendChild(h1);
        section.appendChild(btn);

        return section;
    };

    const maravillaView = `
        <h1>Maravillas</h1>
        <p>Descubra las maravillas del <br> mundo</p> 
        <button class='btn-maravilla'> Conocer </button>
    `;

    const div = document.createElement('div');
    div.classList.add('home-title');
    div.classList.add('maravilla-title');
    div.innerHTML = maravillaView;

    div.querySelector('.btn-maravilla').addEventListener('click', () => {
        div.innerHTML = '';
        div.appendChild(showMonument(0)); 
    });

    return div;
};
