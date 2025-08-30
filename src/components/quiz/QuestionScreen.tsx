
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

interface QuestionScreenProps {
  question: {
    id: string;
    text: string;
    options: readonly string[];
  };
  onAnswer: (answer: string) => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
  selectedAnswer?: string;
}

export function QuestionScreen({ question, onAnswer, onBack, currentStep, totalSteps, selectedAnswer }: QuestionScreenProps) {
  return (
    <div className="animate-in fade-in duration-500">
        <div className="absolute top-0 left-0 right-0 p-4">
            <Progress value={(currentStep / totalSteps) * 100} className="w-full" />
        </div>
      <div className="p-4 text-center relative pt-12">
        {currentStep > 1 && (
            <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="absolute top-4 left-4 rounded-full"
            aria-label="Go back"
            >
            <ArrowLeft className="h-6 w-6" />
            </Button>
        )}
        <div className="flex justify-center mb-6">
            <Image 
                src="https://i.imgur.com/LHpoFr7.png" 
                alt="FitPath Optimizer Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
            />
        </div>
        <h2 className="text-xl md:text-3xl font-bold mb-6 mt-6">{question.text}</h2>
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option;
            return (
              <Button
                key={option}
                variant="outline"
                size="lg"
                onClick={() => onAnswer(option)}
                className={cn(
                  "h-auto py-3 text-sm md:text-lg justify-between items-center transition-all duration-200 transform border-2 rounded-2xl",
                  isSelected
                    ? "bg-gradient-accent text-primary-foreground border-transparent ring-2 ring-offset-2 ring-primary scale-105"
                    : "bg-card hover:border-primary hover:scale-[1.02]"
                )}
              >
                <span>{option}</span>
                {isSelected && <Check className="h-5 w-5 md:h-6 md:w-6" />}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
