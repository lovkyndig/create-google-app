clear
@cls
@echo THIS BAT-FILE WILL COPY THE ICONS FROM THE node_modules/lovkyndig
@echo ---
@echo "nuxt-icons" don't have the options to set the base-directory in nuxt.config;
@echo That's the reson this have to be done manually.
@echo ---
@echo Touch a key to start the copy-process.
@echo ---
@pause
@echo off
:: Folders from assets and content - includes images in articles.
xcopy /s /i "node_modules/@lovkyndig/create-google-app/assets/icons" "assets/icons"
