import { useState, useRef, useEffect } from "react";
import {
  Mail,
  MessageCircle,
  Send,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Clock,
  Zap,
  Heart,
  Coffee
} from "lucide-react";
import { socialLinks, downloadLinks } from "@/utils/navigation";
import { generateChatResponse } from "@/utils/chatResponses";
import { toast } from "sonner";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", message: "Hey there! 👋 I'm the AI version of myself. How can I help you today?" },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      };

      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form submitted:", formSubmission);
      setFormData({ name: "", email: "", message: "", subject: "" });

      toast.success("Message sent successfully! I'll get back to you within 24 hours. 🚀");
    } catch (error) {
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    setChatMessages(prev => [...prev, { type: "user", message: currentMessage }]);

    setTimeout(() => {
      const intelligentResponse = generateChatResponse(currentMessage);
      setChatMessages(prev => [...prev, { type: "bot", message: intelligentResponse }]);
    }, 1000);

    setCurrentMessage("");
  };

  const contactSocialLinks = [
    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: socialLinks.github, color: "primary" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: socialLinks.linkedin, color: "secondary" },
    ...(socialLinks.twitter ? [{ name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: socialLinks.twitter, color: "accent" }] : []),
    { name: "Email", icon: <Mail className="w-5 h-5" />, url: socialLinks.email, color: "primary" }
  ];

  const quickInfo = [
    { icon: <MapPin className="w-4 h-4" />, label: "Based in", value: "Karachi, Pakistan" },
    { icon: <Clock className="w-4 h-4" />, label: "Timezone", value: "UTC+5 (PKT)" },
    { icon: <Coffee className="w-4 h-4" />, label: "Coffee Level", value: "Always Full ☕" },
    { icon: <Zap className="w-4 h-4" />, label: "Response Time", value: "< 24 hours" }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Let's</span>{" "}
            <span className="text-foreground">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to chat about tech? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="card-neon">
              <h3 className="text-2xl font-semibold mb-6 text-gradient-primary">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="project">Project Collaboration</option>
                    <option value="freelance">Freelance Opportunity</option>
                    <option value="job">Job Opportunity</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg resize-none"
                    placeholder="Tell me about your project or idea..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cyber-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold mb-4 text-gradient-secondary">
                  Quick Info
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {quickInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="text-primary">{info.icon}</div>
                      <div>
                        <div className="text-xs text-muted-foreground">{info.label}</div>
                        <div className="text-sm font-medium">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="card-cyber">
              <h3 className="text-2xl font-semibold mb-6 text-gradient-accent flex items-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                Chat with AI Me
              </h3>

              <div className="bg-muted/10 rounded-lg p-4 h-64 overflow-y-auto scrollbar-cyber mb-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.type === 'user' ? 'bg-primary text-primary-foreground ml-4' : 'bg-card border border-border mr-4'}`}>
                      <div className="text-sm">{msg.message}</div>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleChatSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  className="flex-1 px-4 py-2 bg-input border border-border rounded-lg"
                  placeholder="Ask me anything..."
                />
                <button type="submit" className="btn-cyber-primary px-4">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="card-neon">
              <h3 className="text-xl font-semibold mb-6 text-gradient-primary">
                Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {contactSocialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-4 bg-${social.color}/10 border border-${social.color}/30 rounded-lg hover:bg-${social.color}/20 hover:scale-105 transition-all group flex items-center space-x-3`}>
                    <div className={`text-${social.color} group-hover:scale-110 transition-transform`}>
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Let's build something amazing together!
                </p>
                <div className="flex justify-center space-x-2">
                  <Heart className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-sm font-mono text-gradient-accent">
                    &lt;/code&gt; with ❤️
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="card-cyber max-w-2xl mx-auto">
            <h4 className="text-2xl font-semibold mb-4 text-gradient-primary">
              Ready to Start Something Great?
            </h4>
            <p className="text-muted-foreground mb-6">
              Whether it's a groundbreaking app, an AI-powered solution, or the next big thing in tech, 
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="btn-cyber-primary"
                onClick={() => window.open(socialLinks.calendar, "_blank")}
              >
                <Zap className="w-5 h-5 mr-2" />
                Schedule a Call
              </button>
              <button
                className="btn-neon"
                onClick={() => window.open(socialLinks.email, "_blank")}
              >
                <Coffee className="w-5 h-5 mr-2" />
                Grab Coffee & Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
