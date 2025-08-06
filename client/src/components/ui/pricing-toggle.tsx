import { useState } from "react";
import { cn } from "@/lib/utils";

interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void;
  className?: string;
}

export function PricingToggle({ onToggle, className }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    const newValue = !isAnnual;
    setIsAnnual(newValue);
    onToggle(newValue);
  };

  return (
    <div className={cn("flex items-center justify-center space-x-3", className)}>
      <span className={cn("text-slate-600", !isAnnual && "font-semibold text-slate-900")}>
        Monthly
      </span>
      <button
        onClick={handleToggle}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        role="switch"
        aria-checked={isAnnual}
      >
        <span
          className={cn(
            "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
            isAnnual ? "translate-x-6" : "translate-x-1"
          )}
        />
        <span className="sr-only">Toggle billing period</span>
      </button>
      <span className={cn("text-slate-600", isAnnual && "font-semibold text-slate-900")}>
        Annual{" "}
        <span className="text-green-600 text-sm font-semibold">(Save 20%)</span>
      </span>
    </div>
  );
}
