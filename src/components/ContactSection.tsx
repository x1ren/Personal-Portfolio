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
    <section id="contact" className="min-h-screen py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-hero-muted text-xl max-w-3xl mx-auto font-light leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="modern-card rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-primary mb-8 tracking-tight">Send me a message</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="firstName" className="text-foreground font-medium">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="bg-input border-border focus:border-primary h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="lastName" className="text-foreground font-medium">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="bg-input border-border focus:border-primary h-12 rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john.doe@example.com"
                  className="bg-input border-border focus:border-primary h-12 rounded-xl"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Project Collaboration"
                  className="bg-input border-border focus:border-primary h-12 rounded-xl"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                  className="bg-input border-border focus:border-primary resize-none rounded-xl"
                />
              </div>
              <Button 
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-modern font-medium h-12 rounded-xl"
              >
                <Send className="w-5 h-5 mr-3" />
                Send Message
              </Button>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-nav-hover transition-all duration-300 group">
                      <div className="p-3 bg-gradient-glass rounded-xl group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                        <div className="text-foreground font-semibold text-lg">{item.value}</div>
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
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index} 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-nav-hover transition-all duration-300 group"
                    >
                      <div className="p-3 bg-gradient-glass rounded-xl group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-medium">{social.label}</div>
                        <div className="text-foreground font-semibold text-lg">{social.username}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="modern-card rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-gradient mb-4 tracking-tight">
                Ready to work together?
              </h4>
              <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                Let's discuss your project and bring your ideas to life!
              </p>
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-modern font-medium px-8"
              >
                <Mail className="w-5 h-5 mr-3" />
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;