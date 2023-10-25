# Create Google App
Clone the repository or use it as a template. 
- Follow the [documentation](https://create-google-app.vercel.app)/ guidlines for install, setup and all you need to on Google Play.

You can `Get your app in the Google Pay Console in one (1) week`, if you read the documentation and [follow the guidlines](https://create-google-app.vercel.app). (I was working ten (10) weeks to reach this goal for my first app.)

## Futures
_100% Health Score_
1. 100% Health Score in [ahrefs website-checker]((https://ahrefs.com/website-checker):[^1]
![](https://raw.githubusercontent.com/lovkyndig/kirkepostille/main/public/webp/ahrefs-website-checker.webp)
2. Lighthouse report on Accessibility, Best Practices[^2], SEO and PWA[^3] (Progressive Web App):[^2]
![](https://raw.githubusercontent.com/lovkyndig/kirkepostille/main/public/webp/lighthouse-report.webp)

_Full search functionality_  

3. Full search functionality with use of [pagefind](https://pagefind.app/).[^3]  
4. window.find()-function is used to continue searching in a article.[^4]

_Style and icons_  

5. Accordion style.[^5]  
6. Home- and list-page with good readability for mobil and notebook.[^6]  
7. Offline icons; [nuxt-svgo](https://www.npmjs.com/package/nuxt-svgo).[^7]

_Helpers (functions/methods)_  

8. Providing helpers to all my functionalities (methods).[^8]  
9. WebNotification can be used in this package to send msg to the user.[^9]  
10. Typescript can be used in dev ([vue-tsc](https://www.npmjs.com/package/vue-tsc)).[^10]  
11. Created copy-files-module as an local module.[^11]

_Arrangement for PWA_  

12. Privacy policy statement.[^12]  
13. [@vite-pwa/nuxt](https://www.npmjs.com/package/@vite-pwa/nuxt): This is the first step on the way to Google Store.[^13]  
14. BubbleWrap guide. See assets/guide. Required to be read.[^14]  
15. Hosting on [Vercel](https://vercel.com/docs/deployments/git/vercel-for-github).[^15]

_Extra Futures_  

16. To get the caching to work in dev-mode, copy the files in sw-dev-dist from .nuxt-folder (manually) to the public-folder.[16]
17. [Vercel Analytics](https://vercel.com/analytics), can be used when hosted on vercel.[^17]  
18. Google-site-verification-file in public-folder.[^18]

## To do-list (plan)
### Priority'
- Check for indexing problem in [Google Search Console](https://search.google.com/search-console/about).
- Add the site to [Ahrefs website-checker](https://ahrefs.com/website-checker)
- Use [lighthouse](https://lighthouse-metrics.com/) to check performance, accessibility, beste practices, seo and pwa.
- Use Bubblewrap and add app to Google Play Console

### On available capacity
- Add [giscus](https://giscus.app/) - Follow this [tutorial](https://www.freecodecamp.org/news/github-discussions-as-chat-system/).
- Add dark-light-themetoggle.
- Maybe add Google Translate option (not auto-translate).

## License
[MIT](./LICENSE)

[^1]: Prov from 25.10.2023 - version 1.0.0-rc.66.
[^2]: About the errors: 
[^3]: The bundle that is used for searching is normally created on generate. If you are using .playground (and want to test it there), you can use this command to create the bundle: `- npx -y pagefind --site .output/public --output-path public/_pagefind`. - Maybe you need to change `--site .output/public` to `--site ../.output/public`.
[^4]: The style and the _find-next-btn_ isn't good, and you are welcome to do it better. See FindNext-component and the find-next.svg.
[^5]: Most of the accordion functions are from [BlogiNote](https://github.com/Benbinbin/BlogiNote). - style.css is added in assets-folder with style for the accordions. - All headers is collapsed and the Catalog (Table of contents) is closed on load, except; - The headers is not collapsed when using the search-functionality.
[^6]: The length of articles on the home- and list-page is reduced. Style is changed in PostCardItem (see scss), and .short-description is added in list-page and PostListItem.
[^7]: Nuxt-svgo is used for instead. All icons are downloaded and saved in assets/icons-folder. No need for the iconify-package. Svg-compoents is added because nuxt-svgo v2 has the name as tag-name, not as attribute.
[^8]: All my helpers is located in plugin-folder.
[^9]: If the notifications don't shows, changed the settings. Add the sites url in the `allow`-settings. - In Chrome: chrome://settings/content/notifications - In Edge: edge://settings/content/notifications
[^10]: Typescript-issues in my base theme ([BlogiNote](https://github.com/Benbinbin/BlogiNote))-files are fixed with types/index.d.ts
[^11]: Needs to be there because of [issues in nuxt-content](). The inspiration for the module is this [package](https://www.npmjs.com/package/bloginote-copy-files-module).
[^12]: Privacy is mandatory for all Google Apps (and therefore needed in my apps). - privacy.txt.ts is added in server/routes-folder and privacy.txt is added to public-folder.
[^13]: @vite-pwa/nuxt is added and the setup is done in nuxt.config.ts. NB! First host your site ([vercel](https://vercel.com/docs/deployments/git/vercel-for-github)). Se more in pkt 15 below.
[^14]: Bubblewrap has to be used to create the aab-package before uploading it to Google App Store. - Bubblewrap are installed Globally on the local mashine, for use on development, because; - I'm using bubblewrap in a subfolder under the root, because the bubblewrap are creating so many files that have to be keeped away from the github-repo-files. - Guide-folder with links and info about using bubblewrap is added inside the assets-folder. - bubblewrap-folder is added to .gitignore-file.
[^15]: All public repos on github can be hosted on [vercel](https://vercel.com/docs/deployments/git/vercel-for-github) for free.
[^16]: Planning to create a plugin that starts when the browser opens with the site, that copy the sw-files.
[^17]: Vercel Analytics don't use cookies and this app isn't using cookies at all, therefore it's not need for a plugin that pop up with a question if you accept cookies.
[^18]: google.site-verification-file is necessary for indexing the pages in [google-search-console](https://search.google.com/search-console/about), and for using [Ahrefs website-checker](https://ahrefs.com/website-checker).

Updated 25.10.2023