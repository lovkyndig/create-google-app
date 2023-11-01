clear
@cls
@echo THIS BAT-FILE WILL COPY CONTENT FROM .playground TO THE ROOT-DIRECTORY
@echo ---
@echo If you don't want to do it, hit "Ctrl C"
@pause
@setlocal enableextensions enabledelayedexpansion
@echo off
xcopy /s /i "content" "../content"
endlocal