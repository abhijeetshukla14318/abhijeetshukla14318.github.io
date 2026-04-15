import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const technicalSkills = [
  { name: "Python", logo: "https://img.icons8.com/color/96/python--v1.png" },
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Tableau", logo: "https://www.vectorlogo.zone/logos/tableau/tableau-tile.svg" },
  { name: "Jupyter", logo: "https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg" },
  { name: "GitHub", logo: "https://img.icons8.com/color/96/github--v1.png" },
  { name: "Hive", logo: "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg" },
  { name: "AWS", logo: "https://img.icons8.com/color/96/amazon-web-services.png" },
  { name: "Excel", logo: "https://img.icons8.com/color/96/microsoft-excel-2019.png" },
];

const professionalSkills = [
  { name: "Fintech", logo: "https://img.icons8.com/color/96/bank.png" },
  { name: "Asset Servicing", logo: "https://img.icons8.com/color/96/safe.png" },
  { name: "Risk Indicators", logo: "https://img.icons8.com/color/96/high-risk.png" },
  { name: "Communication", logo: "https://img.icons8.com/color/96/conference-call.png" },
  { name: "Leadership", logo: "https://img.icons8.com/color/96/leadership.png" },
  { name: "Mentorship", logo: "https://img.icons8.com/color/96/teacher.png" },
  { name: "Project Mgmt", logo: "https://img.icons8.com/color/96/project.png" },
  { name: "Strategic Planning", logo: "https://img.icons8.com/fluency/96/strategy.png" },
  { name: "Supply Chain", logo: "https://img.icons8.com/fluency/96/supply-chain.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4"
          >
            Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold tracking-tight"
          >
            Technical & <span className="text-accent">Professional Skills</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical & Data Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-2xl font-bold border-l-4 border-primary pl-4 mb-6">Technical & Data Skills</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technicalSkills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-16 h-16 p-3 rounded-xl bg-background border border-border group-hover:border-primary/50 transition-all flex items-center justify-center mb-2 shadow-sm">
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      loading="lazy"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <span className="text-[10px] font-bold text-center uppercase tracking-tighter text-muted-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional & Leadership Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-2xl font-bold border-l-4 border-accent pl-4 mb-6">Professional & Leadership</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {professionalSkills.map((skill, i) => (
                <Card key={i} className="bg-background border-border hover:border-accent/50 transition-all group overflow-hidden">
                  <CardContent className="p-4 flex items-center gap-3">
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      loading="lazy"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain group-hover:rotate-12 transition-transform" 
                      referrerPolicy="no-referrer" 
                    />
                    <span className="text-xs font-bold uppercase tracking-tight leading-tight">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
