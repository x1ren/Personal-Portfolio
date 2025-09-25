import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "iben.anoos@example.com",
      href: "mailto:iben.anoos@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "City, Country",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      username: "@ibenanoos"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "Iben Anoos"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      username: "@ibenanoos"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-hero-muted text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john.doe@example.com"
                  className="bg-input border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Project Collaboration"
                  className="bg-input border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  className="bg-input border-border focus:border-primary resize-none"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="p-2 bg-secondary rounded-full">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="text-foreground font-medium">{item.value}</div>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={index} href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index} 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="p-2 bg-secondary rounded-full group-hover:bg-primary/10 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{social.label}</div>
                        <div className="text-foreground font-medium">{social.username}</div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-gradient-radial border-border">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-primary mb-2">
                  Ready to work together?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Let's discuss your project and bring your ideas to life!
                </p>
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Start a Conversation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;