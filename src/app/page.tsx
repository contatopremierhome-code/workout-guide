'use client';

import { useState, useEffect } from 'react';
import type { PersonalizedWorkoutPlanInput, PersonalizedWorkoutPlanOutput } from '@/ai/flows/personalized-workout-plan';
import { Landing } from '@/components/quiz/Landing';
import { QuestionScreen } from '@/components/quiz/QuestionScreen';
import { LoadingScreen } from '@/components/quiz/LoadingScreen';
import { ResultsScreen } from '@/components/quiz/ResultsScreen';
import { questions as quizQuestions } from '@/components/quiz/questions-data';
import { IntermediateLoadingScreen } from '@/components/quiz/IntermediateLoadingScreen';

type QuizStep = 'landing' | 'questions' | 'intermediate-loading' | 'loading' | 'results';

const INTERMEDIATE_STEPS = [4, 8, 12, 16];

// Plano estático para não depender da API
const staticPlan: PersonalizedWorkoutPlanOutput = {
  planName: 'Your Custom Fitness Plan',
  description: 'Based on your answers, we have prepared a comprehensive plan to help you achieve your fitness goals. This plan includes a detailed workout schedule, nutritional guidance, and exclusive bonus materials to maximize your results.',
};

export default function Home() {
  const [step, setStep] = useState<QuizStep>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<PersonalizedWorkoutPlanInput>>({});
  const [plan, setPlan] = useState<PersonalizedWorkoutPlanOutput | null>(null);

  const startQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setPlan(null);
    setStep('questions');
  };
  
  const handleAnswer = (answer: string) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (INTERMEDIATE_STEPS.includes(nextQuestionIndex)) {
        setStep('intermediate-loading');
      } else if (nextQuestionIndex < quizQuestions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setStep('loading');
      }
    }, 300); // Auto-advance
  };
  
  const handleBack = () => {
    if (step !== 'questions' || currentQuestionIndex === 0) return;
    
    if (INTERMEDIATE_STEPS.includes(currentQuestionIndex)) {
      setStep('questions');
    }
    setCurrentQuestionIndex(prevIndex => prevIndex - 1);
  };

  const handleIntermediateLoadingDone = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setStep('questions');
  };

  useEffect(() => {
    if (step === 'loading') {
      // Simula a geração do plano e vai para os resultados
      setTimeout(() => {
        setPlan(staticPlan);
        setStep('results');
      }, 2500); // Mostra a tela de loading por 2.5 segundos
    }
  }, [step]);


  const renderStep = () => {
    switch (step) {
      case 'landing':
        return <Landing onStart={startQuiz} />;
      case 'questions':
        return (
          <QuestionScreen
            question={quizQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onBack={handleBack}
            currentStep={currentQuestionIndex + 1}
            totalSteps={quizQuestions.length}
            selectedAnswer={answers[quizQuestions[currentQuestionIndex].id]}
          />
        );
      case 'intermediate-loading':
        return <IntermediateLoadingScreen onDone={handleIntermediateLoadingDone} step={currentQuestionIndex + 1} />;
      case 'loading':
        return <LoadingScreen />;
      case 'results':
        return plan ? <ResultsScreen plan={plan} /> : <LoadingScreen />;
      default:
        return <Landing onStart={startQuiz} />;
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="relative mx-auto w-full max-w-[720px]">
            {renderStep()}
        </div>
    </main>
  );
}
