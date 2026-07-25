# ⚡ Quick Setup Guide (5 Minutes)

## Step 1: Extract & Navigate
```bash
unzip portfolio_fixed.zip
cd portfolio
```

## Step 2: Backend Setup
```bash
cd backend
npm install
npm run dev
```

**Expected Output:**
```
✅ Server started!
🌐 URL: http://localhost:5000
```

## Step 3: Frontend Setup (New Terminal)
```bash
cd frontend
# Option A: Using Python
python -m http.server 3000

# Option B: Using Node
npx http-server . -p 3000
```

## Step 4: Open in Browser
- Visit: **http://localhost:3000**
- See the portfolio load
- Click chatbot icon (bottom right)
- Ask: "Who is Prashant?"

## ✅ Expected Result
Chatbot should respond:
```
"Hi! I'm Prashant Singh, a 3rd year B.Tech CSE student 
at Ambalika Institute of Management and Technology 
with a CGPA of 8.3..."
```

---

## 🆘 If Something Breaks

### Issue: "npm: command not found"
- Install Node.js from https://nodejs.org
- Restart your terminal

### Issue: Chatbot doesn't respond
- Check terminal running backend for errors
- Verify backend is running on port 5000
- Check browser console (F12) for errors

### Issue: "Cannot find module"
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: Port 5000 already in use
```bash
# Use different port
PORT=5001 npm run dev

# Then update frontend:
# Change BACKEND_URL = "http://localhost:5001"
```

---

## 📝 Files You Can Customize

### Change Portfolio Info
Edit: `backend/src/data/portfolioData.js`
- Update name, email, skills
- Add/remove projects
- Change CGPA

### Change Chatbot Responses
Edit: `backend/src/services/aiService.js`
- Modify fallback responses
- Update system prompt

### Add Your Photo
- Save photo as: `frontend/profile.jpg`
- In HTML find: `src="data:image/svg+xml..."`
- Replace with: `src="profile.jpg"`

---

## 🚀 Deploy to Production

### Backend (Render.com)
1. Push to GitHub
2. https://render.com → New Service
3. Select your repository
4. Set Environment Variables (copy from .env)
5. Deploy!

### Frontend (Vercel)
1. Import frontend folder
2. Set build settings (no build needed)
3. Deploy!
4. Update BACKEND_URL to your Render URL

---

## 📞 Need Help?

- Check **README.md** for full documentation
- Check **FIXES_SUMMARY.md** for what was fixed
- Look at browser console (F12 → Console)
- Check backend terminal for errors

---

**That's it! You now have a working portfolio with AI chatbot! 🎉**
