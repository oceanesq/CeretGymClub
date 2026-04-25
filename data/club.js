/* =============================================
   CÉRET GYM CLUB — Données du club
   Modifier ce fichier pour mettre à jour les informations générales.
   ============================================= */

const CLUB_DATA = {

  /* Identité */
  nom:      "Céret Gym Club",
  saison:   "2026/2027",
  fondation: "[ANNÉE]",           // Remplacez par l'année de fondation

  /* Inscription */
  helloasso: "https://www.helloasso.com/associations/ceretgymclub",

  /* Adresse */
  adresse: {
    rue:        "2 Rue Jean Amade",
    codePostal: "66400",
    ville:      "Céret",
    pays:       "France"
  },

  /* Contact */
  email: "asso.ceretgymclub@gmail.com",

  /* Horaires de présence au club (pour la page contact) */
  horaires_contact: [
    "Lundi – Vendredi : 17h00 – 20h00",
    "Mercredi : 09h00 – 19h00",
    "Samedi : 09h30 – 13h00"
  ],

  /* Réseaux sociaux — remplacez "#" par l'URL réelle */
  reseaux: {
    instagram: "https://www.instagram.com/ceret_gym_club/",
    facebook:  "https://www.facebook.com/ceretgymclub/?locale=fr_FR"
  },

  /* URL iframe Google Maps pour la page contact */
  maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.1!2d2.7487!3d42.4857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a8d6e5f3f3f3f3%3A0x0!2s2+Rue+Jean+Amade%2C+66400+C%C3%A9ret!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",

  /* Chiffres clés affichés sur la page À propos */
  stats: [
    { num: "80+", label: "Adhérents" },
    { num: "2",   label: "Disciplines" },
    { num: "6",   label: "Entraîneuses" },
    { num: "12+", label: "Créneaux / semaine" }
  ]

};
