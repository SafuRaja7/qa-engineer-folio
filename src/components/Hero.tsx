import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, Github } from "lucide-react";
import { FaMedium } from "react-icons/fa";
import profilePhoto from "@/assets/me.jpeg";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = ["QA Automation Engineer", "Software Developer"];

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

  // Mouse tilt effect for profile photo
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-card/50 pt-24 overflow-hidden"
    >
      {/* Background 3D Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container max-w-6xl">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-semibold text-lg"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl font-bold text-foreground"
              >
                Saif Waheed Raja
              </motion.h1>
              <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-primary bg-clip-text text-transparent min-h-[3rem] flex items-center">
                {displayedText}
                <span className="animate-pulse ml-1">|</span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Passionate QA Automation Engineer transitioning from a software
              development background. With over 2 years of experience in web and
              mobile development, I now focus on building robust automated test
              frameworks, improving test coverage, and enhancing product
              reliability using tools like Playwright, Selenium, and Cypress.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-2 sm:gap-4 pt-4"
            >
              <a href="mailto:saifuraja7@gmail.com">
                <Button size="sm" className="gap-2 sm:size-lg hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
              </a>

              <Button
                size="sm"
                variant="outline"
                className="gap-2 sm:size-lg hover:scale-105 transition-transform"
                onClick={() => {
                  const section = document.getElementById("projects");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              {[
                { href: "https://www.linkedin.com/in/safuraja7/", icon: Linkedin },
                { href: "https://github.com/SafuRaja7", icon: Github },
                { href: "https://medium.com/@safuraja7", icon: FaMedium },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg bg-card hover:bg-accent transition-colors duration-300 border border-border hover:border-primary"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
              rotateX,
              rotateY,
            }}
            className="relative cursor-pointer"
          >
            <motion.div
              style={{
                transformStyle: "preserve-3d",
                translateZ: 50,
              }}
              className="relative z-10"
            >
              <img
                src={profilePhoto}
                alt="Saif Waheed Raja - QA Engineer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-glow border-4 border-card"
              />
            </motion.div>
            <div className="absolute top-4 left-4 w-full h-full bg-gradient-primary rounded-2xl -z-10 blur-2xl opacity-20"></div>
            
            {/* 3D Floating Badges (Optional but adds cool factor) */}
            <motion.div
              style={{ translateZ: 100 }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 p-4 bg-card rounded-xl border border-border shadow-xl hidden md:block"
            >
              <p className="text-primary font-bold">QA Automation Engineer</p>
            </motion.div>

            <motion.div
              style={{ translateZ: 100 }}
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 p-4 bg-card rounded-xl border border-border shadow-xl hidden md:block"
            >
              <p className="text-secondary font-bold">Software Developer</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
