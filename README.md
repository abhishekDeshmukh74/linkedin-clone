LinkedIn Clone
==============

A minimal LinkedIn-style social feed built with React and Firebase — authentication, posting, and a clean feed UI. Deployed on Firebase Hosting.

Live Demo: https://linkedin-clone-4d2c2.web.app

------------------------------------------------------------

✨ Features
-----------

- 🔐 Authentication (Firebase Auth – email/password & provider-ready)
- 📝 Create posts (text + optional media placeholder)
- 📰 Real-time feed (Firestore)
- 👍 Like / engage (extensible)
- 📱 Responsive UI
- 🚀 Firebase Hosting deployment workflow

------------------------------------------------------------

🧱 Tech Stack
--------------

- Frontend: React (JS), CSS
- Backend (BaaS): Firebase (Auth, Firestore)
- Deployment: Firebase Hosting

Languages shown by GitHub: JavaScript, CSS, HTML

------------------------------------------------------------

📦 Project Structure
--------------------

linkedin-clone/
├─ public/
├─ src/
│  ├─ components/        # Reusable UI
│  ├─ pages/             # Page-level views (if applicable)
│  ├─ hooks/             # Custom hooks (optional)
│  ├─ context/           # App context (optional)
│  ├─ styles/            # Global / module CSS
│  ├─ firebase.js        # Firebase app/init (gitignored if using .env)
│  └─ App.js / index.js
├─ .firebaserc
├─ firebase.json
├─ package.json
└─ README.md

------------------------------------------------------------

⚙️ Local Setup
--------------

1. Clone
   git clone https://github.com/abhishekDeshmukh74/linkedin-clone.git
   cd linkedin-clone

2. Install
   npm install
   # or
   yarn

3. Environment Variables

   Create a .env file in the root. If this is a Create React App project, prefix with REACT_APP_.

   Example:
   REACT_APP_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your-app
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxx
   REACT_APP_FIREBASE_APP_ID=1:xxxxxxxxxxxx:web:xxxxxxxxxxxxxxxx

4. Run
   npm start
   # or
   yarn start

5. Build
   npm run build
   # or
   yarn build

------------------------------------------------------------

☁️ Firebase Hosting (Deploy)
----------------------------

1. Login & init (once):
   npm install -g firebase-tools
   firebase login
   firebase init
   # choose Hosting, use build/ as public if CRA, set SPA rewrite to index.html

2. Deploy:
   npm run build
   firebase deploy

------------------------------------------------------------

🔐 Notes on Secrets
-------------------

- Firebase client config (apiKey, authDomain, etc.) is client-side and not truly secret,
  but keep it in .env for cleaner code and easier environment switching.
- Do not commit service account keys or any server credentials.

------------------------------------------------------------

🧪 Scripts
----------

{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "deploy": "firebase deploy"
  }
}

------------------------------------------------------------
