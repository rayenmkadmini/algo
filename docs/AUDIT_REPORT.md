# ALGO LAB — Audit Report & Educational Source Inventory
**Date:** 2026-11-18  
**Scope:** Phase 0 — Environment, Educational Sources & Curriculum Audit  
**Target:** Tunisian Baccalauréat – Sciences de l'Informatique (Academic Year 2026–2027)

---

## 1. Environment & Toolchain Audit

| Component | Detected Version | Status | Notes |
| :--- | :--- | :--- | :--- |
| **Operating System** | Windows 10/11 | Verified | PowerShell execution environment |
| **Node.js** | v24.21.0 | Verified | Compatible with Next.js 14+ / 15 |
| **npm** | 11.19.0 | Verified | Package manager ready |
| **Python** | 3.14.7 | Verified | Available locally for inspection & tooling |
| **Git** | 2.55.0.windows.5 | Verified | Version control ready |
| **Thonny / Tunisian plugin** | `thonny-tunisiaschools` 0.0.14 | Verified | Official IDE plugin installed in environment |
| **Workspace** | `d:\algo tun` | Verified | Clean directory ready for project setup |

---

## 2. Educational Source Inventory

- **Base Directory:** `D:\EDUCATION RAYEN\bac info cours exam resourse`
- **Total Files:** 9,120 files
- **Total Size:** ~38,006 MB (38 GB)
- **Policy:** **STRICT READ-ONLY**. No original files are modified, renamed, or deleted.

### 2.1 File Type Breakdown
- `.pdf`: 5,735 documents (official course summaries, exams, TD series, ministerial notes)
- `.png` / `.jpg` / `.jpeg`: 1,806 image resources (diagrams, flowcharts, schemas)
- `.py`: 557 Python source files (authentic exam solutions, algorithm implementations)
- `.ui`: 115 Qt Designer interfaces (used for practical Bac interface projects)
- `.docx` / `.doc`: 134 text documents
- `.txt` / `.dat`: 171 data and binary files (for file handling algorithms)
- `.sql`: 47 database dump/query files (for STI / database section)

### 2.2 Key Curriculum Directories & Source References
1. `informatique baccalauréat\COURS`:
   - `tableau_python.pdf`, `sous_programmes_python.pdf`, `fonction_python.pdf`, `procedure_python.pdf`, `Les opérateurs.pdf`, `Les Structures De Contrôle Conditionnelles.pdf`, `Les Structures de Contrôle Itératives.pdf`, `objet_local_global.pdf`
2. `Resumé bac info 2025\Algo (Theorique et pratique)`:
   - `modules usuels algo et python 2.0.pdf`, `resume_info_2022.pdf`, `Les_Fichiers.pdf`, `les algorithmes d_approxiation.pdf`
3. `BAC-2025\algorithms`:
   - `les algortihmes de tri` (Tri à bulles, tri par sélection, tri par insertion, tri Shell)
   - `les algo de recherche` (Recherche séquentielle, recherche dichotomique)
   - `arith et reccur` (Suites récurrentes, Triangle de Pascal, PGCD, PPCM, facteurs premiers)
   - `approximation et optimisation` (Dichotomie, points fixes, méthode des rectangles)
   - `conversion entre les bases` (Bases 10, 2, 8, 16)
   - `fichier texte et fichier binaire` (Fichiers textes, fichiers d'enregistrements avec `pickle`)
4. `bac info\Programmation\Cours Complet.pdf`:
   - 136-page complete course covering all 4th year SI chapters, TDO, TDOL, TDNT, syntax specifications.
5. `informatique baccalauréat\EPREUVES BAC PRATIQUE`:
   - Practical examinations archive with official tests and Python solutions.

---

## 3. Verified Official Curriculum vs Candidate Registry

| Chapter / Topic | Official Bac SI Status | Source Reference | Educational Rules |
| :--- | :--- | :--- | :--- |
| **Les Structures de données simples** | `VERIFIED_OFFICIAL` | `Cours Complet.pdf`, `Les opérateurs.pdf` | Types: entier, réel, caractère, chaîne, booléen. TDO/TDOL |
| **Structures conditionnelles** | `VERIFIED_OFFICIAL` | `Les Structures De Contrôle Conditionnelles.pdf` | `Si ... Alors ... Sinon`, `Selon ... Faire` |
| **Structures itératives** | `VERIFIED_OFFICIAL` | `Les Structures de Contrôle Itératives.pdf` | `Pour`, `Tant que`, `Répéter ... Jusqu'à` |
| **Les Tableaux 1D (Vecteurs)** | `VERIFIED_OFFICIAL` | `tableau_python.pdf` | Algorithme: `Tableau de N type`, Python: `from numpy import array; T = array([type()]*N)` |
| **Les Matrices (Tableaux 2D)** | `VERIFIED_OFFICIAL` | `Cours Complet.pdf`, `les matrices.pdf` | Algorithme: `Tableau de N, M type` |
| **Les Enregistrements** | `VERIFIED_OFFICIAL` | `Cours Complet.pdf` (p. 1-8) | Algorithme: `Type Nom = Enregistrement ... Fin`, Python: dict / struct |
| **Les Fichiers Textes & Binaires** | `VERIFIED_OFFICIAL` | `Les_Fichiers.pdf`, `TD les fichiers Binaires` | Python: `open(..., 'r'/'w')` et `pickle.dump/load` |
| **Les Sous-Programmes (Fonctions & Procédures)** | `VERIFIED_OFFICIAL` | `sous_programmes_python.pdf`, `fonction_python.pdf` | Paramètres par valeur vs par référence (`@` ou `var`). TDOL vs TDOG |
| **La Récursivité** | `VERIFIED_OFFICIAL` | `Cours Complet.pdf` (Ch. 2), `récursivité.pdf` | Cas de base, appel récursif, comparaison itératif |
| **Algorithmes de Tri (Sélection, Bulles, Insertion, Shell)** | `VERIFIED_OFFICIAL` | `BAC-2025\algorithms\les algortihmes de tri` | 4 tris officiels au programme SI |
| **Algorithmes de Recherche (Séquentielle, Dichotomique)** | `VERIFIED_OFFICIAL` | `BAC-2025\algorithms\les algo de recherche` | Recherche séquentielle et dichotomique (itérative et récursive) |
| **Algorithmes Récurrents (Pascal, Fibonacci)** | `VERIFIED_OFFICIAL` | `BAC-2025\algorithms\arith et reccur` | Suites, triangle de Pascal matriciel et itératif |
| **Algorithmes d'Arithmétique** | `VERIFIED_OFFICIAL` | `modules usuels algo et python 2.0.pdf` | PGCD, PPCM, Nombres premiers, Diviseurs, Bases 2/8/10/16 |
| **Algorithmes d'Approximation** | `VERIFIED_OFFICIAL` | `les algorithmes d_approxiation.pdf` | Méthode de la dichotomie, rectangles |
| **Tri Rapide (QuickSort) / Tri Fusion** | `PENDING_CURRICULUM_VERIFICATION` | `Cours Complet.pdf` (Ch. 7 Algorithmes avancés) | Mentionné comme algorithme avancé, marqué comme hors tronc commun obligatoire |
| **POO Avancée (Classes/Héritage)** | `NOT_IN_BAC_SI_SYLLABUS` | Official Ministerial Syllabus | Hors programme officiel Bac SI (ne pas inclure dans les leçons obligatoires) |

---

## 4. Architectural Decisions
1. **Frontend:** Next.js 14/15 App Router, React 18/19, TypeScript, Tailwind CSS, Lucide React icons.
2. **Visual Learning Engine:** Custom HTML5/SVG/Canvas and step-by-step state engines for Flowcharts, Array memory blocks, Sorting animations (Selection, Bubble, Insertion, Shell), and Recursion Call Stack tree.
3. **Python Execution Sandbox:** Client-side WebWorker Pyodide sandbox with execution timeout (5s), sandboxed stdin/stdout capture, memory protection, preventing any access to credentials or host storage.
4. **Interactive Exercise Engine:** Multi-variant deterministic evaluation:
   - QCM with randomized options & instant scientific explanations.
   - Code/algorithm completion with token normalization & AST/regex whitespace flexibility.
   - Python unit testing sandbox comparing expected outputs and return types.
   - Multi-tier progressive hints.
5. **Backend & Persistence:** Supabase PostgreSQL with complete Row Level Security (RLS) schema, supporting public read access for lessons/exercises and student isolation for progress/attempts.
6. **Bilingual Presentation:** French for all code, algorithmic keywords, and scientific definitions; Tunisian Derja formatted in pedagogical callout badges for clear mental modeling.
