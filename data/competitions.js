/* =============================================
   CÉRET GYM CLUB — Résultats de compétitions
   Modifier ce fichier pour mettre à jour les podiums.

   place    : "1re" | "1ere" | "2e" | "3e" | null (participation sans classement)
              → l'emoji est choisi automatiquement (🥇 🥈 🥉 ⭐)
   gymnaste : nom, ou "" si non communiqué
   photo    : (optionnel) nom du fichier dans assets/gallery/ — s'affiche en fond de carte
   note     : (optionnel) texte libre affiché à la place du classement
   ============================================= */

const COMPETITIONS_DATA = {

  saison: "2025/2026",

  resultats: [
    {
      competition: "Compétition régionnale",
      date:        "Mars 2026",
      place:       "1e",
      categorie:   "N7 11ans et +",
      gymnaste:    "",
      photo:       "N7_11+.png"
    },
    {
      competition: "Compétition régionnale",
      date:        "Mars 2026",
      place:       "2e",
      categorie:   "N8 4-7 ans",
      gymnaste:    "Juliette",
      photo:       "Juliette.png"
    },
    {
      competition: "Compétition régionnale",
      date:        "Fevrier 2026",
      place:       "3e",
      categorie:   "N5 11ans et +",
      gymnaste:    "",
      photo:       ""
    },
    {
      competition: "Compétition régionnale",
      date:        "Mars 2026",
      place:       "3e",
      categorie:   "N5 11ans et +",
      gymnaste:    "Lizzy",
      photo:       ""
    }
  ]

};
