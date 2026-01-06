import { CheckCircle2, Target, Users, FileText, Code, Bug, Database, Wrench, Layout, Smartphone, Layers } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const qaSkills = [
  {
    icon: Smartphone,
    title: "Flutter App Development",
    description:
      "Building cross-platform mobile applications using Flutter and Dart",
  },
  {
    icon: Layers,
    title: "State Management & Architecture",
    description:
      "Implementing clean architecture with Bloc, Provider, and MVVM patterns",
  },
  {
    icon: Bug,
    title: "Flutter Testing & Debugging",
    description:
      "Writing unit, widget, and integration tests and debugging Flutter apps effectively",
  },
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
    icon: Users,
    title: "Collaboration & Reporting",
    description:
      "Working closely with developers and stakeholders to ensure release quality",
  },
];

const SkillCard = ({ skill, index, type = "qa" }: { skill: any; index: number; type?: "qa" | "dev" }) => {
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

  const devIcons: Record<string, any> = {
    Frontend: Layout,
    Backend: Database,
    'Tools & Others': Wrench,
  };

  const Icon = type === "dev" ? (devIcons[skill.title] || Code) : (skill.icon || Code);

  return (
    <div className="perspective-1000">
      <motion.div
        initial={{ 
          opacity: 0, 
          rotateY: 1200, 
          scale: 0.2,
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
          ease: [1, 0, 1, 1]
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`group p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/50 shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative overflow-hidden ${type === 'qa' ? 'h-full' : ''}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/10"
        >
          <Icon className="w-7 h-7 text-primary" />
        </div>
        
        <h3 
          style={{ transform: "translateZ(40px)" }}
          className="relative z-10 text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
        >
          {skill.title}
        </h3>
        
        {type === "qa" ? (
          <p 
            style={{ transform: "translateZ(20px)" }}
            className="relative z-10 text-muted-foreground leading-relaxed"
          >
            {skill.description}
          </p>
        ) : (
          <div 
            style={{ transform: "translateZ(30px)" }}
            className="relative z-10 space-y-6"
          >
            {skill.skills.map((s: any, idx: number) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-foreground/80">{s.name}</span>
                  <span className="text-primary font-bold">{s.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1 + idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-primary-foreground rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export function Skills() {


  const technologies = [
    'Flutter', 'Dart', 'Python', 'Git', 'REST APIs', 'Figma', 'Cypress', 'Salenium', 'Playwright'
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* QA Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-primary mb-6">
            Core Competencies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized expertise in software quality assurance and testing methodologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {qaSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} type="qa" />
          ))}
        </div>

      


        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-12 border-t border-border/50"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Technologies & Frameworks</h3>
            <p className="text-muted-foreground">Additional tools I work with daily</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.15)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="px-6 py-2.5 rounded-full bg-primary/5 border border-primary/20 text-foreground font-medium backdrop-blur-sm hover:border-primary/50 hover:shadow-glow transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

