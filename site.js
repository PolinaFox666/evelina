// Only subtle scroll reveals. The archive clue is kept in index.html source.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const pieces = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) {
  pieces.forEach((node) => node.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: .07, rootMargin: '0px 0px 35px 0px' });
  pieces.forEach((node) => observer.observe(node));
}
