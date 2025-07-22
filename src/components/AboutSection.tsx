import { useState, useRef, useEffect } from "react";
import { User, Calendar, MapPin, Heart, Coffee, Code2, Download, Mail, Github, Linkedin } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const timelineItems = [
    {
      year: "2025",
      title: "Online Course Enrollment System",
      description: "Developed a course registration system with conflict resolution and auto-cancellation features.",
      icon: <Code2 className="w-5 h-5" />,
      color: "primary"
    },
    {
      year: "2024",
      title: "Database & Banking Projects",
      description: "Built a relational DBMS and a banking system with JDBC integration and clean-code practices.",
      icon: <Coffee className="w-5 h-5" />,
      color: "secondary"
    },
    {
      year: "2023",
      title: "Mobile School Management App",
      description: "Created an Android app for student data, attendance, and login roles using SQLite.",
      icon: <Heart className="w-5 h-5" />,
      color: "accent"
    },
    {
      year: "2021",
      title: "Coding Journey Begins",
      description: "Started learning programming, exploring Java, Python, and database concepts.",
      icon: <User className="w-5 h-5" />,
      color: "primary"
    }
  ];

  const stats = [
    { label: "Projects Built", value: "5+", icon: <Code2 className="w-6 h-6" /> },
    { label: "Coffee Cups", value: "∞", icon: <Coffee className="w-6 h-6" /> },
    { label: "Years Coding", value: "3+", icon: <Calendar className="w-6 h-6" /> },
    { label: "Lines of Code", value: "50k+", icon: <MapPin className="w-6 h-6" /> }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <div 
                className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  transform: 'rotate(-5deg)',
                  animation: 'float-animation 6s ease-in-out infinite'
                }}
              >
                <User className="w-20 h-20 md:w-24 md:h-24 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full float-animation glow-secondary"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-accent rounded-full float-animation float-delay-1 glow-accent"></div>
              <div className="absolute top-1/2 -right-4 w-3 h-3 bg-primary rounded-full float-animation float-delay-2 glow-primary"></div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="card-cyber max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gradient-primary mb-2">Muhammad Ahsan Khan</h3>
              <p className="text-xl text-secondary mb-4">Software Engineering Student & Backend Developer</p>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Backend-focused developer with hands-on experience in Java, Spring Boot, and database systems.
                Passionate about building practical software solutions and constantly learning system architecture and clean coding.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  Karachi, PK
                </span>
                <span className="flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  mahsaankhan356@gmail.com
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Muhammad_Ahsan_Khan_Resume.pdf';
                    link.download = 'Muhammad_Ahsan_Khan_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="btn-cyber-primary group"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download CV
                </button>
                <a href="https://github.com/Ahsankhan-creator" target="_blank" rel="noopener noreferrer" className="btn-cyber-secondary">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-cyber-secondary">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I enjoy building real-world software and continually improving my skills in Java, backend systems, and scalable architecture.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`card-cyber text-center group hover:scale-105 transition-all duration-300 ease-out ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gradient-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient-secondary">
            My Journey
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="card-neon group hover:scale-105 transition-all duration-300 ease-out">
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-lg bg-${item.color}/10 border border-${item.color}/30 mr-3 text-${item.color}`}>
                        {item.icon}
                      </div>
                      <span className="text-sm font-mono text-muted-foreground">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gradient-primary">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-4 h-4 rounded-full bg-${item.color} glow-${item.color} border-2 border-background`}></div>
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-20 text-center">
          <div className="card-cyber max-w-2xl mx-auto">
            <h4 className="text-2xl font-semibold mb-4 text-gradient-accent">
              Beyond Code
            </h4>
            <p className="text-muted-foreground mb-6">
              Outside of coding, I enjoy exploring AI, learning new technologies, and collaborating on practical software solutions.
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary">
                💻 Backend Developer
              </span>
              <span className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary">
                ☕ Debugging Pro
              </span>
              <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent">
                🎯 Project Builder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
