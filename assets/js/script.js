const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navbar');
const navLinks = [...document.querySelectorAll('.navbar a[href^="#"]')];
const mobileLayout = window.matchMedia('(max-width: 980px)');

function closeMenu(returnFocus = false) {
  navigation.classList.remove('open');
  navigation.inert = mobileLayout.matches;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  menuButton.lastElementChild.textContent = '+';
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  navigation.inert = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuButton.lastElementChild.textContent = open ? '−' : '+';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) closeMenu(true);
});
mobileLayout.addEventListener('change', () => closeMenu());
closeMenu();

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -70% 0px' });
  document.querySelectorAll('main section[id], main article[id]').forEach(section => sectionObserver.observe(section));
}
document.getElementById('year').textContent = new Date().getFullYear();
