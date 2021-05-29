module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://lamine.me`,
    // Your Name
    name: 'Lamine Fetni',
    // Main Site Title
    title: `Lamine Fetni | Mobile App Developer`,
    // Description that goes under your name in main bio
    description: `Android / Flutter App Developer based in Germany.`,
    // Optional: Twitter account handle
    author: ``,
    contact: `mailto: mlaminefetni@gmail.com`,
    // Optional: Github account URL
    github: `https://github.com/for-hope`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/laminefetni/`,
    // Content of the About Me section
    about: `I'm a highly motivated software engineer who has experience building and testing mobile applications and services in various domains. I'm also passionate about contributions to other projects, working to help build great products, currently doing a master's degree in Media Informatics in the University of Bremen.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'RideGO Carpooling Application',
        description:
          'A carpooling app for the eldery i built as the final project for my bachelor degree alongside with a thesis for it. this project got the highest given mark.',
        link: 'https://www.researchgate.net/publication/339432988_Development_of_a_mobile_application_for_carpooling_the_elderly',
      },
      {
        name: 'H*App',
        description:
          'from "Hdarha Startup" An AI based application that transforms face images into funny clips merged with memey audio clips from famous algerian skits',
        link: 'https://github.com/for-hope/HApp',
      },
      {
        name: 'Numberus - Android Puzzle Game',
        description:
          'An addictive puzzle android game that was submitted to the play store with 100+ downloads then got removed after the play store changed their privacy policy system',
        link: 'https://apkpure.com/de/numberus-genius-puzzle-game/com.lamfee.lamine.numberus',
      },
      {
        name: 'Pewdstud.io',
        description:
          'A web app for searching captions in Youtube videos, this gives you the option to find specific phrases in Youtube videos using a custom algorithm i made, the website runs on Flask and uses caption scraping.',
        link: 'https://pewdiepie-higherorlower.herokuapp.com/',
      },
      {
        name: 'YT Caption Search Engine (#Python)',
        description:
          'A Python script that extracts captions from videos and turns them into MySQL or an SQLite Database. that can be searched',
        link: 'https://github.com/for-hope/YTSynth',
      },
      {
        name: 'Project-Sophia',
        description:
          'A horror game demo made in Java & Android',
        link: 'https://github.com/for-hope/ProjectSophia',
      },
      {
        name: 'ShiftrWallpaper',
        description:
          'A macOS like style live, dynamic wallpaper system for android that makes wallpapers change depending on the time of day.',
        link: 'https://github.com/for-hope/ShiftrWallpaper',
      },
      {
        name: 'Facebook framebot (#Python)',
        description:
          'A facebook bot using fb.py to post frames of the cartoon spiderman every few seconds made in python.',
        link: 'https://www.facebook.com/everyspidermanframe/',
      },

      {
        name: 'Safe And Sound',
        description:
          'A security and SOS Emergency app where you can press a button in case of an emergency and an SMS will be sent to your chosen recipient, this app got removed from the play store due to changes in their privacy rules.',
        link: 'https://github.com/for-hope/SafeAndSound',
      },

    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'PROFESSOR ASSISTANT',
        description: 'Professor assistant in developing a Flutter application, December 2018 - July 2019',
        link: 'https://www.univ-constantine2.dz/',
      },
      {
        name: 'Mobile & Automation Freelancer',
        description: 'Freelance Android & Flutter Developer, July 2019 - December 2020',
        link: '',
      },
      {
        name: 'Software Engineer (Android)',
        description: 'Native Android Developer, August 2019 - December 2020',
        link: 'https://github.com/for-hope/HApp',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Kotlin, Flutter, Android SDK, Dart, Python, HTML/CSS, JavaScript (ES6+) , Flask, Firebase',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL, NoSQL, Room, SQLite',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, API design, Machine Learning, Git , Google Maps API,  MVVC, MVC, MVP',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-154339688-3`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lamine.me`,
        short_name: `lamine.me`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
