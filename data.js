/* ============================================================
   data.js — Données de la maquette BME France CDP
   Éditer ce fichier pour modifier le contenu de la maquette.
   ============================================================ */


/* ── CLIENTS ────────────────────────────────────────────────────────────────
   Champs :
     id          : identifiant unique (pas d'espace, pas d'accents)
     nom         : nom affiché dans la maquette
     ville       : ville du client
     activites   : familles d'achat principales (séparées par ", ")
     score       : score de priorité ATC (0–100)
     scoreColor  : couleur du score  '#4BCA81' vert | '#EA7600' orange | '#C23934' rouge
     crossSell   : familles à développer (tableau de chaînes, [] si aucune)
     statut      : 'Actif' | 'Inactif'
     ficheClient : 'Oui' → clique ouvre la fiche détail | 'Non' → clique inactif
     ca          : CA année en cours (affiché dans la fiche client)
     code        : code client interne
     siret       : numéro SIRET
     dateCreation: date de création du compte (JJ/MM/AAAA)
   ──────────────────────────────────────────────────────────────────────── */
var CLIENTS = [
    {
        id: 'bati',
        nom: 'Bâti Rhône',
        ville: 'Vénissieux',
        activites: 'Maçonnerie',
        score: 72,
        scoreColor: '#4BCA81',
        crossSell: [],
        statut: 'Actif',
        ficheClient: 'Non',
        ca: '248 750 €',
        code: 'CLT-78945',
        siret: '123 456 789 00012',
        dateCreation: '15/03/2018'
    },
    {
        id: 'dupont',
        nom: 'Dupont Construction',
        ville: 'Lyon',
        activites: 'Maçonnerie, Plâtrerie, Outillage',
        score: 35,
        scoreColor: '#EA7600',
        crossSell: ['Carrelage', 'Charpente', 'Bois', 'Extérieur'],
        statut: 'Actif',
        ficheClient: 'Non',
        ca: '112 300 €',
        code: 'CLT-45231',
        siret: '987 654 321 00034',
        dateCreation: '02/07/2020'
    },
    {
        id: 'martin',
        nom: 'Maçonnerie Martin',
        ville: 'Villeurbanne',
        activites: 'Maçonnerie, Carrelage',
        score: 28,
        scoreColor: '#EA7600',
        crossSell: ['Plâtrerie', 'Outillage'],
        statut: 'Actif',
        ficheClient: 'Non',
        ca: '78 500 €',
        code: 'CLT-33102',
        siret: '456 123 789 00056',
        dateCreation: '18/11/2019'
    },
    {
        id: 'artisan',
        nom: 'Artisan Carrelage Plus',
        ville: 'Saint-Priest',
        activites: 'Carrelage, Plâtrerie, Outillage',
        score: 18,
        scoreColor: '#C23934',
        crossSell: ['Maçonnerie', 'Charpente', 'Bois', 'Extérieur'],
        statut: 'Actif',
        ficheClient: 'Non',
        ca: '41 200 €',
        code: 'CLT-61874',
        siret: '321 789 456 00078',
        dateCreation: '05/04/2021'
    },
    {
        id: 'aprobatec',
        nom: 'Aprobatec',
        ville: 'Lyon',
        activites: '',
        score: 0,
        scoreColor: '#9A9A9A',
        crossSell: [],
        statut: 'Actif',
        ficheClient: 'Non',
        ca: '—',
        code: 'CLT-90012',
        siret: '654 321 987 00090',
        dateCreation: '11/01/2022'
    },
    {
        id: 'EBP',
        nom: 'Entreprise Bâtiment Pro',
        ville: 'Paris',
        activites: 'Plâtrerie, Isolation',
        score: 84,
        scoreColor: '#4BCA81',
        crossSell: [],
        statut: 'Actif',
        ficheClient: 'Oui',
        ca: '248 750 €',
        code: 'CLT-78945',
        siret: '123 456 789 00012',
        dateCreation: '15/03/2018'
    }
];


/* ── PROSPECTS ──────────────────────────────────────────────────────────────
   Champs :
     id        : identifiant unique
     nom       : nom affiché
     ville     : ville du prospect
     categorie : secteur d'activité
     source    : origine du contact ('Salon' | 'Terrain' | 'Référence' | ...)
     statut    : 'Chaud' | 'Tiède' | 'Froid'
     montant   : estimation du potentiel CA (ex: '150k€')
   ──────────────────────────────────────────────────────────────────────── */
var PROSPECTS = [
    {
        id: 'cnr',
        nom: 'Constructions Nouvelles Rhône',
        ville: 'Décines-Charpieu',
        categorie: 'Construction neuve',
        source: 'Salon',
        statut: 'Chaud',
        montant: '150k€'
    },
    {
        id: 'chapes',
        nom: 'Chapes & Sols Pro',
        ville: 'Meyzieu',
        categorie: 'Chapes / revêtements sols',
        source: 'Terrain',
        statut: 'Chaud',
        montant: '95k€'
    }
];


/* ── VISITES (agenda) ───────────────────────────────────────────────────────
   Champs :
     date   : format 'AAAA-MM-JJ'
     time   : format 'HH:MM'
     client : nom du client ou prospect (doit correspondre au champ 'nom' ci-dessus)
     type   : type de visite (ex: 'Prospection', 'Suivi commercial', ...)
     bg     : couleur de fond de la pastille agenda (ex: '#E8F4FD')
     color  : couleur du texte de la pastille agenda (ex: '#0070D2')
   ──────────────────────────────────────────────────────────────────────── */
var VISITES = [
    { date: '2026-05-19', time: '08:30', client: 'Bâti Rhône',           type: 'Prospection',          bg: '#E8F4FD', color: '#0070D2' },
    { date: '2026-05-19', time: '10:30', client: 'Aprobatec',             type: 'Visite négociation',   bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-05-20', time: '09:00', client: 'Dupont Construction',   type: 'Suivi commercial',     bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-05-21', time: '11:00', client: 'Artisan Carrelage Plus',type: 'Point CA trimestriel', bg: '#F7EBF0', color: '#C23934' }
];
