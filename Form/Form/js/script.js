let receiveBtn = document.querySelector('#receive');
let modalFrom = document.querySelector('.modal');
receiveBtn.addEventListener('click', () => {    
    modalFrom.style.display = 'block';
});

let btnClose = document.querySelector('.close');
btnClose.addEventListener('click', () => {   
    modalFrom.style.display = 'none';
});

let inputName = document.querySelector('.contactform_name');
let textArea = document.querySelector('textarea');
inputName.addEventListener('input', () => {
    textArea.value = `My name ${inputName.value}. And I want ask:`;
});
