const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');
require('dotenv').config();
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Faraway kingdom 🏰',
  tagline:
    'Метавселенная Тридевятое царство DAO - это платформа по продаже NFT билетов, управляемая владельцами 999 NFT.',
  favicon: 'img/favicon.ico',
  customFields: {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    CAPTCHA_KEY: process.env.CAPTCHA_KEY,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
        label: 'English',
      },
      ru: {
        label: 'Русский',
      },
    },
  },
  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DAO-999-NFT', // Usually your GitHub org/user name.
  projectName: 'faraway-kingdom', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      metadata: [
        {
          name: 'description',
          content:
            'The Faraway Kingdom is a social NFT platform for clubbers that allows you to buy and sell NFT tickets to the best parties on the planet and provide a fair pricing model for the distribution of income from the sale of NFT tickets.',
        },
        {property: 'og:title', content: 'DAO 999 NFT'},
        {
          property: 'og:description',
          content:
            'The Faraway Kingdom is a social NFT platform for clubbers that allows you to buy and sell NFT tickets to the best parties on the planet and provide a fair pricing model for the distribution of income from the sale of NFT tickets.',
        },
        {property: 'og:url', content: 'https://dao999nft.com/'},
        {
          property: 'og:image',
          content: 'https://dao999nft.com/img/preview.jpg',
        },
        {
          name: 'twitter:image',
          content: 'https://dao999nft.com/img/preview.jpg',
        },
      ],
      navbar: {
        title: 'DAO 999 NFT',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://www.instagram.com/999kingdomnft',
            label: 'Instagram',
            position: 'left',
          },
          {
            href: 'https://github.com/DAO-999-NFT',
            label: 'GitHub',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Read docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/HqX3Dj3mhP',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/999metaverse',
              },
              {
                label: 'OpenSea',
                href: 'https://opensea.io/999kingdom',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/999kingdomnft',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DAO-999-NFT',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DAO 999 NFT. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: lightCodeTheme,
      },
    }),
  plugins: [
    async function myPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
