const router = {
  "/": home,
  "/about": about,
  "/contact": contact,
};

function route() {
  const path = window.location.hash.slice(1);
  const handler = router[path];
  if (handler) {
    handler();
  }
}

function home() {
  document.getElementById("content").innerHTML = `
    <h1>Welcome to my SPA!</h1>
    <p>This is the home page.</p>
  `;
}

function about() {
  document.getElementById("content").innerHTML = `
    <h1>About</h1>
    <p>This is the about page.</p>
  `;
}

function contact() {
  document.getElementById("content").innerHTML = `
    <h1>Contact</h1>
    <p>This is the contact page.</p>
  `;
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
