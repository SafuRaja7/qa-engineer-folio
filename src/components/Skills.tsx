import { CheckCircle2, Target, Users, FileText, Code, Bug } from "lucide-react";

const skills = [
  {
    icon: CheckCircle2,
    title: "Test Case Design",
    description: "Creating comprehensive manual test cases covering all user scenarios"
  },
  {
    icon: Target,
    title: "Test Strategy",
    description: "Developing effective test plans and QA strategies"
  },
  {
    icon: Users,
    title: "User Acceptance Testing",
    description: "Ensuring software meets user requirements and expectations"
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Detailed bug reports and test documentation"
  },
  {
    icon: Code,
    title: "Test Automation",
    description: "Experience with Selenium, Cypress, and API testing"
  },
  {
    icon: Bug,
    title: "Bug Tracking",
    description: "Proficient in JIRA, TestRail, and agile methodologies"
  }
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
            Specialized expertise in software quality assurance and testing methodologies
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
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
