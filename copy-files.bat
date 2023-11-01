clear
@cls
@echo THIS BAT-FILE WILL COPY FILES FROM .output\public to public\
@echo ---
@echo If you don't want to do it, hit "Ctrl C"
@pause
@echo off
xcopy .nuxt\dev-sw-dist\sw.js public\
xcopy .nuxt\dev-sw-dist\sw.js.map public\
xcopy .nuxt\dev-sw-dist\workbox-ad213f2f.js public\
xcopy .nuxt\dev-sw-dist\workbox-ad213f2f.js.map public\
xcopy .output\public\rss.xml public\
xcopy .output\public\sitemap.xml public\