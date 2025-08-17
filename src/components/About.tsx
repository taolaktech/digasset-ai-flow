import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Trophy, Lightbulb } from "lucide-react";

const About = () => {
  const achievements = [
    "200+ AI agents deployed in production",
    "90% average cost reduction for clients",
    "24/7 automated operations capability",
    "Fortune 500 and startup experience",
    "Industry-leading AI agent consulting",
    "Proven ROI and safety track record"
  ];

  const values = [
    {
      icon: Users,
      title: "Client-Focused",
      description: "We prioritize our clients' success and build long-term partnerships based on trust and results."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We deliver world-class AI solutions that exceed expectations and drive measurable business value."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of AI technology to provide cutting-edge solutions that give our clients a competitive edge."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="outline" className="mb-6">
              About Digasset
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">Ambitious Builders</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Digasset is the world's leading AI Agent consulting firm. We specialize in building custom AI agents 
              and digital assets that help companies automate their workflows and transform their operations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of AI experts has extensive experience working with both innovative startups and established 
              Fortune 500 companies, delivering solutions that provide safe, reliable, and profitable AI automation.
            </p>
            
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Start Your AI Journey
            </Button>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;