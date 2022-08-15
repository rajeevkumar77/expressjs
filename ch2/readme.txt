For Production:
  "scripts": {
    "build": "babel index.js --out-dir prd",
    "start": "npm run build && nodemon prd/index.js",
    "serve": "node prd/index.js"
  },

For Development:
  "scripts": {
    "start": "babel index.js -w --out-dir prd",
    "dev-serve": "nodemon prd/index.js"
  },

For Development - Complie Directory
  "scripts": {
    "start": "babel src -w --out-dir prd",
    "dev-serve": "nodemon prd/index.js"
  },
