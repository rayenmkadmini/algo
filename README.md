# ALGO LAB — Learn the logic. Master the code.
## Educational Platform | Baccalauréat Sciences de l'Informatique (Tunisie)
**Année Scolaire :** 2026–2027  
**Devise :** Comprendre → Visualiser → Pratiquer → Corriger → Maîtriser  
**Langues d'apprentissage :** Français (termes scientifiques & syntaxe) + Derja tunisienne (explications intuitives)

---

## 🚀 Présentation du Projet
ALGO LAB est une plateforme d'apprentissage complète dédiée aux candidats du **Baccalauréat Sciences de l'Informatique en Tunisie**. 
Elle comble le fossé entre l'algorithmique théorique sur papier et la programmation pratique en Python 3 grâce à des simulateurs visuels interactifs, des corrigés types officiels et une console d'exécution isolée sans dépendance à des APIs d'IA.

---

## 📁 Architecture & Fonctionnalités Clés
- **1. Tronc Commun Officiel Vérifié :** Modules conformes aux directives d'inspection (Structures simples, Tableaux/Matrices, Modularité, Récursivité, Algorithmes de Tri et Recherche, Arithmétique, Fichiers).
- **2. Bilinguisme Pédagogique :** Rigueur syntaxique en français couplée à des cartes d'éclaircissement en Derja tunisienne (`تفسير بالدارجة`).
- **3. Moteur Visuel Interactif (`/visualizer`) :**
  - **Tri à bulles optimisé, Tri par sélection, Tri par insertion :** Suivi visuel des barres de hauteur, des comparaisons (jaune), permutations (rose) et éléments triés (vert).
  - **Tableaux 1D (Vecteurs) :** Visualiseur d'indices 0..N-1, pointeurs `i` et modifications de cases.
  - **Pile de Récursivité :** Empilement de cadres LIFO (Factorielle, Fibonacci), détection de cas de base et débobinage.
  - **Organigrammes (Flowcharts) :** Parcours nœud par nœud avec table des variables d'état.
- **4. Banque d'Exercices Déterministes (`/exercises`) :** QCM, complétion de code, fonctions Python, débogage et traces d'exécution avec indices progressifs (-15 pts par indice).
- **5. Playground Python Sécurisé (`/playground`) :** Bac à sable en ligne avec snippets pré-configurés pour le Bac.
- **6. Simulateur d'Épreuves du Baccalauréat (`/exams`) :** Chronomètre officiel (3h / 1h30), navigation par question et notation /20 avec corrigés types.
- **7. Tableau de Bord Élève (`/dashboard`) :** Suivi temps réel des leçons complétées, scores obtenus et recommandations de leçons sans inscription obligatoire.
- **8. Espace d'Administration (`/admin`) :** Système de validation de contenu selon le cycle `DRAFT → REVIEW → APPROVED → PUBLISHED`.

---

## 🛠️ Stack Technique
- **Frontend :** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Lucide Icons.
- **Backend & Base de données :** Supabase (PostgreSQL, Row Level Security, Auth).
- **Exécution Python :** Environnement isolé client-side sans risque pour le serveur.
- **Zéro IA au Runtime :** Toutes les explications, tests et corrigés sont préparés, vérifiés et déterministes.

---

## 💻 Démarrage Local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Compiler et lancer en mode production
npm run build
npm run start
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 📚 Documentation Détaillée
- [Audit & Sources (38 GB)](docs/AUDIT_REPORT.md)
- [Curriculum Map Officiel](docs/CURRICULUM_MAP.md)
- [Architecture Logicielle](docs/ARCHITECTURE.md)
- [Schéma de Base de Données & RLS](docs/DATABASE_SCHEMA.md)
- [Système de Design & UX](docs/DESIGN_SYSTEM.md)
- [Suivi d'Avancement](docs/PROGRESS.md)
"# algo" 
