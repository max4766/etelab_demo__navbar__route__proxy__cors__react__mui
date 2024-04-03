# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a demo web page(ETELAB) where navigation bar redirects to another page with `react-router-dom`.

Using this demo website, you can search information getting data from another server(localhost:8070) with `http-proxy-middleware`.

All UI components in this React SPA project are `MUI` components.

Here we need port 3000 as the demo website, 8070 as the server.

(port 8070 used to be used for an acutal web development project, ETELAB)

(can't provide you with the server source for port 8070 for now...)

## Getting Started

First, copy this project's URL and clone this project into your local with git :

```bash
git clone [project URL]
```

FYI, No need to make a new folder for this project. 

it is already packed in the folder with it's project name when you clone.

Then, recover packages. update node_modules with the command below :

```bash
npm install
```

Next, run the development server with one of the commands below (npm recommended) :

```bash
npm run dev
```

```bash
yarn dev
```

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Congratulations! you can now see the view of this project! 

## About the source

- `src/components/ContentReqAll.js` : when redirected to '/contentReqAll', shows search form and search result.

since it's impossible to make a full packet to get the data from the server, added extra values in handleSearch function.

uses `axios` to transfer and transmit data.

there are a few more functions here related to setting the packet and the datagrid. 

- `src/components/Header.js` : source that stands for top and side navigation and it has functions for them. 

uses usenavigate to redirect. 

- `src/App.js` : when redirected it shows the element of route tag.

- `src/setProxy.js` : this is required for CORS. since it gets data with proxy, 

the server enables you to get data from it.

## Goal

The goal of this project was `To set up route for redirection and proxy for data communication when using react`

Unlike Next.js, React doesn't provide you with ready-made features like auto route.

ofc it takes more time and effort to make an ecosystem for these features so it might be inconvenient.

It would be much more convenient if you use Next.js for this framework even provides SSR and DB connection as well.

Yet, Using React is way more faster than MVC web development that uses vanilla HTML, CSS, Javascript.

Also, you can seperate client and server side not even mentioning UI has no problems with blinking issues.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
