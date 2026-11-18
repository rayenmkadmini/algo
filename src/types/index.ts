export type VerificationStatus = 'VERIFIED_OFFICIAL' | 'PENDING_CURRICULUM_VERIFICATION' | 'ADDITIONAL_PRACTICE';
export type PublicationStatus = 'draft' | 'review' | 'approved' | 'published';
export type DifficultyLevel = 'debutant' | 'facile' | 'moyen' | 'difficile' | 'niveau_bac';

export interface ModuleItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: 'algorithmique' | 'python' | 'commun';
  chaptersCount: number;
  durationHours: number;
  iconName: string;
  verificationStatus: VerificationStatus;
}

export interface ChapterItem {
  id: string;
  moduleId: string;
  moduleSlug: string;
  slug: string;
  title: string;
  description: string;
  orderIndex: number;
  verificationStatus: VerificationStatus;
  lessonsCount: number;
}

export interface ExampleBlock {
  title: string;
  algoCode: string;
  pythonCode: string;
  explanation: string;
  derjaTip: string;
  output?: string;
}

export interface LessonItem {
  id: string;
  chapterSlug: string;
  moduleSlug: string;
  slug: string;
  title: string;
  orderIndex: number;
  durationMinutes: number;
  verificationStatus: VerificationStatus;
  sourceReference: string;
  learningObjectives: string[];
  prerequisites: string[];
  frenchDefinition: string;
  derjaExplanation: string;
  algoSyntax: string;
  pythonSyntax: string;
  comparisonNotes: string[];
  examples: ExampleBlock[];
  commonMistakes: string[];
  summaryPoints: string[];
  relatedExerciseSlugs: string[];
}

export type ExerciseType = 
  | 'qcm'
  | 'algo_completion'
  | 'function_completion'
  | 'procedure_completion'
  | 'debugging'
  | 'trace_execution'
  | 'conversion'
  | 'bac_exam_item';

export interface ExerciseOption {
  id: string;
  label: string;
  isCorrect: boolean;
  explanation: string;
}

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  description: string;
  isHidden?: boolean;
}

export interface ExerciseItem {
  id: string;
  slug: string;
  title: string;
  lessonSlug?: string;
  type: ExerciseType;
  difficulty: DifficultyLevel;
  sourceReference: string;
  verificationStatus: VerificationStatus;
  statement: string;
  derjaHint: string;
  initialCode?: string;
  expectedAnswer?: string; // For exact/normalized text or completion tokens
  acceptedAnswers?: string[];
  options?: ExerciseOption[];
  hints: string[];
  testCases?: TestCase[];
  modelSolution: string;
  explanation: string;
}

export interface ExamQuestion {
  id: string;
  questionNumber: number;
  title: string;
  statement: string;
  bareme: number; // e.g. 3.5 points
  hints: string[];
  exerciseSlug: string;
  solution: string;
}

export interface ExamItem {
  id: string;
  slug: string;
  title: string;
  year: number;
  session: 'Principale' | 'Contrôle' | 'Pratique' | 'Blanc';
  type: 'Epreuve Théorique' | 'Epreuve Pratique' | 'Devoir de Synthèse';
  durationMinutes: number;
  totalPoints: number;
  sourceReference: string;
  verificationStatus: VerificationStatus;
  description: string;
  questions: ExamQuestion[];
}

export interface StudentProgress {
  completedLessonSlugs: string[];
  completedExerciseSlugs: string[];
  scores: Record<string, number>;
  bookmarks: string[];
  recentActivity: Array<{
    type: 'lesson' | 'exercise' | 'exam';
    slug: string;
    title: string;
    timestamp: string;
    score?: number;
  }>;
}
