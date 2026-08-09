(() => {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data || !data.person || !Array.isArray(data.projects)) {
    console.error("Portfolio data is missing or malformed.");
    return;
  }

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  function setText(selector, value) {
    const element = qs(selector);
    if (element && value) element.textContent = value;
  }

  function setLink(selector, href) {
    const element = qs(selector);
    if (element && href) element.href = href;
  }

  function populatePerson() {
    const { person } = data;
    document.title = `${person.name} — Portfolio`;
    setText("#brand-name", person.name);
    setText("#hero-eyebrow", person.role);
    setText("#hero-title", person.headline);
    setText("#hero-summary", person.summary);
    setText("#portrait-caption", person.availability);
    setText("#footer-name", person.name);

    setLink("#nav-github", person.github);
    setLink("#hero-github", person.github);
    setLink("#nav-contact", `mailto:${person.email}`);
    setLink("#contact-button", `mailto:${person.email}`);

    const photo = qs("#profile-photo");
    if (photo) {
      photo.src = person.photo;
      photo.alt = person.photoAlt || `Portrait of ${person.name}`;
    }

    const facts = qs("#quick-facts");
    if (facts) {
      facts.innerHTML = person.facts.map((fact) => `
        <li>
          <strong>${escapeHtml(fact.value)}</strong>
          <span>${escapeHtml(fact.label)}</span>
        </li>
      `).join("");
    }

    const footerLinks = qs("#footer-links");
    if (footerLinks) {
      footerLinks.innerHTML = person.links.map((link) => {
        const external = /^https?:/i.test(link.url);
        return `<a href="${escapeAttribute(link.url)}" ${external ? 'target="_blank" rel="noreferrer"' : ""}>${escapeHtml(link.label)}</a>`;
      }).join("");
    }
  }

  function renderProjects() {
    const list = qs("#projects-list");
    const progress = qs("#project-progress");
    if (!list || !progress) return;

    list.innerHTML = data.projects.map((project, index) => projectTemplate(project, index)).join("");
    progress.innerHTML = data.projects.map((project, index) => `
      <a class="progress-dot" href="#project-${index + 1}" aria-label="Jump to ${escapeAttribute(project.title)}">${String(index + 1).padStart(2, "0")}</a>
    `).join("");

    qsa(".project").forEach(setupProjectGallery);
  }

  function projectTemplate(project, index) {
    const number = String(index + 1).padStart(2, "0");
    const firstImage = project.images?.[0] || "assets/images/project-placeholder.webp";
    const thumbnails = [...(project.images || []).slice(0, 4).map((image, imageIndex) => `
      <button class="media-thumb" type="button" aria-label="Show image ${imageIndex + 1} for ${escapeAttribute(project.title)}" aria-current="${imageIndex === 0 ? "true" : "false"}" data-type="image" data-src="${escapeAttribute(image)}" data-label="Image ${imageIndex + 1} of 4">
        <img src="${escapeAttribute(image)}" alt="" loading="lazy">
      </button>
    `), `
      <button class="media-thumb video-thumb" type="button" aria-label="Show video for ${escapeAttribute(project.title)}" aria-current="false" data-type="video" data-src="${escapeAttribute(project.video)}" data-poster="${escapeAttribute(project.videoPoster)}" data-label="Video demo">
        <img src="${escapeAttribute(project.videoPoster)}" alt="" loading="lazy">
      </button>
    `].join("");

    const liveLink = project.liveUrl
      ? `<a class="button" href="${escapeAttribute(project.liveUrl)}" target="_blank" rel="noreferrer">View live project</a>`
      : "";

    return `
      <article class="project reveal" id="project-${index + 1}" data-project-index="${index}">
        <div class="project-inner container-narrow">
          <div class="project-media">
            <div class="media-stage" aria-live="polite">
              <span class="media-count">Image 1 of 4</span>
              <img src="${escapeAttribute(firstImage)}" alt="${escapeAttribute(project.title)} preview image 1" loading="lazy">
            </div>
            <div class="media-thumbnails" aria-label="${escapeAttribute(project.title)} media gallery">
              ${thumbnails}
            </div>
          </div>

          <div class="project-copy">
            <span class="project-number">Project ${number}</span>
            <h3>${escapeHtml(project.title)}</h3>
            ${project.tagline ? `<p class="project-tagline">${escapeHtml(project.tagline)}</p>` : ""}
            <p class="project-description">${escapeHtml(project.description)}</p>
            <ul class="project-meta" aria-label="Technologies used">
              ${(project.technologies || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
            <div class="project-links">
              ${liveLink}
              <a class="github-link" href="${escapeAttribute(project.github)}" target="_blank" rel="noreferrer">
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function setupProjectGallery(projectElement) {
    const stage = qs(".media-stage", projectElement);
    const count = qs(".media-count", projectElement);
    const thumbs = qsa(".media-thumb", projectElement);
    const projectTitle = qs("h3", projectElement)?.textContent || "Project";
    const initialMedia = qs("img, video", stage);

    if (initialMedia) syncStageToMedia(stage, initialMedia);

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        const type = thumb.dataset.type;
        const src = thumb.dataset.src;
        const label = thumb.dataset.label || "Project media";

        thumbs.forEach((item) => item.setAttribute("aria-current", String(item === thumb)));
        count.textContent = label;

        if (type === "video") {
          const video = document.createElement("video");
          video.controls = true;
          video.playsInline = true;
          video.preload = "metadata";
          video.poster = thumb.dataset.poster || "";
          video.setAttribute("aria-label", `${projectTitle} video demo`);

          const source = document.createElement("source");
          source.src = src;
          source.type = "video/mp4";
          video.append(source);
          video.append(document.createTextNode("Your browser does not support embedded video."));
          replaceStageMedia(stage, video);
        } else {
          const image = document.createElement("img");
          image.src = src;
          image.alt = `${projectTitle} preview image ${index + 1}`;
          replaceStageMedia(stage, image);
        }
      });
    });
  }

  function replaceStageMedia(stage, newMedia) {
    const current = stage.querySelector("img, video");
    if (current?.tagName === "VIDEO") current.pause();
    current?.replaceWith(newMedia);
    syncStageToMedia(stage, newMedia);
  }

  function syncStageToMedia(stage, media) {
    const applyNaturalRatio = () => {
      const width = media.videoWidth || media.naturalWidth;
      const height = media.videoHeight || media.naturalHeight;
      if (!width || !height) return;

      const ratio = width / height;
      stage.style.setProperty("--media-aspect", `${width} / ${height}`);
      stage.style.setProperty("--media-ratio", ratio.toFixed(6));
    };

    if (media.tagName === "VIDEO") {
      if (media.readyState >= 1) applyNaturalRatio();
      else media.addEventListener("loadedmetadata", applyNaturalRatio, { once: true });
    } else if (media.complete && media.naturalWidth) {
      applyNaturalRatio();
    } else {
      media.addEventListener("load", applyNaturalRatio, { once: true });
    }
  }

  function setupMenu() {
    const button = qs(".menu-button");
    const nav = qs(".site-nav");
    if (!button || !nav) return;

    const closeMenu = () => {
      button.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    qsa("a", nav).forEach((link) => link.addEventListener("click", closeMenu));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  function setupObservers() {
    const revealItems = qsa(".reveal");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealItems.forEach((item) => revealObserver.observe(item));
    }

    const projectDots = qsa(".progress-dot");
    const projects = qsa(".project");
    if (!("IntersectionObserver" in window)) return;

    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = Number(entry.target.dataset.projectIndex);
        projectDots.forEach((dot, dotIndex) => dot.setAttribute("aria-current", String(dotIndex === index)));
      });
    }, { rootMargin: "-35% 0px -50% 0px", threshold: 0 });

    projects.forEach((project) => projectObserver.observe(project));
  }

  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttribute(value = "") {
    return escapeHtml(value);
  }

  populatePerson();
  renderProjects();
  setupMenu();
  setupObservers();
  setText("#current-year", new Date().getFullYear());
})();
