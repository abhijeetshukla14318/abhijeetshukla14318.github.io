import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-bold tracking-tighter text-primary">
          AS<span className="text-foreground">.</span>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abhijeet Shukla. All rights reserved.
        </div>

        <div className="flex items-center space-x-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
