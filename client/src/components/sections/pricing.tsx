import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GlassCard } from "@/components/ui/glass-card";
import { PricingToggle } from "@/components/ui/pricing-toggle";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    monthlyPrice: 29,
    annualPrice: 23,
    features: [
      "5,000 AI content generations",
      "Basic analytics dashboard",
      "3 social media channels",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and agencies",
    monthlyPrice: 79,
    annualPrice: 63,
    features: [
      "25,000 AI content generations",
      "Advanced analytics & insights",
      "Unlimited social channels",
      "Brand voice training",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    monthlyPrice: 199,
    annualPrice: 159,
    features: [
      "Unlimited AI generations",
      "Custom AI model training",
      "White-label solution",
      "API access",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="section-spacing bg-slate-50">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>

          <PricingToggle onToggle={setIsAnnual} />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 100}>
              <GlassCard
                className={`pricing-card h-full relative ${
                  plan.popular ? "border-2 border-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="btn-gradient text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-500 ml-1">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-green-600 text-sm font-semibold mt-2">
                      Save ${(plan.monthlyPrice - plan.annualPrice) * 12} annually
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "btn-gradient text-white"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
