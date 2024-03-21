# Netflix GPT

- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- Authentication Using FireBase

---

# Firbase CLI

- sudo npm install -g firebase-tools --force
- firebase login
- firebase init -> do hoisting setup with build file.
- npm run build
- firebase deploy

---

- Create SignUp/SignIn User in Firebase
- Add Logic for SignUp and SignIn from Firebase authentication for passowrd
  (Ref -> https://firebase.google.com/docs/auth/web/password-auth)
- Created Redux Store with userSlice
- Add Loic for onAuthState Change from Firebase
  (Ref -> https://firebase.google.com/docs/auth/web/manage-users)
- Implemented SignOut and Updated Profile Functionality in Browse Page
- unsubscribed to the onAuthStateChange callback.

# Features

- Login/ Sign Up

  - Sign In /Sign Up Form
  - Redirect to browse page

- Browse (After Authentication)
  - Header
  - Main Movie
    - Trailer In Background
    - Title & Description
    - Movie Suggestions
      - Movie List \* N
- NetflixGPT
  - Search GPT
  - Movie Suggestions
