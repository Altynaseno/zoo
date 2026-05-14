// 1. Array of data with corrected images
const zooAnimals = [
    { name: "Lion", species: "Mammal", img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=300&h=200&auto=format&fit=crop" },
    { name: "Eagle", species: "Bird", img: "https://img.freepik.com/free-psd/bald-american-eagle-isolated_23-2151190901.jpg?semt=ais_hybrid&w=740&q=80" },
    { name: "Cobra", species: "Reptile", img: "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?q=80&w=300&h=200&auto=format&fit=crop" },
    { name: "Tiger", species: "Mammal", img: "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?q=80&w=300&h=200&auto=format&fit=crop" }
];

document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('animal-list');
    const searchInput = document.getElementById('animal-search');
    const contactForm = document.getElementById('contact-form');

    // Функция для отрисовки карточек (Requirement: Functions & DOM Manipulation)
    function renderAnimals(data) {
        listContainer.innerHTML = '';
        // Цикл для обработки данных (Requirement: Loops)
        data.forEach(animal => {
            const card = document.createElement('div');
            card.className = 'col-md-3 mb-4';
            card.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${animal.img}" class="card-img-top" alt="${animal.name}">
                    <div class="card-body text-center">
                        <h5>${animal.name}</h5>
                        <span class="badge bg-info text-dark">${animal.species}</span>
                    </div>
                </div>
            `;
            listContainer.appendChild(card);
        });
    }

    // Изначальный вывод всех животных
    renderAnimals(zooAnimals);

    // Слушатель 1: Поиск (Requirement: Event Listener keyup)
    searchInput.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = zooAnimals.filter(a => a.name.toLowerCase().includes(query));
        renderAnimals(filtered);
    });

    // Слушатель 2: Форма (Requirement: Event Listener submit & Validation)
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email-input').value;
        const feedback = document.getElementById('email-feedback');
        const type = document.getElementById('msg-type').value;

        // Проверка условий (Requirement: If-Else)
        if (!email.includes('@')) {
            feedback.innerText = "Error: Invalid email format.";
        } else {
            feedback.innerText = "";
            
            // Логика выбора (Requirement: Switch)
            switch(type) {
                case 'emergency':
                    alert("Sending urgent alert to zoo staff!");
                    break;
                default:
                    alert("Message sent. Thank you!");
            }
        }
    });

    // Слушатель 3: Клик по карточкам (Requirement: Event Listener click)
    listContainer.addEventListener('click', (e) => {
        if (e.target.closest('.card')) {
            e.target.closest('.card').style.borderColor = '#0d6efd';
        }
    });
});