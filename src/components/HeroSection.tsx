import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-radial relative overflow-hidden">
      {/* Geometric decorations */}
      <div className="geometric-decoration"></div>
      <div className="geometric-decoration"></div>
      <div className="geometric-decoration"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="text-hero-muted font-mono text-lg">
              $ whoami
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary text-shadow-glow">
                Hello I'm
              </h1>
              <h2 className="text-4xl lg:text-6xl font-bold text-hero-accent">
                Iben Anoos
              </h2>
            </div>
            
            <div className="text-hero-muted text-lg leading-relaxed max-w-2xl">
              <span className="text-geometric-lighter">&gt;</span> I develop modern web applications and innovative 
              software solutions. Specializing in full-stack 
              development, I'm passionate about creating 
              efficient, scalable applications and sharing knowledge 
              through collaborative development.
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  size="icon" 
                  variant="outline"
                  className="border-geometric-light hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline"
                  className="border-geometric-light hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline"
                  className="border-geometric-light hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right content - Profile image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-geometric-light shadow-glow">
                <img 
                  src={profilePlaceholder} 
                  alt="Iben Anoos - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-geometric-lighter rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-geometric-light rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
        
        {/* Terminal status indicator */}
        <div className="absolute bottom-8 left-6 font-mono text-sm text-hero-muted">
          <span className="text-geometric-lighter">iben@portfolio:~$</span>
          <span className="ml-4">Status: <span className="text-primary">AVAILABLE</span></span>
          <span className="ml-8">Time: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;