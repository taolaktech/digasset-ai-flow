import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Trash2, Clock, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const DataDeletion = () => {
  const deletionSteps = [
    {
      step: 1,
      title: "Submit Request",
      description: "Fill out the form below with your deletion request details"
    },
    {
      step: 2,
      title: "Verification",
      description: "We'll verify your identity and the data associated with your request"
    },
    {
      step: 3,
      title: "Processing",
      description: "Your data will be deleted from our systems within 30 days"
    },
    {
      step: 4,
      title: "Confirmation",
      description: "You'll receive confirmation once the deletion is complete"
    }
  ];

  const dataTypes = [
    {
      icon: Shield,
      title: "Personal Information",
      description: "Name, email, phone number, and contact details",
      deletable: true
    },
    {
      icon: AlertTriangle,
      title: "Project Data",
      description: "Custom AI models and project-specific information",
      deletable: true,
      note: "May affect ongoing services"
    },
    {
      icon: Clock,
      title: "Legal Records",
      description: "Data required for legal compliance and accounting",
      deletable: false,
      note: "Retained per legal requirements"
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
              Data Deletion Request
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Request the deletion of your personal data from our systems. We're committed to respecting your privacy rights.
            </p>
          </div>

          {/* Process Overview */}
          <Card className="mb-8 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground flex items-center">
                <Trash2 className="w-6 h-6 mr-3 text-primary" />
                Deletion Process
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Our data deletion process is designed to be secure, thorough, and compliant with privacy regulations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {deletionSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-full mb-4">
                      <span className="text-lg font-semibold text-primary">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {dataTypes.map((dataType, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg">
                      <dataType.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">{dataType.title}</CardTitle>
                      <div className="flex items-center mt-1">
                        {dataType.deletable ? (
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-1" />
                        )}
                        <span className="text-xs text-muted-foreground">
                          {dataType.deletable ? "Deletable" : "Retained"}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{dataType.description}</p>
                  {dataType.note && (
                    <p className="text-xs text-yellow-400">{dataType.note}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Deletion Request Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Submit Deletion Request</CardTitle>
              <CardDescription className="text-muted-foreground">
                Please provide the following information to process your data deletion request.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="john@company.com" required />
                <p className="text-xs text-muted-foreground">
                  This should be the email address associated with your data in our system
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company (if applicable)</Label>
                <Input id="company" placeholder="Your Company Name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataTypes">Data Types to Delete</Label>
                <Textarea 
                  id="dataTypes" 
                  placeholder="Please specify which types of data you want deleted (e.g., contact information, project data, communication history)..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Deletion (Optional)</Label>
                <Textarea 
                  id="reason" 
                  placeholder="Please let us know why you're requesting data deletion..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Important Notice</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Data deletion is irreversible and may affect ongoing services</li>
                  <li>• Some data may be retained for legal compliance purposes</li>
                  <li>• Processing typically takes up to 30 days</li>
                  <li>• You'll receive confirmation once deletion is complete</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" className="flex-1">
                  Submit Deletion Request
                </Button>
                <Link to="/privacy" className="flex-1">
                  <Button variant="outline" className="w-full">
                    View Privacy Policy
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Need Help?</CardTitle>
              <CardDescription className="text-muted-foreground">
                Contact us if you have questions about data deletion
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Email: contact@digasset.io</p>
              <p>Phone: +51 256 769 497</p>
              <p>Response time: Within 24 hours</p>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link to="/">
              <Button variant="ghost">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataDeletion;