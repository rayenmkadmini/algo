import { ExamItem } from '@/types';

export const examsData: ExamItem[] = [
  {
    id: 'exam-bac-2024-theo',
    slug: 'bac-2024-theorique-si',
    title: 'Baccalauréat 2024 — Épreuve Théorique d\'Algorithmique & Programmation',
    year: 2024,
    session: 'Principale',
    type: 'Epreuve Théorique',
    durationMinutes: 180,
    totalPoints: 20,
    sourceReference: 'BAC-2025/algorithms/epreuves bac et devoirs/bacalgo2024scinfo.pdf',
    verificationStatus: 'VERIFIED_OFFICIAL',
    description: 'Sujet officiel de la session principale 2024 pour la section Sciences de l\'Informatique. Porte sur les matrices, les structures récurrentes, le tri et les fichiers d\'enregistrements.',
    questions: [
      {
        id: 'q1',
        questionNumber: 1,
        title: 'Exercice 1 : Analyse de code et complexité (4 points)',
        statement: `Soit la fonction ci-dessous effectuant une recherche dans un tableau T de N entiers triés par ordre croissant.
1. Donner le nom classique de cet algorithme. (1 pt)
2. Déterminer le nombre maximum de comparaisons pour N = 1024. (1.5 pts)
3. Corriger l'instruction erronée à la ligne 7 si on souhaite chercher dans l'ordre décroissant. (1.5 pts)`,
        bareme: 4,
        hints: [
          'Observez comment l\'espace de recherche est divisé par 2 à chaque étape.',
          'Rappelez-vous de log2(1024).',
        ],
        exerciseSlug: 'ex-dicho-completion',
        solution: `1. Il s'agit de l'algorithme de recherche dichotomique (binaire).\n2. Pour N = 1024, le nombre maximal de comparaisons est ⌈log2(1024)⌉ + 1 = 10 + 1 = 11 comparaisons.\n3. Pour un tableau trié en ordre décroissant, si T[milieu] < val, la cible se trouve à gauche : on doit écrire "fin ← milieu - 1" et inversement "deb ← milieu + 1".`,
      },
      {
        id: 'q2',
        questionNumber: 2,
        title: 'Exercice 2 : Sous-programmes et nombres remarquables (6 points)',
        statement: `Un entier N (N >= 10) est dit "Nombre Symétrique Parfait" si la somme de ses chiffres est égale au produit des facteurs premiers de son inverse.
Écrire l'algorithme d'une fonction 'Symetrique(N : entier) : booléen' en décomposant le problème en sous-programmes modulaires (SommeChiffres, Inverse, FacteursPremiers).`,
        bareme: 6,
        hints: [
          'Développez une fonction pour convertir N en chaîne avec convch ou div/mod.',
          'Vérifiez la condition finale en comparant somme et produit.',
        ],
        exerciseSlug: 'ex-qcm-fonction-procedure',
        solution: `Décomposition modulaire :
1. Fonction SommeChiffres(n : entier) : entier
2. Fonction InverseNb(n : entier) : entier
3. Fonction ProduitFacteurs(n : entier) : entier
4. Fonction Symetrique(n : entier) : booléen
   Retourner (SommeChiffres(n) = ProduitFacteurs(InverseNb(n)))`,
      },
      {
        id: 'q3',
        questionNumber: 3,
        title: 'Problème : Gestion d\'une matrice et fichiers d\'enregistrements (10 points)',
        statement: `On souhaite analyser les relevés météorologiques mensuels stockés dans un fichier binaire d'enregistrements 'meteo.dat'.
Chaque enregistrement comporte : station (chaîne de 20), temperature_max (réel), humidite (entier).
1. Déclarer en algorithmique le type Enregistrement 'Releve' et le type fichier associé. (2 pts)
2. Écrire la procédure 'Charger_Matrice' qui transfère les températures dans une matrice MAT[12, 31]. (4 pts)
3. Écrire la fonction 'Tri_Stations' qui ordonne les stations selon la température moyenne maximale par tri par sélection. (4 pts)`,
        bareme: 10,
        hints: [
          'Utilisez le mot-clé Type ... = Enregistrement ... Fin.',
          'Pour les fichiers binaires en Python : from pickle import load.',
        ],
        exerciseSlug: 'ex-tri-bulles-completion',
        solution: `Type
  Releve = Enregistrement
    station : chaine[20]
    temperature_max : reel
    humidite : entier
  Fin
  FichReleve = Fichier de Releve`,
      },
    ],
  },
  {
    id: 'exam-bac-2023-prat',
    slug: 'bac-2023-pratique-si',
    title: 'Baccalauréat 2023 — Épreuve Pratique (Sujet Révisé)',
    year: 2023,
    session: 'Pratique',
    type: 'Epreuve Pratique',
    durationMinutes: 90,
    totalPoints: 20,
    sourceReference: 'bac info/algo/Copie de Manuel-de-révision-bac-pratique.pdf (Kais Taboubi)',
    verificationStatus: 'VERIFIED_OFFICIAL',
    description: 'Épreuve sur machine (1h30). Implémentation complète en Python avec vérification par interface console et gestion de tableau NumPy.',
    questions: [
      {
        id: 'qp1',
        questionNumber: 1,
        title: 'Question 1 : Saisie sécurisée et validation de N (3 points)',
        statement: `Écrire une fonction Python 'saisir()' qui invite l'utilisateur à saisir un entier N compris strictement entre 5 et 30. La saisie doit être répétée tant que la condition n'est pas vérifiée.`,
        bareme: 3,
        hints: ['Utilisez une boucle while True avec conversion int(input()).'],
        exerciseSlug: 'ex-debug-parametre-ref',
        solution: `def saisir():
    while True:
        try:
            n = int(input("Donner N (5 < N < 30) : "))
            if 5 < n < 30:
                return n
        except ValueError:
            pass`,
      },
      {
        id: 'qp2',
        questionNumber: 2,
        title: 'Question 2 : Remplissage et transformation d\'un tableau NumPy (7 points)',
        statement: `Remplir un tableau T de N chaînes de caractères de longueurs impaires. Écrire la fonction 'transformer(T)' qui remplace chaque chaîne par son miroir si elle commence par une majuscule.`,
        bareme: 7,
        hints: ['Utilisez from numpy import array et le slicing [::-1].'],
        exerciseSlug: 'ex-tri-bulles-completion',
        solution: `from numpy import array

def transformer(T):
    for i in range(len(T)):
        if T[i][0].isupper():
            T[i] = T[i][::-1]
    return T`,
      },
      {
        id: 'qp3',
        questionNumber: 3,
        title: 'Question 3 : Algorithme de tri optimisé (10 points)',
        statement: `Ordonner le tableau résultant selon la longueur des chaînes par un tri à bulles optimisé avec indicateur booléen.`,
        bareme: 10,
        hints: ['Appliquez le principe du tri à bulles en comparant len(T[i]) et len(T[i+1]).'],
        exerciseSlug: 'ex-tri-bulles-completion',
        solution: `def trier_longueurs(T):
    n = len(T)
    echange = True
    while echange and n > 1:
        echange = False
        for i in range(n - 1):
            if len(T[i]) > len(T[i + 1]):
                T[i], T[i + 1] = T[i + 1], T[i]
                echange = True
        n -= 1
    return T`,
      },
    ],
  },
];
