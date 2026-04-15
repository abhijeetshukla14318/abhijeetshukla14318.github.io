import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "State Street",
    role: "Fintech Analyst / Data Analyst",
    period: "2021 - 2023",
    description: "Managing high-volume analytics for global financial transactions. Focused on fraud alert reduction and payment success rate optimization.",
    achievements: [
      "Monitored 1M+ daily transactions, identifying patterns to improve UPI success rates.",
      "Reduced fraud alerts by 25% through advanced data modeling and risk assessment.",
      "Developed automated BI dashboards for executive reporting using Power BI and SQL.",
    ],
  },
  {
    company: "Hexaware Technologies",
    role: "Business Systems Analyst",
    period: "2019 - 2021",
    description: "Bridged the gap between business requirements and technical implementation for enterprise clients.",
    achievements: [
      "Streamlined ETL pipelines for large-scale data migration projects.",
      "Collaborated with cross-functional teams to implement Agile methodologies.",
      "Conducted deep-dive analysis on customer shopping behavior, leading to a 73% non-subscriber conversion strategy.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Journey</h2>
          <h3 className="text-4xl font-bold tracking-tight">Professional <span className="text-accent">Timeline</span></h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-border last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary glow-primary" />
              
              <div className="bg-background p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">{exp.role}</h4>
                    <div className="flex items-center text-primary font-semibold mt-1">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground bg-muted px-3 py-1 rounded-full text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <ul className="space-y-3">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="flex items-start">
                      <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
