module.exports = {
  title: "Manasah",
  tagline: "Manasah Documents",
  url: "https://mohamoudi.github.io",
  baseUrl: "/manasah/",
  favicon: "imgs/manasahlogo.png",
  organizationName: "mohamoudi", // Usually your GitHub org/user name.
  projectName: "manasah", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "ادارة منصة",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Manasah, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          theme: ["theme-blog-bootstrap"],
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: ["plugin-image-zoom"],
};
