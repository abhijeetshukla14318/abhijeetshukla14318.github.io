import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
              Bridging the gap between <span className="text-accent">Technical Data</span> and <span className="text-primary">Executive Decisions</span>.
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                My approach to data is fueled by a deep fascination with financial evolution. At State Street, I used advanced SQL (CTEs, window functions) to spot risk indicators early, cutting reporting turnaround by 35%. With a background from Conestoga College and IBM, I blend innovation with analytical stability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="bg-background border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="text-3xl font-bold text-primary mb-1">3.75</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-2">GPA (Business Analytics)</div>
                <div className="text-xs text-muted-foreground italic">Conestoga College</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="text-sm text-accent uppercase tracking-wider font-bold mb-1">Distinction</div>
                <div className="text-xs text-muted-foreground font-bold mb-2">Data Analyst Cert</div>
                <div className="text-xs text-muted-foreground italic">ExcelR Solutions</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="text-3xl font-bold text-accent mb-1">35%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-2">Faster Reporting</div>
                <div className="text-xs text-muted-foreground italic">State Street Impact</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="text-sm text-primary uppercase tracking-wider font-bold mb-1">IBM Certified</div>
                <div className="text-xs text-muted-foreground font-bold mb-2">Data Visualization</div>
                <div className="text-xs text-muted-foreground italic">Professional Credential</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
