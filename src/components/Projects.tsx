import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projects = [
   {
    title: "Deen – Your Daily Companion for Faith & Peace",
    description: "Deen is a Islamic mobile application designed to bring peace and spiritual connection into your daily life. With accurate prayer times, complete Quran access, and thoughtfully curated Islamic content, Deen helps you stay connected to your faith anytime, anywhere.",
    technologies: ["Flutter", "Dart", "REST API", "Figma"],
    image: '/deen.png',
    githubUrl: "https://github.com/SafuRaja7/Deen",
    testCaseUrl: "#"
  },
  {
      title: 'Multiplatform News App',
      description: 'Stay informed with our sleek, cross-platform News App built using Flutter and Dart. Designed for Android, iOS, Web, and Desktop, this app delivers real-time news from trusted sources in a fast, responsive, and beautifully crafted UI.',
      image: '/Newsy.png',
      technologies: ['Flutter', 'Dart','REST API'],
      githubUrl: 'https://github.com/SafuRaja7/News-App-Multi-Platform',
      testCaseUrl: '#'
    },
  {
    title: "Cypress E2E Automation",
    description: "Automated end-to-end test cases using Cypress covering user registration, login/logout flows, incorrect credential handling, and comprehensive user journey validation.",
    technologies: ["Cypress", "E2E Testing", "JavaScript", "Automation"],
    image: '/cypress.png',
    githubUrl: "https://github.com/SafuRaja7/AutomationExercise-Cypress",
    testCaseUrl: "https://github.com/SafuRaja7/qa-engineer-folio/blob/main/test_cases/tc_project_1.md"
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
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
          rotateY: 15, // Subtle initial Y rotation
          scale: 0.95
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          rotateY: 0,
          scale: 1 
        }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.15,
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
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                const url = project.testCaseUrl === '#' ? project.githubUrl : project.testCaseUrl;
                if (url !== '#') window.open(url, '_blank');
              }}
              disabled={project.testCaseUrl === '#' && project.githubUrl === '#'}
            >
              {project.testCaseUrl === '#' ? (
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
