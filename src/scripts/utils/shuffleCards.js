export function shuffleCards() {
  document.querySelectorAll('[data-card-row="true"][data-count]').forEach((row) => {
    const items = Array.from(row.querySelectorAll('.card-row__item'));
    const count = Math.min(parseInt(row.dataset.count, 10) || items.length, items.length);

    // Create a shuffled copy
    const shuffled = [...items].sort(() => Math.random() - 0.5);

    // Show only first `count`
    shuffled.forEach((item, index) => {
      item.style.display = index < count ? '' : 'none';
    });
  });
}

// Run after DOM is ready
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", shuffleCards);
} else {
	shuffleCards();
}