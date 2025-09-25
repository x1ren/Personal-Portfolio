import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            Iben.
          </div>
          
          <div className="flex items-center space-x-1">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-foreground hover:bg-nav-hover transition-all duration-300"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground hover:bg-nav-hover transition-all duration-300"
            >
              Projects
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('resume')}
              className="text-muted-foreground hover:text-foreground hover:bg-nav-hover transition-all duration-300"
            >
              Resume
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground hover:bg-nav-hover transition-all duration-300"
            >
              About
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-glow"
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