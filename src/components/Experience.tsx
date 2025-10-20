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
    company: "Absolute Training and Consulting LLC",
    role: "Software Quality Assurance Engineer",
    type: "Full-time",
    location: "United Arab Emirates",
    duration: "Jan '25 – Present",
    responsibilities: [
      "Ensured 99% defect detection before production deployment through rigorous testing practices.",
      "Developed and executed manual and automated test cases for mobile and web applications.",
      "Managed QA documentation such as test plans, defect reports, and UAT summaries.",
      "Worked closely with development and product teams to prioritize and resolve issues, enhancing product quality and user satisfaction.",
    ],
  },
  {
    company: "Infix Systems",
    role: "Flutter Developer",
    type: "Part-time",
    location: "Islamabad, Pakistan",
    duration: "Mar '25 – May '25",
    responsibilities: [
      "Supported the debugging and optimization of existing applications to improve overall efficiency.",
      "Designed and built engaging frontend components for Flutter-based mobile projects.",
      "Worked closely with team members to enhance functionality and maintain high-quality standards across applications.",
    ],
  },
  {
    company: "Dexplat Technologies",
    role: "Flutter Developer",
    type: "Full-time",
    location: "Islamabad, Pakistan",
    duration: "May '24 – Dec '24",
    responsibilities: [
      "Developed and implemented frontend features by translating UI/UX designs into responsive Flutter code.",
      "Debugged and optimized application performance, ensuring smooth and efficient operation across devices",
      "Integrated backend services and third-party REST APIs to enhance app functionality and user experience.",
      "Managed Git branches, pull requests, and issue tracking, maintaining a structured version control workflow.",
      "Collaborated with cross-functional teams to plan and develop new features aligned with project requirements.",
      "Engaged in direct communication with clients to gather feedback, clarify requirements, and ensure satisfaction with deliverables.",
    ],
  },
  {
    company: "Sixlogics",
    role: "Jr. Flutter Developer",
    type: "Full-time",
    location: "Lahore, Pakistan",
    duration: "Mar '24 – May '24",
    responsibilities: [
      "Collaborated with team members to design, develop, and deploy new features.",
      "Managed online and offline application states to ensure seamless user experiences.",
      "Integrated backend services and REST APIs for data synchronization and enhanced functionality.",
      "Implemented version control workflows using Git for efficient collaboration and code management.",
      "Maintained direct communication with clients to gather requirements and provide project updates.",
    ],
  },
  {
    company: "Dexplat Technologies",
    role: "Associate Software Engineer",
    type: "Full-time",
    location: "Islamabad, Pakistan",
    duration: "Aug '22 – June '23",
    responsibilities: [
      "Maintained Git workflow and version control for efficient collaboration and deployment.",
      "Integrated backend services and third-party APIs for enhanced application capabilities.",
      "Communicated directly with clients to gather requirements and provide technical support.",
      "Debugged issues, optimized app performance, and ensured smooth functionality across devices.",
      "Developed responsive frontend features by translating UI/UX designs into functional Flutter components.",
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
                      <span className="font-semibold text-foreground">
                        {exp.role}
                      </span>
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
