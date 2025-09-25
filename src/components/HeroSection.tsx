import * as React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePlaceholder from "../assets/newProfile.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden"
    >
     

      <div className="max-w-7xl mx-auto px-8 py-32 relative">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5 pointer-events-none">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-full border-l border-primary/20"></div>
            ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left content - spans 7 columns */}
          <div className="lg:col-span-7 space-y-12 relative">
            {/* Terminal Header */}
            

            {/* Main Text Content */}
            <div className="glass-card rounded-b-xl rounded-tr-xl p-8 border border-border/20 space-y-8 backdrop-blur-md">
              <div className="space-y-3">
                <div className="text-hero-muted font-mono text-sm">
                  
                </div>
                <div className="font-mono typing-animation">
                  <h1 className="text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tighter">
                    Iben<span className="text-hero-accent"> </span>Anoos
                  </h1>
                  <div className="text-xl text-hero-muted mt-2">
                    <span className="text-primary font-medium">19</span> years
                    old •{" "}
                    <span className="text-hero-accent">Software Developer</span>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-hero-accent pl-4 text-hero-muted text-lg leading-relaxed">
                <span className="text-hero-accent"></span>Passionate and hardworking developer, aspiring to become a seasoned professional. Focused on modern web and app development, crafting
                 digital experiences through elegant 
                 code and building efficient, 
                 scalable solutions.
                solutions.
              </div>

              <div className="flex flex-wrap gap-4">
                <a download={true} href="/Iben Anoos CV.pdf">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 rounded-xl shadow-glow transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download CV
                </Button>
                </a>

                <div className="flex gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Profile image spans 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Frame */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl transform translate-x-4 translate-y-4"></div>

              {/* Image Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-modern border-2 border-primary/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                <img
                  src={profilePlaceholder}
                  alt="Iben Anoos - Software Developer"
                  className="w-full h-[500px] object-cover"
                />

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex justify-between text-white/90 font-mono text-sm">
                    <div className="space-y-1">
                      <div className="text-white/60">Status</div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                        Available
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-xl animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default HeroSection;
