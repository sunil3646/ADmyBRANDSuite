import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-element" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full floating-element" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full floating-element" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
        <AnimatedSection className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Transform Your Marketing with{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              AI Power
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Create compelling campaigns, optimize content, and scale your brand with our
            comprehensive AI marketing suite. Join 10,000+ marketers already succeeding.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Free 14-Day Trial
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="glass-morphism text-white border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
            >
              <Play className="w-5 h-5" fill="currentColor" />
              Watch Demo
            </Button>
          </div>

          {/* Dashboard Preview */}
          <AnimatedSection delay={300} className="pt-12">
            <div className="glass-morphism rounded-2xl p-4 max-w-4xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=700"
                alt="ADmyBRAND AI Dashboard showing analytics and campaign management"
                className="rounded-xl w-full h-auto shadow-2xl"
              />
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
}
