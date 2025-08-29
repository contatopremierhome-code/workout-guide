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
  sex: z.string().describe("The user's sex: Male, Female"),
  age: z.string().describe("The user's age range."),
  height: z.string().describe("The user's height range."),
  weight: z.string().describe("The user's current weight range."),
  goal: z
    .string()
    .describe('The primary fitness goal: Lose weight, Build muscle, or Improve overall health.'),
  availability: z
    .string()
    .describe('The number of days per week the user can commit.'),
  experience: z
    .string()
    .describe('The current training experience level.'),
  workoutPreference: z
    .string()
    .describe('The preferred workout type.'),
  workoutLocation: z.string().describe('Where the user prefers to work out.'),
  focusArea: z.string().describe('The main body part the user wants to focus on.'),
  workoutDuration: z.string().describe('The preferred duration for each workout session.'),
  workoutTime: z.string().describe('The preferred time of day to work out.'),
  diet: z.string().describe("The user's current diet type."),
  motivation: z.string().describe('What motivates the user the most.'),
  activityLevel: z.string().describe('The user\'s daily activity level outside of exercise.'),
  sleep: z.string().describe("The user's average nightly sleep duration."),
  stress: z.string().describe("The user's current stress level."),
  equipment: z.string().describe('The equipment available to the user.'),
  healthIssues: z.string().describe('Any health issues or limitations the user has.'),
  desiredTimeline: z
    .string()
    .describe('The desired timeline to see results.'),
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
  prompt: `You are an expert personal trainer creating workout plans.

  Based on the user's input, create a personalized workout plan tailored to their specific needs.

  User Profile:
  - Sex: {{{sex}}}
  - Age: {{{age}}}
  - Height: {{{height}}}
  - Weight: {{{weight}}}
  - Goal: {{{goal}}}
  - Availability: {{{availability}}}
  - Experience: {{{experience}}}
  - Workout Preference: {{{workoutPreference}}}
  - Workout Location: {{{workoutLocation}}}
  - Focus Area: {{{focusArea}}}
  - Workout Duration: {{{workoutDuration}}}
  - Workout Time: {{{workoutTime}}}
  - Diet: {{{diet}}}
  - Motivation: {{{motivation}}}
  - Activity Level: {{{activityLevel}}}
  - Sleep: {{{sleep}}}
  - Stress: {{{stress}}}
  - Equipment: {{{equipment}}}
  - Health Issues: {{{healthIssues}}}
  - Desired Timeline: {{{desiredTimeline}}}

  The workout plan should be realistic and achievable, taking into account the user's limitations.
  The plan description should have at least 3 sentences.
  The response must be in English.
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
