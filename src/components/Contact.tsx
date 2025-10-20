import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or quality assurance challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-border hover:border-primary animate-fade-in-up">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:saifuraja7@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      saifuraja7@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+923290520230" className="text-muted-foreground hover:text-primary transition-colors">
                      +92 (329) 0520230
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-border hover:border-primary animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help ensure the quality of your software products
              </p>
              
              <div className="space-y-3">
                <Button 
                  className="w-full gap-2 justify-start" 
                  variant="outline"
                  onClick={() => window.open('https://linkedin.com/in/safuraja7', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </Button>
                
                <Button 
                  className="w-full gap-2 justify-start" 
                  variant="outline"
                  onClick={() => window.open('https://github.com/SafuRaja7', '_blank')}
                >
                  <Github className="w-5 h-5" />
                  View GitHub Profile
                </Button>
                
                <Button 
                  className="w-full mt-4" 
                  size="lg"
                  onClick={() => window.location.href = 'mailto:saifuraja7@gmail.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
