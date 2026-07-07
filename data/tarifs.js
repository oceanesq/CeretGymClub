/* =============================================
   CÉRET GYM CLUB — Tarifs
   Modifier ce fichier pour mettre à jour les cotisations.

   btn_href : "helloasso" pour renvoyer vers HelloAsso,
              ou un chemin relatif ex: "contact.html"
   ============================================= */

const TARIFS_DATA = {

  saison: "2026 - 2027",

  cards: [
    {
      categorie:    "Loisirs",
      type:         "loisirs",
      nom:          "1 cours / semaine",
      prix:         "200€",      // Remplacez par le tarif réel, ex: "180"
      periode:      "par an · licence incluse",
      features: [
        "1 séance hebdomadaire | 1h",
        "GAF",
        "Licence UFOLEP incluse",
        "Accès au gala de fin d'année"
      ],
      btn_label:    "S'inscrire",
      btn_href:     "helloasso",
      btn_class:    "btn-primary",
      btn_external: true
    },
    {
      categorie:    "N9",
      type:         "comp",
      nom:          "1 cours / semaine",
      prix:         "210€",      // Remplacez par le tarif réel, ex: "180"
      periode:      "par an · licence incluse",
      features: [
        "1 séance hebdomadaire | 1h",
        "GAF",
        "Licence UFOLEP incluse",
        "Accès au gala de fin d'année"
      ],
      btn_label:    "S'inscrire",
      btn_href:     "helloasso",
      btn_class:    "btn-primary",
      btn_external: true
    },
    {
      categorie:    "Competitions",
      type:         "comp",
      nom:          "2 cours / semaine",
      prix:         "280€",
      periode:      "par an · licence incluse",
      features: [
        "2 séances hebdomadaires",
        "GAF ou Parkour",
        "Licence UFOLEP incluse",
        "Accès au gala de fin d'année",
        "Tenue de compétition à prévoir"
      ],
      btn_label:    "S'inscrire",
      btn_href:     "helloasso",
      btn_class:    "btn-primary",
      btn_external: true
    },
    {
      categorie:    "Muscu",
      type:         "comp",
      nom:          "1 cours / semaine",
      prix:         "50€",
      periode:      "par an · sur sélection",
      features: [
        "1 séance hebdomadaire",
        "Cours de musculation",
        "Licence UFOLEP incluse",
      ],
      btn_label:    "S'inscrire",
      btn_href:     "helloasso",
      btn_class:    "btn-primary",
      btn_external: true
    },
    {
      categorie:    "Adultes / P3",
      type:         "renfo",
      nom:          "1 cours / semaine",
      prix:         "230€",
      periode:      "par an · sur sélection",
      features: [
        "1 séance hebdomadaire",
        "Cours de musculation",
        "Licence UFOLEP incluse",
      ],
      btn_label:    "S'inscrire",
      btn_href:     "helloasso",
      btn_class:    "btn-primary",
      btn_external: true
    },
    {
      categorie:    "Eveil et Baby Gym",
      type:         "eveil",
      nom:          "1 cours / semaine",
      prix:         "190€",
      periode:      "par an · sur sélection",
      features: [
        "1 séance hebdomadaire",
        "GAF / GAM",
        "Licence UFOLEP incluse",
      ],
      btn_label:    "S'inscrire",
      btn_href:     "helloasso",
      btn_class:    "btn-primary",
      btn_external: true
    }
  ],

  notes: [
        {
      titre: "Licence UFOLEP",
      texte: "La licence fédérale est incluse dans la cotisation annuelle. Elle couvre l'assurance sportive pour toute la saison."
    },
    {
      titre: "Tenues",
      texte: "Les justaucorps et équipements peuvent être commandés directement via HelloAsso."
    }
  ],

  paiement: "L'inscription et le paiement se font en ligne via <strong>HelloAsso</strong>, plateforme sécurisée pour les associations. Paiement en plusieurs fois possible. Chèques acceptés sur demande."

};
