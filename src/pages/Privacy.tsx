import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Eye, Lock, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us (name, email, phone number, company details)",
        "Technical information automatically collected (IP address, browser type, device information)",
        "Usage data about how you interact with our website and services",
        "Communications data when you correspond with us"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our AI automation services",
        "To respond to your inquiries and provide customer support",
        "To send you relevant information about our services (with your consent)",
        "To analyze website usage and improve user experience",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "All data transmission is encrypted using SSL/TLS protocols",
        "Access to personal data is restricted to authorized personnel only",
        "We regularly review and update our security practices",
        "We do not sell, rent, or trade your personal information to third parties"
      ]
    },
    {
      icon: Trash2,
      title: "Data Retention & Deletion",
      content: [
        "We retain personal data only as long as necessary for the purposes outlined",
        "You can request deletion of your personal data at any time",
        "We will delete or anonymize your data within 30 days of a valid deletion request",
        "Some data may be retained for legal compliance or legitimate business purposes",
        "Visit our Data Deletion page for specific deletion procedures"
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Digasset ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website or use our AI automation services. By using our services, you consent to the 
                practices described in this policy.
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

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Your Rights</CardTitle>
                <CardDescription className="text-muted-foreground">
                  You have several rights regarding your personal data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Right to access your personal data</p>
                <p>• Right to correct inaccurate data</p>
                <p>• Right to delete your data</p>
                <p>• Right to restrict processing</p>
                <p>• Right to data portability</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Contact Information</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Questions about this privacy policy?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Email: contact@digasset.io</p>
                <p>Phone: +51 256 769 497</p>
                <p>Response time: Within 24 hours</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-12 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/data-deletion">
                <Button variant="outline">
                  Request Data Deletion
                </Button>
              </Link>
              <Link to="/terms">
                <Button variant="outline">
                  View Terms of Service
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

export default Privacy;