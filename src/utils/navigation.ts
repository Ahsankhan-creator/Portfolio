// Navigation utilities for smooth scrolling and external links

export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  smoothScrollTo(targetId);
};

// Social media and external links
export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourhandle",
  email: "mailto:hello@yourportfolio.com",
  calendar: "https://calendly.com/yourhandle", // For scheduling calls
};

// Project links (replace with real URLs)
export const projectLinks = {
  demo: "https://your-demo-site.com",
  github: "https://github.com/yourusername/project-repo",
  live: "https://your-live-project.com",
};

// Download links
export const downloadLinks = {
  resume: "/resume.pdf", // Add your resume to public folder
  portfolio: "/portfolio.pdf",
};

// External learning resources
export const learningLinks = {
  roadmap: "https://roadmap.sh/full-stack",
  courses: "https://coursera.org",
  articles: "/blog", // Internal blog route
};