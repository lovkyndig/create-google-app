# Create Google App
Clone this repository and/or use it as a template for a website.
- The [documentation](https://create-google-app.vercel.app)/ guidelines shows how to install, setup and publish it on Google Play.

## Package
This repo can be downloaded or installed as a [package](https://github.com/lovkyndig?tab=packages&repo_name=create-google-app). I am using the package in [PWA Starter App](https://github.com/lovkyndig/pwa-starter-app), and all my other apps on Google Play.

## Futures
| 100% Healt Score | Lighthouse => 99.6% |
| --- | --- |
|![](https://raw.githubusercontent.com/lovkyndig/create-google-app/main/public/img/webp/ahrefs-website-checker.webp) |![](https://raw.githubusercontent.com/lovkyndig/create-google-app/main/public/img/webp/lighthouse-report.webp)|  

1. _100% Health Score_ with [ahrefs website-checker](https://ahrefs.com/website-checker):[^1]
2. 100% in _Accessibility_, _Best Practices_, _SEO_ and _PWA_ (Progressive Web App) on [Lighthouse-report](https://pagespeed.web.dev/). 98% on _Performance_. Total 99.6%.[^2]

_Full search functionality_  

3. Full search functionality with use of [pagefind](https://pagefind.app/).[^3]  
4. window.find()-function is used to continue searching in a article.[^4]

_Style and icons_  

5. Accordion style.[^5]  
6. Home- and list-page with good readability for mobil and notebook.[^6]  
7. Offline icons, [nuxt-svgo](https://www.npmjs.com/package/nuxt-svgo), so the app looks nice offline.[^7]

_Helpers (functions/methods)_  

8. Providing helpers to all my functionalities (methods).[^8]  
9. WebNotification can be used in this package to send msg to the user.[^9]  
10. Typescript checker in developer-mode ([vue-tsc](https://www.npmjs.com/package/vue-tsc)).[^10]  
11. Images in content is copied to public folder trough the _"copy-images-files"_-module. (Have to be done because of [an nuxt-content-issue](https://github.com/nuxt/content/issues/106#issuecomment-1002820342)).[^11]

_Arrangement for PWA_  

12. Privacy policy statement with route, ready to be used on Google App Store.[^12]  
13. [@vite-pwa/nuxt](https://www.npmjs.com/package/@vite-pwa/nuxt) is setting up the PWA. Manifest is loaded trough the settings in nuxt.config.[^13]  
14. BubbleWrap guide. See assets/guide. Required to be read.[^14]  
15. Hosting on [Vercel](https://vercel.com/docs/deployments/git/vercel-for-github).[^15]

_Extra Futures_  

16. To get the caching to work in dev-mode, copy the sw-files in _sw-dev-dist_ from ._nuxt_-folder (manually) to the _public_-folder.[16]
17. [Vercel Analytics](https://vercel.com/analytics), can be used when hosted on vercel.[^17]  
18. Verification of ownership with `google-site-verification`-file in _public_-folder, and code in `.env`-file.[^18]

## To do-list (plan)
### Priority'
- Create github-package of this repo.[^19]
- Create bundle with _Bubblewrap_ and add it to _Google Play Console_.

### On available capacity
- Add [giscus](https://giscus.app/) - Follow this [tutorial](https://www.freecodecamp.org/news/github-discussions-as-chat-system/).
- Add dark-light-themetoggle.
- Add a copy-module to copy rss.txt (and sistemap) to public, ref. [ahrefs](https://ahrefs.com/seo/glossary/sitemap).
- Maybe add [Google Translate](https://www.npmjs.com/package/@google-translate-select/vue3) option (not auto-translate).

## License
[MIT](./LICENSE)

[^1]: Prov from 02.11.2023 - version 1.0.1-rc.15.
[^2]: _((4 x 100)% + 98)%/5_ = **99.6%**.
[^3]: The bundle that is used for searching is normally created on generate. If you are using .playground (and want to test it there), you can use this command to create the bundle: `- npx -y pagefind --site .output/public --output-path public/_pagefind`. - Maybe you need to change `--site .output/public` to `--site ../.output/public`.
[^4]: The style and the _find-next-btn_ isn't good, and you are welcome to do it better. See FindNext-component and the find-next.svg.
[^5]: Most of the accordion functions are from [BlogiNote](https://github.com/Benbinbin/BlogiNote). - style.css is added in assets-folder with style for the accordions. - All headers is collapsed and the Catalog (Table of contents) is closed on load, except; - The headers is not collapsed when using the search-functionality.
[^6]: The length of articles on the home- and list-page is reduced. Style is changed in PostCardItem (see scss), and .short-description is added in list-page and PostListItem.
[^7]: _Nuxt-svgo_ is used for instead. All icons are downloaded and saved in assets/icons-folder. Two svg-compoents is added because _nuxt-svgo_ v2 has the name as a _tag_-name, not om a _attribute_.
[^8]: Most of my functions and methods are located in plugin-folder as helpers.
[^9]: If the notifications don't shows, changed the settings. Add the sites url in the `allow`-settings. - In Chrome: chrome://settings/content/notifications - In Edge: edge://settings/content/notifications
[^10]: Typescript-issues in my base theme ([BlogiNote](https://github.com/Benbinbin/BlogiNote))-files are fixed and javascript is converted to typescript.
[^11]: Needs to be there because of [issues in nuxt-content](). The inspiration for the module is this [package](https://www.npmjs.com/package/bloginote-copy-files-module).
[^12]: Privacy is mandatory for all Google Apps (and therefore needed in my apps). - privacy.txt.ts is added in server/routes-folder, and privacy.txt is added to public-folder.
[^13]: PWA is the first step on the way to Google Store. Remember to host your site ([vercel](https://vercel.com/docs/deployments/git/vercel-for-github)). Se more in pkt 15 below.
[^14]: Bubblewrap has to be used to create the aab-package before uploading it to Google App Store. - Bubblewrap are installed Globally on the local mashine, for use on development, because; - I'm using bubblewrap in a subfolder under the root, because the bubblewrap are creating so many files that have to be keeped away from the github-repo-files. - Guide-folder with links and info about using bubblewrap is added inside the assets-folder. - bubblewrap-folder is added to .gitignore-file. [Read more](https://create-google-app.vercel.app/article/create-and-upload/create-app/bubblewrap).
[^15]: All public repos on github can be hosted on [vercel](https://vercel.com/docs/deployments/git/vercel-for-github) for free.
[^16]: Planning to create a plugin that to this (copy-job) when the site opens in the browser.
[^17]: Vercel Analytics don't use cookies and this app isn't using cookies at all, therefore it's not need for a plugin that pop up with a question if you accept cookies. See the [doc](https://create-google-app.vercel.app/article/setup-and-deploy/deploy/verification-and-analytics).
[^18]: _google.site-verification_-file ([or code](https://create-google-app.vercel.app/article/setup-and-deploy/deploy/verification-and-analytics)) is necessary for indexing the pages in [google-search-console](https://search.google.com/search-console/about), before [Ahrefs website-checker](https://ahrefs.com/website-checker) can be used. [Read more](https://create-google-app.vercel.app/article/setup-and-deploy/deploy/verification-and-analytics).
[^19]: Creating `GitHub-Package` of this repo and using it in `layer2`, my new _PWA Starter App_. Package v1.0.0 isn't ok. v1.0.0-rc.6 is.

Updated 02.11.2023