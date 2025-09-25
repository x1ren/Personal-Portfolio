import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-glass">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary tracking-tight">
            Iben<span className="text-hero-accent">.</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-foreground hover:bg-nav-hover transition-all duration-300 font-medium"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground hover:bg-nav-hover transition-all duration-300 font-medium"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground hover:bg-nav-hover transition-all duration-300 font-medium"
            >
              Projects
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('resume')}
              className="text-muted-foreground hover:text-foreground hover:bg-nav-hover transition-all duration-300 font-medium"
            >
              Resume
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="ml-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-modern font-medium px-6"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;