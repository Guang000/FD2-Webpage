const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const copyButton = document.querySelector('.copy-button');
copyButton?.addEventListener('click', async () => {
  const citation = document.querySelector('#bibtex')?.textContent ?? '';
  await navigator.clipboard.writeText(citation);
  copyButton.textContent = 'Copied ✓';
  window.setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 1800);
});

const lightbox = document.querySelector('.lightbox');
document.querySelector('.figure-button')?.addEventListener('click', () => {
  lightbox?.showModal();
  document.body.classList.add('no-scroll');
});
document.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox?.close());
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox?.addEventListener('close', () => document.body.classList.remove('no-scroll'));
