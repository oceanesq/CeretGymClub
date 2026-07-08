/* =============================================
   CÉRET GYM CLUB — main.js
   ============================================= */

/* --- Navbar scroll shadow & active link --- */
(function () {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) scrollTop.classList.toggle('visible', window.scrollY > 400);
  });

  /* Active link */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* --- Scroll-to-top button --- */
(function () {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* --- Reveal on scroll (IntersectionObserver) --- */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* --- Lightbox (event delegation — compatible avec galerie chargée dynamiquement) --- */
(function () {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lbImg   = lightbox.querySelector('.lightbox-img');
  const lbClose = lightbox.querySelector('.lightbox-close');
  const lbPrev  = lightbox.querySelector('.lightbox-prev');
  const lbNext  = lightbox.querySelector('.lightbox-next');
  let current   = 0;

  function items() { return Array.from(document.querySelectorAll('.gallery-item[data-src]')); }

  function open(idx) {
    const list = items();
    current = idx;
    lbImg.src = list[idx].dataset.src;
    lbImg.alt = list[idx].dataset.alt || 'Photo';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  function prev() { const n = items().length; open((current - 1 + n) % n); }
  function next() { open((current + 1) % items().length); }

  document.body.addEventListener('click', e => {
    const item = e.target.closest('.gallery-item[data-src]');
    if (!item) return;
    open(items().indexOf(item));
  });

  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', prev);
  lbNext.addEventListener('click', next);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   prev();
    if (e.key === 'ArrowRight')  next();
  });
})();

/* --- Galerie builder — fetch listing + fallback data/galerie.js --- */
(function () {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const EXTS = /\.(jpe?g|png|webp|gif|avif)$/i;
  const EYE  = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;

  function render(images) {
    grid.innerHTML = '';
    if (!images.length) {
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--gray-700);">Aucune photo dans la galerie pour le moment.</p>';
      return;
    }
    images.forEach(img => {
      const fig = document.createElement('figure');
      fig.className = 'gallery-item';
      fig.setAttribute('role', 'listitem');
      fig.dataset.src = img.src;
      fig.dataset.alt = img.alt || '';
      fig.innerHTML = `
        <img src="${img.src}" alt="${img.alt || 'Photo Céret Gym Club'}" loading="lazy">
        <div class="gallery-overlay">${EYE}</div>
      `;
      grid.appendChild(fig);
    });
  }

  /* Lit data/galerie.js — généré par : node scripts/generate-galerie.js */
  if (typeof GALERIE_DATA !== 'undefined') render(GALERIE_DATA);
})();

/* --- Contact form (Netlify / Formspree graceful) --- */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    const hp = form.querySelector('input[name="website"]');
    if (hp && hp.value) { e.preventDefault(); return; } // honeypot triggered

    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Envoi…'; }

    /* If using Formspree, the default POST works; Netlify handles it natively.
       We add a small UX enhancement for Formspree async: */
    const action = form.getAttribute('action') || '';
    if (action.includes('formspree')) {
      e.preventDefault();
      try {
        const res = await fetch(action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.reset();
          const ok = document.getElementById('form-success');
          if (ok) ok.style.display = 'block';
        }
      } catch (_) {}
      if (btn) { btn.disabled = false; btn.textContent = 'Envoyer'; }
    }
    /* For Netlify Forms: let the browser POST natively, it redirects to /thank-you */
  });
})();

/* --- Planning builder — CSS Grid calendrier (reads data/planning.js) --- */
(function () {
  const grid = document.getElementById('planning-grid');
  if (!grid || typeof PLANNING_DATA === 'undefined') return;

  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  /* Parse "HH:MM" → total minutes */
  function toMin(str) {
    const [h, m] = str.split(':').map(Number);
    return h * 60 + m;
  }

  /* Collect time bounds */
  let minMin = Infinity, maxMin = 0;
  days.forEach(day => {
    (PLANNING_DATA[day] || []).forEach(s => {
      const sm = toMin(s.start), em = toMin(s.end);
      if (sm < minMin) minMin = sm;
      if (em > maxMin) maxMin = em;
    });
  });

  /* Snap to full hours */
  const baseH  = Math.floor(minMin / 60);
  const endH   = Math.ceil(maxMin / 60);
  const PX_PER_HALF = 20;           /* px height per 15-min slot */
  const HALF_SLOTS  = (endH - baseH) * 4;

  /* Grid template */
  grid.style.gridTemplateColumns = `54px repeat(6, 1fr)`;
  grid.style.gridTemplateRows   = `48px repeat(${HALF_SLOTS}, ${PX_PER_HALF}px)`;

  /* ── Header row ── */
  const timeHead = document.createElement('div');
  timeHead.className = 'pg-header pg-time-col';
  timeHead.style.cssText = 'grid-column:1;grid-row:1;';
  grid.appendChild(timeHead);

  days.forEach((day, i) => {
    const h = document.createElement('div');
    h.className = 'pg-header';
    h.textContent = day;
    h.style.cssText = `grid-column:${i + 2};grid-row:1;`;
    grid.appendChild(h);
  });

  /* ── Time labels + grid lines ── */
  for (let h = baseH; h <= endH; h++) {
    const row = 2 + (h - baseH) * 4;  /* 4 rows per hour */

    /* Hour label */
    if (h < endH) {
      const label = document.createElement('div');
      label.className = 'pg-time-label';
      label.textContent = `${h}h`;
      label.style.cssText = `grid-column:1;grid-row:${row} / ${row + 4};`;
      grid.appendChild(label);
    }

    /* Solid line at each full hour */
    const hline = document.createElement('div');
    hline.className = 'pg-hline';
    hline.style.cssText = `grid-column:1 / -1;grid-row:${row};z-index:1;`;
    grid.appendChild(hline);

    /* Dashed line at half-hour (skip last) */
    if (h < endH) {
      const hhline = document.createElement('div');
      hhline.className = 'pg-hline pg-hline--half';
      hhline.style.cssText = `grid-column:2 / -1;grid-row:${row + 2};z-index:1;`;
      grid.appendChild(hhline);
    }
  }

  /* ── Day column backgrounds ── */
  days.forEach((_, i) => {
    const bg = document.createElement('div');
    bg.className = 'pg-day-bg';
    bg.style.cssText = `grid-column:${i + 2};grid-row:2 / -1;`;
    grid.appendChild(bg);
  });

  /* ── Résolution age/type depuis PLANNING_DEFAULTS ── */
  function resolveSlot(raw) {
    const defaults = typeof PLANNING_DEFAULTS !== 'undefined' ? PLANNING_DEFAULTS : {};
    let type = raw.type;
    let age  = raw.age;
    if (type === undefined || age === undefined) {
      for (const [key, def] of Object.entries(defaults)) {
        if (raw.name.includes(key)) {
          if (type === undefined) type = def.type;
          if (age  === undefined) age  = def.age;
          break;
        }
      }
    }
    return { ...raw, type: type ?? '', age: age ?? '' };
  }

  /* ── Slots ── */
  days.forEach((day, colIdx) => {
    (PLANNING_DATA[day] || []).forEach(raw => {
      const slot = resolveSlot(raw);
      const startMin = toMin(slot.start);
      const endMin   = toMin(slot.end);

      /* Convert minutes to grid rows (4 rows = 1 hour = 60 min, so 1 row = 15 min) */
      const rowStart = 2 + ((startMin - baseH * 60) / 15);
      const rowEnd   = 2 + ((endMin   - baseH * 60) / 15);

      const el = document.createElement('div');
      el.className = 'pg-slot' + (slot.type ? ` pg-slot--${slot.type}` : '');
      el.style.cssText = `grid-column:${colIdx + 2};grid-row:${rowStart} / ${rowEnd};`;
      el.dataset.group = slot.name;
      el.setAttribute('role', 'article');
      el.setAttribute('aria-label', `${slot.name} — ${slot.start.replace(':','h')}–${slot.end.replace(':','h')} — ${slot.age}`);
      el.innerHTML = `
        <span class="pg-slot-name">${slot.name}</span>
        <span class="pg-slot-age">${slot.start.replace(':','h')}–${slot.end.replace(':','h')} · ${slot.age}</span>
      `;
      grid.appendChild(el);
    });
  });

  /* ── Générer les filtres depuis PLANNING_DEFAULTS ── */
  const filterContainer = document.getElementById('planning-filters');
  if (filterContainer && typeof PLANNING_DEFAULTS !== 'undefined') {
    filterContainer.innerHTML =
      '<strong style="font-family:\'Raleway\',sans-serif;color:var(--navy);align-self:center;">Filtrer :</strong>';

    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn planning-filter-btn active';
    allBtn.dataset.group = 'all';
    allBtn.textContent = 'Tous';
    filterContainer.appendChild(allBtn);

    Object.entries(PLANNING_DEFAULTS).forEach(([name, def]) => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn planning-filter-btn';
      btn.dataset.group = name;
      if (def.type) btn.dataset.type = def.type;
      btn.textContent = name;
      filterContainer.appendChild(btn);
    });
  }

  /* ── Filtres — écouteurs d'événements ── */
  const filterBtns = document.querySelectorAll('.planning-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const group = btn.dataset.group;
      grid.querySelectorAll('.pg-slot').forEach(slot => {
        const matches = group === 'all' || slot.dataset.group.includes(group);
        slot.classList.toggle('pg-slot--hidden', !matches);
      });
    });
  });

  /* ── Télécharger PDF ── */
  const btnPdf = document.getElementById('btn-pdf');
  if (btnPdf) btnPdf.addEventListener('click', () => window.print());
})();

/* --- News cards builder (reads data/actualites.js + data/competitions.js) --- */
(function () {
  const grid = document.getElementById('news-grid');
  if (!grid) return;

  function medalFor(place) {
    if (!place) return '⭐';
    const p = String(place).trim().toLowerCase();
    if (p.startsWith('1')) return '🥇';
    if (p.startsWith('2')) return '🥈';
    if (p.startsWith('3')) return '🥉';
    return '⭐';
  }

  /* Actualités */
  if (typeof ACTUALITES_DATA !== 'undefined') {
    const limit = grid.dataset.limit ? parseInt(grid.dataset.limit) : ACTUALITES_DATA.length;
    ACTUALITES_DATA.slice(0, limit).forEach(item => {
      const card = document.createElement('article');
      card.className = 'news-card';
      card.dataset.category = item.category;
      const imgContent = item.image
        ? `<img src="${item.image}" alt="${item.title}" loading="lazy">`
        : `<div class="img-placeholder">${item.emoji || '📰'}</div>`;
      card.innerHTML = `
        <div class="news-card-img">${imgContent}</div>
        <div class="news-card-body">
          <div class="news-card-date">${item.date} · ${item.category}${item.lieu ? ' · 📍 ' + item.lieu : ''}</div>
          <h3 class="news-card-title">${item.title}</h3>
          <p class="news-card-excerpt">${item.excerpt}</p>
        </div>`;
      grid.appendChild(card);
    });
  }

  /* Résultats de compétitions (page complète uniquement) */
  if (typeof COMPETITIONS_DATA !== 'undefined' && !grid.dataset.limit) {
    COMPETITIONS_DATA.resultats.forEach(r => {
      const medaille = medalFor(r.place);
      const desc = r.note
        ? `${r.note}${r.gymnaste ? ' — ' + r.gymnaste : ''}`
        : `${r.place} place · ${r.categorie}${r.gymnaste ? ' — ' + r.gymnaste : ''}`;
      const card = document.createElement('article');
      card.className = 'news-card';
      card.dataset.category = 'Résultats';
      const imgBlock = r.photo
        ? `<div class="news-card-img news-card-img--photo" style="background-image:url('assets/gallery/${r.photo}')">
             <div class="news-card-medal">${medaille}</div>
           </div>`
        : `<div class="news-card-img"><div class="img-placeholder" style="font-size:3rem;">${medaille}</div></div>`;
      card.innerHTML = `
        ${imgBlock}
        <div class="news-card-body">
          <div class="news-card-date">${r.date} · Résultats · ${r.competition}</div>
          <h3 class="news-card-title">${r.categorie ? r.categorie + (r.gymnaste ? ' — ' + r.gymnaste : '') : r.gymnaste}</h3>
          <p class="news-card-excerpt">${desc}</p>
        </div>`;
      grid.appendChild(card);
    });
  }

  
})();

/* --- Filter buttons (actualites) --- */
(function () {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      document.querySelectorAll('.news-card').forEach(card => {
        const cardCat = card.dataset.category || '';
        card.style.display = (cat === 'all' || cardCat === cat) ? '' : 'none';
      });
    });
  });
})();

/* --- Année de fondation (reads data/club.js) --- */
(function () {
  const el = document.getElementById('annee-fondation');
  if (el && typeof CLUB_DATA !== 'undefined') el.textContent = CLUB_DATA.fondation;
})();

/* --- Stats (reads data/club.js) --- */
(function () {
  const row = document.getElementById('stats-row');
  if (!row || typeof CLUB_DATA === 'undefined') return;
  row.innerHTML = CLUB_DATA.stats.map(s => `
    <div class="stat-item">
      <span class="stat-num">${s.num}</span>
      <span class="stat-label">${s.label}</span>
    </div>`).join('');
})();

/* --- Bureau & équipe encadrante (reads data/team.js) --- */
(function () {
  function teamCard(m) {
    const avatar = m.photo
      ? `<img src="${m.photo}" alt="${m.nom}">`
      : `<div class="team-avatar-placeholder" aria-hidden="true">${m.avatar}</div>`;
    return `
    <article class="team-card">
      <div class="team-avatar">${avatar}</div>
      <h3>${m.nom}</h3>
      <p>${m.role}</p>
      <span class="team-role">${m.discipline || m.organisation || ''}</span>
    </article>`;
  }

  const bureauGrid = document.getElementById('bureau-grid');
  if (bureauGrid && typeof TEAM_DATA !== 'undefined') {
    bureauGrid.innerHTML = TEAM_DATA.bureau.map(teamCard).join('');
  }

  const teamGrid = document.getElementById('team-grid');
  if (teamGrid && typeof TEAM_DATA !== 'undefined') {
    teamGrid.innerHTML = TEAM_DATA.encadrants.map(teamCard).join('');
  }

  const jugesGrid = document.getElementById('juges-grid');
  if (jugesGrid && typeof TEAM_DATA !== 'undefined' && TEAM_DATA.juges) {
    jugesGrid.innerHTML = TEAM_DATA.juges.map(j => {
      const avatar = j.photo
        ? `<img src="${j.photo}" alt="${j.nom}">`
        : `<div class="team-avatar-placeholder" aria-hidden="true">${j.avatar}</div>`;
      return `
      <article class="team-card">
        <div class="team-avatar">${avatar}</div>
        <h3>${j.nom}</h3>
        <p>${j.diplome}</p>
        <span class="team-role">${j.discipline}</span>
      </article>`;
    }).join('');
  }
})();

/* --- Groupes — liste des gymnases (reads data/groupes.js) --- */
(function () {
  const grid = document.getElementById('groupes-grid');
  if (!grid || typeof GROUPES_DATA === 'undefined') return;

  grid.innerHTML = GROUPES_DATA.map(g => `
    <article class="groupe-card${g.type ? ' groupe-card--' + g.type : ' groupe-card--comp'}">
      <div class="groupe-card-header">
        ${g.nom}
        ${g.horaires ? `<small>${g.horaires}</small>` : ''}
      </div>
      <div class="groupe-card-body">
        <ul>${g.filles.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
    </article>
  `).join('');
})();

/* --- Tarifs (reads data/tarifs.js + data/club.js) --- */
(function () {
  const grid = document.getElementById('tarifs-grid');
  if (!grid || typeof TARIFS_DATA === 'undefined') return;

  const ha = (typeof CLUB_DATA !== 'undefined') ? CLUB_DATA.helloasso : '#';

  grid.innerHTML = TARIFS_DATA.cards.map(card => {
    const href = card.btn_href === 'helloasso' ? ha : card.btn_href;
    const extAttrs = card.btn_external ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `
    <article class="tarif-card${card.type ? ' tarif-card--' + card.type : ''}">
      <div class="tarif-category">${card.categorie}</div>
      <h3 class="tarif-name">${card.nom}</h3>
      <div class="tarif-price"><span>€</span>${card.prix}</div>
      <p class="tarif-period">${card.periode}</p>
      <ul class="tarif-features">
        ${card.features.map(f => `<li>${f}</li>`).join('\n        ')}
      </ul>
      <a href="${href}" class="btn ${card.btn_class}" style="width:100%;justify-content:center;"${extAttrs}>${card.btn_label}</a>
    </article>`;
  }).join('');

  const noteEl = document.getElementById('tarif-note');
  if (noteEl) {
    noteEl.innerHTML = '<p>' + TARIFS_DATA.notes.map(n => `<strong>${n.titre} :</strong> ${n.texte}`).join('<br><br>') + '</p>';
  }

  const paiementEl = document.getElementById('tarif-paiement');
  if (paiementEl) paiementEl.innerHTML = TARIFS_DATA.paiement;

  const saisonEl = document.getElementById('tarifs-saison');
  if (saisonEl) saisonEl.textContent = 'Saison ' + TARIFS_DATA.saison + ' · Licence UFOLEP incluse';
})();

/* --- Résultats de compétitions (reads data/competitions.js) --- */
(function () {
  const list = document.getElementById('podium-list');
  if (!list || typeof COMPETITIONS_DATA === 'undefined') return;

  function medalFor(place) {
    if (!place) return '⭐';
    const p = String(place).trim().toLowerCase();
    if (p.startsWith('1')) return '🥇';
    if (p.startsWith('2')) return '🥈';
    if (p.startsWith('3')) return '🥉';
    return '⭐';
  }

  const saisonEl = document.getElementById('resultats-saison');
  if (saisonEl) saisonEl.textContent = 'Résultats de compétitions ' + COMPETITIONS_DATA.saison;

  list.innerHTML = COMPETITIONS_DATA.resultats.map(r => {
    const medaille = medalFor(r.place);
    const desc = r.note
      ? `${r.note} — ${r.gymnaste}`
      : `${r.place} place ${r.categorie}${r.gymnaste ? ' — ' + r.gymnaste : ''}`;
    return `
    <article class="podium-card">
      <div class="podium-medal" aria-hidden="true">${medaille}</div>
      <div>
        <h4>${r.competition} · ${r.date}</h4>
        <p>${desc}</p>
      </div>
    </article>`;
  }).join('');
})();

/* --- Coordonnées contact (reads data/club.js) --- */
(function () {
  if (typeof CLUB_DATA === 'undefined') return;
  const c = CLUB_DATA;

  const emailEl = document.getElementById('contact-email');
  if (emailEl) { emailEl.href = 'mailto:' + c.email; emailEl.textContent = c.email; }

  const adresseEl = document.getElementById('contact-adresse');
  if (adresseEl) adresseEl.innerHTML = `${c.adresse.rue}<br>${c.adresse.codePostal} ${c.adresse.ville}`;

  const horairesEl = document.getElementById('contact-horaires');
  if (horairesEl && c.horaires_contact)
    horairesEl.innerHTML = c.horaires_contact.map(h => `<li>${h}</li>`).join('');

  const mapEl = document.getElementById('contact-map');
  if (mapEl && c.maps_embed) mapEl.src = c.maps_embed;
})();
