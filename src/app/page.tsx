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
import { IntermediateLoadingScreen } from '@/components/quiz/IntermediateLoadingScreen';

type QuizStep = 'landing' | 'questions' | 'intermediate-loading' | 'loading' | 'results';

const INTERMEDIATE_STEPS = [4, 8, 10, 12, 16];

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

    // Check if we need to "skip" an intermediate loading step when going back
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
          setCurrentQuestionIndex(0);
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
