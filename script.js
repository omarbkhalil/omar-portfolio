const header = document.querySelector('[data-header]');
const year = document.querySelector('#year');
const reveals = document.querySelectorAll('.reveal');

if (year) year.textContent = new Date().getFullYear();

let headerFrame = 0;
const syncHeader = () => {
  headerFrame = 0;
  if (header) header.classList.toggle('scrolled', window.scrollY > 16);
};

const requestHeaderSync = () => {
  if (!headerFrame) headerFrame = requestAnimationFrame(syncHeader);
};

syncHeader();
window.addEventListener('scroll', requestHeaderSync, { passive: true });

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px 8% 0px', threshold: 0.08 });

  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in-view'));
}
