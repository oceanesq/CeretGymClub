/* =============================================
   PLANNING DES COURS
   Modifier ce fichier pour mettre à jour le planning.

   Format horaire : "HH:MM" (ex: "17:00", "18:30")

   age et type sont OPTIONNELS — ils sont déduits automatiquement
   du nom du groupe via PLANNING_DEFAULTS ci-dessous.
   Renseignez-les uniquement pour un groupe combiné (ex: "L2 / L3")
   ou pour surcharger la valeur par défaut.
   ============================================= */

/* Valeurs par défaut déduites du nom du groupe.
   L'ordre compte : les clés les plus spécifiques doivent venir en premier. */
const PLANNING_DEFAULTS = {
  /* Éveil */
  "Babygym":           { type: "eveil",   age: "1 an" },
  "EG1":               { type: "eveil",   age: "2 ans" },
  "EG2":               { type: "eveil",   age: "3 ans" },
  "EG3":               { type: "eveil",   age: "4 ans" },
  /* Compétition — du plus spécifique au plus générique */
  "EVO2N3 - N4":       { type: "comp",    age: "11+" },
  "EVO2N2 - N5/6":     { type: "comp",    age: "11+" },
  "EVO2N2 - N5":       { type: "comp",    age: "11+" },
  "EVO2N1 - N6/7 G":   { type: "comp",    age: "Grandes" },
  "EVO2N1 - N6/7 J":   { type: "comp",    age: "Jeunes" },
  "EVO2N1 - N6/7 P":   { type: "comp",    age: "Petites" },
  "EVO1N2 - N8":       { type: "comp",    age: "Compétition" },
  "PE1 - N9":          { type: "comp",    age: "Grandes" },
  "PE2 - N9":          { type: "comp",    age: "Jeunes" },
  "PE":                { type: "comp",    age: "" },
  "Muscu1":            { type: "comp",    age: "Grandes" },
  "Muscu2":            { type: "comp",    age: "Jeunes" },
  "Muscu":             { type: "comp",    age: "" },
  /* Loisirs */
  "L1":                { type: "loisirs", age: "5–6 ans" },
  "L2":                { type: "loisirs", age: "7–8 ans" },
  "L3":                { type: "loisirs", age: "8 ans" },
  "L4":                { type: "loisirs", age: "11–12 ans" },
  /* Adultes & Parkour */
  "Adultes":           { type: "renfo",   age: "16+ ans" },
  "Parkour":           { type: "renfo",   age: "11+" },
};

const PLANNING_DATA = {
  "Lundi": [
    { start: "17:15", end: "18:30", name: "PE" },
    { start: "18:30", end: "19:30", name: "L4" },
    { start: "19:30", end: "20:30", name: "Muscu" }
  ],
  "Mardi": [
    { start: "17:15", end: "18:45", name: "EVO1N2 - N8" },
    { start: "18:45", end: "20:15", name: "EVO2N1 - N6/7 G" }
  ],
  "Mercredi": [
    { start: "12:15", end: "13:45", name: "EVO2N1 - N6/7 P" },
    { start: "13:45", end: "15:15", name: "EVO2N2 - N5/6" },
    { start: "15:15", end: "16:45", name: "EVO2N3 - N4" },
    { start: "16:45", end: "18:00", name: "PE2 - N9" },
    { start: "18:00", end: "19:00", name: "L3" },
    { start: "19:00", end: "20:30", name: "Adultes" }
  ],
  "Jeudi": [
    { start: "17:15", end: "18:15", name: "L1" },
    { start: "18:15", end: "19:15", name: "L2" }
  ],
  "Vendredi": [
    { start: "17:15", end: "18:45", name: "EVO1N2 - N8" },
    { start: "18:45", end: "20:15", name: "EVO2N1 - N6/7 G" }
  ],
  "Samedi": [
    { start: "09:00", end: "09:45", name: "Babygym" },
    { start: "10:00", end: "10:45", name: "EG1" },
    { start: "11:00", end: "11:45", name: "EG2" },
    { start: "12:00", end: "12:45", name: "EG3" },
    { start: "13:00", end: "14:30", name: "EVO2N3 - N4"},
    { start: "14:30", end: "16:00", name: "EVO2N2 - N5"},
    { start: "16:00", end: "17:30", name: "EVO2N1 - N6/7 P"},
    { start: "17:30", end: "19:00", name: "Parkour" }
  ]
};
