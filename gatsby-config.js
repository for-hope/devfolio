module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://lamine.me`,
    // Your Name
    name: 'Lamine Fetni',
    // Main Site Title
    title: `Lamine Fetni | Full Stack Engineer`,
    // Description that goes under your name in main bio
    description: `Full Stack Engineer based in Germany.`,
    // Optional: Twitter account handle
    author: ``,
    contact: `mailto: mlaminefetni@gmail.com`,
    // Optional: Github account URL
    github: `https://github.com/for-hope`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/laminefetni/`,
    // Content of the About Me section
    about: `An inspired and passionate full stack developer with a passion for building beautiful, performant and secure web applications :).`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'The Watcher Bot',
        description:
          'A Discord Bot that lets users communicate between servers using bot managed channels.',
        link: 'https://github.com/for-hope/the-watcher-bot',
      },
      {
        name: 'GoRide - Carpooling for elderly',
        description:
          'A carpooling android application built as a part of the final project for my bachelor degree alongside with a thesis. got awarded the top thesis in 2019.',
        link: 'https://github.com/for-hope/GoRide',
      },
      {
        name: 'H*App',
        description:
          'from "Hdarha Startup" An AI based application that transforms face images into funny clips merged with memey audio clips from famous algerian skits',
        link: 'https://github.com/for-hope/HApp',
      },
      {
        name: 'Numberus - Android Puzzle Game',
        description: 'An puzzle android game won the award of Fun Tech in 2017',
        link: 'https://apkpure.com/de/numberus-genius-puzzle-game/com.lamfee.lamine.numberus',
      },
      {
        name: 'Pewdstud.io',
        description:
          'A web app for searching clips based on captions from Youtube videos, with the option to combine specific phrases in Youtube videos using a custom algorithm, the website runs on Flask and uses Python to scrape captions.',
        link: 'https://github.com/for-hope/pewdstudio',
      },
      {
        name: 'YT Caption Search Engine',
        description:
          'A Python script that extracts captions from videos and turns them into MySQL or an SQLite Database. that can be searched',
        link: 'https://github.com/for-hope/YTSynth',
      },
      {
        name: 'Project-Sophia',
        description: 'A horror game demo made in Java & Android',
        link: 'https://github.com/for-hope/ProjectSophia',
      },
      {
        name: 'ShiftrWallpaper',
        description:
          'A macOS like style live, dynamic wallpaper system for android that makes wallpapers change depending on the time of day.',
        link: 'https://github.com/for-hope/ShiftrWallpaper',
      },
      {
        name: 'Facebook framebot',
        description:
          'A facebook page bot that uses fb.py to post frames of the cartoon spiderman every few seconds made in python.',
        link: 'https://www.facebook.com/everyspidermanframe/',
      },

      {
        name: 'Safe And Sound',
        description:
          'A security and SOS Emergency app where you can press a button in case of an emergency and an SMS will be sent to your chosen recipient, this app got removed from the play store due to changes in their privacy rules.',
        link: 'https://github.com/for-hope/SafeAndSound',
      },

      {
        name: 'TCG Classifier',
        description:
          'A Python library for classifying Card images of the Trading Card Games YuGiOh, Magic The Gathering and Pokemon TCG. using Machine Learning models',
        link: 'https://github.com/for-hope/SafeAndSound',
      },
      {
        name: 'ButtonGIF',
        description: 'A GIF website made only with HTML button elements.',
        link: 'https://flask-buttons.herokuapp.com/',
      },
      {
        name: 'TrivAI',
        description: 'A Quiz Game Showcase application made in flutter',
        link: 'https://github.com/for-hope/TrivAI',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Co-founder & Android Developer',
        description:
          'Co-founder and android application maintainer for Hdarha Startup - a mobile that uses AI to generate meme videos from user pictures, May 2019 - August 2020',
        link: '',
      },
      {
        name: 'Full Stack Software Engineer ',
        description:
          'Frontend and Backend Software Engineer for Chainstep and Kollektor.io',
        link: 'https://kollektor.io/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Java, Kotlin, Python, HTML/CSS/JS, Typescript, C#, Dart, SQL',
      },
      {
        name: 'Frameworks',
        description:
          'NodeJS, ReactJS, ExpressJS, Flask, Django, Flutter, MongoDB, PostgreSQL, TensorFlow, Redux',
      },
      {
        name: 'Tools & Other',
        description:
          'Git, Docker, Linux, CI/CD, Cypress, Unity3D, API Design, Firebase, Google Maps API',
      },
    ],

    languages: [
      {
        name: 'English',
        description:
          'Full professional proficiency in English',
      },
      {
        name: 'French',
        description:
          'Work proficiency in French',
      },
      {
        name: 'Arabic',
        description:
          'Fluent in Arabic',
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
