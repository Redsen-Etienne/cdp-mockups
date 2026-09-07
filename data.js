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
        id: 'CT-0001',
        nom: 'Bâti Rhône',
        ville: 'Vénissieux',
        activites: 'Maçonnerie',
        score: 72,
        scoreColor: '#4BCA81',
        segments: ['SEG-0001'],
        crossSell: ['SEG-0003', 'SEG-0004', 'SEG-0006', 'SEG-0007'],
        segmentsPct: [
            { id: 'SEG-0001', pct: 72 },
            { id: 'SEG-0003', pct: 15 },
            { id: 'SEG-0005',  pct: 13 }
        ],
        statut: 'Actif',
        ficheClient: 'Oui',
        ca: '248 750 €',
        code: 'CLT-78945',
        siret: '123 456 789 00012',
        dateCreation: '05/04/2018',
        atcRattache: 'Thomas Girard',
        caVal: 248750, caN1Val: 225000,
        margeVal: 89550, margeN1Val: 76500, margePct: 36, margeN1Pct: 34,
        nbDevis: 14, nbCommandes: 11, tauxTransfo: 79,
        derniereCommande: '2026-06-23', derniereVisite: '05/06/2026', panierMoyen: 2800,
        caYTD: 142000, caYTDN1: 118000, resteAFacturer: 34200,
        // Identité
        statutJuridique: 'SARL',
        codeNAF: '4399B',
        capitalSocial: '30 000 €',
        dateCreationEntreprise: '01/10/2012',
        adresse: '24 avenue de la Résistance\n69200 Vénissieux',
        adresseFacturation: 'Identique',
        tel: '04 78 12 34 56',
        email: 'contact@bati-rhone.fr',
        siteWeb: 'www.bati-rhone.fr',
        secteurActivite: 'Travaux de gros œuvre',
        activitePrincipale: 'Maçonnerie',
        activiteSecondaire: 'Carrelage',
        effectif: '8 personnes',
        qualifications: 'Qualibat 2111',
        agence: 'Lyon Est',
        // Transactionnel
        typePaiement: 'Terme 30 jours',
        modePaiement: 'Virement',
        bonCommande: 'Non obligatoire',
        noteSFAC: 'B (Bon)',
        assuranceCredit: 'Couverte 80%',
        encoursAutorise: 30000,
        encoursCourant: 8500,
        facturesImpayees: 0,
        delaiMoyenPaiement: '34 jours',
        logistique: 'Enlèvement 75% / Livraison 25%',
        // Comportemental
        recurrenceCommandes: '1.5 commandes / semaine',
        canalPrefere: 'Téléphone (70%)',
        horairesPrivilegies: '07h-09h, 12h-14h',
        partRaboni: '~45% de ses achats',
        potentielCommercial: 'Fort',
        concurrents: 'Point P, BigMat',
        caGeo: 'Vénissieux 65%, Lyon 35%',
        // Données imbriquées
        contacts: [
            { prenom:'Robert',  nom:'Garnier',  fonction:'Gérant',             tel:'06 11 22 33 44', email:'r.garnier@bati-rhone.fr',   birth:'1978-05-13', autoCmd:true,  compta:false, notes:'' },
            { prenom:'Isabelle',nom:'Garnier',  fonction:'Responsable achats', tel:'06 55 66 77 88', email:'i.garnier@bati-rhone.fr',   birth:'',           autoCmd:true,  compta:false, notes:'' },
            { prenom:'Marc',    nom:'Tissot',   fonction:'Comptabilité',        tel:'04 78 12 34 57', email:'compta@bati-rhone.fr',      birth:'',           autoCmd:false, compta:true,  notes:'' }
        ],
        chantiers: [
            { nom:'Résidence Les Fontaines', ville:'Vénissieux',    adresse:'', dateDebut:'2026-03-03', dateFin:'', ca:'38000', caFmt:'38 000 €', statut:'en_cours',    statutLabel:'En cours',    statutBadge:'badge-active', contact:'robert_garnier' },
            { nom:'École Jean Moulin',        ville:'Saint-Fons',   adresse:'', dateDebut:'2025-12-06', dateFin:'', ca:'22500', caFmt:'22 500 €', statut:'en_cours',    statutLabel:'En cours',    statutBadge:'badge-active', contact:'isabelle_garnier' },
            { nom:'Entrepôt Logistique',      ville:'Corbas',       adresse:'', dateDebut:'2026-04-22', dateFin:'', ca:'15000', caFmt:'15 000 €', statut:'preparation', statutLabel:'Préparation', statutBadge:'badge-pro',    contact:'robert_garnier' }
        ],
        produits: [
            { ref:'BLK-200', libelle:'Bloc béton creux 20cm',      qte:'12 400', ca:'42 160 €', pct:'16.9%' },
            { ref:'CIM-350', libelle:'Ciment Portland 35kg',        qte:'3 850',  ca:'28 490 €', pct:'11.4%' },
            { ref:'SBL-010', libelle:'Sable de construction big bag',qte:'980',   ca:'19 600 €', pct:'7.9%'  },
            { ref:'ARM-008', libelle:'Armature acier HA 8mm (barre)',qte:'2 100', ca:'16 800 €', pct:'6.7%'  },
            { ref:'OUL-ELE', libelle:'Perceuse-visseuse sans fil',   qte:'28',    ca:'11 200 €', pct:'4.5%'  }
        ],
        devisCmds: [
            { icon:'📄', titre:'Devis DEV-2026-0874 - 12 800 € HT',  detail:'Créé le 05/06/2026 • Chantier: Résidence Les Fontaines', badge:'badge-pro',    badgeLabel:'En attente validation' },
            { icon:'📦', titre:'Commande CMD-2026-7241 - 7 350 € HT', detail:'Créée le 18/06/2026 • Livraison prévue: 25/06/2026',     badge:'badge-active', badgeLabel:'En préparation' }
        ],
        evenements: [
            { icon:'🎉', titre:'Journée portes ouvertes Raboni Lyon Est',   detail:'29/11/2025 • Présent avec 1 collaborateur • Intérêt marqué pour les nouveautés béton' },
            { icon:'🍽️', titre:"Déjeuner commercial annuel",                detail:'10/04/2025 • Brasserie du Rhône • Revue de compte et plan d\'action 2025' }
        ],
        crdv: [],
        activites: [
            { date:'23 Juin 2026 - 08:45',  html:'📞 <strong>Appel téléphonique entrant</strong> - Robert Garnier<br>Demande de confirmation livraison CMD-2026-7241. Traité par Thomas Girard.' },
            { date:'18 Juin 2026 - 14:00',   html:'📦 <strong>Nouvelle commande</strong> - CMD-2026-7241<br>Montant: 7 350 € HT • Livraison prévue: 25/06/2026 • Statut: En préparation' },
            { date:'05 Juin 2026 - 10:30',   html:'📄 <strong>Nouveau devis créé</strong> - DEV-2026-0874<br>Montant: 12 800 € HT • Chantier: Résidence Les Fontaines • En attente validation' },
            { date:'05 Juin 2026 - 09:00',   html:'👤 <strong>Visite commerciale</strong> - Thomas Girard<br>Lieu: Chantier Résidence Les Fontaines • CR créé' },
            { date:'26 Mai 2026 - 11:15',   html:'💳 <strong>Paiement reçu</strong> - Facture FA-2026-1124<br>Montant: 9 200 € • Mode: Virement • Délai: 31 jours' },
            { date:'11 Mai 2026 - 16:00', html:'📧 <strong>Email envoyé</strong> - Thomas Girard<br>Objet: Nouveautés béton 2026 - Offre spéciale • Ouvert le 12/05/2026' }
        ],
        actions: [
            { icon:'⚠️', titre:'Relancer devis DEV-2026-0874',      detail:'Échéance: 22/07/2026 • Montant: 12 800 € • Action: Appel de suivi prévu' },
            { icon:'📅', titre:'Visite commerciale planifiée',        detail:'Date: 27/06/2026 à 09h30 • Lieu: Chez le client – Vénissieux • Suivi commande et upsell' }
        ]
    },
    {
        id: 'CT-0002',
        nom: 'Dupont Construction',
        ville: 'Lyon',
        activites: 'Maçonnerie, Plâtrerie, Outillage',
        score: 35,
        scoreColor: '#EA7600',
        segments: ['SEG-0001', 'SEG-0002', 'SEG-0005'],
        crossSell: ['SEG-0003', 'SEG-0004', 'SEG-0006', 'SEG-0007'],
        segmentsPct: [
            { id: 'SEG-0001', pct: 40 },
            { id: 'SEG-0002',  pct: 35 },
            { id: 'SEG-0005',  pct: 25 }
        ],
        statut: 'Actif',
        ficheClient: 'Oui',
        ca: '112 300 €',
        code: 'CLT-45231',
        siret: '987 654 321 00034',
        dateCreation: '23/07/2020',
        atcRattache: 'Lucas Reynaud',
        caVal: 112300, caN1Val: 128000,
        margeVal: 38682, margeN1Val: 44160, margePct: 34, margeN1Pct: 34,
        nbDevis: 9, nbCommandes: 6, tauxTransfo: 67,
        derniereCommande: '2026-04-10', derniereVisite: '03/05/2026', panierMoyen: 1800,
        caYTD: 58000, caYTDN1: 71000, resteAFacturer: 12600,
        // Identité
        statutJuridique: 'SAS',
        codeNAF: '4120B',
        capitalSocial: '80 000 €',
        dateCreationEntreprise: '04/04/2008',
        adresse: '7 rue des Bâtisseurs\n69003 Lyon',
        adresseFacturation: 'Identique',
        tel: '04 72 45 67 89',
        email: 'contact@dupont-construction.fr',
        siteWeb: 'www.dupont-construction.fr',
        secteurActivite: 'Construction de bâtiments résidentiels',
        activitePrincipale: 'Maçonnerie générale',
        activiteSecondaire: 'Plâtrerie',
        effectif: '22 personnes',
        qualifications: 'Qualibat 2111, RGE',
        agence: 'Lyon Centre',
        // Transactionnel
        typePaiement: 'Terme 45 jours',
        modePaiement: 'Virement',
        bonCommande: 'Obligatoire',
        noteSFAC: 'A (Très bon)',
        assuranceCredit: 'Couverte 100%',
        encoursAutorise: 50000,
        encoursCourant: 15200,
        facturesImpayees: 1,
        delaiMoyenPaiement: '48 jours',
        logistique: 'Livraison 60% / Enlèvement 40%',
        // Comportemental
        recurrenceCommandes: '1 commande / semaine',
        canalPrefere: 'Email (55%)',
        horairesPrivilegies: '09h-11h, 14h-17h',
        partRaboni: '~30% de ses achats',
        potentielCommercial: 'Moyen',
        concurrents: 'Point P, Gedimat',
        caGeo: 'Lyon 80%, Villeurbanne 20%',
        // Données imbriquées
        contacts: [
            { prenom:'Alain',   nom:'Dupont',  fonction:'PDG',                tel:'06 20 30 40 50', email:'a.dupont@dupont-construction.fr',  birth:'1968-12-21', autoCmd:true,  compta:false, notes:'' },
            { prenom:'Sylvie',  nom:'Moreau',  fonction:'Responsable achats', tel:'06 61 72 83 94', email:'s.moreau@dupont-construction.fr',  birth:'',           autoCmd:true,  compta:false, notes:'' },
            { prenom:'Patrice', nom:'Lebrun',  fonction:'Comptabilité',        tel:'04 72 45 67 90', email:'compta@dupont-construction.fr',   birth:'',           autoCmd:false, compta:true,  notes:'' }
        ],
        chantiers: [
            { nom:'Copropriété Montchat',   ville:'Lyon 3ème',      adresse:'', dateDebut:'2026-02-10', dateFin:'', ca:'32000', caFmt:'32 000 €', statut:'en_cours',    statutLabel:'En cours',    statutBadge:'badge-active', contact:'alain_dupont' },
            { nom:'Réhabilitation Gerland', ville:'Lyon 7ème',      adresse:'', dateDebut:'2025-10-22', dateFin:'', ca:'18500', caFmt:'18 500 €', statut:'en_cours',    statutLabel:'En cours',    statutBadge:'badge-active', contact:'sylvie_moreau' }
        ],
        produits: [
            { ref:'BLK-200', libelle:'Bloc béton creux 20cm',        qte:'6 800', ca:'23 120 €', pct:'20.6%' },
            { ref:'PLA-BA13',libelle:'Plaque de plâtre BA13 2.5m',   qte:'1 200', ca:'18 720 €', pct:'16.7%' },
            { ref:'CIM-350', libelle:'Ciment Portland 35kg',          qte:'1 950', ca:'14 430 €', pct:'12.8%' },
            { ref:'OUL-MXR', libelle:'Malaxeur électrique 1600W',     qte:'8',     ca:'6 400 €',  pct:'5.7%'  }
        ],
        devisCmds: [
            { icon:'📄', titre:'Devis DEV-2026-0511 - 9 400 € HT',   detail:'Créé le 31/03/2026 • Chantier: Copropriété Montchat',    badge:'badge-pro',    badgeLabel:'En attente validation' },
            { icon:'📦', titre:'Commande CMD-2026-5832 - 5 800 € HT', detail:'Créée le 08/04/2026 • Livraison prévue: 12/04/2026',     badge:'badge-active', badgeLabel:'Livrée' }
        ],
        evenements: [
            { icon:'🎉', titre:'Salon BatiMAT Lyon',                  detail:'05/10/2025 • Présent • Contact renoué sur gamme plâtrerie' }
        ],
        crdv: [],
        activites: [
            { date:'10 Avril 2026 - 10:00',   html:'📦 <strong>Nouvelle commande</strong> - CMD-2026-5832<br>Montant: 5 800 € HT • Livraison: 12/04/2026 • Statut: Livrée' },
            { date:'03 Mai 2026 - 14:30',  html:'👤 <strong>Visite commerciale</strong> - Lucas Reynaud<br>Lieu: Bureau client – Lyon • CR créé' },
            { date:'22 Mars 2026 - 09:00',   html:'📧 <strong>Email envoyé</strong> - Lucas Reynaud<br>Objet: Offre spéciale plâtrerie T1 2026' },
            { date:'11 Mars 2026 - 11:45',html:'💳 <strong>Paiement reçu</strong> - Facture FA-2026-0412<br>Montant: 8 100 € • Mode: Virement • Délai: 50 jours' }
        ],
        actions: [
            { icon:'⚠️', titre:'Relancer devis DEV-2026-0511',        detail:'Échéance: 21/07/2026 • Montant: 9 400 € • Risque de perte si pas de réponse sous 15j' },
            { icon:'📅', titre:'Appel de suivi planifié',              detail:'Date: 06/07/2026 à 10h00 • Objectif: Relance devis + point CA S1' }
        ]
    },
    {
        id: 'CT-0003',
        nom: 'Maçonnerie Martin',
        ville: 'Villeurbanne',
        activites: 'Maçonnerie, Carrelage',
        score: 28,
        scoreColor: '#EA7600',
        segments: ['SEG-0001', 'SEG-0003'],
        crossSell: ['SEG-0002', 'SEG-0005'],
        segmentsPct: [
            { id: 'SEG-0001', pct: 60 },
            { id: 'SEG-0003', pct: 30 },
            { id: 'SEG-0005',  pct: 10 }
        ],
        statut: 'Actif',
        ficheClient: 'Oui',
        ca: '78 500 €',
        code: 'CLT-33102',
        siret: '456 123 789 00056',
        dateCreation: '09/12/2019',
        atcRattache: 'Sarah Lefèvre',
        caVal: 78500, caN1Val: 72000,
        margeVal: 26890, margeN1Val: 23760, margePct: 34, margeN1Pct: 33,
        nbDevis: 8, nbCommandes: 5, tauxTransfo: 63,
        derniereCommande: '2026-03-03', derniereVisite: '18/04/2026', panierMoyen: 650,
        caYTD: 31200, caYTDN1: 28900, resteAFacturer: 5400,
        // Identité
        statutJuridique: 'EURL',
        codeNAF: '4399C',
        capitalSocial: '10 000 €',
        dateCreationEntreprise: '26/06/2016',
        adresse: '3 impasse des Artisans\n69100 Villeurbanne',
        adresseFacturation: 'Identique',
        tel: '04 78 89 01 23',
        email: 'maconnerie.martin@gmail.com',
        siteWeb: '',
        secteurActivite: 'Travaux de maçonnerie',
        activitePrincipale: 'Maçonnerie',
        activiteSecondaire: 'Carrelage',
        effectif: '4 personnes',
        qualifications: 'Qualibat 2111',
        agence: 'Lyon Est',
        // Transactionnel
        typePaiement: 'Comptant à la commande',
        modePaiement: 'Chèque',
        bonCommande: 'Non obligatoire',
        noteSFAC: 'C (Acceptable)',
        assuranceCredit: 'Non couverte',
        encoursAutorise: 10000,
        encoursCourant: 3200,
        facturesImpayees: 0,
        delaiMoyenPaiement: '15 jours',
        logistique: 'Enlèvement 90% / Livraison 10%',
        // Comportemental
        recurrenceCommandes: '0.5 commande / semaine',
        canalPrefere: 'Téléphone (80%)',
        horairesPrivilegies: '07h-08h30',
        partRaboni: '~55% de ses achats',
        potentielCommercial: 'Faible-Moyen',
        concurrents: 'Point P',
        caGeo: 'Villeurbanne 70%, Lyon 30%',
        // Données imbriquées
        contacts: [
            { prenom:'Franck',  nom:'Martin', fonction:'Gérant / Artisan',    tel:'06 33 44 55 66', email:'maconnerie.martin@gmail.com', birth:'1980-08-04', autoCmd:true, compta:true, notes:'' }
        ],
        chantiers: [
            { nom:'Rénovation Villa Couzon', ville:'Caluire',      adresse:'', dateDebut:'2026-03-22', dateFin:'', ca:'12000', caFmt:'12 000 €', statut:'en_cours',    statutLabel:'En cours',    statutBadge:'badge-active', contact:'franck_martin' },
            { nom:'Extension Maison Bron',   ville:'Bron',         adresse:'', dateDebut:'2025-12-31', dateFin:'', ca:'9500',  caFmt:'9 500 €',  statut:'termine',     statutLabel:'Terminé',     statutBadge:'badge-closed', contact:'franck_martin' }
        ],
        produits: [
            { ref:'BLK-200', libelle:'Bloc béton creux 20cm',       qte:'4 200', ca:'14 280 €', pct:'18.2%' },
            { ref:'CAR-GRS', libelle:'Carrelage grès cérame 60x60', qte:'380',   ca:'11 400 €', pct:'14.5%' },
            { ref:'CIM-350', libelle:'Ciment Portland 35kg',         qte:'900',   ca:'6 660 €',  pct:'8.5%'  }
        ],
        devisCmds: [
            { icon:'📄', titre:'Devis DEV-2026-0302 - 4 200 € HT',   detail:'Créé le 15/02/2026 • Chantier: Rénovation Villa Couzon', badge:'badge-pro', badgeLabel:'En attente validation' }
        ],
        evenements: [
            { icon:'🎉', titre:'Journée portes ouvertes Raboni Lyon Est', detail:'29/11/2025 • Présent • Retour positif sur gamme carrelage' }
        ],
        crdv: [],
        activites: [
            { date:'18 Avril 2026 - 09:00',   html:'👤 <strong>Visite commerciale</strong> - Sarah Lefèvre<br>Lieu: Chantier Villa Couzon – Caluire • CR créé' },
            { date:'03 Mars 2026 - 10:15',html:'📦 <strong>Nouvelle commande</strong> - CMD-2026-3102<br>Montant: 3 800 € HT • Enlèvement en agence' },
            { date:'23 Février 2026 - 14:00',html:'📞 <strong>Appel téléphonique entrant</strong> - Franck Martin<br>Demande de prix sur carrelage grès cérame 60x60' },
            { date:'05 Février 2026 - 08:30',html:'💳 <strong>Paiement reçu</strong> - Facture FA-2025-8821<br>Montant: 4 100 € • Mode: Chèque • Délai: 12 jours' }
        ],
        actions: [
            { icon:'⚠️', titre:'Relancer devis DEV-2026-0302',        detail:'Échéance: 05/08/2026 • Montant: 4 200 € • Contact: Appel matinal recommandé' }
        ]
    },
    {
        id: 'CT-0004',
        nom: 'Artisan Carrelage Plus',
        ville: 'Saint-Priest',
        activites: 'Carrelage, Plâtrerie, Outillage',
        score: 18,
        scoreColor: '#C23934',
        segments: ['SEG-0003', 'SEG-0002', 'SEG-0005'],
        crossSell: ['SEG-0001', 'SEG-0004', 'SEG-0006', 'SEG-0007'],
        segmentsPct: [
            { id: 'SEG-0003', pct: 55 },
            { id: 'SEG-0002',  pct: 28 },
            { id: 'SEG-0005',  pct: 17 }
        ],
        statut: 'Actif',
        ficheClient: 'Oui',
        ca: '41 200 €',
        code: 'CLT-61874',
        siret: '321 789 456 00078',
        dateCreation: '26/04/2021',
        atcRattache: 'Julie Marchand',
        caVal: 41200, caN1Val: 47500,
        margeVal: 13596, margeN1Val: 16150, margePct: 33, margeN1Pct: 34,
        nbDevis: 7, nbCommandes: 4, tauxTransfo: 57,
        derniereCommande: '2026-05-19', derniereVisite: '26/05/2026', panierMoyen: 320,
        caYTD: 18400, caYTDN1: 21600, resteAFacturer: 2850,
        // Identité
        statutJuridique: 'Auto-entrepreneur',
        codeNAF: '4333Z',
        capitalSocial: '—',
        dateCreationEntreprise: '02/02/2019',
        adresse: '18 rue de la Paix\n69800 Saint-Priest',
        adresseFacturation: 'Identique',
        tel: '06 44 55 66 77',
        email: 'artisan.carrelage.plus@orange.fr',
        siteWeb: '',
        secteurActivite: 'Revêtements sols et murs',
        activitePrincipale: 'Carrelage',
        activiteSecondaire: 'Plâtrerie légère',
        effectif: '2 personnes',
        qualifications: 'CTB-P',
        agence: 'Lyon Sud-Est',
        // Transactionnel
        typePaiement: 'Comptant à la commande',
        modePaiement: 'CB / Chèque',
        bonCommande: 'Non obligatoire',
        noteSFAC: 'D (Insuffisant)',
        assuranceCredit: 'Non couverte',
        encoursAutorise: 5000,
        encoursCourant: 1800,
        facturesImpayees: 0,
        delaiMoyenPaiement: '8 jours',
        logistique: 'Enlèvement 95% / Livraison 5%',
        // Comportemental
        recurrenceCommandes: '0.3 commande / semaine',
        canalPrefere: 'Comptoir agence (85%)',
        horairesPrivilegies: '07h-08h',
        partRaboni: '~65% de ses achats',
        potentielCommercial: 'Faible',
        concurrents: 'Leroy Merlin, Bricomarché',
        caGeo: 'Saint-Priest 60%, Bron 40%',
        // Données imbriquées
        contacts: [
            { prenom:'Kevin', nom:'Chambon', fonction:'Gérant / Artisan', tel:'06 44 55 66 77', email:'artisan.carrelage.plus@orange.fr', birth:'1990-03-29', autoCmd:true, compta:true, notes:'' }
        ],
        chantiers: [
            { nom:'Salle de bain Résidence Soleil', ville:'Saint-Priest', adresse:'', dateDebut:'2026-05-06', dateFin:'', ca:'4200', caFmt:'4 200 €', statut:'en_cours', statutLabel:'En cours', statutBadge:'badge-active', contact:'kevin_chambon' }
        ],
        produits: [
            { ref:'CAR-GRS', libelle:'Carrelage grès cérame 60x60',  qte:'620',  ca:'18 600 €', pct:'45.1%' },
            { ref:'COL-FLX', libelle:'Colle carrelage flexC2',        qte:'290',  ca:'7 250 €',  pct:'17.6%' },
            { ref:'JOI-BLC', libelle:'Joint époxy blanc seau 5kg',    qte:'180',  ca:'4 500 €',  pct:'10.9%' }
        ],
        devisCmds: [
            { icon:'📄', titre:'Devis DEV-2026-0892 - 2 150 € HT', detail:'Créé le 11/05/2026 • Salle de bain Résidence Soleil', badge:'badge-pro', badgeLabel:'En attente validation' }
        ],
        evenements: [
            { icon:'🛒', titre:'Passage comptoir agence',              detail:'26/05/2026 • Achat spontané outillage • Fidèle à l\'agence Lyon Sud-Est' }
        ],
        crdv: [],
        activites: [
            { date:'26 Mai 2026 - 09:30',   html:'👤 <strong>Visite comptoir</strong> - Julie Marchand<br>Achat outillage + échange sur démarche fidélité' },
            { date:'19 Mai 2026 - 07:45', html:'📦 <strong>Nouvelle commande</strong> - CMD-2026-6104<br>Montant: 1 920 € HT • Enlèvement agence' },
            { date:'11 Mai 2026 - 15:00', html:'📄 <strong>Nouveau devis créé</strong> - DEV-2026-0892<br>Montant: 2 150 € HT • En attente validation' },
            { date:'01 Mai 2026 - 08:00', html:'💳 <strong>Paiement reçu</strong> - Facture FA-2026-0744<br>Montant: 1 650 € • Mode: CB • Délai: 7 jours' }
        ],
        actions: [
            { icon:'⚠️', titre:'Risque attrition détecté',            detail:'CA en baisse de -13% vs N-1 • Action: Contacter pour proposition offre fidélité' }
        ]
    },
    {
        id: 'CT-0005',
        nom: 'Aprobatec',
        ville: 'Lyon',
        activites: 'Plâtrerie',
        score: 0,
        scoreColor: '#9A9A9A',
        segments: ['SEG-0002'],
        crossSell: ['SEG-0001', 'SEG-0005', 'SEG-0007'],
        segmentsPct: [
            { id: 'SEG-0002',  pct: 85 },
            { id: 'SEG-0005',  pct: 15 }
        ],
        statut: 'Actif',
        ficheClient: 'Oui',
        ca: '41 200 €',
        code: 'CLT-90012',
        siret: '654 321 987 00090',
        dateCreation: '01/02/2022',
        atcRattache: 'Thomas Girard',
        caVal: 41200, caN1Val: 28400,
        margeVal: 14420, margeN1Val: 8804, margePct: 35, margeN1Pct: 31,
        nbDevis: 5, nbCommandes: 3, tauxTransfo: 60,
        derniereCommande: '2026-05-31', derniereVisite: '09/06/2026', panierMoyen: 450,
        caYTD: 22400, caYTDN1: 26800, resteAFacturer: 7100,
        // Identité
        statutJuridique: 'SAS',
        codeNAF: '4332A',
        capitalSocial: '20 000 €',
        dateCreationEntreprise: '19/10/2018',
        adresse: '52 boulevard des Techniciens\n69008 Lyon',
        adresseFacturation: 'Identique',
        tel: '04 78 56 78 90',
        email: 'aprobatec@aprobatec.fr',
        siteWeb: 'www.aprobatec.fr',
        secteurActivite: 'Travaux de plâtrerie',
        activitePrincipale: 'Plâtrerie',
        activiteSecondaire: 'Isolation thermique intérieure',
        effectif: '6 personnes',
        qualifications: 'RGE, Qualibat 6112',
        agence: 'Lyon Centre',
        // Transactionnel
        typePaiement: 'Terme 30 jours',
        modePaiement: 'Virement',
        bonCommande: 'Non obligatoire',
        noteSFAC: 'B (Bon)',
        assuranceCredit: 'Couverte 60%',
        encoursAutorise: 20000,
        encoursCourant: 6800,
        facturesImpayees: 0,
        delaiMoyenPaiement: '28 jours',
        logistique: 'Livraison 70% / Enlèvement 30%',
        // Comportemental
        recurrenceCommandes: '0.8 commande / semaine',
        canalPrefere: 'Téléphone (60%)',
        horairesPrivilegies: '08h-10h',
        partRaboni: '~40% de ses achats',
        potentielCommercial: 'Moyen',
        concurrents: 'Dispano, Placoplatre direct',
        caGeo: 'Lyon 85%, Oullins 15%',
        // Données imbriquées
        contacts: [
            { prenom:'Christophe', nom:'Arbogast', fonction:'Gérant',             tel:'06 77 88 99 00', email:'c.arbogast@aprobatec.fr', birth:'1985-03-12', autoCmd:true,  compta:false, notes:'' },
            { prenom:'Lucie',      nom:'Fournier', fonction:'Responsable achats', tel:'06 11 22 00 11', email:'l.fournier@aprobatec.fr', birth:'',           autoCmd:true,  compta:false, notes:'' }
        ],
        chantiers: [
            { nom:'Bureaux Confluence', ville:'Lyon 2ème',  adresse:'', dateDebut:'2026-04-05', dateFin:'', ca:'14000', caFmt:'14 000 €', statut:'en_cours',    statutLabel:'En cours',    statutBadge:'badge-active', contact:'christophe_arbogast' },
            { nom:'Logements Part-Dieu',ville:'Lyon 3ème',  adresse:'', dateDebut:'2026-01-29', dateFin:'', ca:'8500',  caFmt:'8 500 €',  statut:'en_cours',    statutLabel:'En cours',    statutBadge:'badge-active', contact:'lucie_fournier' }
        ],
        produits: [
            { ref:'PLA-BA13', libelle:'Plaque de plâtre BA13 2.5m',    qte:'2 100', ca:'32 760 €', pct:'79.5%' },
            { ref:'RAI-340',  libelle:'Rail métallique 48mm',           qte:'1 400', ca:'11 200 €', pct:'27.2%' },
            { ref:'VIS-120',  libelle:'Vis TTPC 25mm (boîte 1000)',     qte:'420',   ca:'9 240 €',  pct:'22.4%' }
        ],
        devisCmds: [
            { icon:'📄', titre:'Devis DEV-2026-1122 - 6 800 € HT',   detail:'Créé le 23/05/2026 • Chantier: Bureaux Confluence',  badge:'badge-pro',    badgeLabel:'En attente validation' },
            { icon:'📦', titre:'Commande CMD-2026-8010 - 4 200 € HT', detail:'Créée le 29/05/2026 • Livraison prévue: 02/06/2026', badge:'badge-active', badgeLabel:'Livrée' }
        ],
        evenements: [
            { icon:'🎉', titre:'Journée portes ouvertes Raboni Lyon Centre', detail:'12/11/2025 • Présent • Intérêt nouveautés isolation' }
        ],
        crdv: [],
        activites: [
            { date:'09 Juin 2026 - 09:00',   html:'👤 <strong>Visite commerciale</strong> - Thomas Girard<br>Lieu: Chantier Bureaux Confluence – Lyon 2ème • CR créé' },
            { date:'31 Mai 2026 - 13:30',   html:'📦 <strong>Nouvelle commande</strong> - CMD-2026-8010<br>Montant: 4 200 € HT • Livraison: 02/06/2026 • Statut: Livrée' },
            { date:'23 Mai 2026 - 11:00',   html:'📄 <strong>Nouveau devis créé</strong> - DEV-2026-1122<br>Montant: 6 800 € HT • En attente validation' },
            { date:'06 Mai 2026 - 08:15', html:'💳 <strong>Paiement reçu</strong> - Facture FA-2026-0965<br>Montant: 5 600 € • Mode: Virement • Délai: 26 jours' }
        ],
        actions: [
            { icon:'📅', titre:'Relancer devis DEV-2026-1122',          detail:'Échéance: 10/08/2026 • Montant: 6 800 € • Client en croissance, fort potentiel' },
            { icon:'⭐', titre:'Proposer passage compte prioritaire',    detail:'CA +45% vs N-1 • Seuil atteint pour bénéficier des conditions préférentielles' }
        ]
    },
    {
        id: 'CT-0006',
        nom: 'Entreprise Bâtiment Pro',
        ville: 'Paris',
        activites: 'Plâtrerie, Isolation',
        score: 84,
        scoreColor: '#4BCA81',
        segments: ['SEG-0002', 'SEG-0005'],
        crossSell: ['SEG-0001', 'SEG-0004', 'SEG-0006'],
        segmentsPct: [
            { id: 'SEG-0002',  pct: 45 },
            { id: 'SEG-0005',  pct: 28 },
            { id: 'SEG-0003', pct: 15 },
            { id: 'SEG-0001', pct: 12 }
        ],
        statut: 'Actif',
        ficheClient: 'Oui',
        ca: '248 750 €',
        code: 'CLT-78945',
        siret: '123 456 789 00012',
        dateCreation: '05/04/2018',
        atcRattache: 'Thomas Girard',
        caVal: 248750, caN1Val: 210450,
        margeVal: 89550, margeN1Val: 75762, margePct: 36, margeN1Pct: 36,
        nbDevis: 18, nbCommandes: 13, tauxTransfo: 68,
        derniereCommande: '2026-05-06', derniereVisite: '23/06/2026', panierMoyen: 3200,
        caYTD: 138000, caYTDN1: 125000, resteAFacturer: 48500,
        // Identité
        statutJuridique: 'SARL',
        codeNAF: '4399C',
        capitalSocial: '50 000 €',
        dateCreationEntreprise: '05/03/2015',
        adresse: '15 rue du Commerce\n75015 Paris',
        adresseFacturation: 'Identique',
        tel: '01 23 45 67 89',
        email: 'contact@ebpro.fr',
        siteWeb: 'www.ebpro.fr',
        secteurActivite: 'Travaux de finition',
        activitePrincipale: 'Plâtrerie, isolation',
        activiteSecondaire: 'Peinture',
        effectif: '15 personnes',
        qualifications: 'RGE, Qualibat',
        agence: 'Paris Sud',
        // Transactionnel
        typePaiement: 'Terme 45 jours',
        modePaiement: 'Virement',
        bonCommande: 'Obligatoire',
        noteSFAC: 'A+ (Excellent)',
        assuranceCredit: 'Couverte 100%',
        encoursAutorise: 50000,
        encoursCourant: 12450,
        facturesImpayees: 0,
        delaiMoyenPaiement: '42 jours',
        logistique: 'Enlèvement 60% / Livraison 40%',
        // Comportemental
        recurrenceCommandes: '2.5 commandes / semaine',
        canalPrefere: 'Téléphone (65%)',
        horairesPrivilegies: '08h-10h, 14h-16h',
        partRaboni: '~35% de ses achats',
        potentielCommercial: 'Moyen-Fort',
        concurrents: 'Point P, Dispano',
        caGeo: 'Paris Sud 80%, Paris Nord 20%',
        // Données imbriquées (depuis MOCK_* du fichier ATC)
        contacts: [
            { prenom:'Jean',   nom:'Dupont',  fonction:'Gérant',             tel:'06 12 34 56 78', email:'j.dupont@ebpro.fr',  birth:'1975-07-06', autoCmd:true,  compta:false, notes:'' },
            { prenom:'Marie',  nom:'Leblanc', fonction:'Responsable achats', tel:'06 98 76 54 32', email:'m.leblanc@ebpro.fr', birth:'',           autoCmd:true,  compta:false, notes:'' },
            { prenom:'Pierre', nom:'Martin',  fonction:'Comptabilité',        tel:'01 23 45 67 90', email:'compta@ebpro.fr',    birth:'',           autoCmd:false, compta:true,  notes:'Hobbies : Rugby, Golf • Animaux : 1 chien (Labrador)' }
        ],
        chantiers: [
            { nom:'Résidence Les Érables',          ville:'Boulogne-Billancourt', adresse:'', dateDebut:'2026-02-05', dateFin:'', ca:'45000', caFmt:'45 000 €', statut:'en_cours',    statutLabel:'En cours',    statutBadge:'badge-active', contact:'jean_dupont' },
            { nom:'Immeuble Pasteur',               ville:'Paris 15ème',          adresse:'', dateDebut:'2026-02-24', dateFin:'', ca:'28500', caFmt:'28 500 €', statut:'en_cours',    statutLabel:'En cours',    statutBadge:'badge-active', contact:'marie_leblanc' },
            { nom:'Centre commercial Val-de-Marne', ville:'Créteil',              adresse:'', dateDebut:'2026-01-10', dateFin:'', ca:'67200', caFmt:'67 200 €', statut:'preparation', statutLabel:'Préparation', statutBadge:'badge-pro',    contact:'jean_dupont' }
        ],
        produits: [
            { ref:'PL-450',  libelle:'Plaque de plâtre BA13 2.5m',  qte:'2 450', ca:'38 250 €', pct:'15.4%' },
            { ref:'ISO-220', libelle:'Laine de verre 100mm',         qte:'1 820', ca:'28 900 €', pct:'11.6%' },
            { ref:'RAI-340', libelle:'Rail métallique 48mm',          qte:'3 200', ca:'25 600 €', pct:'10.3%' },
            { ref:'VIS-120', libelle:'Vis TTPC 25mm (boîte 1000)',   qte:'850',   ca:'18 750 €', pct:'7.5%'  },
            { ref:'END-560', libelle:'Enduit à joint 25kg',           qte:'920',   ca:'16 560 €', pct:'6.7%'  }
        ],
        devisCmds: [
            { icon:'📄', titre:'Devis DEV-2026-1245 - 15 450 € HT',   detail:'Créé le 18/02/2026 • Chantier: Résidence Les Érables', badge:'badge-pro',    badgeLabel:'En attente validation' },
            { icon:'📦', titre:'Commande CMD-2026-8756 - 8 920 € HT',  detail:'Créée le 23/02/2026 • Livraison prévue: 27/02/2026',   badge:'badge-active', badgeLabel:'En préparation' },
            { icon:'🚚', titre:'Commande CMD-2026-8621 - 12 350 € HT', detail:'Créée le 20/02/2026',                                   badge:'badge-active', badgeLabel:'En cours de livraison' }
        ],
        evenements: [
            { icon:'🎉', titre:'Journée portes ouvertes Raboni Paris Sud', detail:'02/11/2025 • Présent avec 2 collaborateurs • Feedback très positif' },
            { icon:'🏭', titre:'Visite usine Placo - Saint-Gobain',         detail:'09/07/2025 • Organisée par Raboni • 15 participants' },
            { icon:'🍽️', titre:"Déjeuner d'affaires - Nouveautés 2025",    detail:'05/04/2025 • Restaurant Le Comptoir • Présentation nouveaux produits' }
        ],
        crdv: [],
        activites: [
            { date:'27 Février 2026 - 14:35', html:'📞 <strong>Appel téléphonique entrant</strong> - Marie Leblanc<br>Demande de devis pour chantier Centre commercial Val-de-Marne. Traité par Sophie Martin. Devis envoyé.' },
            { date:'23 Février 2026 - 09:15', html:'📦 <strong>Nouvelle commande</strong> - CMD-2026-8756<br>Montant: 8 920 € HT • Livraison prévue: 27/02/2026 • Statut: En préparation' },
            { date:'20 Février 2026 - 16:45', html:'🚚 <strong>Livraison effectuée</strong> - CMD-2026-8621<br>Chantier Résidence Les Érables • Réceptionné par: Jean Dupont • Aucune anomalie' },
            { date:'18 Février 2026 - 10:20', html:'📄 <strong>Nouveau devis créé</strong> - DEV-2026-1245<br>Montant: 15 450 € HT • Chantier: Résidence Les Érables • En attente validation client' },
            { date:'15 Février 2026 - 11:00', html:'💳 <strong>Paiement reçu</strong> - Facture FA-2025-9854<br>Montant: 12 750 € • Mode: Virement • Délai: 38 jours' },
            { date:'05 Février 2026 - 14:00', html:'👤 <strong>Visite commerciale</strong> - Sophie Martin<br>Lieu: Chantier Résidence Les Érables • CR créé • Opportunité: 15K€ gamme isolation' },
            { date:'31 Janvier 2026 - 08:45', html:'📧 <strong>Email envoyé</strong> - Sophie Martin<br>Objet: Nouveautés 2026 - Catalogue Printemps • Ouvert le 01/02/2026' }
        ],
        actions: [
            { icon:'⚠️', titre:'Relancer devis DEV-2026-1245',    detail:'Échéance: 03/03/2026 • Montant: 15 450 € • Action: Appel téléphonique de suivi' },
            { icon:'📅', titre:'Visite commerciale planifiée',      detail:'Date: 21/03/2026 à 10h00 • Lieu: Bureau client • Objectif: Présentation gamme isolation haute performance' },
            { icon:'🎂', titre:'Anniversaire Jean Dupont (Gérant)', detail:'Date: 06/07/2026 • Action: Prévoir cadeau / invitation événement' }
        ]
    }
];


/* ── PROSPECTS ──────────────────────────────────────────────────────────────
   Champs :
     id        : identifiant unique
     nom       : nom affiché (= prospectRattache du lead associé)
     ville     : ville du prospect
     segments  : tableau d'ids SEGMENTATION_PRODUIT (ex: ['SEG-0001','SEG-0002'])
     source    : origine du contact ('Salon' | 'Terrain' | 'Référence' | ...)
     statut    : 'Chaud' | 'Tiède' | 'Froid'
     montant   : estimation du potentiel CA (repris du lead associé)
   ──────────────────────────────────────────────────────────────────────── */
var PROSPECTS = [
    { id: 'PRO-10001', nom: 'Travaux Pro 26',        ville: 'Valence',           segments: ['SEG-0001'],                    source: 'Terrain',    statut: 'Froid',  montant: '15 k€',  devisEnCours: 0, atcRattache: 'Thomas Girard'  },
    { id: 'PRO-10002', nom: "Isol'Montagne",         ville: 'Grenoble',          segments: ['SEG-0002'],                     source: 'Salon',      statut: 'Froid',  montant: '18 k€',  devisEnCours: 1, atcRattache: 'Sarah Lefèvre'  },
    { id: 'PRO-10003', nom: 'Maçon Ardèche',         ville: 'Aubenas',           segments: ['SEG-0001'],                    source: 'Terrain',    statut: 'Froid',  montant: '20 k€',  devisEnCours: 0, atcRattache: 'Thomas Girard'  },
    { id: 'PRO-10004', nom: 'Bâti Loire',            ville: 'Saint-Étienne',     segments: ['SEG-0001', 'SEG-0004'],       source: 'Référence',  statut: 'Froid',  montant: '22 k€',  devisEnCours: 2, atcRattache: 'Julie Marchand' },
    { id: 'PRO-10005', nom: 'Sols & Carreaux',       ville: 'Bron',              segments: ['SEG-0003'],                    source: 'Salon',      statut: 'Froid',  montant: '15 k€',  devisEnCours: 0, atcRattache: 'Sarah Lefèvre'  },
    { id: 'PRO-10006', nom: 'Plâtrerie Dubois',      ville: 'Caluire-et-Cuire',  segments: ['SEG-0002'],                     source: 'Terrain',    statut: 'Tiède',  montant: '20 k€',  devisEnCours: 1, atcRattache: 'Lucas Reynaud'  },
    { id: 'PRO-10007', nom: 'Endutech',              ville: 'Villeurbanne',      segments: ['SEG-0001', 'SEG-0007'],      source: 'Salon',      statut: 'Tiède',  montant: '25 k€',  devisEnCours: 3, atcRattache: 'Thomas Girard'  },
    { id: 'PRO-10008', nom: 'Interbâti',             ville: 'Lyon',              segments: ['SEG-0001', 'SEG-0002', 'SEG-0003'], source: 'Référence', statut: 'Tiède', montant: '28 k€', devisEnCours: 2, atcRattache: 'Julie Marchand' },
    { id: 'PRO-10009', nom: 'Rénov Pro',             ville: 'Décines-Charpieu',  segments: ['SEG-0001'],                    source: 'Terrain',    statut: 'Tiède',  montant: '22 k€',  devisEnCours: 1, atcRattache: 'Nicolas Duval'  },
    { id: 'PRO-10010', nom: 'Isolation 2A',          ville: 'Vénissieux',        segments: ['SEG-0002'],                     source: 'Salon',      statut: 'Tiède',  montant: '30 k€',  devisEnCours: 4, atcRattache: 'Sarah Lefèvre'  },
    { id: 'PRO-10011', nom: 'Sols & Surfaces',       ville: 'Meyzieu',           segments: ['SEG-0003'],                    source: 'Terrain',    statut: 'Tiède',  montant: '25 k€',  devisEnCours: 2, atcRattache: 'Sarah Lefèvre'  },
    { id: 'PRO-10012', nom: 'Construction Lacour',   ville: 'Mions',             segments: ['SEG-0001', 'SEG-0004'],       source: 'Référence',  statut: 'Tiède',  montant: '25 k€',  devisEnCours: 3, atcRattache: 'Emma Bertrand'  },
    { id: 'PRO-10013', nom: 'Dupont Construction',   ville: 'Lyon',              segments: ['SEG-0001'],                    source: 'Référence',  statut: 'Chaud',  montant: '45 k€',  devisEnCours: 5, atcRattache: 'Lucas Reynaud'  },
    { id: 'PRO-10014', nom: 'Bâti Rhône',            ville: 'Vénissieux',        segments: ['SEG-0001'],                    source: 'Terrain',    statut: 'Chaud',  montant: '60 k€',  devisEnCours: 4, atcRattache: 'Emma Bertrand'  },
    { id: 'PRO-10015', nom: 'Maçonnerie Martin',     ville: 'Villeurbanne',      segments: ['SEG-0001', 'SEG-0003'],      source: 'Référence',  statut: 'Chaud',  montant: '40 k€',  devisEnCours: 6, atcRattache: 'Thomas Girard'  },
    { id: 'PRO-10016', nom: 'Groupe Perrin',         ville: 'Lyon',              segments: ['SEG-0001', 'SEG-0002', 'SEG-0003'], source: 'Salon', statut: 'Chaud', montant: '35 k€', devisEnCours: 3, atcRattache: 'Julie Marchand' },
    { id: 'PRO-10017', nom: 'Electrolab',            ville: 'Saint-Priest',      segments: ['SEG-0005'],                     source: 'Terrain',    statut: 'Chaud',  montant: '50 k€',  devisEnCours: 5, atcRattache: 'Nicolas Duval'  },
    { id: 'PRO-10018', nom: 'Constructions Réunies', ville: 'Chassieu',          segments: ['SEG-0001', 'SEG-0004'],       source: 'Référence',  statut: 'Chaud',  montant: '50 k€',  devisEnCours: 4, atcRattache: 'Sarah Lefèvre'  },
    { id: 'PRO-10019', nom: 'Plâtrier du Rhône',     ville: 'Vénissieux',        segments: ['SEG-0002'],                     source: 'Terrain',    statut: 'Chaud',  montant: '30 k€',  devisEnCours: 2, atcRattache: 'Lucas Reynaud'  },
    { id: 'PRO-10020', nom: 'Batimontagne',          ville: 'Chambéry',          segments: ['SEG-0001'],                    source: 'Salon',      statut: 'Chaud',  montant: '99 k€',  devisEnCours: 6, atcRattache: 'Emma Bertrand'  },
    { id: 'PRO-10021', nom: 'Artisan Carrelage +',   ville: 'Saint-Priest',      segments: ['SEG-0003', 'SEG-0002'],       source: 'Terrain',    statut: 'Chaud',  montant: '100 k€', devisEnCours: 5, atcRattache: 'Nicolas Duval'  },
    { id: 'PRO-10022', nom: 'Décor & Aménagement',   ville: 'Lyon',              segments: ['SEG-0003', 'SEG-0007'],      source: 'Référence',  statut: 'Chaud',  montant: '85 k€',  devisEnCours: 3, atcRattache: 'Lucas Reynaud'  },
    { id: 'PRO-10023', nom: 'BTP Express',           ville: 'Givors',            segments: ['SEG-0001'],                    source: 'Terrain',    statut: 'Chaud',  montant: '62 k€',  devisEnCours: 4, atcRattache: 'Thomas Girard'  },
    { id: 'PRO-10024', nom: 'Ciment & Co',           ville: 'Bron',              segments: ['SEG-0001'],                    source: 'Salon',      statut: 'Chaud',  montant: '45 k€',  devisEnCours: 2, atcRattache: 'Sarah Lefèvre'  },
    { id: 'PRO-10025', nom: 'Renovation Plus',       ville: 'Caluire-et-Cuire',  segments: ['SEG-0001', 'SEG-0002'],       source: 'Référence',  statut: 'Froid',  montant: '30 k€',  devisEnCours: 0, atcRattache: 'Emma Bertrand'  },
    { id: 'PRO-10026', nom: 'Chantiers Lombard',     ville: 'Villefranche',      segments: ['SEG-0001', 'SEG-0004'],       source: 'Terrain',    statut: 'Froid',  montant: '45 k€',  devisEnCours: 1, atcRattache: 'Julie Marchand' },
    { id: 'PRO-10027', nom: 'Maçon Pro',             ville: 'Tarare',            segments: ['SEG-0001'],                    source: 'Salon',      statut: 'Froid',  montant: '28 k€',  devisEnCours: 0, atcRattache: 'Nicolas Duval'  },
    { id: 'PRO-10028', nom: "Isol'Tech",             ville: 'Bourgoin-Jallieu',  segments: ['SEG-0002'],                     source: 'Terrain',    statut: 'Froid',  montant: '35 k€',  devisEnCours: 1, atcRattache: 'Thomas Girard'  },
    { id: 'PRO-10029', nom: 'Pro Bâtiment',          ville: 'Ambérieu-en-Bugey', segments: ['SEG-0001'],                    source: 'Référence',  statut: 'Froid',  montant: '22 k€',  devisEnCours: 0, atcRattache: 'Sarah Lefèvre'  }
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
    { date: '2026-06-09', time: '08:30', nom: 'Bâti Rhône',              visiteDun: 'prospect', type: 'Prospection',           objectif: 'Présenter la gamme maçonnerie',        notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Chez le client – Vénissieux',      bg: '#E8F4FD', color: '#0070D2', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-09', time: '10:30', nom: 'Aprobatec',                visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Renouvellement contrat annuel',        notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Dans nos locaux – Lyon',            bg: '#F0F7EC', color: '#1F7A3D', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-10', time: '09:00', nom: 'Dupont Construction',      visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Point sur commandes en cours',         notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Chez le client – Lyon',             bg: '#FEF5E9', color: '#B05A00', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-11', time: '11:00', nom: 'Artisan Carrelage Plus',   visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan Q1 et objectifs Q2',             notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Chez le client – Saint-Priest',    bg: '#F7EBF0', color: '#C23934', presence: 'non_vu', raisonAbsence: 'Réunion interne urgente côté client, RDV reporté' },
    { date: '2026-06-23', time: '09:30', nom: 'Entreprise Bâtiment Pro',  visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Présenter nouvelles gammes isolation', notes: '', accompagnant: 'Marc Dupuis',   atc: 'Thomas Girard',  localisation: 'Chez le client – Paris',            bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-06-25', time: '14:00', nom: 'Constructions Leblanc',    visiteDun: 'prospect', type: 'Prospection',           objectif: 'Premier contact, découverte besoin',   notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Sur chantier – Boulogne-Billancourt', bg: '#E8F4FD', color: '#0070D2' },

    /* ── Lucas Reynaud ── */
    { date: '2026-06-09', time: '09:00', nom: 'Maçonnerie Bertrand',      visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Suivi chantier Résidence Les Pins',   notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Sur chantier – Marseille',          bg: '#FEF5E9', color: '#B05A00', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-10', time: '14:30', nom: 'BTP Sud-Est',               visiteDun: 'prospect', type: 'Prospection',           objectif: 'Présenter offre outillage pro',        notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Chez le prospect – Aubagne',        bg: '#E8F4FD', color: '#0070D2', presence: 'non_vu', raisonAbsence: 'Contact absent, pas joignable sur place' },
    { date: '2026-06-12', time: '10:00', nom: 'Terrassement Collet',       visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan CA et fidélisation',             notes: '', accompagnant: 'Sophie Arnaud', atc: 'Lucas Reynaud',  localisation: 'Dans nos locaux – Marseille',       bg: '#F7EBF0', color: '#C23934', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-17', time: '11:30', nom: 'Rénovation Faure & Fils',   visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Négocier volume annuel',               notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Chez le client – Toulon',           bg: '#F0F7EC', color: '#1F7A3D', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-22', time: '09:00', nom: 'Maçonnerie Bertrand',      visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Validation commande plâtrerie',        notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Chez le client – Marseille',        bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-06-24', time: '15:00', nom: 'Constructions Morel',       visiteDun: 'prospect', type: 'Prospection',           objectif: 'Découverte compte, potentiel élevé',  notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Chez le prospect – Aix-en-Provence', bg: '#E8F4FD', color: '#0070D2' },

    /* ── Sarah Lefèvre ── */
    { date: '2026-06-08', time: '09:30', nom: 'Maçonnerie Martin',         visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Point livraisons et satisfaction',     notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Chez le client – Villeurbanne',     bg: '#FEF5E9', color: '#B05A00', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-10', time: '11:00', nom: 'Chantiers Dubois',           visiteDun: 'prospect', type: 'Prospection',           objectif: 'Présentation gamme carrelage',         notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Dans nos locaux – Grenoble',        bg: '#E8F4FD', color: '#0070D2', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-16', time: '14:00', nom: 'Rénovation Express',         visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan et plan d\'action Q3',           notes: '', accompagnant: 'Lucie Bonnet',  atc: 'Sarah Lefèvre',  localisation: 'Chez le client – Grenoble',         bg: '#F7EBF0', color: '#C23934', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-18', time: '10:30', nom: 'Bati Services 69',           visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Renouvellement conditions tarifaires', notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Dans nos locaux – Lyon',            bg: '#F0F7EC', color: '#1F7A3D', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-23', time: '09:00', nom: 'Maçonnerie Martin',         visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Signature accord-cadre 2026',          notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Chez le client – Villeurbanne',     bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-06-26', time: '14:30', nom: 'Isolation Rhône-Alpes',      visiteDun: 'prospect', type: 'Prospection',           objectif: 'Premier contact, marché isolation',    notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Sur chantier – Chambéry',           bg: '#E8F4FD', color: '#0070D2' },

    /* ── Julie Marchand ── */
    { date: '2026-06-08', time: '14:00', nom: 'Artisan Carrelage Plus',    visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Présenter nouveautés carrelage',       notes: '', accompagnant: '',              atc: 'Julie Marchand', localisation: 'Chez le client – Saint-Priest',    bg: '#FEF5E9', color: '#B05A00', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-11', time: '09:30', nom: 'Plomberie Giraud',           visiteDun: 'prospect', type: 'Prospection',           objectif: 'Détecter besoin outillage',            notes: '', accompagnant: '',              atc: 'Julie Marchand', localisation: 'Chez le prospect – Bron',           bg: '#E8F4FD', color: '#0070D2', presence: 'non_vu', raisonAbsence: 'Prospect non disponible, annulation de dernière minute' },
    { date: '2026-06-15', time: '10:00', nom: 'Carrelage & Co',              visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan Q1, potentiel croisé',          notes: '', accompagnant: 'Pierre Moulin', atc: 'Julie Marchand', localisation: 'Dans nos locaux – Lyon',            bg: '#F7EBF0', color: '#C23934', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-17', time: '15:30', nom: 'Revêtements Pons',            visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Négociation remise volume annuel',    notes: '', accompagnant: '',              atc: 'Julie Marchand', localisation: 'Chez le client – Décines',          bg: '#F0F7EC', color: '#1F7A3D', presence: 'vu', raisonAbsence: '' },
    { date: '2026-06-22', time: '11:00', nom: 'Artisan Carrelage Plus',    visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Suivi devis DEV-2026-0892',           notes: '', accompagnant: '',              atc: 'Julie Marchand', localisation: 'Chez le client – Saint-Priest',    bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-06-25', time: '09:00', nom: 'Sols & Murs Concept',        visiteDun: 'prospect', type: 'Prospection',           objectif: 'Découverte compte, secteur revêtement', notes: '', accompagnant: '',            atc: 'Julie Marchand', localisation: 'Chez le prospect – Vaulx-en-Velin', bg: '#E8F4FD', color: '#0070D2' },

    /* ── Visites futures (à partir du 26/06/2026) ── */
    { date: '2026-06-26', time: '14:30', nom: 'Isolation Rhône-Alpes',      visiteDun: 'prospect', type: 'Prospection',           objectif: 'Premier contact, marché isolation',    notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Sur chantier – Chambéry',           bg: '#E8F4FD', color: '#0070D2' },
    { date: '2026-06-27', time: '09:30', nom: 'Bâti Rhône',                 visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Suivi commande en cours et upsell',   notes: '', accompagnant: '',              atc: 'Thomas Girard',  localisation: 'Chez le client – Vénissieux',       bg: '#FEF5E9', color: '#B05A00' },
    { date: '2026-06-30', time: '10:00', nom: 'Constructions Morel',        visiteDun: 'prospect', type: 'Visite négociation',    objectif: 'Présenter offre sur-mesure',           notes: '', accompagnant: 'Sophie Arnaud', atc: 'Lucas Reynaud',  localisation: 'Chez le prospect – Aix-en-Provence', bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-07-01', time: '14:00', nom: 'Carrelage & Co',              visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan S1 et projection S2',            notes: '', accompagnant: '',              atc: 'Julie Marchand', localisation: 'Dans nos locaux – Lyon',            bg: '#F7EBF0', color: '#C23934' },
    { date: '2026-07-02', time: '09:00', nom: 'Bati Services 69',            visiteDun: 'client',   type: 'Visite négociation',    objectif: 'Renouvellement conditions 2026-2027', notes: '', accompagnant: '',              atc: 'Sarah Lefèvre',  localisation: 'Chez le client – Lyon',             bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-07-03', time: '11:30', nom: 'Entreprise Bâtiment Pro',    visiteDun: 'client',   type: 'Suivi commercial',      objectif: 'Point avancement chantier isolation',  notes: '', accompagnant: 'Marc Dupuis',   atc: 'Thomas Girard',  localisation: 'Chez le client – Paris',            bg: '#F0F7EC', color: '#1F7A3D' },
    { date: '2026-07-06', time: '10:30', nom: 'Maçonnerie Bertrand',        visiteDun: 'client',   type: 'Point CA trimestriel',  objectif: 'Bilan S1 et plan d\'action Q3',        notes: '', accompagnant: '',              atc: 'Lucas Reynaud',  localisation: 'Sur chantier – Marseille',          bg: '#FEF5E9', color: '#B05A00' }
];


/* ── COMPTES RENDUS ──────────────────────────────────────────────────────────
   Champs :
     id               : identifiant unique (format CR-XXXXX)
     clientId         : id du client auquel le CR est rattaché (ex: 'CT-0001')
     visiteRef        : clé de la visite agenda associée (dateStr|time|nom) — optionnel
     date             : date et auteur affichés (ex: '05 Juin 2026 - Thomas Girard')
     titre            : titre court du compte rendu
     corps            : contenu détaillé du compte rendu
     produits         : tableau de produits discutés (optionnel)
     besoins          : besoins détectés (texte libre, optionnel)
     concurrents      : concurrents identifiés (texte libre, optionnel)
     niveauInteret    : niveau d'intérêt de 1 à 5 (optionnel)
     notesSup         : notes supplémentaires (texte libre, optionnel)
   ──────────────────────────────────────────────────────────────────────── */
var COMPTES_RENDUS = [
    /* ── CT-0001 : Bâti Rhône — Thomas Girard ── */
    { id:'CR-00001', clientId:'CT-0001', date:'23 Juin 2026 - Thomas Girard',       titre:'Visite chantier Résidence Les Fontaines',      corps:'Avancement conforme au planning. Robert Garnier satisfait de la réactivité sur les livraisons béton. Discussion sur l\'extension possible pour le second bâtiment. Devis complémentaire à préparer avant le 15/06.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00002', clientId:'CT-0001', date:'05 Mai 2026 - Thomas Girard',      titre:'Point commercial T1 2026',                     corps:'CA en progression de 10,5% vs N-1. Validation du plan de développement sur la gamme revêtement. Client souhaite un accès prioritaire aux nouveautés Parex. RDV showroom prévu en mai.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00003', clientId:'CT-0001', date:'08 Avril 2026 - Thomas Girard',       titre:'Visite bureau client',                         corps:'Point bilan T1. Robert Garnier signale un besoin urgent en produits de coffrage pour l\'École Jean Moulin. Commande passée sur place. Discussion stock dédié envisagée pour les références courantes.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00004', clientId:'CT-0001', date:'26 Février 2026 - Thomas Girard',    titre:'Appel téléphonique — suivi devis',              corps:'Relance devis coffrage D-2026-034 (8 400 €). Client confirme bon de commande en cours de validation. Livraison souhaitée semaine 8. Logistique à caler avec le dépôt de Vénissieux.', presence: 'non_vu', raisonAbsence: 'Échange téléphonique uniquement' },
    { id:'CR-00005', clientId:'CT-0001', date:'11 Décembre 2025 - Thomas Girard',   titre:'Visite chantier Entrepôt Logistique Corbas',   corps:'Premier passage sur le futur chantier. Surface estimée 4 200 m². Besoins : dalle béton, cloisons, étanchéité toiture. CA potentiel estimé 35 k€. Appel d\'offre prévu en janvier 2026.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00006', clientId:'CT-0001', date:'29 Octobre 2025 - Thomas Girard',    titre:'Visite bureau — plan d\'action S2',            corps:'Présentation catalogue automne-hiver 2025. Intérêt fort pour la gamme ITE. Client demande une formation technique pour ses équipes. Date à caler avec le service formation Raboni.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00007', clientId:'CT-0001', date:'24 Juillet 2025 - Thomas Girard',    titre:'Déjeuner commercial mi-année',                 corps:'Revue de mi-année. Objectif CA atteint à 94%. Cause : retard chantier École Jean Moulin (+6 sem). Plan de rattrapage S2 validé. Relation commerciale solide, aucun risque de perte client.', presence: 'vu', raisonAbsence: '' },

    /* ── CT-0002 : Dupont Construction — Lucas Reynaud ── */
    { id:'CR-00008', clientId:'CT-0002', date:'03 Mai 2026 - Lucas Reynaud',      titre:'Visite bureau client',                         corps:'Discussion baisse CA vs N-1 (-12%). Alain Dupont signale un report de chantiers sur T2. Potentiel de rattrapage estimé 40 k€ sur S2. Action : proposition d\'offre groupée plâtrerie + ciment avec remise volume.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00009', clientId:'CT-0002', date:'10 Février 2026 - Lucas Reynaud',    titre:'Point compte début d\'année',                  corps:'Présentation catalogue 2026. Intérêt pour les nouvelles références BA18 et BA25 phoniques. Commande test : 200 plaques BA18. Livraison semaine 5 confirmée.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00010', clientId:'CT-0002', date:'19 Décembre 2025 - Lucas Reynaud',   titre:'Visite chantier Copropriété Montchat',         corps:'Chantier bien avancé, Sylvie Moreau satisfaite. Besoin en enduit de finition pour les parties communes (estimé 3 k€). Devis envoyé le soir même. Concurrence Pointp mentionnée sur les enduits.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00011', clientId:'CT-0002', date:'06 Octobre 2025 - Lucas Reynaud',  titre:'Appel téléphonique — relance devis',           corps:'Relance devis D-2025-789 (malaxeurs + outillage, 6 400 €). Patrice Lebrun confirme validation en cours. Bon de commande attendu sous 48h. Livraison à coordonner avec le chantier Gerland.', presence: 'non_vu', raisonAbsence: 'Échange téléphonique uniquement' },
    { id:'CR-00012', clientId:'CT-0002', date:'25 Juillet 2025 - Lucas Reynaud',    titre:'Déjeuner commercial mi-année',                 corps:'CA S1 à 56% de l\'objectif annuel. Alain Dupont souhaite renégocier les conditions tarifaires sur le ciment. Demande transmise au responsable commercial. Accord cadre à revoir en septembre.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00013', clientId:'CT-0002', date:'02 Avril 2025 - Lucas Reynaud',       titre:'Visite bureau — lancement plan 2025',          corps:'Objectif fixé à 130 k€ (+1,5% vs N). Focus : développement isolation et outillage. Client valide le principe d\'un stock tampon dédié. Mise en place prévue avril 2025.', presence: 'vu', raisonAbsence: '' },

    /* ── CT-0003 : Maçonnerie Martin — Sarah Lefèvre ── */
    { id:'CR-00014', clientId:'CT-0003', date:'18 Avril 2026 - Sarah Lefèvre',       titre:'Visite chantier Rénovation Villa Couzon',      corps:'Franck Martin autonome et efficace. Intérêt marqué pour le carrelage format XXL 120x120. Devis D-2026-112 envoyé (7 200 €). Discussion sur un accord-cadre 2026 pour gagner du temps sur les commandes récurrentes.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00015', clientId:'CT-0003', date:'03 Mars 2026 - Sarah Lefèvre',    titre:'Point commercial — suivi devis',               corps:'Relance devis carrelage XXL. Franck confirme validation pour la Villa Couzon. Nouvelle opportunité : extension maison à Bron (dalle + carrelage, estimé 5 k€). Visite à planifier.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00016', clientId:'CT-0003', date:'30 Janvier 2026 - Sarah Lefèvre',    titre:'Appel téléphonique — bilan 2025',              corps:'CA 2025 en hausse de 9% vs 2024. Franck satisfait du service, apprécie la réactivité. Objectif 2026 fixé à 85 k€. Nouvel axe : développer la gamme colle et joint haut de gamme.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00017', clientId:'CT-0003', date:'09 Décembre 2025 - Sarah Lefèvre',   titre:'Visite chantier Extension Maison Bron',        corps:'Chantier terminé dans les délais, client très content. Franck recommande Raboni à ses confrères. Opportunité de prescription : 3 artisans de son réseau pourraient devenir clients.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00018', clientId:'CT-0003', date:'28 Août 2025 - Sarah Lefèvre',       titre:'Visite bureau — présentation gamme automne',   corps:'Présentation nouveautés carrelage automne 2025 (grès cérame effet bois, grands formats). Franck commande 4 échantillons. Intérêt pour les joints époxy Mapei. Commande test prévue en septembre.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00019', clientId:'CT-0003', date:'24 Avril 2025 - Sarah Lefèvre',      titre:'Point commercial T1 2025',                    corps:'CA T1 conforme (+8%). Forte demande clients sur les carrelages grande taille. Stock tampon proposé pour les références phares. Accord de principe, mise en place prévue mai 2025.', presence: 'vu', raisonAbsence: '' },

    /* ── CT-0004 : Artisan Carrelage Plus — Julie Marchand ── */
    { id:'CR-00020', clientId:'CT-0004', date:'26 Mai 2026 - Julie Marchand',       titre:'Visite comptoir + échange commercial',         corps:'Rencontre lors d\'un passage comptoir. Baisse CA depuis janvier (-18%). Concurrence Leroy Merlin sur le petit matériel. Proposition : carte fidélité pro + remise volume sur commandes > 1 500 €. Réponse attendue sous 15 jours.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00021', clientId:'CT-0004', date:'19 Mai 2026 - Julie Marchand',     titre:'Appel téléphonique — offre fidélité',          corps:'Présentation de l\'offre fidélité. Client réceptif. Demande devis comparatif sur carreaux 60x60. Devis D-2026-089 envoyé dans la journée (2 800 €). Décision attendue avant fin mai.', presence: 'non_vu', raisonAbsence: 'Échange téléphonique uniquement' },
    { id:'CR-00022', clientId:'CT-0004', date:'04 Avril 2026 - Julie Marchand',      titre:'Visite bureau client',                         corps:'Premier RDV bureau depuis 6 mois. CA en recul, pression concurrentielle confirmée. Intérêt pour les formations pose grands formats organisées par Raboni. Inscription proposée pour juin 2026.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00023', clientId:'CT-0004', date:'11 Décembre 2025 - Julie Marchand',  titre:'Visite chantier maison individuelle',          corps:'Bonne qualité de pose. Client utilise exclusivement les références Porcelanosa achetées chez Raboni. Opportunité : le promoteur cherche un fournisseur pour 8 autres maisons. À qualifier.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00024', clientId:'CT-0004', date:'23 Septembre 2025 - Julie Marchand', titre:'Point commercial rentrée',                     corps:'Objectif CA 2025 : 45 k€. Plusieurs chantiers en vue sur T4. Commande prévisionnelle estimée 12 k€. Gamme colle flex Mapei à mettre en avant. Catalogue laissé sur place.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00025', clientId:'CT-0004', date:'25 Février 2025 - Julie Marchand',   titre:'Visite bureau — plan d\'action 2025',          corps:'CA 2024 : 38 200 €. Objectif 2025 : 42 k€. Client souhaite la livraison express 24h sur les références phares. Demande transmise à la logistique.', presence: 'vu', raisonAbsence: '' },

    /* ── CT-0005 : Aprobatec — Thomas Girard ── */
    { id:'CR-00026', clientId:'CT-0005', date:'09 Juin 2026 - Thomas Girard',        titre:'Visite chantier Bureaux Confluence',           corps:'Avancement à 60%. Client satisfait des panneaux isolants Isover. Nouvelle commande à venir pour la phase 2 (plafonds, estimé 6 k€). Devis à envoyer avant le 25/05.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00027', clientId:'CT-0005', date:'28 Avril 2026 - Thomas Girard',      titre:'Point commercial — suivi plan développement',  corps:'CA T1 en hausse de 45% vs N-1. Passage en catégorie A validé. Conditions spéciales isolation haute performance accordées à partir du 01/05. Client très engagé dans la relation commerciale.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00028', clientId:'CT-0005', date:'08 Avril 2026 - Thomas Girard',       titre:'Présentation gamme isolation haute performance', corps:'Présentation technique avec l\'appui du technicien Isover. Retour très positif sur les solutions ITE. Commande d\'un chantier test : 80 m² de façade. Mise en œuvre prévue en avril.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00029', clientId:'CT-0005', date:'12 Novembre 2025 - Thomas Girard',    titre:'Visite showroom — Journées portes ouvertes',   corps:'Présence du client et de son associé. Fort intérêt pour les solutions acoustiques et isolants biosourcés. Devis demandé sur spot pour un chantier tertiaire Lyon 2ème. Envoyé le 24/10.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00030', clientId:'CT-0005', date:'23 Septembre 2025 - Thomas Girard',  titre:'Visite bureau — découverte et qualification',  corps:'Premier RDV physique. Entreprise en forte croissance (+30% CA). Besoins clairs : isolation thermique, phonique et fire safe. Accord pour un devis cadre annuel. Très bon potentiel.', presence: 'vu', raisonAbsence: '' },

    /* ── CT-0006 : Entreprise Bâtiment Pro — Thomas Girard ── */
    { id:'CR-00031', clientId:'CT-0006', date:'18 Juin 2026 - Thomas Girard',        titre:'Visite chantier Centre Commercial Val-de-Marne', corps:'Chantier 12 000 m². Visite avec Marie Leblanc. Livraisons béton et cloisons conformes. Besoin supplémentaire : faux-plafonds galerie marchande (estimé 22 k€). Devis prioritaire demandé avant fin juin.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00032', clientId:'CT-0006', date:'01 Mai 2026 - Thomas Girard',      titre:'Point commercial T1 2026',                     corps:'CA T1 à 87 k€, +3% vs N-1. Marie Leblanc signale un ralentissement possible au T2. Trois projets en négociation finale (estimé total 180 k€). Suivi hebdomadaire maintenu.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00033', clientId:'CT-0006', date:'23 Février 2026 - Thomas Girard',    titre:'Revue de compte annuelle',                     corps:'Bilan 2025 : CA 312 k€, +8% vs 2024. Parmi les 5 premiers comptes de l\'agence. Plan 2026 : objectif 340 k€. Axe prioritaire : étanchéité et couverture sur les nouveaux chantiers.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00034', clientId:'CT-0006', date:'19 Décembre 2025 - Thomas Girard',   titre:'Présentation nouveaux partenaires fournisseurs', corps:'Présentation des accords Raboni avec Saint-Gobain et Knauf. Marie Leblanc intéressée par le placo haute performance. Commande pilote 500 plaques BA25 Fire validée sur place.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00035', clientId:'CT-0006', date:'01 Octobre 2025 - Thomas Girard',  titre:'Appel téléphonique — suivi satisfaction',      corps:'Suivi post-livraison chantier Immeuble Pasteur. Retour très positif. Opportunité signalée : futur chantier bureau à Créteil début 2026 (estimé 45 k€). À suivre.', presence: 'non_vu', raisonAbsence: 'Échange téléphonique uniquement' },
    { id:'CR-00036', clientId:'CT-0006', date:'05 Avril 2025 - Thomas Girard',       titre:'Déjeuner d\'affaires — présentation nouveautés', corps:'Présentation catalogue 2025 et des solutions digitales (portail commande en ligne). Direction enthousiaste. Engagement à tester le portail sur 3 mois. Formation utilisateurs à organiser.', presence: 'vu', raisonAbsence: '' },
    { id:'CR-00037', clientId:'CT-0006', date:'29 Janvier 2025 - Thomas Girard',    titre:'Visite bureau — plan d\'action 2025',          corps:'CA 2024 : 289 k€. Objectif 2025 : 315 k€. Nouveaux axes : isolation et étanchéité, amélioration délais livraison hors-stock. Plan de formation technique à prévoir sur T2.', presence: 'vu', raisonAbsence: '' }
];


/* ── LEADS ──────────────────────────────────────────────────────────────────
   Champs :
     id                  : identifiant unique (format LEAD_N)
     nomLead          : nom du lead (saisi lors de la détection)
     description      : description de l'opportunité
     prospectRattache : nom du prospect associé au lead
     montant             : montant estimé (ex: '15 k€')
     atcResponsable   : ATC en charge du lead
     statut              : 'Froid' | 'Tiède' | 'Chaud' | 'En cours' | 'Gagnée' | 'Perdue'
   ──────────────────────────────────────────────────────────────────────── */
var LEADS = [
    { id: 'LEAD_1',  nomLead: 'Chantier isolation combles',          description: 'Besoin isolation toiture + combles, budget validé',          prospectRattache: 'Travaux Pro 26',       montant: '15 k€',  atcResponsable: 'Thomas Girard',   statut: 'Froid'    },
    { id: 'LEAD_2',  nomLead: 'Extension bâtiment industriel',       description: 'Projet extension 500m² en cours de chiffrage',               prospectRattache: "Isol'Montagne",        montant: '18 k€',  atcResponsable: 'Sarah Lefèvre',   statut: 'Froid'    },
    { id: 'LEAD_3',  nomLead: 'Rénovation façades lotissement',      description: 'Appel d\'offre à venir sur 40 maisons',                      prospectRattache: 'Maçon Ardèche',        montant: '20 k€',  atcResponsable: 'Thomas Girard',   statut: 'Froid'    },
    { id: 'LEAD_4',  nomLead: 'Chantier béton armé',                 description: 'Consultation prévue T2 2026',                                prospectRattache: 'Bâti Loire',           montant: '22 k€',  atcResponsable: 'Julie Marchand',  statut: 'Froid'    },
    { id: 'LEAD_5',  nomLead: 'Pose carrelage grande surface',       description: 'Projet retail, livraison prévue septembre',                  prospectRattache: 'Sols & Carreaux',      montant: '15 k€',  atcResponsable: 'Sarah Lefèvre',   statut: 'Froid'    },
    { id: 'LEAD_6',  nomLead: 'Plâtrerie bureaux Grenoble',          description: 'Rénovation plateau 1200m², devis en attente',                prospectRattache: 'Plâtrerie Dubois',     montant: '20 k€',  atcResponsable: 'Lucas Reynaud',   statut: 'Tiède'    },
    { id: 'LEAD_7',  nomLead: 'Enduits façade résidence',            description: '3 bâtiments, démarrage prévu mars 2026',                     prospectRattache: 'Endutech',             montant: '25 k€',  atcResponsable: 'Thomas Girard',   statut: 'Tiède'    },
    { id: 'LEAD_8',  nomLead: 'Construction école primaire',         description: 'Marché public, remise offre fin janvier',                    prospectRattache: 'Interbâti',            montant: '28 k€',  atcResponsable: 'Julie Marchand',  statut: 'Tiède'    },
    { id: 'LEAD_9',  nomLead: 'Rénovation hôtel 3 étoiles',          description: 'Chambres + parties communes, chantier sur 6 mois',           prospectRattache: 'Rénov Pro',            montant: '22 k€',  atcResponsable: 'Nicolas Duval',   statut: 'Tiède'    },
    { id: 'LEAD_10', nomLead: 'Isolation toiture usine',             description: 'Chantier urgent, décision rapide attendue',                  prospectRattache: 'Isolation 2A',         montant: '30 k€',  atcResponsable: 'Sarah Lefèvre',   statut: 'Tiède'    },
    { id: 'LEAD_11', nomLead: 'Parquet salle des fêtes',             description: 'Mairie, budget alloué, devis comparatifs en cours',          prospectRattache: 'Sols & Surfaces',      montant: '25 k€',  atcResponsable: 'Sarah Lefèvre',   statut: 'Tiède'    },
    { id: 'LEAD_12', nomLead: 'Maisons individuelles lotissement',   description: '12 maisons, première tranche confirmée',                     prospectRattache: 'Construction Lacour',  montant: '25 k€',  atcResponsable: 'Emma Bertrand',   statut: 'Tiède'    },
    { id: 'LEAD_13', nomLead: 'Immeuble mixte Lyon 7e',              description: 'R+6, gros œuvre + second œuvre, commande imminente',         prospectRattache: 'Dupont Construction',  montant: '45 k€',  atcResponsable: 'Lucas Reynaud',   statut: 'Chaud'    },
    { id: 'LEAD_14', nomLead: 'Centre logistique Mions',             description: 'Dalle béton 8000m², signature contrat prévue semaine prochaine', prospectRattache: 'Bâti Rhône',      montant: '60 k€',  atcResponsable: 'Emma Bertrand',   statut: 'Chaud'    },
    { id: 'LEAD_15', nomLead: 'Clinique vétérinaire',                description: 'Aménagement intérieur complet, accord de principe obtenu',   prospectRattache: 'Maçonnerie Martin',    montant: '40 k€',  atcResponsable: 'Thomas Girard',   statut: 'Chaud'    },
    { id: 'LEAD_16', nomLead: 'Résidence seniors Villeurbanne',      description: '80 appartements, contrat cadre en négociation finale',       prospectRattache: 'Groupe Perrin',        montant: '35 k€',  atcResponsable: 'Julie Marchand',  statut: 'Chaud'    },
    { id: 'LEAD_17', nomLead: 'Data center extension',               description: 'Faux-planchers + cloisons techniques, décision cette semaine', prospectRattache: 'Electrolab',         montant: '50 k€',  atcResponsable: 'Nicolas Duval',   statut: 'Chaud'    },
    { id: 'LEAD_18', nomLead: 'Gymnase municipal Bron',              description: 'MOE validé, appro matériaux à confirmer',                    prospectRattache: 'Constructions Réunies',montant: '50 k€',  atcResponsable: 'Sarah Lefèvre',   statut: 'Chaud'    },
    { id: 'LEAD_19', nomLead: 'Réhabilitation immeuble haussmannien',description: 'Façade + toiture + plâtrerie, bon de commande reçu',         prospectRattache: 'Plâtrier du Rhône',    montant: '30 k€',  atcResponsable: 'Lucas Reynaud',   statut: 'Chaud'    },
    { id: 'LEAD_20', prospectRattache: 'Batimontagne',         montant: '99 k€',  atcResponsable: 'Emma Bertrand',   statut: 'En cours' },
    { id: 'LEAD_21', prospectRattache: 'Artisan Carrelage +',  montant: '100 k€', atcResponsable: 'Nicolas Duval',   statut: 'En cours' },
    { id: 'LEAD_22', prospectRattache: 'Décor & Aménagement',  montant: '85 k€',  atcResponsable: 'Lucas Reynaud',   statut: 'Gagnée'   },
    { id: 'LEAD_23', prospectRattache: 'BTP Express',          montant: '62 k€',  atcResponsable: 'Thomas Girard',   statut: 'Gagnée'   },
    { id: 'LEAD_24', prospectRattache: 'Ciment & Co',          montant: '45 k€',  atcResponsable: 'Sarah Lefèvre',   statut: 'Gagnée'   },
    { id: 'LEAD_25', prospectRattache: 'Renovation Plus',      montant: '30 k€',  atcResponsable: 'Emma Bertrand',   statut: 'Perdue'   },
    { id: 'LEAD_26', prospectRattache: 'Chantiers Lombard',    montant: '45 k€',  atcResponsable: 'Julie Marchand',  statut: 'Perdue'   },
    { id: 'LEAD_27', prospectRattache: 'Maçon Pro',            montant: '28 k€',  atcResponsable: 'Nicolas Duval',   statut: 'Perdue'   },
    { id: 'LEAD_28', prospectRattache: "Isol'Tech",            montant: '35 k€',  atcResponsable: 'Thomas Girard',   statut: 'Perdue'   },
    { id: 'LEAD_29', prospectRattache: 'Pro Bâtiment',         montant: '22 k€',  atcResponsable: 'Sarah Lefèvre',   statut: 'Perdue'   }
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
    { id: 'SEG-0001',    label: 'Maçonnerie - Gros oeuvre' },
    { id: 'SEG-0002',     label: 'Plâtrerie - Isolation' },
    { id: 'SEG-0003',    label: 'Revêtement - Carrelage' },
    { id: 'SEG-0004',     label: 'Charpente - Couverture' },
    { id: 'SEG-0005',     label: 'Outils - Équipement - Quincaillerie' },
    { id: 'SEG-0006',          label: 'Bois - Panneaux - Menuiserie' },
    { id: 'SEG-0007',    label: 'Aménagements extérieurs' }
];
