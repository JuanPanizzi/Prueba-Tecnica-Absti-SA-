export const Error = () => {

    const errorView = `
    <h1>Error 404 - url no encontrada</h1>
    `;

    const div = document.createElement('div');
    div.classList.add('error-title');
    div.innerHTML = errorView;

    return div;
}