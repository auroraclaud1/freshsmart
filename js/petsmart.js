/**
 * FreshSmart Web Reconstruction - Sparky Components Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.sparky-c-header');
    const searchInput = document.querySelector('.sparky-c-search__input');
    const searchBtn = document.querySelector('.sparky-c-search__button');

    // Efecto de Header pegajoso al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sparky-c-header--scrolled');
        } else {
            header.classList.remove('sparky-c-header--scrolled');
        }
    });

    // Lógica básica de búsqueda
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching FreshSmart for: ${query}`);
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // Interacción suave para las imágenes de Fresh
    const freshImgs = document.querySelectorAll('.sparky-c-fresh-promo__img');
    freshImgs.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'rotate(0deg) scale(1.05)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'rotate(2deg) scale(1)';
        });
    });

    console.log('FreshSmart Sparky Core Initialized');
});
