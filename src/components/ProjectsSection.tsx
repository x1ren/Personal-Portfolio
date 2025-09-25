import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-placeholder-1.jpg";
import project2 from "@/assets/project-placeholder-2.jpg";
import project3 from "@/assets/project-placeholder-3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Modern task management application with real-time collaboration features. Built using React, TypeScript, and Firebase for seamless user experience.",
      image: project2,
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing modern web development techniques. Features smooth animations and optimized performance.",
      image: project3,
      technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-32 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-hero-muted text-xl max-w-3xl mx-auto font-light leading-relaxed">
            A collection of projects that showcase my skills in modern web development,
            from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="modern-card rounded-2xl overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 text-sm bg-secondary/50 text-secondary-foreground rounded-lg border border-border font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="lg" 
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 shadow-modern font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;