import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Workflow, Settings, BarChart3, MessageSquare, FileText } from "lucide-react";

const Services = () => {
  const handleBookConsultation = () => {
    const calendlyUrl = "https://calendly.com/contact-digasset/30min";
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  const services = [
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Tailored AI agents designed specifically for your business workflows and requirements.",
      features: ["Customer Service Automation", "Lead Qualification", "Data Processing", "Content Generation & Social media automation"]
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "End-to-end process automation that eliminates manual tasks and reduces operational costs.",
      features: ["Process Mapping", "Integration Setup", "Performance Monitoring", "Continuous Optimization"]
    },
    {
      icon: Settings,
      title: "AI Implementation",
      description: "Complete AI solution deployment with training, support, and ongoing maintenance.",
      features: ["Private AI System Deployment", "Team Training", "24/7 Support", "Regular Updates"]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Advanced analytics and reporting to measure AI agent performance and ROI.",
      features: ["Real-time Dashboards", "Performance Metrics", "ROI Tracking", "Optimization Reports"]
    },
    {
      icon: MessageSquare,
      title: "AI Consulting",
      description: "Strategic consulting to identify AI opportunities and develop implementation roadmaps.",
      features: ["AI Strategy Development", "Use Case Identification", "Technology Assessment", "Implementation Planning"]
    },
    {
      icon: FileText,
      title: "Digital Asset Creation",
      description: "Transform your knowledge and processes into valuable digital assets powered by AI.",
      features: ["Knowledge Base Development", "Process Documentation", "AI Model Training", "Asset Monetization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Automate Workflows in <span className="bg-gradient-primary bg-clip-text text-transparent">Weeks Not Quarters</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2023, Digasset has built and reviewed hundreds of custom AI Agents for startups and busines owners. 
            We help clients quickly prototype and privately deployed AI Agents that are tailored to their needs and provide a positive ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow-subtle transition-all duration-300 group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" onClick={handleBookConsultation}>
            Get Free AI Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;