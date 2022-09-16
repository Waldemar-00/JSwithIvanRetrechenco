const windowWidth = window.innerWidth;
console.log(`Width of browser window: ${windowWidth}px`);
console.log(navigator.userAgent);

if(navigator.userAgent.includes('Chrome')) {
    console.log("Браузер Хром");
} else if (navigator.userAgent.includes('FireFox')) {
    console.log("Браузер ЛИСА");
}else if (navigator.userAgent.includes('Edge')) {
    console.log("Браузер EDGE");
}
console.log(navigator.platform);
console.log(location.href);
// setTimeout(function () { location.href = "https://www.google.com" }, 10000);
// // setTimeout(function () { location.href = "https://www.bing.com/?mkt=en-us" }, 20000);
// history.back();
// history.forward();
// 

// const documentElement = document.documentElement;
// const documentBody = document.body;
// console.log(document.head);
// console.log(document.body);
// console.log(documentElement);//Обращение к HTML, как - 'document.html';
// console.log(documentElement.firstChild);
// console.log(documentElement.lastChild);
// console.log(documentBody.firstChild);
// console.log(documentBody.lastChild);

// console.log(documentElement.childNodes);
// console.log(documentBody.childNodes);
// console.log(documentBody.hasChildNodes());
// const nodes = document.body.childNodes;
// for (let node of nodes) {
    // console.log(node);
// }
// console.log(document.body.previousSibling);
// console.log(document.body.nextSibling);
// console.log(document.body.parentNode);
// console.log(document.documentElement.parentNode);
// console.log(document.documentElement.children);

// console.log(document.body.children);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.body.previousElementSibling);
// console.log(document.body.nextElementSibling);
// console.log(document.body.parentElement);
// 