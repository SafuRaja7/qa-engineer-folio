import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    title: "Cypress E2E Automation",
    description: "Automated end-to-end test cases using Cypress covering user registration, login/logout flows, incorrect credential handling, and comprehensive user journey validation.",
    tech: ["Cypress", "E2E Testing", "JavaScript", "Automation"],
    githubLink: "https://github.com/SafuRaja7/AutomationExercise-Cypress",
    testCaseLink: "https://github.com/SafuRaja7/qa-engineer-folio/blob/main/test_cases/tc_project_1.md"
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <Card 
        className="group h-full hover:shadow-glow transition-all duration-300 border-border hover:border-primary overflow-hidden"
      >
        <CardHeader style={{ transform: "translateZ(20px)" }}>
          <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
            {project.title}
          </CardTitle>
          <CardDescription className="text-base">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4" style={{ transform: "translateZ(10px)" }}>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="gap-3" style={{ transform: "translateZ(30px)" }}>
          <Button 
            variant="default" 
            className="flex-1 gap-2 hover:scale-105 transition-transform"
            onClick={() => project.testCaseLink !== '#' && window.open(project.testCaseLink, '_blank')}
            disabled={project.testCaseLink === '#'}
          >
            <FileText className="w-4 h-4" />
            View Test Cases
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="hover:scale-110 transition-transform"
            onClick={() => project.githubLink !== '#' && window.open(project.githubLink, '_blank')}
            disabled={project.githubLink === '#'}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-subtle overflow-hidden relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality assurance projects showcasing comprehensive testing methodologies and attention to detail
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
