# Prashant Singh's Portfolio Website

A full-stack portfolio website with an AI-powered chatbot, animated designs, and project showcase.

## 🌟 Features

✅ **AI Chatbot** - Powered by Groq API (fallback knowledge base included)  
✅ **Animated Skills** - Progress bars with smooth animations  
✅ **Journey Timeline** - Education and experience showcase  
✅ **GitHub Integration** - Live stats from GitHub API  
✅ **Responsive Design** - Works on mobile, tablet, and desktop  
✅ **Contact Form** - Direct messaging capability  
✅ **Voice API Ready** - Integration points for voice features  

## 📁 Project Structure

```
portfolio/
├── backend/
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   ├── routes/            # API routes
│   │   ├── services/          # Business logic (AI)
│   │   ├── data/              # Portfolio data
│   │   └── server.js          # Express app
│   ├── .env                   # Configuration
│   ├── package.json           # Dependencies
│   └── .gitignore
└── frontend/
    └── index.html             # Single-page app
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (download from [nodejs.org](https://nodejs.org))
- npm (comes with Node.js)

### 1️⃣ Backend Setup

```bash
cd backend
npm install
```

**Check `.env` file:**
```
AI_API_KEY=api key here
AI_API_URL=https://api.groq.com/openai/v1/chat/completions
AI_MODEL=llama-3.3-70b-versatile
PORT=5000
FRONTEND_URL=http://localhost:3000
```

**Start server:**
```bash
# Development
npm run dev

# Or production
npm start
```

You should see:
```
✅ Server started!
🌐 URL: http://localhost:5000
📍 Chat API: POST 5000/api/chat
📍 Contact API: POST 5000/api/contact
```

### 2️⃣ Frontend Setup

Open `frontend/index.html` in your browser or use a local server:

```bash
# Using Python 3
python -m http.server 3000 --directory frontend

# Or using Node.js
npx http-server frontend -p 3000
```

Visit: `http://localhost:3000`

## 🤖 API Endpoints

### Chat Endpoint
**POST** `/api/chat`

Request:
```json
{
  "message": "What is your CGPA?"
}
```

Response:
```json
{
  "reply": "My CGPA is 8.3! Here's my semester progression..."
}
```

### Contact Endpoint
**POST** `/api/contact`

Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great portfolio!"
}
```

Response:
```json
{
  "success": true,
  "message": "Thank you for reaching out! I'll get back to you soon."
}
```

## 🧪 Testing the Chatbot

### Test 1: Chat endpoint
```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Who is Prashant?"}'
```

### Test 2: Fallback mode (if API fails)
Remove `AI_API_KEY` from `.env`, restart server, and test again. It should use knowledge base responses.

### Test 3: Frontend chatbot
1. Open `http://localhost:3000`
2. Click the 🤖 chatbot icon (bottom right)
3. Type: "What projects have you built?"
4. Should show projects with details

## 📝 Customization

### Update Portfolio Data
Edit `backend/src/data/portfolioData.js`:
- Add your name, email, skills
- Update projects
- Modify education info
- Add experience

### Change AI Model
In `backend/.env`:
```
# Use OpenAI
AI_API_URL=https://api.openai.com/v1/chat/completions
AI_MODEL=gpt-4o-mini
AI_API_KEY=sk-...

# Or keep Groq
AI_API_URL=https://api.groq.com/openai/v1/chat/completions
AI_MODEL=llama-3.3-70b-versatile
AI_API_KEY=gsk_...
```

### Add Profile Photo
1. Place your photo as `frontend/profile.jpg`
2. In `frontend/index.html`, replace:
   ```html
   <img src="data:image/svg+xml,%3Csvg..." 
   ```
   with:
   ```html
   <img src="profile.jpg"
   ```

### Customize Chatbot Responses
Edit `backend/src/services/aiService.js`:
- Modify `buildSystemPrompt()` for AI instructions
- Update `getFallbackResponse()` for offline responses

## 🌐 Deployment

### Deploy Backend (Render.com)
1. Push to GitHub
2. Create new service on render.com
3. Connect repository
4. Set environment variables in Render dashboard
5. Deploy!

### Deploy Frontend (Vercel/Netlify)
1. Push to GitHub
2. Connect frontend folder to Vercel/Netlify
3. Update `BACKEND_URL` in HTML to your deployed API

## ⚠️ Common Issues

### "AI_API_KEY not configured"
- Check `.env` file exists in `backend/` folder
- Ensure `AI_API_KEY` line is uncommented
- Restart server: `npm run dev`

### Chatbot not responding
- Verify backend is running: `curl http://localhost:5000`
- Check console logs for errors
- Fallback should work even if API fails

### Images not loading
- SVG placeholder is used (shown as "PS" in circle)
- Add real photo as `frontend/profile.jpg` (optional)

### CORS errors
- Backend is set to allow all origins
- For production, update `FRONTEND_URL` in `.env`

## 📞 Support

If something doesn't work:
1. Check console logs (F12 → Console)
2. Verify backend is running
3. Clear browser cache (Ctrl+Shift+Delete)
4. Restart both backend and frontend

## 📄 Files Changed (v1.0.0)

✅ `backend/src/data/portfolioData.js` - Enhanced with education & projects
✅ `backend/src/services/aiService.js` - Fallback responses + natural language
✅ `backend/src/controllers/chatController.js` - Validation & error handling
✅ `backend/src/server.js` - CORS & proper middleware
✅ `backend/.env` - API configuration
✅ `frontend/index.html` - SVG image fallback

## 🎓 Learning Resources

- [Express.js Guide](https://expressjs.com)
- [Node.js Docs](https://nodejs.org/docs)
- [Groq API](https://groq.com)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## 📄 License

MIT - Feel free to use for your portfolio!

---

**Built with ❤️ by Prashant Singh**  
[GitHub](https://github.com/prashant07-code) • [LinkedIn](https://linkedin.com/in/prashant-singh-4a35a0320) • [Email](mailto:thakurprashantsingh077@gmail.com)
