module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Rick Rocero | Full-Stack Developer",
    author: "Rick Rocero",
    projects: [
      {
        title: 'Food & Bev',
        description: 'A recipe buddy for meals and cocktails',
        // img: '/FoodBev.gif',
        img: 'FoodBev.mp4',
        github: 'https://github.com/rickrocero/Food-Bev',
        link: 'https://moecory11.github.io/food-bev/',
      },
      {
        title: 'Pantrimonium',
        description: 'Track the groceries in your fridge, freezer, & pantry',
        // img: '/Pantrimonium.gif',
        img:'Pantrimonium.mp4',
        github: 'https://github.com/rickrocero/Pantrimonium',
        link: 'https://pantrimonium.herokuapp.com/',
      },
      {
        title: 'Plant Baby',
        description: 'Classified website devoted to indoor plants',
        // img: '/PlantBaby.gif',
        img:'PlantBaby.mp4',
        github: 'https://github.com/rickrocero/Plant-Baby-Frontend',
        link: 'https://plantbaby.herokuapp.com/',
      },
      {
        title: 'Developer Portfolio',
        description: 'My personal portfolio',
        // img: '/DevPortfolio.gif',
        img: 'DevPortfolio.mp4',
        github: 'https://github.com/rickrocero/Dev-Portfolio',
        link: '',
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -80
      }
    },
  ],
};
