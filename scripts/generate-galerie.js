#!/usr/bin/env node
/* Génère data/galerie.js depuis le contenu de assets/gallery/.
   Usage : node scripts/generate-galerie.js            */

const fs   = require('fs');
const path = require('path');

const ROOT       = path.join(__dirname, '..');
const GALLERY_DIR = path.join(ROOT, 'assets', 'gallery');
const OUTPUT      = path.join(ROOT, 'data', 'galerie.js');
const EXTENSIONS  = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

const files = fs.readdirSync(GALLERY_DIR)
  .filter(f => EXTENSIONS.has(path.extname(f).toLowerCase()))
  .sort()
  .map(f => ({ src: `assets/gallery/${f}`, alt: '' }));

const content =
`/* =============================================
   GALERIE PHOTOS — Céret Gym Club
   Généré automatiquement par : node scripts/generate-galerie.js
   NE PAS modifier manuellement — relancer le script après ajout de photos.
   ============================================= */

const GALERIE_DATA = ${JSON.stringify(files, null, 2)};
`;

fs.writeFileSync(OUTPUT, content, 'utf8');
console.log(`✓ ${files.length} photo(s) exportées dans data/galerie.js`);
