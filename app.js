import { home } from './views/home.js';

const router = {
  '/': home,
  '/about': about,
  '/test': test,
};

function route() {
  const path = window.location.hash.slice(1);
  const handler = router[path];
  if (handler) {
    handler();
  }
}

function about() {
  document.getElementById('content').innerHTML = `
    <h1>About</h1>
    <p>This is the about page.</p>
  `;
}

function test() {
  document.getElementById('content').innerHTML = `
    <h1>Test</h1>
    <p>This is the IQ test page.</p>
  `;
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
