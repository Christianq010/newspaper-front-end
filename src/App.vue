<template>
  <div id="app">
    <navbar />
    <main-story />
    <top-stories />
    <zone-center />
    <latest-news />
    <news-big />
    <news-card-one />
    <news-card-two />
    <opinion-column />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
import MainStory from "./components/MainStory";
import TopStories from "./components/Topstories";
import ZoneCenter from "./components/ZoneCenter";
import LatestNews from "./components/LatestNews";
import NewsBig from "./components/Elections/NewsBig";
import NewsCardOne from "./components/Elections/NewsCardOne";
import NewsCardTwo from "./components/Elections/NewsCardTwo";
import OpinionColumn from "./components/Opinion";

export default {
  name: "app",
  components: {
    Navbar,
    MainStory,
    TopStories,
    ZoneCenter,
    LatestNews,
    NewsBig,
    NewsCardOne,
    NewsCardTwo,
    OpinionColumn
  }
};
</script>

<style>
/* Import Fonts */
@charset "UTF-8";

@font-face {
  font-family: ProximaNovaregular;
  src: url("./assets/font/MARK\ SIMONSON\ -\ PROXIMA\ NOVA\ REGULAR.OTF")
    format("opentype");
}

@font-face {
  font-family: ProximaNovaLight;
  src: url("./assets/font/MARK\ SIMONSON\ -\ PROXIMA\ NOVA\ LIGHT.OTF")
    format("opentype");
}

@font-face {
  font-family: ProximaNovaBold;
  font-weight: bold;
  src: url("./assets/font/MARK\ SIMONSON\ -\ PROXIMA\ NOVA\ BOLD.OTF")
    format("opentype");
}

/* Global styles */
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
a:hover {
  cursor: pointer;
}
body {
  font-family: "ProximaNovaregular", Arial, Geneva, sans-serif;
  margin: 0px;
  padding: 0px;
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  /* Our  Main Container */
  #app {
    height: auto;
    display: grid;
  }
}
/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  #app {
    height: auto;
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 25%;
    grid-auto-flow: dense;
  }
}
</style>
