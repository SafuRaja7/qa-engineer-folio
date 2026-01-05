import { CheckCircle2, Target, Users, FileText, Code, Bug } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

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
          rotateY: 1200, // 5 full fast spins
          scale: 0.5,
          filter: "blur(8px)" 
        }}
        whileInView={{ 
          opacity: 1, 
          rotateY: 0, 
          scale: 1,
          filter: "blur(0px)" 
        }}
        viewport={{ once: true }}
        transition={{ 
          duration: .5, 
          delay: index * 0.1, 
          ease: [0.23, 1, 0.32, 1] // Custom ease for smooth deceleration
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary shadow-card hover:shadow-glow transition-all duration-300 relative overflow-hidden"
      >
        {/* Soft Glow Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="relative z-10 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        >
          <skill.icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 
          style={{ transform: "translateZ(30px)" }}
          className="relative z-10 text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors"
        >
          {skill.title}
        </h3>
        
        <p 
          style={{ transform: "translateZ(20px)" }}
          className="relative z-10 text-muted-foreground leading-relaxed"
        >
          {skill.description}
        </p>
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background overflow-hidden relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Core Competencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise in software quality assurance and testing
            methodologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
