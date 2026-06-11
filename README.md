# CDP BME France — Maquette interactive

Maquette fonctionnelle HTML/CSS/JS du **Customer Data Platform (CDP)** de BME France, destinée à valider les concepts UX/UI avant développement.


---

## Aperçu

Le CDP offre une vision 360° des clients et prospects à chaque profil métier : historique transactionnel, chantiers en cours, scoring commercial, agenda de visites, pipeline de leads, et compte rendu de visite.

---

## Lancer la maquette

Aucune installation requise. Ouvrir directement dans un navigateur :

```
Version propre 4/CDP_login.html
```

---

## Comptes de démonstration

| Rôle                       |                   Email | Mot de passe |
|---                         |                      ---|           ---|
| ATC                        | thomas.girard@raboni.fr |      atc2000 |
| Manager                    | j.manager@raboni.fr     |  manager2000 |
| Comptoir                   | comptoir@raboni.fr      | comptoir2000 |
| Responsable agence         | r.agence@raboni.fr      |   agence2000 |

---

## Structure des fichiers

```
Version propre 4/
├── CDP_login.html                 # Page de connexion (sélection rôle + enseigne)
├── CDP_vue_atc.html               # Vue ATC — fiche client, agenda, pipeline
├── CDP_vue_manager.html           # Vue Manager — supervision équipe + clients
├── CDP_vue_comptoir.html          # Vue Comptoir — accueil client en agence
├── CDP_vue_responsable_agence.html # Vue Responsable agence — tableaux de bord
├── shared.css                     # Styles communs à toutes les vues
└── data.js                        # Toutes les données mockées (clients, leads, etc.)
```

---

## Fonctionnalités par rôle

### ATC
- **Liste clients & prospects** — scoring, segmentation produit, cross-sell
- **Fiche client 360°** avec 8 onglets :
  - Identité · Contacts · Chantiers · Transactionnel · Comportemental · Relationnel · Comptes rendus · Activité récente
- **Agenda** — planning hebdomadaire, planification de visites, compte rendu de visite, opportunités détectées
- **Pipeline** — kanban leads par statut (Froid → Gagnée/Perdue), drag & drop, détail et édition du lead

### Manager
- Supervision des ATC de l'agence
- Accès aux fiches clients avec vue relationnelle (événements & participations)

### Comptoir
- Identification rapide du client en agence
- Accès à l'historique transactionnel et aux devis/commandes

### Responsable agence
- Tableaux de bord agence
- Vue consolidée des performances commerciales

---

## Données mockées (`data.js`)

Le fichier `data.js` centralise l'ensemble des données de la maquette. Il peut être édité librement pour modifier le contenu affiché.

| Variable                   |                                                          Contenu |
|---                         |                                                               ---|
| `CLIENTS`                  |      Portefeuille clients avec scoring, segments, CA, historique |
| `PROSPECTS`                |                                      Prospects rattachés aux ATC |
| `LEADS`                    | Pipeline commercial (nomLead, description, montant, statut, ATC) |
| `SEGMENTATION_PRODUIT`     |                                    Référentiel familles produits |
| `COMPTES_RENDUS`           |                                        Comptes rendus de visites |

---

## Stack technique

- **HTML5 / CSS3 / JavaScript vanille** — aucune dépendance, aucun build
- **Fonts** : DM Sans + DM Serif Display (Google Fonts)
- **Données** : entièrement in-memory via `data.js`
- **Persistance** : session uniquement (modifications perdues au rechargement)

---

## Conventions de développement

- Toutes les vues sont **auto-contenues** (pas de routeur, pas de framework)
- Les styles partagés sont dans `shared.css`, les styles spécifiques à chaque vue sont en `<style>` inline dans le `<head>`
- Le rendu dynamique utilise des templates de chaînes JS (`html += ...`) injectés via `innerHTML`
- Les données modifiées en session (comptes rendus, opportunités, rappels) sont stockées dans des variables globales préfixées `_` (ex : `_compteRendusStore`, `_opportunitesStore`)

---
