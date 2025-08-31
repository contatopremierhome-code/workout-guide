'use client';

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

const messages = [
  "Analyzing your answers… 🔍",
  "Matching your best plan… 🤝",
  "Optimizing for your schedule… ⏱️",
  "Almost there… ✨",
];

export function LoadingScreen() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1200);

    const progressTimer = setInterval(() => {
        setProgress(prev => {
            if (prev >= 95) {
                clearInterval(progressTimer);
                return 100;
            }
            return prev + Math.random() * 20;
        });
    }, 500);

    return () => {
      clearInterval(messageTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-md flex flex-col items-center justify-center z-[100] animate-in fade-in duration-500 space-y-6 text-center px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
            <Image 
                src="https://i.imgur.com/LHpoFr7.png" 
                alt="FitPath Optimizer Logo"
                width={150}
                height={50}
                className="object-contain"
                priority
            />
        </div>
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
