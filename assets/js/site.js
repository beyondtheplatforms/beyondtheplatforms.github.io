(() => {
	const menuToggle = document.querySelector(".menu-toggle");
	const navigation = document.getElementById("primary-navigation");

	if (!menuToggle || !navigation) return;

	const mobileQuery = window.matchMedia("(max-width: 900px)");
	let lastFocusedElement = document.activeElement;

	function setMenuOpen(isOpen, returnFocus = false) {
		document.body.classList.toggle("menu-open", isOpen);
		menuToggle.setAttribute("aria-expanded", String(isOpen));
		menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
		if (returnFocus) menuToggle.focus();
	}

	menuToggle.addEventListener("click", () => {
		setMenuOpen(!document.body.classList.contains("menu-open"));
	});

	navigation.addEventListener("click", (event) => {
		if (mobileQuery.matches && event.target.closest("a")) setMenuOpen(false);
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
			event.preventDefault();
			setMenuOpen(false, true);
		}
	});

	document.addEventListener("click", (event) => {
		if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
			setMenuOpen(false);
		}
	});

	document.addEventListener("focusin", (event) => {
		lastFocusedElement = event.target;
	});

	mobileQuery.addEventListener("change", () => {
		setMenuOpen(false, mobileQuery.matches && navigation.contains(lastFocusedElement));
	});

	setMenuOpen(false);
	document.body.classList.add("menu-ready");
})();
