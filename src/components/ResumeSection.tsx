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
    <section id="resume" className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Resume
          </h2>
          <p className="text-hero-muted text-lg max-w-2xl mx-auto mb-8">
            My professional journey and technical expertise in software development.
          </p>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Full Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience & Education */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-primary">{exp.title}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center text-hero-muted">
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-primary">{edu.degree}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center text-hero-muted">
                          <span className="font-semibold">{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Technical Skills</h3>
            <div className="grid gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg border border-border hover:border-geometric-light transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;