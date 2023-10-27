<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">GiftList</h3>

  <p align="center">
    A React TS project with Firebase Realtime Database
    <br />
    <br />
    <a href="https://giftlist-pwa.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/davidschinteie/giftlist/issues">Report Bug</a>
    ·
    <a href="https://github.com/davidschinteie/giftlist/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A demo gift list project where you can add gift ideas for the people anniversaries or special occasions.

I experimented with Firebase using React TS and Tailwindcss, I also was curious to try Vite.

The project is deployed on a Netlify server.

[![GiftList Mobile Screen Shot][product-mobile-screenshot]](https://giftlist-pwa.netlify.app/)
[![GiftList Desktop Screen Shot][product-screenshot]](https://giftlist-pwa.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][react.js]][react-url]
- [![TypeScript][typescript]][ts-url]
- [![Firebase][firebase]][firebase-url]
- [![Tailwind][tailwindcss]][tailwindcss-url]
- [![Vite][vitejs.dev]][vite-url]
- [![Netlify][netlify]][netlify-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how to set up your project locally.
To get a local copy up and running follow these steps.

### Prerequisites

1. Node.js installed
2. Code editor — I prefer Visual Studio Code
3. Google account — we need this to use Firebase
4. Basic knowledge of React

### Installation

1. Create a new realtime database in firebase admin
2. Using import JSON from the admin, add data.json file from this repo as a starting point
3. Publish your firebase project and get the config variables, it should look something like:

   ```js
   const firebaseConfig = {
     apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
     authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
     projectId: "XXXXXXXXXXXXXXXXX",
     storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXX",
     messagingSenderId: "XXXXXXXXXXXXXXX",
     appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
   };
   ```

4. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
5. Install NPM packages
   ```sh
   npm install
   ```
6. Create a .env file and paste your firebase config variables into it
   ```env
   VITE_FIREBASE_API_KEY=*******
   VITE_FIREBASE_AUTH_DOMAIN=*******
   VITE_FIREBASE_DATABASE_URL=*******
   VITE_FIREBASE_PROJECT_ID=*******
   VITE_FIREBASE_STORAGE_BUCKET=*******
   VITE_FIREBASE_MESSAGING_SENDER_ID=*******
   VITE_FIREBASE_APP_ID=*******
   ```
7. Run locally your project
   ```sh
   npm run dev
   ```
8. Check out the `http://127.0.0.1:5173/` on your browser

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Fetch data using onValue method
- [x] Implement Edit & Remove & Add features for persons / gifts lists / gift items
- [x] Deploy on Netlify
- [x] Add authentication using firebase auth
- [ ] Enhance features
  - [ ] Add photos to people list using firebase file uploads
  - [ ] Add a datepicker to use dates on giftlists

See the [open issues](https://github.com/davidschinteie/giftlist/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[David Schinteie](https://www.linkedin.com/in/david-schinteie-0804ab95/)

Project Link: [https://github.com/davidschinteie/giftlist](https://github.com/davidschinteie/giftlist)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Useful resources that I find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [How to Use Cloud Firestore in a React App](https://www.freecodecamp.org/news/how-to-use-the-firebase-database-in-react/)
- [How to Connect Firebase Realtime Database to a React app](https://medium.com/innovance-company-blog/how-to-connect-firebase-realtime-database-to-a-react-app-f7dcb983150a)
- [Firebase as simple database to React app](https://www.educative.io/answers/firebase-as-simple-database-to-react-app)
- [Firebase documentation for Realtime Database](https://firebase.google.com/docs/database/web/read-and-write#web-version-9)
- [Read, Write, and Delete Data from the Realtime Database](https://www.educative.io/courses/complete-guide-firebase-web/gkJGzkWK7zk)
- [Best Practices: Arrays in Firebase](https://firebase.blog/posts/2014/04/best-practices-arrays-in-firebase)
- [Fireship tutorial: Firebase - Ultimate Beginner's Guide](https://www.youtube.com/watch?v=9kRgVxULbag)
- [Official Firebase tutorial: Getting started with Firebase for the web – Firebase Fundamentals](https://www.youtube.com/watch?v=rQvOAnNvcNQ)
- [Github Readme template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/davidschinteie/giftlist/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/david-schinteie-0804ab95/
[product-screenshot]: src/assets/screenshot.png
[product-mobile-screenshot]: src/assets/screenshot-mobile.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vitejs.dev]: https://img.shields.io/badge/Vite-20232A?style=for-the-badge&logo=vite&logoColor=646CFF
[vite-url]: https://vitejs.dev/
[typescript]: https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript&logoColor=3178C6
[ts-url]: https://www.typescriptlang.org/
[firebase]: https://img.shields.io/badge/Firebase-20232A?style=for-the-badge&logo=firebase&logoColor=FFCA28
[firebase-url]: https://firebase.google.com/
[tailwindcss]: https://img.shields.io/badge/Tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4
[tailwindcss-url]: https://tailwindcss.com/
[netlify]: https://img.shields.io/badge/Netlify-20232A?style=for-the-badge&logo=netlify&logoColor=00C7B7
[netlify-url]: https://www.netlify.com/
