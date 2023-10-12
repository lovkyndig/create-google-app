# Create Google App
The Theme used in this repo is [`BlogiNote`](https://github.com/Benbinbin/BlogiNote) (per 2023) from [`Benbinbin`](https://github.com/Benbinbin), that is a hidden treasure, like the treasure in the Bible, hidden for the wise and prudent. Matt 11, 25. 

## You are welcome to use this repo!
Like many of you: I'm not a css-stylist. I love a good theme and when I find one I'm not ashamed to use it as a base-theme, and then do the nesessary changes for my needs. Your welcome to do that, you to!

## Futures (my changes)
1. Added window.find()-function that continue searching in a article.[^1]
2. Added accordion style.[^2]
3. Changed readability on the home- and list-page.[^3]
4. Changed filter-style on list-page.[^4]
5. Added Privacy policy statement.[^5]
6. Providing helpers to all new functionalities (methods).[^6]
7. Added some components (WebNotification, SvgImport and FindNext).[^7]
8. Added typescript-check in dev (vue-tsc) and some type-declarations.[^8]
9. Added bloginote-copy-files-module as an local module.[^9]
10. Added pagefind-guide.[^10]
11. Added offline icons; nuxt-svgo.[^11]
12. Added Pwa. This is the first step on the way to Google Store.[^12]
13. Added Guide for using BubbleWrap. See assets/guide.[^13]
14. Added gtag.clients.ts to the plugins-folder.[^14]
15. Added Vercel Analytics (because this repo is auto-hosted on Vercel).[^15]
16. Added google.site-verification-file in public-folder.[^16]

## Install and setup
Download, clone 
Read the [release](https://github.com/lovkyndig/kirkepostille/releases)-notes for teaching to setup a repo. Notice that bubblewrap `update removes` all the files from the /app-"folder". Notice my guidelines in [Releases](https://github.com/lovkyndig/kirkepostille/releases) for publishing app on _Google App Store_.

## To do-list (personal notes)
- Add svg-image in header with text/guide to hear mp3-files with the preaches.
- Google Search Console
  - Fix the indexing problem (in google-search-console).
- Add dark-light-themetoggle.
- Maybe add Google Translate option (not auto-translate).

## License
[MIT](./LICENSE)

[^1]: The style and the button isn't good.
[^2]: Most of the accordion functions are from BlogiNote. 
  - style.css is added in assets-folder with style for the accordions.
  - All headers is collapsed and the Catalog (Table of contents) is closed on load, except;
  - The headers is not collapsed when using the search-functionality.
[^3]: The length of articles on the home- and list-page is reduced. Style is changed in PostCardItem (see scss), and .short-description is added in list-page and PostListItem.
[^4]: The Filter (on list-page) is closed on load on mobil-screen (<640px) and more. The Names of the Keywords on the list-page is removed (No need for a developers definitions).
[^5]: The subscribe-page is changed to privacy, and CopyContent-component is deleted. Privacy is mandatory for all Google Apps (and therefore needed in my apps).
  - privacy.txt.ts is added in server/routes-folder and privacy.txt is added to public-folder.
[^6]: All my helpers is located in plugin-folder.
[^7]: Se components/custom-catalog. Three new custom components: FindNext, WebNotification and SvgImport. CopyContent and IconCustom from BlogiNote is removed.
[^8]: types/index.d.ts is added with some necessary declarations, because;
  - vue-tsc is added and used on developing.
  - Some typescript-issues in some BlogiNote-files are fixed.
[^9]: I don't need a package for a simple file that can be saved in my module-folder.
[^10]: First run yarn generate and then run: 
  - npx -y pagefind --site .output/public --output-path public/_pagefind.
  - The rescriction from using pagefind-search on developing are removed.
[^11]: IconCustom-component is deleted and nuxt-svgo is used instead. All icons are downloaded and saved in assets/icons-folder. No need for the iconify-package. Svg-compoents is added because nuxt-svgo v2 has the name as tag-name, not as attribute.
[^12]: @vite-pwa/nuxt is added and the setup is done in nuxt.config.ts. NB! First host your site ([vercel](https://vercel.com/docs/deployments/git/vercel-for-github)). Se more in pkt 15 below.
[^13]: Bubblewrap has to be used to create the aab-package before uploading it to Google App Store.
  - Bubblewrap are installed Globally on the local mashine, for use on development, because;
  - I'm using bubblewrap in a subfolder under the root, because the bubblewrap are creating so many files that have to be keeped away from the github-repo-files.
  - Guide-folder with links and info about using bubblewrap is added inside the assets-folder.
  - bubblewrap-folder is added to .gitignore-file.
[^14]: .env holds the GTAG_ID.
[^15]: All public repos on github can be hosted on [vercel](https://vercel.com/docs/deployments/git/vercel-for-github) for free. Then you can use the analytics-functionality that follows the vercel-analytics-package.
[^16]: google.site-verification-file is necessary for indexing the pages in google-search-console.

Updated 11.10.2023