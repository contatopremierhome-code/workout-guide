'use server';

/**
 * @fileOverview A personalized workout plan generator.
 *
 * - generatePersonalizedWorkoutPlan - A function that generates a workout plan based on user input.
 * - PersonalizedWorkoutPlanInput - The input type for the generatePersonalizedWorkoutPlan function.
 * - PersonalizedWorkoutPlanOutput - The return type for the generatePersonalizedWorkoutPlan function.
 */

// Este tipo é usado na interface, então o mantemos.
export type PersonalizedWorkoutPlanInput = {
  sex: string;
  age: string;
  height: string;
  weight: string;
  goal: string;
  availability: string;
  experience: string;
  workoutPreference: string;
  workoutLocation: string;
  focusArea: string;
  workoutDuration: string;
  workoutTime: string;
  diet: string;
  motivation: string;
  activityLevel: string;
  sleep: string;
  stress: string;
  equipment: string;
  healthIssues: string;
  desiredTimeline: string;
};

export type PersonalizedWorkoutPlanOutput = {
  planName: string;
  description: string;
};
