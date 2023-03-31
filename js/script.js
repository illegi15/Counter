'use strict'

window.onload = () => {

    let body = document.body;
    
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    body.prepend(wrapper);

    let main = document.createElement('div');
    main.classList.add('main');
    wrapper.appendChild(main);

    let counterField = document.createElement('p');
    counterField.classList.add('main-counter-field');
    counterField.textContent = 0;
    main.appendChild(counterField);

    let addButton = document.createElement('button');
    addButton.classList.add('main-add-button');
    addButton.textContent = 'Добавить';
    main.appendChild(addButton);

    let resetButton = document.createElement('button');
    resetButton.classList.add('main-reset-button');
    resetButton.textContent = 'Очистить';
    main.appendChild(resetButton);

    let counter = 0;

    addButton.addEventListener('click', () => {

        counterField.textContent = ++counter;
    });

    resetButton.addEventListener('click', () => {

        counter = 0;
        counterField.textContent = 0;
    })
}