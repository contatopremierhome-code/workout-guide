import type { PersonalizedWorkoutPlanOutput } from '@/ai/flows/personalized-workout-plan';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Lock } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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

const benefitImages = [
  'https://i.imgur.com/dhZj9Zb.png',
  'https://i.imgur.com/BQuVBfJ.png',
  'https://i.imgur.com/o6hMd8s.png',
  'https://i.imgur.com/oPzEv4v.png',
  'https://i.imgur.com/oF9Y384.png',
  'https://i.imgur.com/XEykIo1.png',
  'https://i.imgur.com/nLnzeHI.png',
  'https://i.imgur.com/pWjjjNC.png',
  'https://i.imgur.com/UOM8xSP.png',
];

export function ResultsScreen({ plan }: ResultsScreenProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in duration-500">
      <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-extrabold tracking-tight">
        {plan.planName} Is Ready! 🎉
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
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
      
      <div className="w-full max-w-2xl py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Here's What You'll Get:</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {benefitImages.map((src, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className='overflow-hidden'>
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                       <Image src={src} alt={`Benefit image ${index + 1}`} width={400} height={400} className="object-contain" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="w-full grid md:grid-cols-2 gap-8 pt-8">
        <Card className="border-primary border-2 shadow-2xl relative transition-transform duration-300 hover:scale-[1.03]">
          <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-accent text-white px-4 py-1 text-sm font-bold">Best Value 🔥</Badge>
          <CardHeader className="pt-10">
            <CardTitle className="text-2xl">Lifetime Access</CardTitle>
            <p className="text-4xl font-extrabold">$19.90</p>
          </CardHeader>
          <CardContent className="space-y-4 text-left">
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>Lifetime access to all materials</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>All updates included</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>Full workout library + progress trackers</span></li>
              <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>Priority support</span></li>
            </ul>
            <Button asChild size="lg" className="w-full font-bold text-lg bg-cta-green hover:bg-cta-green/90 text-white shadow-lg">
                <Link href="https://pay.hotmart.com/F101636056V?checkoutMode=10">Get Lifetime Access</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="relative transition-transform duration-300 hover:scale-[1.03]">
           <Badge variant="outline" className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background px-4 py-1 text-sm font-bold">Essential</Badge>
          <CardHeader className="pt-10">
            <CardTitle className="text-2xl">6-Month Access</CardTitle>
            <p className="text-4xl font-extrabold">$9.90</p>
          </CardHeader>
          <CardContent className="space-y-4 text-left">
            <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>6 months of access</span></li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>Core workout plans</span></li>
                <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5 shrink-0 text-cta-green" /><span>Standard support</span></li>
            </ul>
             <Button asChild size="lg" variant="outline" className="w-full font-bold text-lg border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary">
                <Link href="https://pay.hotmart.com/R101635715E?checkoutMode=10&bid=1756499267439">Start Now</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

       <div className="pt-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Lock className="h-4 w-4" /> 14-day satisfaction guarantee. Secure payment.
            </p>
            <p className="font-bold text-amber-600">Limited-time pricing — lock it in today.</p>
        </div>
    </div>
  );
}
