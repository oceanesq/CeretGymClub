# Céret Gym Club — Site web

Site statique officiel du **Céret Gym Club** (gymnasique artistique féminine & parkour, Céret 66400).

## Structure

```
ceretgymclub/
├── index.html          ← Accueil
├── planning.html       ← Planning des cours
├── tarifs.html         ← Tarifs
├── actualites.html     ← Actualités & résultats
├── apropos.html        ← À propos / équipe
├── galerie.html        ← Galerie photos
├── contact.html        ← Contact & formulaire
├── assets/
│   ├── logo.png        ← Déposer le logo ici
│   ├── css/styles.css  ← Tous les styles
│   ├── js/
│   │   ├── components.js  ← Navbar & footer injectés
│   │   └── main.js        ← Scripts interactifs
│   └── gallery/        ← Photos de la galerie
├── data/
│   ├── planning.js     ← Créneaux de la semaine
│   ├── actualites.js   ← Articles d'actualité
│   └── partenaires.js  ← Partenaires du club
├── netlify.toml        ← Config Netlify + sécurité
├── _headers            ← En-têtes HTTP (Netlify)
├── robots.txt
└── sitemap.xml
```

## Démarrage rapide

Ouvrir `index.html` directement dans un navigateur — aucun serveur ni build requis.

## Personnalisation

### Logo
Déposer votre logo dans `assets/logo.png` (idéalement 200×200 px, format PNG).

### Planning
Éditer `data/planning.js` — les créneaux sont organisés par jour. Modifier les horaires, noms de cours, âges et types (gym, parkour, eveil, comp).

### Actualités
Éditer `data/actualites.js` — ajouter un objet par article : `{ id, title, date, category, emoji, image, excerpt }`.

### Tarifs
Les prix sont placeholders (`À définir`). Les modifier directement dans `tarifs.html`.

### Équipe
Remplacer les emojis avatars par de vraies photos dans `apropos.html` :
```html
<div class="team-avatar">
  <img src="assets/photo-anouchka.jpg" alt="Photo Anouchka">
</div>
```

### Formulaire de contact
Deux options :

**Netlify Forms** (recommandé si hébergé sur Netlify) — le formulaire fonctionne automatiquement, sans modification. Les soumissions apparaissent dans le tableau de bord Netlify.

**Formspree** (alternative) — créer un compte sur formspree.io, récupérer votre ID de formulaire et remplacer `VOTRE_ID_FORMSPREE` dans `contact.html` :
```html
action="https://formspree.io/f/VOTRE_ID_FORMSPREE"
```

### Galerie photos
Déposer les photos dans `assets/gallery/` puis dupliquer un bloc `<figure>` dans `galerie.html` :
```html
<figure class="gallery-item" data-src="assets/gallery/ma-photo.jpg" data-alt="Description">
  <img src="assets/gallery/ma-photo.jpg" alt="Description" loading="lazy">
  <div class="gallery-overlay" aria-hidden="true">...</div>
</figure>
```

### Réseaux sociaux
Remplacer les `href="#"` dans `assets/js/components.js` (footer) et dans `index.html` (hero) par les vraies URLs Instagram et Facebook du club.

## Déploiement

### Netlify (recommandé — gratuit)

**Méthode 1 — Drag & drop :**
1. Aller sur [app.netlify.com](https://app.netlify.com)
2. Glisser-déposer le dossier du projet dans la zone de déploiement
3. Le site est en ligne en 30 secondes avec HTTPS automatique

**Méthode 2 — Via GitHub :**
1. Créer un dépôt GitHub et pousser ce dossier
2. Sur Netlify : "Add new site" > "Import an existing project" > sélectionner le repo
3. Paramètres de build : **Build command** vide, **Publish directory** : `.`
4. Déploiement automatique à chaque push sur `main`

### GitHub Pages (alternative)

1. Créer un dépôt GitHub public
2. Pousser ce dossier sur la branche `main`
3. Settings > Pages > Source : `main` / `/ (root)`
4. Le site sera disponible sur `https://votre-compte.github.io/nom-du-repo/`

> Note : Netlify est préféré car il supporte automatiquement les en-têtes de sécurité du fichier `netlify.toml`.

## Mise à jour du domaine

Après déploiement, mettre à jour les URLs dans :
- `sitemap.xml` → remplacer `ceretgymclub.netlify.app` par votre vrai domaine
- `robots.txt` → même chose

## Contact technique

Email du club : asso.ceretgymclub@gmail.com
