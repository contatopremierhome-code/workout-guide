export const questions = [
  {
    id: 'goal',
    text: 'What is your primary goal right now?',
    options: ['Lose weight', 'Build muscle', 'Improve overall health'],
  },
  {
    id: 'availability',
    text: 'How many days per week can you commit?',
    options: ['2-3 days', '4-5 days', '6-7 days'],
  },
  {
    id: 'experience',
    text: "What's your current training experience?",
    options: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    id: 'workoutPreference',
    text: 'What kind of workouts do you prefer?',
    options: ['Gym-based', 'Home workouts', 'No equipment'],
  },
  {
    id: 'desiredTimeline',
    text: 'How soon do you want to see results?',
    options: ['In 2-4 weeks', 'In 1-3 months', 'I’m patient, I want long-term change'],
  },
] as const;
