import { Button } from '@/components/ui/button';
import { ProgressBar } from './ProgressBar';
import { Check, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      <ProgressBar current={currentStep} total={totalSteps} />
      <div className="p-4 md:p-8 text-center">
        {currentStep > 1 && (
            <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="absolute top-[6.5rem] left-4 md:left-8 rounded-full"
            aria-label="Go back"
            >
            <ArrowLeft className="h-6 w-6" />
            </Button>
        )}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{question.text}</h2>
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option;
            return (
              <Button
                key={option}
                variant="outline"
                size="lg"
                onClick={() => onAnswer(option)}
                className={cn(
                  "h-auto py-4 text-base md:text-lg justify-between items-center transition-all duration-200 transform border-2 rounded-2xl",
                  isSelected
                    ? "bg-gradient-accent text-primary-foreground border-transparent ring-2 ring-offset-2 ring-primary scale-105"
                    : "bg-card hover:border-primary hover:scale-[1.02]"
                )}
              >
                <span>{option}</span>
                {isSelected && <Check className="h-6 w-6" />}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
