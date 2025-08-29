
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const messagesByStep: { [key: number]: string } = {
  4: "Analyzing your profile and unlocking your first bonuses... 👤",
  8: "Adjusting for your lifestyle and creating your warm-up guide... 🔥",
  12: "Calculating your caloric needs and preparing nutrition tips... 🥦",
  16: "Optimizing for recovery and adding your flexibility guide... 🧘",
};

const imagesByStep: { [key: number]: string[] } = {
  4: [
    'https://i.imgur.com/dhZj9Zb.png',
    'https://i.imgur.com/BQuVBfJ.png',
    'https://i.imgur.com/o6hMd8s.png',
  ],
  8: [
    'https://i.imgur.com/oPzEv4v.png',
    'https://i.imgur.com/oF9Y384.png',
  ],
  12: [
    'https://i.imgur.com/XEykIo1.png',
    'https://i.imgur.com/nLnzeHI.png',
  ],
  16: [
    'https://i.imgur.com/pWjjjNC.png',
    'https://i.imgur.com/UOM8xSP.png',
  ],
};


interface IntermediateLoadingScreenProps {
  onDone: () => void;
  step: number;
}

export function IntermediateLoadingScreen({ onDone, step }: IntermediateLoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  const message = messagesByStep[step] || "Preparing the next step...";
  const images = imagesByStep[step] || [];

  useEffect(() => {
    const totalDuration = 4000;

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (totalDuration / 100));
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    const doneTimer = setTimeout(() => {
      onDone();
    }, totalDuration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-md flex flex-col items-center justify-center z-[100] animate-in fade-in duration-500 space-y-6 text-center px-4">
      <div className="w-full max-w-lg">
        <div className="flex justify-center mb-8">
            <Image 
                src="https://i.imgur.com/LHpoFr7.png" 
                alt="FitPath Optimizer Logo"
                width={150}
                height={50}
                className="object-contain"
            />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {message}
        </h2>

        {images.length > 0 && (
          <div className="mb-6">
            <Carousel
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
              className="w-full max-w-sm mx-auto"
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image
                        src={src}
                        alt={`Bonus image ${index + 1}`}
                        width={400}
                        height={400}
                        className="rounded-lg object-contain w-full h-auto"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}

        <div className="w-full bg-muted rounded-full overflow-hidden max-w-md mx-auto">
          <Progress value={progress} className="w-full h-3" />
        </div>
      </div>
    </div>
  );
}
