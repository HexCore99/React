@echo off
echo ============================================
echo   NVIDIA Cache & Installer Cleanup Utility
echo ============================================
echo.

net stop nvcontainer >nul 2>&1

echo Cleaning OTA artifacts...
rd /s /q "C:\ProgramData\NVIDIA Corporation\NVIDIA App\UpdateFramework\ota-artifacts"
echo Cleaning post-processing cache...
rd /s /q "C:\ProgramData\NVIDIA Corporation\NVIDIA App\UpdateFramework\post-processing"
echo Cleaning Downloader cache...
rd /s /q "C:\ProgramData\NVIDIA Corporation\Downloader"
echo Cleaning NV_Cache...
rd /s /q "C:\ProgramData\NVIDIA Corporation\NV_Cache"
echo Cleaning DXCache...
rd /s /q "%LocalAppData%\NVIDIA\DXCache"
net start nvcontainer >nul 2>&1

echo.
echo Cleanup completed successfully!
pause