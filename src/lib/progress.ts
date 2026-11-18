import { StudentProgress } from '@/types';
import { supabase, isSupabaseConfigured } from './supabase';

const LOCAL_STORAGE_KEY = 'algo_lab_student_progress_v1';

const defaultProgress: StudentProgress = {
  completedLessonSlugs: [],
  completedExerciseSlugs: [],
  scores: {},
  bookmarks: [],
  recentActivity: [],
};

export function getLocalProgress(): StudentProgress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return defaultProgress;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading local progress:', e);
    return defaultProgress;
  }
}

export function saveLocalProgress(progress: StudentProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Error saving local progress:', e);
  }
}

export function recordLessonCompletion(slug: string, title: string): StudentProgress {
  const current = getLocalProgress();
  if (!current.completedLessonSlugs.includes(slug)) {
    current.completedLessonSlugs.push(slug);
  }
  current.recentActivity.unshift({
    type: 'lesson',
    slug,
    title,
    timestamp: new Date().toISOString(),
  });
  current.recentActivity = current.recentActivity.slice(0, 20);
  saveLocalProgress(current);
  return current;
}

export function recordExerciseScore(slug: string, title: string, score: number): StudentProgress {
  const current = getLocalProgress();
  if (!current.completedExerciseSlugs.includes(slug)) {
    current.completedExerciseSlugs.push(slug);
  }
  const prevBest = current.scores[slug] || 0;
  if (score > prevBest) {
    current.scores[slug] = score;
  }
  current.recentActivity.unshift({
    type: 'exercise',
    slug,
    title,
    score,
    timestamp: new Date().toISOString(),
  });
  current.recentActivity = current.recentActivity.slice(0, 20);
  saveLocalProgress(current);
  return current;
}

export function toggleBookmark(slug: string): boolean {
  const current = getLocalProgress();
  const index = current.bookmarks.indexOf(slug);
  let isBookmarked = false;
  if (index >= 0) {
    current.bookmarks.splice(index, 1);
    isBookmarked = false;
  } else {
    current.bookmarks.push(slug);
    isBookmarked = true;
  }
  saveLocalProgress(current);
  return isBookmarked;
}

export function isLessonCompleted(slug: string): boolean {
  const current = getLocalProgress();
  return current.completedLessonSlugs.includes(slug);
}

export function isBookmarked(slug: string): boolean {
  const current = getLocalProgress();
  return current.bookmarks.includes(slug);
}
