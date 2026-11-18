import { ExerciseItem } from '@/types';

export const exercisesData: ExerciseItem[] = [
  // Exercise 1: QCM Fonctions vs Procédures
  {
    id: 'ex-qcm-1',
    slug: 'ex-qcm-fonction-procedure',
    title: 'QCM : Caractéristiques des Fonctions et Procédures',
    lessonSlug: 'fonctions-vs-procedures',
    type: 'qcm',
    difficulty: 'facile',
    sourceReference: 'COURS/fonction_python.pdf & COURS/procedure_python.pdf',
    verificationStatus: 'VERIFIED_OFFICIAL',
    statement: `Quelle est l'affirmation rigoureusement EXACTE concernant la modularité selon le programme officiel du Bac Informatique tunisien ?`,
    derjaHint: `تذكر القاعدة الذهبية : الفونكسيون ترجع نتيجة وحدة وبسيطة، والبروسيدور تنجم تبدل كازات أو برشا فاريابل باستعمال @.`,
    options: [
      {
        id: 'opt-a',
        label: 'Une fonction peut modifier directement plusieurs tableaux passés en paramètres sans utiliser de valeur de retour.',
        isCorrect: false,
        explanation: 'Faux : c\'est le rôle d\'une procédure de modifier des structures via passage par référence.',
      },
      {
        id: 'opt-b',
        label: 'L\'appel d\'une fonction se fait obligatoirement dans une expression, une affectation ou une opération de sortie car elle délivre un unique résultat de type simple.',
        isCorrect: true,
        explanation: 'Correct ! Une fonction renvoie un seul résultat scalaire ou chaîne utilisable dans une expression (ex: R ← F(x) ou Ecrire(F(x))).',
      },
      {
        id: 'opt-c',
        label: 'En algorithmique tunisienne, le symbole @ est placé devant les paramètres d\'une fonction pour accélérer le calcul.',
        isCorrect: false,
        explanation: 'Faux : le symbole @ indique le passage par référence dans une procédure, jamais dans une fonction.',
      },
      {
        id: 'opt-d',
        label: 'Une procédure peut être appelée à droite du signe d\'affectation : Y ← Calculer(X).',
        isCorrect: false,
        explanation: 'Faux : une procédure ne retourne pas de valeur par affectation, son appel est une instruction autonome.',
      },
    ],
    hints: [
      'Pensez à la façon dont on appelle une fonction : peut-on écrire juste "F(x)" sur une ligne isolée ?',
      'Rappelez-vous du nombre de résultats qu\'une fonction peut légalement retourner.',
    ],
    modelSolution: `Option B : L'appel d'une fonction se fait obligatoirement dans une expression, une affectation ou une opération de sortie car elle délivre un unique résultat de type simple.`,
    explanation: `Selon la norme d'inspection pédagogique de la Tunisie, une fonction renvoie TOUJOURS un seul résultat simple par l'instruction "Retourner", et son appel doit s'insérer dans une affectation ou une sortie. Une procédure quant à elle s'appelle de manière autonome et transmet ses modifications via des paramètres par référence (@).`,
  },

  // Exercise 2: Code Completion (Tri à Bulles)
  {
    id: 'ex-comp-1',
    slug: 'ex-tri-bulles-completion',
    title: 'Compléter : Algorithme du Tri à Bulles Optimisé',
    lessonSlug: 'tri-a-bulles',
    type: 'algo_completion',
    difficulty: 'moyen',
    sourceReference: 'BAC-2025/algorithms/les algortihmes de tri/resumé et cours/tri-bulle-tableau-dentiers.py',
    verificationStatus: 'VERIFIED_OFFICIAL',
    statement: `Complétez les 3 lignes manquantes de la procédure algorithmique de tri à bulles optimisé ci-dessous afin d'assurer l'arrêt précoce en cas de tableau déjà ordonné :`,
    derjaHint: `ركز في الـ flag متاع الـ booléen : في أول كل دورة ترجعو Faux، وكان عملت permutation ترجعو Vrai باش تعرف لي فما تبديل صار.`,
    initialCode: `Procédure Tri_Bulles (@T : Tableau, n : entier)
Début
    Répéter
        ___LIGNE_1___
        Pour i de 0 à n - 2 Faire
            Si T[i] > T[i + 1] Alors
                aux ← T[i]
                T[i] ← T[i + 1]
                T[i + 1] ← aux
                ___LIGNE_2___
            FinSi
        FinPour
        n ← n - 1
    Jusqu'à (___LIGNE_3___)
Fin`,
    expectedAnswer: `echange ← Faux
echange ← Vrai
echange = Faux ou n = 1`,
    acceptedAnswers: [
      `echange ← Faux\nechange ← Vrai\nechange = Faux ou n = 1`,
      `echange = Faux\nechange = Vrai\nechange = Faux ou n = 1`,
      `echange ← faux\nechange ← vrai\nechange = faux ou n = 1`,
    ],
    hints: [
      'Ligne 1 : Il faut supposer qu\'aucun échange n\'aura lieu au début du tour (echange ← Faux).',
      'Ligne 2 : Dès qu\'on permute deux cases, on signale que le tableau n\'était pas encore trié (echange ← Vrai).',
      'Ligne 3 : La condition d\'arrêt vérifie si aucun échange n\'a eu lieu ou si la taille restante est 1.',
    ],
    modelSolution: `Ligne 1 : echange ← Faux
Ligne 2 : echange ← Vrai
Ligne 3 : echange = Faux ou n = 1`,
    explanation: `L'optimisation du tri à bulles repose sur un indicateur booléen (flag). Si après avoir inspecté tous les couples adjacents aucun échange n'a été effectué (echange = Faux), cela signifie mathématiquement que tous les éléments sont dans l'ordre croissant. On peut donc stopper la procédure immédiatement sans exécuter les tours restants inutiles.`,
  },

  // Exercise 3: Python Function Completion (Recherche Dichotomique)
  {
    id: 'ex-comp-2',
    slug: 'ex-dicho-completion',
    title: 'Compléter : Fonction Python de Recherche Dichotomique',
    lessonSlug: 'recherche-dichotomique',
    type: 'function_completion',
    difficulty: 'moyen',
    sourceReference: 'BAC-2025/algorithms/les algo de recherche/résumé et cours',
    verificationStatus: 'VERIFIED_OFFICIAL',
    statement: `Complétez la fonction Python suivante qui effectue la recherche dichotomique de la valeur 'val' dans un tableau trié 'T' et renvoie l'indice trouvé ou -1 si absent.`,
    derjaHint: `الـ milieu يتحسب بالقسمة الصحيحة //، وكان القيمة المطلوبة أكبر من T[milieu]، نقدمو بالـ deb، وإلا نوخرو بالـ fin.`,
    initialCode: `def recherche_dicho(T, val):
    deb = 0
    fin = len(T) - 1
    trouve = False
    pos = -1

    while deb <= fin and not trouve:
        milieu = (deb + fin) // 2
        if T[milieu] == val:
            trouve = True
            pos = milieu
        elif T[milieu] < val:
            # Compléter ici :
            deb = ___
        else:
            # Compléter ici :
            fin = ___

    return pos`,
    expectedAnswer: `deb = milieu + 1
fin = milieu - 1`,
    acceptedAnswers: [
      `deb = milieu + 1\nfin = milieu - 1`,
      `milieu + 1\nmilieu - 1`,
    ],
    testCases: [
      {
        id: 'tc-1',
        input: 'T = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], val = 23',
        expectedOutput: '5',
        description: 'Élément présent au milieu droit du tableau',
      },
      {
        id: 'tc-2',
        input: 'T = [10, 20, 30, 40], val = 99',
        expectedOutput: '-1',
        description: 'Élément absent (supérieur à toutes les valeurs)',
      },
      {
        id: 'tc-3',
        input: 'T = [5, 10, 15], val = 5',
        expectedOutput: '0',
        description: 'Élément situé au premier indice (deb = 0)',
      },
    ],
    hints: [
      'Si T[milieu] < val, cela signifie que val se situe strictement à droite du milieu.',
      'Par conséquent, la nouvelle borne inférieure devient : deb = milieu + 1.',
      'Symétriquement, si T[milieu] > val, la nouvelle borne supérieure devient : fin = milieu - 1.',
    ],
    modelSolution: `deb = milieu + 1\nfin = milieu - 1`,
    explanation: `Dans la recherche dichotomique, lorsque l'élément médian T[milieu] ne correspond pas à la cible, on élimine définitivement la case milieu ainsi que toute la moitié incompatible. C'est pourquoi on fait un saut de +/- 1 : deb = milieu + 1 ou fin = milieu - 1. Oublier le +/- 1 peut provoquer une boucle infinie quand deb et fin se rejoignent.`,
  },

  // Exercise 4: Debugging (Erreur de passage de paramètre & indice)
  {
    id: 'ex-dbg-1',
    slug: 'ex-debug-parametre-ref',
    title: 'Débogage : Erreurs Typiques dans une Procédure de Remplissage',
    lessonSlug: 'fonctions-vs-procedures',
    type: 'debugging',
    difficulty: 'difficile',
    sourceReference: 'informatique baccalauréat/COURS/procedure_python.pdf & Devoirs synthèse',
    verificationStatus: 'VERIFIED_OFFICIAL',
    statement: `Un élève a écrit l'algorithme suivant pour saisir N entiers strictement positifs dans un tableau T. L'inspecteur a relevé 2 fautes majeures empêchant le fonctionnement correct. Identifiez et corrigez ces erreurs.`,
    derjaHint: `ثبت مليح في en-tête متاع البروسيدور : هل التابلو T و N مسبوقين بـ @ ؟ وثبت في الـ boucle Pour منين تبدأ ووين توفى.`,
    initialCode: `Procédure Saisir_Tab (T : Tableau, N : entier)
Début
    Répéter
        Ecrire("Donner la taille N (2 à 20) : ")
        Lire(N)
    Jusqu'à (N >= 2 et N <= 20)

    Pour i de 1 à N Faire
        Répéter
            Ecrire("T[", i, "] = ")
            Lire(T[i])
        Jusqu'à (T[i] > 0)
    FinPour
Fin`,
    expectedAnswer: `1. En-tête : Les paramètres T et N doivent être passés par référence avec le symbole @ (@T : Tableau, @N : entier) car ils sont modifiés à l'intérieur de la procédure et doivent être retournés au programme principal.
2. Bornes des indices : En convention standardisée (ou indexation 0 à N-1), si les tableaux commencent à 0, la boucle Pour doit aller de 0 à N-1. Si indexé de 1 à N, la taille déclarée dans le type doit être au moins de 1 à 20.`,
    hints: [
      'Regardez l\'en-tête : N et T reçoivent des valeurs saisies par l\'utilisateur. Comment ces valeurs peuvent-elles revenir au programme principal ?',
      'Rappelez-vous du passage par référence (@).',
    ],
    modelSolution: `Correction :
Procédure Saisir_Tab (@T : Tableau, @N : entier)
Début
    Répéter
        Ecrire("Donner la taille N (2 à 20) : ")
        Lire(N)
    Jusqu'à (N >= 2 et N <= 20)

    Pour i de 0 à N - 1 Faire
        Répéter
            Ecrire("T[", i, "] = ")
            Lire(T[i])
        Jusqu'à (T[i] > 0)
    FinPour
Fin`,
    explanation: `Sans le symbole @ devant N et T dans l'en-tête de la procédure, les valeurs sont passées par valeur (copie locale). À la sortie de la procédure, le tableau T et la variable N dans le programme principal conserveront leur valeur initiale (non initialisée ou vide), rendant la suite du programme totalement erronée !`,
  },

  // Exercise 5: Trace d'exécution (Récursivité - Factorielle / Somme)
  {
    id: 'ex-trace-1',
    slug: 'ex-facto-rec-trace',
    title: 'Trace d’Exécution : Suivi de la Pile d’Appels Récursive',
    lessonSlug: 'principe-recursivite',
    type: 'trace_execution',
    difficulty: 'moyen',
    sourceReference: 'bac info/Programmation/Cours Complet.pdf (Chapitre 2)',
    verificationStatus: 'VERIFIED_OFFICIAL',
    statement: `Soit la fonction récursive suivante :

Fonction Mystere (a : entier, b : entier) : entier
Début
    Si b = 0 Alors
        Retourner 0
    Sinon Si b mod 2 = 0 Alors
        Retourner Mystere(a + a, b div 2)
    Sinon
        Retourner a + Mystere(a, b - 1)
    FinSi
Fin

Donnez la valeur retournée par l'appel Mystere(3, 5) en détaillant les appels successifs.`,
    derjaHint: `تبع بالستيلو والورقة خطوة بخطوة : كل مرة شوف b زوجي (mod 2 = 0) وإلا فردي. كان فردي نحي 1 ونزيد a، وكان زوجي ندوبلو a ونقسم b على 2.`,
    expectedAnswer: `15`,
    acceptedAnswers: ['15', 'Mystere(3, 5) = 15'],
    hints: [
      'Appel 1 : Mystere(3, 5) -> b=5 est impair -> retourne 3 + Mystere(3, 4)',
      'Appel 2 : Mystere(3, 4) -> b=4 est pair -> retourne Mystere(6, 2)',
      'Appel 3 : Mystere(6, 2) -> b=2 est pair -> retourne Mystere(12, 1)',
      'Appel 4 : Mystere(12, 1) -> b=1 est impair -> retourne 12 + Mystere(12, 0)',
      'Appel 5 : Mystere(12, 0) -> b=0 -> CAS DE BASE -> retourne 0',
    ],
    modelSolution: `Mystere(3, 5) calcule le produit russe a * b = 3 * 5 = 15.
Déroulement :
1. Mystere(3, 5) = 3 + Mystere(3, 4)
2. Mystere(3, 4) = Mystere(6, 2)
3. Mystere(6, 2) = Mystere(12, 1)
4. Mystere(12, 1) = 12 + Mystere(12, 0)
5. Mystere(12, 0) = 0 (cas de base)
Débobinage :
Mystere(12, 1) = 12 + 0 = 12
Mystere(6, 2) = 12
Mystere(3, 4) = 12
Mystere(3, 5) = 3 + 12 = 15.`,
    explanation: `Cet algorithme implémente la fameuse multiplication russe (ou égyptienne) de manière récursive. Il permet de multiplier deux nombres en temps logarithmique O(log b) en effectuant uniquement des additions, des dédoublements et des divisions par 2.`,
  },
];
