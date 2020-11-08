# Craftory Studios Website      ![Build Website](https://github.com/CraftoryStudios/website/workflows/Build%20Website/badge.svg?branch=main)

Craftory Studios is a collections of Spigot/Paper Minecraft Plugins with the aim of bringing new and exciting new feature to Minecraft without the need of client side mods. Just join a server and enjoy playing!

This repository includes the sourcecode for our website which is the wiki for all of our plugins. The website can be edited with Markdown files to make it easy and simple to contribute too. It is generated using a static code editor [Sitegen](https://github.com/refinedmods/sitegen).

See bellow for details on how to contribute.

[Craftory Studios Website Link](https://craftory.studio/)


## Contributing 

The code for the website is divided into two main branches the *MAIN (master)* branch and the *PAGES* branch.

**Main** - This contains the editable sourcecode, this includes templates for each page, images and the main part the Markdown files which contain all of the infomation of each page.

**Pages** - This contains the generated website based on the *Main* branch using Sitegen. This branch isn't editable and will only be pushed to on a successful build of the *Main* branch. 

Open the dropdowns bellow to find guides:

<details>
<summary>Structure of files</summary>

```bash
├── sourcecode
│   ├── assets
│   │   └── craftory-tech
│   │       ├── crafting - Images of crafting recipes
│   │       ├── renders - Imgaes of Items and Blocks
│   │       └── logo.png
│   ├── *project* (eg craftory-tech, craftory-utils)
│   │    ├── releases
│   │    │   ├── minecraft-x.x.x.json - Contains each release of plugin
│   │    ├── wiki
│   │    │   ├── sidebar
│   │    │   │   ├── *sidebar-page*.md - Files for each sidebar section
│   │    │   ├── *page*.json - File with properties of wiki page (optional)
│   │    │   └── *page*.md - File containing contents of wiki page
│   │    │
│   │    ├── app.js
│   │    ├── app.scss
│   │    └── index.gohtml
│   ├── dist - CSS, JS files
│   ├── site.json - Website definition file
│   └── *template files*.gohtml
├── README.md
├── index.html - Landing page of site
├── CNAME
└── .gitignore
```
</details>

## Publishing 