import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactNetlify() {
  const { toast } = useToast();
  const [selectedInterest, setSelectedInterest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
  });

  const onSubmit = async (data: InsertContact) => {
    setIsSubmitting(true);
    
    // Create FormData for Netlify Forms
    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("company", data.company || "");
    formData.append("interest", data.interest);
    formData.append("message", data.message || "");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
        });
        reset();
        setSelectedInterest("");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-white">
      <div className="max-w-4xl mx-auto container-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your{" "}
            <span className="text-gradient">Marketing?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get started with your free 14-day trial or contact our team for a personalized demo
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection>
            <GlassCard>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit(onSubmit)} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="John Doe"
                    className="mt-2"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@company.com"
                    className="mt-2"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    {...register("company")}
                    placeholder="Your Company"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="interest">I'm interested in *</Label>
                  <Select
                    value={selectedInterest}
                    onValueChange={(value) => {
                      setSelectedInterest(value);
                      setValue("interest", value);
                    }}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free-trial">Starting a Free Trial</SelectItem>
                      <SelectItem value="demo">Scheduling a Demo</SelectItem>
                      <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.interest && (
                    <p className="text-red-500 text-sm mt-1">{errors.interest.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your marketing goals..."
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-gradient text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </GlassCard>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection delay={200}>
            <div className="space-y-8">
              <GlassCard>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div className="text-slate-600">hello@admybrand.com</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Phone</div>
                      <div className="text-slate-600">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Office</div>
                      <div className="text-slate-600">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Quick Start</h4>
                <p className="text-slate-600 mb-6">
                  Ready to see ADmyBRAND in action? Start your free trial today and
                  experience the power of AI-driven marketing.
                </p>
                <Button className="w-full btn-gradient text-white">
                  Start Free 14-Day Trial
                </Button>
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}