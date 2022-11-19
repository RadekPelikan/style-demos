rm -r dist
npm run build
sed -i 's/crossorigin src="/crossorigin src="./g' ./dist/index.html 
sed -i 's/rel="stylesheet" href="/rel="stylesheet" href="./g' ./dist/index.html 
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main