import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import deenImg from "@/assets/deen.png";
import poolartImg from "@/assets/poolart.png";
import newsyImg from "@/assets/Newsy.png";
import cypressImg from "@/assets/cypress.png";

const projects = [
  {
    title: "Deen – Your Daily Companion for Faith & Peace",
    description: "Deen is an Islamic mobile app designed for spiritual connection in daily life. Featuring accurate prayer times, full Quran access, and curated content, it helps you stay connected to your faith through a sleek and intuitive mobile interface.",
    technologies: ["Flutter", "Dart", "REST API", "Figma"],
    image: deenImg,
    githubUrl: "https://github.com/SafuRaja7/Deen",
    testCaseUrl: "#"
  },
   {
    title: "Pool Art – Specialized Pool Services",
    description: "A sophisticated Flutter web application for a premier French pool service provider. Features comprehensive solutions for pool maintenance, design, and renovation, with customizable service packages and a dynamic project showcase.",
    technologies: ["Flutter", "Dart", "Web", "UI/UX"],
    image: poolartImg,
    liveUrl: "https://poolart.fr",
    githubUrl: "#",
    testCaseUrl: "#"
  },
  {
      title: 'Multiplatform News App',
      description: 'Stay informed with our sleek, cross-platform News App built using Flutter and Dart. Designed for Android, iOS, Web, and Desktop, this app delivers real-time news from trusted sources in a fast, responsive, and beautifully crafted UI.',
      image: newsyImg,
      technologies: ['Flutter', 'Dart','REST API'],
      githubUrl: 'https://github.com/SafuRaja7/News-App-Multi-Platform',
      testCaseUrl: '#'
    },
  {
    title: "Continuous Quality Integration",
    description: "A robust testing suite using Cypress for complex user journeys and authentication flows. Implemented Page Object Model for maintainability and integrated with GitHub Actions to ensure high-performance software standards across platforms.",
    technologies: ["Cypress", "JavaScript", "CI/CD", "Integration"],
    image: cypressImg,
    githubUrl: "https://github.com/SafuRaja7/AutomationExercise-Cypress",
    testCaseUrl: "https://github.com/SafuRaja7/qa-engineer-folio/blob/main/test_cases/tc_project_1.md"
  },
  
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

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
    <div className="perspective-1000">
      <motion.div
        initial={{ 
          opacity: 0, 
          y: 30,
          scale: 0.95
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          scale: 1 
        }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <Card 
          className="group h-full bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,186,255,0.2)] overflow-hidden flex flex-col"
        >
          {/* Project Image Container */}
          <div className="relative h-56 w-full overflow-hidden" style={{ transform: "translateZ(20px)" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            <motion.img 
              src={project.image} 
              alt={project.title}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error(`Failed to load image: ${project.image}`);
                target.src = "/placeholder.svg"; // Fallback to public placeholder
              } }
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              initial={{ opacity: 0 }}
              onLoad={(e) => {
                (e.target as HTMLImageElement).style.opacity = "1";
              }}
              style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }}
            />
          </div>

          <CardHeader style={{ transform: "translateZ(30px)" }} className="relative z-10 flex-grow">
            <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
              {project.title}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4 relative z-10" style={{ transform: "translateZ(20px)" }}>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge 
                  key={i} 
                  variant="secondary" 
                  className="bg-primary/5 text-white/80 border-primary/10 text-xs px-2 py-0.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          
          <CardFooter className="gap-3 relative z-10" style={{ transform: "translateZ(40px)" }}>
            <Button 
              variant="default" 
              className="flex-1 gap-2 bg-primary/90 hover:bg-primary shadow-lg hover:shadow-primary/20 transition-all duration-300"
              onClick={() => {
                const url = project.liveUrl && project.liveUrl !== '#' 
                  ? project.liveUrl 
                  : (project.testCaseUrl === '#' ? project.githubUrl : project.testCaseUrl);
                if (url !== '#') window.open(url, '_blank');
              }}
              disabled={project.liveUrl === '#' && project.testCaseUrl === '#' && project.githubUrl === '#'}
            >
              {project.liveUrl && project.liveUrl !== '#' ? (
                <>
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </>
              ) : project.testCaseUrl === '#' ? (
                <>
                  <ExternalLink className="w-4 h-4" />
                  View on Github
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  View Test Cases
                </>
              )}
            </Button>
            
            {project.testCaseUrl !== '#' && (
              <Button 
                variant="outline" 
                size="icon"
                className="border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                onClick={() => project.githubUrl !== '#' && window.open(project.githubUrl, '_blank')}
                disabled={project.githubUrl === '#'}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </CardFooter>

          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </Card>
      </motion.div>
    </div>
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
