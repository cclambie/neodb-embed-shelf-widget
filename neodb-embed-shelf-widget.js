// ============================================================
// neodb-embed-shelf-widget.js
// GitHub: https://github.com/cclambie/neodb-embed-shelf-widget
// Namespace: craiglambie.com
// ============================================================

// ── USER CONFIG ─────────────────────────────────────────────
const NEODB_HOST     = "YOUR_NEODB_HOST";   // Your NeoDB instance URL (no trailing slash)
const NEODB_USERNAME = "YOUR_NEODB_USERNAME";    // Your NeoDB username (display only, not used in API call)
const NEODB_TOKEN    = "YOUR_ACCESS_TOKEN";      // Bearer token from your NeoDB /developer/ console
const NEODB_LIMIT    = 12;                       // Max items to show per category
const NEODB_SHELF    = "complete";               // complete | progress | wishlist
const NEODB_CATEGORIES = ["book", "podcast"];    // Categories to fetch and display
// ────────────────────────────────────────────────────────────

(function () {
  "use strict";

  window.neodb = window.neodb || {};

  // Build the API endpoint URL
  function buildEndpoint(category, shelfType, page) {
    return `${NEODB_HOST}/api/me/shelf/${shelfType}?category=${category}&page=${page}`;
  }

  // Fetch JSON from the NeoDB API
  async function fetchShelf(category, shelfType) {
    const url = buildEndpoint(category, shelfType, 1);
    const response = await fetch(url, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${NEODB_TOKEN}`
      }
    });
    if (!response.ok) {
      throw new Error(`NeoDB API error: ${response.status} for ${url}`);
    }
    return await response.json();
  }

  // Render a single item card
  function renderCard(entry) {
    const item  = entry.item || {};
    const title = item.display_title || item.title || "Untitled";
    const url   = item.url || "#";
    const cover = item.cover_image_url || "";
    const cat   = item.category || "";
    const rating = entry.rating_grade ? `⭐ ${entry.rating_grade}/10` : "";
    const comment = entry.comment_text
      ? `<p class="neodb-comment">${entry.comment_text}</p>`
      : "";

    return `
      <a class="neodb-card neodb-cat-${cat}" href="${url}" target="_blank" rel="noopener noreferrer">
        ${cover
          ? `<img class="neodb-cover" src="${cover}" alt="${title}" loading="lazy">`
          : `<div class="neodb-cover neodb-no-cover">${cat}</div>`
        }
        <div class="neodb-info">
          <div class="neodb-title">${title}</div>
          ${rating ? `<div class="neodb-rating">${rating}</div>` : ""}
          ${comment}
        </div>
      </a>
    `;
  }

  // Render a section heading + grid of cards into a container element
  function renderSection(container, category, items) {
    const heading = document.createElement("div");
    heading.className = "neodb-section";
    heading.innerHTML = `
      <h3 class="neodb-section-title">${category.charAt(0).toUpperCase() + category.slice(1)}s</h3>
      <div class="neodb-grid">
        ${items.map(renderCard).join("")}
      </div>
    `;
    container.appendChild(heading);
  }

  // Main init — finds all .neodb-embed elements and populates them
  async function initAll() {
    const containers = document.querySelectorAll(".neodb-embed");
    if (!containers.length) return;

    for (const container of containers) {
      container.innerHTML = `<p class="neodb-loading">Loading shelf…</p>`;
      try {
        for (const category of NEODB_CATEGORIES) {
          const data  = await fetchShelf(category, NEODB_SHELF);
          const items = (data.data || []).slice(0, NEODB_LIMIT);
          if (items.length) {
            if (container.querySelector(".neodb-loading")) {
              container.innerHTML = "";
            }
            renderSection(container, category, items);
          }
        }
        if (container.querySelector(".neodb-loading")) {
          container.innerHTML = `<p class="neodb-empty">No items found on shelf.</p>`;
        }
      } catch (err) {
        container.innerHTML = `<p class="neodb-error">⚠️ Could not load NeoDB shelf: ${err.message}</p>`;
        console.error("[neodb-embed-shelf-widget]", err);
      }
    }
  }

  // Expose public API
  window.neodb.neodbEmbedShelfWidget = { initAll };

  // Auto-run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }

})();
