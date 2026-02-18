import { Code, Database, Layout, Smartphone, Layers, Boxes, Globe, Zap, Settings, Github } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const devSkills = [
  {
    icon: Smartphone,
    title: "Flutter App Development",
    description:
      "Expertise in building high-performance, cross-platform mobile applications using Flutter and Dart.",
  },
  {
    icon: Layers,
    title: "Architecture & State Management",
    description:
      "Implementing clean architecture with modern patterns like BLoC, Provider, and Riverpod.",
  },
  {
    icon: Boxes,
    title: "Performance Optimization",
    description:
      "Optimizing app rendering, memory usage, and build times for a smooth user experience.",
  },
  {
    icon: Layout,
    title: "UI/UX Implementation",
    description:
      "Translating complex Figma designs into pixel-perfect, responsive Flutter widgets.",
  },
  {
    icon: Globe,
    title: "API & Backend Integration",
    description:
      "Seamlessly integrating RESTful APIs, GraphQL, and cloud services like Firebase.",
  },
  {
    icon: Zap,
    title: "Feature Development",
    description:
      "Developing complex features including payments, real-time chats, and AI-powered tools.",
  },
  {
    icon: Settings,
    title: "CI/CD & DevOps",
    description:
      "Automating deployment pipelines using GitHub Actions, Codemagic, and Fastlane.",
  },
  {
    icon: Github,
    title: "Version Control",
    description:
      "Advanced Git workflows, code reviews, and maintaining scalable codebases.",
  },
];

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
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

  const Icon = skill.icon || Code;

  return (
    <div className="perspective-1000">
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 0.2,
          filter: "blur(8px)" 
        }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          filter: "blur(0px)" 
        }}
        viewport={{ once: true }}
        transition={{ 
          duration: .5, 
          ease: [1, 0, 1, 1]
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`group p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/50 shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative overflow-hidden h-full`}
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

export function Skills() {
  const technologies = [
    'Flutter', 'Dart', 'Python', 'Git', 'REST APIs', 'Firebase', 'Figma', 'GraphQL', 'Riverpod', 'BLoC'
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-primary mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized expertise in Flutter development, architecture, and building scalable mobile solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {devSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
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
                transition={{ duration: 0.3 }}
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
