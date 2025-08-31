'use client';

import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CheckoutButtonProps extends ButtonProps {
  checkoutUrl: string;
}

export function CheckoutButton({ children, checkoutUrl, className, ...props }: CheckoutButtonProps) {
  const handleCheckout = () => {
    // This is the most direct way to navigate to an external URL.
    // It replaces the current page in the session history.
    window.location.replace(checkoutUrl);
  };

  return (
    <Button
      onClick={handleCheckout}
      className={cn(className)}
      {...props}
    >
      {children}
    </Button>
  );
}
