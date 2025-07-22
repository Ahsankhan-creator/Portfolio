import { useState, useRef, useEffect } from "react";
import {
  Cpu,
  Smartphone,
  Terminal,
  Database,
  Globe,
  Cloud,
  Layers,
  Brain,
  Palette
} from "lucide-react";
import { learningLinks } from "@/utils/navigation";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
  color: string;
  description: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    // Backend
    {
      name: "Java",
      icon: <Terminal className="w-6 h-6" />,
      level: 90,
      category: "backend",
      color: "primary",
      description: "Core Java, OOP, JDBC, and multithreaded backend programming."
    },
    {
      name: "Spring Boot",
      icon: <Layers className="w-6 h-6" />,
      level: 80,
      category: "backend",
      color: "secondary",
      description: "Developed REST APIs, MVC apps, and service logic for enterprise systems."
    },

    // Database
    {
      name: "MySQL",
      icon: <Database className="w-6 h-6" />,
      level: 85,
      category: "database",
      color: "accent",
      description: "Designed and optimized relational schemas, queries, and stored procedures."
    },
    {
      name: "SQLite",
      icon: <Database className="w-6 h-6" />,
      level: 75,
      category: "database",
      color: "primary",
      description: "Used for mobile apps and local storage in Android Studio."
    },

    // Tools
    {
      name: "Git",
      icon: <Terminal className="w-6 h-6" />,
      level: 90,
      category: "tools",
      color: "secondary",
      description: "Version control with GitHub and Git CLI, including branching and merges."
    },
    {
      name: "Android Studio",
      icon: <Smartphone className="w-6 h-6" />,
      level: 80,
      category: "tools",
      color: "accent",
      description: "Built mobile apps using Java, XML layouts, SQLite, and emulators."
    },

    // Web
    {
      name: "HTML & CSS",
      icon: <Globe className="w-6 h-6" />,
      level: 88,
      category: "web",
      color: "primary",
      description: "Responsive layout design and UI structuring using modern HTML5/CSS3."
    },
    {
      name: "WordPress",
      icon: <Palette className="w-6 h-6" />,
      level: 80,
      category: "web",
      color: "secondary",
      description: "Built e-commerce sites using WooCommerce and page builders."
    },

    // AI
    {
      name: "Python (AI Course)",
      icon: <Cpu className="w-6 h-6" />,
      level: 70,
      category: "ai",
      color: "accent",
      description: "Implemented basic AI algorithms during NAVTTC Python course."
    }
  ];

  const categories = [
    { id: "all", name: "All Skills", count: skills.length },
    { id: "backend", name: "Backend", count: skills.filter((s) => s.category === "backend").length },
    { id: "database", name: "Database", count: skills.filter((s) => s.category === "database").length },
    { id: "tools", name: "Tools", count: skills.filter((s) => s.category === "tools").length },
    { id: "web", name: "Web", count: skills.filter((s) => s.category === "web").length },
    { id: "ai", name: "AI/ML", count: skills.filter((s) => s.category === "ai").length }
  ];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Tech</span>{" "}
            <span className="text-foreground">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My toolbox includes backend development, database design, mobile apps, and more.
            Hover over a skill to see where I’ve used it.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-out ${
                activeCategory === category.id
                  ? "btn-cyber-primary"
                  : "btn-cyber-secondary"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs bg-muted/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`card-neon group cursor-pointer transform transition-all duration-300 ease-out hover:scale-105 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`text-${skill.color} mb-4 group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gradient-primary">{skill.name}</h3>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Proficiency</span>
                  <span className="text-sm font-mono text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted/20 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r from-${skill.color} to-${skill.color}/60 transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  hoveredSkill === skill.name ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-muted-foreground border-t border-border pt-3">
                  {skill.description}
                </p>
              </div>

              <div className="absolute top-4 right-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full bg-${skill.color}/10 border border-${skill.color}/30 text-${skill.color} capitalize`}
                >
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-cyber max-w-2xl mx-auto">
            <h4 className="text-2xl font-semibold mb-4 text-gradient-accent">Always Learning</h4>
            <p className="text-muted-foreground mb-6">
              Currently enhancing my skills in DevOps tools, Spring Security, and advanced database optimization.
            </p>
            <button
              className="btn-neon"
              onClick={() => window.open(learningLinks.roadmap, "_blank")}
            >
              <Brain className="w-5 h-5 mr-2" />
              View Learning Path
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
