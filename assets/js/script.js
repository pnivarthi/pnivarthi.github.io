document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navbar');
const navLinks = [...document.querySelectorAll('.navbar a')];
const sections = [...document.querySelectorAll('main section[id]')];
const scrollTopButton = document.querySelector('.scroll-top');
const mobileLayout = window.matchMedia('(max-width: 980px)');

function closeMenu(returnFocus = false) {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  navigation.inert = mobileLayout.matches;
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  navigation.inert = !isOpen;
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navLinks.forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
mobileLayout.addEventListener('change', () => closeMenu());
closeMenu();

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-25% 0px -55% 0px' });
  sections.forEach(section => sectionObserver.observe(section));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('in-view'));
}
function updateScrollButton() {
  scrollTopButton.classList.toggle('visible', window.scrollY > 650);
}
window.addEventListener('scroll', updateScrollButton, { passive: true });
updateScrollButton();
document.getElementById('year').textContent = new Date().getFullYear();
