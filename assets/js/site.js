/* Beyond The Platforms · site scripts (no dependencies) */

/* ---------- theme toggle (preference shared with /portfolio/) ---------- */
(() => {
	const root = document.documentElement;
	const button = document.querySelector("[data-theme-toggle]");
	if (!button) return;
	const label = () => {
		const next = root.dataset.theme === "light" ? "dark" : "light";
		button.setAttribute("aria-label", `Switch to ${next} theme`);
		button.title = `Switch to ${next} theme`;
	};
	button.addEventListener("click", () => {
		const next = root.dataset.theme === "light" ? "dark" : "light";
		root.dataset.theme = next;
		try { localStorage.setItem("btp-theme", next); } catch (e) {}
		label();
	});
	label();
})();

/* ---------- home intro: logo in the centre, then into the nav (about 2 s) ---------- */
(() => {
	const root = document.documentElement;
	const intro = document.getElementById("intro");
	if (!intro || !root.classList.contains("intro-play")) return;
	try { sessionStorage.setItem("btp-intro-seen", "1"); } catch (e) {}

	const logo = intro.querySelector("[data-intro-logo]");
	const reveal = intro.querySelector("[data-intro-reveal]");
	const star = intro.querySelector("[data-intro-star]");
	const skip = intro.querySelector(".intro__skip");
	const visible = (box) => [...box.querySelectorAll("img")].find((img) => getComputedStyle(img).display !== "none");
	const anims = [];
	let timer = null;
	let done = false;
	let started = false;

	const finish = () => {
		if (done) return;
		done = true;
		clearTimeout(timer);
		anims.forEach((a) => a.cancel());
		root.classList.remove("intro-play", "intro-release");
		intro.remove();
		["click", "keydown", "wheel", "touchmove"].forEach((ev) => window.removeEventListener(ev, finish));
	};
	intro.addEventListener("click", finish);
	["keydown", "wheel", "touchmove"].forEach((ev) => window.addEventListener(ev, finish, { passive: true }));
	if (!logo.animate) { finish(); return; }

	const start = () => {
		if (done || started) return;
		started = true;
		// 1) reveal left to right, from blurred to sharp
		anims.push(reveal.animate(
			[{ clipPath: "inset(0 100% 0 0)", filter: "blur(10px)", opacity: 0.3 },
			 { clipPath: "inset(0 0% 0 0)", filter: "blur(0px)", opacity: 1 }],
			{ duration: 800, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" }));
		// 2) the star glows
		anims.push(star.animate(
			[{ opacity: 0, transform: "translate(-50%,-50%) scale(0)" },
			 { opacity: 1, transform: "translate(-50%,-50%) scale(1.15)", offset: 0.45 },
			 { opacity: 0, transform: "translate(-50%,-50%) scale(.6)" }],
			{ duration: 650, delay: 700, easing: "ease-out", fill: "forwards" }));
		// 3) the logo flies to the exact position of the nav logo
		timer = setTimeout(() => {
			const target = visible(document.querySelector(".nav .brand"));
			if (!target) { finish(); return; }
			const from = logo.getBoundingClientRect();
			const to = target.getBoundingClientRect();
			const scale = to.width / from.width;
			if (skip) skip.style.opacity = 0;
			const fly = logo.animate(
				[{ transform: "translate(0,0) scale(1)" },
				 { transform: `translate(${to.left - from.left}px,${to.top - from.top}px) scale(${scale})` }],
				{ duration: 700, easing: "cubic-bezier(.7,0,.2,1)", fill: "forwards" });
			const fade = intro.animate(
				[{ backgroundColor: getComputedStyle(intro).backgroundColor }, { backgroundColor: "rgba(0,0,0,0)" }],
				{ duration: 450, delay: 250, easing: "ease-out", fill: "forwards" });
			anims.push(fly, fade);
			// let the page content rise while the logo is still flying
			setTimeout(() => root.classList.add("intro-release"), 250);
			fly.onfinish = finish;
		}, 1300);
	};
	// start when the logo image is ready, at most after 1.5 s
	const img = visible(reveal);
	if (img && !img.complete) {
		img.addEventListener("load", start, { once: true });
		setTimeout(start, 1500);
	} else start();
})();

/* ---------- sticky nav background + mobile menu ---------- */
(() => {
	const nav = document.querySelector("[data-nav]");
	const toggle = document.querySelector("[data-menu-toggle]");
	const links = document.getElementById("primary-navigation");
	if (!nav) return;

	const onScroll = () => nav.classList.toggle("nav--solid", window.scrollY > 16);
	onScroll();
	window.addEventListener("scroll", onScroll, { passive: true });

	if (!toggle || !links) return;
	const setOpen = (open, returnFocus = false) => {
		document.body.classList.toggle("menu-open", open);
		toggle.setAttribute("aria-expanded", String(open));
		toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
		if (returnFocus) toggle.focus();
	};
	toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
	links.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && document.body.classList.contains("menu-open")) setOpen(false, true);
	});
	window.matchMedia("(min-width: 901px)").addEventListener("change", () => setOpen(false));
})();

/* ---------- scroll reveal ---------- */
(() => {
	const items = document.querySelectorAll("[data-reveal]");
	if (!("IntersectionObserver" in window)) {
		items.forEach((el) => el.classList.add("is-in"));
		return;
	}
	const io = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-in");
				io.unobserve(entry.target);
			}
		});
	}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
	items.forEach((el, i) => {
		if (el.classList.contains("card")) el.style.transitionDelay = `${(i % 3) * 70}ms`;
		io.observe(el);
	});
})();

/* ---------- spotlight that follows the mouse on cards ---------- */
(() => {
	document.querySelectorAll(".card").forEach((card) => {
		card.addEventListener("mousemove", (e) => {
			const r = card.getBoundingClientRect();
			card.style.setProperty("--mx", `${e.clientX - r.left}px`);
			card.style.setProperty("--my", `${e.clientY - r.top}px`);
		});
	});
})();

/* ---------- reading progress bar on articles ---------- */
(() => {
	const bar = document.querySelector("[data-progress]");
	const content = document.querySelector(".post-content");
	if (!bar || !content) return;
	let ticking = false;
	const update = () => {
		const r = content.getBoundingClientRect();
		const total = r.height - window.innerHeight * 0.6;
		const done = Math.min(1, Math.max(0, -r.top / Math.max(total, 1)));
		bar.style.transform = `scaleX(${done})`;
		ticking = false;
	};
	window.addEventListener("scroll", () => {
		if (!ticking) { ticking = true; requestAnimationFrame(update); }
	}, { passive: true });
	update();
})();

/* ---------- table of contents (articles over 800 words) ---------- */
(() => {
	const toc = document.querySelector(".post-toc");
	const postContent = document.querySelector(".post-content");
	if (!toc || !postContent) return;

	const list = toc.querySelector(".post-toc-list");
	const headings = [...postContent.querySelectorAll("h2[id], h3[id]")]
		.filter((h) => h.id && h.textContent.trim());
	if (!list || headings.filter((h) => h.tagName === "H2").length < 3) return;

	let sectionItem = null;
	let subsectionList = null;
	const linkFor = new Map();
	for (const heading of headings) {
		const item = document.createElement("li");
		const link = document.createElement("a");
		link.href = `#${encodeURIComponent(heading.id)}`;
		link.textContent = heading.textContent.trim();
		item.append(link);
		linkFor.set(heading, link);
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

	if ("IntersectionObserver" in window) {
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					linkFor.forEach((a) => a.classList.remove("is-active"));
					linkFor.get(entry.target)?.classList.add("is-active");
				}
			});
		}, { rootMargin: "-20% 0px -70% 0px" });
		headings.forEach((h) => io.observe(h));
	}
})();

/* ---------- blog: full-text search + tag filter (?q= and ?tag= work too) ---------- */
(() => {
	const search = document.querySelector(".blog-search");
	const posts = document.getElementById("blog-posts");
	if (!search || !posts) return;

	const input = search.querySelector("input");
	const status = search.querySelector('[role="status"]');
	const empty = document.getElementById("blog-search-empty");
	const tagBar = document.querySelector("[data-tag-filter]");
	if (!input || !status || !empty) return;

	const normalize = (text) => text.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase();
	const articles = [...posts.querySelectorAll("[data-search]")].map((element) => ({
		element,
		text: normalize(element.dataset.search),
		tags: (element.dataset.tags || "").split("|").map(normalize),
	}));
	let activeTag = "";

	function render() {
		const terms = normalize(input.value).split(/\s+/).filter(Boolean);
		const tag = normalize(activeTag);
		let count = 0;
		for (const a of articles) {
			const ok = terms.every((t) => a.text.includes(t)) && (!tag || a.tags.includes(tag));
			a.element.hidden = !ok;
			if (ok) {
				count++;
				a.element.classList.add("is-in");
			}
		}
		status.textContent = `${count} ${count === 1 ? "article" : "articles"}`;
		empty.hidden = count !== 0;
		if (tagBar) {
			tagBar.querySelectorAll("[data-tag]").forEach((b) => b.classList.toggle("chip--on", b.dataset.tag === activeTag));
		}
		const url = new URL(window.location.href);
		input.value ? url.searchParams.set("q", input.value) : url.searchParams.delete("q");
		activeTag ? url.searchParams.set("tag", activeTag) : url.searchParams.delete("tag");
		window.history.replaceState(window.history.state, "", url);
	}

	const params = new URLSearchParams(window.location.search);
	input.value = params.get("q") || "";
	activeTag = params.get("tag") || "";

	search.addEventListener("submit", (e) => e.preventDefault());
	input.addEventListener("input", render);
	input.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && input.value) {
			e.preventDefault();
			input.value = "";
			render();
		}
	});
	if (tagBar) {
		tagBar.addEventListener("click", (e) => {
			const b = e.target.closest("[data-tag]");
			if (!b) return;
			activeTag = b.dataset.tag === activeTag ? "" : b.dataset.tag;
			render();
		});
		tagBar.hidden = false;
	}
	search.hidden = false;
	render();
})();
