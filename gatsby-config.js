module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Dev-Portfolio",
    author: "Rick Rocero",
    projects: [
      {
        title: 'Pantrimonium',
        description: 'Track the groceries in your fridge, freezer, & pantry',
        img: '/pantrimonium-logo.png',
        github: 'https://github.com/rickrocero/Pantrimonium',
        link: 'https://pantrimonium.herokuapp.com/',
      },
      {
        title: 'Plant Baby',
        description: 'Classified website devoted to house plants',
        img: '/pantrimonium-logo.png',
        github: 'https://github.com/rickrocero/Plant-Baby-Frontend',
        link: 'https://plantbaby.herokuapp.com/',
      },
      {
        title: 'Food & Bev',
        description: 'A recipe buddy for meals and cocktails',
        img: '/food-bev-logo.png',
        github: 'https://github.com/rickrocero/Food-Bev',
        link: 'https://moecory11.github.io/food-bev/',
      },
      {
        title: 'Developer Portfolio',
        description: 'My professional portfolio',
        img: '/food-bev-logo.png',
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
