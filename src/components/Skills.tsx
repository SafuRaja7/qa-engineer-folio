import { CheckCircle2, Target, Users, FileText, Code, Bug } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Automation Frameworks",
    description:
      "Building scalable test automation frameworks using Playwright, Cypress, and Selenium",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Testing",
    description:
      "Designing and executing robust E2E tests to validate complex user journeys",
  },
  {
    icon: FileText,
    title: "API & Integration Testing",
    description:
      "Automating RESTful API tests with tools like Postman and Playwright API",
  },
  {
    icon: Target,
    title: "CI/CD Integration",
    description:
      "Integrating automated tests within Jenkins and GitHub Actions pipelines",
  },
  {
    icon: Bug,
    title: "Defect Detection & Analysis",
    description:
      "Identifying critical bugs early through efficient regression and smoke testing",
  },
  {
    icon: Users,
    title: "Collaboration & Reporting",
    description:
      "Working closely with developers and stakeholders to ensure release quality",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Core Competencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise in software quality assurance and testing
            methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {skill.title}
              </h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
