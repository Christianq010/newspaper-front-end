<template> 
    <!-- Top Videos Section -->
    <section class="tv-section">

        <!-- Tv section Title Box -->
        <div class="tv-section-title-box">
            <!-- TV section Title Flag -->
            <div class="tv-section-title-flag">
                <!-- TV section Title Text -->
                <h1 class="tv-section-title-text">TOP VIDEOS</h1>
                <!-- /end of TV section Title Text -->
            </div>
            <!-- /end of TV section Title Flag -->
        </div>
        <!-- /end of Tv section Title Box -->

        <!-- TV Content Box -->
        <div class="tv-section-content-box">
            <!-- TV Content Box Wrapper -->
            <div class="tv-box-wrapper">

                <!-- TV Content Box one -->
                <div class="tv-box-one" v-for="box in trendingvideos" v-bind:key="box.id">
                    <!-- TV content box img -->
                    <div class="tv-box-one-img-wrapper">
                        <img class="tv-box-one-img" v-bind:src="box.img" />
                    </div>
                    <!-- /end of TV content box img -->
                    <!-- TV content Details -->
                    <div class="tv-box-one-details">
                        <a class="tv-box-one-text-link">
                            <div class="tv-box-one-text">
                                {{box.title}}
                            </div>
                        </a>
                    </div>
                    <!-- /end of TV content Des -->
                </div>
                <!-- /end of TV Content Box one -->

            </div>
            <!-- /end of TV Content Box Wrapper -->
        </div>
        <!-- /end of TV Content Box -->

    </section>
    <!-- /end of Top Videos Section -->
</template>

<script>
export default {
    data: function() {
        return {
            trendingvideos: [
                {
                    title: "Why Dismissing Serena Williams’ Discrimination Claim Is So Problematic",
                    videoURL: "https://youtube.com/",
                    img: "https://img.huffingtonpost.com/asset/5b96dc51190000320e503d43.jpeg",
                    id: "01",
                    route: "/"
                },
                {
                    title: "Despite Boycotts, Nike Sales Soar After Adding Kaepernick To Its Ad Campaign",
                    videoURL: "https://youtube.com/",
                    img: "https://img.huffingtonpost.com/asset/5b9675ab190000440e503cbd.jpeg",
                    id: "02",
                    route: "/"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import "./../scss/main";

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .tv-section {
    grid-row: 27 / 29;
    grid-column: 1 / -1;
    margin: 1em 0;
    padding: 1em;
  }
  .tv-section-title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: #ffffff;
  }
  .tv-section-title-flag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    background: #333333;
    color: #ffffff;
    height: 2em;
  }
  .tv-section-title-text {
    padding: 0 15px;
    font-size: 1.0625rem;
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    letter-spacing: 0.12em;
    padding-top: 3px;
  }
  .tv-section-content-box {
  }
  .tv-section-content-box {
  }
  .tv-box-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 5px;
  }
  .tv-box-one {
    cursor: pointer;
  }
  .tv-box-one-img-wrapper {
  }
  .tv-box-one-img {
    width: 100%;
  }
  .tv-box-one-text-link {
  }
  .tv-box-one-text {
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    font-size: 1.275rem;
    line-height: 1.625rem;
  }
  .tv-box-two {
    cursor: pointer;
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .tv-section {
    grid-row: 21 / 24;
    grid-column: 2 / 11;
    margin: 3em 0 2.5em 0;
    padding: 0 1em 0 0;
  }
  .tv-section-title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: #ffffff;
  }
  .tv-section-title-flag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    background: #333333;
    color: #ffffff;
    height: 2em;
    width: 30%;
  }
  .tv-section-title-text {
    padding: 0 15px;
    font-size: 1.0625rem;
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    letter-spacing: 0.12em;
    padding-top: 3px;
  }
  .tv-section-content-box {
  }
  .tv-section-content-box {
  }
  .tv-box-wrapper {
    display: grid;
    grid-template-columns: 5fr 5fr;
    grid-template-rows: auto;
    grid-gap: 5px;
  }
  .tv-box-one {
    cursor: pointer;
  }
  .tv-box-one-img-wrapper {
  }
  .tv-box-one-img {
    width: 100%;
  }
  .tv-box-one-text-link:hover {
    text-decoration: underline;
  }
  .tv-box-one-text {
    font-family: "ProximaNovaBold", Arial, Geneva, sans-serif;
    font-size: 1.275rem;
    line-height: 1.625rem;
  }
  .tv-box-two {
    cursor: pointer;
  }
}
</style>
