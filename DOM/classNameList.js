// const elem = document.querySelector('div .a');
// const allClassOfElem = elem.className;
// console.log(allClassOfElem);
// elem.className = 'red';
// console.log(elem.className);
// 
// console.log(elem.classList.contains('red'));
// 
// elem.classList.add('yellow');
// console.log(elem.classList.contains('yellow'));
// elem.classList.remove('red');
// console.log(elem.classList.contains('red'));
// elem.classList.toggle('red');
// console.log(elem.classList.contains('red'));
// console.log(elem.classList.contains('yellow'));
// elem.classList.toggle('yellow');
// console.log(elem.classList.contains('yellow'));
// 
// const elem = document.querySelector('ul li');
// elem.style.color = 'red';
// console.log(elem.style.color);
// console.log(elem.style.marginTop);
// elem.style.marginTop = '200px';
// console.log(parseInt(elem.style.marginTop));
// elem.style.marginTop = '';
// console.log(elem.style.marginTop);
// 
// elem.style.cssText = `
    // margin-top: 200px;
    // background-color: green;
// `;
// 
// const styles = getComputedStyle(elem);
// console.log(styles);
// console.log(styles.fontSize);
// 
// const styles2 = getComputedStyle(elem, "::before" );
// console.log(styles.backgroundColor);

const elemAnchor = document.querySelector('.google');
const elemInput = document.querySelector('input')
console.log(elemAnchor.href);
console.log(elemInput.value);
//!!!!!! console.dir(elemInput);
console.log(elemAnchor.hasAttribute('class'));
console.log(elemAnchor.getAttribute('class'));
console.log(elemAnchor.removeAttribute('class'));
console.log((elemAnchor.getAttribute('class')));
console.log((elemAnchor.setAttribute('class', 'newClass')));
console.log((elemAnchor.getAttribute('class')));
console.log(parseInt(elemInput.dataset.size));
console.log(elemInput.dataset.size);
elemInput.dataset.size = '1920px';
console.log(parseInt(elemInput.dataset.size));
console.log(elemInput.dataset.size);
console.log(elemAnchor.tagName);
elemAnchor.hidden = true;
console.log(elemAnchor.hidden);


