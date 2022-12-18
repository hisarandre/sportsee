# SportSee

![Author](https://img.shields.io/badge/Author-hisarandre-")
![GitHub repo size](https://img.shields.io/github/repo-size/hisarandre/SportSee)  
![GitHub top language](https://img.shields.io/github/languages/top/hisarandre/SportSee)
![GitHub language count](https://img.shields.io/github/languages/count/hisarandre/SportSee)

## Frontend

### General information

This repo contains all the source code to run the application of the sports analytics dashboard SportSee.

### Prerequisites

- A text editor`
- [Node.js < v.16](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

### Project setup

- Clone the repo on your computer.

```bash
git clone https://github.com/hisarandre/sportsee
```

- Package installations after cloning.

```bash
# with NPM
npm install
# with Yarn
yarn
```

- Start the application

```bash
npm run start
# with Yarn
yarn start
```

### Added dependencies

    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/prop-types": "^15.7.5",
    "jsdoc": "^4.0.0",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.3",
    "react-scripts": "5.0.1",
    "recharts": "^2.1.16",
    "sass": "^1.56.1",
    "web-vitals": "^2.1.4"

You can generate jsdoc after cloning.

```bash
npm run doc
# with Yarn
yarn doc
```

## Backend

[Repository du backend](https://github.com/hisarandre/sportsee/tree/master/sportsee-back)

## N.B:

SportSee API only contains data for users with id 12 and 18.

- http://localhost:3001/user/18
- http://localhost:3001/user/12
