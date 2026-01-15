import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/buhay.png";
import project2 from "@/assets/recipe.png";
import project4 from "@/assets/sdg1.png";
import project3 from "@/assets/camply.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "BuhAI-AI Diabetes Assistant",
      description:
        "A comprehensive diabetes management application that combines a modern React Native frontend with a powerful AI-powered backend. The app helps users manage diabetes through personalized, real-time insights using Continuous Glucose Monitor (CGM) data, advanced LSTM machine learning models, and an intelligent chat assistant that provides 24/7 support for diabetes management.",
      image: project1,
      technologies: ["React-Native", "Flask", "GeminiAI", "RAG Systems"],
      github: "https://github.com/x1ren/BuhAI",
    },
    {
      title: "Divina - AI Recipe App",
      description:
        "An AI-powered recipe assistant that helps users explore,generate, and customize meals based on their available ingredients, personal taste preferences, and dietary restrictions. The app provideS step-by-step cooking instructions. It enhances the cooking experience by offering personalized meal planning, reducing food waste through ingredient-based suggestions, and keeping users inspired with new recipe ideas.",
      image: project2,
      technologies: ["React-Native", "Spring Boot", "PostreSQL", "GeminiAI"],
      github: "https://github.com/x1ren/Divina-Frontend",
    },
    {
      title: "Camply - Campus Based MarketPlace",
      description:
        "Camply is a campus-based marketplace that enables students to buy, sell, and trade items safely and conveniently within their campus community. The platform allows users to list products, browse available items, and communicate directly with other students, fostering a collaborative and sustainable campus economy. Built with modern web technologies, Camply demonstrates full-stack development skills, including user authentication, product management, and secure transactions.",
      image: project3,
      technologies: ["NextJS", "Supabase"],
      github: "https://github.com/x1ren/Camply",
    },
    {
      title: "SDG Philippines Web App",
      description:
        "A web application that highlights and visualizes recent data related to the United Nations Sustainable Development Goals (SDGs) in the Philippines. The platform features interactive graphs and data-driven insights to make sustainability progress easier to understand. It also integrates the latest news and updates on SDG-related initiatives within the country, helping users stay informed and engaged with global development efforts.",
      image: project4,
      technologies: ["Flask", "JavaScript", "HTML&CSS", "Render"],
      github: "https://github.com/x1ren/SDG-Philippines-Web-Application",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-32 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-hero-muted text-xl max-w-3xl mx-auto font-light leading-relaxed">
            A collection of projects that showcase my skills in modern web
            development, from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="modern-card rounded-2xl overflow-hidden group"
            >
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
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
