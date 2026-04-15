import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BarChart, ShoppingCart, GraduationCap, CreditCard } from "lucide-react";

const projects = [
  {
    title: "Customer Shopping Behavior Analysis",
    category: "Consumer Analytics",
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    description: "A deep-dive analysis into consumer patterns, leveraging data to identify key purchase drivers and demographic trends. Developed actionable insights to optimize marketing strategies and enhance customer retention.",
    tags: ["Python", "SQL", "Predictive Modeling"],
    metric: "73% Conversion",
    link: "https://github.com/abhijeetshukla14318/Customer-Shopping-Behavior-Analysis"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Analytics Lab</h2>
            <h3 className="text-4xl font-bold tracking-tight">Featured <span className="text-accent">Project</span></h3>
          </div>
          <p className="text-muted-foreground max-w-md">
            A deep-dive analysis into consumer patterns, leveraging data to identify key purchase drivers and demographic trends.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-muted/30 border-border hover:border-primary/50 transition-all group overflow-hidden h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
                  <div className="p-3 rounded-xl bg-background group-hover:glow-primary transition-all">
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="border-accent text-accent font-bold">
                    {project.metric}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{project.category}</div>
                  <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-background px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-bold text-foreground hover:text-primary transition-colors"
                  >
                    View Case Study <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
