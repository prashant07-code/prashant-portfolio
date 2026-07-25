const portfolioData = require("../data/portfolioData");

const buildSystemPrompt = () => {
  const data = portfolioData;
  return `You are an AI assistant embedded in ${data.name}'s portfolio website. You are friendly, professional, and knowledgeable about Prashant's work and experience.

CRITICAL RULES:
1. Answer ONLY based on the portfolio data provided
2. NEVER hallucinate or invent information
3. Keep answers concise (max 3-4 sentences)
4. Use friendly, professional tone
5. If unsure, direct to GitHub or email
6. Use bullet points for lists when appropriate

${data.name}'s COMPLETE PROFILE:

PERSONAL INFO:
• Name: ${data.name}
• Role: ${data.role}
• Location: ${data.location}
• Email: ${data.contact.email}
• GitHub: ${data.contact.github}
• LinkedIn: ${data.contact.linkedin}

EDUCATION:
• Degree: ${data.education.degree}
• College: ${data.education.college}
• Current Year: ${data.education.currentYear}
• Overall CGPA: ${data.education.cgpa}
• Semester Details:
  - 1st Sem: 7.2
  - 2nd Sem: 8.2
  - 3rd Sem: 8.26
  - 4th Sem: 8.3

TECHNICAL SKILLS:
• Backend: ${data.skills.backend.join(", ")}
• Frontend: ${data.skills.frontend.join(", ")}
• Languages: ${data.skills.languages.join(", ")}
• Tools: ${data.skills.tools.join(", ")}
• Concepts: ${data.skills.concepts.join(", ")}

PROJECTS:
${data.projects
  .map(
    (p, i) => `${i + 1}. ${p.name}
   Description: ${p.description}
   Tech Stack: ${p.tech.join(", ")}
   Repository: ${p.github}
   Key Features: ${p.features.join(" | ")}`
  )
  .join("\n\n")}

EXPERIENCE:
${data.experience
  .map((e) => `• ${e.title} at ${e.organization} (${e.duration}): ${e.description}`)
  .join("\n")}

GUIDELINES FOR COMMON QUESTIONS:
- "Who are you/Who is Prashant?" → Introduce as ${data.education.currentYear}rd year CSE student, current CGPA ${data.education.cgpa}
- "What's your CGPA?" → Current: ${data.education.cgpa}, details: 7.2 → 8.2 → 8.26 → 8.3
- "Where do you study?" → ${data.education.college}, ${data.education.location}
- "What skills do you have?" → List backend, frontend, languages
- "Show your projects" → List all 3 with descriptions
- "How to contact you?" → Email or GitHub
- "Why should we hire you?" → Good CGPA (8.3), strong DSA, full-stack experience, innovative projects
- "Tell me about experience" → Self-paced full-stack learning + DSA mastery
- "Resume/CV?" → ${data.contact.resume}

Be warm, professional, and helpful!`;
};

const callAI = async (userMessage) => {
  try {
    const apiKey = process.env.AI_API_KEY;
    const apiUrl = process.env.AI_API_URL || "https://api.groq.com/openai/v1/chat/completions";
    const model = process.env.AI_MODEL || "llama-3.3-70b-versatile";

    // FALLBACK if no API key
    if (!apiKey) {
      console.warn("⚠️  AI_API_KEY not configured, using knowledge-base fallback");
      return getFallbackResponse(userMessage);
    }

    const fetch = require("node-fetch");
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        max_tokens: 500,
        temperature: 0.7,
        messages: [
          { role: "system", content: buildSystemPrompt() },
          { role: "user", content: userMessage },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ AI API Error ${response.status}:`, errorText);
      return getFallbackResponse(userMessage);
    }

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content ||
      "I couldn't generate a response. Try asking something else!";
    return reply;
  } catch (err) {
    console.error("⚠️  AI Service Error:", err.message);
    return getFallbackResponse(userMessage);
  }
};

// FALLBACK KNOWLEDGE BASE
const getFallbackResponse = (userMessage) => {
  const msg = userMessage.toLowerCase().trim();
  const data = portfolioData;

  // WHO IS PRASHANT
  if (
    msg.includes("who") ||
    msg.includes("about") ||
    msg.includes("introduce") ||
    msg.includes("yourself")
  ) {
    return `Hi! I'm ${data.name}, a ${data.education.currentYear}rd year B.Tech CSE student at ${data.education.college} with a CGPA of ${data.education.cgpa}. I'm passionate about full-stack development, backend systems, and DSA. I've built voice-powered apps and have solved 100+ algorithm problems. Feel free to ask me about my projects, skills, or how to reach me! 🚀`;
  }

  // CGPA & GRADES
  if (msg.includes("cgpa") || msg.includes("grade") || msg.includes("performance")) {
    return `My CGPA is ${data.education.cgpa}! Here's my semester progression:\n• 1st Sem: 7.2\n• 2nd Sem: 8.2\n• 3rd Sem: 8.26\n• 4th Sem: 8.3\n\nI've been consistently improving! 📈`;
  }

  // SKILLS
  if (
    msg.includes("skill") ||
    msg.includes("know") ||
    msg.includes("tech") ||
    msg.includes("technology")
  ) {
    return `I work with:\n\n**Backend:** ${data.skills.backend.join(", ")}\n**Frontend:** ${data.skills.frontend.join(", ")}\n**Languages:** ${data.skills.languages.join(", ")}\n**Tools:** ${data.skills.tools.join(", ")}\n**Concepts:** ${data.skills.concepts.join(", ")}`;
  }

  // PROJECTS
  if (msg.includes("project") || msg.includes("built") || msg.includes("work")) {
    return `I've built 3 major projects:\n\n1. **Voice Grievance System** - Voice-based complaint filing using React & Node.js\n2. **DSA Repository** - 100+ algorithm problems with solutions\n3. **AI Portfolio** - This website with interactive chatbot\n\nCheck out my GitHub: ${data.contact.github}`;
  }

  // CONTACT
  if (msg.includes("contact") || msg.includes("email") || msg.includes("reach")) {
    return `You can reach me at:\n• **Email:** ${data.contact.email}\n• **GitHub:** ${data.contact.github}\n• **LinkedIn:** ${data.contact.linkedin}\n• **Resume:** ${data.contact.resume}`;
  }

  // EDUCATION & COLLEGE
  if (
    msg.includes("college") ||
    msg.includes("education") ||
    msg.includes("study") ||
    msg.includes("university")
  ) {
    return `I'm studying B.Tech CSE at ${data.education.college} in ${data.education.location}. Started in ${data.education.startYear}, currently in my ${data.education.currentYear}rd year with a CGPA of ${data.education.cgpa}!`;
  }

  // WHY HIRE
  if (
    msg.includes("hire") ||
    msg.includes("why") ||
    msg.includes("intern") ||
    msg.includes("job") ||
    msg.includes("employ")
  ) {
    return `You should consider me because:\n✅ Strong academics (CGPA: ${data.education.cgpa})\n✅ Solid DSA foundation (100+ problems)\n✅ Full-stack development experience\n✅ Innovative projects (voice app, portfolio)\n✅ Clean, scalable code\n✅ Passionate about learning & improving\n\nLet's build something amazing! 🚀`;
  }

  // EXPERIENCE
  if (msg.includes("experience") || msg.includes("background")) {
    return `My background:\n• Full-stack development learning (2023-Present)\n• Built voice-based grievance system\n• Created DSA problem repository\n• Completed 100+ algorithm challenges\n• Strong foundation in data structures & system design\n\nI'm constantly learning and building! 📚`;
  }

  // RESUME
  if (msg.includes("resume") || msg.includes("cv")) {
    return `You can download my resume here: ${data.contact.resume}\n\nOr check my GitHub for detailed project portfolios: ${data.contact.github}`;
  }

  // DEFAULT
  return `I can answer questions about Prashant's education, skills, projects, experience, and how to contact him! What would you like to know? 😊`;
};

module.exports = { callAI };
