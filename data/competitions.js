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
      competition: "Compétition nationale",
      date:        "2026",
      note:        "Top 5",
      categorie:   "N6 7–11 ans",
      gymnaste:    "",
      photo:       "2026_Nationnales_N6711.jpeg"
    },
    {
      competition: "Compétition nationale",
      date:        "2026",
      place:       "2e",
      categorie:   "N8 7–10 ans",
      gymnaste:    "",
      photo:       "2026_Nationnales_N8710.jpeg"
    },
    {
      competition: "Compétition nationale",
      date:        "2026",
      place:       "1e",
      categorie:   "N7 11 ans et +",
      gymnaste:    "Sophia",
      photo:       "2026_Nationnales_Sophia.jpeg"
    },
    {
      competition: "Compétition nationale",
      date:        "2026",
      place:       "1e",
      categorie:   "N7 11 ans et +",
      gymnaste:    "",
      photo:       "2026_Nationnales_N711.jpeg"
    },
    {
      competition: "Compétition nationale",
      date:        "2026",
      place:       "3e",
      categorie:   "N8 8–14 ans",
      gymnaste:    "",
      photo:       "2026_Nationnales_N8814.jpeg"
    },
    {
      competition: "Compétition régionnale",
      date:        "Mars 2026",
      place:       "1e",
      categorie:   "N7 11ans et +",
      gymnaste:    "",
      photo:       "2026_Regionnales_N711.png"
    },
    {
      competition: "Compétition régionnale",
      date:        "Fevrier 2026",
      place:       "3e",
      categorie:   "N5 11ans et +",
      gymnaste:    "",
      photo:       "2026_Regionnales_N511.jpeg"
    }
  ]

};
