/* =============================================
   CÉRET GYM CLUB — components.js
   Injecte navbar et footer dans chaque page.
   Utilise CLUB_DATA (data/club.js) et PARTENAIRES_DATA (data/partenaires.js)
   si disponibles.
   ============================================= */

function buildNavbar() {
  const ha = (typeof CLUB_DATA !== 'undefined') ? CLUB_DATA.helloasso : 'https://www.helloasso.com/associations/ceretgymclub';
  return `
<nav class="navbar" role="navigation" aria-label="Navigation principale">
  <div class="container navbar-inner">
    <a href="index.html" class="navbar-brand" aria-label="Céret Gym Club — Accueil">
      <img src="assets/logo.png" alt="Logo Céret Gym Club" width="46" height="46">
      <span>Céret<br>Gym Club</span>
    </a>
    <button class="navbar-toggle" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="main-nav">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <line x1="3" y1="6"  x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
    <ul class="navbar-nav" id="main-nav" role="list">
      <li><a href="index.html">Accueil</a></li>
      <li><a href="planning.html">Planning</a></li>
      <li><a href="tarifs.html">Tarifs</a></li>
      <li><a href="actualites.html">Actualités</a></li>
      <li><a href="apropos.html">À propos</a></li>
      <li><a href="galerie.html">Galerie</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="${ha}" class="btn btn-primary navbar-cta" target="_blank" rel="noopener noreferrer">S'inscrire</a>
  </div>
</nav>`;
}

function buildFooter() {
  const c = (typeof CLUB_DATA !== 'undefined') ? CLUB_DATA : {
    adresse:   { rue: '2 Rue Jean Amade', codePostal: '66400', ville: 'Céret', pays: 'France' },
    email:     'asso.ceretgymclub@gmail.com',
    saison:    '2026/2027',
    helloasso: 'https://www.helloasso.com/associations/ceretgymclub',
    reseaux:   { instagram: '#', facebook: '#' }
  };

  const partenairesLinks = (typeof PARTENAIRES_DATA !== 'undefined')
    ? PARTENAIRES_DATA.map(p => `<a href="${p.url || '#'}" ${p.url && !p.url.startsWith('mailto') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${p.emoji} ${p.name}</a>`).join('\n          ')
    : `<a href="https://www.patisserie-touron.com" target="_blank" rel="noopener noreferrer">🍰 Pâtisserie Touron</a>
          <a href="#">✨ Pro'clean Nettoyage</a>
          <a href="#">🚗 Contié Automobiles</a>
          <a href="#">☕ Torréa</a>
          <a href="mailto:privat-bartho@hotmail.com">🏗️ Privat Bartho</a>`;

  return `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/logo.png" alt="Logo Céret Gym Club" width="54" height="54">
        <p>Association de gymnastique à ${c.adresse.ville} (${c.adresse.codePostal}), proposant Gymnastique Artistique Féminine et Parkour pour tous les âges, de l'éveil à la compétition.</p>
        <div class="footer-social" aria-label="Réseaux sociaux">
          <a href="${c.reseaux.instagram}" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="${c.reseaux.facebook}" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="${c.helloasso}" aria-label="HelloAsso" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h4>Navigation</h4>
        <nav class="footer-nav" aria-label="Navigation secondaire">
          <a href="index.html">Accueil</a>
          <a href="planning.html">Planning</a>
          <a href="tarifs.html">Tarifs</a>
          <a href="actualites.html">Actualités</a>
          <a href="apropos.html">À propos</a>
          <a href="galerie.html">Galerie</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>
      <div>
        <h4>Partenaires</h4>
        <nav class="footer-nav" aria-label="Partenaires">
          ${partenairesLinks}
        </nav>
      </div>
      <div class="footer-contact">
        <h4>Contact</h4>
        <p>
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          ${c.adresse.rue}<br>${c.adresse.codePostal} ${c.adresse.ville}
        </p>
        <p>
          <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          <a href="mailto:${c.email}">${c.email}</a>
        </p>
        <p>
          <svg viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
          Saison ${c.saison}
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} Céret Gym Club — Association loi 1901 — Affiliée UFOLEP</p>
    </div>
  </div>
</footer>
<button class="scroll-top" aria-label="Retour en haut de page">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
</button>`;
}

/* Inject on DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {
  const navTarget = document.getElementById('navbar-placeholder');
  if (navTarget) navTarget.outerHTML = buildNavbar();

  const footTarget = document.getElementById('footer-placeholder');
  if (footTarget) footTarget.outerHTML = buildFooter();
});
