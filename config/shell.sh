npm init -y
npm i typescript
npx tsc --init
npm i express

npm i nodemon -D
npm i @types/express -D
npm i concurrently -D
npx tsc ./src/app.ts --target es6 --outfile ./js/app.js -w

# https://swapi.dev/
