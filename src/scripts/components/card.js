// document.querySelectorAll('.card[data-url]').forEach(card => {
// 	card.addEventListener('click', e => {
// 		// Prevent triggering if the user clicked on a link or button inside
// 		const isInteractiveElement = e.target.closest('a, button');
// 		if (!isInteractiveElement) {
// 			window.location.href = card.dataset.url;
// 		}
// 	});
// });

function initCards() {
	document.querySelectorAll('.card[tabindex]').forEach(card => {
		card.addEventListener('keydown', e => {
		if (e.key === 'Enter') {
			const link = card.querySelector('a');
			if (link) link.click();
		}
		});
	});
}

// Run after DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initCards);
} else {
	initCards();
}

