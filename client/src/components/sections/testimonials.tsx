import { AnimatedSection } from "@/components/ui/animated-section";
import { GlassCard } from "@/components/ui/glass-card";
import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "ADmyBRAND has completely transformed our content creation process. We're producing 3x more content in half the time, and our engagement rates have skyrocketed.",
    author: "Sarah Chen",
    role: "Marketing Director, TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    content:
      "The AI-powered analytics have given us insights we never had before. Our campaigns are now data-driven and consistently outperform our targets.",
    author: "Michael Rodriguez",
    role: "CEO, GrowthLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    content:
      "As a small agency, ADmyBRAND has leveled the playing field for us. We can now offer enterprise-level services to all our clients.",
    author: "Emma Thompson",
    role: "Founder, Creative Collective",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Loved by{" "}
            <span className="text-gradient">10,000+ Marketers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how businesses like yours are transforming their marketing with ADmyBRAND AI Suite
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={index * 100}>
              <GlassCard hover className="h-full">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5" fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.author}
                    </div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
