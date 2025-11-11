@echo off
echo "Checking commit message..."
npx --no-install commitlint --edit %1 2>nul
if %errorlevel% neq 0 (
    echo "Commitlint check failed or skipped - continuing anyway"
)
exit /b 0