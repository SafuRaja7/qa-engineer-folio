import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Cypress E2E Automation",
    description: "Automated end-to-end test cases using Cypress covering user registration, login/logout flows, incorrect credential handling, and comprehensive user journey validation.",
    tech: ["Cypress", "E2E Testing", "JavaScript", "Automation"],
    githubLink: "https://github.com/SafuRaja7/AutomationExercise-Cypress"
  },
  {
    title: "Healthcare Mobile App QA",
    description: "End-to-end testing of a healthcare appointment booking mobile application with focus on HIPAA compliance and data security.",
    tech: ["Mobile Testing", "Security Testing", "Usability Testing"],
    testCaseLink: "https://docs.google.com/spreadsheets/d/example-healthcare"
  },
  {
    title: "Banking Web Application",
    description: "Critical testing of online banking features including transactions, bill payments, and account management with emphasis on security protocols.",
    tech: ["Functional Testing", "Security Testing", "Performance Testing"],
    testCaseLink: "https://docs.google.com/spreadsheets/d/example-banking"
  },
  {
    title: "Project Management Tool",
    description: "Testing of collaborative project management software with real-time updates, task tracking, and team communication features.",
    tech: ["Integration Testing", "Cross-browser Testing", "UAT"],
    testCaseLink: "https://docs.google.com/spreadsheets/d/example-pm-tool"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality assurance projects showcasing comprehensive testing methodologies and attention to detail
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 border-border hover:border-primary animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="gap-3">
                {project.githubLink && (
                  <Button 
                    variant="default" 
                    className="flex-1 gap-2"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on GitHub
                  </Button>
                )}
                {project.testCaseLink && (
                  <Button 
                    variant="default" 
                    className="flex-1 gap-2"
                    onClick={() => window.open(project.testCaseLink, '_blank')}
                  >
                    <FileText className="w-4 h-4" />
                    View Test Cases
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
