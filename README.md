# The Huffingtonpost Vue App

This project is a front-end app of the Huffingtonpost website (09/2018) built with [Vue JS](https://vuejs.org/).

## Usage

> A Vue.js project, built with the Vue CLI.
> This project was bootstrapped with [vue-cli](https://github.com/vuejs/vue-cli)

- Install SASS with `npm install -D sass-loader node-sass`

### Deployed

* Static HTML / CSS3 page deployed via [Surge](https://surge.sh/) at https://huff-post-demo.surge.sh/

* Live Vue JS build at http://huff-post-live.surge.sh/

## Instructions

### Build Setup

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn serve

# build for production with minification
yarn build
```

For a detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Note

> Tablet design has not been done yet.

> For server side rendering, always return the `index.html` file so dynamic routing on Vue will work as intended (see HTMl5 history mode on vue docs).

## Integrations (Headless API based CMS)
- Why should you use a headless CMS - https://prismic.io/headless-cms-intro

### StoryBlock
- Headless CMS for content publishing - https://www.storyblok.com/ 
- Integrating (https://www.storyblok.com/tp/add-a-headless-CMS-to-vuejs-in-5-minutes)

### Prismic
- Official Docs - https://prismic.io/docs

> Integrate Prismic so editors use the platform to upload content.
- Integrating with Vue - https://prismic.io/docs/vuejs/getting-started/integrating-with-existing-project
> Model Content structure
- https://prismic.io/concepts/content-modeling
> Model content for a blog post 
- https://prismic.io/concepts/content-modeling/blog-post

#### Resources

- Vue Awesome Icons - https://github.com/Justineo/vue-awesome
- Font-Awesome icon gallery - https://fontawesome.com/icons?d=gallery
- Vue directory structure - https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb
- Install SASS guide - https://medium.com/@mahesh.ks/using-sass-scss-in-vue-js-2-d472af0facf9
- SASS Architecture - https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization
- Burger Menu - https://github.com/mbj36/vue-burger-menu
- Looping through json data in Vue - https://stackoverflow.com/questions/45565349/how-to-acces-external-json-file-objects-in-vue-js-app
- Formatting JSON - https://stackoverflow.com/questions/15637429/how-to-escape-double-quotes-in-json
- Importing Nested JSON - https://www.sencha.com/forum/showthread.php?257706-Nested-JSON-is-there-a-straightforward-example-guide-anywhere
- HTML History mode - https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
- Passing props to components - https://www.youtube.com/watch?v=9qqFH60isFc

### Troubleshooting

- _[Solved]_ Vue-cli install error due to `ghost node restriction` - https://github.com/gilbarbara/react-joyride/issues/131
- _[Solved]_ Detached Head issue due to commits not checked out on a new branch - https://stackoverflow.com/questions/5772192/how-can-i-reconcile-detached-head-with-master-origin
