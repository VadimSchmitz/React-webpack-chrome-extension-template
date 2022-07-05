# Initial chrome browser extension setup 
This repository is meant for people who want to quickly start with a bare bones React and Webpack setup to start creating a Chrome extension.

The software used are
- React
- webpack

---
## Development setup
Download npm packages
``` 
npm install
```

Start development environment
```
npm run dev
```

## Setting up the Chrome extension
1. Within Chrome go to [chrome://extensions/]()
2. Click the Load unpacked button and select the dist folder that is created by Webpack.

### debugging
To easily debug the extension go to the following page: [chrome-extension://{ID-of-your-extension}/App.html]() 
<br>
Replace the ID-of-your-extension to your ID

---
## Build for production
```
npm run build
```


