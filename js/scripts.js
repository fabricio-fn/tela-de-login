// Vou fazer algumas funcionalidades depois

// Modo dark

const modoescuro = document.getElementById('mododark');

modoescuro.addEventListener('click', () => {
    const mudarparadark = document.getElementById('formulario');
    if (modoescuro.classList.contains('bi-moon-fill')) {
        modoescuro.classList.remove('bi-moon-fill');
        modoescuro.classList.add('bi-sun-fill');

        mudarparadark.classList.add('dark');
    } else {
        modoescuro.classList.add('bi-moon-fill');
        modoescuro.classList.remove('bi-sun-fill');
        mudarparadark.classList.remove('dark');
    }
});