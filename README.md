# github.io build
1. npm i gh-pages
2. build from project 
 - npm run build 
3. package.json 
 - "homepage": "https://holykhd.github.io/movie_app/"
 - add script : "deploy": "gh-pages -d build", 
 - add script : "predeploy": "npm run build"

4. npm run deploy