/* =============================================
   CÉRET GYM CLUB — cookie-consent.js
   Bandeau de consentement RGPD/CNIL.
   Tant que l'utilisateur n'a pas accepté, les ressources
   tierces non essentielles (Google Fonts, Google Maps) ne
   sont pas chargées.
   ============================================= */

(function () {
  const STORAGE_KEY = 'cgc_consent';
  const MAX_AGE_MS  = 182 * 24 * 60 * 60 * 1000; /* 6 mois */

  function readConsent() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || !data.status || !data.ts) return null;
      if (Date.now() - data.ts > MAX_AGE_MS) return null;
      return data.status; /* 'accepted' | 'refused' */
    } catch (_) {
      return null;
    }
  }

  function writeConsent(status) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ status, ts: Date.now() }));
    } catch (_) {}
  }

  function loadGoogleFonts() {
    if (document.getElementById('cgc-google-fonts')) return;
    const pre1 = document.createElement('link');
    pre1.rel = 'preconnect';
    pre1.href = 'https://fonts.googleapis.com';
    const pre2 = document.createElement('link');
    pre2.rel = 'preconnect';
    pre2.href = 'https://fonts.gstatic.com';
    pre2.crossOrigin = 'anonymous';
    const sheet = document.createElement('link');
    sheet.id = 'cgc-google-fonts';
    sheet.rel = 'stylesheet';
    sheet.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&family=Open+Sans:wght@400;600&display=swap';
    document.head.appendChild(pre1);
    document.head.appendChild(pre2);
    document.head.appendChild(sheet);
  }

  function applyConsent(status) {
    if (status === 'accepted') loadGoogleFonts();
    window.dispatchEvent(new CustomEvent('cgc:consent-changed', { detail: { status } }));
  }

  function buildBanner() {
    const el = document.createElement('div');
    el.className = 'cookie-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'false');
    el.setAttribute('aria-label', 'Gestion des cookies');
    el.innerHTML = `
      <div class="cookie-banner-inner">
        <p class="cookie-banner-text">
          Ce site utilise des cookies pour charger les polices d'écriture Google Fonts et afficher la
          carte Google Maps de la page Contact. Ces services transmettent votre adresse IP à Google.
          Vous pouvez accepter ou refuser leur utilisation. En savoir plus dans notre
          <a href="confidentialite.html">politique de confidentialité</a>.
        </p>
        <div class="cookie-banner-actions">
          <button type="button" class="btn btn-outline cookie-btn-refuse">Refuser</button>
          <button type="button" class="btn btn-primary cookie-btn-accept">Tout accepter</button>
        </div>
      </div>`;
    return el;
  }

  let bannerEl = null;

  function showBanner() {
    if (bannerEl) return;
    bannerEl = buildBanner();
    document.body.appendChild(bannerEl);
    bannerEl.querySelector('.cookie-btn-accept').addEventListener('click', () => {
      writeConsent('accepted');
      applyConsent('accepted');
      hideBanner();
    });
    bannerEl.querySelector('.cookie-btn-refuse').addEventListener('click', () => {
      writeConsent('refused');
      applyConsent('refused');
      hideBanner();
    });
  }

  function hideBanner() {
    if (!bannerEl) return;
    bannerEl.remove();
    bannerEl = null;
  }

  /* API publique — utilisée par main.js (carte Google Maps) et par le lien
     "Gérer les cookies" du footer. */
  window.CGC_COOKIES = {
    get: readConsent,
    openBanner: showBanner
  };

  document.addEventListener('DOMContentLoaded', () => {
    const status = readConsent();
    if (status === 'accepted') applyConsent('accepted');
    else if (status === null) showBanner();

    /* Lien "Gérer les cookies" injecté dans le footer (assets/js/components.js) */
    document.addEventListener('click', (e) => {
      const link = e.target.closest('#cookie-settings-link');
      if (link) {
        e.preventDefault();
        showBanner();
      }
    });
  });
})();
