import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-6 px-4 border-t border-border bg-card">
        <div className="container max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Alex Thompson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
