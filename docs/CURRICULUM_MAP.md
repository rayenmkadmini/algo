# ALGO LAB — Official Curriculum Map (Baccalauréat Informatique Tunisie)

## Academic Year: 2026–2027
**Curriculum Status Codes:**
- `[VERIFIED_OFFICIAL]`: Confirmed present in official Tunisian ministerial inspections and Bac exam series.
- `[PENDING_CURRICULUM_VERIFICATION]`: Candidate topic awaiting ministerial directive check.
- `[ADDITIONAL_PRACTICE]`: Supplemental problem-solving challenge for distinction.

---

## Module 1: Les Structures de Données et Types Simples [VERIFIED_OFFICIAL]
- **Source:** `COURS\Les Structures Simples.pdf`, `COURS\Les opérateurs.pdf`, `Cours Complet.pdf`
- **Chapitre 1.1:** Notion de variable, constante et affectation (`←` en algo, `=` en Python).
- **Chapitre 1.2:** Types scalaires de base: `entier` (`int`), `réel` (`float`), `caractère` (`str`), `booléen` (`bool`).
- **Chapitre 1.3:** Opérateurs arithmétiques (`+`, `-`, `*`, `/`, `div`, `mod` vs `//`, `%`), relationnels (`=`, `≠`, `<`, `<=`, `>`, `>=`), logiques (`non`, `et`, `ou`).
- **Chapitre 1.4:** Les chaînes de caractères: `long(ch)`, `ch[i]`, `sous-chaine(ch, d, f)`, `pos(c, ch)`, `convch(x)`, `valeur(ch)`.

## Module 2: Les Structures de Contrôle [VERIFIED_OFFICIAL]
- **Source:** `COURS\Les Structures De Contrôle Conditionnelles.pdf`, `COURS\Les Structures de Contrôle Itératives.pdf`
- **Chapitre 2.1:** Structure conditionnelle simple et complète (`Si ... Alors ... Sinon ... FinSi`).
- **Chapitre 2.2:** Structure à choix multiples (`Selon ... Faire ... FinSelon`).
- **Chapitre 2.3:** Boucle à compteur (`Pour compteur de deb à fin [Pas de p] Faire ... FinPour`).
- **Chapitre 2.4:** Boucle à pré-condition (`Tant que condition Faire ... FinTantQue`).
- **Chapitre 2.5:** Boucle à post-condition (`Répéter ... Jusqu'à (condition)`).
- **Chapitre 2.6:** Algorithme de validation de saisie (contrôle de conformité d'une donnée).

## Module 3: Les Structures de Données Composées [VERIFIED_OFFICIAL]
- **Source:** `COURS\tableau_python.pdf`, `Cours Complet.pdf` (Ch. 1)
- **Chapitre 3.1:** Les Tableaux à une dimension (Vecteurs): déclaration TDO/TDNT, initialisation, remplissage, affichage.
- **Chapitre 3.2:** NumPy en Python: `from numpy import array; T = array([int()] * N)`.
- **Chapitre 3.3:** Les Tableaux à deux dimensions (Matrices): parcours ligne par ligne, diagonales.
- **Chapitre 3.4:** Les Enregistrements (`Type ... = Enregistrement ... Fin`): champs, accès, vecteur d'enregistrements.

## Module 4: La Modularité (Sous-Programmes) [VERIFIED_OFFICIAL]
- **Source:** `COURS\sous_programmes_python.pdf`, `fonction_python.pdf`, `procedure_python.pdf`
- **Chapitre 4.1:** Définition d'une Fonction (retourne un seul résultat simple) vs Procédure (0, 1 ou plusieurs résultats).
- **Chapitre 4.2:** Paramètres formels vs effectifs.
- **Chapitre 4.3:** Modes de passage: par valeur vs par référence/variable (`@` ou `var`).
- **Chapitre 4.4:** Portée des identificateurs: TDOG (Objets globaux) vs TDOL (Objets locaux).

## Module 5: La Récursivité [VERIFIED_OFFICIAL]
- **Source:** `Cours Complet.pdf` (Ch. 2), `récursivité.pdf`
- **Chapitre 5.1:** Principe de la récursivité, pile d'appels, condition d'arrêt (cas de base) et cas récursif.
- **Chapitre 5.2:** Fonctions récursives arithmétiques (factorielle, puissance, PGCD récursif).
- **Chapitre 5.3:** Recherche dichotomique récursive.

## Module 6: Les Algorithmes de Tri [VERIFIED_OFFICIAL]
- **Source:** `BAC-2025\algorithms\les algortihmes de tri`, `Cours Complet.pdf` (Ch. 3)
- **Chapitre 6.1:** Tri par sélection (recherche du minimum/maximum et permutation).
- **Chapitre 6.2:** Tri à bulles (avec et sans indicateur d'échange / optimisation).
- **Chapitre 6.3:** Tri par insertion (décalage et insertion en place).
- **Chapitre 6.4:** Tri Shell (sous-tableaux avec pas décroissant).
- **Chapitre 6.5:** Tri Fusion / Tri Rapide [PENDING_CURRICULUM_VERIFICATION - Hors examen obligatoire standard].

## Module 7: Les Algorithmes de Recherche [VERIFIED_OFFICIAL]
- **Source:** `BAC-2025\algorithms\les algo de recherche`
- **Chapitre 7.1:** Recherche séquentielle dans un tableau non trié (avec boucle TantQue ou Pour).
- **Chapitre 7.2:** Recherche séquentielle dans un tableau trié (arrêt précoce).
- **Chapitre 7.3:** Recherche dichotomique itérative dans un tableau préalablement trié.

## Module 8: Algorithmes Récurrents et Arithmétiques [VERIFIED_OFFICIAL]
- **Source:** `modules usuels algo et python 2.0.pdf`, `BAC-2025\algorithms\arith et reccur`
- **Chapitre 8.1:** Diviseurs, primalité d'un entier, décomposition en facteurs premiers.
- **Chapitre 8.2:** PGCD (différence euclidienne, modulo), PPCM.
- **Chapitre 8.3:** Nombres remarquables (Parfait, Abondant, Ami, Palindrome, Armstrong).
- **Chapitre 8.4:** Suites récurrentes (Suite de Fibonacci, suite d'ordre k).
- **Chapitre 8.5:** Triangle de Pascal (génération matricielle et formules de combinaisons).
- **Chapitre 8.6:** Conversion entre bases de numération (Base 10, Base 2, Base 8, Base 16).

## Module 9: Les Algorithmes d'Approximation [VERIFIED_OFFICIAL]
- **Source:** `les algorithmes d_approxiation.pdf`
- **Chapitre 9.1:** Recherche de solution par dichotomie (encadrement avec précision `eps`).
- **Chapitre 9.2:** Calcul approché d'aire par la méthode des rectangles.

## Module 10: Les Fichiers (Textes et Binaires) [VERIFIED_OFFICIAL]
- **Source:** `Les_Fichiers.pdf`, `TD les fichiers Binaires`, `TD les fichiers textes`
- **Chapitre 10.1:** Fichiers textes: création, écriture, lecture ligne par ligne (`open(..., 'r'/'w')`).
- **Chapitre 10.2:** Fichiers d'enregistrements / binaires: utilisation du module `pickle` (`pickle.dump`, `pickle.load`).
