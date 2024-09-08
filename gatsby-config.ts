import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Architech Solutions`,
    siteUrl: `https://www.architech-solutions.com/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-transformer-json", "gatsby-plugin-smoothscroll",{
    resolve: `gatsby-source-filesystem`,
    options: {
      "name": "configuration",
      "path": "./static/configuration/"
    }
  }, {
    resolve: `gatsby-source-filesystem`,
    options: {
      "name": "images",
      "path": "./static/images/"
    }
  }, {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Montserrat`,
          file: `https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap`,
        },
      ],
    },
  },
]
};

export default config;
