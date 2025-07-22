import { useState, useEffect } from "react";
import { ChevronDown, Sparkles, Code, Brain, Rocket } from "lucide-react";
import { smoothScrollTo } from "@/utils/navigation";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    "Java & Spring Boot Enthusiast.",
    "Backend Developer & Problem Solver.",
    "Crafting Scalable Systems.",
    "Code. Build. Improve."
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < texts[textIndex].length) {
          setCurrentText(texts[textIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(texts[textIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full float-animation glow-primary"></div>
        <div className="absolute top-32 right-32 w-6 h-6 bg-secondary rounded-full float-animation float-delay-1 glow-secondary"></div>
        <div className="absolute bottom-40 left-40 w-8 h-8 bg-accent rounded-full float-animation float-delay-2 glow-accent"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-primary rounded-full float-animation float-delay-3 glow-primary"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/3 left-10 w-16 h-16 border-2 border-secondary/30 rotate-45 float-animation"></div>
        <div className="absolute bottom-1/3 right-10 w-20 h-20 border-2 border-accent/30 rounded-full float-animation float-delay-1"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Icon Animation */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="p-4 rounded-xl bg-card/30 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-all duration-300 ease-out glow-primary">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <div className="p-4 rounded-xl bg-card/30 backdrop-blur-md border border-secondary/20 hover:border-secondary/50 transition-all duration-300 ease-out glow-secondary">
              <Brain className="w-8 h-8 text-secondary" />
            </div>
            <div className="p-4 rounded-xl bg-card/30 backdrop-blur-md border border-accent/20 hover:border-accent/50 transition-all duration-300 ease-out glow-accent">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
          </div>

                    {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            <span className="text-gradient-primary">Muhammad Ahsan</span>
            <br />
            <span className="text-gradient-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Backend Developer</span>
          </h1>

          {/* Typewriter Effect */}
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-light text-foreground/90">
              {currentText}
              <span className="animate-pulse text-primary">|</span>
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button 
              className="btn-cyber-primary group"
              onClick={() => smoothScrollTo('projects')}
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Explore Projects
            </button>
            <button 
              className="btn-cyber-secondary group"
              onClick={() => smoothScrollTo('about')}
            >
              <Brain className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              About Me
            </button>
            <button 
              className="btn-neon group"
              onClick={() => smoothScrollTo('contact')}
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
              Let's Talk
            </button>
          </div>

          {/* Tech Preview */}
          <div className="mt-16 space-y-4">
            <p className="text-muted-foreground font-mono text-sm">
              Built with React • TypeScript • AI • ✨
            </p>
            <div className="flex justify-center space-x-2 text-xs font-mono text-muted-foreground">
              <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded">React</span>
              <span className="px-2 py-1 bg-secondary/10 border border-secondary/20 rounded">TypeScript</span>
              <span className="px-2 py-1 bg-accent/10 border border-accent/20 rounded">TailwindCSS</span>
              <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded">AI-Enhanced</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => smoothScrollTo('about')}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;