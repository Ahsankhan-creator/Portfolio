import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import MobileMenu from "@/components/MobileMenu";
import { handleSmoothScroll, smoothScrollTo } from "@/utils/navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="text-xl font-bold text-gradient-primary cursor-pointer"
              onClick={() => smoothScrollTo('hero')}
            >
              &lt;Portfolio/&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')} className="text-sm font-medium hover:text-primary transition-colors">Home</a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className="text-sm font-medium hover:text-primary transition-colors">Skills</a>
              <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className="hidden md:block btn-neon"
                onClick={() => smoothScrollTo('contact')}
              >
                Let's Talk
              </button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            Built with ❤️ using React, TypeScript, and AI-enhanced development
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 AI-Enhanced Digital Playground. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
