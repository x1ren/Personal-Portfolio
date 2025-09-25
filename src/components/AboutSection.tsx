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
    { number: "19", label: "Years Old" },
    { number: "2+", label: "Years Coding" },
    { number: "15+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-hero-muted text-lg max-w-2xl mx-auto">
            Learn more about my journey, values, and what drives my passion for software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">
              Hi, I'm Iben Anoos
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate 19-year-old software developer with a love for creating 
                innovative digital solutions. My journey in programming started during my 
                high school years, and since then, I've been dedicated to continuously 
                learning and improving my skills.
              </p>
              <p>
                I specialize in full-stack web development, with a particular interest in 
                modern JavaScript frameworks and creating seamless user experiences. 
                I enjoy tackling complex problems and turning ideas into reality through code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in the power of collaboration and 
                continuous learning.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border text-center hover:border-geometric-light transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            My Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-geometric-light transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-secondary rounded-full w-fit group-hover:bg-primary/10 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;