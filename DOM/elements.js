// const list = document.querySelectorAll('li');
// for (let li of list) {
    // console.log(li);
// }
// 
// const third = document.querySelector('.third');
// console.log(third);
// 
// const anhor = document.querySelector("li>.a");
// console.log(anhor);
// 
// const anhorGoogle = document.querySelector("div>.a");
// console.log(anhorGoogle);
// 
// const dataItem = document.querySelectorAll('[data-item="77"]');
// console.log(dataItem);
// console.log(typeof dataItem);
// 

// const allLi = document.querySelectorAll("li");
// const firstLi = allLi[0].querySelectorAll("li");
// console.log(firstLi);

// const allLi = document.querySelectorAll("li");
// console.log(allLi[0].querySelectorAll('li'));
// console.log(allLi.length);
// console.log(typeof allLi);

// const elem = document.querySelector('.two');
// const parent = elem.closest('.firstLi');
// const parent1 = elem.closest('.ol');
// console.log(parent);
// console.log(parent1);

// const allLi = document.querySelector('li');

// for( let mod of allLi) {
    // if(mod.matches("[class$='two_red']"))console.log("Mod is RED");
    // else if (mod.matches("[class$='third_green']"))console.log("Mod is GREEN");
    // else console.log("Mod was not defined");
// }

// console.log(allLi.nextElementSibling);

// const elementsH2 = document.querySelectorAll('h2');
// 
// for(let elem of elementsH2) {
    // elem.innerHTML = `${elem.innerHTML.toUpperCase()}`;
        // console.log(elem.innerHTML);
// }
// 
// console.log(elementsH2[0].innerHTML);

// const elementsH2 = document.querySelectorAll('li');
// 
// for(let elem of elementsH2) {
    // // elem.innerHTML = `${elem.innerHTML.toUpperCase()}<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur 
// nobis, excepturi adipisci quisquam blanditiis eligendi nesciunt, facere, nulla 
// voluptatem officia ratione non. Placeat debitis ad, laudantium necessitatibus 
// aspernatur obcaecati!</p>`;
        // console.log(elem.innerHTML);
// }

// const elementsH2 = document.querySelectorAll('li');
// 
// for(let elem of elementsH2) {
    // // elem.outerHTML = `<p style="color: red"><strong>Lorem</strong> ipsum dolor sit 
// amet consectetur adipisicing elit. Autem aspernatur 
// nobis, excepturi adipisci quisquam blanditiis eligendi nesciunt, facere, nulla 
// voluptatem officia ratione non. Placeat debitis ad, laudantium necessitatibus 
// aspernatur obcaecati!</p>`;
// 
        // console.log(elem.outerHTML);
// }

// const elementsH2 = document.querySelectorAll('li');
// 
// for(let elem of elementsH2) {
    // // elem.textContent = `<p style="color: red"><strong>Lorem</strong> ipsum dolor 
// sit 
// amet consectetur adipisicing elit. Autem aspernatur 
// nobis, excepturi adipisci quisquam blanditiis eligendi nesciunt, facere, nulla 
// voluptatem officia ratione non. Placeat debitis ad, laudantium necessitatibus 
// aspernatur obcaecati!</p>`;
// 
        // console.log(elem.textContent);
// }

// const textElem = document.querySelector('div');
// console.log(textElem);
// 
// const nextSibling = textElem.nextSibling;
// console.log(nextSibling);
// 
// const textOfNextSibling = nextSibling.data;
// console.log(textOfNextSibling);
// 
// nextSibling.data = "Hello, World!";
// console.log(nextSibling.data);
// 

// const newElement = document.createElement('div');
// console.log(newElement);
// newElement.innerHTML = "Hello, World!";
// console.log(newElement.innerHTML);
// 
// const addNode = document.createTextNode('Main God!');
// console.log(addNode);

const getNeedElem = document.querySelector('h1');
const createElem = document.createElement('div');
createElem.innerHTML = 'Hello, World!';
const createElemAfter = document.createElement('div');
createElemAfter.innerHTML = 'Hello, World!';
getNeedElem.before(createElem);
getNeedElem.after(createElemAfter);

const getNeedElemDiv = document.querySelector('.div');
const createElemH2 = document.createElement('h2');
createElemH2.innerHTML = "Before content!";
const createElemH2A = document.createElement('h2');
createElemH2A.innerHTML = "After content!";
getNeedElemDiv.prepend(createElemH2);
getNeedElemDiv.append(createElemH2A);

getNeedElemDiv.insertAdjacentHTML('beforebegin', `<p>insertAdjacentHTML - beforebegin</p>`);

getNeedElemDiv.insertAdjacentHTML('afterbegin', `<p>insertAdjacentHTML - afterbegin</p>`);

getNeedElemDiv.insertAdjacentHTML('beforeend', `<p>insertAdjacentHTML - beforeend</p>`);

getNeedElemDiv.insertAdjacentHTML('afterend', `<p>insertAdjacentHTML - afterend</p>`);



const titileH1 = document.querySelector('.h2');
const cloneH2 = titileH1.cloneNode(true);
const titileAnother = document.querySelector('.js');
const h1TitleToNewPlace = document.querySelector('ol');
const h1TitleToAnotherPlace = document.querySelector('ul');
h1TitleToNewPlace.prepend(titileH1);
h1TitleToAnotherPlace.after(cloneH2);
h1TitleToAnotherPlace.append(titileAnother);
const removeH1 = document.querySelector('h1').remove();
// removeH1.remove();