import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Dream Internet Services",
    role: "Software Quality Assurance Engineer",
    type: "Full-time",
    location: "Gujar Khan, Pakistan",
    duration: "Jan '25 – Present",
    responsibilities: [
      "Ensured 99% defect detection before production release.",
      "Designed and executed comprehensive manual and automated test cases.",
      "Maintained QA Documentation including test plans, defect logs and UAT reports.",
      "Collaborated with developers and product owners to identify and resolve defects.",
    ],
  },
  {
    company: "Infix Systems",
    role: "Flutter Developer",
    type: "Part-time",
    location: "Islamabad, Pakistan",
    duration: "Mar '25 – May '25",
    responsibilities: [
      "Assisted in debugging existing applications.",
      "Developed unique frontend features in Flutter projects.",
      "Collaborated with teams to enhance application functionality.",
    ],
  },
  {
    company: "Dexplat Technologies",
    role: "Flutter Developer",
    type: "Full-time",
    location: "Islamabad, Pakistan",
    duration: "May '24 – Dec '24",
    responsibilities: [
      "Translated UI/UX into Flutter code.",
      "Integrated backend and third-party REST APIs.",
      "Debugged and optimized application performance.",
      "Managed Git branches, pull requests, and issue tracking.",
      "Collaborated with team members for feature development.",
    ],
  },
  {
    company: "Sixlogics",
    role: "Jr. Flutter Developer",
    type: "Full-time",
    location: "Lahore, Pakistan",
    duration: "Mar '24 – May '24",
    responsibilities: [
      "Version management with Git.",
      "Managed online/offline app state.",
      "Integrated backend services and REST APIs.",
      "Worked with team members on new features.",
      "Maintained regular communication with clients.",
    ],
  },
  {
    company: "Dexplat Technologies",
    role: "Associate Software Engineer",
    type: "Full-time",
    location: "Islamabad, Pakistan",
    duration: "Aug '22 – June '23",
    responsibilities: [
      "Direct communication with clients.",
      "Debugged and optimized performance.",
      "Integrated backend and third party APIs.",
      "Maintained Git workflow and version control.",
      "Developed frontend features by translating UI/UX to Flutter.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
          EXPERIENCE
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-semibold text-foreground">{exp.role}</span>
                      <span className="text-sm px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                    <div className="flex items-center gap-2 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5">•</span>
                      <span className="flex-1">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
