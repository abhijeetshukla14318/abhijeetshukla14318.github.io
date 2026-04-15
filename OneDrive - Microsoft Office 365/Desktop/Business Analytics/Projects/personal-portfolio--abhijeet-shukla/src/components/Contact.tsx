import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Basic whitespace validation
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields with valid content.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xnjlnzbn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setError(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (err) {
      setError("Oops! There was a problem submitting your form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</h2>
            <h3 className="text-4xl font-bold mb-8 tracking-tight">Let's solve the <span className="text-accent">Data Gap</span> together.</h3>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">LinkedIn</div>
                  <a 
                    href="www.linkedin.com/in/abhijeetshukla14318" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-accent transition-colors"
                  >
                    linkedin.com/in/shukla-abhijeet/
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">GitHub</div>
                  <a 
                    href="https://github.com/abhijeetshukla14318" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    github.com/abhijeetshukla14318
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-12 rounded-3xl border border-border shadow-2xl relative"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-background rounded-3xl z-10 p-8 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <Button 
                  variant="outline" 
                  className="mt-8"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </Button>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-destructive/10 text-destructive text-sm rounded-lg border border-destructive/20">
                  {error}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input name="name" required placeholder="John Doe" className="bg-muted/50 border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input name="email" type="email" required placeholder="john@example.com" className="bg-muted/50 border-border focus:border-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                <Input name="subject" required placeholder="Project Inquiry" className="bg-muted/50 border-border focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea name="message" required placeholder="How can I help you?" className="min-h-[150px] bg-muted/50 border-border focus:border-primary" />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 glow-primary disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
