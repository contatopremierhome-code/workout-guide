import { Button } from '@/components/ui/button';
import { ProgressBar } from './ProgressBar';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuestionScreenProps {
  question: {
    id: string;
    text: string;
    options: readonly string[];
  };
  onAnswer: (answer: string) => void;
  currentStep: number;
  totalSteps: number;
  selectedAnswer?: string;
}

export function QuestionScreen({ question, onAnswer, currentStep, totalSteps, selectedAnswer }: QuestionScreenProps) {
  return (
    <div className="animate-in fade-in duration-500">
      <ProgressBar current={currentStep} total={totalSteps} />
      <div className="p-4 md:p-8 text-center">
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
