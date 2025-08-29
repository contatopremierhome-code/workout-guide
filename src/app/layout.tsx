import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'FitPath Optimizer',
  description: 'Maximize your results with a personalized workout plan. Get clarity and flexibility for your fitness journey.',
  openGraph: {
    title: 'FitPath Optimizer',
    description: 'Maximize your results with a personalized workout plan. Get clarity and flexibility for your fitness journey.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
        width: 1200,
        height: 630,
        alt: 'Person working out in a gym',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <Script
          id="utmify-script"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids
          async
          defer
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
