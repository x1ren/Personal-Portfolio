import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      {/* Modern floating elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      
      <div className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-10">
            <div className="text-hero-muted font-mono text-lg tracking-wide">
              $ whoami
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black text-primary leading-none tracking-tight">
                Hello I'm
              </h1>
              <h2 className="text-5xl lg:text-7xl font-black text-gradient leading-none tracking-tight">
                Iben Anoos
              </h2>
              <p className="text-xl text-hero-muted font-medium">
                19 years old • Software Developer
              </p>
            </div>
            
            <div className="text-hero-muted text-xl leading-relaxed max-w-2xl font-light">
              <span className="text-hero-accent font-medium">&gt;</span> I develop modern web applications and innovative 
              software solutions. Specializing in full-stack 
              development, I'm passionate about creating 
              efficient, scalable applications and sharing knowledge 
              through collaborative development.
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <Button 
                size="lg"
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium px-8"
              >
                <Download className="w-5 h-5 mr-3" />
                Download CV
              </Button>
              
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 p-3"
                >
                  <Github className="w-6 h-6" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 p-3"
                >
                  <Linkedin className="w-6 h-6" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 p-3"
                >
                  <Mail className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right content - Profile image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 rounded-3xl overflow-hidden shadow-modern border border-border/20">
                <img 
                  src={profilePlaceholder} 
                  alt="Iben Anoos - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Modern decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-glass rounded-2xl animate-pulse shadow-glass"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-glass rounded-2xl animate-pulse shadow-glass" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
        
        {/* Terminal status indicator */}
        <div className="absolute bottom-10 left-8 font-mono text-sm text-hero-muted">
          <span className="text-hero-accent">iben@portfolio:~$</span>
          <span className="ml-4">Status: <span className="text-primary font-medium">AVAILABLE</span></span>
          <span className="ml-8">Time: <span className="font-medium">{new Date().toLocaleTimeString()}</span></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;