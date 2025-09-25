import * as React from "react";
import { Card } from "@/components/ui/card";
import {
  FileCode2, // C
  FilePlus2, // C++
  Terminal, // Python
  FileJson2, // JavaScript
  Coffee, // Java
  Database, // Spring Boot
  FlaskConical, // Flask
  LayoutTemplate, // Next.js
  Smartphone, // React Native
  DatabaseBackup, // NoSQL
  Container, // Docker
  Github,
} from "lucide-react";

const getIconStyle = (name: string) => {
  const colorMap: { [key: string]: { color: string; bg: string } } = {
    // Programming Languages
    C: { color: "#007ACC", bg: "#007ACC20" },
    "C++": { color: "#00599C", bg: "#00599C20" },
    Python: { color: "#FFD43B", bg: "#FFD43B20" },
    JavaScript: { color: "#F7DF1E", bg: "#F7DF1E20" },
    Java: { color: "#E76F00", bg: "#E76F0020" },
    // Technologies
    "Spring Boot": { color: "#6DB33F", bg: "#6DB33F20" },
    Flask: { color: "#000000", bg: "#00000020" },
    "Next.js": { color: "#000000", bg: "#00000020" },
    "React Native": { color: "#61DAFB", bg: "#61DAFB20" },
    NoSQL: { color: "#4DB33D", bg: "#4DB33D20" },
    Docker: { color: "#2496ED", bg: "#2496ED20" },
    GitHub: { color: "#181717", bg: "#18171720" },
  };
  return colorMap[name] || { color: "#666", bg: "#66666620" };
};

const SkillsSection = () => {
  const skills = {
    programmingLanguages: [
      { name: "C", icon: FileCode2 },
      { name: "C++", icon: FilePlus2 },
      { name: "Python", icon: Terminal },
      { name: "JavaScript", icon: FileJson2 },
      { name: "Java", icon: Coffee },
    ],
    technologies: [
      { name: "Spring Boot", icon: Database },
      { name: "Flask", icon: FlaskConical },
      { name: "Next.js", icon: LayoutTemplate },
      { name: "React Native", icon: Smartphone },
      { name: "NoSQL", icon: DatabaseBackup },
      { name: "Docker", icon: Container },
      { name: "GitHub", icon: Github },
    ],
  };

  return (
    <section id="skills" className="min-h-screen py-32 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-hero-muted text-xl max-w-3xl mx-auto font-light leading-relaxed">
            My expertise in various programming languages and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <Card className="glass-card p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.programmingLanguages.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-xl border border-border/20 hover:border-primary/20 transition-all duration-300 group hover:shadow-lg"
                  >
                    <div
                      className="p-4 rounded-xl transition-all duration-300"
                      style={{
                        backgroundColor: getIconStyle(skill.name).bg,
                        transform: "scale(1)",
                      }}
                    >
                      <IconComponent
                        className="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110"
                        style={{ color: getIconStyle(skill.name).color }}
                      />
                    </div>
                    <span className="mt-3 font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Technologies */}
          <Card className="glass-card p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.technologies.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-xl border border-border/20 hover:border-primary/20 transition-all duration-300 group hover:shadow-lg"
                  >
                    <div
                      className="p-4 rounded-xl transition-all duration-300"
                      style={{
                        backgroundColor: getIconStyle(skill.name).bg,
                        transform: "scale(1)",
                      }}
                    >
                      <IconComponent
                        className="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110"
                        style={{ color: getIconStyle(skill.name).color }}
                      />
                    </div>
                    <span className="mt-3 font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
