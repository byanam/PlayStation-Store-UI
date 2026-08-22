/**
 * PlayStation Store Interactive Controller
 */
document.addEventListener('DOMContentLoaded', () => {
  let cartCount = 0;
  const cartBadge = document.getElementById('cartCount');
  const toast = document.getElementById('toast');
  let toastTimer = null;

  // Add to cart buttons
  const buyButtons = document.querySelectorAll('.card__btn');
  buyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.card');
      const gameTitle = card ? card.dataset.game || card.querySelector('.card__title').textContent : 'Game';
      
      cartCount++;
      cartBadge.textContent = cartCount;
      cartBadge.classList.add('pulse');
      setTimeout(() => cartBadge.classList.remove('pulse'), 300);

      showToast(`Added "${gameTitle}" to your PlayStation cart!`);
    });
  });

  // Floating Hero Cards Interactivity
  const heroCovers = document.querySelectorAll('.game-cover');
  heroCovers.forEach((cover) => {
    cover.addEventListener('click', () => {
      const title = cover.dataset.title || 'PlayStation Game';
      showToast(`Selected ${title}`);
    });
  });

  // Toast Helper
  function showToast(message) {
    if (!toast) return;
    if (toastTimer) clearTimeout(toastTimer);

    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d287" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
});
