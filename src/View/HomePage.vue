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
        <top-videos />
        <trending-column />
        <in-the-news />
        <footer-section />
    </div>
</template>

<script>
// Navigation Bar
import Navbar from "./../components/Navbar/Navbar";
import MainStory from "./../components/MainStory";
import TopStories from "./../components/Topstories";
import ZoneCenter from "./../components/ZoneCenter";
import LatestNews from "./../components/LatestNews";
import NewsBig from "./../components/Elections/NewsBig";
import NewsCardOne from "./../components/Elections/NewsCardOne";
import NewsCardTwo from "./../components/Elections/NewsCardTwo";
import OpinionColumn from "./../components/Opinion";
import TopVideos from "./../components/TopVideos";
import TrendingColumn from "./../components/Trending";
import InTheNews from "./../components/InTheNews";
// Footer Section
import FooterSection from "./../components/Footer";

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
    OpinionColumn,
    TopVideos,
    TrendingColumn,
    InTheNews,
    FooterSection
  }
}
</script>

<style scoped>
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
