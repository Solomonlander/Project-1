// Footer year & last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
menuBtn.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Attractions page filtering
const attractions = [
    { name: 'Ibeno Beach', type: 'beach', img: 'images/beach.webp', desc: 'One of the longest beaches in West Africa.' },
    { name: 'Ibom Plaza', type: 'culture', img: 'images/ibom-plaza.webp', desc: 'A cultural and social hub.' }
];

const container = document.getElementById('attractions-container');
if (container) {
    function displayAttractions(filter) {
        container.innerHTML = '';
        const filtered = filter === 'all' ? attractions : attractions.filter(a => a.type === filter);
        filtered.forEach(a => {
            container.innerHTML += `
        <article class="card">
          <img src="${a.img}" alt="${a.name}" loading="lazy">
          <h3>${a.name}</h3>
          <p>${a.desc}</p>
        </article>
      `;
        });
    }
    displayAttractions('all');

    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            displayAttractions(btn.dataset.filter);
        });
    });
}

// Contact form localStorage
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };
        localStorage.setItem('contactForm', JSON.stringify(formData));
        document.getElementById('form-status').textContent = 'Thank you! Your message has been saved.';
        form.reset();
    });
}

