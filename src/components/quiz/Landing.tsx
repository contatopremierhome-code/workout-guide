
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 animate-in fade-in duration-500">
      <Image 
        src="https://i.imgur.com/LHpoFr7.png" 
        alt="FitPath Optimizer Logo"
        width={150}
        height={50}
        className="object-contain"
        priority
      />
      <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        MAXIMIZE YOUR RESULTS WITH CLARITY AND FLEXIBILITY
      </h1>
      <p className="text-base md:text-xl text-muted-foreground max-w-2xl">
        A practical and efficient solution to maximize your results. Whether it’s <span className="text-primary font-semibold">Weight Loss</span> or <span className="text-primary font-semibold">Muscle Gain</span>.
      </p>
      
      <div className="w-full">
        <Image
          src="https://i.imgur.com/fdTiy2A.png"
          alt="Person working out in a gym"
          width={720}
          height={480}
          className="rounded-2xl object-cover w-full h-auto shadow-lg"
          priority
          data-ai-hint="fitness gym"
        />
      </div>

      <div className="w-full flex flex-col items-center space-y-4 pt-4">
        <Button 
          onClick={onStart} 
          size="lg" 
          className="relative w-full max-w-sm text-lg md:text-xl font-bold bg-gradient-accent text-primary-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg py-4 h-auto overflow-hidden group"
        >
          <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-hover:animate-[spin_2s_linear_infinite]" />
          <div className="relative z-10 w-full h-full flex items-center justify-center bg-background rounded-md m-0.5 group-hover:bg-transparent transition-colors duration-300">
            Continue
          </div>
        </Button>
      </div>

      <section id="how-it-works" className="w-full text-left pt-8 md:pt-16 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Benefits You'll Love</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-card p-4 md:p-6 rounded-2xl border">
            <h3 className="text-lg md:text-xl font-bold mb-2">Personalized guidance 🎯</h3>
            <p className="text-muted-foreground">Get a plan tailored specifically to your goals and lifestyle.</p>
          </div>
          <div className="bg-card p-4 md:p-6 rounded-2xl border">
            <h3 className="text-lg md:text-xl font-bold mb-2">Fast, actionable answers ⚡</h3>
            <p className="text-muted-foreground">No fluff. Just clear steps to get you started right away.</p>
          </div>
          <div className="bg-card p-4 md:p-6 rounded-2xl border">
            <h3 className="text-lg md:text-xl font-bold mb-2">Optimized for flexibility 💪</h3>
            <p className="text-muted-foreground">Our plans adapt to your real-life schedule, not the other way around.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
