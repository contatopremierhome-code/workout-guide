
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in duration-500">
      <Image 
        src="https://i.imgur.com/LHpoFr7.png" 
        alt="FitPath Optimizer Logo"
        width={150}
        height={50}
        className="object-contain"
        priority
      />
      <h1 className="text-[clamp(2.25rem,5vw,3rem)] font-extrabold tracking-tight leading-tight">
        MAXIMIZE YOUR RESULTS WITH <span className="text-destructive">CLARITY AND FLEXIBILITY</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
        A practical and efficient solution to maximize your results. Whether it’s <span className="text-destructive">Weight Loss</span> or <span className="text-destructive">Muscle Gain</span>.
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

      <div className="w-full flex flex-col items-center space-y-4">
        <Button onClick={onStart} size="lg" className="w-full max-w-sm text-xl font-bold bg-gradient-to-br from-blue-600 to-purple-800 text-primary-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg py-4 h-auto">
          Continue
        </Button>
      </div>

      <section id="how-it-works" className="w-full text-left pt-16 space-y-6">
        <h2 className="text-3xl font-bold text-center">Benefits You'll Love</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-2xl border">
            <h3 className="text-xl font-bold mb-2">Personalized guidance 🎯</h3>
            <p className="text-muted-foreground">Get a plan tailored specifically to your goals and lifestyle.</p>
          </div>
          <div className="bg-card p-6 rounded-2xl border">
            <h3 className="text-xl font-bold mb-2">Fast, actionable answers ⚡</h3>
            <p className="text-muted-foreground">No fluff. Just clear steps to get you started right away.</p>
          </div>
          <div className="bg-card p-6 rounded-2xl border">
            <h3 className="text-xl font-bold mb-2">Optimized for flexibility 💪</h3>
            <p className="text-muted-foreground">Our plans adapt to your real-life schedule, not the other way around.</p>
          </div>
        </div>
      </section>

      <section className="w-full text-left pt-16 space-y-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">It's not just about aesthetics...</h2>
            <p className="text-muted-foreground text-lg">
              Physical activities generate a great number of benefits for our body and also for our mind.
            </p>
          </div>
          <div>
            <Image
              src="https://i.imgur.com/oasut2a.png"
              alt="Woman meditating"
              width={500}
              height={500}
              className="rounded-2xl object-cover w-full h-auto shadow-lg"
              data-ai-hint="meditation yoga"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
