/* =============================================
   CÉRET GYM CLUB — Tarifs
   Modifier ce fichier pour mettre à jour les cotisations.

   btn_href : "helloasso" pour renvoyer vers HelloAsso,
              ou un chemin relatif ex: "contact.html"
   ============================================= */

const TARIFS_DATA = {

  saison: "septembre 2026 — juin 2027",

  cards: [
    {
      categorie:    "Loisir",
      nom:          "1 cours / semaine",
      prix:         "À définir",      // Remplacez par le tarif réel, ex: "180"
      periode:      "par an · licence incluse",
      features: [
        "1 séance hebdomadaire",
        "GAF ou Parkour au choix",
        "Licence UFOLEP incluse",
        "Encadrement diplômé",
        "Accès au gala de fin d'année"
      ],
      btn_label:    "S'inscrire",
      btn_href:     "helloasso",
      btn_class:    "btn-primary",
      btn_external: true
    },
    {
      categorie:    "Loisir",
      nom:          "2 cours / semaine",
      prix:         "À définir",
      periode:      "par an · licence incluse",
      features: [
        "2 séances hebdomadaires",
        "GAF ou Parkour",
        "Licence UFOLEP incluse",
        "Encadrement diplômé",
        "Accès au gala de fin d'année",
        "Progression accélérée"
      ],
      btn_label:    "S'inscrire",
      btn_href:     "helloasso",
      btn_class:    "btn-primary",
      btn_external: true
    },
    {
      categorie:    "Compétition",
      nom:          "1 cours / semaine",
      prix:         "À définir",
      periode:      "par an · sur sélection",
      features: [
        "1 séance compétition / sem.",
        "Section GAF compétition",
        "Licence UFOLEP incluse",
        "Participation aux championnats",
        "Tenue de compétition à prévoir"
      ],
      btn_label:    "Nous contacter",
      btn_href:     "contact.html",
      btn_class:    "btn-outline",
      btn_external: false
    },
    {
      categorie:    "Compétition",
      nom:          "2 cours / semaine",
      prix:         "À définir",
      periode:      "par an · sur sélection",
      features: [
        "2 séances compétition / sem.",
        "Section GAF compétition",
        "Licence UFOLEP incluse",
        "Participation aux championnats",
        "Tenue de compétition à prévoir"
      ],
      btn_label:    "Nous contacter",
      btn_href:     "contact.html",
      btn_class:    "btn-outline",
      btn_external: false
    }
  ],

  notes: [
    {
      titre: "Réduction famille",
      texte: "Une remise est appliquée à partir du 2e enfant inscrit dans le même foyer. Contactez-nous pour en bénéficier."
    },
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
