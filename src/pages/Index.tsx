import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      {/* Animated background */}
      <div className="animated-bg">
        <div className="neon-orb neon-orb-1"></div>
        <div className="neon-orb neon-orb-2"></div>
        <div className="neon-orb neon-orb-3"></div>
        
        {/* Animated lines */}
        <div className="animated-line line-1"></div>
        <div className="animated-line line-2"></div>
        <div className="animated-line line-3"></div>
        <div className="animated-line line-4"></div>
        
        {/* Stars */}
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="py-6 px-4 border-t border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto text-center text-muted-foreground">
            <p>© 2025 Saif Waheed Raja. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
