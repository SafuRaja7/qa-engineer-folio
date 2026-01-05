import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background overflow-hidden relative">
      <div className="container max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or quality assurance challenges
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-border hover:border-primary h-full">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "saifuraja7@gmail.com", href: "mailto:saifuraja7@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+92 (329) 0520230", href: "tel:+923290520230" },
                    { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-border hover:border-primary h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how I can help ensure the quality of your software products
                </p>
                
                <div className="space-y-3">
                  {[
                    { icon: Linkedin, label: "Connect on LinkedIn", onClick: () => window.open('https://linkedin.com/in/safuraja7', '_blank') },
                    { icon: Github, label: "View GitHub Profile", onClick: () => window.open('https://github.com/SafuRaja7', '_blank') },
                  ].map((btn, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Button 
                        className="w-full gap-2 justify-start hover:scale-[1.02] transition-transform" 
                        variant="outline"
                        onClick={btn.onClick}
                      >
                        <btn.icon className="w-5 h-5" />
                        {btn.label}
                      </Button>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      className="w-full mt-4 hover:scale-[1.02] transition-transform" 
                      size="lg"
                      onClick={() => window.location.href = 'mailto:saifuraja7@gmail.com'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
