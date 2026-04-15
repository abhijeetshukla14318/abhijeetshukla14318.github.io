import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Briefcase, Presentation } from "lucide-react";

const achievements = [
  {
    title: "Graduate Cert: Global Business Management",
    organization: "Conestoga College",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    description: "Specialized in strategic management and international business operations.",
  },
  {
    title: "6-Month Internship: Data Analytics",
    organization: "Aivariant",
    icon: <Briefcase className="w-8 h-8 text-accent" />,
    description: "Hands-on experience in data cleaning, exploratory data analysis, and predictive modeling.",
  },
  {
    title: "Workshop: AI-Powered PPT Generation",
    organization: "be10x",
    icon: <Presentation className="w-8 h-8 text-primary" />,
    description: "Mastered advanced AI tools for automated presentation design and data storytelling.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Milestones</h2>
          <h3 className="text-4xl font-bold tracking-tight">Key <span className="text-accent">Achievements</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-background border-border hover:border-primary/50 transition-all group h-full">
                <CardContent className="p-8">
                  <div className="mb-6 p-3 rounded-xl bg-muted w-fit group-hover:glow-primary transition-all">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <div className="text-sm font-bold text-accent uppercase tracking-widest mb-4">{item.organization}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
