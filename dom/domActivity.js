const header = document.querySelector('header');
const sec = document.querySelectorAll('section');
const currentSec = document.querySelector('.current-section');
const afterSec = document.querySelector('.next-section');
const h2node = currentSec.previousElementSibling.children[0];
const div2 = currentSec.parentElement;
const allH2secs = Array.from(document.querySelectorAll('h2')).map(function(h2) {return h2.parentElement});

console.log(header);
console.log(sec);
console.log(currentSec);
console.log(afterSec);
console.log(h2node);
console.log(div2);
console.log(allH2secs);