clear
@cls
@echo THIS BAT-FILE HELP YOU WITH CREATING THE BUBBLEWRAP-BUNDLE (THE APP)
@echo ---
@echo (1) Make sure you have updated the "manifest.webmanifest" with all the new info about your app.
@echo (2) Make sure you have updated the "pwa"-folders in "public"-folder, with your own icons & images.
@echo ---
@echo REMEMBER WHEN THIS SCRIPT IS FINISHED TO WRITE THIS COMMANDs:
@echo :
@echo cd bubblewrap
@echo bubblewrap build
@echo ---
@setlocal enableextensions enabledelayedexpansion
@echo off
echo - What is the name of this folder (the repo-name)?
set /p input= Ex: my-repo-name: 
set variable=%input%
:: echo !variable!
md bubblewrap
bubblewrap init --manifest="https://%input%.vercel.app/manifest.webmanifest" --directory="bubblewrap"
endlocal