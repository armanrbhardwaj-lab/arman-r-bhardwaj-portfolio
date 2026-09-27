const button = document.querySelector('.hamburger');
const nav = document.querySelector('.desktop-nav');
button?.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  if (open) {
    nav.style.display = 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '78px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '20px 23px';
    nav.style.background = '#f8f9fa';
    nav.style.borderBottom = '1px solid #cbd1d5';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
  } else {
    nav.style.display = '';
    nav.removeAttribute('style');
  }
});
document.querySelectorAll('.desktop-nav a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 800) { nav.classList.remove('mobile-open'); nav.removeAttribute('style'); }
}));
