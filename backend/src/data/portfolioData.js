const portfolioData = {
  name: "Prashant Singh",
  role: "Software Engineer & B.Tech CSE Student",
  tagline: "Building scalable systems and meaningful products",
  email: "thakurprashantsingh077@gmail.com",
  phone: "+91-XXXXXXXXXX",
  github: "https://github.com/prashant07-code",
  linkedin: "https://www.linkedin.com/in/prashant-singh-4a35a0320",
  location: "Lucknow, Uttar Pradesh, India",
  bio: "Prashant is a passionate full-stack software engineer specializing in backend systems, voice-powered applications, and data structures. Currently a 3rd year B.Tech CSE student at AIMT with a CGPA of 8.3.",
  
  // Education
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    college: "Ambalika Institute of Management and Technology",
    location: "Uttar Pradesh, India",
    startYear: 2024,
    currentYear: 3,
    cgpa: 8.3,
    semesters: [
      { sem: 1, cgpa: 7.2 },
      { sem: 2, cgpa: 8.2 },
      { sem: 3, cgpa: 8.26 },
      { sem: 4, cgpa: 8.3 }
    ]
  },

  skills: {
    backend: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "MongoDB", "MySQL"],
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    languages: ["Java", "JavaScript", "Python", "C++"],
    tools: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Docker"],
    concepts: ["DSA", "Spring Framework", "MVC Architecture", "OOPS", "Microservices"]
  },

  projects: [
    {
      name: "Voice First Grievance Redressal System",
      description: "A voice-based complaint/grievance system for accessibility in rural contexts. Users can file complaints using voice input instead of typing.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Web Speech API"],
      github: "https://github.com/prashant07-code/voice-grievance-system",
      features: [
        "Voice-based input using Web Speech API",
        "Real-time complaint tracking",
        "Admin dashboard for grievance management",
        "Accessible UI for low-literacy users",
        "Status notifications"
      ]
    },
    {
      name: "DSA Repository",
      description: "Comprehensive collection of 100+ data structures and algorithms problems with detailed explanations and optimized solutions.",
      tech: ["JavaScript", "Python", "Java", "C"],
      github: "https://github.com/prashant07-code/dsa-solutions",
      features: [
        "100+ problems with clean solutions",
        "Topics: Arrays, Trees, Graphs, DP, Sorting",
        "Time & space complexity analysis",
        "Multiple language implementations",
        "Well-documented code"
      ]
    },
    {
      name: "AI-Integrated Portfolio",
      description: "This portfolio website with integrated AI chatbot that answers questions about Prashant's skills, projects, and experience.",
      tech: ["React", "Node.js", "Express", "Groq API"],
      github: "https://github.com/prashant07-code/portfolio",
      features: [
        "Interactive AI chatbot",
        "Animated skill proficiency bars",
        "Timeline journey section",
        "GitHub stats integration",
        "Responsive design"
      ]
    }
  ],

  experience: [
    {
      title: "Full-Stack Development Learning",
      organization: "Self-Paced",
      duration: "2023 - Present",
      description: "Built multiple full-stack projects focusing on backend systems, APIs, and voice-powered applications."
    },
    {
      title: "DSA Mastery",
      organization: "Self-Study",
      duration: "2022 - Present",
      description: "Solved 100+ DSA problems across multiple platforms with focus on optimization."
    }
  ],

  contact: {
    email: "thakurprashantsingh077@gmail.com",
    github: "https://github.com/prashant07-code",
    linkedin: "https://www.linkedin.com/in/prashant-singh-4a35a0320",
    resume: "https://drive.google.com/file/d/1joeMInZZgBB2Fs65_OzRrC6J7q3eKINE/view"
  }
};

module.exports = portfolioData;
