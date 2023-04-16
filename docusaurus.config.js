// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sandip Sadhukhan\'s Blog: Insights on Django and ReactJS Web Development',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sandipsadhukhan.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: true,
          blogTitle: "Sandip Sadhukhan's Blog: Insights on Django and ReactJS",
          blogDescription: "Welcome to Sandip Sadhukhan's blog, where I share my expertise and insights on web development with Django and ReactJS."
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Sandip Sadhukhan',
        logo: {
          alt: 'My Site Logo',
          src: 'img/sandip-sadhukhan.jpeg',
        },
        items: [
          {to: '/about', label: 'About', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Made with 💜 by Sandip Sadhukhan`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {  
          name: "description",
          content: "Welcome to Sandip Sadhukhan's blog, where I share my expertise and insights on web development with Django and ReactJS."
        },
      ]
    }),
};

module.exports = config;
