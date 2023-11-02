clear
@cls
@echo THIS BAT-FILE WILL COPY FILES (rss and sitemap) FROM .output\public to public\
@echo ---
@echo If you don't want to do it, hit "Ctrl C"
@pause
@echo off
:: xcopy /s /i "./nuxt/dev-sw-dist" "public"
copy .output\public\rss.xml public\
copy .output\public\sitemap.xml public\