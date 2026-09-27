const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

menu?.addEventListener('click', () => {
  const open = nav.dataset.open === 'true';
  nav.dataset.open = String(!open);
  nav.style.display = open ? '' : 'flex';
  if (!open) {
    nav.style.position = 'absolute';
    nav.style.top = '74px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '18px 24px';
    nav.style.background = '#07111f';
    nav.style.borderBottom = '1px solid #20344d';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
  }
});

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 850) {
      nav.dataset.open = 'false';
      nav.style.display = '';
    }
  });
});
