import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="neon-orb neon-orb-1"></div>
        <div className="neon-orb neon-orb-2"></div>
        <div className="neon-orb neon-orb-3"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="py-6 px-4 border-t border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto text-center text-muted-foreground">
            <p>© 2025 Alex Thompson. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
