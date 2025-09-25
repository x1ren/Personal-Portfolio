import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar, MapPin } from "lucide-react";

const ResumeSection = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Startup Inc.",
      location: "Remote",
      period: "2023 - Present",
      description: "Developing modern web applications using React, TypeScript, and Tailwind CSS. Collaborated with cross-functional teams to deliver high-quality user experiences."
    },
    {
      title: "Web Developer Intern",
      company: "Digital Agency Co.",
      location: "City, Country",
      period: "2022 - 2023",
      description: "Built responsive websites and learned modern development workflows. Gained experience in version control, testing, and deployment processes."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University Name",
      location: "City, Country",
      period: "2020 - 2024",
      description: "Focused on software engineering, algorithms, and web technologies. Graduated with honors."
    }
  ];

  const skills = [
    { category: "Frontend", technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
    { category: "Backend", technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", technologies: ["Git", "Docker", "AWS", "Figma", "VS Code"] },
    { category: "Other", technologies: ["Agile", "Testing", "CI/CD", "REST APIs", "GraphQL"] }
  ];

  return (
    <section id="resume" className="min-h-screen py-32 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight">
            Resume
          </h2>
          <p className="text-hero-muted text-xl max-w-3xl mx-auto font-light leading-relaxed mb-8">
            My professional journey and technical expertise in software development.
          </p>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-modern font-medium px-8"
          >
            <Download className="w-5 h-5 mr-3" />
            Download Full Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience & Education */}
          <div className="space-y-16">
            <div>
              <h3 className="text-3xl font-black text-primary mb-8 tracking-tight">Experience</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="glass-card rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-primary mb-2">{exp.title}</h4>
                    <div className="space-y-3 mb-4">
                      <div className="text-hero-accent text-lg font-semibold">{exp.company}</div>
                      <div className="flex items-center gap-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-light">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black text-primary mb-8 tracking-tight">Education</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="glass-card rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-primary mb-2">{edu.degree}</h4>
                    <div className="space-y-3 mb-4">
                      <div className="text-hero-accent text-lg font-semibold">{edu.school}</div>
                      <div className="flex items-center gap-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-light">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-3xl font-black text-primary mb-8 tracking-tight">Technical Skills</h3>
            <div className="grid gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="modern-card rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-primary mb-6">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-3 text-sm bg-gradient-glass text-foreground rounded-xl border border-glass-border hover:border-primary/50 transition-all duration-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;