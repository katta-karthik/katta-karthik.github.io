const header = document.querySelector('.site-header');
const updateHeaderOffset = () => {
  document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
};
updateHeaderOffset();
new ResizeObserver(updateHeaderOffset).observe(header);

const scene = document.querySelector('.agent-scene');
const motion = scene.querySelector('.scene-motion');

motion.hidden = false;
motion.addEventListener('click', () => {
  const paused = scene.classList.toggle('is-paused');
  motion.textContent = paused ? '▶' : 'Ⅱ';
  motion.setAttribute('aria-label', paused ? 'Resume animation' : 'Pause animation');
});

// Keep the illustration idle while visitors read the rest of the page.
const sceneObserver = new IntersectionObserver(([entry]) => {
  scene.classList.toggle('is-offscreen', !entry.isIntersecting);
});
sceneObserver.observe(scene);
