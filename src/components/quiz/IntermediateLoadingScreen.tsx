
'use client';

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const messagesByStep: { [key: number]: string[] } = {
  4: [
    "Analyzing your initial profile... 👤",
    "Preparing questions about your goals... 🎯",
    "All set for the next step!",
  ],
  8: [
    "Adjusting the plan to your lifestyle... 🤸",
    "Creating your first bonus: Warm-up Guide... 🔥",
    "Let's keep going!",
  ],
  12: [
    "Calculating your caloric needs... 🍽️",
    "Unlocking bonus: Nutrition Tips... 🥦",
    "We're almost halfway there!",
  ],
  16: [
    "Optimizing for recovery and rest... 😴",
    "Adding final bonus: Flexibility Guide... 🧘",
    "Just a little more!",
  ],
};


interface IntermediateLoadingScreenProps {
  onDone: () => void;
  step: number;
}

export function IntermediateLoadingScreen({ onDone, step }: IntermediateLoadingScreenProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const messages = messagesByStep[step] || [];

  useEffect(() => {
    const totalDuration = 3000;
    const messageInterval = totalDuration / messages.length;

    const messageTimer = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        if (prevIndex < messages.length - 1) {
          return prevIndex + 1;
        }
        return prevIndex;
      });
    }, messageInterval);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return newProgress;
      });
    }, totalDuration / 10);

    const doneTimer = setTimeout(() => {
      onDone();
    }, totalDuration);

    return () => {
      clearInterval(messageTimer);
      clearInterval(progressTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone, messages.length]);

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-md flex flex-col items-center justify-center z-[100] animate-in fade-in duration-500 space-y-6 text-center px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {messages[currentMessageIndex]}
        </h2>
        <div className="w-full bg-muted rounded-full overflow-hidden">
          <Progress value={progress} className="w-full h-3" />
        </div>
      </div>
    </div>
  );
}
