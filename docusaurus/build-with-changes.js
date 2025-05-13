const { execSync } = require('child_process');

// Get the list of changed files in the last commit
const changedFiles = execSync('git diff --name-only HEAD~1 HEAD').toString().split('\n').filter(Boolean);

// Directories to check
const watchDirs = ['mapping', 'analytics']; // Directories to track for changes

// Check if any of the changed files are in the watched directories
const shouldRebuild = changedFiles.some(file => watchDirs.some(dir => file.startsWith(dir)));

if (shouldRebuild) {
    console.log('Changes detected in watched directories, rebuilding...');
    
    // Change the working directory to where your Docusaurus project is located
    execSync('cd docusaurus/docusaurus && npm run build', { stdio: 'inherit' }); // Build the Docusaurus project
} else {
    console.log('No changes detected in watched directories, skipping build.');
}
