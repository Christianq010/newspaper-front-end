<template>
    <div id="app">
        <navbar />
        
        <top-videos />
        <trending-column />
        <in-the-news />
        <footer-section />
    </div>
</template>

<script>
// Navigation Bar
import Navbar from "./../components/Navbar/Navbar";

import TopVideos from "./../components/TopVideos";
import TrendingColumn from "./../components/Trending";
import InTheNews from "./../components/InTheNews";

// Footer
import FooterSection from "./../components/Footer";

export default {
name: "categorypage",
  components: {
    Navbar,
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
    grid-auto-rows: auto;
    grid-auto-flow: dense;
  }
}
</style>
