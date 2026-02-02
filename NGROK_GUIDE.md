# How to Share Your Website with ngrok 🌻

Follow these steps to show your website to Jaggu using ngrok:

## Step 1: Install ngrok

If you don't have ngrok installed:

**Option A: Download from website**
1. Go to https://ngrok.com/download
2. Download ngrok for Windows
3. Extract the `ngrok.exe` file to a folder (or add it to your PATH)

**Option B: Using package manager**
```powershell
# Using Chocolatey (if you have it)
choco install ngrok

# Using Scoop (if you have it)
scoop install ngrok
```

## Step 2: Sign up for ngrok (Free)

1. Go to https://dashboard.ngrok.com/signup
2. Create a free account
3. Get your authtoken from the dashboard
4. Authenticate ngrok:
```powershell
ngrok config add-authtoken YOUR_AUTH_TOKEN_HERE
```

## Step 3: Start Your Development Server

Open a terminal in this project folder and run:

```powershell
npm install
npm run dev
```

You should see something like:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

**Keep this terminal window open!**

## Step 4: Start ngrok Tunnel

Open a **NEW** terminal window (keep the dev server running) and run:

```powershell
ngrok http 5173
```

You'll see something like:
```
Session Status                online
Account                       Your Name
Version                       3.x.x
Region                        United States (us)
Latency                       -
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://abc123.ngrok-free.app -> http://localhost:5173
```

## Step 5: Share the URL

Copy the **Forwarding URL** (the one that starts with `https://`) and send it to Jaggu!

Example: `https://abc123.ngrok-free.app`

## Quick Commands Summary

**Terminal 1 (Dev Server):**
```powershell
npm run dev
```

**Terminal 2 (ngrok):**
```powershell
ngrok http 5173
```

## Tips

- ✅ Keep both terminals open while sharing
- ✅ The ngrok URL will work as long as both the dev server and ngrok are running
- ✅ Free ngrok URLs change each time you restart ngrok (unless you have a paid plan)
- ✅ You can see requests in real-time at http://127.0.0.1:4040 (ngrok web interface)
- ✅ If ngrok shows a warning page, click "Visit Site" to proceed

## Troubleshooting

**Port already in use?**
- Change the port in `vite.config.js` or use: `npm run dev -- --port 3000`
- Then use: `ngrok http 3000`

**ngrok not found?**
- Make sure ngrok.exe is in your PATH or use the full path to ngrok.exe

**Connection issues?**
- Make sure your firewall allows connections on port 5173
- Check that the dev server is actually running

## Alternative: One-Line Script

You can also create a simple script to run both at once, but it's easier to use two terminals.

---

**Good luck! I hope Jaggu loves the sunflower page! 🌻💛**
