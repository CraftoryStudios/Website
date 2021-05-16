# Craftory Studios Website      
![Build Website](https://github.com/CraftoryStudios/website/workflows/Build%20Website/badge.svg?branch=main)

Craftory Studios is a collections of Spigot/Paper Minecraft Plugins with the aim of bringing new and exciting new feature to Minecraft without the need of client side mods. Just join a server and enjoy playing!

This repository includes the sourcecode for our website which is the wiki for all of our plugins. The website can be edited with Markdown files to make it easy and simple to contribute too. It is generated using a static code editor [Sitegen](https://github.com/refinedmods/sitegen).

See below for details on how to contribute.

[Craftory Studios Website Link](https://craftory.studio/)


## Contributing 

The code for the website is divided into two main branches the *MAIN (master)* branch and the *PAGES* branch.

**Main** - This contains the editable sourcecode, this includes templates for each page, images and the main part the Markdown files which contain all of the information of each page.

**Pages** - This contains the generated website based on the *Main* branch using Sitegen. This branch isn't editable and will only be pushed to on a successful build of the *Main* branch. 


## Getting Started
Most edits of the wiki can be done through editing the markdown files. Inside sourcecode/projectname you can find the wiki folder, this contains the files for each page of a wiki.

Each page must have a .md file which contains the contents of a page. To edit a page, it's as simple as editing this markdown page. Adding a new page requires more steps, please see the dropdown bellow for steps.

The markdown of a page can have special formatting inserted to include links to other pages, for example inserting [[page-name]] where the page name is exactly the same as the file name of that page, minus the file extension. 
On top of that you can insert [[@page-name]] which instead of a link will insert the contents of that page.

Each page can also have an optional .json file with the same name as the page. This contains a link to the icon used for the page, hover over or anything else. It also has a list of tags that are shown on tag, currently this is only a tag of the version.

After make edits to a markdown or json file for a page, create a pull request into the main branch. Once this is merged the website will be updated. 

Video Tutorial Coming Soon...

Open the dropdowns bellow to find guides:

<details>
<summary>Structure of files</summary>
Key: *file* - Signifies a placeholder name or an entry with multiple instances.

```bash
├── sourcecode
│   ├── assets
│   │   └── craftory-tech
│   │       ├── crafting - Images of crafting recipes
│   │       ├── renders - Images of Items and Blocks
│   │       └── logo.png
│   ├── *project* (eg craftory-tech, craftory-utils)
│   │    ├── releases
│   │    │   └── *minecraft-x.x.x.json* - Contains each release of plugin
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

<details>
<summary>Creating a new Wiki Page</summary>
To add a new page, go to the project folder and in the wiki folder, insert a markdown file (.md) with the name of the page. Optionally you can add a .json file with the identical name of the page, which can include a link to the icon and tags like the release version this feature was added.

The above is all that is required to add a new page, although without linking it anywhere this page will be un-reachable. It can be linked in a page by inserting [[page-name]] into the page.

**Sidebar** - It can also be linked in the sidebar, sidebars can be found in wiki folder, inside the sidebar folder. Insert a link into these by inserting [[page-name]] into the correct one.

**Project Home Page** - Inside the sourcecode/projectname folder you can find the index.gohtml. Inside this you can find bootstrap card code that has the display boxes for machines, items, block and more. You can add a link to the page into one of these by adding the follow:
    ```{{wikiIcon .Project "page-name"}}```
If you are unsure on how to do this, check out examples of other pages.
</details>

## Publishing 

Once you are done with your edits to the website, create a pull request to the *Main* branch.

This pull request will need to be reviewed by at least 1 member of the admin team. Once it has been approved it can be merged in. 

On merging into the *Main* branch, this will trigger a build which will publish the code live to the website.
