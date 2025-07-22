import { useState, useRef, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Play,
  Sparkles,
  Zap,
  Code,
  Eye,
  Heart,
  Calendar,
  Tag
} from "lucide-react";
import { projectLinks, socialLinks } from "@/utils/navigation";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  featured: boolean;
  status: "completed" | "in-progress" | "upcoming";
  year: string;
  likes: number;
  views: number;
  demoUrl?: string;
  githubUrl?: string;
  tech: string[];
}

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
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

  const projects: Project[] = [
    {
      id: "1",
      title: "Online Course Enrollment System",
      description: "A platform to manage course registration with scheduling and limits.",
      longDescription:
        "Developed using Java, Spring Boot, and Thymeleaf. Supports auto-cancellation of inactive courses and conflict resolution. Real-time notifications included.",
      image: "https://source.unsplash.com/600x400/?university,code",
      tags: ["Java", "Spring Boot", "MVC"],
      category: "web",
      featured: true,
      status: "completed",
      year: "2025",
      likes: 42,
      views: 178,
      tech: ["Java", "Spring Boot", "Thymeleaf", "Git"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "2",
      title: "Banking Management System",
      description: "Desktop application for account and transaction management.",
      longDescription:
        "Built using Java and MySQL with JDBC. Supported reporting and version control. Used for mock financial account simulation.",
      image: "https://source.unsplash.com/600x400/?bank,software",
      tags: ["Java", "MySQL", "JDBC"],
      category: "desktop",
      featured: true,
      status: "completed",
      year: "2024",
      likes: 33,
      views: 134,
      tech: ["Java", "JDBC", "MySQL", "Git"],
      githubUrl: "#"
    },
    {
      id: "3",
      title: "School Management System (Mobile)",
      description: "Android app for managing student and teacher records.",
      longDescription:
        "Offline-capable mobile app using Java and SQLite for schools. Features login roles, attendance tracking, and schedule management.",
      image: "https://source.unsplash.com/600x400/?school,mobile",
      tags: ["Android", "Java", "SQLite"],
      category: "mobile",
      featured: false,
      status: "completed",
      year: "2023",
      likes: 28,
      views: 120,
      tech: ["Java", "Android Studio", "SQLite", "XML"],
      githubUrl: "#"
    },
    {
      id: "4",
      title: "Database Management System",
      description: "Relational database with player stats and match history.",
      longDescription:
        "Designed an optimized SQL database for storing and retrieving sports data. Included ranking logic and stored procedures.",
      image: "https://source.unsplash.com/600x400/?database,sql",
      tags: ["MySQL", "SQL"],
      category: "web",
      featured: false,
      status: "completed",
      year: "2024",
      likes: 18,
      views: 90,
      tech: ["MySQL", "SQL", "Git"],
      githubUrl: "#"
    },
    {
      id: "5",
      title: "E-commerce WordPress Website",
      description: "Fully functional online store built using WordPress.",
      longDescription:
        "Built a real-world e-commerce site with a shopping cart, user authentication, and integrated payment system using WordPress plugins.",
      image: "https://source.unsplash.com/600x400/?ecommerce,wordpress",
      tags: ["WordPress", "HTML", "CSS"],
      category: "web",
      featured: false,
      status: "completed",
      year: "2023",
      likes: 21,
      views: 104,
      tech: ["WordPress", "WooCommerce", "HTML", "CSS"],
      demoUrl: "#"
    },
    {
      id: "6",
      title: "AI Course Project",
      description: "Basic AI algorithms implemented in Python during NAVTTC course.",
      longDescription:
        "Implemented classic AI algorithms and logic using Python as part of the AI foundational course. Covered search, logic, and intro to neural networks.",
      image: "https://source.unsplash.com/600x400/?ai,python",
      tags: ["AI", "Python", "NAVTTC"],
      category: "ai",
      featured: false,
      status: "in-progress",
      year: "2024",
      likes: 16,
      views: 85,
      tech: ["Python", "AI", "Logic", "Neural Basics"],
      githubUrl: "#"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "web", name: "Web Apps", count: projects.filter(p => p.category === "web").length },
    { id: "mobile", name: "Mobile", count: projects.filter(p => p.category === "mobile").length },
    { id: "desktop", name: "Desktop", count: projects.filter(p => p.category === "desktop").length },
    { id: "ai", name: "AI/ML", count: projects.filter(p => p.category === "ai").length }
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "primary";
      case "in-progress":
        return "secondary";
      case "upcoming":
        return "accent";
      default:
        return "muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Sparkles className="w-4 h-4" />;
      case "in-progress":
        return <Zap className="w-4 h-4" />;
      case "upcoming":
        return <Calendar className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Featured</span>{" "}
            <span className="text-foreground">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of academic and real-world development projects covering backend, mobile, web, and AI.
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

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card-cyber group hover:scale-105 transition-all duration-300 ease-out cursor-pointer ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-40 overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>

              <h4 className="text-lg font-semibold mb-2 text-gradient-primary">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 border border-primary/30 text-xs rounded-full text-primary"
                  >
                    <Tag className="w-3 h-3 mr-1 inline" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {project.demoUrl && (
                    <button
                      className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </button>
                  )}
                  {project.githubUrl && (
                    <button
                      className="p-2 bg-secondary/10 hover:bg-secondary/20 rounded-lg"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 text-secondary" />
                    </button>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{project.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="card-cyber max-w-2xl mx-auto">
            <h4 className="text-2xl font-semibold mb-4 text-gradient-accent">
              Want to See More?
            </h4>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub to explore additional code, experiments, and collaborative work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="btn-cyber-primary"
                onClick={() => window.open(socialLinks.github, "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </button>
              <button
                className="btn-neon"
                onClick={() => window.open(projectLinks.live, "_blank")}
              >
                <Eye className="w-5 h-5 mr-2" />
                Full Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
