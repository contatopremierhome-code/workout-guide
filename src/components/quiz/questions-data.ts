export const questions = [
  {
    id: 'sex',
    text: 'What is your sex? 🚻',
    options: ['Male', 'Female'],
  },
  {
    id: 'age',
    text: 'How old are you? 🎂',
    options: ['Under 18', '18-24 years', '25-34 years', '35-44 years', '45+ years'],
  },
  {
    id: 'height',
    text: 'What is your height? 📏',
    options: ['Under 5ft', '5ft - 5ft 3in', '5ft 4in - 5ft 7in', '5ft 8in - 5ft 11in', 'Over 6ft'],
  },
  {
    id: 'weight',
    text: 'What is your current weight? ⚖️',
    options: ['Under 110 lbs', '110-132 lbs', '133-154 lbs', '155-176 lbs', 'Over 176 lbs'],
  },
  // Intermediate step 1
  {
    id: 'goal',
    text: 'What is your main goal? 🎯',
    options: ['Lose weight', 'Build muscle', 'Improve health', 'Increase performance', 'Body recomposition'],
  },
  {
    id: 'availability',
    text: 'How many days a week can you train? 🗓️',
    options: ['1-2 days', '3 days', '4 days', '5 days', '6-7 days'],
  },
  {
    id: 'experience',
    text: 'What is your training experience? 💪',
    options: ['Beginner (never trained)', 'Beginner (trained before)', 'Intermediate', 'Advanced', 'Athlete'],
  },
  {
    id: 'workoutPreference',
    text: 'What type of workout do you prefer? 🤸',
    options: ['Weightlifting', 'Functional / HIIT', 'Yoga / Pilates', 'Running / Cycling', 'A mix of everything'],
  },
  // Intermediate step 2
  {
    id: 'workoutLocation',
    text: 'Where do you prefer to work out? 📍',
    options: ['Full gym', 'At home with equipment', 'At home without equipment', 'Outdoors', 'Studio / Box'],
  },
  {
    id: 'focusArea',
    text: 'Which body part is your focus? 👀',
    options: ['Full body', 'Abs and Core', 'Legs and glutes', 'Arms and chest', 'Back and shoulders'],
  },
  {
    id: 'workoutDuration',
    text: 'How long per workout session? ⏱️',
    options: ['Up to 30 minutes', '30-45 minutes', '45-60 minutes', '60-90 minutes', 'More than 90 minutes'],
  },
  {
    id: 'workoutTime',
    text: 'What is the best time for you to work out? ☀️',
    options: ['Morning (5am-9am)', 'Mid-day (10am-2pm)', 'Afternoon (3pm-6pm)', 'Evening (7pm-10pm)', 'Any time'],
  },
  // Intermediate step 3
  {
    id: 'diet',
    text: 'What is your current diet like? 🍎',
    options: ['No restrictions', 'I try to be healthy', 'I follow a specific diet', 'Vegetarian / Vegan', 'I need help with this'],
  },
  {
    id: 'motivation',
    text: 'What motivates you the most? 🔥',
    options: ['Seeing results in the mirror', 'Improving health and wellness', 'Pushing my limits', 'Having more energy daily', 'A special event'],
  },
  {
    id: 'activityLevel',
    text: 'What is your daily activity level (outside of exercise)? 🚶',
    options: ['Sedentary (desk job)', 'Lightly active (light walks)', 'Active (on your feet)', 'Very active (physical labor)', 'Extremely active'],
  },
  {
    id: 'sleep',
    text: 'How many hours do you sleep per night, on average? 😴',
    options: ['Less than 5 hours', '5-6 hours', '6-7 hours', '7-8 hours', 'More than 8 hours'],
  },
  // Intermediate step 4
  {
    id: 'stress',
    text: 'How would you rate your stress level? 🤯',
    options: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
  },
  {
    id: 'equipment',
    text: 'What equipment do you have access to? 🏋️',
    options: ['None', 'Bands and light weights', 'Dumbbells and barbells', 'Full gym', 'Various home equipment'],
  },
  {
    id: 'healthIssues',
    text: 'Do you have any injuries or health conditions? 🤕',
    options: ['None', 'Back pain', 'Knee pain', 'Other joint pain', 'Chronic condition (e.g., diabetes)'],
  },
  {
    id: 'desiredTimeline',
    text: 'How soon do you expect to see the first results? ⏳',
    options: ['In 2-4 weeks', 'In 1-2 months', 'In 3-6 months', "I'm focused on the long term", 'As soon as possible!'],
  },
] as const;
