// AI Chat Response System
export const generateChatResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  // Greeting responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    const greetings = [
      "Hello! 👋 Great to meet you! I'm excited to learn about your project ideas.",
      "Hey there! 🚀 Thanks for stopping by. What brings you to my digital playground today?",
      "Hi! ✨ Welcome to my portfolio. I'd love to hear about what you're working on!",
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Project-related queries
  if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('build')) {
    const projectResponses = [
      "I love working on innovative projects! Whether it's AI integration, web apps, or mobile solutions, I'm always excited about new challenges. What kind of project do you have in mind?",
      "That sounds interesting! I specialize in full-stack development with AI integration. Feel free to share more details through the contact form - I'd love to discuss your project!",
      "Projects are my passion! From React applications to AI-powered solutions, I enjoy bringing ideas to life. Let's connect and talk about your vision!",
    ];
    return projectResponses[Math.floor(Math.random() * projectResponses.length)];
  }

  // Skills/technology queries
  if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('technology') || lowerMessage.includes('react') || lowerMessage.includes('ai')) {
    const skillResponses = [
      "I work with React, TypeScript, AI APIs, and modern development tools. Check out my skills section above to see my full tech stack!",
      "My expertise spans frontend (React, TypeScript), backend (Node.js, Python), and AI integration (OpenAI, LangChain). What specific technologies are you interested in?",
      "I'm always learning new technologies! Currently focused on AI integration, modern React patterns, and cloud architecture. What tech stack interests you?",
    ];
    return skillResponses[Math.floor(Math.random() * skillResponses.length)];
  }

  // Collaboration/hiring queries
  if (lowerMessage.includes('hire') || lowerMessage.includes('collaborate') || lowerMessage.includes('work together') || lowerMessage.includes('opportunity')) {
    const collaborationResponses = [
      "I'm always open to exciting opportunities! Whether it's freelance work, full-time positions, or collaborations, let's discuss how we can work together. Reach out through the contact form!",
      "Collaboration opportunities are awesome! I'd love to learn more about what you're looking for. The best way to continue is through the contact form below.",
      "I'm definitely interested in new opportunities! Let's schedule a call to discuss your needs. You can reach me through the contact form or social links!",
    ];
    return collaborationResponses[Math.floor(Math.random() * collaborationResponses.length)];
  }

  // Learning/experience queries
  if (lowerMessage.includes('learn') || lowerMessage.includes('experience') || lowerMessage.includes('journey')) {
    const experienceResponses = [
      "My development journey has been amazing! Started with curiosity about code and now I'm building AI-enhanced applications. Check out my timeline in the About section!",
      "Learning never stops in tech! I'm constantly exploring new frameworks, AI tools, and development practices. The timeline above shows my journey so far.",
      "My experience spans 3+ years of intensive learning and building. From basic websites to AI-integrated applications - it's been quite a ride!",
    ];
    return experienceResponses[Math.floor(Math.random() * experienceResponses.length)];
  }

  // Contact/next steps
  if (lowerMessage.includes('contact') || lowerMessage.includes('talk') || lowerMessage.includes('discuss') || lowerMessage.includes('meet')) {
    const contactResponses = [
      "I'd love to chat! The best way to reach me is through the contact form below. I typically respond within 24 hours. You can also find me on GitHub and LinkedIn!",
      "Let's definitely connect! Fill out the contact form with details about your project or just drop me a line. I'm also active on social media - links are below!",
      "Great! I'm always excited to meet new people. Use the contact form below or reach out on LinkedIn. Looking forward to our conversation!",
    ];
    return contactResponses[Math.floor(Math.random() * contactResponses.length)];
  }

  // Default responses
  const defaultResponses = [
    "That's interesting! I'd love to learn more about what you're thinking. Feel free to elaborate or reach out through the contact form!",
    "Thanks for your message! For a more detailed conversation, let's connect through the contact form below. I'll get back to you quickly!",
    "I appreciate you taking the time to chat! To give you the best response, let's continue this conversation via email or a scheduled call.",
    "Great question! The contact form below is the best way to start a detailed discussion about your needs or ideas.",
    "I'm excited to hear from you! While this AI version of me can chat, the real me would love to discuss your ideas properly. Let's connect!",
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};