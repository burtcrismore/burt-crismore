document.addEventListener("DOMContentLoaded", () => {
	const toggleButton = document.getElementById("theme-toggle");
	const sunIcon = document.querySelector("#theme-toggle .icon-sun");
	const moonIcon = document.querySelector("#theme-toggle .icon-moon");

	function updateIcons(theme) {
		console.log("Theme:", theme);
		sunIcon.classList.toggle("none", theme === "dark");
		moonIcon.classList.toggle("none", theme === "light");
	}

	const savedTheme = localStorage.getItem("theme") || "light";
	document.documentElement.setAttribute("data-theme", savedTheme);
	updateIcons(savedTheme);

	toggleButton.addEventListener("click", () => {
		const currentTheme = document.documentElement.getAttribute("data-theme");
		const newTheme = currentTheme === "dark" ? "light" : "dark";
		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
		updateIcons(newTheme);
	});
});