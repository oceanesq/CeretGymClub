/* =============================================
   PLANNING DES COURS 2026/2027
   Modifier ce fichier pour mettre à jour le planning.

   Format horaire : "HH:MM" (ex: "17:00", "18:30")

   age et type sont OPTIONNELS — ils sont déduits automatiquement
   du nom du groupe via PLANNING_DEFAULTS ci-dessous.
   Renseignez-les uniquement pour un groupe combiné (ex: "L2 / L3")
   ou pour surcharger la valeur par défaut.
   ============================================= */

/* Valeurs par défaut déduites du nom du groupe.
   L'ordre compte : "Parkour Adulte" doit être avant "Parkour". */
const PLANNING_DEFAULTS = {
  "Babygym":        { type: "eveil",   age: "Dès 12 mois" },
  "Éveil":          { type: "eveil",   age: "2–4 ans" },
  "Parkour Adulte": { type: "parkour", age: "16+ ans" },
  "Parkour":        { type: "parkour", age: "8+ ans" },
  "N6":             { type: "comp",    age: "Compétition" },
  "N7":             { type: "comp",    age: "Compétition" },
  "N8":             { type: "comp",    age: "Compétition" },
  "N9":             { type: "comp",    age: "Compétition" },
  "L1":             { type: "",        age: "5–6 ans" },
  "L2":             { type: "",        age: "7–8 ans" },
  "L3":             { type: "",        age: "9–10 ans" },
  "L4":             { type: "",        age: "11–12 ans" },
  "L5":             { type: "",        age: "13–15 ans" },
  "Renfo Adulte":   { type: "renfo",   age: "16+ ans" }
};

const PLANNING_DATA = {
  "Lundi": [
    { start: "17:00", end: "18:00", name: "L1" },
    { start: "18:00", end: "19:30", name: "N8" },
    { start: "19:30", end: "20:30", name: "Renfo Adulte" }
  ],
  "Mardi": [
    { start: "17:00", end: "18:30", name: "L2 / L3",  age: "7–9 ans" },
    { start: "18:30", end: "20:00", name: "Parkour" }
  ],
  "Mercredi": [
    { start: "09:30", end: "10:30", name: "Babygym" },
    { start: "10:30", end: "11:30", name: "Éveil Gymique" },
    { start: "14:00", end: "15:30", name: "L2" },
    { start: "15:30", end: "17:00", name: "L3 / L4",  age: "9–11 ans" },
    { start: "17:00", end: "19:30", name: "N7 / N6" }
  ],
  "Jeudi": [
    { start: "17:00", end: "18:00", name: "Éveil Gymnique" },
    { start: "18:00", end: "19:30", name: "L4 / L5",  age: "11–14 ans" },
    { start: "19:30", end: "21:00", name: "Parkour Adulte" }
  ],
  "Vendredi": [
    { start: "17:00", end: "18:30", name: "L1 / L2",  age: "6–8 ans" },
    { start: "18:30", end: "20:30", name: "N9 / N8" }
  ],
  "Samedi": [
    { start: "09:30", end: "11:00", name: "Babygym + Éveil", age: "12 mois–4 ans" },
    { start: "11:00", end: "12:30", name: "L2 / L3",  age: "7–9 ans" },
    { start: "14:00", end: "16:00", name: "Parkour" }
  ]
};
