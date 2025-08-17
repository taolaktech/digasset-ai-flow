import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, AlertCircle, Shield, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "Service Description",
      content: [
        "Digasset provides AI automation consulting and custom AI agent development services",
        "Our services include workflow automation, AI implementation, and digital asset creation",
        "We offer consulting, development, deployment, and ongoing support for AI solutions",
        "All services are provided on a project basis or through ongoing service agreements"
      ]
    },
    {
      icon: AlertCircle,
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information about your business requirements",
        "Cooperate with our team during the development and implementation process",
        "Maintain the confidentiality of any proprietary information shared",
        "Use our services in compliance with applicable laws and regulations",
        "Promptly notify us of any issues or concerns with our services"
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        "Custom AI agents and solutions developed for you remain your intellectual property",
        "Our proprietary methodologies, frameworks, and general knowledge remain our property",
        "You grant us the right to use anonymized case studies for marketing purposes",
        "We respect all third-party intellectual property rights",
        "Any pre-existing IP remains with its original owner"
      ]
    },
    {
      icon: Scale,
      title: "Limitations & Disclaimers",
      content: [
        "AI solutions are provided 'as is' without warranties of specific performance outcomes",
        "We are not liable for business decisions made based on AI recommendations",
        "Our liability is limited to the fees paid for the specific service in question",
        "We cannot guarantee specific ROI or cost savings, though we strive for positive outcomes",
        "Force majeure events may affect service delivery timelines"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-semibold text-foreground">Digasset</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These terms govern your use of Digasset's AI automation services and define our mutual rights and responsibilities.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Agreement Overview</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") 
                and Digasset ("Company," "we," "our," or "us") regarding your use of our AI automation services, 
                custom AI agent development, and related consulting services. By engaging our services, you agree to be bound by these Terms.
              </p>
            </CardContent>
          </Card>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment & Cancellation Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Payment Terms</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Payment structure and billing information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Payment terms are specified in individual project agreements</p>
                <p>• Invoices are typically due within 30 days of receipt</p>
                <p>• Late payments may incur additional fees</p>
                <p>• Refunds are handled on a case-by-case basis</p>
                <p>• All fees are exclusive of applicable taxes</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Modification & Termination</CardTitle>
                <CardDescription className="text-muted-foreground">
                  How these terms may change or end
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• We may update these terms with 30 days notice</p>
                <p>• Either party may terminate with written notice</p>
                <p>• Ongoing projects will be completed per project terms</p>
                <p>• Confidentiality obligations survive termination</p>
                <p>• Data deletion follows our privacy policy</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="mt-8 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Questions About These Terms?</CardTitle>
              <CardDescription className="text-muted-foreground">
                Contact us if you need clarification on any part of these terms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Email: contact@digasset.io</p>
              <p>Phone: +51 256 769 497</p>
              <p>We'll respond to your questions within 24 hours</p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center mt-12 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/privacy">
                <Button variant="outline">
                  Privacy Policy
                </Button>
              </Link>
              <Link to="/data-deletion">
                <Button variant="outline">
                  Data Deletion
                </Button>
              </Link>
            </div>
            <Link to="/">
              <Button variant="cta">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;