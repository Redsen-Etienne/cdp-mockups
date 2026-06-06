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
        segments: ['maconnerie'],
        crossSell: ['revetement', 'charpente', 'bois', 'exterieurs'],
        statut: 'Actif',
        ficheClient: 'Non',
        ca: '248 750 €',
        code: 'CLT-78945',
        siret: '123 456 789 00012',
        dateCreation: '15/03/2018',
        'atc rattaché': 'Thomas Girard',
        caVal: 248750, caN1Val: 225000,
        margeVal: 89550, margeN1Val: 76500, margePct: 36, margeN1Pct: 34,
        nbDevis: 14, nbCommandes: 11, tauxTransfo: 79,
        derniereCommande: '2026-06-02', derniereVisite: '15/05/2026', panierMoyen: 2800,
        caYTD: 142000, caYTDN1: 118000, resteAFacturer: 34200
    },
    {
        id: 'dupont',
        nom: 'Dupont Construction',
        ville: 'Lyon',
        activites: 'Maçonnerie, Plâtrerie, Outillage',
        score: 35,
        scoreColor: '#EA7600',
        segments: ['maconnerie', 'platrerie', 'outillage'],
        crossSell: ['revetement', 'charpente', 'bois', 'exterieurs'],
        statut: 'Actif',
        ficheClient: 'Non',
        ca: '112 300 €',
        code: 'CLT-45231',
        siret: '987 654 321 00034',
        dateCreation: '02/07/2020',
        'atc rattaché': 'Lucas Reynaud',
        derniereCommande: '2026-03-20', derniereVisite: '12/04/2026', panierMoyen: 1800,
        caYTD: 58000, caYTDN1: 71000, resteAFacturer: 12600
    },
    {
        id: 'martin',
        nom: 'Maçonnerie Martin',
        ville: 'Villeurbanne',
        activites: 'Maçonnerie, Carrelage',
        score: 28,
        scoreColor: '#EA7600',
        segments: ['maconnerie', 'revetement'],
        crossSell: ['platrerie', 'outillage'],
        statut: 'Actif',
        ficheClient: 'Non',
        ca: '78 500 €',
        code: 'CLT-33102',
        siret: '456 123 789 00056',
        dateCreation: '18/11/2019',
        'atc rattaché': 'Sarah Lefèvre',
        derniereCommande: '2026-02-10', derniereVisite: '28/03/2026', panierMoyen: 650,
        caYTD: 31200, caYTDN1: 28900, resteAFacturer: 5400
    },
    {
        id: 'artisan',
        nom: 'Artisan Carrelage Plus',
        ville: 'Saint-Priest',
        activites: 'Carrelage, Plâtrerie, Outillage',
        score: 18,
        scoreColor: '#C23934',
        segments: ['revetement', 'platrerie', 'outillage'],
        crossSell: ['maconnerie', 'charpente', 'bois', 'exterieurs'],
        statut: 'Actif',
        ficheClient: 'Non',
        ca: '41 200 €',
        code: 'CLT-61874',
        siret: '321 789 456 00078',
        dateCreation: '05/04/2021',
        'atc rattaché': 'Julie Marchand',
        derniereCommande: '2026-04-28', derniereVisite: '05/05/2026', panierMoyen: 320,
        caYTD: 18400, caYTDN1: 21600, resteAFacturer: 2850
    },
    {
        id: 'aprobatec',
        nom: 'Aprobatec',
        ville: 'Lyon',
        activites: '',
        score: 0,
        scoreColor: '#9A9A9A',
        segments: ['platrerie'],
        crossSell: ['maconnerie', 'outillage', 'exterieurs'],
        statut: 'Actif',
        ficheClient: 'Non',
        ca: '—',
        code: 'CLT-90012',
        siret: '654 321 987 00090',
        dateCreation: '11/01/2022',
        'atc rattaché': 'Thomas Girard',
        caVal: 41200, caN1Val: 28400,
        margeVal: 14420, margeN1Val: 8804, margePct: 35, margeN1Pct: 31,
        nbDevis: 5, nbCommandes: 3, tauxTransfo: 60,
        derniereCommande: '2026-05-10', derniereVisite: '19/05/2026', panierMoyen: 450,
        caYTD: 22400, caYTDN1: 26800, resteAFacturer: 7100
    },
    {
        id: 'EBP',
        nom: 'Entreprise Bâtiment Pro',
        ville: 'Paris',
        activites: 'Plâtrerie, Isolation',
        score: 84,
        scoreColor: '#4BCA81',
        segments: ['platrerie', 'outillage'],
        crossSell: ['maconnerie', 'charpente', 'bois'],
        segmentsPct: [
            { id: 'platrerie',  pct: 45 },
            { id: 'outillage',  pct: 28 },
            { id: 'revetement', pct: 15 },
            { id: 'maconnerie', pct: 12 }
        ],
        statut: 'Actif',
        ficheClient: 'Oui',
        ca: '248 750 €',
        code: 'CLT-78945',
        siret: '123 456 789 00012',
        dateCreation: '15/03/2018',
        'atc rattaché': 'Thomas Girard',
        derniereCommande: '2026-04-15', derniereVisite: '02/06/2026', panierMoyen: 3200,
        caYTD: 138000, caYTDN1: 125000, resteAFacturer: 48500
    }
];


/* ── PROSPECTS ──────────────────────────────────────────────────────────────
   Champs :
     id        : identifiant unique
     nom       : nom affiché (= 'prospect rattaché' du lead associé)
     ville     : ville du prospect
     segments  : tableau d'ids SEGMENTATION_PRODUIT (ex: ['maconnerie','platrerie'])
     source    : origine du contact ('Salon' | 'Terrain' | 'Référence' | ...)
     statut    : 'Chaud' | 'Tiède' | 'Froid'
     montant   : estimation du potentiel CA (repris du lead associé)
   ──────────────────────────────────────────────────────────────────────── */
var PROSPECTS = [
    { id: 'PRO-10001', nom: 'Travaux Pro 26',        ville: 'Valence',           segments: ['maconnerie'],                    source: 'Terrain',    statut: 'Froid',  montant: '15 k€',  devisEnCours: 0, 'atc rattaché': 'Thomas Girard'  },
    { id: 'PRO-10002', nom: "Isol'Montagne",         ville: 'Grenoble',          segments: ['platrerie'],                     source: 'Salon',      statut: 'Froid',  montant: '18 k€',  devisEnCours: 1, 'atc rattaché': 'Sarah Lefèvre'  },
    { id: 'PRO-10003', nom: 'Maçon Ardèche',         ville: 'Aubenas',           segments: ['maconnerie'],                    source: 'Terrain',    statut: 'Froid',  montant: '20 k€',  devisEnCours: 0, 'atc rattaché': 'Thomas Girard'  },
    { id: 'PRO-10004', nom: 'Bâti Loire',            ville: 'Saint-Étienne',     segments: ['maconnerie', 'charpente'],       source: 'Référence',  statut: 'Froid',  montant: '22 k€',  devisEnCours: 2, 'atc rattaché': 'Julie Marchand' },
    { id: 'PRO-10005', nom: 'Sols & Carreaux',       ville: 'Bron',              segments: ['revetement'],                    source: 'Salon',      statut: 'Froid',  montant: '15 k€',  devisEnCours: 0, 'atc rattaché': 'Sarah Lefèvre'  },
    { id: 'PRO-10006', nom: 'Plâtrerie Dubois',      ville: 'Caluire-et-Cuire',  segments: ['platrerie'],                     source: 'Terrain',    statut: 'Tiède',  montant: '20 k€',  devisEnCours: 1, 'atc rattaché': 'Lucas Reynaud'  },
    { id: 'PRO-10007', nom: 'Endutech',              ville: 'Villeurbanne',      segments: ['maconnerie', 'exterieurs'],      source: 'Salon',      statut: 'Tiède',  montant: '25 k€',  devisEnCours: 3, 'atc rattaché': 'Thomas Girard'  },
    { id: 'PRO-10008', nom: 'Interbâti',             ville: 'Lyon',              segments: ['maconnerie', 'platrerie', 'revetement'], source: 'Référence', statut: 'Tiède', montant: '28 k€', devisEnCours: 2, 'atc rattaché': 'Julie Marchand' },
    { id: 'PRO-10009', nom: 'Rénov Pro',             ville: 'Décines-Charpieu',  segments: ['maconnerie'],                    source: 'Terrain',    statut: 'Tiède',  montant: '22 k€',  devisEnCours: 1, 'atc rattaché': 'Nicolas Duval'  },
    { id: 'PRO-10010', nom: 'Isolation 2A',          ville: 'Vénissieux',        segments: ['platrerie'],                     source: 'Salon',      statut: 'Tiède',  montant: '30 k€',  devisEnCours: 4, 'atc rattaché': 'Sarah Lefèvre'  },
    { id: 'PRO-10011', nom: 'Sols & Surfaces',       ville: 'Meyzieu',           segments: ['revetement'],                    source: 'Terrain',    statut: 'Tiède',  montant: '25 k€',  devisEnCours: 2, 'atc rattaché': 'Sarah Lefèvre'  },
    { id: 'PRO-10012', nom: 'Construction Lacour',   ville: 'Mions',             segments: ['maconnerie', 'charpente'],       source: 'Référence',  statut: 'Tiède',  montant: '25 k€',  devisEnCours: 3, 'atc rattaché': 'Emma Bertrand'  },
    { id: 'PRO-10013', nom: 'Dupont Construction',   ville: 'Lyon',              segments: ['maconnerie'],                    source: 'Référence',  statut: 'Chaud',  montant: '45 k€',  devisEnCours: 5, 'atc rattaché': 'Lucas Reynaud'  },
    { id: 'PRO-10014', nom: 'Bâti Rhône',            ville: 'Vénissieux',        segments: ['maconnerie'],                    source: 'Terrain',    statut: 'Chaud',  montant: '60 k€',  devisEnCours: 4, 'atc rattaché': 'Emma Bertrand'  },
    { id: 'PRO-10015', nom: 'Maçonnerie Martin',     ville: 'Villeurbanne',      segments: ['maconnerie', 'revetement'],      source: 'Référence',  statut: 'Chaud',  montant: '40 k€',  devisEnCours: 6, 'atc rattaché': 'Thomas Girard'  },
    { id: 'PRO-10016', nom: 'Groupe Perrin',         ville: 'Lyon',              segments: ['maconnerie', 'platrerie', 'revetement'], source: 'Salon', statut: 'Chaud', montant: '35 k€', devisEnCours: 3, 'atc rattaché': 'Julie Marchand' },
    { id: 'PRO-10017', nom: 'Electrolab',            ville: 'Saint-Priest',      segments: ['outillage'],                     source: 'Terrain',    statut: 'Chaud',  montant: '50 k€',  devisEnCours: 5, 'atc rattaché': 'Nicolas Duval'  },
    { id: 'PRO-10018', nom: 'Constructions Réunies', ville: 'Chassieu',          segments: ['maconnerie', 'charpente'],       source: 'Référence',  statut: 'Chaud',  montant: '50 k€',  devisEnCours: 4, 'atc rattaché': 'Sarah Lefèvre'  },
    { id: 'PRO-10019', nom: 'Plâtrier du Rhône',     ville: 'Vénissieux',        segments: ['platrerie'],                     source: 'Terrain',    statut: 'Chaud',  montant: '30 k€',  devisEnCours: 2, 'atc rattaché': 'Lucas Reynaud'  },
    { id: 'PRO-10020', nom: 'Batimontagne',          ville: 'Chambéry',          segments: ['maconnerie'],                    source: 'Salon',      statut: 'Chaud',  montant: '99 k€',  devisEnCours: 6, 'atc rattaché': 'Emma Bertrand'  },
    { id: 'PRO-10021', nom: 'Artisan Carrelage +',   ville: 'Saint-Priest',      segments: ['revetement', 'platrerie'],       source: 'Terrain',    statut: 'Chaud',  montant: '100 k€', devisEnCours: 5, 'atc rattaché': 'Nicolas Duval'  },
    { id: 'PRO-10022', nom: 'Décor & Aménagement',   ville: 'Lyon',              segments: ['revetement', 'exterieurs'],      source: 'Référence',  statut: 'Chaud',  montant: '85 k€',  devisEnCours: 3, 'atc rattaché': 'Lucas Reynaud'  },
    { id: 'PRO-10023', nom: 'BTP Express',           ville: 'Givors',            segments: ['maconnerie'],                    source: 'Terrain',    statut: 'Chaud',  montant: '62 k€',  devisEnCours: 4, 'atc rattaché': 'Thomas Girard'  },
    { id: 'PRO-10024', nom: 'Ciment & Co',           ville: 'Bron',              segments: ['maconnerie'],                    source: 'Salon',      statut: 'Chaud',  montant: '45 k€',  devisEnCours: 2, 'atc rattaché': 'Sarah Lefèvre'  },
    { id: 'PRO-10025', nom: 'Renovation Plus',       ville: 'Caluire-et-Cuire',  segments: ['maconnerie', 'platrerie'],       source: 'Référence',  statut: 'Froid',  montant: '30 k€',  devisEnCours: 0, 'atc rattaché': 'Emma Bertrand'  },
    { id: 'PRO-10026', nom: 'Chantiers Lombard',     ville: 'Villefranche',      segments: ['maconnerie', 'charpente'],       source: 'Terrain',    statut: 'Froid',  montant: '45 k€',  devisEnCours: 1, 'atc rattaché': 'Julie Marchand' },
    { id: 'PRO-10027', nom: 'Maçon Pro',             ville: 'Tarare',            segments: ['maconnerie'],                    source: 'Salon',      statut: 'Froid',  montant: '28 k€',  devisEnCours: 0, 'atc rattaché': 'Nicolas Duval'  },
    { id: 'PRO-10028', nom: "Isol'Tech",             ville: 'Bourgoin-Jallieu',  segments: ['platrerie'],                     source: 'Terrain',    statut: 'Froid',  montant: '35 k€',  devisEnCours: 1, 'atc rattaché': 'Thomas Girard'  },
    { id: 'PRO-10029', nom: 'Pro Bâtiment',          ville: 'Ambérieu-en-Bugey', segments: ['maconnerie'],                    source: 'Référence',  statut: 'Froid',  montant: '22 k€',  devisEnCours: 0, 'atc rattaché': 'Sarah Lefèvre'  }
];


/* ── VISITES (agenda) ───────────────────────────────────────────────────────
   Champs :
     date      : format 'AAAA-MM-JJ'
     time      : format 'HH:MM'
     nom       : nom du client ou prospect
     visiteDun : 'client' | 'prospect'
     type      : type de visite (ex: 'Prospection', 'Suivi commercial', ...)
     objectif      : objectif de la visite (texte libre)
     notes         : notes complémentaires (texte libre)
     accompagnant  : nom de l'accompagnant (texte libre)
     bg            : couleur de fond de la pastille agenda (ex: '#E8F4FD')
     color     : couleur du texte de la pastille agenda (ex: '#0070D2')
   ──────────────────────────────────────────────────────────────────────── */
var VISITES = [
    /* ── Thomas Girard ── */
    { date: '2026-05-19', time: '08:30', nom: 'Bâti Rhône',              visiteDun: 'prospect', type: 'Prospection',           objectif: 'Présenter la gamme maçonnerie',        notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Chez le client – Vénissieux',      bg: '#E8F4FD', color: '#0070D2' },
    { date: '2026-05-19', time: '10:30', nom: 'Aprobatec',                visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Renouvellement contrat annuel',        notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Dans nos locaux – Lyon',            bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-05-20', time: '09:00', nom: 'Dupont Construction',      visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Point sur commandes en cours',         notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Chez le client – Lyon',             bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-05-21', time: '11:00', nom: 'Artisan Carrelage Plus',   visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan Q1 et objectifs Q2',             notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Chez le client – Saint-Priest',    bg: '#F7EBF0', color: '#C23934' },
    { date: '2026-06-02', time: '09:30', nom: 'Entreprise Bâtiment Pro',  visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Présenter nouvelles gammes isolation', notes: '', accompagnant: 'Marc Dupuis',   atc: 'Thomas Girard',  localisation: 'Chez le client – Paris',            bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-06-04', time: '14:00', nom: 'Constructions Leblanc',    visiteDun: 'prospect', type: 'Prospection',           objectif: 'Premier contact, découverte besoin',   notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Sur chantier – Boulogne-Billancourt', bg: '#E8F4FD', color: '#0070D2' },

    /* ── Lucas Reynaud ── */
    { date: '2026-05-19', time: '09:00', nom: 'Maçonnerie Bertrand',      visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Suivi chantier Résidence Les Pins',   notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Sur chantier – Marseille',          bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-05-20', time: '14:30', nom: 'BTP Sud-Est',               visiteDun: 'prospect', type: 'Prospection',           objectif: 'Présenter offre outillage pro',        notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Chez le prospect – Aubagne',        bg: '#E8F4FD', color: '#0070D2' },
    { date: '2026-05-22', time: '10:00', nom: 'Terrassement Collet',       visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan CA et fidélisation',             notes: '', accompagnant: 'Sophie Arnaud', atc: 'Lucas Reynaud',  localisation: 'Dans nos locaux – Marseille',       bg: '#F7EBF0', color: '#C23934' },
    { date: '2026-05-27', time: '11:30', nom: 'Rénovation Faure & Fils',   visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Négocier volume annuel',               notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Chez le client – Toulon',           bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-06-01', time: '09:00', nom: 'Maçonnerie Bertrand',      visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Validation commande plâtrerie',        notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Chez le client – Marseille',        bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-06-03', time: '15:00', nom: 'Constructions Morel',       visiteDun: 'prospect', type: 'Prospection',           objectif: 'Découverte compte, potentiel élevé',  notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Chez le prospect – Aix-en-Provence', bg: '#E8F4FD', color: '#0070D2' },

    /* ── Sarah Lefèvre ── */
    { date: '2026-05-18', time: '09:30', nom: 'Maçonnerie Martin',         visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Point livraisons et satisfaction',     notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Chez le client – Villeurbanne',     bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-05-20', time: '11:00', nom: 'Chantiers Dubois',           visiteDun: 'prospect', type: 'Prospection',           objectif: 'Présentation gamme carrelage',         notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Dans nos locaux – Grenoble',        bg: '#E8F4FD', color: '#0070D2' },
    { date: '2026-05-26', time: '14:00', nom: 'Rénovation Express',         visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan et plan d\'action Q3',           notes: '', accompagnant: 'Lucie Bonnet',  atc: 'Sarah Lefèvre',  localisation: 'Chez le client – Grenoble',         bg: '#F7EBF0', color: '#C23934' },
    { date: '2026-05-28', time: '10:30', nom: 'Bati Services 69',           visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Renouvellement conditions tarifaires', notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Dans nos locaux – Lyon',            bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-06-02', time: '09:00', nom: 'Maçonnerie Martin',         visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Signature accord-cadre 2026',          notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Chez le client – Villeurbanne',     bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-06-05', time: '14:30', nom: 'Isolation Rhône-Alpes',      visiteDun: 'prospect', type: 'Prospection',           objectif: 'Premier contact, marché isolation',    notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Sur chantier – Chambéry',           bg: '#E8F4FD', color: '#0070D2' },

    /* ── Julie Marchand ── */
    { date: '2026-05-18', time: '14:00', nom: 'Artisan Carrelage Plus',    visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Présenter nouveautés carrelage',       notes: '', accompagnant: '',              atc: 'Julie Marchand', localisation: 'Chez le client – Saint-Priest',    bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-05-21', time: '09:30', nom: 'Plomberie Giraud',           visiteDun: 'prospect', type: 'Prospection',           objectif: 'Détecter besoin outillage',            notes: '', accompagnant: '',              atc: 'Julie Marchand', localisation: 'Chez le prospect – Bron',           bg: '#E8F4FD', color: '#0070D2' },
    { date: '2026-05-25', time: '10:00', nom: 'Carrelage & Co',              visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan Q1, potentiel croisé',          notes: '', accompagnant: 'Pierre Moulin', atc: 'Julie Marchand', localisation: 'Dans nos locaux – Lyon',            bg: '#F7EBF0', color: '#C23934' },
    { date: '2026-05-27', time: '15:30', nom: 'Revêtements Pons',            visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Négociation remise volume annuel',    notes: '', accompagnant: '',              atc: 'Julie Marchand', localisation: 'Chez le client – Décines',          bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-06-01', time: '11:00', nom: 'Artisan Carrelage Plus',    visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Suivi devis DEV-2026-0892',           notes: '', accompagnant: '',              atc: 'Julie Marchand', localisation: 'Chez le client – Saint-Priest',    bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-06-04', time: '09:00', nom: 'Sols & Murs Concept',        visiteDun: 'prospect', type: 'Prospection',           objectif: 'Découverte compte, secteur revêtement', notes: '', accompagnant: '',            atc: 'Julie Marchand', localisation: 'Chez le prospect – Vaulx-en-Velin', bg: '#E8F4FD', color: '#0070D2' },

    /* ── Visites futures (à partir du 05/06/2026) ── */
    { date: '2026-06-05', time: '14:30', nom: 'Isolation Rhône-Alpes',      visiteDun: 'prospect', type: 'Prospection',           objectif: 'Premier contact, marché isolation',    notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Sur chantier – Chambéry',           bg: '#E8F4FD', color: '#0070D2' },
    { date: '2026-06-06', time: '09:30', nom: 'Bâti Rhône',                 visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Suivi commande en cours et upsell',   notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Chez le client – Vénissieux',       bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-06-09', time: '10:00', nom: 'Constructions Morel',        visiteDun: 'prospect', type: 'Visite négociation',    objectif: 'Présenter offre sur-mesure',           notes: '', accompagnant: 'Sophie Arnaud', atc: 'Lucas Reynaud',  localisation: 'Chez le prospect – Aix-en-Provence', bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-06-10', time: '14:00', nom: 'Carrelage & Co',              visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan S1 et projection S2',            notes: '', accompagnant: '',              atc: 'Julie Marchand', localisation: 'Dans nos locaux – Lyon',            bg: '#F7EBF0', color: '#C23934' },
    { date: '2026-06-11', time: '09:00', nom: 'Bati Services 69',            visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Renouvellement conditions 2026-2027', notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Chez le client – Lyon',             bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-06-12', time: '11:30', nom: 'Entreprise Bâtiment Pro',    visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Point avancement chantier isolation',  notes: '', accompagnant: 'Marc Dupuis',   atc: 'Thomas Girard',  localisation: 'Chez le client – Paris',            bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-06-15', time: '10:30', nom: 'Maçonnerie Bertrand',        visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan S1 et plan d\'action Q3',        notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Sur chantier – Marseille',          bg: '#FEF5E9', color: '#B05A00' }
];


/* ── COMPTES RENDUS ──────────────────────────────────────────────────────────
   Champs :
     id               : identifiant unique (format CR-XXXXX)
     visiteRef        : clé de la visite associée (dateStr|time|nom)
     produits         : tableau de produits discutés
                        valeurs possibles : 'Maçonnerie' | 'Plâtrerie' | 'Carrelage'
                                          | 'Charpente'  | 'Outillage' | 'Extérieur'
     besoins          : besoins détectés (texte libre)
     concurrents      : concurrents identifiés (texte libre)
     niveauInteret    : niveau d'intérêt de 1 à 5
     notesSup         : notes supplémentaires (texte libre)
   ──────────────────────────────────────────────────────────────────────── */
var COMPTES_RENDUS = [];


/* ── LEADS ──────────────────────────────────────────────────────────────────
   Champs :
     id                  : identifiant unique (format LEAD_N)
     'prospect rattaché' : nom du prospect associé au lead
     montant             : montant estimé (ex: '15 k€')
     'atc responsable'   : ATC en charge du lead
     statut              : 'Froid' | 'Tiède' | 'Chaud' | 'En cours' | 'Gagnée' | 'Perdue'
   ──────────────────────────────────────────────────────────────────────── */
var LEADS = [
    { id: 'LEAD_1',  'prospect rattaché': 'Travaux Pro 26',       montant: '15 k€',  'atc responsable': 'Thomas Girard',   statut: 'Froid'    },
    { id: 'LEAD_2',  'prospect rattaché': "Isol'Montagne",        montant: '18 k€',  'atc responsable': 'Sarah Lefèvre',   statut: 'Froid'    },
    { id: 'LEAD_3',  'prospect rattaché': 'Maçon Ardèche',        montant: '20 k€',  'atc responsable': 'Thomas Girard',   statut: 'Froid'    },
    { id: 'LEAD_4',  'prospect rattaché': 'Bâti Loire',           montant: '22 k€',  'atc responsable': 'Julie Marchand',  statut: 'Froid'    },
    { id: 'LEAD_5',  'prospect rattaché': 'Sols & Carreaux',      montant: '15 k€',  'atc responsable': 'Sarah Lefèvre',   statut: 'Froid'    },
    { id: 'LEAD_6',  'prospect rattaché': 'Plâtrerie Dubois',     montant: '20 k€',  'atc responsable': 'Lucas Reynaud',   statut: 'Tiède'    },
    { id: 'LEAD_7',  'prospect rattaché': 'Endutech',             montant: '25 k€',  'atc responsable': 'Thomas Girard',   statut: 'Tiède'    },
    { id: 'LEAD_8',  'prospect rattaché': 'Interbâti',            montant: '28 k€',  'atc responsable': 'Julie Marchand',  statut: 'Tiède'    },
    { id: 'LEAD_9',  'prospect rattaché': 'Rénov Pro',            montant: '22 k€',  'atc responsable': 'Nicolas Duval',   statut: 'Tiède'    },
    { id: 'LEAD_10', 'prospect rattaché': 'Isolation 2A',         montant: '30 k€',  'atc responsable': 'Sarah Lefèvre',   statut: 'Tiède'    },
    { id: 'LEAD_11', 'prospect rattaché': 'Sols & Surfaces',      montant: '25 k€',  'atc responsable': 'Sarah Lefèvre',   statut: 'Tiède'    },
    { id: 'LEAD_12', 'prospect rattaché': 'Construction Lacour',  montant: '25 k€',  'atc responsable': 'Emma Bertrand',   statut: 'Tiède'    },
    { id: 'LEAD_13', 'prospect rattaché': 'Dupont Construction',  montant: '45 k€',  'atc responsable': 'Lucas Reynaud',   statut: 'Chaud'    },
    { id: 'LEAD_14', 'prospect rattaché': 'Bâti Rhône',           montant: '60 k€',  'atc responsable': 'Emma Bertrand',   statut: 'Chaud'    },
    { id: 'LEAD_15', 'prospect rattaché': 'Maçonnerie Martin',    montant: '40 k€',  'atc responsable': 'Thomas Girard',   statut: 'Chaud'    },
    { id: 'LEAD_16', 'prospect rattaché': 'Groupe Perrin',        montant: '35 k€',  'atc responsable': 'Julie Marchand',  statut: 'Chaud'    },
    { id: 'LEAD_17', 'prospect rattaché': 'Electrolab',           montant: '50 k€',  'atc responsable': 'Nicolas Duval',   statut: 'Chaud'    },
    { id: 'LEAD_18', 'prospect rattaché': 'Constructions Réunies',montant: '50 k€',  'atc responsable': 'Sarah Lefèvre',   statut: 'Chaud'    },
    { id: 'LEAD_19', 'prospect rattaché': 'Plâtrier du Rhône',    montant: '30 k€',  'atc responsable': 'Lucas Reynaud',   statut: 'Chaud'    },
    { id: 'LEAD_20', 'prospect rattaché': 'Batimontagne',         montant: '99 k€',  'atc responsable': 'Emma Bertrand',   statut: 'En cours' },
    { id: 'LEAD_21', 'prospect rattaché': 'Artisan Carrelage +',  montant: '100 k€', 'atc responsable': 'Nicolas Duval',   statut: 'En cours' },
    { id: 'LEAD_22', 'prospect rattaché': 'Décor & Aménagement',  montant: '85 k€',  'atc responsable': 'Lucas Reynaud',   statut: 'Gagnée'   },
    { id: 'LEAD_23', 'prospect rattaché': 'BTP Express',          montant: '62 k€',  'atc responsable': 'Thomas Girard',   statut: 'Gagnée'   },
    { id: 'LEAD_24', 'prospect rattaché': 'Ciment & Co',          montant: '45 k€',  'atc responsable': 'Sarah Lefèvre',   statut: 'Gagnée'   },
    { id: 'LEAD_25', 'prospect rattaché': 'Renovation Plus',      montant: '30 k€',  'atc responsable': 'Emma Bertrand',   statut: 'Perdue'   },
    { id: 'LEAD_26', 'prospect rattaché': 'Chantiers Lombard',    montant: '45 k€',  'atc responsable': 'Julie Marchand',  statut: 'Perdue'   },
    { id: 'LEAD_27', 'prospect rattaché': 'Maçon Pro',            montant: '28 k€',  'atc responsable': 'Nicolas Duval',   statut: 'Perdue'   },
    { id: 'LEAD_28', 'prospect rattaché': "Isol'Tech",            montant: '35 k€',  'atc responsable': 'Thomas Girard',   statut: 'Perdue'   },
    { id: 'LEAD_29', 'prospect rattaché': 'Pro Bâtiment',         montant: '22 k€',  'atc responsable': 'Sarah Lefèvre',   statut: 'Perdue'   }
];


/* ── ACTIONS ────────────────────────────────────────────────────────────────*/
var ACTIONS = [
];


/* ── DEMANDES ───────────────────────────────────────────────────────────────*/
var DEMANDES = [
];


/* ── SEGMENTATION PRODUIT ───────────────────────────────────────────────────
   Segments commerciaux utilisés pour le classement des familles de produits.
   ─────────────────────────────────────────────────────────────────────────── */
var SEGMENTATION_PRODUIT = [
    { id: 'maconnerie',    label: 'Maçonnerie - Gros oeuvre' },
    { id: 'platrerie',     label: 'Plâtrerie - Isolation' },
    { id: 'revetement',    label: 'Revêtement - Carrelage' },
    { id: 'charpente',     label: 'Charpente - Couverture' },
    { id: 'outillage',     label: 'Outils - Équipement - Quincaillerie' },
    { id: 'bois',          label: 'Bois - Panneaux - Menuiserie' },
    { id: 'exterieurs',    label: 'Aménagements extérieurs' }
];
