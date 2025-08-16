# 🚀 Firebase Setup Instructions for Cross-Device Reviews

## Step 1: Create Firebase Project (FREE)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: `kudremukh-reviews`
4. Disable Google Analytics (optional)
5. Click "Create project"

## Step 2: Setup Realtime Database

1. In Firebase console, click "Realtime Database"
2. Click "Create Database"
3. Choose location (Asia-Southeast1 for India)
4. Start in **test mode** (for now)
5. Click "Done"

## Step 3: Get Configuration

1. Click gear icon → "Project settings"
2. Scroll to "Your apps" section
3. Click web icon `</>`
4. Enter app name: `Kudremukh Reviews`
5. Check "Firebase Hosting" 
6. Click "Register app"
7. **COPY the config object**

## Step 4: Update reviews.html

Replace this section in reviews.html:
```javascript
const firebaseConfig = {
    apiKey: "your-api-key",               // ← Replace these
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com/",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};
```

With your actual config from Firebase.

## Step 5: Security Rules (Optional)

In Firebase console → Realtime Database → Rules:
```json
{
  "rules": {
    "reviews": {
      ".read": true,
      ".write": true,
      "$reviewId": {
        ".validate": "newData.hasChildren(['name', 'location', 'rating', 'text', 'date'])"
      }
    }
  }
}
```

## 🎉 Result

- ✅ Reviews will work across ALL devices
- ✅ Real-time updates 
- ✅ Free tier supports thousands of reviews
- ✅ Automatic backup and sync
- ✅ No server required

## Fallback

If Firebase isn't configured, the system automatically falls back to localStorage (current behavior).
