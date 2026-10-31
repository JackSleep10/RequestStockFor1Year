const git = require('C:/Users/acklo/.gemini/antigravity/brain/e8680b5e-b29c-4939-9026-d65f7a50ffa2/scratch/node_modules/isomorphic-git');
const http = require('C:/Users/acklo/.gemini/antigravity/brain/e8680b5e-b29c-4939-9026-d65f7a50ffa2/scratch/node_modules/isomorphic-git/http/node');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const token = process.argv[2] || process.env.GITHUB_TOKEN;

if (!token) {
  console.log('Usage: node push_to_github.js <YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>');
  console.log('Example: node push_to_github.js ghp_xxxxxxxxxxxxxxxxxxxx');
  process.exit(1);
}

async function push() {
  console.log('Pushing to https://github.com/JackSleep10/RequestStockFor1Year.git ...');
  const res = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    onAuth: () => ({ username: token })
  });
  console.log('✅ Push Success:', res);
}

push().catch(err => {
  console.error('❌ Push Failed:', err.message);
  process.exit(1);
});

