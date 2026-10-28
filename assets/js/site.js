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

(() => {
	const toc = document.querySelector(".post-toc");
	const postContent = document.querySelector(".post-content");
	if (!toc || !postContent) return;

	const list = toc.querySelector(".post-toc-list");
	const headings = [...postContent.querySelectorAll("h2[id], h3[id]")]
		.filter(heading => heading.id && heading.textContent.trim());
	if (!list || headings.filter(heading => heading.tagName === "H2").length < 3) return;

	let sectionItem = null;
	let subsectionList = null;
	for (const heading of headings) {
		const item = document.createElement("li");
		const link = document.createElement("a");
		link.href = `#${encodeURIComponent(heading.id)}`;
		link.textContent = heading.textContent.trim();
		item.append(link);
		heading.tabIndex = -1;

		if (heading.tagName === "H3" && sectionItem) {
			if (!subsectionList) {
				subsectionList = document.createElement("ol");
				sectionItem.append(subsectionList);
			}
			subsectionList.append(item);
		} else {
			list.append(item);
			sectionItem = heading.tagName === "H2" ? item : null;
			subsectionList = null;
		}
	}

	toc.hidden = false;
})();

(() => {
	const search = document.querySelector(".blog-search");
	const posts = document.getElementById("blog-posts");
	if (!search || !posts) return;

	const input = search.querySelector("input");
	const status = search.querySelector('[role="status"]');
	const empty = document.getElementById("blog-search-empty");
	if (!input || !status || !empty) return;

	const normalize = text => text.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase();
	const articles = [...posts.querySelectorAll("[data-search]")]
		.map(element => ({ element, text: normalize(element.dataset.search) }));

	function filterPosts() {
		const terms = normalize(input.value).split(/\s+/).filter(Boolean);
		let count = 0;
		for (const article of articles) {
			const matches = terms.every(term => article.text.includes(term));
			article.element.hidden = !matches;
			if (matches) count++;
		}
		const message = `${count} ${count === 1 ? "article" : "articles"}`;
		if (status.textContent !== message) status.textContent = message;
		empty.hidden = count !== 0;
		if (window.history.state?.blogSearchQuery !== input.value) {
			window.history.replaceState({ ...window.history.state, blogSearchQuery: input.value }, "");
		}
	}

	function restoreSearch() {
		if (typeof window.history.state?.blogSearchQuery === "string") {
			input.value = window.history.state.blogSearchQuery;
		}
		filterPosts();
	}

	search.addEventListener("submit", event => event.preventDefault());
	input.addEventListener("input", filterPosts);
	input.addEventListener("keydown", event => {
		if (event.key === "Escape" && input.value) {
			event.preventDefault();
			input.value = "";
			filterPosts();
		}
	});
	window.addEventListener("pageshow", restoreSearch);
	restoreSearch();
	search.hidden = false;
})();
