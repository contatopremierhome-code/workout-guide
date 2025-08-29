'use client';

import { useState, useEffect } from 'react';
import type { PersonalizedWorkoutPlanInput, PersonalizedWorkoutPlanOutput } from '@/ai/flows/personalized-workout-plan';
import { generatePersonalizedWorkoutPlan } from '@/ai/flows/personalized-workout-plan';
import { Landing } from '@/components/quiz/Landing';
import { QuestionScreen } from '@/components/quiz/QuestionScreen';
import { LoadingScreen } from '@/components/quiz/LoadingScreen';
import { ResultsScreen } from '@/components/quiz/ResultsScreen';
import { questions as quizQuestions } from '@/components/quiz/questions-data';
import { useToast } from "@/hooks/use-toast";


type QuizStep = 'landing' | 'questions' | 'loading' | 'results';

export default function Home() {
  const [step, setStep] = useState<QuizStep>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<PersonalizedWorkoutPlanInput>>({});
  const [plan, setPlan] = useState<PersonalizedWorkoutPlanOutput | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

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
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setStep('loading');
      }
    }, 300); // Auto-advance
  };

  useEffect(() => {
    if (step === 'loading' && !isGenerating) {
      const generatePlan = async () => {
        setIsGenerating(true);
        try {
          const fullAnswers = answers as PersonalizedWorkoutPlanInput;
          const generatedPlan = await generatePersonalizedWorkoutPlan(fullAnswers);
          setPlan(generatedPlan);
          setStep('results');
        } catch (error) {
          console.error("Error generating workout plan:", error);
          toast({
            title: "An error occurred",
            description: "We couldn't generate your plan. Please try again.",
            variant: "destructive",
          });
          setStep('questions');
        } finally {
          setIsGenerating(false);
        }
      };
      generatePlan();
    }
  }, [step, answers, isGenerating, toast]);


  const renderStep = () => {
    switch (step) {
      case 'landing':
        return <Landing onStart={startQuiz} />;
      case 'questions':
        return (
          <QuestionScreen
            question={quizQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            currentStep={currentQuestionIndex + 1}
            totalSteps={quizQuestions.length}
            selectedAnswer={answers[quizQuestions[currentQuestionIndex].id]}
          />
        );
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
