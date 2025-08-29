'use server';

/**
 * @fileOverview A personalized workout plan generator.
 *
 * - generatePersonalizedWorkoutPlan - A function that generates a workout plan based on user input.
 * - PersonalizedWorkoutPlanInput - The input type for the generatePersonalizedWorkoutPlan function.
 * - PersonalizedWorkoutPlanOutput - The return type for the generatePersonalizedWorkoutPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedWorkoutPlanInputSchema = z.object({
  goal: z
    .string()
    .describe('The primary fitness goal: Lose weight, Build muscle, or Improve overall health.'),
  availability: z
    .string()
    .describe('The number of days per week the user can commit: 2-3 days, 4-5 days, or 6-7 days.'),
  experience: z
    .string()
    .describe('The current training experience level: Beginner, Intermediate, or Advanced.'),
  workoutPreference: z
    .string()
    .describe('The preferred workout type: Gym-based, Home workouts, or No equipment.'),
  desiredTimeline: z
    .string()
    .describe('The desired timeline to see results: In 2-4 weeks, In 1-3 months, or Long-term change.'),
});
export type PersonalizedWorkoutPlanInput = z.infer<typeof PersonalizedWorkoutPlanInputSchema>;

const PersonalizedWorkoutPlanOutputSchema = z.object({
  planName: z.string().describe('The name of the generated workout plan.'),
  description: z.string().describe('A detailed description of the workout plan.'),
});
export type PersonalizedWorkoutPlanOutput = z.infer<typeof PersonalizedWorkoutPlanOutputSchema>;

export async function generatePersonalizedWorkoutPlan(
  input: PersonalizedWorkoutPlanInput
): Promise<PersonalizedWorkoutPlanOutput> {
  return personalizedWorkoutPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedWorkoutPlanPrompt',
  input: {schema: PersonalizedWorkoutPlanInputSchema},
  output: {schema: PersonalizedWorkoutPlanOutputSchema},
  prompt: `You are a personal trainer expert at creating workout plans.

  Based on the user's input, create a personalized workout plan tailored to their specific needs.

  Consider the following:
  - Goal: {{{goal}}}
  - Availability: {{{availability}}}
  - Experience: {{{experience}}}
  - Workout Preference: {{{workoutPreference}}}
  - Desired Timeline: {{{desiredTimeline}}}

  The workout plan should be realistic and achievable, taking into account the user's limitations.
  The plan description should have at least 3 sentences.
  Return the plan in a JSON format.
  `,
});

const personalizedWorkoutPlanFlow = ai.defineFlow(
  {
    name: 'personalizedWorkoutPlanFlow',
    inputSchema: PersonalizedWorkoutPlanInputSchema,
    outputSchema: PersonalizedWorkoutPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
