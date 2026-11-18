'use client';

import React from 'react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { exercisesData } from '@/content/exercises';
import { ExerciseEngine } from '@/components/exercises/ExerciseEngine';
import { ArrowLeft } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export default function ExerciseDetailPage({ params }: Props) {
  const router = useRouter();
  const exercise = exercisesData.find((e) => e.slug === params.slug);

  if (!exercise) {
    notFound();
  }

  const currentIndex = exercisesData.findIndex((e) => e.slug === exercise.slug);
  const nextExercise = exercisesData[currentIndex + 1];

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/exercises"
          className="inline-flex items-center gap-1.5 text-xs text-brand-muted hover:text-brand-cyan transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Retour à tous les exercices</span>
        </Link>
      </div>

      <ExerciseEngine
        exercise={exercise}
        onNext={
          nextExercise
            ? () => {
                router.push(`/exercises/${nextExercise.slug}`);
              }
            : undefined
        }
      />
    </div>
  );
}
