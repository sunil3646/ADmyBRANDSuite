import { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GlassCard } from "@/components/ui/glass-card";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer:
      "Our AI uses advanced natural language processing to understand your brand voice, target audience, and campaign goals. Simply provide a brief description or keywords, and our AI generates compelling content tailored to your specific needs across multiple formats including social media posts, email campaigns, blog articles, and ad copy.",
  },
  {
    question: "Can I customize the AI to match my brand voice?",
    answer:
      "Absolutely! Our Brand Voice AI learns from your existing content, style guides, and preferences. You can train the AI by uploading samples of your best content, and it will adapt to match your unique tone, personality, and messaging style. The more you use it, the better it becomes at representing your brand.",
  },
  {
    question: "What analytics and insights do you provide?",
    answer:
      "Our analytics dashboard provides comprehensive insights including engagement rates, conversion tracking, audience demographics, content performance metrics, and AI-powered recommendations for optimization. You'll get real-time data across all your marketing channels with predictive analytics to help you make data-driven decisions.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "You can start using ADmyBRAND immediately after signing up! Our onboarding process takes just 5 minutes, and you'll be generating your first AI-powered content within 10 minutes. We provide guided tutorials, templates, and dedicated support to help you maximize value from day one.",
  },
  {
    question: "Do you offer integrations with other marketing tools?",
    answer:
      "Yes! We integrate with over 50+ popular marketing tools including social media platforms (Facebook, Instagram, LinkedIn, Twitter), email marketing services (Mailchimp, Constant Contact), CRM systems (HubSpot, Salesforce), and analytics tools (Google Analytics, Facebook Pixel). Our API also allows for custom integrations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-spacing bg-slate-50">
      <div className="max-w-4xl mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <GlassCard className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-slate-500 transform transition-transform duration-200",
                        openIndex === index && "rotate-180"
                      )}
                    />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
