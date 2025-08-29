import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useForm } from "@formspree/react";
import { useRef } from "react";

const Contact = () => {
  const handleBookConsultation = () => {
    const calendlyUrl = "https://calendly.com/contact-digasset/30min";
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };
  const [state, handleSubmit] = useForm("xvgbkped"); // from Formspree dashboard
  const formRef = useRef<HTMLFormElement | null>(null);

const onSubmit = async (e) => {
  await handleSubmit(e);
  if (state.succeeded) {
      formRef.current.reset();
    }
};

  return (
    
<section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a free consultation and discover how AI agents can revolutionize your workflows and boost your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Ready to automate your workflows and build powerful AI agents? Let's discuss your project and explore how we can help you achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">contact@digasset.io</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+51 256 769 497</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Response Time</h4>
                  <p className="text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Free AI Consultation</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Schedule a complimentary consultation to discuss your AI automation needs and potential solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="hero" className="w-full" onClick={handleBookConsultation}>
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
<form ref={formRef} onSubmit={onSubmit} method="POST">
  <Card className="bg-card border-border">
    <CardHeader>
      <CardTitle className="text-2xl font-semibold text-foreground">
        Send us a message
      </CardTitle>
      <CardDescription className="text-muted-foreground">
        Tell us about your project and we'll get back to you within 24 hours.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" placeholder="John" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" placeholder="Doe" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="john@company.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" placeholder="Your Company" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message"
          name="message"
          placeholder="Tell us about your project, current workflows, and automation goals..."
          className="min-h-[120px]"
        />
      </div>

      <Button disabled={state.submitting} type="submit" variant="cta" className="w-full">
        Send Message
      </Button>
      {state.succeeded && (
        <p className="text-green-600 text-center">✅ Thanks! We’ll be in touch soon.</p>
      )}
    </CardContent>
  </Card>
</form>   
        </div>
      </div>
    </section>
    
  );
};

export default Contact;