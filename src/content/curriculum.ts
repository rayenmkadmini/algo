import { ModuleItem, ChapterItem, LessonItem } from '@/types';

export const modulesData: ModuleItem[] = [
  {
    id: 'mod-1',
    slug: 'structures-simples',
    title: 'Structures Simples & Opérateurs',
    tagline: 'Les briques fondamentales de la programmation',
    description: 'Comprendre les variables, constantes, types de données élémentaires et opérateurs selon la notation officielle tunisienne.',
    category: 'commun',
    chaptersCount: 3,
    durationHours: 6,
    iconName: 'Binary',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    id: 'mod-2',
    slug: 'structures-de-controle',
    title: 'Structures de Contrôle',
    tagline: 'Maîtriser le flux logique : conditions et boucles',
    description: 'Structures conditionnelles (Si, Selon) et boucles itératives (Pour, Tant que, Répéter) avec leurs équivalents stricts en Python.',
    category: 'commun',
    chaptersCount: 3,
    durationHours: 8,
    iconName: 'GitBranch',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    id: 'mod-3',
    slug: 'tableaux-et-matrices',
    title: 'Tableaux & Matrices',
    tagline: 'Manipulation des collections de données en mémoire',
    description: 'Vecteurs à une dimension et matrices 2D en algorithmique et utilisation de NumPy en Python.',
    category: 'commun',
    chaptersCount: 3,
    durationHours: 10,
    iconName: 'Grid',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    id: 'mod-4',
    slug: 'sous-programmes',
    title: 'Modularité : Fonctions & Procédures',
    tagline: 'Décomposer pour mieux résoudre',
    description: 'Conception modulaire, distinction fonction/procédure, passage par valeur vs par référence (@), TDOG et TDOL.',
    category: 'commun',
    chaptersCount: 2,
    durationHours: 8,
    iconName: 'Cpu',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    id: 'mod-5',
    slug: 'recursivite',
    title: 'La Récursivité',
    tagline: 'Comprendre la pile d’appels et le débobinage',
    description: 'Définition d’un module récursif, cas de base, condition d’arrêt, pile d’exécution et transition itératif/récursif.',
    category: 'commun',
    chaptersCount: 2,
    durationHours: 7,
    iconName: 'Layers',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    id: 'mod-6',
    slug: 'algorithmes-de-tri',
    title: 'Algorithmes de Tri',
    tagline: 'Ordonner efficacement les données',
    description: 'Tri par sélection, tri à bulles (avec flag de stabilisation), tri par insertion et tri Shell au programme officiel.',
    category: 'algorithmique',
    chaptersCount: 4,
    durationHours: 10,
    iconName: 'ArrowDownUp',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    id: 'mod-7',
    slug: 'algorithmes-de-recherche',
    title: 'Algorithmes de Recherche',
    tagline: 'Trouver un élément dans une structure ordonnée ou non',
    description: 'Recherche séquentielle dans un tableau non trié/trié et recherche dichotomique itérative et récursive.',
    category: 'algorithmique',
    chaptersCount: 2,
    durationHours: 6,
    iconName: 'Search',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    id: 'mod-8',
    slug: 'arithmetique-recurrents',
    title: 'Arithmétique & Algorithmes Récurrents',
    tagline: 'PGCD, PPCM, Nombres premiers et suites',
    description: 'Algorithmes classiques d’arithmétique (Euclide, facteurs premiers, conversion de bases 10/2/8/16) et suites comme Pascal & Fibonacci.',
    category: 'commun',
    chaptersCount: 4,
    durationHours: 12,
    iconName: 'Hash',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
  {
    id: 'mod-9',
    slug: 'les-fichiers',
    title: 'Manipulation des Fichiers',
    tagline: 'Pérenniser les données sur disque',
    description: 'Fichiers textes et fichiers d’enregistrements/binaires (avec pickle en Python) selon le syllabus officiel.',
    category: 'commun',
    chaptersCount: 2,
    durationHours: 8,
    iconName: 'FileText',
    verificationStatus: 'VERIFIED_OFFICIAL',
  },
];

export const chaptersData: ChapterItem[] = [
  // Module 1
  {
    id: 'chap-1-1',
    moduleId: 'mod-1',
    moduleSlug: 'structures-simples',
    slug: 'variables-et-types',
    title: 'Variables, Constantes et Types Éléments',
    description: 'Les concepts fondamentaux de stockage en mémoire.',
    orderIndex: 1,
    verificationStatus: 'VERIFIED_OFFICIAL',
    lessonsCount: 2,
  },
  {
    id: 'chap-1-2',
    moduleId: 'mod-1',
    moduleSlug: 'structures-simples',
    slug: 'operateurs-et-expressions',
    title: 'Opérateurs et Fonctions Prédéfinies',
    description: 'Arithmétique, comparaisons logiques et fonctions usuelles (div, mod, convch, abs).',
    orderIndex: 2,
    verificationStatus: 'VERIFIED_OFFICIAL',
    lessonsCount: 2,
  },
  // Module 2
  {
    id: 'chap-2-1',
    moduleId: 'mod-2',
    moduleSlug: 'structures-de-controle',
    slug: 'structures-conditionnelles',
    title: 'Structures Conditionnelles (Si, Selon)',
    description: 'Faire des choix logiques selon une condition booléenne.',
    orderIndex: 1,
    verificationStatus: 'VERIFIED_OFFICIAL',
    lessonsCount: 2,
  },
  {
    id: 'chap-2-2',
    moduleId: 'mod-2',
    moduleSlug: 'structures-de-controle',
    slug: 'structures-iteratives',
    title: 'Structures Itératives (Pour, Tant que, Répéter)',
    description: 'Répéter des blocs d’instructions de manière contrôlée.',
    orderIndex: 2,
    verificationStatus: 'VERIFIED_OFFICIAL',
    lessonsCount: 3,
  },
  // Module 3
  {
    id: 'chap-3-1',
    moduleId: 'mod-3',
    moduleSlug: 'tableaux-et-matrices',
    slug: 'tableaux-une-dimension',
    title: 'Les Tableaux à une dimension (Vecteurs)',
    description: 'Déclaration TDO/TDNT, allocation NumPy et parcours séquentiel.',
    orderIndex: 1,
    verificationStatus: 'VERIFIED_OFFICIAL',
    lessonsCount: 2,
  },
  // Module 4
  {
    id: 'chap-4-1',
    moduleId: 'mod-4',
    moduleSlug: 'sous-programmes',
    slug: 'fonctions-et-procedures',
    title: 'Fonctions, Procédures et Portée',
    description: 'Définition formelle, appel, passage par valeur vs variable (@) et TDOG/TDOL.',
    orderIndex: 1,
    verificationStatus: 'VERIFIED_OFFICIAL',
    lessonsCount: 2,
  },
  // Module 5
  {
    id: 'chap-5-1',
    moduleId: 'mod-5',
    moduleSlug: 'recursivite',
    slug: 'principe-recursivite',
    title: 'Comprendre la Récursivité & la Pile d’Appels',
    description: 'Analyse d’un sous-programme qui s’appelle lui-même et détection de la condition d’arrêt.',
    orderIndex: 1,
    verificationStatus: 'VERIFIED_OFFICIAL',
    lessonsCount: 2,
  },
  // Module 6
  {
    id: 'chap-6-1',
    moduleId: 'mod-6',
    moduleSlug: 'algorithmes-de-tri',
    slug: 'tri-selection-bulles',
    title: 'Tri par Sélection et Tri à Bulles',
    description: 'Les deux algorithmes de tri élémentaires essentiels au Bac.',
    orderIndex: 1,
    verificationStatus: 'VERIFIED_OFFICIAL',
    lessonsCount: 2,
  },
  {
    id: 'chap-6-2',
    moduleId: 'mod-6',
    moduleSlug: 'algorithmes-de-tri',
    slug: 'tri-insertion-shell',
    title: 'Tri par Insertion et Tri Shell',
    description: 'Tris avancés avec gestion de décalage et pas décroissant.',
    orderIndex: 2,
    verificationStatus: 'VERIFIED_OFFICIAL',
    lessonsCount: 2,
  },
  // Module 7
  {
    id: 'chap-7-1',
    moduleId: 'mod-7',
    moduleSlug: 'algorithmes-de-recherche',
    slug: 'recherche-dichotomique',
    title: 'Recherche Séquentielle vs Recherche Dichotomique',
    description: 'Diviser par deux l’espace de recherche à chaque itération sur un tableau trié.',
    orderIndex: 1,
    verificationStatus: 'VERIFIED_OFFICIAL',
    lessonsCount: 2,
  },
  // Module 8
  {
    id: 'chap-8-1',
    moduleId: 'mod-8',
    moduleSlug: 'arithmetique-recurrents',
    slug: 'pgcd-ppcm-premiers',
    title: 'PGCD, PPCM et Nombres Premiers',
    description: 'Résolution méthodique des problèmes arithmétiques du Bac.',
    orderIndex: 1,
    verificationStatus: 'VERIFIED_OFFICIAL',
    lessonsCount: 2,
  },
];

export const lessonsData: LessonItem[] = [
  // Lesson 1: Fonctions vs Procédures
  {
    id: 'les-fonctions-vs-procedures',
    chapterSlug: 'fonctions-et-procedures',
    moduleSlug: 'sous-programmes',
    slug: 'fonctions-vs-procedures',
    title: 'Fonctions vs Procédures : Définition et Passage de Paramètres',
    orderIndex: 1,
    durationMinutes: 35,
    verificationStatus: 'VERIFIED_OFFICIAL',
    sourceReference: 'COURS/fonction_python.pdf et COURS/procedure_python.pdf (Lycée pilote)',
    learningObjectives: [
      'Différencier rigoureusement une Fonction d’une Procédure selon le nombre et type de résultats retournés.',
      'Maîtriser le passage de paramètre par valeur vs par référence (@ en algo, mutable en Python).',
      'Rédiger correctement le TDOL (Tableau de Déclaration des Objets Locaux) et le TDOG.',
      'Traduire fidèlement la modularité algorithmique en code Python avec def et return.',
    ],
    prerequisites: [
      'Notion de variable et de type de données (entier, réel, chaîne, booléen).',
      'Structures conditionnelles et itératives de base.',
    ],
    frenchDefinition: `Un sous-programme (ou module) est une suite logique d'instructions identifiée par un nom, conçue pour exécuter une tâche précise au sein d'une application.\n
Une FONCTION est un sous-programme qui prend des paramètres en entrée et calcule un UNIQUE résultat de type simple (entier, réel, caractère, chaîne ou booléen) retourné au programme appelant à l'aide de l'instruction "Retourner". Son appel se fait toujours dans une expression, une affectation ou une condition.\n
Une PROCÉDURE est un sous-programme qui réalise un traitement pouvant modifier zéro, un ou plusieurs paramètres transmis par variable (référence désignée par le symbole @ en algorithmique). Une procédure ne renvoie pas de résultat par affectation : son appel constitue une instruction autonome.`,
    derjaExplanation: `الفونكسيون (Fonction) هي "صندوق سحري" نعطيوه معطيات (paramètres)، يخدم عليهم ويرجّع نتيجة وحيدة أكيدة (résultat unique) عبر "Retourner". ماتنجمش تنادي فونكسيون وحدها في السطر؛ لازم ديما تحطها في affectation كيف: (res ← calcul(x)) أو في ecrire(calcul(x)).\n
أما البروسيدور (Procédure) فهي مخصصة لإجراء عمل (action) ينجم يبدل برشا حاجات، كيف تعمير tableau أو كتابة في fichier، وماترجعش نتيجة بـ Retourner، بل تستعمل paramètres par référence (نحطو قبلهم @ في الألغو) باش التغيير يقعد صحيح في البرنامج الرئيسي. تناديها بسطر مستقل: remplir(T, n).`,
    algoSyntax: `// --- 1. DÉFINITION D'UNE FONCTION ---
Fonction Nom_Fonction (p1 : type1, p2 : type2) : type_retour
Début
    // Traitement
    Retourner expression
Fin

// --- 2. DÉFINITION D'UNE PROCÉDURE ---
Procédure Nom_Procedure (val1 : type1, @ref2 : type2)
Début
    // Instructions modifiant ref2
Fin

// --- 3. DÉCLARATION LOCALE (TDOL) ---
// Tableau de Déclaration des Objets Locaux du sous-programme`,
    pythonSyntax: `# --- 1. FONCTION EN PYTHON ---
def nom_fonction(p1, p2):
    # Traitement local
    return resultat

# --- 2. PROCÉDURE EN PYTHON ---
# En Python, les objets modifiables (listes, tableaux numpy, dictionnaires)
# sont passés naturellement par référence.
def nom_procedure(val1, ref2):
    # ref2[i] = nouvelle_valeur
    pass

# Si on veut modifier une variable simple passée par référence :
def incrementer(x):
    return x + 1  # ou retourner un tuple`,
    comparisonNotes: [
      'En algorithme, la distinction entre Fonction et Procédure est stricte. Une fonction ne doit jamais modifier ses paramètres.',
      'En algorithme tunisien, le passage par variable (référence) est matérialisé par un "@" (ou le mot-clé "var") devant le paramètre formel dans l\'en-tête de la procédure.',
      'En Python, le mot-clé unique "def" est utilisé pour les fonctions et les procédures. Pour simuler une procédure retournant plusieurs valeurs scalaires, on utilise un retour tuple : return a, b.',
    ],
    examples: [
      {
        title: 'Fonction : Calcul de la somme des diviseurs stricts d\'un entier X',
        algoCode: `Fonction Som_Diviseurs (x : entier) : entier
Début
    S ← 0
    Pour i de 1 à x div 2 Faire
        Si x mod i = 0 Alors
            S ← S + i
        FinSi
    FinPour
    Retourner S
Fin`,
        pythonCode: `def som_diviseurs(x):
    s = 0
    for i in range(1, (x // 2) + 1):
        if x % i == 0:
            s += i
    return s`,
        explanation: 'La fonction parcourt les diviseurs potentiels jusqu\'à x div 2 et cumule les diviseurs stricts dans S.',
        derjaTip: 'الـ boucle تقف عند (x div 2) على خاطر مستحيل تلقى قاسم أكبر من شطر العدد إلا العدد نفسو، وهذا يوفر وقت الحساب.',
        output: 'Pour x = 6, retourne 1 + 2 + 3 = 6',
      },
      {
        title: 'Procédure : Permutation de deux entiers (Passage par référence)',
        algoCode: `Procédure Permuter (@a : entier, @b : entier)
Début
    aux ← a
    a ← b
    b ← aux
Fin`,
        pythonCode: `def permuter(a, b):
    # En Python idiomatique pour les scalaires:
    return b, a`,
        explanation: 'En algorithme, a et b sont précédés de @ pour que l\'échange soit répercuté dans le programme appelant.',
        derjaTip: 'رد بالك ! كان ماتحطش @ قبل a و b، التبديل يصير كان لداخل وسط البروسيدور، والبرنامج الرئيسي مايتأثرش جملة.',
        output: 'Avant: a=5, b=9 -> Après: a=9, b=5',
      },
    ],
    commonMistakes: [
      'Utiliser l\'instruction "Retourner" à l\'intérieur d\'une procédure en algorithmique (INTERDIT au Bac).',
      'Oublier le symbole "@" devant les paramètres modifiés dans une procédure.',
      'Appeler une fonction comme une instruction seule sans récupérer son résultat (ex: Calcul(A) au lieu de R ← Calcul(A)).',
      'Confondre les paramètres formels (lors de la définition) et les paramètres effectifs (lors de l\'appel).',
    ],
    summaryPoints: [
      'Fonction = 1 résultat simple, appelée dans une expression.',
      'Procédure = 0 ou plusieurs modifications, appelée comme instruction autonome.',
      '@ indique le passage par référence dans la norme d’inspection tunisienne.',
      'Le TDOL répertorie strictement toutes les variables internes créées dans le module.',
    ],
    relatedExerciseSlugs: ['ex-qcm-fonction-procedure', 'ex-complete-fonction-diviseurs', 'ex-debug-parametre-ref'],
  },

  // Lesson 2: Tri à Bulles
  {
    id: 'les-tri-a-bulles',
    chapterSlug: 'tri-selection-bulles',
    moduleSlug: 'algorithmes-de-tri',
    slug: 'tri-a-bulles',
    title: 'Le Tri à Bulles (Bubble Sort) et son Optimisation',
    orderIndex: 2,
    durationMinutes: 40,
    verificationStatus: 'VERIFIED_OFFICIAL',
    sourceReference: 'BAC-2025/algorithms/les algortihmes de tri/resumé et cours/tri-bulle-tableau-dentiers.py',
    learningObjectives: [
      'Comprendre le principe physique du tri à bulles (remontée des plus grands éléments).',
      'Implémenter la version optimisée avec indicateur booléen d’échange (arret précoce).',
      'Analyser le nombre de comparaisons dans le pire des cas et dans le meilleur des cas.',
      'Visualiser l\'état du tableau case par case à chaque passage de boucle.',
    ],
    prerequisites: [
      'Manipulation des tableaux 1D (vecteurs).',
      'Boucles imbriquées (Répéter/Tant que et Pour).',
      'Procédure de permutation de deux cases.',
    ],
    frenchDefinition: `Le tri à bulles est un algorithme de tri par comparaison qui parcourt séquentiellement le tableau en comparant chaque paire d'éléments adjacents et en les permutant s'ils sont dans le désordre.\n
À chaque passage complet, le plus grand élément restant "remonte" à sa place définitive à la fin du tableau, comme une bulle d'air dans l'eau. Dans sa version optimisée officielle pour le Baccalauréat tunisien, on introduit une variable booléenne (ex: "echange") permettant d'arrêter l'algorithme dès qu'un passage complet s'effectue sans aucune permutation, garantissant un tri en O(N) si le tableau est déjà ordonné.`,
    derjaExplanation: `تري آ بول (Tri à bulles) ساهل برشا في الفكرة متاعو : يتعدى على التابلو من الأول للخر، ويقارن كل زوز كازات جيران (T[i] و T[i+1]). كان لقى الكازة لي على اليسار أكبر، يبدلهم في البلايص. النتيجة ؟ أكبر نومرو في التابلو باش يزلق كيما "نبّالة الهواء" ويوصل للبلاصة الأخيرة متاعو في أول دورة !\n
وفي النسخة الذكية (optimisée) لي يحبوها برشا في الباك، نحطو علامة (flag / booléen اسمو echange). كان دورنا دورة كاملة ومابدلنا حتى شي، معناها التابلو ديجا مريقل ومنظم، ونوقفو الـ boucle فيسع بلاش تضييع وقت.`,
    algoSyntax: `Procédure Tri_Bulles (@T : Tableau, n : entier)
Début
    Répéter
        echange ← Faux
        Pour i de 0 à n - 2 Faire
            Si T[i] > T[i + 1] Alors
                // Permuter T[i] et T[i+1]
                aux ← T[i]
                T[i] ← T[i + 1]
                T[i + 1] ← aux
                echange ← Vrai
            FinSi
        FinPour
        n ← n - 1  // Optimisation : le dernier élément est déjà à sa place
    Jusqu'à (echange = Faux ou n = 1)
Fin`,
    pythonSyntax: `def tri_bulles(T, n):
    echange = True
    while echange and n > 1:
        echange = False
        for i in range(n - 1):
            if T[i] > T[i + 1]:
                # Échange direct en Python
                T[i], T[i + 1] = T[i + 1], T[i]
                echange = True
        n -= 1`,
    comparisonNotes: [
      'En algorithme tunisien, la boucle "Répéter ... Jusqu\'à (condition)" évalue la condition d\'arrêt en fin de boucle.',
      'En Python, la boucle correspondante est construite avec "while echange:" avec initialisation préalable.',
      'L\'échange direct "T[i], T[i+1] = T[i+1], T[i]" est une élégance syntaxique de Python équivalente à l\'usage de la variable auxiliaire "aux" en algorithmique.',
    ],
    examples: [
      {
        title: 'Trace d\'exécution sur le tableau T = [14, 5, 8, 2]',
        algoCode: `// Passage 1:
// (14, 5) -> permuter -> [5, 14, 8, 2]
// (14, 8) -> permuter -> [5, 8, 14, 2]
// (14, 2) -> permuter -> [5, 8, 2, 14] -> 14 est fixé à la fin !
// Passage 2:
// (5, 8) -> ok
// (8, 2) -> permuter -> [5, 2, 8, 14] -> 8 est fixé !
// Passage 3:
// (5, 2) -> permuter -> [2, 5, 8, 14] -> Tri terminé !`,
        pythonCode: `from numpy import array
T = array([14, 5, 8, 2])
tri_bulles(T, len(T))
print(T)  # Affichera [2, 5, 8, 14]`,
        explanation: 'Chaque itération externe raccourcit la zone de comparaison car la queue du tableau est déjà triée.',
        derjaTip: 'ثبت مليح في range(n - 1) : رد بالك تمشي لـ n، sinon تعمل IndexError على خاطر i+1 تخرج البرة من التابلو !',
        output: '[2, 5, 8, 14]',
      },
    ],
    commonMistakes: [
      'Aller jusqu\'à n au lieu de n-2 dans la boucle Pour en algorithme (provoque un dépassement d\'indice T[i+1]).',
      'Oublier de réinitialiser "echange ← Faux" au tout début de chaque itération de la boucle Répéter.',
      'Oublier de décrémenter n, ce qui force l\'algorithme à re-comparer inutilement les éléments finaux déjà triés.',
    ],
    summaryPoints: [
      'Principe : comparaisons adjacentes et permutations successives.',
      'Complexité pire cas : O(N²) quand le tableau est inversé.',
      'Complexité meilleur cas avec flag optimisé : O(N) si le tableau est déjà trié.',
      'Algorithme en place et stable.',
    ],
    relatedExerciseSlugs: ['ex-tri-bulles-completion', 'ex-tri-bulles-trace', 'ex-tri-bulles-debugging'],
  },

  // Lesson 3: Recherche Dichotomique
  {
    id: 'les-recherche-dichotomique',
    chapterSlug: 'recherche-dichotomique',
    moduleSlug: 'algorithmes-de-recherche',
    slug: 'recherche-dichotomique',
    title: 'La Recherche Dichotomique : Diviser pour Régner',
    orderIndex: 3,
    durationMinutes: 35,
    verificationStatus: 'VERIFIED_OFFICIAL',
    sourceReference: 'BAC-2025/algorithms/les algo de recherche/résumé et cours/recherche-sequentielle-dans-un-tableau.py',
    learningObjectives: [
      'Comprendre la condition absolue d’application : le tableau DOIT être préalablement trié.',
      'Calculer l’indice du milieu `m = (deb + fin) div 2`.',
      'Resserrer les bornes [deb, fin] selon la comparaison de T[m] avec la cible val.',
      'Comparer les performances O(log N) face à la recherche séquentielle O(N).',
    ],
    prerequisites: [
      'Tableaux 1D triés.',
      'Boucle Tant que avec conditions composées.',
    ],
    frenchDefinition: `La recherche dichotomique (ou binaire) est un algorithme ultra-rapide de recherche d'un élément dans un tableau préalablement trié.\n
Au lieu d'examiner les cases une à une comme dans la recherche séquentielle, l'algorithme compare la valeur cherchée avec l'élément situé exactement au milieu du tableau. Si la valeur est inférieure, la recherche se poursuit uniquement dans la première moitié ; si elle est supérieure, dans la seconde moitié. À chaque étape, la taille du sous-tableau considéré est divisée par deux, assurant une complexité logarithmique O(log₂ N).`,
    derjaExplanation: `تخيل روحك تلوج على كلمة في قاموس أو نومرو في دفتـر تلفونات مرتب أبجدياً : مستحيل تبدأ تفركس صفحة بصفحة من أول القاموس (هذيكة recherche séquentielle تاكل برشا وقت !). \n
الحل الذكي ؟ تحل القاموس في الشطر بالضبط (milieu = (deb + fin) div 2). كان الكلمة قبل الشطر، تطيش النص الثاني الكل في الزبلة وتعاود تركز كان في الشطر لولاني. وهكذا في كل ضربة تقسم المشكلة على اثنين، وتلقى نومروك في رمشة عين حتى لو كان التابلو فيه مليون كازة ! الشرط الوحيد : لازم التابلو يكون TRIÉ من الأول.`,
    algoSyntax: `Fonction Recherche_Dicho (T : Tableau, n : entier, val : entier) : entier
Début
    deb ← 0
    fin ← n - 1
    trouve ← Faux
    pos ← -1

    Tant que (deb <= fin) et (trouve = Faux) Faire
        milieu ← (deb + fin) div 2
        Si T[milieu] = val Alors
            trouve ← Vrai
            pos ← milieu
        Sinon Si T[milieu] < val Alors
            deb ← milieu + 1
        Sinon
            fin ← milieu - 1
        FinSi
    FinTantQue

    Retourner pos  // Retourne l'indice trouvé ou -1 si absent
Fin`,
    pythonSyntax: `def recherche_dicho(T, val):
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
            deb = milieu + 1
        else:
            fin = milieu - 1

    return pos`,
    comparisonNotes: [
      'Attention à la division entière : "div" en algorithme tunisien, "//" en Python (et non "/" qui donne un réel).',
      'Le tableau DOIT impérativement être trié avant d\'appeler cet algorithme, sinon le résultat est erroné.',
      'Si l\'élément n\'est pas présent, la boucle s\'arrête dès que deb > fin et retourne -1.',
    ],
    examples: [
      {
        title: 'Recherche de val = 23 dans T = [3, 7, 12, 19, 23, 45, 60, 88]',
        algoCode: `// deb = 0, fin = 7
// 1. milieu = (0 + 7) div 2 = 3 -> T[3] = 19
//    Comme 23 > 19, deb ← milieu + 1 = 4
// 2. milieu = (4 + 7) div 2 = 5 -> T[5] = 45
//    Comme 23 < 45, fin ← milieu - 1 = 4
// 3. milieu = (4 + 4) div 2 = 4 -> T[4] = 23 -> TROUVÉ à l'indice 4 !`,
        pythonCode: `from numpy import array
T = array([3, 7, 12, 19, 23, 45, 60, 88])
print(recherche_dicho(T, 23))  # Affichera 4`,
        explanation: 'En seulement 3 comparaisons dans un tableau de 8 éléments, l\'élément 23 est localisé.',
        derjaTip: 'شوف القوة : في 3 خطوات برك لقينا النتيجة، في حين السيكونسييل كان باش يعمل 5 مقارنات.',
        output: 'Indice trouvé : 4',
      },
    ],
    commonMistakes: [
      'Appliquer la recherche dichotomique sur un tableau NON trié (l\'erreur classique n°1 au Bac).',
      'Oublier le "- 1" ou "+ 1" lors du recalibrage des bornes (ex: deb ← milieu au lieu de milieu + 1, ce qui engendre une boucle infinie).',
      'Utiliser la division réelle "/" au lieu de la division entière "div" ou "//" pour le calcul de l\'indice.',
    ],
    summaryPoints: [
      'Précondition obligatoire : tableau trié dans l’ordre croissant (ou décroissant avec ajustement).',
      'Calcul central : milieu = (deb + fin) div 2.',
      'Complexité : O(log₂ N), infiniment plus performant que la recherche séquentielle O(N) sur de grands volumes.',
    ],
    relatedExerciseSlugs: ['ex-dicho-completion', 'ex-dicho-trace'],
  },

  // Lesson 4: La Récursivité
  {
    id: 'les-recursivite-bases',
    chapterSlug: 'principe-recursivite',
    moduleSlug: 'recursivite',
    slug: 'principe-recursivite',
    title: 'La Récursivité : Cas de Base, Pile d’Appels et Débobinage',
    orderIndex: 4,
    durationMinutes: 45,
    verificationStatus: 'VERIFIED_OFFICIAL',
    sourceReference: 'bac info/Programmation/Cours Complet.pdf (Chapitre 2 : La Récursivité)',
    learningObjectives: [
      'Comprendre la structure d’un algorithme récursif : cas trivial d’arrêt vs cas récursif.',
      'Visualiser le mécanisme de la pile d’appels (LIFO: Last In, First Out).',
      'Suivre la phase d’empilement (appels descendants) et la phase de débobinage (remontée des résultats).',
      'Éviter le piège fatal du débordement de pile (RecursionError / Stack Overflow).',
    ],
    prerequisites: [
      'Sous-programmes (Fonctions & Procédures).',
      'Conditions Si ... Alors ... Sinon.',
    ],
    frenchDefinition: `Un algorithme récursif est un module (fonction ou procédure) qui s'appelle lui-même directement ou indirectement pour résoudre un problème en le ramenant à une sous-instance plus petite du même problème.\n
Tout sous-programme récursif valide DOIT comporter au moins :\n
1. UN CAS DE BASE (ou condition d'arrêt) : situation minimale où la réponse est connue immédiatement sans faire de nouvel appel récursif.\n
2. UN CAS RÉCURSIF : appel au module avec un paramètre strictement plus proche du cas de base.\n
Lors de l'exécution, chaque appel suspend le contexte courant et crée un nouveau cadre dans la pile mémoire (pile d'appels). Dès que le cas de base est atteint, la phase de débobinage (remontée) calcule et transmet les résultats successifs vers l'appel initial.`,
    derjaExplanation: `الركيرسيفيتي (Récursivité) هي وقتلي فونكسيون تعيط لروحها وسط الخدمة متاعها ! الفكرة تشبه للمرايا المتقابلة أو الدمى الروسية (Poupées russes) لي لداخل بعضهم.\n
باش الفونكسيون ماتدخلش في boucle infinie ويتبلوكا البيسي (Stack Overflow)، لازمها ديما شرط وقوف واضح اسمو "Cas de base" أو "Cas d'arrêt". \n
في الذهاب : كل appel يقعد يستنى في النتيجة متاع Appel لي أصغر منو ويتكاو في الـ Pile (الكدس متاع الميموار).\n
في الإياب (Débobinage) : وقت نوصلو للـ cas de base، تبدأ النتائج ترجع من الفوق للوطا حتى نوصلو للنتيجة النهائية !`,
    algoSyntax: `Fonction Facto_Rec (n : entier) : entier
Début
    Si n = 0 Alors
        Retourner 1  // Cas de base (arrêt)
    Sinon
        Retourner n * Facto_Rec(n - 1)  // Cas récursif (progression vers 0)
    FinSi
Fin`,
    pythonSyntax: `def facto_rec(n):
    if n == 0:
        return 1  # Cas de base
    else:
        return n * facto_rec(n - 1)  # Appel récursif`,
    comparisonNotes: [
      'En algorithme tunisien comme en Python, l\'ordre d\'évaluation du cas de base avant l\'appel récursif est primordial.',
      'En Python, la limite de récursion par défaut est de 1000 appels ; dépasser cette profondeur génère une "RecursionError".',
      'Tout problème récursif peut être résolu de manière itérative avec une boucle (Pour / Tant que), mais la forme récursive est souvent plus concise mathématiquement.',
    ],
    examples: [
      {
        title: 'Pile d\'appels pour Facto_Rec(3)',
        algoCode: `// 1. Facto_Rec(3) appelle Facto_Rec(2) et attend (3 * résultat)
// 2. Facto_Rec(2) appelle Facto_Rec(1) et attend (2 * résultat)
// 3. Facto_Rec(1) appelle Facto_Rec(0) et attend (1 * résultat)
// 4. Facto_Rec(0) atteint le CAS DE BASE -> retourne 1 immédiatement !
// --- DÉBOBINAGE (Remontée) ---
// Facto_Rec(1) reçoit 1 -> retourne 1 * 1 = 1
// Facto_Rec(2) reçoit 1 -> retourne 2 * 1 = 2
// Facto_Rec(3) reçoit 2 -> retourne 3 * 2 = 6`,
        pythonCode: `print(facto_rec(3))  # 6`,
        explanation: 'La pile monte jusqu\'à n=0 puis redescend en multipliant les retours.',
        derjaTip: 'تخيلها دروج : هبطت 3 درجات باش تجيب المفتاح (cas de base)، بعد كي خذيتو طلعت بالدرجة بالدرجة حتى رجعت لسطح الدار.',
        output: 'Résultat final : 6',
      },
    ],
    commonMistakes: [
      'Oublier le cas de base ou poser une condition impossible à atteindre (engendre un blocage mémoire par récursion infinie).',
      'Appeler la fonction récursive sans faire progresser le paramètre vers le cas de base (ex: appeler Facto_Rec(n) au lieu de Facto_Rec(n-1)).',
      'Oublier le mot-clé "Retourner" devant l\'appel récursif (ex: Facto_Rec(n-1) au lieu de Retourner n * Facto_Rec(n-1)).',
    ],
    summaryPoints: [
      'Deux composantes obligatoires : Cas d\'arrêt + Appel récursif avec convergence.',
      'Gestion en mémoire par Pile LIFO (Last In First Out).',
      'Applications classiques au Bac : Factorielle, Puissance, Fibonacci, PGCD euclidien récursif, Recherche dichotomique récursive.',
    ],
    relatedExerciseSlugs: ['ex-facto-rec-trace', 'ex-fibonacci-rec-completion'],
  },
];
