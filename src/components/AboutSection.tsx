import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Lightbulb, Users, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "I believe in writing clean, maintainable code that stands the test of time and scales with business needs."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies to solve problems in creative and efficient ways."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong advocate for teamwork and open communication to achieve the best possible outcomes."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering high-quality solutions that meet user needs and business objectives."
    }
  ];

  const stats = [
    { number: "207", label: "Commits (2025)" },
    { number: "6+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" },
    {number: "<2", label: "Years of Experience" }
  ];

  return (
    <section id="about" className="min-h-screen py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-hero-muted text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Learn more about my journey, values, and what drives my passion for software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-8">
            <h3 className="text-4xl font-black text-gradient tracking-tight">
              Hi, I'm Iben Anoos
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
               I'm a 19-year-old software developer with a strong focus on backend development and building efficient, reliable systems. My programming journey started in high school, and since then, I’ve been steadily 
                learning and improving my skills through projects and hands-on practice.
              </p>
              <p>
               I specialize in full-stack web development. While I enjoy designing APIs, managing data, and ensuring smooth backend processes, I also work with frontend technologies to create functional and user-friendly interfaces. 
               This balance allows me to see projects 
               from end to end and bring ideas fully to life.
              </p>
             
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center hover:shadow-modern transition-all duration-300">
                <div className="text-4xl font-black text-gradient mb-3">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-black text-primary text-center mb-16 tracking-tight">
            My Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="modern-card rounded-2xl p-8 text-center group">
                  <div className="mx-auto mb-6 p-4 bg-gradient-glass rounded-2xl w-fit group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-gradient transition-all duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;