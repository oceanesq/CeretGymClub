# Guide — Comment modifier le site du Céret Gym Club

Pas besoin de connaître le code. Tous les contenus du site sont dans le dossier **`data/`**.  
Ouvrez le fichier concerné avec un éditeur de texte (Notepad, VS Code…), modifiez, sauvegardez, rechargez la page.


---

## 1. Planning des cours → `data/planning.js`

### Modifier un créneau existant
Repérez le créneau et changez l'heure ou le nom :
```
{ start: "17:00", end: "18:00", name: "L1" },
  ↑ heure début    ↑ heure fin  ↑ nom du groupe
```

### Ajouter un nouveau créneau
Copiez une ligne existante et collez-la en dessous, dans le bon jour :
```
{ start: "16:00", end: "17:00", name: "L2" },
```
Si le groupe n'existe pas encore dans `PLANNING_DEFAULTS`, ajoutez-le tout en haut du fichier :
```
"MonGroupe": { type: "", age: "8–10 ans" },
```
Types disponibles : `""` (gym), `"comp"` (compétition), `"parkour"`, `"eveil"`, `"renfo"`.

### Supprimer un créneau
Supprimez la ligne entière (avec la virgule à la fin).

---

## 2. Actualités → `data/actualites.js`

### Ajouter une actualité
Copiez-collez ce bloc en haut de la liste (avant la première `{`) :
```
{
  id: "mon-evenement",
  title: "Titre de l'événement",
  date: "15 mai 2026",
  category: "Événement",
  lieu: "Gymnase de Céret",
  emoji: "🎉",
  image: "",
  excerpt: "Description courte visible sur la carte."
},
```
- `id` : un mot unique sans espace (peut être n'importe quoi)
- `category` : toujours `"Événement"`
- `lieu` : laisser `""` si pas de lieu précis
- `image` : laisser `""` si pas de photo

---

## 3. Résultats de compétitions → `data/competitions.js`

### Ajouter un résultat
Copiez-collez ce bloc dans la liste `resultats` :
```
{
  competition: "Nom de la compétition",
  date:        "Avril 2026",
  place:       "1e",
  categorie:   "N7 11ans et +",
  gymnaste:    "Prénom",
  photo:       "Prenom.png"
},
```
- `place` : `"1e"`, `"2e"`, `"3e"` → la médaille est choisie automatiquement
- `photo` : nom d'un fichier dans `assets/gallery/` — laisser `""` si pas de photo

---

## 4. Galerie photos → dossier `assets/gallery/`

1. Glissez vos photos (JPG, PNG, WEBP…) dans le dossier **`assets/gallery/`**
2. Ouvrez un terminal dans le dossier du projet et tapez :
   ```
   node scripts/generate-galerie.js
   ```
3. Rechargez la page galerie → les photos apparaissent

> Nommez vos fichiers clairement : `Juliette.png`, `N7_11+.png`, `gala-2026.jpg`…  
> Ce nom peut être réutilisé dans `competitions.js` (champ `photo`).

---

## 5. Informations du club → `data/club.js`

Email, adresse, réseaux sociaux, statistiques (nombre d'adhérents, etc.) :
```
email: "asso.ceretgymclub@gmail.com",
adresse: { rue: "2 Rue Jean Amade", ... },
stats: [
  { num: "80+", label: "Adhérents" },
  ...
]
```

---

## 6. Tarifs → `data/tarifs.js`

Chaque carte tarifaire a un `prix` et une liste de `features` (ce qui est inclus) :
```
{
  nom: "1 cours / semaine",
  prix: "320 €",
  features: ["Licence FFGym incluse", "Cours hebdomadaire", ...],
  ...
}
```

---

## 7. Équipe et bureau → `data/team.js`

### Membres du bureau
```
{ nom: "Maelya", role: "Présidente", avatar: "👩", photo: "" }
```
### Équipe encadrante
```
{ nom: "Anouchka", role: "Entraîneuse", discipline: "GAF", avatar: "🤸", photo: "" }
```
Pour ajouter une photo : placez-la dans `assets/` et mettez son nom dans `photo: "anouchka.jpg"`.

---

## En cas de problème

Contacter Océane !