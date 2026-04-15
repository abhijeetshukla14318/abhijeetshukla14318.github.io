import { motion, useScroll, useTransform } from "motion/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Github, FileText, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const roles = ["Fintech Analyst", "Data Analyst", "BI Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Transform scroll position to grayscale percentage (0% at top, 100% after 400px scroll)
  const grayscaleValue = useTransform(scrollY, [0, 400], [0, 100]);
  const filter = useTransform(grayscaleValue, (v) => `grayscale(${v}%)`);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight">
            Hi, I'm <span className="text-primary">Abhijeet Shukla</span>
          </h1>
          
          <div className="h-12 md:h-16 mb-8">
            <motion.p
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-2xl md:text-4xl font-medium text-muted-foreground"
            >
              {roles[roleIndex]}
            </motion.p>
          </div>

          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Bridging the gap between financial history and modern data science. I don’t just analyze numbers; I decode the patterns of capital to build resilient, data-driven fintech solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative z-10 w-full max-w-md aspect-square overflow-hidden rounded-3xl shadow-xl">
            <motion.img
              src="/profile.jpg"
              alt="Abhijeet Shukla"
              loading="eager"
              className="w-full h-full object-cover transition-all duration-700"
              style={{
                filter
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = "w-full h-full flex items-center justify-center bg-muted text-primary text-6xl font-bold";
                  fallback.innerText = "AS";
                  parent.appendChild(fallback);
                }
              }}
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
