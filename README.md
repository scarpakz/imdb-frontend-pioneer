# Setup
Before installing everything, this project requires ```npm v8.19.4```  and ```node v16.20.2```. Node Version Manager or NVM is recommended. See this [link](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) for installation instructions. I'm using Vite as my front-end tool.

# How to install
After downloading the required version of node and npm, it's time to install the project. In your terminal run the command ```nvm use 16``` and install the package dependencies using the command ```npm install```.

### Dependencies
```json
"dependencies": {
    "aos": "^2.3.4",
    "axios": "^1.7.9",
    "bootstrap": "^5.3.3",
    "react": "^18.2.0",
    "react-bootstrap": "^2.10.7",
    "react-dom": "^18.2.0",
    "react-router-dom": "^7.1.1"
},
"devDependencies": {
    "@types/aos": "^3.0.7",
    "@types/react": "^18.0.24",
    "@types/react-dom": "^18.0.8",
    "@vitejs/plugin-react": "^2.2.0",
    "typescript": "^4.6.4",
    "vite": "^3.2.3"
}
```
Run the program using the command ```npm run dev```. You will see the following:
```
  VITE v3.2.11  ready in 783 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```

# Stretch Goals

I implemented caching for responses using ```React.useState()``` and to trigger by using the code ```useEffect```. [Data AOS](https://michalsnik.github.io/aos/) was implemented for animation, transitions and Bootstrap for the whole UI including responsiveness of the app for mobile screens.

# Assumptions/Limitation

I'm supposed to add test but it will take time.