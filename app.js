/* ── app.js ── Ides of March Historical Archive ── */

const App = (() => {
  /* ── State ─────────────────────────────────────────────────────────────── */
  let state = {
    era: 'all',
    category: 'all',
    search: ''
  };

  /* ── DOM refs ───────────────────────────────────────────────────────────── */
  const $ = id => document.getElementById(id);

  /* ── Filter logic ───────────────────────────────────────────────────────── */
  function getFiltered() {
    const q = state.search.toLowerCase().trim();
    return EVENTS_DATA.filter(ev => {
      if (state.era !== 'all' && ev.era !== state.era) return false;
      if (state.category !== 'all' && ev.category !== state.category) return false;
      if (q) {
        const haystack = `${ev.display} ${ev.title} ${ev.description} ${ev.region} ${ev.category}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }

  /* ── Render era sections ────────────────────────────────────────────────── */
  function render() {
    const filtered = getFiltered();
    const container = $('timelineContainer');
    container.innerHTML = '';

    // Update count
    $('eventCount').textContent = filtered.length;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🌙</div>
          <p>No events found matching your search — the stars are silent.</p>
        </div>`;
      return;
    }

    // Group by era if showing all, otherwise single group
    const eraOrder = ['ancient', 'medieval', 'early-modern', 'industrial', 'contemporary'];
    const grouped = {};
    eraOrder.forEach(e => grouped[e] = []);
    filtered.forEach(ev => {
      if (grouped[ev.era]) grouped[ev.era].push(ev);
    });

    eraOrder.forEach(eraKey => {
      const events = grouped[eraKey].sort((a, b) => a.year - b.year);
      if (!events.length) return;

      const eraData = ERAS[eraKey];
      const section = document.createElement('section');
      section.className = 'timeline-section';

      // Era heading (only when "all" selected or matching era)
      if (state.era === 'all') {
        section.innerHTML = `
          <div class="era-heading">
            <div class="era-heading-line"></div>
            <div class="era-heading-text">
              <h2>${eraData.icon} ${eraData.label}</h2>
              <p>${eraData.years}</p>
            </div>
            <div class="era-heading-line right"></div>
          </div>`;
      }

      // Timeline
      const timeline = document.createElement('div');
      timeline.className = 'timeline';
      timeline.innerHTML = `<div class="timeline-spine"></div>`;

      events.forEach((ev, i) => {
        const id = `ev-${ev.year}-${i}`;
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.dataset.id = id;

        const catLabel = CATEGORIES[ev.category] || ev.category;
        const waBadge = ev.worldAltering
          ? `<span class="world-altering-badge">★ World-Altering</span>`
          : '';

        // ── Ahmed card class ──────────────────────────────────────────────
        const ahmedClass = ev.isAhmed ? 'ahmed-card' : '';

        item.innerHTML = `
          <div class="event-card ${ev.worldAltering ? 'world-altering' : ''} ${ahmedClass}">
            <div class="card-top">
              <div class="card-meta">
                <span class="card-category">${catLabel}</span>
                ${waBadge}
              </div>
              <span class="card-region">${ev.region}</span>
            </div>
            <div class="card-title">${ev.title}</div>
            <div class="card-desc">${ev.description}</div>
          </div>
          <div class="timeline-node">
            <div class="node-dot ${ev.worldAltering ? 'world-altering' : ''}"></div>
            <span class="node-year">${ev.display}</span>
          </div>
          <div class="timeline-spacer"></div>`;

        timeline.appendChild(item);
      });

      section.appendChild(timeline);
      container.appendChild(section);
    });

    // Intersection observer for scroll animations
    observeItems();
  }

  /* ── Scroll reveal ──────────────────────────────────────────────────────── */
  function observeItems() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.timeline-item').forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 0.04, 0.3)}s`;
      observer.observe(el);
    });
  }

  /* ── Build era tabs ─────────────────────────────────────────────────────── */
  function buildEraTabs() {
    const container = $('eraTabs');
    Object.entries(ERAS).forEach(([key, data]) => {
      const btn = document.createElement('button');
      btn.className = `era-tab ${key === state.era ? 'active' : ''}`;
      btn.dataset.era = key;
      btn.innerHTML = `<span class="era-icon">${data.icon}</span>${data.label}`;
      btn.addEventListener('click', () => {
        state.era = key;
        
        document.querySelectorAll('.era-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
      });
      container.appendChild(btn);
    });
  }

  /* ── Build category buttons ─────────────────────────────────────────────── */
  function buildCatButtons() {
    const container = $('catRow');
    Object.entries(CATEGORIES).forEach(([key, label]) => {
      const btn = document.createElement('button');
      btn.className = `cat-btn ${key === state.category ? 'active' : ''}`;
      btn.textContent = label;
      btn.addEventListener('click', () => {
        state.category = key;
        
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
      });
      container.appendChild(btn);
    });
  }

  /* ── Hero stats ─────────────────────────────────────────────────────────── */
  function setStats() {
    $('statTotal').textContent = EVENTS_DATA.length;
    $('statWorldAltering').textContent = EVENTS_DATA.filter(e => e.worldAltering).length;
    const minYear = Math.min(...EVENTS_DATA.map(e => e.year));
    const maxYear = Math.max(...EVENTS_DATA.map(e => e.year));
    $('statSpan').textContent = `${Math.abs(minYear) + maxYear}`;
  }

  /* ── Search ─────────────────────────────────────────────────────────────── */
  function initSearch() {
    let debounce;
    $('searchInput').addEventListener('input', (e) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        state.search = e.target.value;
        
        render();
      }, 200);
    });
  }

  /* ── Init ───────────────────────────────────────────────────────────────── */
  function init() {
    setStats();
    buildEraTabs();
    buildCatButtons();
    initSearch();
    render();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', App.init);
