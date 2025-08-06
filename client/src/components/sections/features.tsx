import { AnimatedSection } from "@/components/ui/animated-section";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Edit3,
  BarChart3,
  Zap,
  Mic,
  Image,
  Share2,
} from "lucide-react";

const features = [
  {
    icon: Edit3,
    title: "AI Content Generation",
    description:
      "Create compelling copy, social media posts, and marketing materials in seconds with our advanced AI writing assistant.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics Dashboard",
    description:
      "Get real-time insights and AI-powered recommendations to optimize your campaigns and maximize ROI.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Automated Campaigns",
    description:
      "Set up intelligent automation workflows that adapt and optimize your marketing campaigns in real-time.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Mic,
    title: "Brand Voice AI",
    description:
      "Train our AI to match your unique brand voice and maintain consistency across all marketing channels.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Image,
    title: "Visual Content Creator",
    description:
      "Generate stunning graphics, social media visuals, and ad creatives with our AI-powered design tools.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Share2,
    title: "Multi-Channel Publishing",
    description:
      "Publish and schedule content across all your marketing channels from one centralized platform.",
    gradient: "from-teal-500 to-cyan-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Powerful AI Features for{" "}
            <span className="text-gradient">Modern Marketers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to create, optimize, and scale your marketing campaigns
            with artificial intelligence
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 100}>
              <GlassCard hover className="h-full">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
