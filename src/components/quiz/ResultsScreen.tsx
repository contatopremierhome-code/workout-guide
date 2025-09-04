import type { PersonalizedWorkoutPlanOutput } from '@/ai/flows/personalized-workout-plan';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Lock } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CheckoutButton } from './CheckoutButton';

interface ResultsScreenProps {
  plan: PersonalizedWorkoutPlanOutput;
}

const avatars = [
  'https://picsum.photos/id/237/40/40',
  'https://picsum.photos/id/238/40/40',
  'https://picsum.photos/id/239/40/40',
  'https://picsum.photos/id/240/40/40',
  'https://picsum.photos/id/241/40/40',
];

export function ResultsScreen({ plan }: ResultsScreenProps) {

  return (
    <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-center">
        <Image 
          src="https://i.imgur.com/9PpkXJ9.png" 
          alt="Logo"
          width={250}
          height={83}
          className="object-contain"
          priority
        />
      </div>
      <h1 className="text-[clamp(1.75rem,5vw,2.75rem)] font-extrabold tracking-tight">
        {plan.planName} Is Ready! 🎉
      </h1>
      <p className="text-base md:text-xl text-muted-foreground max-w-3xl">
        {plan.description}
      </p>

      <div className="flex items-center space-x-2">
        <div className="flex -space-x-2">
            {avatars.map((src, i) => (
                <Image key={i} src={src} alt={`User avatar ${i+1}`} width={40} height={40} className="rounded-full border-2 border-background" data-ai-hint="person face" />
            ))}
        </div>
        <div className="flex flex-col items-start">
            <div className="flex text-amber-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Trusted by 10,000+ users</p>
        </div>
      </div>
      
      <div className="w-full max-w-3xl py-4 md:py-8 text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">Here's a Summary of What You'll Get:</h2>
        <div className="flex justify-center">
          <Image 
            src="https://i.imgur.com/Xd7SCxA.png" 
            alt="Summary of what you get" 
            width={800} 
            height={600} 
            className="rounded-xl shadow-lg object-contain w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="w-full grid md:grid-cols-2 gap-6 md:gap-8 pt-4 md:pt-8">
        <Card className="border-primary border-2 shadow-2xl relative transition-transform duration-300 hover:scale-[1.03]">
          <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-accent text-white px-4 py-1 text-sm font-bold">Best Value 🔥</Badge>
          <CardHeader className="pt-10">
            <CardTitle className="text-xl md:text-2xl">Lifetime Access</CardTitle>
            <p className="text-3xl md:text-4xl font-extrabold">$19.90</p>
          </CardHeader>
          <CardContent className="space-y-4 text-left px-4 pb-4 md:px-6 md:pb-6">
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>Lifetime access to all materials</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>All updates included</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>Full workout library + progress trackers</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>Priority support</span></li>
            </ul>
            <CheckoutButton
              size="lg"
              className="w-full font-bold text-lg bg-cta-green hover:bg-cta-green/90 text-white shadow-lg"
              checkoutUrl='https://pay.hotmart.com/R101628886A?checkoutMode=10'
            >
              Get Lifetime Access
            </CheckoutButton>
          </CardContent>
        </Card>

        <Card className="relative transition-transform duration-300 hover:scale-[1.03]">
           <Badge variant="outline" className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background px-4 py-1 text-sm font-bold">Essential</Badge>
          <CardHeader className="pt-10">
            <CardTitle className="text-xl md:text-2xl">6-Month Access</CardTitle>
            <p className="text-3xl md:text-4xl font-extrabold">$9.90</p>
          </CardHeader>
          <CardContent className="space-y-4 text-left px-4 pb-4 md:px-6 md:pb-6">
            <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>6 months of access</span></li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>Core workout plans</span></li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>Standard support</span></li>
            </ul>
             <CheckoutButton
                size="lg"
                variant="outline"
                className="w-full font-bold text-lg border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary"
                checkoutUrl='https://pay.hotmart.com/M101735539G?checkoutMode=10'
              >
                Start Now
              </CheckoutButton>
          </CardContent>
        </Card>
      </div>

       <div className="pt-6 text-center space-y-4 max-w-md mx-auto">
            <div className="flex justify-center">
              <Image src="https://i.imgur.com/JdOXjzb.png" alt="7-day guarantee" width={120} height={120} className="object-contain" priority />
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold">7-Day Satisfaction Guarantee.</span> If you're not completely satisfied, get your money back. No questions asked.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Lock className="h-4 w-4" /> Secure payment.
            </p>
            <p className="font-bold text-amber-600">Limited-time pricing — lock it in today.</p>
        </div>
    </div>
  );
}
