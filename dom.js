const list = document.getElementById('list');
const first = list.firstElementChild.textContent;
const last = list.lastElementChild.textContent;
const second = first.nextElementSibling.textContent;
const fourth = last.previousElementSibling.textContent;
const third = list.children[2].textContent;

const text = `${first}, ${last}, ${second}, ${fourth}, ${third}`;

const modal = document.getElementById('modal');
modal.textContent = text;