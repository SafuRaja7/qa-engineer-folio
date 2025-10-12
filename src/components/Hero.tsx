import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    "QA Automation Engineer",
    "Software Developer",
    
  ];

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        } else {
          // Move to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-subtle pt-24">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Saif Waheed Raja
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-primary bg-clip-text text-transparent min-h-[3rem] flex items-center">
                {displayedText}
                <span className="animate-pulse ml-1">|</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
            Passionate QA Automation Engineer transitioning from a software development background. With over 2 years of experience in web and mobile development, I now focus on building robust automated test frameworks, improving test coverage, and enhancing product reliability using tools like Playwright, Selenium, and Cypress.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-accent transition-colors duration-300 border border-border hover:border-primary"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-accent transition-colors duration-300 border border-border hover:border-primary"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img 
                src={profilePhoto} 
                alt="Saif Waheed Raja - QA Engineer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-glow border-4 border-card"
              />
            </div>
            <div className="absolute top-4 left-4 w-full h-full bg-gradient-primary rounded-2xl -z-10 blur-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
