# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a demo web page(ETELAB) where navigation bar redirects to another page with `react-router`.

Using this demo website, you can search information getting data from another server with `http-proxy-middleware`.

All UI components in this React SPA project are `MUI` components.

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

- `src/app/layout.tsx` : 
    
    all page's fixed layout. in this project's case, 

    it's a top navigation bar which redirects you to other pages.

- `src/app/page.tsx` : It's colored in GREY. main page which you can see as you first load the page. 

- `src/app/testRequestManage/page.tsx` : a RED page if you click the first tab, 시험의뢰관리

- `src/app/sampleManage/page.tsx` : an ORANGE page if you click the second tab, 샘플관리

- `src/app/nonConformanceReportManage/page.tsx` : a YELLOW page if you click the third tab, 부적합관리

- `src/app/specManage/page.tsx` : a GREEN page if you click the fourth tab, SPEC관리

- `src/app/noticeBoard/page.tsx` : a BLUE page if you click the fifth tab, 게시판

- `src/app/systemManage/page.tsx` : a DARK BLUE page if you click the sixth tab, 시스템관리

- `src/app/systemSetting/page.tsx` : a PURPLE page if you click the last tab, 시스템설정

and there are svg and png files in public folder's directory.

and some other files that are related to configuration and settings...

(frankly, those are not critical here)

The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

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
