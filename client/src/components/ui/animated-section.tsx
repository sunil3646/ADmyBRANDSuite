import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ className, children, delay = 0, ...props }, ref) => {
    const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({ delay });

    return (
      <div
        ref={(el) => {
          if (elementRef) {
            (elementRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
          }
          if (ref) {
            if (typeof ref === 'function') {
              ref(el);
            } else {
              (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
            }
          }
        }}
        className={cn(
          "scroll-animate",
          isVisible && "show",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

export { AnimatedSection };
