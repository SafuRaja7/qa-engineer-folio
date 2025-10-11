import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform Testing",
    description: "Comprehensive testing of a multi-vendor e-commerce platform including payment gateway integration, user authentication, and inventory management.",
    tech: ["Manual Testing", "API Testing", "Regression Testing"],
    testCases: 185,
    bugs: 42,
    testCaseLink: "https://docs.google.com/spreadsheets/d/example-ecommerce"
  },
  {
    title: "Healthcare Mobile App QA",
    description: "End-to-end testing of a healthcare appointment booking mobile application with focus on HIPAA compliance and data security.",
    tech: ["Mobile Testing", "Security Testing", "Usability Testing"],
    testCases: 156,
    bugs: 38,
    testCaseLink: "https://docs.google.com/spreadsheets/d/example-healthcare"
  },
  {
    title: "Banking Web Application",
    description: "Critical testing of online banking features including transactions, bill payments, and account management with emphasis on security protocols.",
    tech: ["Functional Testing", "Security Testing", "Performance Testing"],
    testCases: 213,
    bugs: 51,
    testCaseLink: "https://docs.google.com/spreadsheets/d/example-banking"
  },
  {
    title: "Project Management Tool",
    description: "Testing of collaborative project management software with real-time updates, task tracking, and team communication features.",
    tech: ["Integration Testing", "Cross-browser Testing", "UAT"],
    testCases: 142,
    bugs: 29,
    testCaseLink: "https://docs.google.com/spreadsheets/d/example-pm-tool"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
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
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3 rounded-lg bg-background border border-border">
                    <p className="text-2xl font-bold text-primary">{project.testCases}</p>
                    <p className="text-xs text-muted-foreground">Test Cases</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background border border-border">
                    <p className="text-2xl font-bold text-secondary">{project.bugs}</p>
                    <p className="text-xs text-muted-foreground">Bugs Found</p>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="gap-3">
                <Button 
                  variant="default" 
                  className="flex-1 gap-2"
                  onClick={() => window.open(project.testCaseLink, '_blank')}
                >
                  <FileText className="w-4 h-4" />
                  View Test Cases
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="group-hover:border-primary"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
