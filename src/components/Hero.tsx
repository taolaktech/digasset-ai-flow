import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Target } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mt-4 inline-flex items-center px-4 py-2 mb-8 bg-primary/10 border border-primary/20 rounded-full">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Leading AI Automation Agency</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Build</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Custom AI Agents
            </span>
            <br />
            <span className="text-foreground">That Work 24/7/365</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Digasset helps ambitious companies build digital assets around AI automation and AI agents that cut costs, boost revenue, and streamline processes.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="group">
              Get Free AI Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Button variant="outline" size="lg">
              View Our AI Agents
            </Button> */}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">200+</h3>
              <p className="text-muted-foreground">AI Agents Deployed</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">90%</h3>
              <p className="text-muted-foreground">Cost Reduction Average</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
              <p className="text-muted-foreground">Automated Operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;