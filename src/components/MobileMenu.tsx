import { useState } from "react";
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react";
import { handleSmoothScroll, smoothScrollTo } from "@/utils/navigation";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "hero", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const handleMenuClick = (sectionId: string) => {
    smoothScrollTo(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden btn-neon p-2"
        onClick={() => setIsOpen(true)}
        aria-label="Open mobile menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 bg-card/95 backdrop-blur-md border-l border-border">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-gradient-primary">Navigation</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="p-6">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuClick(item.id)}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors group text-left"
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <button
                  onClick={() => {
                    smoothScrollTo('contact');
                    setIsOpen(false);
                  }}
                  className="w-full btn-cyber-primary"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;